import React, { useEffect } from 'react';
import { navigate } from 'gatsby';

import { Seo } from '@/components/atoms';

import { isBrowser } from '@/utils';

function IndexPage(): JSX.Element {
  useEffect(() => {
    navigate(`/accueil` || ``);
  }, []);

  return <></>;
}

export default IndexPage;

export function Head() {
  const currentHref = isBrowser ? location.href : undefined;

  return (
    <Seo>
      <link rel="alternate" href={currentHref} hrefLang="x-default" />
    </Seo>
  );
}
