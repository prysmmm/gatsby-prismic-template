import { Maybe } from '@/types';

interface UseSeoPageInput {
  link?: string;
  lang?: Maybe<string>;
  uid?: Maybe<string>;
  type?: Maybe<string>;
}

interface UseSeoDataInput {
  seo_title?: Maybe<string>;
  seo_description?: Maybe<string>;
}

interface UseSeoInput<D> extends UseSeoPageInput {
  alternate_languages: UseSeoPageInput[];
  data?: D;
}

interface UseSeoCustomInput {
  title?: Maybe<string>;
  description?: Maybe<string>;
}

export const useSeo = <I extends UseSeoInput<D>, D extends UseSeoDataInput>(
  page: I[`data`] extends D ? I : UseSeoInput<any>,
  custom?: UseSeoCustomInput
) => {
  const title = custom?.title || page.data?.seo_title;
  const description = custom?.description || page.data?.seo_description;

  return { title, description };
};
