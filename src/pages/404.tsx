import React from 'react';
import { PageProps } from 'gatsby';

import { Heading } from '@/components/atoms';

export interface ErrorData {}

export interface Props extends PageProps<ErrorData> {}

function Error(): JSX.Element {
  return <Heading variant="h1">"Erreur 404"</Heading>;
}

export default Error;
