import { Maybe } from '@/types';

type LinkEntityType =
  | `help_category`
  | `login_page`
  | `orders_page`
  | `password_forgotten_page`
  | `create_account_page`
  | `activate_account_page`
  | `product`
  | `search_page`
  | `subscriptions_page`
  | `blog_page`
  | `blog_category`
  | `blog_sub_category`
  | `blog_post`;

export interface CreateLinkInput {
  lang?: Maybe<string>;
  type?: LinkEntityType | Maybe<string>;
  uid?: Maybe<string>;
  label?: Maybe<string>;
  data?: {
    title?: Maybe<string>;
  };
}

export const createLinkPath = (params: (string | undefined)[]) => {
  return params.reduce<string>(
    (acc, param) => acc + (param ? `/${param}` : ``),
    ``
  );
};
