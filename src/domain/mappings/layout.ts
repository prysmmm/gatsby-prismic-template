import { _Layout, _LayoutData } from '@/domain/entities';

import { createLinkPath } from '@/utils';

export const toLayout = (data: _LayoutData): _Layout => ({
  homeLink: {
    label: data.homePage?.data.title || ``,
    path: createLinkPath([data.homePage?.uid]),
  },
});
