import { _Link, GatsbyPrismicHomePage } from '@/domain/entities';

export interface _Layout {}

export interface _Layout {
  homeLink: _Link;
}

export interface _LayoutData {
  homePage?: GatsbyPrismicHomePage;
}
