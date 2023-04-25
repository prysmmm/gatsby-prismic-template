import 'dayjs/locale/fr';
import 'dayjs/locale/nl';
import 'swiper/css';

import { initI18n } from '@/config';

import { WrapPageElement } from '@/components/molecules';

(async function () {
  await initI18n.init();
})();

export const wrapPageElement = WrapPageElement;
