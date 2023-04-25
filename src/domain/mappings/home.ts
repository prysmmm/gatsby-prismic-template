import { _HomePage, GatsbyPrismicHomePage } from '@/domain/entities';

export const toHomePage = (homePage?: GatsbyPrismicHomePage): _HomePage => ({
  hero: {
    heading: homePage?.data.title || ``,
  },
});
