import { createColorPalette } from '@microsoft/fast-components-styles-msft';
import { ColorRGBA64 } from '@microsoft/fast-colors';
import { FluentDesignSystemProvider } from '../design-system-provider';
import PeoplePickerTemplate from './fixtures/people-picker.html';
import { FluentPeoplePicker } from './';

// Prevent tree-shaking
FluentPeoplePicker;
FluentDesignSystemProvider;

export default {
  title: 'People Picker',
};

export const PeoplePicker = (): string => PeoplePickerTemplate;

document.addEventListener('readystatechange', e => {
  if (document.readyState === 'complete') {
    const red = document.getElementById('red') as FluentDesignSystemProvider;
    red.neutralPalette = createColorPalette(new ColorRGBA64(1, 0, 0));
  }
});
