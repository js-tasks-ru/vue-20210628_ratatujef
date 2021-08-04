import { defineComponent } from './vendor/vue.esm-browser.js';

export default defineComponent({
  name: 'MeetupCover',
  props: {
    image: String,
    title: String,
  },
  computed: {
    background() {
      return `--bg-url: url(${this.image || 'https://course-vue.javascript.ru/api/images/2'})`;
    },
  },
  template: `
    <div class="meetup-cover" :style="background">
        <h1 v-if='title' class="meetup-cover__title">{{title}}</h1>
    </div>`,
});
