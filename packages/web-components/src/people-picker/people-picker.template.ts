import { html } from '@microsoft/fast-element';
import { PeoplePicker } from './people-picker';

/**
 * The template for the people picker component.
 * @public
 */
export const PeoplePickerTemplate = html<PeoplePicker>`
  <template>
    <div>
      <slot></slot>
    </div>
  </template>
`;
