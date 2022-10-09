import BaseSearchBox from '@/components/global/BaseSearchBox.vue';
import BaseImageInput from '@/components/global/BaseImageInput.vue';
import BaseModal from '@/components/global/BaseModal.vue';
import BaseFormattedDate from '@/components/global/BaseFormattedDate.vue';
import BasePagination from '@/components/global/BasePagination.vue';
import BaseProgressBar from '@/components/global/BaseProgressBar.vue';

export default {
  install(app) {
    app.component('base-search-box', BaseSearchBox);
    app.component('base-image-input', BaseImageInput);
    app.component('base-modal', BaseModal);
    app.component('base-formatted-date', BaseFormattedDate);
    app.component('base-pagination', BasePagination);
    app.component('base-progress-bar', BaseProgressBar);
  },
};
