<template lang="pug">
v-row.contact-info
  v-col(v-for='(item, i) of info', :key='i')
    v-card.fill-height.shadow-md
      v-card-title {{ item.title }}
      v-divider(inset)
      v-list-item
        v-list-item-icon
          v-avatar.rounded(style='background-color: var(--stop-color-one)')
            v-icon(dark, v-text='item.icon', size='32')
        v-list-item-content
          v-list-item-title(
            v-clipboard='item.content',
            v-text='item.content',
            @click='copyToClipboard'
          )
          v-list-item-subtitle(
            v-clipboard='item.note',
            v-text='item.note',
            @click='copyToClipboard'
          )
</template>

<script>
import { mdiSkype } from '@mdi/js'

export default {
  name: 'Info',
  props: {
    info: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      mdiSkype,
    }
  },
  methods: {
    copyToClipboard() {
      const copyContactLocale = () => {
        if (this.$i18n.locale === 'de') {
          return {
            group: 'copy-to-clipboard',
            type: 'success',
            title: 'Kopiert',
            text: 'In die Zwischenablage kopiert.',
          }
        } else if (this.$i18n.locale === 'en') {
          return {
            group: 'copy-to-clipboard',
            type: 'success',
            title: 'Copied',
            text: 'Copied to clipboard.',
          }
        }
      }
      this.$notify(copyContactLocale())
    },
  },
}
</script>
