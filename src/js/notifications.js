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
};
function notFound() {
  error({
    text: 'Not Found. Please enter a more correct query!'
  })
};
export default {errorMesg, notFound}