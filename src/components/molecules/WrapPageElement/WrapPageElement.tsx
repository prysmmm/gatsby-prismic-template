import React from 'react';
import { GatsbyBrowser } from 'gatsby';
import { RecoilRoot } from 'recoil';
import { AnalyticsProvider } from 'use-analytics';
import { ParallaxProvider } from 'react-scroll-parallax';

import { Fonts, Location, Router, Shopify } from '@/components/atoms';

import { analytics } from '@/tracking';

export const WrapPageElement: GatsbyBrowser[`wrapPageElement`] = ({
  element,
}) => {
  return (
    <AnalyticsProvider instance={analytics}>
      <RecoilRoot>
        <Fonts />
        <Location />
        <Router />
        <Shopify />
        <ParallaxProvider>{element}</ParallaxProvider>
      </RecoilRoot>
    </AnalyticsProvider>
  );
};
