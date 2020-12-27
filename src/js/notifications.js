import { error } from '@pnotify/core/dist/PNotify.js';
import '@pnotify/core/dist/BrightTheme.css';
import { defaults } from '@pnotify/core';
defaults.sticker = false;
defaults.closer = false;
defaults.delay = 1000;

function errorMesg() {
    error({
    text: 'Too many matches found. Please enter a more speific query!'
  });
}
export default {errorMesg}