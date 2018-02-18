/* eslint-disable react/react-in-jsx-scope */

import { storiesOf } from '@storybook/vue';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import toDoList from '../components/toDoList.vue';
import Welcome from './Welcome.vue';
import Vuex from 'vuex';

storiesOf('Welcome', module).add('to Storybook', () => ({
  components: { Welcome },
  template: '<welcome :showApp="action" />',
  methods: { action: linkTo('Button') },
}));

storiesOf('toDoList', module)
  .add('with text', () => ({
    components: { toDoList },
    template: '<toDoList/>',
    store: new Vuex.Store({
      state : {
        toDos :[{text:'ToDo'}]
      }
    })

  }))


/* eslint-enable react/react-in-jsx-scope */
