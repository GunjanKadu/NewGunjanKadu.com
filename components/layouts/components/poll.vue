<template lang="pug">
v-card.poll(color='purple')
  v-card-title.justify-center.white--text {{ $t("poll.title") }}
  v-card-subtitle.purple--text.text--lighten-4 {{ $t("poll.message") }}
  v-dialog(v-if='!miniVariant', v-model='dialog', width='500')
    template(#activator='{ on: poll }')
      v-btn(block, text, dark, v-on='poll') {{ $t("poll.btn") }}

    v-card.rounded-lg(tile, height='90vh')
      iframe(
        src='https://docs.google.com/forms/d/e/1FAIpQLSfSfj38hjy09fhuqRF-W85oCaqV-dqMbwBAbEyFSsvXM_S9GA/viewform?embedded=true',
        width='100%',
        height='100%',
        frameborder='0',
        marginheight='0',
        marginwidth='0'
      )
</template>

<script>
export default {
  name: 'Poll',
  props: {
    miniVariant: {
      type: Boolean,
      default: false,
    },
  },
  data: () => ({
    dialog: false,
  }),
}
</script>
