import BaseImageInput from '@/components/global/BaseImageInput.vue';
import BaseFormattedDate from '@/components/global/BaseFormattedDate.vue';

export default {
  install(app) {
    app.component('base-image-input', BaseImageInput);
    app.component('base-formatted-date', BaseFormattedDate);
  },
};
