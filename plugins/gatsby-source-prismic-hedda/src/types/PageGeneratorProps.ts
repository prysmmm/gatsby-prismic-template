import { Actions } from 'gatsby';

export type GraphQLFn = <TData = any, TVariables = any>(
  query: string,
  variables?: TVariables
) => Promise<{
  errors?: any;
  data?: TData;
}>;

export interface PageGeneratorProps {
  createPage: Actions[`createPage`];
  createRedirect: Actions[`createRedirect`];
  graphql: GraphQLFn;
  pageFolder: string;
}
