<script setup lang="ts">
const props = defineProps<{
  open: boolean
  media: IMedia[]
  initialIndex: number
}>()

const emit = defineEmits<{
  'update:open': [boolean]
}>()

const currentIndex = ref(props.initialIndex)

watch(
  () => props.initialIndex,
  (value) => {
    currentIndex.value = value
  },
)

const currentMedia = computed(
  () => props.media[currentIndex.value],
)

function close() {
  emit('update:open', false)
}

function next() {
  currentIndex.value
    = (currentIndex.value + 1) % props.media.length
}

function previous() {
  currentIndex.value
    = (currentIndex.value - 1 + props.media.length)
      % props.media.length
}

function handleKeydown(event: KeyboardEvent) {
  if (!props.open)
    return

  switch (event.key) {
    case 'Escape':
      close()
      break
    case 'ArrowRight':
      next()
      break
    case 'ArrowLeft':
      previous()
      break
  }
}

onMounted(() => {
  window.addEventListener('keydown', handleKeydown)
})

onUnmounted(() => {
  window.removeEventListener('keydown', handleKeydown)
})
</script>

<template>
  <Teleport to="body">
    <div
      v-if="open"
      class="viewer"
      @click.self="close"
    >
      <button class="close" @click="close">
        ✕
      </button>

      <button class="prev" @click="previous">
        ←
      </button>

      <div v-if="currentMedia" class="content">
        <NuxtImg
          v-if="currentMedia.type === 'image'"
          :src="currentMedia.src"
          :alt="currentMedia.alt"
          sizes="sm:100vw lg:1280px"
        />
        <video
          v-else-if="currentMedia.type === 'video'"
          :src="currentMedia.src"
          :muted="currentMedia.muted"
        />
        <iframe
          v-else-if="currentMedia.type === 'youtube'"
          :src="currentMedia.src"
          title="YouTube video player"
          frameborder="0"
          allow="picture-in-picture"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
        />
      </div>

      <button class="next" @click="next">
        →
      </button>
    </div>
  </Teleport>
</template>

<style scoped>
.viewer {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.95);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;
}

.content img,
.content video {
  max-width: 90vw;
  max-height: 90vh;
}

.content iframe {
  width: min(90vw, 160vh);
  aspect-ratio: 16 / 9;
  height: auto;
}

.close,
.prev,
.next {
  position: absolute;
  color: white;
  background: transparent;
  border: none;
  font-size: 2rem;
  cursor: pointer;
}

.close {
  top: 20px;
  right: 20px;
}

.prev {
  left: 20px;
}

.next {
  right: 20px;
}
</style>
