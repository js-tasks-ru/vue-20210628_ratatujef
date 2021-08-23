import { defineComponent } from './vendor/vue.esm-browser.js';
import { agendaItemIcons, agendaItemDefaultTitles } from './meetupService.js';

export default defineComponent({
  name: 'MeetupAgendaItem',
  props: {
    agendaItem: Object,
  },
  computed: {
    icon() {
      return `/assets/icons/icon-${agendaItemIcons[this.agendaItem.type]}.svg`;
    },
    time() {
      return `${this.agendaItem.startsAt} - ${this.agendaItem.endsAt}`;
    },
    title() {
      return `${this.agendaItem.title || agendaItemDefaultTitles[this.agendaItem.type]}`;
    },
  },
  template: `
    <div class="agenda-item">
      <div class="agenda-item__col">
        <img :src="icon" class="icon" alt="key" />
      </div>
      <div class="agenda-item__col">{{time}}</div>
      <div class="agenda-item__col">
        <h3 class="agenda-item__title">{{title}}</h3>
        <p v-if="agendaItem.type==='talk'" class="agenda-item__talk">
          <span>{{agendaItem.speaker}}</span>
          <span class="agenda-item__dot"></span>
          <span class="agenda-item__lang">{{agendaItem.language}}</span>
        </p>
        <p v-if="agendaItem.description">{{agendaItem.description}}</p>
      </div>
    </div>`,
});
