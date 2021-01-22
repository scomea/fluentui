import { attr, customElement, DOM } from '@microsoft/fast-element';
import { PeoplePickerTemplate as template } from './people-picker.template';
import { PeoplePicker } from './people-picker';
import { PeoplePickerStyles as styles } from './people-picker.styles';

/**
 * Prototype people picker
 *
 *
 * @public
 * @remarks
 * HTML Element: \<fluent-people-picker\>
 */
@customElement({
  name: 'fluent-people-picker',
  template,
  styles,
  shadowOptions: {
    mode: 'closed',
  },
})
export class FluentPeoplePicker extends PeoplePicker {}

/**
 * Styles for People Picker
 * @public
 */
export const PeoplePickerStyles = styles;
