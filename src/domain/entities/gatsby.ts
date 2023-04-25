// @ts-nocheck
/* eslint-disable */
import { gql } from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  Date: any;
  GatsbyImageData: any;
  JSON: any;
  PrismicStructuredText: any;
};

export type GatsbyAvifOptions = {
  lossless?: InputMaybe<Scalars['Boolean']>;
  quality?: InputMaybe<Scalars['Int']>;
  speed?: InputMaybe<Scalars['Int']>;
};

export type GatsbyBlurredOptions = {
  /** Force the output format for the low-res preview. Default is to use the same format as the input. You should rarely need to change this */
  toFormat?: InputMaybe<GatsbyImageFormat>;
  /** Width of the generated low-res preview. Default is 20px */
  width?: InputMaybe<Scalars['Int']>;
};

export type GatsbyBooleanQueryOperatorInput = {
  eq?: InputMaybe<Scalars['Boolean']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Boolean']>>>;
  ne?: InputMaybe<Scalars['Boolean']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['Boolean']>>>;
};

export type GatsbyDateQueryOperatorInput = {
  eq?: InputMaybe<Scalars['Date']>;
  gt?: InputMaybe<Scalars['Date']>;
  gte?: InputMaybe<Scalars['Date']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Date']>>>;
  lt?: InputMaybe<Scalars['Date']>;
  lte?: InputMaybe<Scalars['Date']>;
  ne?: InputMaybe<Scalars['Date']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['Date']>>>;
};

export type GatsbyDirectory = GatsbyNode & {
  __typename?: 'Directory';
  absolutePath: Scalars['String'];
  accessTime: Scalars['Date'];
  atime: Scalars['Date'];
  atimeMs: Scalars['Float'];
  base: Scalars['String'];
  birthTime: Scalars['Date'];
  /** @deprecated Use `birthTime` instead */
  birthtime?: Maybe<Scalars['Date']>;
  /** @deprecated Use `birthTime` instead */
  birthtimeMs?: Maybe<Scalars['Float']>;
  changeTime: Scalars['Date'];
  children: Array<GatsbyNode>;
  ctime: Scalars['Date'];
  ctimeMs: Scalars['Float'];
  dev: Scalars['Int'];
  dir: Scalars['String'];
  ext: Scalars['String'];
  extension: Scalars['String'];
  gid: Scalars['Int'];
  id: Scalars['ID'];
  ino: Scalars['Float'];
  internal: GatsbyInternal;
  mode: Scalars['Int'];
  modifiedTime: Scalars['Date'];
  mtime: Scalars['Date'];
  mtimeMs: Scalars['Float'];
  name: Scalars['String'];
  nlink: Scalars['Int'];
  parent?: Maybe<GatsbyNode>;
  prettySize: Scalars['String'];
  rdev: Scalars['Int'];
  relativeDirectory: Scalars['String'];
  relativePath: Scalars['String'];
  root: Scalars['String'];
  size: Scalars['Int'];
  sourceInstanceName: Scalars['String'];
  uid: Scalars['Int'];
};


export type GatsbyDirectoryAccessTimeArgs = {
  difference?: InputMaybe<Scalars['String']>;
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  locale?: InputMaybe<Scalars['String']>;
};


export type GatsbyDirectoryAtimeArgs = {
  difference?: InputMaybe<Scalars['String']>;
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  locale?: InputMaybe<Scalars['String']>;
};


export type GatsbyDirectoryBirthTimeArgs = {
  difference?: InputMaybe<Scalars['String']>;
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  locale?: InputMaybe<Scalars['String']>;
};


export type GatsbyDirectoryChangeTimeArgs = {
  difference?: InputMaybe<Scalars['String']>;
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  locale?: InputMaybe<Scalars['String']>;
};


export type GatsbyDirectoryCtimeArgs = {
  difference?: InputMaybe<Scalars['String']>;
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  locale?: InputMaybe<Scalars['String']>;
};


export type GatsbyDirectoryModifiedTimeArgs = {
  difference?: InputMaybe<Scalars['String']>;
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  locale?: InputMaybe<Scalars['String']>;
};


export type GatsbyDirectoryMtimeArgs = {
  difference?: InputMaybe<Scalars['String']>;
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  locale?: InputMaybe<Scalars['String']>;
};

export type GatsbyDirectoryConnection = {
  __typename?: 'DirectoryConnection';
  distinct: Array<Scalars['String']>;
  edges: Array<GatsbyDirectoryEdge>;
  group: Array<GatsbyDirectoryGroupConnection>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  nodes: Array<GatsbyDirectory>;
  pageInfo: GatsbyPageInfo;
  sum?: Maybe<Scalars['Float']>;
  totalCount: Scalars['Int'];
};


export type GatsbyDirectoryConnectionDistinctArgs = {
  field: GatsbyDirectoryFieldSelector;
};


export type GatsbyDirectoryConnectionGroupArgs = {
  field: GatsbyDirectoryFieldSelector;
  limit?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type GatsbyDirectoryConnectionMaxArgs = {
  field: GatsbyDirectoryFieldSelector;
};


export type GatsbyDirectoryConnectionMinArgs = {
  field: GatsbyDirectoryFieldSelector;
};


export type GatsbyDirectoryConnectionSumArgs = {
  field: GatsbyDirectoryFieldSelector;
};

export type GatsbyDirectoryEdge = {
  __typename?: 'DirectoryEdge';
  next?: Maybe<GatsbyDirectory>;
  node: GatsbyDirectory;
  previous?: Maybe<GatsbyDirectory>;
};

export type GatsbyDirectoryFieldSelector = {
  absolutePath?: InputMaybe<GatsbyFieldSelectorEnum>;
  accessTime?: InputMaybe<GatsbyFieldSelectorEnum>;
  atime?: InputMaybe<GatsbyFieldSelectorEnum>;
  atimeMs?: InputMaybe<GatsbyFieldSelectorEnum>;
  base?: InputMaybe<GatsbyFieldSelectorEnum>;
  birthTime?: InputMaybe<GatsbyFieldSelectorEnum>;
  birthtime?: InputMaybe<GatsbyFieldSelectorEnum>;
  birthtimeMs?: InputMaybe<GatsbyFieldSelectorEnum>;
  changeTime?: InputMaybe<GatsbyFieldSelectorEnum>;
  children?: InputMaybe<GatsbyNodeFieldSelector>;
  ctime?: InputMaybe<GatsbyFieldSelectorEnum>;
  ctimeMs?: InputMaybe<GatsbyFieldSelectorEnum>;
  dev?: InputMaybe<GatsbyFieldSelectorEnum>;
  dir?: InputMaybe<GatsbyFieldSelectorEnum>;
  ext?: InputMaybe<GatsbyFieldSelectorEnum>;
  extension?: InputMaybe<GatsbyFieldSelectorEnum>;
  gid?: InputMaybe<GatsbyFieldSelectorEnum>;
  id?: InputMaybe<GatsbyFieldSelectorEnum>;
  ino?: InputMaybe<GatsbyFieldSelectorEnum>;
  internal?: InputMaybe<GatsbyInternalFieldSelector>;
  mode?: InputMaybe<GatsbyFieldSelectorEnum>;
  modifiedTime?: InputMaybe<GatsbyFieldSelectorEnum>;
  mtime?: InputMaybe<GatsbyFieldSelectorEnum>;
  mtimeMs?: InputMaybe<GatsbyFieldSelectorEnum>;
  name?: InputMaybe<GatsbyFieldSelectorEnum>;
  nlink?: InputMaybe<GatsbyFieldSelectorEnum>;
  parent?: InputMaybe<GatsbyNodeFieldSelector>;
  prettySize?: InputMaybe<GatsbyFieldSelectorEnum>;
  rdev?: InputMaybe<GatsbyFieldSelectorEnum>;
  relativeDirectory?: InputMaybe<GatsbyFieldSelectorEnum>;
  relativePath?: InputMaybe<GatsbyFieldSelectorEnum>;
  root?: InputMaybe<GatsbyFieldSelectorEnum>;
  size?: InputMaybe<GatsbyFieldSelectorEnum>;
  sourceInstanceName?: InputMaybe<GatsbyFieldSelectorEnum>;
  uid?: InputMaybe<GatsbyFieldSelectorEnum>;
};

export type GatsbyDirectoryFilterInput = {
  absolutePath?: InputMaybe<GatsbyStringQueryOperatorInput>;
  accessTime?: InputMaybe<GatsbyDateQueryOperatorInput>;
  atime?: InputMaybe<GatsbyDateQueryOperatorInput>;
  atimeMs?: InputMaybe<GatsbyFloatQueryOperatorInput>;
  base?: InputMaybe<GatsbyStringQueryOperatorInput>;
  birthTime?: InputMaybe<GatsbyDateQueryOperatorInput>;
  birthtime?: InputMaybe<GatsbyDateQueryOperatorInput>;
  birthtimeMs?: InputMaybe<GatsbyFloatQueryOperatorInput>;
  changeTime?: InputMaybe<GatsbyDateQueryOperatorInput>;
  children?: InputMaybe<GatsbyNodeFilterListInput>;
  ctime?: InputMaybe<GatsbyDateQueryOperatorInput>;
  ctimeMs?: InputMaybe<GatsbyFloatQueryOperatorInput>;
  dev?: InputMaybe<GatsbyIntQueryOperatorInput>;
  dir?: InputMaybe<GatsbyStringQueryOperatorInput>;
  ext?: InputMaybe<GatsbyStringQueryOperatorInput>;
  extension?: InputMaybe<GatsbyStringQueryOperatorInput>;
  gid?: InputMaybe<GatsbyIntQueryOperatorInput>;
  id?: InputMaybe<GatsbyStringQueryOperatorInput>;
  ino?: InputMaybe<GatsbyFloatQueryOperatorInput>;
  internal?: InputMaybe<GatsbyInternalFilterInput>;
  mode?: InputMaybe<GatsbyIntQueryOperatorInput>;
  modifiedTime?: InputMaybe<GatsbyDateQueryOperatorInput>;
  mtime?: InputMaybe<GatsbyDateQueryOperatorInput>;
  mtimeMs?: InputMaybe<GatsbyFloatQueryOperatorInput>;
  name?: InputMaybe<GatsbyStringQueryOperatorInput>;
  nlink?: InputMaybe<GatsbyIntQueryOperatorInput>;
  parent?: InputMaybe<GatsbyNodeFilterInput>;
  prettySize?: InputMaybe<GatsbyStringQueryOperatorInput>;
  rdev?: InputMaybe<GatsbyIntQueryOperatorInput>;
  relativeDirectory?: InputMaybe<GatsbyStringQueryOperatorInput>;
  relativePath?: InputMaybe<GatsbyStringQueryOperatorInput>;
  root?: InputMaybe<GatsbyStringQueryOperatorInput>;
  size?: InputMaybe<GatsbyIntQueryOperatorInput>;
  sourceInstanceName?: InputMaybe<GatsbyStringQueryOperatorInput>;
  uid?: InputMaybe<GatsbyIntQueryOperatorInput>;
};

export type GatsbyDirectoryGroupConnection = {
  __typename?: 'DirectoryGroupConnection';
  distinct: Array<Scalars['String']>;
  edges: Array<GatsbyDirectoryEdge>;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
  group: Array<GatsbyDirectoryGroupConnection>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  nodes: Array<GatsbyDirectory>;
  pageInfo: GatsbyPageInfo;
  sum?: Maybe<Scalars['Float']>;
  totalCount: Scalars['Int'];
};


export type GatsbyDirectoryGroupConnectionDistinctArgs = {
  field: GatsbyDirectoryFieldSelector;
};


export type GatsbyDirectoryGroupConnectionGroupArgs = {
  field: GatsbyDirectoryFieldSelector;
  limit?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type GatsbyDirectoryGroupConnectionMaxArgs = {
  field: GatsbyDirectoryFieldSelector;
};


export type GatsbyDirectoryGroupConnectionMinArgs = {
  field: GatsbyDirectoryFieldSelector;
};


export type GatsbyDirectoryGroupConnectionSumArgs = {
  field: GatsbyDirectoryFieldSelector;
};

export type GatsbyDirectorySortInput = {
  absolutePath?: InputMaybe<GatsbySortOrderEnum>;
  accessTime?: InputMaybe<GatsbySortOrderEnum>;
  atime?: InputMaybe<GatsbySortOrderEnum>;
  atimeMs?: InputMaybe<GatsbySortOrderEnum>;
  base?: InputMaybe<GatsbySortOrderEnum>;
  birthTime?: InputMaybe<GatsbySortOrderEnum>;
  birthtime?: InputMaybe<GatsbySortOrderEnum>;
  birthtimeMs?: InputMaybe<GatsbySortOrderEnum>;
  changeTime?: InputMaybe<GatsbySortOrderEnum>;
  children?: InputMaybe<GatsbyNodeSortInput>;
  ctime?: InputMaybe<GatsbySortOrderEnum>;
  ctimeMs?: InputMaybe<GatsbySortOrderEnum>;
  dev?: InputMaybe<GatsbySortOrderEnum>;
  dir?: InputMaybe<GatsbySortOrderEnum>;
  ext?: InputMaybe<GatsbySortOrderEnum>;
  extension?: InputMaybe<GatsbySortOrderEnum>;
  gid?: InputMaybe<GatsbySortOrderEnum>;
  id?: InputMaybe<GatsbySortOrderEnum>;
  ino?: InputMaybe<GatsbySortOrderEnum>;
  internal?: InputMaybe<GatsbyInternalSortInput>;
  mode?: InputMaybe<GatsbySortOrderEnum>;
  modifiedTime?: InputMaybe<GatsbySortOrderEnum>;
  mtime?: InputMaybe<GatsbySortOrderEnum>;
  mtimeMs?: InputMaybe<GatsbySortOrderEnum>;
  name?: InputMaybe<GatsbySortOrderEnum>;
  nlink?: InputMaybe<GatsbySortOrderEnum>;
  parent?: InputMaybe<GatsbyNodeSortInput>;
  prettySize?: InputMaybe<GatsbySortOrderEnum>;
  rdev?: InputMaybe<GatsbySortOrderEnum>;
  relativeDirectory?: InputMaybe<GatsbySortOrderEnum>;
  relativePath?: InputMaybe<GatsbySortOrderEnum>;
  root?: InputMaybe<GatsbySortOrderEnum>;
  size?: InputMaybe<GatsbySortOrderEnum>;
  sourceInstanceName?: InputMaybe<GatsbySortOrderEnum>;
  uid?: InputMaybe<GatsbySortOrderEnum>;
};

export type GatsbyDuotoneGradient = {
  highlight: Scalars['String'];
  opacity?: InputMaybe<Scalars['Int']>;
  shadow: Scalars['String'];
};

export enum GatsbyFieldSelectorEnum {
  Select = 'SELECT'
}

export type GatsbyFile = GatsbyNode & {
  __typename?: 'File';
  absolutePath: Scalars['String'];
  accessTime: Scalars['Date'];
  atime: Scalars['Date'];
  atimeMs: Scalars['Float'];
  base: Scalars['String'];
  birthTime: Scalars['Date'];
  /** @deprecated Use `birthTime` instead */
  birthtime?: Maybe<Scalars['Date']>;
  /** @deprecated Use `birthTime` instead */
  birthtimeMs?: Maybe<Scalars['Float']>;
  blksize?: Maybe<Scalars['Int']>;
  blocks?: Maybe<Scalars['Int']>;
  changeTime: Scalars['Date'];
  /** Returns the first child node of type ImageSharp or null if there are no children of given type on this node */
  childImageSharp?: Maybe<GatsbyImageSharp>;
  children: Array<GatsbyNode>;
  /** Returns all children nodes filtered by type ImageSharp */
  childrenImageSharp?: Maybe<Array<Maybe<GatsbyImageSharp>>>;
  ctime: Scalars['Date'];
  ctimeMs: Scalars['Float'];
  dev: Scalars['Int'];
  dir: Scalars['String'];
  ext: Scalars['String'];
  extension: Scalars['String'];
  gid: Scalars['Int'];
  id: Scalars['ID'];
  ino: Scalars['Float'];
  internal: GatsbyInternal;
  mode: Scalars['Int'];
  modifiedTime: Scalars['Date'];
  mtime: Scalars['Date'];
  mtimeMs: Scalars['Float'];
  name: Scalars['String'];
  nlink: Scalars['Int'];
  parent?: Maybe<GatsbyNode>;
  prettySize: Scalars['String'];
  /** Copy file to static directory and return public url to it */
  publicURL?: Maybe<Scalars['String']>;
  rdev: Scalars['Int'];
  relativeDirectory: Scalars['String'];
  relativePath: Scalars['String'];
  root: Scalars['String'];
  size: Scalars['Int'];
  sourceInstanceName: Scalars['String'];
  uid: Scalars['Int'];
};


export type GatsbyFileAccessTimeArgs = {
  difference?: InputMaybe<Scalars['String']>;
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  locale?: InputMaybe<Scalars['String']>;
};


export type GatsbyFileAtimeArgs = {
  difference?: InputMaybe<Scalars['String']>;
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  locale?: InputMaybe<Scalars['String']>;
};


export type GatsbyFileBirthTimeArgs = {
  difference?: InputMaybe<Scalars['String']>;
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  locale?: InputMaybe<Scalars['String']>;
};


export type GatsbyFileChangeTimeArgs = {
  difference?: InputMaybe<Scalars['String']>;
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  locale?: InputMaybe<Scalars['String']>;
};


export type GatsbyFileCtimeArgs = {
  difference?: InputMaybe<Scalars['String']>;
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  locale?: InputMaybe<Scalars['String']>;
};


export type GatsbyFileModifiedTimeArgs = {
  difference?: InputMaybe<Scalars['String']>;
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  locale?: InputMaybe<Scalars['String']>;
};


export type GatsbyFileMtimeArgs = {
  difference?: InputMaybe<Scalars['String']>;
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  locale?: InputMaybe<Scalars['String']>;
};

export type GatsbyFileConnection = {
  __typename?: 'FileConnection';
  distinct: Array<Scalars['String']>;
  edges: Array<GatsbyFileEdge>;
  group: Array<GatsbyFileGroupConnection>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  nodes: Array<GatsbyFile>;
  pageInfo: GatsbyPageInfo;
  sum?: Maybe<Scalars['Float']>;
  totalCount: Scalars['Int'];
};


export type GatsbyFileConnectionDistinctArgs = {
  field: GatsbyFileFieldSelector;
};


export type GatsbyFileConnectionGroupArgs = {
  field: GatsbyFileFieldSelector;
  limit?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type GatsbyFileConnectionMaxArgs = {
  field: GatsbyFileFieldSelector;
};


export type GatsbyFileConnectionMinArgs = {
  field: GatsbyFileFieldSelector;
};


export type GatsbyFileConnectionSumArgs = {
  field: GatsbyFileFieldSelector;
};

export type GatsbyFileEdge = {
  __typename?: 'FileEdge';
  next?: Maybe<GatsbyFile>;
  node: GatsbyFile;
  previous?: Maybe<GatsbyFile>;
};

export type GatsbyFileFieldSelector = {
  absolutePath?: InputMaybe<GatsbyFieldSelectorEnum>;
  accessTime?: InputMaybe<GatsbyFieldSelectorEnum>;
  atime?: InputMaybe<GatsbyFieldSelectorEnum>;
  atimeMs?: InputMaybe<GatsbyFieldSelectorEnum>;
  base?: InputMaybe<GatsbyFieldSelectorEnum>;
  birthTime?: InputMaybe<GatsbyFieldSelectorEnum>;
  birthtime?: InputMaybe<GatsbyFieldSelectorEnum>;
  birthtimeMs?: InputMaybe<GatsbyFieldSelectorEnum>;
  blksize?: InputMaybe<GatsbyFieldSelectorEnum>;
  blocks?: InputMaybe<GatsbyFieldSelectorEnum>;
  changeTime?: InputMaybe<GatsbyFieldSelectorEnum>;
  childImageSharp?: InputMaybe<GatsbyImageSharpFieldSelector>;
  children?: InputMaybe<GatsbyNodeFieldSelector>;
  childrenImageSharp?: InputMaybe<GatsbyImageSharpFieldSelector>;
  ctime?: InputMaybe<GatsbyFieldSelectorEnum>;
  ctimeMs?: InputMaybe<GatsbyFieldSelectorEnum>;
  dev?: InputMaybe<GatsbyFieldSelectorEnum>;
  dir?: InputMaybe<GatsbyFieldSelectorEnum>;
  ext?: InputMaybe<GatsbyFieldSelectorEnum>;
  extension?: InputMaybe<GatsbyFieldSelectorEnum>;
  gid?: InputMaybe<GatsbyFieldSelectorEnum>;
  id?: InputMaybe<GatsbyFieldSelectorEnum>;
  ino?: InputMaybe<GatsbyFieldSelectorEnum>;
  internal?: InputMaybe<GatsbyInternalFieldSelector>;
  mode?: InputMaybe<GatsbyFieldSelectorEnum>;
  modifiedTime?: InputMaybe<GatsbyFieldSelectorEnum>;
  mtime?: InputMaybe<GatsbyFieldSelectorEnum>;
  mtimeMs?: InputMaybe<GatsbyFieldSelectorEnum>;
  name?: InputMaybe<GatsbyFieldSelectorEnum>;
  nlink?: InputMaybe<GatsbyFieldSelectorEnum>;
  parent?: InputMaybe<GatsbyNodeFieldSelector>;
  prettySize?: InputMaybe<GatsbyFieldSelectorEnum>;
  publicURL?: InputMaybe<GatsbyFieldSelectorEnum>;
  rdev?: InputMaybe<GatsbyFieldSelectorEnum>;
  relativeDirectory?: InputMaybe<GatsbyFieldSelectorEnum>;
  relativePath?: InputMaybe<GatsbyFieldSelectorEnum>;
  root?: InputMaybe<GatsbyFieldSelectorEnum>;
  size?: InputMaybe<GatsbyFieldSelectorEnum>;
  sourceInstanceName?: InputMaybe<GatsbyFieldSelectorEnum>;
  uid?: InputMaybe<GatsbyFieldSelectorEnum>;
};

export type GatsbyFileFilterInput = {
  absolutePath?: InputMaybe<GatsbyStringQueryOperatorInput>;
  accessTime?: InputMaybe<GatsbyDateQueryOperatorInput>;
  atime?: InputMaybe<GatsbyDateQueryOperatorInput>;
  atimeMs?: InputMaybe<GatsbyFloatQueryOperatorInput>;
  base?: InputMaybe<GatsbyStringQueryOperatorInput>;
  birthTime?: InputMaybe<GatsbyDateQueryOperatorInput>;
  birthtime?: InputMaybe<GatsbyDateQueryOperatorInput>;
  birthtimeMs?: InputMaybe<GatsbyFloatQueryOperatorInput>;
  blksize?: InputMaybe<GatsbyIntQueryOperatorInput>;
  blocks?: InputMaybe<GatsbyIntQueryOperatorInput>;
  changeTime?: InputMaybe<GatsbyDateQueryOperatorInput>;
  childImageSharp?: InputMaybe<GatsbyImageSharpFilterInput>;
  children?: InputMaybe<GatsbyNodeFilterListInput>;
  childrenImageSharp?: InputMaybe<GatsbyImageSharpFilterListInput>;
  ctime?: InputMaybe<GatsbyDateQueryOperatorInput>;
  ctimeMs?: InputMaybe<GatsbyFloatQueryOperatorInput>;
  dev?: InputMaybe<GatsbyIntQueryOperatorInput>;
  dir?: InputMaybe<GatsbyStringQueryOperatorInput>;
  ext?: InputMaybe<GatsbyStringQueryOperatorInput>;
  extension?: InputMaybe<GatsbyStringQueryOperatorInput>;
  gid?: InputMaybe<GatsbyIntQueryOperatorInput>;
  id?: InputMaybe<GatsbyStringQueryOperatorInput>;
  ino?: InputMaybe<GatsbyFloatQueryOperatorInput>;
  internal?: InputMaybe<GatsbyInternalFilterInput>;
  mode?: InputMaybe<GatsbyIntQueryOperatorInput>;
  modifiedTime?: InputMaybe<GatsbyDateQueryOperatorInput>;
  mtime?: InputMaybe<GatsbyDateQueryOperatorInput>;
  mtimeMs?: InputMaybe<GatsbyFloatQueryOperatorInput>;
  name?: InputMaybe<GatsbyStringQueryOperatorInput>;
  nlink?: InputMaybe<GatsbyIntQueryOperatorInput>;
  parent?: InputMaybe<GatsbyNodeFilterInput>;
  prettySize?: InputMaybe<GatsbyStringQueryOperatorInput>;
  publicURL?: InputMaybe<GatsbyStringQueryOperatorInput>;
  rdev?: InputMaybe<GatsbyIntQueryOperatorInput>;
  relativeDirectory?: InputMaybe<GatsbyStringQueryOperatorInput>;
  relativePath?: InputMaybe<GatsbyStringQueryOperatorInput>;
  root?: InputMaybe<GatsbyStringQueryOperatorInput>;
  size?: InputMaybe<GatsbyIntQueryOperatorInput>;
  sourceInstanceName?: InputMaybe<GatsbyStringQueryOperatorInput>;
  uid?: InputMaybe<GatsbyIntQueryOperatorInput>;
};

export type GatsbyFileGroupConnection = {
  __typename?: 'FileGroupConnection';
  distinct: Array<Scalars['String']>;
  edges: Array<GatsbyFileEdge>;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
  group: Array<GatsbyFileGroupConnection>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  nodes: Array<GatsbyFile>;
  pageInfo: GatsbyPageInfo;
  sum?: Maybe<Scalars['Float']>;
  totalCount: Scalars['Int'];
};


export type GatsbyFileGroupConnectionDistinctArgs = {
  field: GatsbyFileFieldSelector;
};


export type GatsbyFileGroupConnectionGroupArgs = {
  field: GatsbyFileFieldSelector;
  limit?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type GatsbyFileGroupConnectionMaxArgs = {
  field: GatsbyFileFieldSelector;
};


export type GatsbyFileGroupConnectionMinArgs = {
  field: GatsbyFileFieldSelector;
};


export type GatsbyFileGroupConnectionSumArgs = {
  field: GatsbyFileFieldSelector;
};

export type GatsbyFileSortInput = {
  absolutePath?: InputMaybe<GatsbySortOrderEnum>;
  accessTime?: InputMaybe<GatsbySortOrderEnum>;
  atime?: InputMaybe<GatsbySortOrderEnum>;
  atimeMs?: InputMaybe<GatsbySortOrderEnum>;
  base?: InputMaybe<GatsbySortOrderEnum>;
  birthTime?: InputMaybe<GatsbySortOrderEnum>;
  birthtime?: InputMaybe<GatsbySortOrderEnum>;
  birthtimeMs?: InputMaybe<GatsbySortOrderEnum>;
  blksize?: InputMaybe<GatsbySortOrderEnum>;
  blocks?: InputMaybe<GatsbySortOrderEnum>;
  changeTime?: InputMaybe<GatsbySortOrderEnum>;
  childImageSharp?: InputMaybe<GatsbyImageSharpSortInput>;
  children?: InputMaybe<GatsbyNodeSortInput>;
  childrenImageSharp?: InputMaybe<GatsbyImageSharpSortInput>;
  ctime?: InputMaybe<GatsbySortOrderEnum>;
  ctimeMs?: InputMaybe<GatsbySortOrderEnum>;
  dev?: InputMaybe<GatsbySortOrderEnum>;
  dir?: InputMaybe<GatsbySortOrderEnum>;
  ext?: InputMaybe<GatsbySortOrderEnum>;
  extension?: InputMaybe<GatsbySortOrderEnum>;
  gid?: InputMaybe<GatsbySortOrderEnum>;
  id?: InputMaybe<GatsbySortOrderEnum>;
  ino?: InputMaybe<GatsbySortOrderEnum>;
  internal?: InputMaybe<GatsbyInternalSortInput>;
  mode?: InputMaybe<GatsbySortOrderEnum>;
  modifiedTime?: InputMaybe<GatsbySortOrderEnum>;
  mtime?: InputMaybe<GatsbySortOrderEnum>;
  mtimeMs?: InputMaybe<GatsbySortOrderEnum>;
  name?: InputMaybe<GatsbySortOrderEnum>;
  nlink?: InputMaybe<GatsbySortOrderEnum>;
  parent?: InputMaybe<GatsbyNodeSortInput>;
  prettySize?: InputMaybe<GatsbySortOrderEnum>;
  publicURL?: InputMaybe<GatsbySortOrderEnum>;
  rdev?: InputMaybe<GatsbySortOrderEnum>;
  relativeDirectory?: InputMaybe<GatsbySortOrderEnum>;
  relativePath?: InputMaybe<GatsbySortOrderEnum>;
  root?: InputMaybe<GatsbySortOrderEnum>;
  size?: InputMaybe<GatsbySortOrderEnum>;
  sourceInstanceName?: InputMaybe<GatsbySortOrderEnum>;
  uid?: InputMaybe<GatsbySortOrderEnum>;
};

export type GatsbyFloatQueryOperatorInput = {
  eq?: InputMaybe<Scalars['Float']>;
  gt?: InputMaybe<Scalars['Float']>;
  gte?: InputMaybe<Scalars['Float']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  lt?: InputMaybe<Scalars['Float']>;
  lte?: InputMaybe<Scalars['Float']>;
  ne?: InputMaybe<Scalars['Float']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
};

export type GatsbyGatsbyImageDataQueryOperatorInput = {
  eq?: InputMaybe<Scalars['GatsbyImageData']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['GatsbyImageData']>>>;
  ne?: InputMaybe<Scalars['GatsbyImageData']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['GatsbyImageData']>>>;
};

export enum GatsbyGatsbyImageFormat {
  Auto = 'AUTO',
  Avif = 'AVIF',
  Jpg = 'JPG',
  NoChange = 'NO_CHANGE',
  Png = 'PNG',
  Webp = 'WEBP'
}

export enum GatsbyGatsbyImageLayout {
  Constrained = 'CONSTRAINED',
  Fixed = 'FIXED',
  FullWidth = 'FULL_WIDTH'
}

export enum GatsbyGatsbyImagePlaceholder {
  Blurred = 'BLURRED',
  DominantColor = 'DOMINANT_COLOR',
  None = 'NONE',
  TracedSvg = 'TRACED_SVG'
}

export type GatsbyIdQueryOperatorInput = {
  eq?: InputMaybe<Scalars['ID']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  ne?: InputMaybe<Scalars['ID']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
};

export enum GatsbyImageCropFocus {
  Attention = 'ATTENTION',
  Center = 'CENTER',
  East = 'EAST',
  Entropy = 'ENTROPY',
  North = 'NORTH',
  Northeast = 'NORTHEAST',
  Northwest = 'NORTHWEST',
  South = 'SOUTH',
  Southeast = 'SOUTHEAST',
  Southwest = 'SOUTHWEST',
  West = 'WEST'
}

export enum GatsbyImageFit {
  Contain = 'CONTAIN',
  Cover = 'COVER',
  Fill = 'FILL',
  Inside = 'INSIDE',
  Outside = 'OUTSIDE'
}

export enum GatsbyImageFormat {
  Auto = 'AUTO',
  Avif = 'AVIF',
  Jpg = 'JPG',
  NoChange = 'NO_CHANGE',
  Png = 'PNG',
  Webp = 'WEBP'
}

export enum GatsbyImageLayout {
  Constrained = 'CONSTRAINED',
  Fixed = 'FIXED',
  FullWidth = 'FULL_WIDTH'
}

export enum GatsbyImagePlaceholder {
  Blurred = 'BLURRED',
  DominantColor = 'DOMINANT_COLOR',
  None = 'NONE',
  TracedSvg = 'TRACED_SVG'
}

export type GatsbyImageSharp = GatsbyNode & {
  __typename?: 'ImageSharp';
  children: Array<GatsbyNode>;
  fixed?: Maybe<GatsbyImageSharpFixed>;
  fluid?: Maybe<GatsbyImageSharpFluid>;
  gatsbyImageData: Scalars['GatsbyImageData'];
  id: Scalars['ID'];
  internal: GatsbyInternal;
  original?: Maybe<GatsbyImageSharpOriginal>;
  parent?: Maybe<GatsbyNode>;
  resize?: Maybe<GatsbyImageSharpResize>;
};


export type GatsbyImageSharpFixedArgs = {
  background?: InputMaybe<Scalars['String']>;
  base64Width?: InputMaybe<Scalars['Int']>;
  cropFocus?: InputMaybe<GatsbyImageCropFocus>;
  duotone?: InputMaybe<GatsbyDuotoneGradient>;
  fit?: InputMaybe<GatsbyImageFit>;
  grayscale?: InputMaybe<Scalars['Boolean']>;
  height?: InputMaybe<Scalars['Int']>;
  jpegProgressive?: InputMaybe<Scalars['Boolean']>;
  jpegQuality?: InputMaybe<Scalars['Int']>;
  pngCompressionSpeed?: InputMaybe<Scalars['Int']>;
  pngQuality?: InputMaybe<Scalars['Int']>;
  quality?: InputMaybe<Scalars['Int']>;
  rotate?: InputMaybe<Scalars['Int']>;
  toFormat?: InputMaybe<GatsbyImageFormat>;
  toFormatBase64?: InputMaybe<GatsbyImageFormat>;
  traceSVG?: InputMaybe<GatsbyPotrace>;
  trim?: InputMaybe<Scalars['Float']>;
  webpQuality?: InputMaybe<Scalars['Int']>;
  width?: InputMaybe<Scalars['Int']>;
};


export type GatsbyImageSharpFluidArgs = {
  background?: InputMaybe<Scalars['String']>;
  base64Width?: InputMaybe<Scalars['Int']>;
  cropFocus?: InputMaybe<GatsbyImageCropFocus>;
  duotone?: InputMaybe<GatsbyDuotoneGradient>;
  fit?: InputMaybe<GatsbyImageFit>;
  grayscale?: InputMaybe<Scalars['Boolean']>;
  jpegProgressive?: InputMaybe<Scalars['Boolean']>;
  jpegQuality?: InputMaybe<Scalars['Int']>;
  maxHeight?: InputMaybe<Scalars['Int']>;
  maxWidth?: InputMaybe<Scalars['Int']>;
  pngCompressionSpeed?: InputMaybe<Scalars['Int']>;
  pngQuality?: InputMaybe<Scalars['Int']>;
  quality?: InputMaybe<Scalars['Int']>;
  rotate?: InputMaybe<Scalars['Int']>;
  sizes?: InputMaybe<Scalars['String']>;
  srcSetBreakpoints?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  toFormat?: InputMaybe<GatsbyImageFormat>;
  toFormatBase64?: InputMaybe<GatsbyImageFormat>;
  traceSVG?: InputMaybe<GatsbyPotrace>;
  trim?: InputMaybe<Scalars['Float']>;
  webpQuality?: InputMaybe<Scalars['Int']>;
};


export type GatsbyImageSharpGatsbyImageDataArgs = {
  aspectRatio?: InputMaybe<Scalars['Float']>;
  avifOptions?: InputMaybe<GatsbyAvifOptions>;
  backgroundColor?: InputMaybe<Scalars['String']>;
  blurredOptions?: InputMaybe<GatsbyBlurredOptions>;
  breakpoints?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  formats?: InputMaybe<Array<InputMaybe<GatsbyImageFormat>>>;
  height?: InputMaybe<Scalars['Int']>;
  jpgOptions?: InputMaybe<GatsbyJpgOptions>;
  layout?: InputMaybe<GatsbyImageLayout>;
  outputPixelDensities?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  placeholder?: InputMaybe<GatsbyImagePlaceholder>;
  pngOptions?: InputMaybe<GatsbyPngOptions>;
  quality?: InputMaybe<Scalars['Int']>;
  sizes?: InputMaybe<Scalars['String']>;
  tracedSVGOptions?: InputMaybe<GatsbyPotrace>;
  transformOptions?: InputMaybe<GatsbyTransformOptions>;
  webpOptions?: InputMaybe<GatsbyWebPOptions>;
  width?: InputMaybe<Scalars['Int']>;
};


export type GatsbyImageSharpResizeArgs = {
  background?: InputMaybe<Scalars['String']>;
  base64?: InputMaybe<Scalars['Boolean']>;
  cropFocus?: InputMaybe<GatsbyImageCropFocus>;
  duotone?: InputMaybe<GatsbyDuotoneGradient>;
  fit?: InputMaybe<GatsbyImageFit>;
  grayscale?: InputMaybe<Scalars['Boolean']>;
  height?: InputMaybe<Scalars['Int']>;
  jpegProgressive?: InputMaybe<Scalars['Boolean']>;
  jpegQuality?: InputMaybe<Scalars['Int']>;
  pngCompressionLevel?: InputMaybe<Scalars['Int']>;
  pngCompressionSpeed?: InputMaybe<Scalars['Int']>;
  pngQuality?: InputMaybe<Scalars['Int']>;
  quality?: InputMaybe<Scalars['Int']>;
  rotate?: InputMaybe<Scalars['Int']>;
  toFormat?: InputMaybe<GatsbyImageFormat>;
  traceSVG?: InputMaybe<GatsbyPotrace>;
  trim?: InputMaybe<Scalars['Float']>;
  webpQuality?: InputMaybe<Scalars['Int']>;
  width?: InputMaybe<Scalars['Int']>;
};

export type GatsbyImageSharpConnection = {
  __typename?: 'ImageSharpConnection';
  distinct: Array<Scalars['String']>;
  edges: Array<GatsbyImageSharpEdge>;
  group: Array<GatsbyImageSharpGroupConnection>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  nodes: Array<GatsbyImageSharp>;
  pageInfo: GatsbyPageInfo;
  sum?: Maybe<Scalars['Float']>;
  totalCount: Scalars['Int'];
};


export type GatsbyImageSharpConnectionDistinctArgs = {
  field: GatsbyImageSharpFieldSelector;
};


export type GatsbyImageSharpConnectionGroupArgs = {
  field: GatsbyImageSharpFieldSelector;
  limit?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type GatsbyImageSharpConnectionMaxArgs = {
  field: GatsbyImageSharpFieldSelector;
};


export type GatsbyImageSharpConnectionMinArgs = {
  field: GatsbyImageSharpFieldSelector;
};


export type GatsbyImageSharpConnectionSumArgs = {
  field: GatsbyImageSharpFieldSelector;
};

export type GatsbyImageSharpEdge = {
  __typename?: 'ImageSharpEdge';
  next?: Maybe<GatsbyImageSharp>;
  node: GatsbyImageSharp;
  previous?: Maybe<GatsbyImageSharp>;
};

export type GatsbyImageSharpFieldSelector = {
  children?: InputMaybe<GatsbyNodeFieldSelector>;
  fixed?: InputMaybe<GatsbyImageSharpFixedFieldSelector>;
  fluid?: InputMaybe<GatsbyImageSharpFluidFieldSelector>;
  gatsbyImageData?: InputMaybe<GatsbyFieldSelectorEnum>;
  id?: InputMaybe<GatsbyFieldSelectorEnum>;
  internal?: InputMaybe<GatsbyInternalFieldSelector>;
  original?: InputMaybe<GatsbyImageSharpOriginalFieldSelector>;
  parent?: InputMaybe<GatsbyNodeFieldSelector>;
  resize?: InputMaybe<GatsbyImageSharpResizeFieldSelector>;
};

export type GatsbyImageSharpFilterInput = {
  children?: InputMaybe<GatsbyNodeFilterListInput>;
  fixed?: InputMaybe<GatsbyImageSharpFixedFilterInput>;
  fluid?: InputMaybe<GatsbyImageSharpFluidFilterInput>;
  gatsbyImageData?: InputMaybe<GatsbyGatsbyImageDataQueryOperatorInput>;
  id?: InputMaybe<GatsbyStringQueryOperatorInput>;
  internal?: InputMaybe<GatsbyInternalFilterInput>;
  original?: InputMaybe<GatsbyImageSharpOriginalFilterInput>;
  parent?: InputMaybe<GatsbyNodeFilterInput>;
  resize?: InputMaybe<GatsbyImageSharpResizeFilterInput>;
};

export type GatsbyImageSharpFilterListInput = {
  elemMatch?: InputMaybe<GatsbyImageSharpFilterInput>;
};

export type GatsbyImageSharpFixed = {
  __typename?: 'ImageSharpFixed';
  aspectRatio?: Maybe<Scalars['Float']>;
  base64?: Maybe<Scalars['String']>;
  height: Scalars['Float'];
  originalName?: Maybe<Scalars['String']>;
  src: Scalars['String'];
  srcSet: Scalars['String'];
  srcSetWebp?: Maybe<Scalars['String']>;
  srcWebp?: Maybe<Scalars['String']>;
  tracedSVG?: Maybe<Scalars['String']>;
  width: Scalars['Float'];
};

export type GatsbyImageSharpFixedFieldSelector = {
  aspectRatio?: InputMaybe<GatsbyFieldSelectorEnum>;
  base64?: InputMaybe<GatsbyFieldSelectorEnum>;
  height?: InputMaybe<GatsbyFieldSelectorEnum>;
  originalName?: InputMaybe<GatsbyFieldSelectorEnum>;
  src?: InputMaybe<GatsbyFieldSelectorEnum>;
  srcSet?: InputMaybe<GatsbyFieldSelectorEnum>;
  srcSetWebp?: InputMaybe<GatsbyFieldSelectorEnum>;
  srcWebp?: InputMaybe<GatsbyFieldSelectorEnum>;
  tracedSVG?: InputMaybe<GatsbyFieldSelectorEnum>;
  width?: InputMaybe<GatsbyFieldSelectorEnum>;
};

export type GatsbyImageSharpFixedFilterInput = {
  aspectRatio?: InputMaybe<GatsbyFloatQueryOperatorInput>;
  base64?: InputMaybe<GatsbyStringQueryOperatorInput>;
  height?: InputMaybe<GatsbyFloatQueryOperatorInput>;
  originalName?: InputMaybe<GatsbyStringQueryOperatorInput>;
  src?: InputMaybe<GatsbyStringQueryOperatorInput>;
  srcSet?: InputMaybe<GatsbyStringQueryOperatorInput>;
  srcSetWebp?: InputMaybe<GatsbyStringQueryOperatorInput>;
  srcWebp?: InputMaybe<GatsbyStringQueryOperatorInput>;
  tracedSVG?: InputMaybe<GatsbyStringQueryOperatorInput>;
  width?: InputMaybe<GatsbyFloatQueryOperatorInput>;
};

export type GatsbyImageSharpFixedSortInput = {
  aspectRatio?: InputMaybe<GatsbySortOrderEnum>;
  base64?: InputMaybe<GatsbySortOrderEnum>;
  height?: InputMaybe<GatsbySortOrderEnum>;
  originalName?: InputMaybe<GatsbySortOrderEnum>;
  src?: InputMaybe<GatsbySortOrderEnum>;
  srcSet?: InputMaybe<GatsbySortOrderEnum>;
  srcSetWebp?: InputMaybe<GatsbySortOrderEnum>;
  srcWebp?: InputMaybe<GatsbySortOrderEnum>;
  tracedSVG?: InputMaybe<GatsbySortOrderEnum>;
  width?: InputMaybe<GatsbySortOrderEnum>;
};

export type GatsbyImageSharpFluid = {
  __typename?: 'ImageSharpFluid';
  aspectRatio: Scalars['Float'];
  base64?: Maybe<Scalars['String']>;
  originalImg?: Maybe<Scalars['String']>;
  originalName?: Maybe<Scalars['String']>;
  presentationHeight: Scalars['Int'];
  presentationWidth: Scalars['Int'];
  sizes: Scalars['String'];
  src: Scalars['String'];
  srcSet: Scalars['String'];
  srcSetWebp?: Maybe<Scalars['String']>;
  srcWebp?: Maybe<Scalars['String']>;
  tracedSVG?: Maybe<Scalars['String']>;
};

export type GatsbyImageSharpFluidFieldSelector = {
  aspectRatio?: InputMaybe<GatsbyFieldSelectorEnum>;
  base64?: InputMaybe<GatsbyFieldSelectorEnum>;
  originalImg?: InputMaybe<GatsbyFieldSelectorEnum>;
  originalName?: InputMaybe<GatsbyFieldSelectorEnum>;
  presentationHeight?: InputMaybe<GatsbyFieldSelectorEnum>;
  presentationWidth?: InputMaybe<GatsbyFieldSelectorEnum>;
  sizes?: InputMaybe<GatsbyFieldSelectorEnum>;
  src?: InputMaybe<GatsbyFieldSelectorEnum>;
  srcSet?: InputMaybe<GatsbyFieldSelectorEnum>;
  srcSetWebp?: InputMaybe<GatsbyFieldSelectorEnum>;
  srcWebp?: InputMaybe<GatsbyFieldSelectorEnum>;
  tracedSVG?: InputMaybe<GatsbyFieldSelectorEnum>;
};

export type GatsbyImageSharpFluidFilterInput = {
  aspectRatio?: InputMaybe<GatsbyFloatQueryOperatorInput>;
  base64?: InputMaybe<GatsbyStringQueryOperatorInput>;
  originalImg?: InputMaybe<GatsbyStringQueryOperatorInput>;
  originalName?: InputMaybe<GatsbyStringQueryOperatorInput>;
  presentationHeight?: InputMaybe<GatsbyIntQueryOperatorInput>;
  presentationWidth?: InputMaybe<GatsbyIntQueryOperatorInput>;
  sizes?: InputMaybe<GatsbyStringQueryOperatorInput>;
  src?: InputMaybe<GatsbyStringQueryOperatorInput>;
  srcSet?: InputMaybe<GatsbyStringQueryOperatorInput>;
  srcSetWebp?: InputMaybe<GatsbyStringQueryOperatorInput>;
  srcWebp?: InputMaybe<GatsbyStringQueryOperatorInput>;
  tracedSVG?: InputMaybe<GatsbyStringQueryOperatorInput>;
};

export type GatsbyImageSharpFluidSortInput = {
  aspectRatio?: InputMaybe<GatsbySortOrderEnum>;
  base64?: InputMaybe<GatsbySortOrderEnum>;
  originalImg?: InputMaybe<GatsbySortOrderEnum>;
  originalName?: InputMaybe<GatsbySortOrderEnum>;
  presentationHeight?: InputMaybe<GatsbySortOrderEnum>;
  presentationWidth?: InputMaybe<GatsbySortOrderEnum>;
  sizes?: InputMaybe<GatsbySortOrderEnum>;
  src?: InputMaybe<GatsbySortOrderEnum>;
  srcSet?: InputMaybe<GatsbySortOrderEnum>;
  srcSetWebp?: InputMaybe<GatsbySortOrderEnum>;
  srcWebp?: InputMaybe<GatsbySortOrderEnum>;
  tracedSVG?: InputMaybe<GatsbySortOrderEnum>;
};

export type GatsbyImageSharpGroupConnection = {
  __typename?: 'ImageSharpGroupConnection';
  distinct: Array<Scalars['String']>;
  edges: Array<GatsbyImageSharpEdge>;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
  group: Array<GatsbyImageSharpGroupConnection>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  nodes: Array<GatsbyImageSharp>;
  pageInfo: GatsbyPageInfo;
  sum?: Maybe<Scalars['Float']>;
  totalCount: Scalars['Int'];
};


export type GatsbyImageSharpGroupConnectionDistinctArgs = {
  field: GatsbyImageSharpFieldSelector;
};


export type GatsbyImageSharpGroupConnectionGroupArgs = {
  field: GatsbyImageSharpFieldSelector;
  limit?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type GatsbyImageSharpGroupConnectionMaxArgs = {
  field: GatsbyImageSharpFieldSelector;
};


export type GatsbyImageSharpGroupConnectionMinArgs = {
  field: GatsbyImageSharpFieldSelector;
};


export type GatsbyImageSharpGroupConnectionSumArgs = {
  field: GatsbyImageSharpFieldSelector;
};

export type GatsbyImageSharpOriginal = {
  __typename?: 'ImageSharpOriginal';
  height?: Maybe<Scalars['Float']>;
  src?: Maybe<Scalars['String']>;
  width?: Maybe<Scalars['Float']>;
};

export type GatsbyImageSharpOriginalFieldSelector = {
  height?: InputMaybe<GatsbyFieldSelectorEnum>;
  src?: InputMaybe<GatsbyFieldSelectorEnum>;
  width?: InputMaybe<GatsbyFieldSelectorEnum>;
};

export type GatsbyImageSharpOriginalFilterInput = {
  height?: InputMaybe<GatsbyFloatQueryOperatorInput>;
  src?: InputMaybe<GatsbyStringQueryOperatorInput>;
  width?: InputMaybe<GatsbyFloatQueryOperatorInput>;
};

export type GatsbyImageSharpOriginalSortInput = {
  height?: InputMaybe<GatsbySortOrderEnum>;
  src?: InputMaybe<GatsbySortOrderEnum>;
  width?: InputMaybe<GatsbySortOrderEnum>;
};

export type GatsbyImageSharpResize = {
  __typename?: 'ImageSharpResize';
  aspectRatio?: Maybe<Scalars['Float']>;
  height?: Maybe<Scalars['Int']>;
  originalName?: Maybe<Scalars['String']>;
  src?: Maybe<Scalars['String']>;
  tracedSVG?: Maybe<Scalars['String']>;
  width?: Maybe<Scalars['Int']>;
};

export type GatsbyImageSharpResizeFieldSelector = {
  aspectRatio?: InputMaybe<GatsbyFieldSelectorEnum>;
  height?: InputMaybe<GatsbyFieldSelectorEnum>;
  originalName?: InputMaybe<GatsbyFieldSelectorEnum>;
  src?: InputMaybe<GatsbyFieldSelectorEnum>;
  tracedSVG?: InputMaybe<GatsbyFieldSelectorEnum>;
  width?: InputMaybe<GatsbyFieldSelectorEnum>;
};

export type GatsbyImageSharpResizeFilterInput = {
  aspectRatio?: InputMaybe<GatsbyFloatQueryOperatorInput>;
  height?: InputMaybe<GatsbyIntQueryOperatorInput>;
  originalName?: InputMaybe<GatsbyStringQueryOperatorInput>;
  src?: InputMaybe<GatsbyStringQueryOperatorInput>;
  tracedSVG?: InputMaybe<GatsbyStringQueryOperatorInput>;
  width?: InputMaybe<GatsbyIntQueryOperatorInput>;
};

export type GatsbyImageSharpResizeSortInput = {
  aspectRatio?: InputMaybe<GatsbySortOrderEnum>;
  height?: InputMaybe<GatsbySortOrderEnum>;
  originalName?: InputMaybe<GatsbySortOrderEnum>;
  src?: InputMaybe<GatsbySortOrderEnum>;
  tracedSVG?: InputMaybe<GatsbySortOrderEnum>;
  width?: InputMaybe<GatsbySortOrderEnum>;
};

export type GatsbyImageSharpSortInput = {
  children?: InputMaybe<GatsbyNodeSortInput>;
  fixed?: InputMaybe<GatsbyImageSharpFixedSortInput>;
  fluid?: InputMaybe<GatsbyImageSharpFluidSortInput>;
  gatsbyImageData?: InputMaybe<GatsbySortOrderEnum>;
  id?: InputMaybe<GatsbySortOrderEnum>;
  internal?: InputMaybe<GatsbyInternalSortInput>;
  original?: InputMaybe<GatsbyImageSharpOriginalSortInput>;
  parent?: InputMaybe<GatsbyNodeSortInput>;
  resize?: InputMaybe<GatsbyImageSharpResizeSortInput>;
};

export type GatsbyImgixFixed = {
  __typename?: 'ImgixFixed';
  base64: Scalars['String'];
  height: Scalars['Int'];
  sizes: Scalars['String'];
  src: Scalars['String'];
  srcSet: Scalars['String'];
  srcSetWebp: Scalars['String'];
  srcWebp: Scalars['String'];
  width: Scalars['Int'];
};

export type GatsbyImgixFluid = {
  __typename?: 'ImgixFluid';
  aspectRatio: Scalars['Float'];
  base64: Scalars['String'];
  sizes: Scalars['String'];
  src: Scalars['String'];
  srcSet: Scalars['String'];
  srcSetWebp: Scalars['String'];
  srcWebp: Scalars['String'];
};

export type GatsbyImgixParamsInput = {
  /** Alias for `pdfAnnotation`. */
  annotation?: InputMaybe<Scalars['Boolean']>;
  /** Specifies an aspect ratio to maintain when resizing and cropping the image. [See docs](https://docs.imgix.com/apis/url/size/ar). */
  ar?: InputMaybe<Scalars['String']>;
  /** Applies automatic enhancements to images. [See docs](https://docs.imgix.com/apis/url/auto). */
  auto?: InputMaybe<Scalars['String']>;
  /** Alias for `blend`. */
  b?: InputMaybe<Scalars['String']>;
  /** Alias for `blendAlign`. */
  ba?: InputMaybe<Scalars['String']>;
  /** Alias for `blendAlpha`. */
  balph?: InputMaybe<Scalars['Int']>;
  /** Alias for `blendCrop`. */
  bc?: InputMaybe<Scalars['String']>;
  /** Alias for `blendFit`. */
  bf?: InputMaybe<Scalars['String']>;
  /** Colors the background of padded and partially-transparent images. Default: `fff`. [See docs](https://docs.imgix.com/apis/url/bg). */
  bg?: InputMaybe<Scalars['String']>;
  /** Alias for `blendH`. */
  bh?: InputMaybe<Scalars['Float']>;
  /** Specifies the location of the blend image. [See docs](https://docs.imgix.com/apis/url/blending/blend). */
  blend?: InputMaybe<Scalars['String']>;
  /** Changes the blend alignment relative to the parent image. [See docs](https://docs.imgix.com/apis/url/blending/blend-align). */
  blendAlign?: InputMaybe<Scalars['String']>;
  /** Changes the alpha of the blend image. Default: `100`. [See docs](https://docs.imgix.com/apis/url/blending/blend-alpha). */
  blendAlpha?: InputMaybe<Scalars['Int']>;
  /** Alias for `blendColor`. */
  blendClr?: InputMaybe<Scalars['String']>;
  /** Specifies a color to use when applying the blend. [See docs](https://docs.imgix.com/apis/url/blending/blend-color). */
  blendColor?: InputMaybe<Scalars['String']>;
  /** Specifies the type of crop for blend images. [See docs](https://docs.imgix.com/apis/url/blending/blend-crop). */
  blendCrop?: InputMaybe<Scalars['String']>;
  /** Specifies the fit mode for blend images. Default: `clip`. [See docs](https://docs.imgix.com/apis/url/blending/blend-fit). */
  blendFit?: InputMaybe<Scalars['String']>;
  /** Adjusts the height of the blend image. [See docs](https://docs.imgix.com/apis/url/blending/blend-h). */
  blendH?: InputMaybe<Scalars['Float']>;
  /** Sets the blend mode for a blend image. Default: `overlay`. [See docs](https://docs.imgix.com/apis/url/blending/blend-mode). */
  blendMode?: InputMaybe<Scalars['String']>;
  /** Applies padding to the blend image. Default: `0`. [See docs](https://docs.imgix.com/apis/url/blending/blend-pad). */
  blendPad?: InputMaybe<Scalars['Int']>;
  /** Adjusts the size of the blend image. [See docs](https://docs.imgix.com/apis/url/blending/blend-size). */
  blendSize?: InputMaybe<Scalars['String']>;
  /** Adjusts the width of the blend image. [See docs](https://docs.imgix.com/apis/url/blending/blend-w). */
  blendW?: InputMaybe<Scalars['Float']>;
  /** Adjusts the x-offset of the blend image relative to its parent. Default: `0`. [See docs](https://docs.imgix.com/apis/url/blending/blend-x). */
  blendX?: InputMaybe<Scalars['Int']>;
  /** Adjusts the y-offset of the blend image relative to its parent. Default: `0`. [See docs](https://docs.imgix.com/apis/url/blending/blend-y). */
  blendY?: InputMaybe<Scalars['Int']>;
  /** Alias for `blendAlign`. */
  blendalign?: InputMaybe<Scalars['String']>;
  /** Alias for `blendAlpha`. */
  blendalpha?: InputMaybe<Scalars['Int']>;
  /** Alias for `blendColor`. */
  blendclr?: InputMaybe<Scalars['String']>;
  /** Alias for `blendColor`. */
  blendcolor?: InputMaybe<Scalars['String']>;
  /** Alias for `blendCrop`. */
  blendcrop?: InputMaybe<Scalars['String']>;
  /** Alias for `blendFit`. */
  blendfit?: InputMaybe<Scalars['String']>;
  /** Alias for `blendH`. */
  blendh?: InputMaybe<Scalars['Float']>;
  /** Alias for `blendMode`. */
  blendmode?: InputMaybe<Scalars['String']>;
  /** Alias for `blendPad`. */
  blendpad?: InputMaybe<Scalars['Int']>;
  /** Alias for `blendSize`. */
  blendsize?: InputMaybe<Scalars['String']>;
  /** Alias for `blendW`. */
  blendw?: InputMaybe<Scalars['Float']>;
  /** Alias for `blendX`. */
  blendx?: InputMaybe<Scalars['Int']>;
  /** Alias for `blendY`. */
  blendy?: InputMaybe<Scalars['Int']>;
  /** Applies a gaussian blur to an image. Default: `0`. [See docs](https://docs.imgix.com/apis/url/stylize/blur). */
  blur?: InputMaybe<Scalars['Int']>;
  /** Alias for `blendMode`. */
  bm?: InputMaybe<Scalars['String']>;
  /** Applies a border to an image. [See docs](https://docs.imgix.com/apis/url/border-and-padding/border). */
  border?: InputMaybe<Scalars['String']>;
  /** Sets bottom border of an image. [See docs](https://docs.imgix.com/apis/url/border-and-padding/border-bottom). */
  borderBottom?: InputMaybe<Scalars['Int']>;
  /** Sets left border of an image. [See docs](https://docs.imgix.com/apis/url/border-and-padding/border-left). */
  borderLeft?: InputMaybe<Scalars['Int']>;
  /** Sets the outer radius of the image's border in pixels. [See docs](https://docs.imgix.com/apis/url/border-and-padding/border-radius). */
  borderRadius?: InputMaybe<Scalars['String']>;
  /** Sets the inner radius of the image's border in pixels. [See docs](https://docs.imgix.com/apis/url/border-and-padding/border-radius-inner). */
  borderRadiusInner?: InputMaybe<Scalars['String']>;
  /** Sets right border of an image. [See docs](https://docs.imgix.com/apis/url/border-and-padding/border-right). */
  borderRight?: InputMaybe<Scalars['Int']>;
  /** Sets top border of an image. [See docs](https://docs.imgix.com/apis/url/border-and-padding/border-top). */
  borderTop?: InputMaybe<Scalars['Int']>;
  /** Alias for `blendPad`. */
  bp?: InputMaybe<Scalars['Int']>;
  /** Adjusts the brightness of the source image. Default: `0`. [See docs](https://docs.imgix.com/apis/url/adjustment/bri). */
  bri?: InputMaybe<Scalars['Int']>;
  /** Alias for `blendSize`. */
  bs?: InputMaybe<Scalars['String']>;
  /** Alias for `blendW`. */
  bw?: InputMaybe<Scalars['Float']>;
  /** Alias for `blendX`. */
  bx?: InputMaybe<Scalars['Int']>;
  /** Alias for `blendY`. */
  by?: InputMaybe<Scalars['Int']>;
  /** Sets one or more Client-Hints headers. [See docs](https://docs.imgix.com/apis/url/format/ch). */
  ch?: InputMaybe<Scalars['String']>;
  /** Specifies the output chroma subsampling rate. Default: `420`. [See docs](https://docs.imgix.com/apis/url/format/chromasub). */
  chromasub?: InputMaybe<Scalars['Int']>;
  /** Limits the number of unique colors in an image. [See docs](https://docs.imgix.com/apis/url/format/colorquant). */
  colorquant?: InputMaybe<Scalars['Int']>;
  /** Specifies how many colors to include in a palette-extraction response. Default: `6`. [See docs](https://docs.imgix.com/apis/url/color-palette/colors). */
  colors?: InputMaybe<Scalars['Int']>;
  /** Adjusts the contrast of the source image. Default: `0`. [See docs](https://docs.imgix.com/apis/url/adjustment/con). */
  con?: InputMaybe<Scalars['Int']>;
  /** Specifies the radius value for a rounded corner mask. [See docs](https://docs.imgix.com/apis/url/mask/corner-radius). */
  cornerRadius?: InputMaybe<Scalars['String']>;
  /** Specifies how to crop an image. [See docs](https://docs.imgix.com/apis/url/size/crop). */
  crop?: InputMaybe<Scalars['String']>;
  /** Specifies the color space of the output image. [See docs](https://docs.imgix.com/apis/url/format/cs). */
  cs?: InputMaybe<Scalars['String']>;
  /** Forces a URL to use send-file in its response. [See docs](https://docs.imgix.com/apis/url/format/dl). */
  dl?: InputMaybe<Scalars['String']>;
  /** Sets the DPI value in the EXIF header. [See docs](https://docs.imgix.com/apis/url/format/dpi). */
  dpi?: InputMaybe<Scalars['Int']>;
  /** Adjusts the device-pixel ratio of the output image. Default: `1`. [See docs](https://docs.imgix.com/apis/url/dpr). */
  dpr?: InputMaybe<Scalars['Float']>;
  /** Applies a duotone effect to the source image. [See docs](https://docs.imgix.com/apis/url/stylize/duotone). */
  duotone?: InputMaybe<Scalars['String']>;
  /** Changes the alpha of the duotone effect atop the source image. Default: `100`. [See docs](https://docs.imgix.com/apis/url/stylize/duotone-alpha). */
  duotoneAlpha?: InputMaybe<Scalars['Int']>;
  /** Adjusts the exposure of the output image. Default: `0`. [See docs](https://docs.imgix.com/apis/url/adjustment/exp). */
  exp?: InputMaybe<Scalars['Int']>;
  /** A Unix timestamp specifying a UTC time. Requests made to this URL after that time will output a 404 status code. [See docs](https://docs.imgix.com/apis/url/expires). */
  expires?: InputMaybe<Scalars['String']>;
  /** Alias for `fit`. */
  f?: InputMaybe<Scalars['String']>;
  /** Selects a face to crop to. [See docs](https://docs.imgix.com/apis/url/face-detection/faceindex). */
  faceindex?: InputMaybe<Scalars['Int']>;
  /** Adjusts padding around a selected face. Default: `1`. [See docs](https://docs.imgix.com/apis/url/face-detection/facepad). */
  facepad?: InputMaybe<Scalars['Float']>;
  /** Specifies that face data should be included in output when combined with `fm=json`. [See docs](https://docs.imgix.com/apis/url/face-detection/faces). */
  faces?: InputMaybe<Scalars['Int']>;
  /** Determines how to fill in additional space created by the fit setting. [See docs](https://docs.imgix.com/apis/url/fill/fill). */
  fill?: InputMaybe<Scalars['String']>;
  /** Sets the fill color for images with additional space created by the fit setting. Default: `fff`. [See docs](https://docs.imgix.com/apis/url/fill/fill-color). */
  fillColor?: InputMaybe<Scalars['String']>;
  /** Alias for `fillColor`. */
  fillcolor?: InputMaybe<Scalars['String']>;
  /** Specifies how to map the source image to the output image dimensions. Default: `clip`. [See docs](https://docs.imgix.com/apis/url/size/fit). */
  fit?: InputMaybe<Scalars['String']>;
  /** Flips an image on a specified axis. [See docs](https://docs.imgix.com/apis/url/rotation/flip). */
  flip?: InputMaybe<Scalars['String']>;
  /** Changes the format of the output image. [See docs](https://docs.imgix.com/apis/url/format/fm). */
  fm?: InputMaybe<Scalars['String']>;
  /** Displays crosshairs identifying the location of the set focal point. Default: `false`. [See docs](https://docs.imgix.com/apis/url/focalpoint-crop/fp-debug). */
  fpDebug?: InputMaybe<Scalars['Boolean']>;
  /** Sets the relative horizontal value for the focal point of an image. [See docs](https://docs.imgix.com/apis/url/focalpoint-crop/fp-x). */
  fpX?: InputMaybe<Scalars['Float']>;
  /** Sets the relative vertical value for the focal point of an image. [See docs](https://docs.imgix.com/apis/url/focalpoint-crop/fp-y). */
  fpY?: InputMaybe<Scalars['Float']>;
  /** Sets the relative zoom value for the focal point of an image. [See docs](https://docs.imgix.com/apis/url/focalpoint-crop/fp-z). */
  fpZ?: InputMaybe<Scalars['Float']>;
  /** Adjusts the gamma of the source image. Default: `0`. [See docs](https://docs.imgix.com/apis/url/adjustment/gam). */
  gam?: InputMaybe<Scalars['Int']>;
  /** Sets grid colors for the transparency checkerboard grid. */
  gridColors?: InputMaybe<Scalars['String']>;
  /** Sets grid size for the transparency checkerboard grid. */
  gridSize?: InputMaybe<Scalars['Int']>;
  /** Adjusts the height of the output image. [See docs](https://docs.imgix.com/apis/url/size/h). */
  h?: InputMaybe<Scalars['Float']>;
  /** Alias for `h`. */
  height?: InputMaybe<Scalars['Float']>;
  /** Adjusts the highlights of the source image. Default: `0`. [See docs](https://docs.imgix.com/apis/url/adjustment/high). */
  high?: InputMaybe<Scalars['Int']>;
  /** Applies a half-tone effect to the source image. Default: `0`. [See docs](https://docs.imgix.com/apis/url/stylize/htn). */
  htn?: InputMaybe<Scalars['Int']>;
  /** Adjusts the hue of the source image. Default: `0`. [See docs](https://docs.imgix.com/apis/url/adjustment/hue). */
  hue?: InputMaybe<Scalars['Int']>;
  /** Alias for `invert`. */
  inv?: InputMaybe<Scalars['Boolean']>;
  /** Inverts the colors on the source image. Default: `false`. [See docs](https://docs.imgix.com/apis/url/adjustment/invert). */
  invert?: InputMaybe<Scalars['Boolean']>;
  /** Determine if IPTC data should be passed for JPEG images. */
  iptc?: InputMaybe<Scalars['String']>;
  /** Specifies that the output image should be a lossless variant. Default: `false`. [See docs](https://docs.imgix.com/apis/url/format/lossless). */
  lossless?: InputMaybe<Scalars['Boolean']>;
  /** Alias for `mark`. */
  m?: InputMaybe<Scalars['String']>;
  /** Alias for `markAlign`. */
  ma?: InputMaybe<Scalars['String']>;
  /** Alias for `markAlpha`. */
  malph?: InputMaybe<Scalars['Int']>;
  /** Specifies the location of the watermark image. [See docs](https://docs.imgix.com/apis/url/watermark/mark). */
  mark?: InputMaybe<Scalars['String']>;
  /** Changes the watermark alignment relative to the parent image. [See docs](https://docs.imgix.com/apis/url/watermark/mark-align). */
  markAlign?: InputMaybe<Scalars['String']>;
  /** Changes the alpha of the watermark image. Default: `100`. [See docs](https://docs.imgix.com/apis/url/watermark/mark-alpha). */
  markAlpha?: InputMaybe<Scalars['Int']>;
  /** Changes base URL of the watermark image. [See docs](https://docs.imgix.com/apis/url/watermark/mark-base). */
  markBase?: InputMaybe<Scalars['String']>;
  /** Specifies the fit mode for watermark images. Default: `clip`. [See docs](https://docs.imgix.com/apis/url/watermark/mark-fit). */
  markFit?: InputMaybe<Scalars['String']>;
  /** Adjusts the height of the watermark image. [See docs](https://docs.imgix.com/apis/url/watermark/mark-h). */
  markH?: InputMaybe<Scalars['Float']>;
  /** Applies padding to the watermark image. Default: `5`. [See docs](https://docs.imgix.com/apis/url/watermark/mark-pad). */
  markPad?: InputMaybe<Scalars['Int']>;
  /** Rotates a watermark or tiled watermarks by a specified number of degrees. Default: `0`. [See docs](https://docs.imgix.com/apis/url/watermark/mark-rot). */
  markRot?: InputMaybe<Scalars['Float']>;
  /** Adjusts the scale of the watermark image. [See docs](https://docs.imgix.com/apis/url/watermark/mark-scale). */
  markScale?: InputMaybe<Scalars['Int']>;
  /** Adds tiled watermark. [See docs](https://docs.imgix.com/apis/url/watermark/mark-tile). */
  markTile?: InputMaybe<Scalars['String']>;
  /** Adjusts the width of the watermark image. [See docs](https://docs.imgix.com/apis/url/watermark/mark-w). */
  markW?: InputMaybe<Scalars['Float']>;
  /** Adjusts the x-offset of the watermark image relative to its parent. [See docs](https://docs.imgix.com/apis/url/watermark/mark-x). */
  markX?: InputMaybe<Scalars['Int']>;
  /** Adjusts the y-offset of the watermark image relative to its parent. [See docs](https://docs.imgix.com/apis/url/watermark/mark-y). */
  markY?: InputMaybe<Scalars['Int']>;
  /** Alias for `markAlign`. */
  markalign?: InputMaybe<Scalars['String']>;
  /** Alias for `markAlpha`. */
  markalpha?: InputMaybe<Scalars['Int']>;
  /** Alias for `markBase`. */
  markbase?: InputMaybe<Scalars['String']>;
  /** Alias for `markFit`. */
  markfit?: InputMaybe<Scalars['String']>;
  /** Alias for `markH`. */
  markh?: InputMaybe<Scalars['Float']>;
  /** Alias for `markPad`. */
  markpad?: InputMaybe<Scalars['Int']>;
  /** Alias for `markScale`. */
  markscale?: InputMaybe<Scalars['Int']>;
  /** Alias for `markTile`. */
  marktile?: InputMaybe<Scalars['String']>;
  /** Alias for `markW`. */
  markw?: InputMaybe<Scalars['Float']>;
  /** Alias for `markX`. */
  markx?: InputMaybe<Scalars['Int']>;
  /** Alias for `markY`. */
  marky?: InputMaybe<Scalars['Int']>;
  /** Defines the type of mask and specifies the URL if that type is selected. [See docs](https://docs.imgix.com/apis/url/mask). */
  mask?: InputMaybe<Scalars['String']>;
  /** Colors the background of the transparent mask area of images. Default: `fff`. [See docs](https://docs.imgix.com/apis/url/mask/mask-bg). */
  maskBg?: InputMaybe<Scalars['String']>;
  /** Alias for `maskBg`. */
  maskbg?: InputMaybe<Scalars['String']>;
  /** Specifies the maximum height of the output image in pixels. [See docs](https://docs.imgix.com/apis/url/size/max-height). */
  maxH?: InputMaybe<Scalars['Int']>;
  /** Alias for `maxH`. */
  maxHeight?: InputMaybe<Scalars['Int']>;
  /** Specifies the maximum width of the output image in pixels. [See docs](https://docs.imgix.com/apis/url/size/max-width). */
  maxW?: InputMaybe<Scalars['Int']>;
  /** Alias for `maxW`. */
  maxWidth?: InputMaybe<Scalars['Int']>;
  /** Alias for `markBase`. */
  mb?: InputMaybe<Scalars['String']>;
  /** Alias for `markFit`. */
  mf?: InputMaybe<Scalars['String']>;
  /** Alias for `markH`. */
  mh?: InputMaybe<Scalars['Float']>;
  /** Specifies the minimum height of the output image in pixels. [See docs](https://docs.imgix.com/apis/url/size/min-height). */
  minH?: InputMaybe<Scalars['Int']>;
  /** Alias for `minH`. */
  minHeight?: InputMaybe<Scalars['Int']>;
  /** Specifies the minimum width of the output image in pixels. [See docs](https://docs.imgix.com/apis/url/size/min-width). */
  minW?: InputMaybe<Scalars['Int']>;
  /** Alias for `minW`. */
  minWidth?: InputMaybe<Scalars['Int']>;
  /** Alias for `monochrome`. */
  mono?: InputMaybe<Scalars['String']>;
  /** Applies a monochrome effect to the source image. [See docs](https://docs.imgix.com/apis/url/stylize/monochrome). */
  monochrome?: InputMaybe<Scalars['String']>;
  /** Alias for `markPad`. */
  mp?: InputMaybe<Scalars['Int']>;
  /** Alias for `markScale`. */
  ms?: InputMaybe<Scalars['Int']>;
  /** Alias for `markTile`. */
  mtile?: InputMaybe<Scalars['String']>;
  /** Alias for `markW`. */
  mw?: InputMaybe<Scalars['Float']>;
  /** Alias for `markX`. */
  mx?: InputMaybe<Scalars['Int']>;
  /** Alias for `markY`. */
  my?: InputMaybe<Scalars['Int']>;
  /** Reduces the noise in an image. Default: `20`. [See docs](https://docs.imgix.com/apis/url/noise-reduction/nr). */
  nr?: InputMaybe<Scalars['Int']>;
  /** Provides a threshold by which to sharpen an image. Default: `20`. [See docs](https://docs.imgix.com/apis/url/noise-reduction/nrs). */
  nrs?: InputMaybe<Scalars['Int']>;
  /** Alias for `orient`. */
  or?: InputMaybe<Scalars['Int']>;
  /** Changes the image orientation. [See docs](https://docs.imgix.com/apis/url/rotation/orient). */
  orient?: InputMaybe<Scalars['Int']>;
  /** Pads an image. Default: `0`. [See docs](https://docs.imgix.com/apis/url/border-and-padding/pad). */
  pad?: InputMaybe<Scalars['Int']>;
  /** Sets bottom padding of an image. [See docs](https://docs.imgix.com/apis/url/border-and-padding/pad-bottom). */
  padBottom?: InputMaybe<Scalars['Int']>;
  /** Sets left padding of an image. [See docs](https://docs.imgix.com/apis/url/border-and-padding/pad-left). */
  padLeft?: InputMaybe<Scalars['Int']>;
  /** Sets right padding of an image. [See docs](https://docs.imgix.com/apis/url/border-and-padding/pad-right). */
  padRight?: InputMaybe<Scalars['Int']>;
  /** Sets top padding of an image. [See docs](https://docs.imgix.com/apis/url/border-and-padding/pad-top). */
  padTop?: InputMaybe<Scalars['Int']>;
  /** Selects a page from a PDF for display. Default: `1`. [See docs](https://docs.imgix.com/apis/url/pdf/page). */
  page?: InputMaybe<Scalars['Int']>;
  /** Specifies an output format for palette-extraction. [See docs](https://docs.imgix.com/apis/url/color-palette/palette). */
  palette?: InputMaybe<Scalars['String']>;
  /** Enables or disables PDF annotation. Default: `true`. [See docs](https://docs.imgix.com/apis/url/pdf/pdf-annotation). */
  pdfAnnotation?: InputMaybe<Scalars['Boolean']>;
  /** Specifies a CSS prefix for all classes in palette-extraction. Default: `image`. [See docs](https://docs.imgix.com/apis/url/color-palette/prefix). */
  prefix?: InputMaybe<Scalars['String']>;
  /** Applies a pixelation effect to an image. Default: `0`. [See docs](https://docs.imgix.com/apis/url/stylize/px). */
  px?: InputMaybe<Scalars['Int']>;
  /** Adjusts the quality of an output image. Default: `75`. [See docs](https://docs.imgix.com/apis/url/format/q). */
  q?: InputMaybe<Scalars['Int']>;
  /** Crops an image to a specified rectangle. [See docs](https://docs.imgix.com/apis/url/size/rect). */
  rect?: InputMaybe<Scalars['String']>;
  /** Rotates an image by a specified number of degrees. Default: `0`. [See docs](https://docs.imgix.com/apis/url/rotation/rot). */
  rot?: InputMaybe<Scalars['Float']>;
  /** Adjusts the saturation of an image. Default: `0`. [See docs](https://docs.imgix.com/apis/url/adjustment/sat). */
  sat?: InputMaybe<Scalars['Int']>;
  /** Applies a sepia effect to an image. Default: `0`. [See docs](https://docs.imgix.com/apis/url/stylize/sepia). */
  sepia?: InputMaybe<Scalars['Int']>;
  /** Adjusts the highlights of the source image. Default: `0`. [See docs](https://docs.imgix.com/apis/url/adjustment/shad). */
  shad?: InputMaybe<Scalars['Float']>;
  /** Adjusts the sharpness of the source image. Default: `0`. [See docs](https://docs.imgix.com/apis/url/adjustment/sharp). */
  sharp?: InputMaybe<Scalars['Float']>;
  /** Alias for `txt`. */
  t?: InputMaybe<Scalars['String']>;
  /** Alias for `txtAlign`. */
  ta?: InputMaybe<Scalars['String']>;
  /** Alias for `txtColor`. */
  tc?: InputMaybe<Scalars['String']>;
  /** Alias for `txtClip`. */
  tcl?: InputMaybe<Scalars['String']>;
  /** Alias for `txtFont`. */
  tf?: InputMaybe<Scalars['String']>;
  /** Alias for `txtLine`. */
  tl?: InputMaybe<Scalars['Int']>;
  /** Alias for `txtPad`. */
  tp?: InputMaybe<Scalars['Int']>;
  /** Adds checkerboard behind images which support transparency. [See docs](https://docs.imgix.com/apis/url/fill/transparency). */
  transparency?: InputMaybe<Scalars['String']>;
  /** Trims the source image. [See docs](https://docs.imgix.com/apis/url/trim/trim). */
  trim?: InputMaybe<Scalars['String']>;
  /** Specifies a trim color on a trim operation. [See docs](https://docs.imgix.com/apis/url/trim/trim-color). */
  trimColor?: InputMaybe<Scalars['String']>;
  /** Specifies the mean difference on a trim operation. Default: `11`. [See docs](https://docs.imgix.com/apis/url/trim/trim-md). */
  trimMd?: InputMaybe<Scalars['Float']>;
  /** Pads the area of the source image before trimming. Default: `0`. [See docs](https://docs.imgix.com/apis/url/trim/trim-pad). */
  trimPad?: InputMaybe<Scalars['Int']>;
  /** Specifies the standard deviation on a trim operation. Default: `10`. [See docs](https://docs.imgix.com/apis/url/trim/trim-sd). */
  trimSd?: InputMaybe<Scalars['Float']>;
  /** Specifies the tolerance on a trim operation. Default: `0`. [See docs](https://docs.imgix.com/apis/url/trim/trim-tol). */
  trimTol?: InputMaybe<Scalars['Float']>;
  /** Alias for `trimColor`. */
  trimcolor?: InputMaybe<Scalars['String']>;
  /** Alias for `trimMd`. */
  trimmd?: InputMaybe<Scalars['Float']>;
  /** Alias for `trimPad`. */
  trimpad?: InputMaybe<Scalars['Int']>;
  /** Alias for `trimSd`. */
  trimsd?: InputMaybe<Scalars['Float']>;
  /** Alias for `trimTol`. */
  trimtol?: InputMaybe<Scalars['Float']>;
  /** Alias for `txtShad`. */
  tsh?: InputMaybe<Scalars['Float']>;
  /** Alias for `txtSize`. */
  tsz?: InputMaybe<Scalars['Int']>;
  /** Alias for `txtTrack`. */
  tt?: InputMaybe<Scalars['Int']>;
  /** Sets the text string to render. [See docs](https://docs.imgix.com/apis/url/text/txt). */
  txt?: InputMaybe<Scalars['String']>;
  /** Sets the vertical and horizontal alignment of rendered text relative to the base image. [See docs](https://docs.imgix.com/apis/url/text/txt-align). */
  txtAlign?: InputMaybe<Scalars['String']>;
  /** Sets the clipping properties of rendered text. Default: `end`. [See docs](https://docs.imgix.com/apis/url/text/txt-clip). */
  txtClip?: InputMaybe<Scalars['String']>;
  /** Alias for `txtColor`. */
  txtClr?: InputMaybe<Scalars['String']>;
  /** Specifies the color of rendered text. [See docs](https://docs.imgix.com/apis/url/text/txt-color). */
  txtColor?: InputMaybe<Scalars['String']>;
  /** Specifies the fit approach for rendered text. [See docs](https://docs.imgix.com/apis/url/text/txt-fit). */
  txtFit?: InputMaybe<Scalars['String']>;
  /** Selects a font for rendered text. [See docs](https://docs.imgix.com/apis/url/text/txt-font). */
  txtFont?: InputMaybe<Scalars['String']>;
  /** Sets the leading (line spacing) for rendered text. Only works on the multi-line text endpoint. Default: `0`. [See docs](https://docs.imgix.com/apis/url/typesetting/txt-lead). */
  txtLead?: InputMaybe<Scalars['Int']>;
  /** Controls the level of ligature substitution. [See docs](https://docs.imgix.com/apis/url/text/txt-lig). */
  txtLig?: InputMaybe<Scalars['Int']>;
  /** Outlines the rendered text with a specified color. Default: `0`. [See docs](https://docs.imgix.com/apis/url/text/txt-line). */
  txtLine?: InputMaybe<Scalars['Int']>;
  /** Alias for `txtLineColor`. */
  txtLineClr?: InputMaybe<Scalars['String']>;
  /** Specifies a text outline color. Default: `fff`. [See docs](https://docs.imgix.com/apis/url/text/txt-line-color). */
  txtLineColor?: InputMaybe<Scalars['String']>;
  /** Specifies the padding (in device-independent pixels) between a textbox and the edges of the base image. [See docs](https://docs.imgix.com/apis/url/text/txt-pad). */
  txtPad?: InputMaybe<Scalars['Int']>;
  /** Applies a shadow to rendered text. Default: `0`. [See docs](https://docs.imgix.com/apis/url/text/txt-shad). */
  txtShad?: InputMaybe<Scalars['Float']>;
  /** Sets the font size of rendered text. Default: `12`. [See docs](https://docs.imgix.com/apis/url/text/txt-size). */
  txtSize?: InputMaybe<Scalars['Int']>;
  /** Sets the tracking (letter spacing) for rendered text. Only works on the multi-line text endpoint. Default: `0`. [See docs](https://docs.imgix.com/apis/url/typesetting/txt-track). */
  txtTrack?: InputMaybe<Scalars['Int']>;
  /** Sets the width of rendered text. [See docs](https://docs.imgix.com/apis/url/text/txt-width). */
  txtWidth?: InputMaybe<Scalars['Int']>;
  /** Sets the horizontal (x) position of the text in pixels relative to the left edge of the base image. Default: `0`. [See docs](https://docs.imgix.com/apis/url/text/txt-x). */
  txtX?: InputMaybe<Scalars['Int']>;
  /** Sets the vertical (y) position of the text in pixels relative to the top edge of the base image. Default: `0`. [See docs](https://docs.imgix.com/apis/url/text/txt-y). */
  txtY?: InputMaybe<Scalars['Int']>;
  /** Alias for `txtAlign`. */
  txtalign?: InputMaybe<Scalars['String']>;
  /** Alias for `txtClip`. */
  txtclip?: InputMaybe<Scalars['String']>;
  /** Alias for `txtColor`. */
  txtclr?: InputMaybe<Scalars['String']>;
  /** Alias for `txtColor`. */
  txtcolor?: InputMaybe<Scalars['String']>;
  /** Alias for `txtFit`. */
  txtfit?: InputMaybe<Scalars['String']>;
  /** Alias for `txtFont`. */
  txtfont?: InputMaybe<Scalars['String']>;
  /** Alias for `txtLead`. */
  txtlead?: InputMaybe<Scalars['Int']>;
  /** Alias for `txtLig`. */
  txtlig?: InputMaybe<Scalars['Int']>;
  /** Alias for `txtLine`. */
  txtline?: InputMaybe<Scalars['Int']>;
  /** Alias for `txtLineColor`. */
  txtlineclr?: InputMaybe<Scalars['String']>;
  /** Alias for `txtLineColor`. */
  txtlinecolor?: InputMaybe<Scalars['String']>;
  /** Alias for `txtPad`. */
  txtpad?: InputMaybe<Scalars['Int']>;
  /** Alias for `txtShad`. */
  txtshad?: InputMaybe<Scalars['Float']>;
  /** Alias for `txtSize`. */
  txtsize?: InputMaybe<Scalars['Int']>;
  /** Alias for `txtTrack`. */
  txttrack?: InputMaybe<Scalars['Int']>;
  /** Alias for `txtWidth`. */
  txtwidth?: InputMaybe<Scalars['Int']>;
  /** Alias for `txtX`. */
  txtx?: InputMaybe<Scalars['Int']>;
  /** Alias for `txtY`. */
  txty?: InputMaybe<Scalars['Int']>;
  /** Sharpens the source image using an unsharp mask. Default: `0`. [See docs](https://docs.imgix.com/apis/url/adjustment/usm). */
  usm?: InputMaybe<Scalars['Int']>;
  /** Specifies the radius for an unsharp mask operation. Default: `2.5`. [See docs](https://docs.imgix.com/apis/url/adjustment/usmrad). */
  usmrad?: InputMaybe<Scalars['Float']>;
  /** Adjusts the vibrance of an image. Default: `0`. [See docs](https://docs.imgix.com/apis/url/adjustment/vib). */
  vib?: InputMaybe<Scalars['Int']>;
  /** Adjusts the width of the output image. [See docs](https://docs.imgix.com/apis/url/size/w). */
  w?: InputMaybe<Scalars['Float']>;
  /** Alias for `w`. */
  width?: InputMaybe<Scalars['Float']>;
};

export enum GatsbyImgixPlaceholder {
  Blurred = 'BLURRED',
  DominantColor = 'DOMINANT_COLOR',
  None = 'NONE'
}

export type GatsbyIntQueryOperatorInput = {
  eq?: InputMaybe<Scalars['Int']>;
  gt?: InputMaybe<Scalars['Int']>;
  gte?: InputMaybe<Scalars['Int']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  lt?: InputMaybe<Scalars['Int']>;
  lte?: InputMaybe<Scalars['Int']>;
  ne?: InputMaybe<Scalars['Int']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
};

export type GatsbyInternal = {
  __typename?: 'Internal';
  content?: Maybe<Scalars['String']>;
  contentDigest: Scalars['String'];
  contentFilePath?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  fieldOwners?: Maybe<Array<Maybe<Scalars['String']>>>;
  ignoreType?: Maybe<Scalars['Boolean']>;
  mediaType?: Maybe<Scalars['String']>;
  owner: Scalars['String'];
  type: Scalars['String'];
};

export type GatsbyInternalFieldSelector = {
  content?: InputMaybe<GatsbyFieldSelectorEnum>;
  contentDigest?: InputMaybe<GatsbyFieldSelectorEnum>;
  contentFilePath?: InputMaybe<GatsbyFieldSelectorEnum>;
  description?: InputMaybe<GatsbyFieldSelectorEnum>;
  fieldOwners?: InputMaybe<GatsbyFieldSelectorEnum>;
  ignoreType?: InputMaybe<GatsbyFieldSelectorEnum>;
  mediaType?: InputMaybe<GatsbyFieldSelectorEnum>;
  owner?: InputMaybe<GatsbyFieldSelectorEnum>;
  type?: InputMaybe<GatsbyFieldSelectorEnum>;
};

export type GatsbyInternalFilterInput = {
  content?: InputMaybe<GatsbyStringQueryOperatorInput>;
  contentDigest?: InputMaybe<GatsbyStringQueryOperatorInput>;
  contentFilePath?: InputMaybe<GatsbyStringQueryOperatorInput>;
  description?: InputMaybe<GatsbyStringQueryOperatorInput>;
  fieldOwners?: InputMaybe<GatsbyStringQueryOperatorInput>;
  ignoreType?: InputMaybe<GatsbyBooleanQueryOperatorInput>;
  mediaType?: InputMaybe<GatsbyStringQueryOperatorInput>;
  owner?: InputMaybe<GatsbyStringQueryOperatorInput>;
  type?: InputMaybe<GatsbyStringQueryOperatorInput>;
};

export type GatsbyInternalSortInput = {
  content?: InputMaybe<GatsbySortOrderEnum>;
  contentDigest?: InputMaybe<GatsbySortOrderEnum>;
  contentFilePath?: InputMaybe<GatsbySortOrderEnum>;
  description?: InputMaybe<GatsbySortOrderEnum>;
  fieldOwners?: InputMaybe<GatsbySortOrderEnum>;
  ignoreType?: InputMaybe<GatsbySortOrderEnum>;
  mediaType?: InputMaybe<GatsbySortOrderEnum>;
  owner?: InputMaybe<GatsbySortOrderEnum>;
  type?: InputMaybe<GatsbySortOrderEnum>;
};

export type GatsbyJpgOptions = {
  progressive?: InputMaybe<Scalars['Boolean']>;
  quality?: InputMaybe<Scalars['Int']>;
};

export type GatsbyJsonQueryOperatorInput = {
  eq?: InputMaybe<Scalars['JSON']>;
  glob?: InputMaybe<Scalars['JSON']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['JSON']>>>;
  ne?: InputMaybe<Scalars['JSON']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['JSON']>>>;
  regex?: InputMaybe<Scalars['JSON']>;
};

/** Node Interface */
export type GatsbyNode = {
  children: Array<GatsbyNode>;
  id: Scalars['ID'];
  internal: GatsbyInternal;
  parent?: Maybe<GatsbyNode>;
};

export type GatsbyNodeFieldSelector = {
  children?: InputMaybe<GatsbyNodeFieldSelector>;
  id?: InputMaybe<GatsbyFieldSelectorEnum>;
  internal?: InputMaybe<GatsbyInternalFieldSelector>;
  parent?: InputMaybe<GatsbyNodeFieldSelector>;
};

export type GatsbyNodeFilterInput = {
  children?: InputMaybe<GatsbyNodeFilterListInput>;
  id?: InputMaybe<GatsbyStringQueryOperatorInput>;
  internal?: InputMaybe<GatsbyInternalFilterInput>;
  parent?: InputMaybe<GatsbyNodeFilterInput>;
};

export type GatsbyNodeFilterListInput = {
  elemMatch?: InputMaybe<GatsbyNodeFilterInput>;
};

export type GatsbyNodeSortInput = {
  children?: InputMaybe<GatsbyNodeSortInput>;
  id?: InputMaybe<GatsbySortOrderEnum>;
  internal?: InputMaybe<GatsbyInternalSortInput>;
  parent?: InputMaybe<GatsbyNodeSortInput>;
};

export type GatsbyPngOptions = {
  compressionSpeed?: InputMaybe<Scalars['Int']>;
  quality?: InputMaybe<Scalars['Int']>;
};

export type GatsbyPageInfo = {
  __typename?: 'PageInfo';
  currentPage: Scalars['Int'];
  hasNextPage: Scalars['Boolean'];
  hasPreviousPage: Scalars['Boolean'];
  itemCount: Scalars['Int'];
  pageCount: Scalars['Int'];
  perPage?: Maybe<Scalars['Int']>;
  totalCount: Scalars['Int'];
};

export type GatsbyPotrace = {
  alphaMax?: InputMaybe<Scalars['Float']>;
  background?: InputMaybe<Scalars['String']>;
  blackOnWhite?: InputMaybe<Scalars['Boolean']>;
  color?: InputMaybe<Scalars['String']>;
  optCurve?: InputMaybe<Scalars['Boolean']>;
  optTolerance?: InputMaybe<Scalars['Float']>;
  threshold?: InputMaybe<Scalars['Int']>;
  turdSize?: InputMaybe<Scalars['Float']>;
  turnPolicy?: InputMaybe<GatsbyPotraceTurnPolicy>;
};

export enum GatsbyPotraceTurnPolicy {
  TurnpolicyBlack = 'TURNPOLICY_BLACK',
  TurnpolicyLeft = 'TURNPOLICY_LEFT',
  TurnpolicyMajority = 'TURNPOLICY_MAJORITY',
  TurnpolicyMinority = 'TURNPOLICY_MINORITY',
  TurnpolicyRight = 'TURNPOLICY_RIGHT',
  TurnpolicyWhite = 'TURNPOLICY_WHITE'
}

export type GatsbyPrismicAllDocumentTypes = GatsbyPrismicHomePage;

export type GatsbyPrismicAlternateLanguageType = {
  __typename?: 'PrismicAlternateLanguageType';
  document?: Maybe<GatsbyPrismicAllDocumentTypes>;
  id?: Maybe<Scalars['ID']>;
  lang?: Maybe<Scalars['String']>;
  raw?: Maybe<Scalars['JSON']>;
  type?: Maybe<Scalars['String']>;
  uid?: Maybe<Scalars['String']>;
};

export type GatsbyPrismicAlternateLanguageTypeFieldSelector = {
  id?: InputMaybe<GatsbyFieldSelectorEnum>;
  lang?: InputMaybe<GatsbyFieldSelectorEnum>;
  raw?: InputMaybe<GatsbyFieldSelectorEnum>;
  type?: InputMaybe<GatsbyFieldSelectorEnum>;
  uid?: InputMaybe<GatsbyFieldSelectorEnum>;
};

export type GatsbyPrismicAlternateLanguageTypeFilterInput = {
  id?: InputMaybe<GatsbyIdQueryOperatorInput>;
  lang?: InputMaybe<GatsbyStringQueryOperatorInput>;
  raw?: InputMaybe<GatsbyJsonQueryOperatorInput>;
  type?: InputMaybe<GatsbyStringQueryOperatorInput>;
  uid?: InputMaybe<GatsbyStringQueryOperatorInput>;
};

export type GatsbyPrismicAlternateLanguageTypeFilterListInput = {
  elemMatch?: InputMaybe<GatsbyPrismicAlternateLanguageTypeFilterInput>;
};

export type GatsbyPrismicAlternateLanguageTypeSortInput = {
  id?: InputMaybe<GatsbySortOrderEnum>;
  lang?: InputMaybe<GatsbySortOrderEnum>;
  raw?: InputMaybe<GatsbySortOrderEnum>;
  type?: InputMaybe<GatsbySortOrderEnum>;
  uid?: InputMaybe<GatsbySortOrderEnum>;
};

export type GatsbyPrismicEmbedType = GatsbyNode & {
  __typename?: 'PrismicEmbedType';
  children: Array<GatsbyNode>;
  id: Scalars['ID'];
  internal: GatsbyInternal;
  parent?: Maybe<GatsbyNode>;
};

export type GatsbyPrismicEmbedTypeConnection = {
  __typename?: 'PrismicEmbedTypeConnection';
  distinct: Array<Scalars['String']>;
  edges: Array<GatsbyPrismicEmbedTypeEdge>;
  group: Array<GatsbyPrismicEmbedTypeGroupConnection>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  nodes: Array<GatsbyPrismicEmbedType>;
  pageInfo: GatsbyPageInfo;
  sum?: Maybe<Scalars['Float']>;
  totalCount: Scalars['Int'];
};


export type GatsbyPrismicEmbedTypeConnectionDistinctArgs = {
  field: GatsbyPrismicEmbedTypeFieldSelector;
};


export type GatsbyPrismicEmbedTypeConnectionGroupArgs = {
  field: GatsbyPrismicEmbedTypeFieldSelector;
  limit?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type GatsbyPrismicEmbedTypeConnectionMaxArgs = {
  field: GatsbyPrismicEmbedTypeFieldSelector;
};


export type GatsbyPrismicEmbedTypeConnectionMinArgs = {
  field: GatsbyPrismicEmbedTypeFieldSelector;
};


export type GatsbyPrismicEmbedTypeConnectionSumArgs = {
  field: GatsbyPrismicEmbedTypeFieldSelector;
};

export type GatsbyPrismicEmbedTypeEdge = {
  __typename?: 'PrismicEmbedTypeEdge';
  next?: Maybe<GatsbyPrismicEmbedType>;
  node: GatsbyPrismicEmbedType;
  previous?: Maybe<GatsbyPrismicEmbedType>;
};

export type GatsbyPrismicEmbedTypeFieldSelector = {
  children?: InputMaybe<GatsbyNodeFieldSelector>;
  id?: InputMaybe<GatsbyFieldSelectorEnum>;
  internal?: InputMaybe<GatsbyInternalFieldSelector>;
  parent?: InputMaybe<GatsbyNodeFieldSelector>;
};

export type GatsbyPrismicEmbedTypeFilterInput = {
  children?: InputMaybe<GatsbyNodeFilterListInput>;
  id?: InputMaybe<GatsbyStringQueryOperatorInput>;
  internal?: InputMaybe<GatsbyInternalFilterInput>;
  parent?: InputMaybe<GatsbyNodeFilterInput>;
};

export type GatsbyPrismicEmbedTypeGroupConnection = {
  __typename?: 'PrismicEmbedTypeGroupConnection';
  distinct: Array<Scalars['String']>;
  edges: Array<GatsbyPrismicEmbedTypeEdge>;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
  group: Array<GatsbyPrismicEmbedTypeGroupConnection>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  nodes: Array<GatsbyPrismicEmbedType>;
  pageInfo: GatsbyPageInfo;
  sum?: Maybe<Scalars['Float']>;
  totalCount: Scalars['Int'];
};


export type GatsbyPrismicEmbedTypeGroupConnectionDistinctArgs = {
  field: GatsbyPrismicEmbedTypeFieldSelector;
};


export type GatsbyPrismicEmbedTypeGroupConnectionGroupArgs = {
  field: GatsbyPrismicEmbedTypeFieldSelector;
  limit?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type GatsbyPrismicEmbedTypeGroupConnectionMaxArgs = {
  field: GatsbyPrismicEmbedTypeFieldSelector;
};


export type GatsbyPrismicEmbedTypeGroupConnectionMinArgs = {
  field: GatsbyPrismicEmbedTypeFieldSelector;
};


export type GatsbyPrismicEmbedTypeGroupConnectionSumArgs = {
  field: GatsbyPrismicEmbedTypeFieldSelector;
};

export type GatsbyPrismicEmbedTypeSortInput = {
  children?: InputMaybe<GatsbyNodeSortInput>;
  id?: InputMaybe<GatsbySortOrderEnum>;
  internal?: InputMaybe<GatsbyInternalSortInput>;
  parent?: InputMaybe<GatsbyNodeSortInput>;
};

export type GatsbyPrismicGeoPointType = {
  __typename?: 'PrismicGeoPointType';
  latitude: Scalars['Float'];
  longitude: Scalars['Float'];
};

export type GatsbyPrismicHomePage = GatsbyNode & {
  __typename?: 'PrismicHomePage';
  _previewable: Scalars['ID'];
  alternate_languages: Array<GatsbyPrismicAlternateLanguageType>;
  children: Array<GatsbyNode>;
  data: GatsbyPrismicHomePageDataType;
  dataRaw: Scalars['JSON'];
  first_publication_date: Scalars['Date'];
  href: Scalars['String'];
  id: Scalars['ID'];
  internal: GatsbyInternal;
  lang: Scalars['String'];
  last_publication_date: Scalars['Date'];
  parent?: Maybe<GatsbyNode>;
  prismicId: Scalars['ID'];
  tags: Array<Scalars['String']>;
  type: Scalars['String'];
  uid: Scalars['String'];
  url?: Maybe<Scalars['String']>;
};


export type GatsbyPrismicHomePageFirst_Publication_DateArgs = {
  difference?: InputMaybe<Scalars['String']>;
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  locale?: InputMaybe<Scalars['String']>;
};


export type GatsbyPrismicHomePageLast_Publication_DateArgs = {
  difference?: InputMaybe<Scalars['String']>;
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  locale?: InputMaybe<Scalars['String']>;
};

export type GatsbyPrismicHomePageConnection = {
  __typename?: 'PrismicHomePageConnection';
  distinct: Array<Scalars['String']>;
  edges: Array<GatsbyPrismicHomePageEdge>;
  group: Array<GatsbyPrismicHomePageGroupConnection>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  nodes: Array<GatsbyPrismicHomePage>;
  pageInfo: GatsbyPageInfo;
  sum?: Maybe<Scalars['Float']>;
  totalCount: Scalars['Int'];
};


export type GatsbyPrismicHomePageConnectionDistinctArgs = {
  field: GatsbyPrismicHomePageFieldSelector;
};


export type GatsbyPrismicHomePageConnectionGroupArgs = {
  field: GatsbyPrismicHomePageFieldSelector;
  limit?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type GatsbyPrismicHomePageConnectionMaxArgs = {
  field: GatsbyPrismicHomePageFieldSelector;
};


export type GatsbyPrismicHomePageConnectionMinArgs = {
  field: GatsbyPrismicHomePageFieldSelector;
};


export type GatsbyPrismicHomePageConnectionSumArgs = {
  field: GatsbyPrismicHomePageFieldSelector;
};

export type GatsbyPrismicHomePageDataType = {
  __typename?: 'PrismicHomePageDataType';
  seo_description?: Maybe<Scalars['String']>;
  seo_title?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
};

export type GatsbyPrismicHomePageDataTypeFieldSelector = {
  seo_description?: InputMaybe<GatsbyFieldSelectorEnum>;
  seo_title?: InputMaybe<GatsbyFieldSelectorEnum>;
  title?: InputMaybe<GatsbyFieldSelectorEnum>;
};

export type GatsbyPrismicHomePageDataTypeFilterInput = {
  seo_description?: InputMaybe<GatsbyStringQueryOperatorInput>;
  seo_title?: InputMaybe<GatsbyStringQueryOperatorInput>;
  title?: InputMaybe<GatsbyStringQueryOperatorInput>;
};

export type GatsbyPrismicHomePageDataTypeSortInput = {
  seo_description?: InputMaybe<GatsbySortOrderEnum>;
  seo_title?: InputMaybe<GatsbySortOrderEnum>;
  title?: InputMaybe<GatsbySortOrderEnum>;
};

export type GatsbyPrismicHomePageEdge = {
  __typename?: 'PrismicHomePageEdge';
  next?: Maybe<GatsbyPrismicHomePage>;
  node: GatsbyPrismicHomePage;
  previous?: Maybe<GatsbyPrismicHomePage>;
};

export type GatsbyPrismicHomePageFieldSelector = {
  _previewable?: InputMaybe<GatsbyFieldSelectorEnum>;
  alternate_languages?: InputMaybe<GatsbyPrismicAlternateLanguageTypeFieldSelector>;
  children?: InputMaybe<GatsbyNodeFieldSelector>;
  data?: InputMaybe<GatsbyPrismicHomePageDataTypeFieldSelector>;
  dataRaw?: InputMaybe<GatsbyFieldSelectorEnum>;
  first_publication_date?: InputMaybe<GatsbyFieldSelectorEnum>;
  href?: InputMaybe<GatsbyFieldSelectorEnum>;
  id?: InputMaybe<GatsbyFieldSelectorEnum>;
  internal?: InputMaybe<GatsbyInternalFieldSelector>;
  lang?: InputMaybe<GatsbyFieldSelectorEnum>;
  last_publication_date?: InputMaybe<GatsbyFieldSelectorEnum>;
  parent?: InputMaybe<GatsbyNodeFieldSelector>;
  prismicId?: InputMaybe<GatsbyFieldSelectorEnum>;
  tags?: InputMaybe<GatsbyFieldSelectorEnum>;
  type?: InputMaybe<GatsbyFieldSelectorEnum>;
  uid?: InputMaybe<GatsbyFieldSelectorEnum>;
  url?: InputMaybe<GatsbyFieldSelectorEnum>;
};

export type GatsbyPrismicHomePageFilterInput = {
  _previewable?: InputMaybe<GatsbyIdQueryOperatorInput>;
  alternate_languages?: InputMaybe<GatsbyPrismicAlternateLanguageTypeFilterListInput>;
  children?: InputMaybe<GatsbyNodeFilterListInput>;
  data?: InputMaybe<GatsbyPrismicHomePageDataTypeFilterInput>;
  dataRaw?: InputMaybe<GatsbyJsonQueryOperatorInput>;
  first_publication_date?: InputMaybe<GatsbyDateQueryOperatorInput>;
  href?: InputMaybe<GatsbyStringQueryOperatorInput>;
  id?: InputMaybe<GatsbyStringQueryOperatorInput>;
  internal?: InputMaybe<GatsbyInternalFilterInput>;
  lang?: InputMaybe<GatsbyStringQueryOperatorInput>;
  last_publication_date?: InputMaybe<GatsbyDateQueryOperatorInput>;
  parent?: InputMaybe<GatsbyNodeFilterInput>;
  prismicId?: InputMaybe<GatsbyIdQueryOperatorInput>;
  tags?: InputMaybe<GatsbyStringQueryOperatorInput>;
  type?: InputMaybe<GatsbyStringQueryOperatorInput>;
  uid?: InputMaybe<GatsbyStringQueryOperatorInput>;
  url?: InputMaybe<GatsbyStringQueryOperatorInput>;
};

export type GatsbyPrismicHomePageGroupConnection = {
  __typename?: 'PrismicHomePageGroupConnection';
  distinct: Array<Scalars['String']>;
  edges: Array<GatsbyPrismicHomePageEdge>;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
  group: Array<GatsbyPrismicHomePageGroupConnection>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  nodes: Array<GatsbyPrismicHomePage>;
  pageInfo: GatsbyPageInfo;
  sum?: Maybe<Scalars['Float']>;
  totalCount: Scalars['Int'];
};


export type GatsbyPrismicHomePageGroupConnectionDistinctArgs = {
  field: GatsbyPrismicHomePageFieldSelector;
};


export type GatsbyPrismicHomePageGroupConnectionGroupArgs = {
  field: GatsbyPrismicHomePageFieldSelector;
  limit?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type GatsbyPrismicHomePageGroupConnectionMaxArgs = {
  field: GatsbyPrismicHomePageFieldSelector;
};


export type GatsbyPrismicHomePageGroupConnectionMinArgs = {
  field: GatsbyPrismicHomePageFieldSelector;
};


export type GatsbyPrismicHomePageGroupConnectionSumArgs = {
  field: GatsbyPrismicHomePageFieldSelector;
};

export type GatsbyPrismicHomePageSortInput = {
  _previewable?: InputMaybe<GatsbySortOrderEnum>;
  alternate_languages?: InputMaybe<GatsbyPrismicAlternateLanguageTypeSortInput>;
  children?: InputMaybe<GatsbyNodeSortInput>;
  data?: InputMaybe<GatsbyPrismicHomePageDataTypeSortInput>;
  dataRaw?: InputMaybe<GatsbySortOrderEnum>;
  first_publication_date?: InputMaybe<GatsbySortOrderEnum>;
  href?: InputMaybe<GatsbySortOrderEnum>;
  id?: InputMaybe<GatsbySortOrderEnum>;
  internal?: InputMaybe<GatsbyInternalSortInput>;
  lang?: InputMaybe<GatsbySortOrderEnum>;
  last_publication_date?: InputMaybe<GatsbySortOrderEnum>;
  parent?: InputMaybe<GatsbyNodeSortInput>;
  prismicId?: InputMaybe<GatsbySortOrderEnum>;
  tags?: InputMaybe<GatsbySortOrderEnum>;
  type?: InputMaybe<GatsbySortOrderEnum>;
  uid?: InputMaybe<GatsbySortOrderEnum>;
  url?: InputMaybe<GatsbySortOrderEnum>;
};

export type GatsbyPrismicImageDimensionsType = {
  __typename?: 'PrismicImageDimensionsType';
  height: Scalars['Int'];
  width: Scalars['Int'];
};

export type GatsbyPrismicImageThumbnailType = {
  __typename?: 'PrismicImageThumbnailType';
  alt?: Maybe<Scalars['String']>;
  copyright?: Maybe<Scalars['String']>;
  dimensions?: Maybe<GatsbyPrismicImageDimensionsType>;
  /** Should be used to generate fixed-width images (i.e. the size of the image doesn't change when the size of the browser changes, and are "fixed"). Returns data compatible with gatsby-image. Instead of accessing this data directly, the GatsbySourceImgixFixed fragment should be used. See the project's README for more information. */
  fixed?: Maybe<GatsbyImgixFixed>;
  /** Should be used to generate fluid-width images (i.e. images that change when the size of the browser changes). Returns data compatible with gatsby-image. Instead of accessing this data directly, the GatsbySourceImgixFluid fragment should be used. See the project's README for more information. */
  fluid?: Maybe<GatsbyImgixFluid>;
  gatsbyImageData?: Maybe<Scalars['JSON']>;
  localFile?: Maybe<GatsbyFile>;
  /** A plain imgix URL with the URL and params applied. */
  url?: Maybe<Scalars['String']>;
};


export type GatsbyPrismicImageThumbnailTypeFixedArgs = {
  height?: InputMaybe<Scalars['Int']>;
  imgixParams?: InputMaybe<GatsbyImgixParamsInput>;
  placeholderImgixParams?: InputMaybe<GatsbyImgixParamsInput>;
  quality?: InputMaybe<Scalars['Int']>;
  width?: InputMaybe<Scalars['Int']>;
};


export type GatsbyPrismicImageThumbnailTypeFluidArgs = {
  imgixParams?: InputMaybe<GatsbyImgixParamsInput>;
  maxHeight?: InputMaybe<Scalars['Int']>;
  maxWidth?: InputMaybe<Scalars['Int']>;
  placeholderImgixParams?: InputMaybe<GatsbyImgixParamsInput>;
  srcSetBreakpoints?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
};


export type GatsbyPrismicImageThumbnailTypeGatsbyImageDataArgs = {
  aspectRatio?: InputMaybe<Scalars['Float']>;
  backgroundColor?: InputMaybe<Scalars['String']>;
  breakpoints?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  height?: InputMaybe<Scalars['Int']>;
  imgixParams?: InputMaybe<GatsbyImgixParamsInput>;
  layout?: InputMaybe<GatsbyGatsbyImageLayout>;
  outputPixelDensities?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  placeholder?: InputMaybe<GatsbyImgixPlaceholder>;
  placeholderImgixParams?: InputMaybe<GatsbyImgixParamsInput>;
  sizes?: InputMaybe<Scalars['String']>;
  srcSetMaxWidth?: InputMaybe<Scalars['Int']>;
  srcSetMinWidth?: InputMaybe<Scalars['Int']>;
  width?: InputMaybe<Scalars['Int']>;
  widthTolerance?: InputMaybe<Scalars['Float']>;
};


export type GatsbyPrismicImageThumbnailTypeUrlArgs = {
  imgixParams?: InputMaybe<GatsbyImgixParamsInput>;
};

export type GatsbyPrismicLinkType = {
  __typename?: 'PrismicLinkType';
  document?: Maybe<GatsbyPrismicAllDocumentTypes>;
  id?: Maybe<Scalars['ID']>;
  isBroken?: Maybe<Scalars['Boolean']>;
  lang?: Maybe<Scalars['String']>;
  link_type?: Maybe<GatsbyPrismicLinkTypeEnum>;
  localFile?: Maybe<GatsbyFile>;
  raw?: Maybe<Scalars['JSON']>;
  size?: Maybe<Scalars['Int']>;
  slug?: Maybe<Scalars['String']>;
  tags?: Maybe<Array<Maybe<Scalars['String']>>>;
  target?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  uid?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

export enum GatsbyPrismicLinkTypeEnum {
  Any = 'Any',
  Document = 'Document',
  Media = 'Media',
  Web = 'Web'
}

export type GatsbyPrismicSharedSliceType = {
  id: Scalars['ID'];
  slice_label?: Maybe<Scalars['String']>;
  slice_type: Scalars['String'];
  variation: Scalars['String'];
  version: Scalars['String'];
};

export type GatsbyPrismicSliceType = {
  id: Scalars['ID'];
  slice_label?: Maybe<Scalars['String']>;
  slice_type: Scalars['String'];
};

export type GatsbyPrismicStructuredTextType = {
  __typename?: 'PrismicStructuredTextType';
  html?: Maybe<Scalars['String']>;
  /** @deprecated This field has been renamed to `richText`. The `richText` field has the same value the `raw` field. */
  raw: Scalars['PrismicStructuredText'];
  richText: Scalars['PrismicStructuredText'];
  text?: Maybe<Scalars['String']>;
};

export type GatsbyPrismicTypePathType = GatsbyNode & {
  __typename?: 'PrismicTypePathType';
  children: Array<GatsbyNode>;
  id: Scalars['ID'];
  internal: GatsbyInternal;
  kind: Scalars['String'];
  parent?: Maybe<GatsbyNode>;
  path: Array<Scalars['String']>;
  type: Scalars['String'];
};

export type GatsbyPrismicTypePathTypeConnection = {
  __typename?: 'PrismicTypePathTypeConnection';
  distinct: Array<Scalars['String']>;
  edges: Array<GatsbyPrismicTypePathTypeEdge>;
  group: Array<GatsbyPrismicTypePathTypeGroupConnection>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  nodes: Array<GatsbyPrismicTypePathType>;
  pageInfo: GatsbyPageInfo;
  sum?: Maybe<Scalars['Float']>;
  totalCount: Scalars['Int'];
};


export type GatsbyPrismicTypePathTypeConnectionDistinctArgs = {
  field: GatsbyPrismicTypePathTypeFieldSelector;
};


export type GatsbyPrismicTypePathTypeConnectionGroupArgs = {
  field: GatsbyPrismicTypePathTypeFieldSelector;
  limit?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type GatsbyPrismicTypePathTypeConnectionMaxArgs = {
  field: GatsbyPrismicTypePathTypeFieldSelector;
};


export type GatsbyPrismicTypePathTypeConnectionMinArgs = {
  field: GatsbyPrismicTypePathTypeFieldSelector;
};


export type GatsbyPrismicTypePathTypeConnectionSumArgs = {
  field: GatsbyPrismicTypePathTypeFieldSelector;
};

export type GatsbyPrismicTypePathTypeEdge = {
  __typename?: 'PrismicTypePathTypeEdge';
  next?: Maybe<GatsbyPrismicTypePathType>;
  node: GatsbyPrismicTypePathType;
  previous?: Maybe<GatsbyPrismicTypePathType>;
};

export type GatsbyPrismicTypePathTypeFieldSelector = {
  children?: InputMaybe<GatsbyNodeFieldSelector>;
  id?: InputMaybe<GatsbyFieldSelectorEnum>;
  internal?: InputMaybe<GatsbyInternalFieldSelector>;
  kind?: InputMaybe<GatsbyFieldSelectorEnum>;
  parent?: InputMaybe<GatsbyNodeFieldSelector>;
  path?: InputMaybe<GatsbyFieldSelectorEnum>;
  type?: InputMaybe<GatsbyFieldSelectorEnum>;
};

export type GatsbyPrismicTypePathTypeFilterInput = {
  children?: InputMaybe<GatsbyNodeFilterListInput>;
  id?: InputMaybe<GatsbyStringQueryOperatorInput>;
  internal?: InputMaybe<GatsbyInternalFilterInput>;
  kind?: InputMaybe<GatsbyStringQueryOperatorInput>;
  parent?: InputMaybe<GatsbyNodeFilterInput>;
  path?: InputMaybe<GatsbyStringQueryOperatorInput>;
  type?: InputMaybe<GatsbyStringQueryOperatorInput>;
};

export type GatsbyPrismicTypePathTypeGroupConnection = {
  __typename?: 'PrismicTypePathTypeGroupConnection';
  distinct: Array<Scalars['String']>;
  edges: Array<GatsbyPrismicTypePathTypeEdge>;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
  group: Array<GatsbyPrismicTypePathTypeGroupConnection>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  nodes: Array<GatsbyPrismicTypePathType>;
  pageInfo: GatsbyPageInfo;
  sum?: Maybe<Scalars['Float']>;
  totalCount: Scalars['Int'];
};


export type GatsbyPrismicTypePathTypeGroupConnectionDistinctArgs = {
  field: GatsbyPrismicTypePathTypeFieldSelector;
};


export type GatsbyPrismicTypePathTypeGroupConnectionGroupArgs = {
  field: GatsbyPrismicTypePathTypeFieldSelector;
  limit?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type GatsbyPrismicTypePathTypeGroupConnectionMaxArgs = {
  field: GatsbyPrismicTypePathTypeFieldSelector;
};


export type GatsbyPrismicTypePathTypeGroupConnectionMinArgs = {
  field: GatsbyPrismicTypePathTypeFieldSelector;
};


export type GatsbyPrismicTypePathTypeGroupConnectionSumArgs = {
  field: GatsbyPrismicTypePathTypeFieldSelector;
};

export type GatsbyPrismicTypePathTypeSortInput = {
  children?: InputMaybe<GatsbyNodeSortInput>;
  id?: InputMaybe<GatsbySortOrderEnum>;
  internal?: InputMaybe<GatsbyInternalSortInput>;
  kind?: InputMaybe<GatsbySortOrderEnum>;
  parent?: InputMaybe<GatsbyNodeSortInput>;
  path?: InputMaybe<GatsbySortOrderEnum>;
  type?: InputMaybe<GatsbySortOrderEnum>;
};

export type GatsbyQuery = {
  __typename?: 'Query';
  allDirectory: GatsbyDirectoryConnection;
  allFile: GatsbyFileConnection;
  allImageSharp: GatsbyImageSharpConnection;
  allPrismicEmbedType: GatsbyPrismicEmbedTypeConnection;
  allPrismicHomePage: GatsbyPrismicHomePageConnection;
  allPrismicTypePathType: GatsbyPrismicTypePathTypeConnection;
  allSite: GatsbySiteConnection;
  allSiteBuildMetadata: GatsbySiteBuildMetadataConnection;
  allSiteFunction: GatsbySiteFunctionConnection;
  allSitePage: GatsbySitePageConnection;
  allSitePlugin: GatsbySitePluginConnection;
  directory?: Maybe<GatsbyDirectory>;
  file?: Maybe<GatsbyFile>;
  imageSharp?: Maybe<GatsbyImageSharp>;
  prismicEmbedType?: Maybe<GatsbyPrismicEmbedType>;
  prismicHomePage?: Maybe<GatsbyPrismicHomePage>;
  prismicTypePathType?: Maybe<GatsbyPrismicTypePathType>;
  site?: Maybe<GatsbySite>;
  siteBuildMetadata?: Maybe<GatsbySiteBuildMetadata>;
  siteFunction?: Maybe<GatsbySiteFunction>;
  sitePage?: Maybe<GatsbySitePage>;
  sitePlugin?: Maybe<GatsbySitePlugin>;
};


export type GatsbyQueryAllDirectoryArgs = {
  filter?: InputMaybe<GatsbyDirectoryFilterInput>;
  limit?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Array<InputMaybe<GatsbyDirectorySortInput>>>;
};


export type GatsbyQueryAllFileArgs = {
  filter?: InputMaybe<GatsbyFileFilterInput>;
  limit?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Array<InputMaybe<GatsbyFileSortInput>>>;
};


export type GatsbyQueryAllImageSharpArgs = {
  filter?: InputMaybe<GatsbyImageSharpFilterInput>;
  limit?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Array<InputMaybe<GatsbyImageSharpSortInput>>>;
};


export type GatsbyQueryAllPrismicEmbedTypeArgs = {
  filter?: InputMaybe<GatsbyPrismicEmbedTypeFilterInput>;
  limit?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Array<InputMaybe<GatsbyPrismicEmbedTypeSortInput>>>;
};


export type GatsbyQueryAllPrismicHomePageArgs = {
  filter?: InputMaybe<GatsbyPrismicHomePageFilterInput>;
  limit?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Array<InputMaybe<GatsbyPrismicHomePageSortInput>>>;
};


export type GatsbyQueryAllPrismicTypePathTypeArgs = {
  filter?: InputMaybe<GatsbyPrismicTypePathTypeFilterInput>;
  limit?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Array<InputMaybe<GatsbyPrismicTypePathTypeSortInput>>>;
};


export type GatsbyQueryAllSiteArgs = {
  filter?: InputMaybe<GatsbySiteFilterInput>;
  limit?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Array<InputMaybe<GatsbySiteSortInput>>>;
};


export type GatsbyQueryAllSiteBuildMetadataArgs = {
  filter?: InputMaybe<GatsbySiteBuildMetadataFilterInput>;
  limit?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Array<InputMaybe<GatsbySiteBuildMetadataSortInput>>>;
};


export type GatsbyQueryAllSiteFunctionArgs = {
  filter?: InputMaybe<GatsbySiteFunctionFilterInput>;
  limit?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Array<InputMaybe<GatsbySiteFunctionSortInput>>>;
};


export type GatsbyQueryAllSitePageArgs = {
  filter?: InputMaybe<GatsbySitePageFilterInput>;
  limit?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Array<InputMaybe<GatsbySitePageSortInput>>>;
};


export type GatsbyQueryAllSitePluginArgs = {
  filter?: InputMaybe<GatsbySitePluginFilterInput>;
  limit?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Array<InputMaybe<GatsbySitePluginSortInput>>>;
};


export type GatsbyQueryDirectoryArgs = {
  absolutePath?: InputMaybe<GatsbyStringQueryOperatorInput>;
  accessTime?: InputMaybe<GatsbyDateQueryOperatorInput>;
  atime?: InputMaybe<GatsbyDateQueryOperatorInput>;
  atimeMs?: InputMaybe<GatsbyFloatQueryOperatorInput>;
  base?: InputMaybe<GatsbyStringQueryOperatorInput>;
  birthTime?: InputMaybe<GatsbyDateQueryOperatorInput>;
  birthtime?: InputMaybe<GatsbyDateQueryOperatorInput>;
  birthtimeMs?: InputMaybe<GatsbyFloatQueryOperatorInput>;
  changeTime?: InputMaybe<GatsbyDateQueryOperatorInput>;
  children?: InputMaybe<GatsbyNodeFilterListInput>;
  ctime?: InputMaybe<GatsbyDateQueryOperatorInput>;
  ctimeMs?: InputMaybe<GatsbyFloatQueryOperatorInput>;
  dev?: InputMaybe<GatsbyIntQueryOperatorInput>;
  dir?: InputMaybe<GatsbyStringQueryOperatorInput>;
  ext?: InputMaybe<GatsbyStringQueryOperatorInput>;
  extension?: InputMaybe<GatsbyStringQueryOperatorInput>;
  gid?: InputMaybe<GatsbyIntQueryOperatorInput>;
  id?: InputMaybe<GatsbyStringQueryOperatorInput>;
  ino?: InputMaybe<GatsbyFloatQueryOperatorInput>;
  internal?: InputMaybe<GatsbyInternalFilterInput>;
  mode?: InputMaybe<GatsbyIntQueryOperatorInput>;
  modifiedTime?: InputMaybe<GatsbyDateQueryOperatorInput>;
  mtime?: InputMaybe<GatsbyDateQueryOperatorInput>;
  mtimeMs?: InputMaybe<GatsbyFloatQueryOperatorInput>;
  name?: InputMaybe<GatsbyStringQueryOperatorInput>;
  nlink?: InputMaybe<GatsbyIntQueryOperatorInput>;
  parent?: InputMaybe<GatsbyNodeFilterInput>;
  prettySize?: InputMaybe<GatsbyStringQueryOperatorInput>;
  rdev?: InputMaybe<GatsbyIntQueryOperatorInput>;
  relativeDirectory?: InputMaybe<GatsbyStringQueryOperatorInput>;
  relativePath?: InputMaybe<GatsbyStringQueryOperatorInput>;
  root?: InputMaybe<GatsbyStringQueryOperatorInput>;
  size?: InputMaybe<GatsbyIntQueryOperatorInput>;
  sourceInstanceName?: InputMaybe<GatsbyStringQueryOperatorInput>;
  uid?: InputMaybe<GatsbyIntQueryOperatorInput>;
};


export type GatsbyQueryFileArgs = {
  absolutePath?: InputMaybe<GatsbyStringQueryOperatorInput>;
  accessTime?: InputMaybe<GatsbyDateQueryOperatorInput>;
  atime?: InputMaybe<GatsbyDateQueryOperatorInput>;
  atimeMs?: InputMaybe<GatsbyFloatQueryOperatorInput>;
  base?: InputMaybe<GatsbyStringQueryOperatorInput>;
  birthTime?: InputMaybe<GatsbyDateQueryOperatorInput>;
  birthtime?: InputMaybe<GatsbyDateQueryOperatorInput>;
  birthtimeMs?: InputMaybe<GatsbyFloatQueryOperatorInput>;
  blksize?: InputMaybe<GatsbyIntQueryOperatorInput>;
  blocks?: InputMaybe<GatsbyIntQueryOperatorInput>;
  changeTime?: InputMaybe<GatsbyDateQueryOperatorInput>;
  childImageSharp?: InputMaybe<GatsbyImageSharpFilterInput>;
  children?: InputMaybe<GatsbyNodeFilterListInput>;
  childrenImageSharp?: InputMaybe<GatsbyImageSharpFilterListInput>;
  ctime?: InputMaybe<GatsbyDateQueryOperatorInput>;
  ctimeMs?: InputMaybe<GatsbyFloatQueryOperatorInput>;
  dev?: InputMaybe<GatsbyIntQueryOperatorInput>;
  dir?: InputMaybe<GatsbyStringQueryOperatorInput>;
  ext?: InputMaybe<GatsbyStringQueryOperatorInput>;
  extension?: InputMaybe<GatsbyStringQueryOperatorInput>;
  gid?: InputMaybe<GatsbyIntQueryOperatorInput>;
  id?: InputMaybe<GatsbyStringQueryOperatorInput>;
  ino?: InputMaybe<GatsbyFloatQueryOperatorInput>;
  internal?: InputMaybe<GatsbyInternalFilterInput>;
  mode?: InputMaybe<GatsbyIntQueryOperatorInput>;
  modifiedTime?: InputMaybe<GatsbyDateQueryOperatorInput>;
  mtime?: InputMaybe<GatsbyDateQueryOperatorInput>;
  mtimeMs?: InputMaybe<GatsbyFloatQueryOperatorInput>;
  name?: InputMaybe<GatsbyStringQueryOperatorInput>;
  nlink?: InputMaybe<GatsbyIntQueryOperatorInput>;
  parent?: InputMaybe<GatsbyNodeFilterInput>;
  prettySize?: InputMaybe<GatsbyStringQueryOperatorInput>;
  publicURL?: InputMaybe<GatsbyStringQueryOperatorInput>;
  rdev?: InputMaybe<GatsbyIntQueryOperatorInput>;
  relativeDirectory?: InputMaybe<GatsbyStringQueryOperatorInput>;
  relativePath?: InputMaybe<GatsbyStringQueryOperatorInput>;
  root?: InputMaybe<GatsbyStringQueryOperatorInput>;
  size?: InputMaybe<GatsbyIntQueryOperatorInput>;
  sourceInstanceName?: InputMaybe<GatsbyStringQueryOperatorInput>;
  uid?: InputMaybe<GatsbyIntQueryOperatorInput>;
};


export type GatsbyQueryImageSharpArgs = {
  children?: InputMaybe<GatsbyNodeFilterListInput>;
  fixed?: InputMaybe<GatsbyImageSharpFixedFilterInput>;
  fluid?: InputMaybe<GatsbyImageSharpFluidFilterInput>;
  gatsbyImageData?: InputMaybe<GatsbyGatsbyImageDataQueryOperatorInput>;
  id?: InputMaybe<GatsbyStringQueryOperatorInput>;
  internal?: InputMaybe<GatsbyInternalFilterInput>;
  original?: InputMaybe<GatsbyImageSharpOriginalFilterInput>;
  parent?: InputMaybe<GatsbyNodeFilterInput>;
  resize?: InputMaybe<GatsbyImageSharpResizeFilterInput>;
};


export type GatsbyQueryPrismicEmbedTypeArgs = {
  children?: InputMaybe<GatsbyNodeFilterListInput>;
  id?: InputMaybe<GatsbyStringQueryOperatorInput>;
  internal?: InputMaybe<GatsbyInternalFilterInput>;
  parent?: InputMaybe<GatsbyNodeFilterInput>;
};


export type GatsbyQueryPrismicHomePageArgs = {
  _previewable?: InputMaybe<GatsbyIdQueryOperatorInput>;
  alternate_languages?: InputMaybe<GatsbyPrismicAlternateLanguageTypeFilterListInput>;
  children?: InputMaybe<GatsbyNodeFilterListInput>;
  data?: InputMaybe<GatsbyPrismicHomePageDataTypeFilterInput>;
  dataRaw?: InputMaybe<GatsbyJsonQueryOperatorInput>;
  first_publication_date?: InputMaybe<GatsbyDateQueryOperatorInput>;
  href?: InputMaybe<GatsbyStringQueryOperatorInput>;
  id?: InputMaybe<GatsbyStringQueryOperatorInput>;
  internal?: InputMaybe<GatsbyInternalFilterInput>;
  lang?: InputMaybe<GatsbyStringQueryOperatorInput>;
  last_publication_date?: InputMaybe<GatsbyDateQueryOperatorInput>;
  parent?: InputMaybe<GatsbyNodeFilterInput>;
  prismicId?: InputMaybe<GatsbyIdQueryOperatorInput>;
  tags?: InputMaybe<GatsbyStringQueryOperatorInput>;
  type?: InputMaybe<GatsbyStringQueryOperatorInput>;
  uid?: InputMaybe<GatsbyStringQueryOperatorInput>;
  url?: InputMaybe<GatsbyStringQueryOperatorInput>;
};


export type GatsbyQueryPrismicTypePathTypeArgs = {
  children?: InputMaybe<GatsbyNodeFilterListInput>;
  id?: InputMaybe<GatsbyStringQueryOperatorInput>;
  internal?: InputMaybe<GatsbyInternalFilterInput>;
  kind?: InputMaybe<GatsbyStringQueryOperatorInput>;
  parent?: InputMaybe<GatsbyNodeFilterInput>;
  path?: InputMaybe<GatsbyStringQueryOperatorInput>;
  type?: InputMaybe<GatsbyStringQueryOperatorInput>;
};


export type GatsbyQuerySiteArgs = {
  buildTime?: InputMaybe<GatsbyDateQueryOperatorInput>;
  children?: InputMaybe<GatsbyNodeFilterListInput>;
  graphqlTypegen?: InputMaybe<GatsbyBooleanQueryOperatorInput>;
  host?: InputMaybe<GatsbyStringQueryOperatorInput>;
  id?: InputMaybe<GatsbyStringQueryOperatorInput>;
  internal?: InputMaybe<GatsbyInternalFilterInput>;
  jsxRuntime?: InputMaybe<GatsbyStringQueryOperatorInput>;
  parent?: InputMaybe<GatsbyNodeFilterInput>;
  pathPrefix?: InputMaybe<GatsbyStringQueryOperatorInput>;
  polyfill?: InputMaybe<GatsbyBooleanQueryOperatorInput>;
  port?: InputMaybe<GatsbyIntQueryOperatorInput>;
  siteMetadata?: InputMaybe<GatsbySiteSiteMetadataFilterInput>;
  trailingSlash?: InputMaybe<GatsbyStringQueryOperatorInput>;
};


export type GatsbyQuerySiteBuildMetadataArgs = {
  buildTime?: InputMaybe<GatsbyDateQueryOperatorInput>;
  children?: InputMaybe<GatsbyNodeFilterListInput>;
  id?: InputMaybe<GatsbyStringQueryOperatorInput>;
  internal?: InputMaybe<GatsbyInternalFilterInput>;
  parent?: InputMaybe<GatsbyNodeFilterInput>;
};


export type GatsbyQuerySiteFunctionArgs = {
  absoluteCompiledFilePath?: InputMaybe<GatsbyStringQueryOperatorInput>;
  children?: InputMaybe<GatsbyNodeFilterListInput>;
  functionRoute?: InputMaybe<GatsbyStringQueryOperatorInput>;
  id?: InputMaybe<GatsbyStringQueryOperatorInput>;
  internal?: InputMaybe<GatsbyInternalFilterInput>;
  matchPath?: InputMaybe<GatsbyStringQueryOperatorInput>;
  originalAbsoluteFilePath?: InputMaybe<GatsbyStringQueryOperatorInput>;
  originalRelativeFilePath?: InputMaybe<GatsbyStringQueryOperatorInput>;
  parent?: InputMaybe<GatsbyNodeFilterInput>;
  pluginName?: InputMaybe<GatsbyStringQueryOperatorInput>;
  relativeCompiledFilePath?: InputMaybe<GatsbyStringQueryOperatorInput>;
};


export type GatsbyQuerySitePageArgs = {
  children?: InputMaybe<GatsbyNodeFilterListInput>;
  component?: InputMaybe<GatsbyStringQueryOperatorInput>;
  componentChunkName?: InputMaybe<GatsbyStringQueryOperatorInput>;
  id?: InputMaybe<GatsbyStringQueryOperatorInput>;
  internal?: InputMaybe<GatsbyInternalFilterInput>;
  internalComponentName?: InputMaybe<GatsbyStringQueryOperatorInput>;
  matchPath?: InputMaybe<GatsbyStringQueryOperatorInput>;
  pageContext?: InputMaybe<GatsbyJsonQueryOperatorInput>;
  parent?: InputMaybe<GatsbyNodeFilterInput>;
  path?: InputMaybe<GatsbyStringQueryOperatorInput>;
  pluginCreator?: InputMaybe<GatsbySitePluginFilterInput>;
};


export type GatsbyQuerySitePluginArgs = {
  browserAPIs?: InputMaybe<GatsbyStringQueryOperatorInput>;
  children?: InputMaybe<GatsbyNodeFilterListInput>;
  id?: InputMaybe<GatsbyStringQueryOperatorInput>;
  internal?: InputMaybe<GatsbyInternalFilterInput>;
  name?: InputMaybe<GatsbyStringQueryOperatorInput>;
  nodeAPIs?: InputMaybe<GatsbyStringQueryOperatorInput>;
  packageJson?: InputMaybe<GatsbyJsonQueryOperatorInput>;
  parent?: InputMaybe<GatsbyNodeFilterInput>;
  pluginFilepath?: InputMaybe<GatsbyStringQueryOperatorInput>;
  pluginOptions?: InputMaybe<GatsbyJsonQueryOperatorInput>;
  resolve?: InputMaybe<GatsbyStringQueryOperatorInput>;
  ssrAPIs?: InputMaybe<GatsbyStringQueryOperatorInput>;
  version?: InputMaybe<GatsbyStringQueryOperatorInput>;
};

export type GatsbySite = GatsbyNode & {
  __typename?: 'Site';
  buildTime?: Maybe<Scalars['Date']>;
  children: Array<GatsbyNode>;
  graphqlTypegen?: Maybe<Scalars['Boolean']>;
  host?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  internal: GatsbyInternal;
  jsxRuntime?: Maybe<Scalars['String']>;
  parent?: Maybe<GatsbyNode>;
  pathPrefix?: Maybe<Scalars['String']>;
  polyfill?: Maybe<Scalars['Boolean']>;
  port?: Maybe<Scalars['Int']>;
  siteMetadata?: Maybe<GatsbySiteSiteMetadata>;
  trailingSlash?: Maybe<Scalars['String']>;
};


export type GatsbySiteBuildTimeArgs = {
  difference?: InputMaybe<Scalars['String']>;
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  locale?: InputMaybe<Scalars['String']>;
};

export type GatsbySiteBuildMetadata = GatsbyNode & {
  __typename?: 'SiteBuildMetadata';
  buildTime?: Maybe<Scalars['Date']>;
  children: Array<GatsbyNode>;
  id: Scalars['ID'];
  internal: GatsbyInternal;
  parent?: Maybe<GatsbyNode>;
};


export type GatsbySiteBuildMetadataBuildTimeArgs = {
  difference?: InputMaybe<Scalars['String']>;
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  locale?: InputMaybe<Scalars['String']>;
};

export type GatsbySiteBuildMetadataConnection = {
  __typename?: 'SiteBuildMetadataConnection';
  distinct: Array<Scalars['String']>;
  edges: Array<GatsbySiteBuildMetadataEdge>;
  group: Array<GatsbySiteBuildMetadataGroupConnection>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  nodes: Array<GatsbySiteBuildMetadata>;
  pageInfo: GatsbyPageInfo;
  sum?: Maybe<Scalars['Float']>;
  totalCount: Scalars['Int'];
};


export type GatsbySiteBuildMetadataConnectionDistinctArgs = {
  field: GatsbySiteBuildMetadataFieldSelector;
};


export type GatsbySiteBuildMetadataConnectionGroupArgs = {
  field: GatsbySiteBuildMetadataFieldSelector;
  limit?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type GatsbySiteBuildMetadataConnectionMaxArgs = {
  field: GatsbySiteBuildMetadataFieldSelector;
};


export type GatsbySiteBuildMetadataConnectionMinArgs = {
  field: GatsbySiteBuildMetadataFieldSelector;
};


export type GatsbySiteBuildMetadataConnectionSumArgs = {
  field: GatsbySiteBuildMetadataFieldSelector;
};

export type GatsbySiteBuildMetadataEdge = {
  __typename?: 'SiteBuildMetadataEdge';
  next?: Maybe<GatsbySiteBuildMetadata>;
  node: GatsbySiteBuildMetadata;
  previous?: Maybe<GatsbySiteBuildMetadata>;
};

export type GatsbySiteBuildMetadataFieldSelector = {
  buildTime?: InputMaybe<GatsbyFieldSelectorEnum>;
  children?: InputMaybe<GatsbyNodeFieldSelector>;
  id?: InputMaybe<GatsbyFieldSelectorEnum>;
  internal?: InputMaybe<GatsbyInternalFieldSelector>;
  parent?: InputMaybe<GatsbyNodeFieldSelector>;
};

export type GatsbySiteBuildMetadataFilterInput = {
  buildTime?: InputMaybe<GatsbyDateQueryOperatorInput>;
  children?: InputMaybe<GatsbyNodeFilterListInput>;
  id?: InputMaybe<GatsbyStringQueryOperatorInput>;
  internal?: InputMaybe<GatsbyInternalFilterInput>;
  parent?: InputMaybe<GatsbyNodeFilterInput>;
};

export type GatsbySiteBuildMetadataGroupConnection = {
  __typename?: 'SiteBuildMetadataGroupConnection';
  distinct: Array<Scalars['String']>;
  edges: Array<GatsbySiteBuildMetadataEdge>;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
  group: Array<GatsbySiteBuildMetadataGroupConnection>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  nodes: Array<GatsbySiteBuildMetadata>;
  pageInfo: GatsbyPageInfo;
  sum?: Maybe<Scalars['Float']>;
  totalCount: Scalars['Int'];
};


export type GatsbySiteBuildMetadataGroupConnectionDistinctArgs = {
  field: GatsbySiteBuildMetadataFieldSelector;
};


export type GatsbySiteBuildMetadataGroupConnectionGroupArgs = {
  field: GatsbySiteBuildMetadataFieldSelector;
  limit?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type GatsbySiteBuildMetadataGroupConnectionMaxArgs = {
  field: GatsbySiteBuildMetadataFieldSelector;
};


export type GatsbySiteBuildMetadataGroupConnectionMinArgs = {
  field: GatsbySiteBuildMetadataFieldSelector;
};


export type GatsbySiteBuildMetadataGroupConnectionSumArgs = {
  field: GatsbySiteBuildMetadataFieldSelector;
};

export type GatsbySiteBuildMetadataSortInput = {
  buildTime?: InputMaybe<GatsbySortOrderEnum>;
  children?: InputMaybe<GatsbyNodeSortInput>;
  id?: InputMaybe<GatsbySortOrderEnum>;
  internal?: InputMaybe<GatsbyInternalSortInput>;
  parent?: InputMaybe<GatsbyNodeSortInput>;
};

export type GatsbySiteConnection = {
  __typename?: 'SiteConnection';
  distinct: Array<Scalars['String']>;
  edges: Array<GatsbySiteEdge>;
  group: Array<GatsbySiteGroupConnection>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  nodes: Array<GatsbySite>;
  pageInfo: GatsbyPageInfo;
  sum?: Maybe<Scalars['Float']>;
  totalCount: Scalars['Int'];
};


export type GatsbySiteConnectionDistinctArgs = {
  field: GatsbySiteFieldSelector;
};


export type GatsbySiteConnectionGroupArgs = {
  field: GatsbySiteFieldSelector;
  limit?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type GatsbySiteConnectionMaxArgs = {
  field: GatsbySiteFieldSelector;
};


export type GatsbySiteConnectionMinArgs = {
  field: GatsbySiteFieldSelector;
};


export type GatsbySiteConnectionSumArgs = {
  field: GatsbySiteFieldSelector;
};

export type GatsbySiteEdge = {
  __typename?: 'SiteEdge';
  next?: Maybe<GatsbySite>;
  node: GatsbySite;
  previous?: Maybe<GatsbySite>;
};

export type GatsbySiteFieldSelector = {
  buildTime?: InputMaybe<GatsbyFieldSelectorEnum>;
  children?: InputMaybe<GatsbyNodeFieldSelector>;
  graphqlTypegen?: InputMaybe<GatsbyFieldSelectorEnum>;
  host?: InputMaybe<GatsbyFieldSelectorEnum>;
  id?: InputMaybe<GatsbyFieldSelectorEnum>;
  internal?: InputMaybe<GatsbyInternalFieldSelector>;
  jsxRuntime?: InputMaybe<GatsbyFieldSelectorEnum>;
  parent?: InputMaybe<GatsbyNodeFieldSelector>;
  pathPrefix?: InputMaybe<GatsbyFieldSelectorEnum>;
  polyfill?: InputMaybe<GatsbyFieldSelectorEnum>;
  port?: InputMaybe<GatsbyFieldSelectorEnum>;
  siteMetadata?: InputMaybe<GatsbySiteSiteMetadataFieldSelector>;
  trailingSlash?: InputMaybe<GatsbyFieldSelectorEnum>;
};

export type GatsbySiteFilterInput = {
  buildTime?: InputMaybe<GatsbyDateQueryOperatorInput>;
  children?: InputMaybe<GatsbyNodeFilterListInput>;
  graphqlTypegen?: InputMaybe<GatsbyBooleanQueryOperatorInput>;
  host?: InputMaybe<GatsbyStringQueryOperatorInput>;
  id?: InputMaybe<GatsbyStringQueryOperatorInput>;
  internal?: InputMaybe<GatsbyInternalFilterInput>;
  jsxRuntime?: InputMaybe<GatsbyStringQueryOperatorInput>;
  parent?: InputMaybe<GatsbyNodeFilterInput>;
  pathPrefix?: InputMaybe<GatsbyStringQueryOperatorInput>;
  polyfill?: InputMaybe<GatsbyBooleanQueryOperatorInput>;
  port?: InputMaybe<GatsbyIntQueryOperatorInput>;
  siteMetadata?: InputMaybe<GatsbySiteSiteMetadataFilterInput>;
  trailingSlash?: InputMaybe<GatsbyStringQueryOperatorInput>;
};

export type GatsbySiteFunction = GatsbyNode & {
  __typename?: 'SiteFunction';
  absoluteCompiledFilePath: Scalars['String'];
  children: Array<GatsbyNode>;
  functionRoute: Scalars['String'];
  id: Scalars['ID'];
  internal: GatsbyInternal;
  matchPath?: Maybe<Scalars['String']>;
  originalAbsoluteFilePath: Scalars['String'];
  originalRelativeFilePath: Scalars['String'];
  parent?: Maybe<GatsbyNode>;
  pluginName: Scalars['String'];
  relativeCompiledFilePath: Scalars['String'];
};

export type GatsbySiteFunctionConnection = {
  __typename?: 'SiteFunctionConnection';
  distinct: Array<Scalars['String']>;
  edges: Array<GatsbySiteFunctionEdge>;
  group: Array<GatsbySiteFunctionGroupConnection>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  nodes: Array<GatsbySiteFunction>;
  pageInfo: GatsbyPageInfo;
  sum?: Maybe<Scalars['Float']>;
  totalCount: Scalars['Int'];
};


export type GatsbySiteFunctionConnectionDistinctArgs = {
  field: GatsbySiteFunctionFieldSelector;
};


export type GatsbySiteFunctionConnectionGroupArgs = {
  field: GatsbySiteFunctionFieldSelector;
  limit?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type GatsbySiteFunctionConnectionMaxArgs = {
  field: GatsbySiteFunctionFieldSelector;
};


export type GatsbySiteFunctionConnectionMinArgs = {
  field: GatsbySiteFunctionFieldSelector;
};


export type GatsbySiteFunctionConnectionSumArgs = {
  field: GatsbySiteFunctionFieldSelector;
};

export type GatsbySiteFunctionEdge = {
  __typename?: 'SiteFunctionEdge';
  next?: Maybe<GatsbySiteFunction>;
  node: GatsbySiteFunction;
  previous?: Maybe<GatsbySiteFunction>;
};

export type GatsbySiteFunctionFieldSelector = {
  absoluteCompiledFilePath?: InputMaybe<GatsbyFieldSelectorEnum>;
  children?: InputMaybe<GatsbyNodeFieldSelector>;
  functionRoute?: InputMaybe<GatsbyFieldSelectorEnum>;
  id?: InputMaybe<GatsbyFieldSelectorEnum>;
  internal?: InputMaybe<GatsbyInternalFieldSelector>;
  matchPath?: InputMaybe<GatsbyFieldSelectorEnum>;
  originalAbsoluteFilePath?: InputMaybe<GatsbyFieldSelectorEnum>;
  originalRelativeFilePath?: InputMaybe<GatsbyFieldSelectorEnum>;
  parent?: InputMaybe<GatsbyNodeFieldSelector>;
  pluginName?: InputMaybe<GatsbyFieldSelectorEnum>;
  relativeCompiledFilePath?: InputMaybe<GatsbyFieldSelectorEnum>;
};

export type GatsbySiteFunctionFilterInput = {
  absoluteCompiledFilePath?: InputMaybe<GatsbyStringQueryOperatorInput>;
  children?: InputMaybe<GatsbyNodeFilterListInput>;
  functionRoute?: InputMaybe<GatsbyStringQueryOperatorInput>;
  id?: InputMaybe<GatsbyStringQueryOperatorInput>;
  internal?: InputMaybe<GatsbyInternalFilterInput>;
  matchPath?: InputMaybe<GatsbyStringQueryOperatorInput>;
  originalAbsoluteFilePath?: InputMaybe<GatsbyStringQueryOperatorInput>;
  originalRelativeFilePath?: InputMaybe<GatsbyStringQueryOperatorInput>;
  parent?: InputMaybe<GatsbyNodeFilterInput>;
  pluginName?: InputMaybe<GatsbyStringQueryOperatorInput>;
  relativeCompiledFilePath?: InputMaybe<GatsbyStringQueryOperatorInput>;
};

export type GatsbySiteFunctionGroupConnection = {
  __typename?: 'SiteFunctionGroupConnection';
  distinct: Array<Scalars['String']>;
  edges: Array<GatsbySiteFunctionEdge>;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
  group: Array<GatsbySiteFunctionGroupConnection>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  nodes: Array<GatsbySiteFunction>;
  pageInfo: GatsbyPageInfo;
  sum?: Maybe<Scalars['Float']>;
  totalCount: Scalars['Int'];
};


export type GatsbySiteFunctionGroupConnectionDistinctArgs = {
  field: GatsbySiteFunctionFieldSelector;
};


export type GatsbySiteFunctionGroupConnectionGroupArgs = {
  field: GatsbySiteFunctionFieldSelector;
  limit?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type GatsbySiteFunctionGroupConnectionMaxArgs = {
  field: GatsbySiteFunctionFieldSelector;
};


export type GatsbySiteFunctionGroupConnectionMinArgs = {
  field: GatsbySiteFunctionFieldSelector;
};


export type GatsbySiteFunctionGroupConnectionSumArgs = {
  field: GatsbySiteFunctionFieldSelector;
};

export type GatsbySiteFunctionSortInput = {
  absoluteCompiledFilePath?: InputMaybe<GatsbySortOrderEnum>;
  children?: InputMaybe<GatsbyNodeSortInput>;
  functionRoute?: InputMaybe<GatsbySortOrderEnum>;
  id?: InputMaybe<GatsbySortOrderEnum>;
  internal?: InputMaybe<GatsbyInternalSortInput>;
  matchPath?: InputMaybe<GatsbySortOrderEnum>;
  originalAbsoluteFilePath?: InputMaybe<GatsbySortOrderEnum>;
  originalRelativeFilePath?: InputMaybe<GatsbySortOrderEnum>;
  parent?: InputMaybe<GatsbyNodeSortInput>;
  pluginName?: InputMaybe<GatsbySortOrderEnum>;
  relativeCompiledFilePath?: InputMaybe<GatsbySortOrderEnum>;
};

export type GatsbySiteGroupConnection = {
  __typename?: 'SiteGroupConnection';
  distinct: Array<Scalars['String']>;
  edges: Array<GatsbySiteEdge>;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
  group: Array<GatsbySiteGroupConnection>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  nodes: Array<GatsbySite>;
  pageInfo: GatsbyPageInfo;
  sum?: Maybe<Scalars['Float']>;
  totalCount: Scalars['Int'];
};


export type GatsbySiteGroupConnectionDistinctArgs = {
  field: GatsbySiteFieldSelector;
};


export type GatsbySiteGroupConnectionGroupArgs = {
  field: GatsbySiteFieldSelector;
  limit?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type GatsbySiteGroupConnectionMaxArgs = {
  field: GatsbySiteFieldSelector;
};


export type GatsbySiteGroupConnectionMinArgs = {
  field: GatsbySiteFieldSelector;
};


export type GatsbySiteGroupConnectionSumArgs = {
  field: GatsbySiteFieldSelector;
};

export type GatsbySitePage = GatsbyNode & {
  __typename?: 'SitePage';
  children: Array<GatsbyNode>;
  component: Scalars['String'];
  componentChunkName: Scalars['String'];
  id: Scalars['ID'];
  internal: GatsbyInternal;
  internalComponentName: Scalars['String'];
  matchPath?: Maybe<Scalars['String']>;
  pageContext?: Maybe<Scalars['JSON']>;
  parent?: Maybe<GatsbyNode>;
  path: Scalars['String'];
  pluginCreator?: Maybe<GatsbySitePlugin>;
};

export type GatsbySitePageConnection = {
  __typename?: 'SitePageConnection';
  distinct: Array<Scalars['String']>;
  edges: Array<GatsbySitePageEdge>;
  group: Array<GatsbySitePageGroupConnection>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  nodes: Array<GatsbySitePage>;
  pageInfo: GatsbyPageInfo;
  sum?: Maybe<Scalars['Float']>;
  totalCount: Scalars['Int'];
};


export type GatsbySitePageConnectionDistinctArgs = {
  field: GatsbySitePageFieldSelector;
};


export type GatsbySitePageConnectionGroupArgs = {
  field: GatsbySitePageFieldSelector;
  limit?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type GatsbySitePageConnectionMaxArgs = {
  field: GatsbySitePageFieldSelector;
};


export type GatsbySitePageConnectionMinArgs = {
  field: GatsbySitePageFieldSelector;
};


export type GatsbySitePageConnectionSumArgs = {
  field: GatsbySitePageFieldSelector;
};

export type GatsbySitePageEdge = {
  __typename?: 'SitePageEdge';
  next?: Maybe<GatsbySitePage>;
  node: GatsbySitePage;
  previous?: Maybe<GatsbySitePage>;
};

export type GatsbySitePageFieldSelector = {
  children?: InputMaybe<GatsbyNodeFieldSelector>;
  component?: InputMaybe<GatsbyFieldSelectorEnum>;
  componentChunkName?: InputMaybe<GatsbyFieldSelectorEnum>;
  id?: InputMaybe<GatsbyFieldSelectorEnum>;
  internal?: InputMaybe<GatsbyInternalFieldSelector>;
  internalComponentName?: InputMaybe<GatsbyFieldSelectorEnum>;
  matchPath?: InputMaybe<GatsbyFieldSelectorEnum>;
  pageContext?: InputMaybe<GatsbyFieldSelectorEnum>;
  parent?: InputMaybe<GatsbyNodeFieldSelector>;
  path?: InputMaybe<GatsbyFieldSelectorEnum>;
  pluginCreator?: InputMaybe<GatsbySitePluginFieldSelector>;
};

export type GatsbySitePageFilterInput = {
  children?: InputMaybe<GatsbyNodeFilterListInput>;
  component?: InputMaybe<GatsbyStringQueryOperatorInput>;
  componentChunkName?: InputMaybe<GatsbyStringQueryOperatorInput>;
  id?: InputMaybe<GatsbyStringQueryOperatorInput>;
  internal?: InputMaybe<GatsbyInternalFilterInput>;
  internalComponentName?: InputMaybe<GatsbyStringQueryOperatorInput>;
  matchPath?: InputMaybe<GatsbyStringQueryOperatorInput>;
  pageContext?: InputMaybe<GatsbyJsonQueryOperatorInput>;
  parent?: InputMaybe<GatsbyNodeFilterInput>;
  path?: InputMaybe<GatsbyStringQueryOperatorInput>;
  pluginCreator?: InputMaybe<GatsbySitePluginFilterInput>;
};

export type GatsbySitePageGroupConnection = {
  __typename?: 'SitePageGroupConnection';
  distinct: Array<Scalars['String']>;
  edges: Array<GatsbySitePageEdge>;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
  group: Array<GatsbySitePageGroupConnection>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  nodes: Array<GatsbySitePage>;
  pageInfo: GatsbyPageInfo;
  sum?: Maybe<Scalars['Float']>;
  totalCount: Scalars['Int'];
};


export type GatsbySitePageGroupConnectionDistinctArgs = {
  field: GatsbySitePageFieldSelector;
};


export type GatsbySitePageGroupConnectionGroupArgs = {
  field: GatsbySitePageFieldSelector;
  limit?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type GatsbySitePageGroupConnectionMaxArgs = {
  field: GatsbySitePageFieldSelector;
};


export type GatsbySitePageGroupConnectionMinArgs = {
  field: GatsbySitePageFieldSelector;
};


export type GatsbySitePageGroupConnectionSumArgs = {
  field: GatsbySitePageFieldSelector;
};

export type GatsbySitePageSortInput = {
  children?: InputMaybe<GatsbyNodeSortInput>;
  component?: InputMaybe<GatsbySortOrderEnum>;
  componentChunkName?: InputMaybe<GatsbySortOrderEnum>;
  id?: InputMaybe<GatsbySortOrderEnum>;
  internal?: InputMaybe<GatsbyInternalSortInput>;
  internalComponentName?: InputMaybe<GatsbySortOrderEnum>;
  matchPath?: InputMaybe<GatsbySortOrderEnum>;
  pageContext?: InputMaybe<GatsbySortOrderEnum>;
  parent?: InputMaybe<GatsbyNodeSortInput>;
  path?: InputMaybe<GatsbySortOrderEnum>;
  pluginCreator?: InputMaybe<GatsbySitePluginSortInput>;
};

export type GatsbySitePlugin = GatsbyNode & {
  __typename?: 'SitePlugin';
  browserAPIs?: Maybe<Array<Maybe<Scalars['String']>>>;
  children: Array<GatsbyNode>;
  id: Scalars['ID'];
  internal: GatsbyInternal;
  name?: Maybe<Scalars['String']>;
  nodeAPIs?: Maybe<Array<Maybe<Scalars['String']>>>;
  packageJson?: Maybe<Scalars['JSON']>;
  parent?: Maybe<GatsbyNode>;
  pluginFilepath?: Maybe<Scalars['String']>;
  pluginOptions?: Maybe<Scalars['JSON']>;
  resolve?: Maybe<Scalars['String']>;
  ssrAPIs?: Maybe<Array<Maybe<Scalars['String']>>>;
  version?: Maybe<Scalars['String']>;
};

export type GatsbySitePluginConnection = {
  __typename?: 'SitePluginConnection';
  distinct: Array<Scalars['String']>;
  edges: Array<GatsbySitePluginEdge>;
  group: Array<GatsbySitePluginGroupConnection>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  nodes: Array<GatsbySitePlugin>;
  pageInfo: GatsbyPageInfo;
  sum?: Maybe<Scalars['Float']>;
  totalCount: Scalars['Int'];
};


export type GatsbySitePluginConnectionDistinctArgs = {
  field: GatsbySitePluginFieldSelector;
};


export type GatsbySitePluginConnectionGroupArgs = {
  field: GatsbySitePluginFieldSelector;
  limit?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type GatsbySitePluginConnectionMaxArgs = {
  field: GatsbySitePluginFieldSelector;
};


export type GatsbySitePluginConnectionMinArgs = {
  field: GatsbySitePluginFieldSelector;
};


export type GatsbySitePluginConnectionSumArgs = {
  field: GatsbySitePluginFieldSelector;
};

export type GatsbySitePluginEdge = {
  __typename?: 'SitePluginEdge';
  next?: Maybe<GatsbySitePlugin>;
  node: GatsbySitePlugin;
  previous?: Maybe<GatsbySitePlugin>;
};

export type GatsbySitePluginFieldSelector = {
  browserAPIs?: InputMaybe<GatsbyFieldSelectorEnum>;
  children?: InputMaybe<GatsbyNodeFieldSelector>;
  id?: InputMaybe<GatsbyFieldSelectorEnum>;
  internal?: InputMaybe<GatsbyInternalFieldSelector>;
  name?: InputMaybe<GatsbyFieldSelectorEnum>;
  nodeAPIs?: InputMaybe<GatsbyFieldSelectorEnum>;
  packageJson?: InputMaybe<GatsbyFieldSelectorEnum>;
  parent?: InputMaybe<GatsbyNodeFieldSelector>;
  pluginFilepath?: InputMaybe<GatsbyFieldSelectorEnum>;
  pluginOptions?: InputMaybe<GatsbyFieldSelectorEnum>;
  resolve?: InputMaybe<GatsbyFieldSelectorEnum>;
  ssrAPIs?: InputMaybe<GatsbyFieldSelectorEnum>;
  version?: InputMaybe<GatsbyFieldSelectorEnum>;
};

export type GatsbySitePluginFilterInput = {
  browserAPIs?: InputMaybe<GatsbyStringQueryOperatorInput>;
  children?: InputMaybe<GatsbyNodeFilterListInput>;
  id?: InputMaybe<GatsbyStringQueryOperatorInput>;
  internal?: InputMaybe<GatsbyInternalFilterInput>;
  name?: InputMaybe<GatsbyStringQueryOperatorInput>;
  nodeAPIs?: InputMaybe<GatsbyStringQueryOperatorInput>;
  packageJson?: InputMaybe<GatsbyJsonQueryOperatorInput>;
  parent?: InputMaybe<GatsbyNodeFilterInput>;
  pluginFilepath?: InputMaybe<GatsbyStringQueryOperatorInput>;
  pluginOptions?: InputMaybe<GatsbyJsonQueryOperatorInput>;
  resolve?: InputMaybe<GatsbyStringQueryOperatorInput>;
  ssrAPIs?: InputMaybe<GatsbyStringQueryOperatorInput>;
  version?: InputMaybe<GatsbyStringQueryOperatorInput>;
};

export type GatsbySitePluginGroupConnection = {
  __typename?: 'SitePluginGroupConnection';
  distinct: Array<Scalars['String']>;
  edges: Array<GatsbySitePluginEdge>;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
  group: Array<GatsbySitePluginGroupConnection>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  nodes: Array<GatsbySitePlugin>;
  pageInfo: GatsbyPageInfo;
  sum?: Maybe<Scalars['Float']>;
  totalCount: Scalars['Int'];
};


export type GatsbySitePluginGroupConnectionDistinctArgs = {
  field: GatsbySitePluginFieldSelector;
};


export type GatsbySitePluginGroupConnectionGroupArgs = {
  field: GatsbySitePluginFieldSelector;
  limit?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type GatsbySitePluginGroupConnectionMaxArgs = {
  field: GatsbySitePluginFieldSelector;
};


export type GatsbySitePluginGroupConnectionMinArgs = {
  field: GatsbySitePluginFieldSelector;
};


export type GatsbySitePluginGroupConnectionSumArgs = {
  field: GatsbySitePluginFieldSelector;
};

export type GatsbySitePluginSortInput = {
  browserAPIs?: InputMaybe<GatsbySortOrderEnum>;
  children?: InputMaybe<GatsbyNodeSortInput>;
  id?: InputMaybe<GatsbySortOrderEnum>;
  internal?: InputMaybe<GatsbyInternalSortInput>;
  name?: InputMaybe<GatsbySortOrderEnum>;
  nodeAPIs?: InputMaybe<GatsbySortOrderEnum>;
  packageJson?: InputMaybe<GatsbySortOrderEnum>;
  parent?: InputMaybe<GatsbyNodeSortInput>;
  pluginFilepath?: InputMaybe<GatsbySortOrderEnum>;
  pluginOptions?: InputMaybe<GatsbySortOrderEnum>;
  resolve?: InputMaybe<GatsbySortOrderEnum>;
  ssrAPIs?: InputMaybe<GatsbySortOrderEnum>;
  version?: InputMaybe<GatsbySortOrderEnum>;
};

export type GatsbySiteSiteMetadata = {
  __typename?: 'SiteSiteMetadata';
  description?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
};

export type GatsbySiteSiteMetadataFieldSelector = {
  description?: InputMaybe<GatsbyFieldSelectorEnum>;
  title?: InputMaybe<GatsbyFieldSelectorEnum>;
};

export type GatsbySiteSiteMetadataFilterInput = {
  description?: InputMaybe<GatsbyStringQueryOperatorInput>;
  title?: InputMaybe<GatsbyStringQueryOperatorInput>;
};

export type GatsbySiteSiteMetadataSortInput = {
  description?: InputMaybe<GatsbySortOrderEnum>;
  title?: InputMaybe<GatsbySortOrderEnum>;
};

export type GatsbySiteSortInput = {
  buildTime?: InputMaybe<GatsbySortOrderEnum>;
  children?: InputMaybe<GatsbyNodeSortInput>;
  graphqlTypegen?: InputMaybe<GatsbySortOrderEnum>;
  host?: InputMaybe<GatsbySortOrderEnum>;
  id?: InputMaybe<GatsbySortOrderEnum>;
  internal?: InputMaybe<GatsbyInternalSortInput>;
  jsxRuntime?: InputMaybe<GatsbySortOrderEnum>;
  parent?: InputMaybe<GatsbyNodeSortInput>;
  pathPrefix?: InputMaybe<GatsbySortOrderEnum>;
  polyfill?: InputMaybe<GatsbySortOrderEnum>;
  port?: InputMaybe<GatsbySortOrderEnum>;
  siteMetadata?: InputMaybe<GatsbySiteSiteMetadataSortInput>;
  trailingSlash?: InputMaybe<GatsbySortOrderEnum>;
};

export enum GatsbySortOrderEnum {
  Asc = 'ASC',
  Desc = 'DESC'
}

export type GatsbyStringQueryOperatorInput = {
  eq?: InputMaybe<Scalars['String']>;
  glob?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  ne?: InputMaybe<Scalars['String']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  regex?: InputMaybe<Scalars['String']>;
};

export type GatsbyTransformOptions = {
  cropFocus?: InputMaybe<GatsbyImageCropFocus>;
  duotone?: InputMaybe<GatsbyDuotoneGradient>;
  fit?: InputMaybe<GatsbyImageFit>;
  grayscale?: InputMaybe<Scalars['Boolean']>;
  rotate?: InputMaybe<Scalars['Int']>;
  trim?: InputMaybe<Scalars['Float']>;
};

export type GatsbyWebPOptions = {
  quality?: InputMaybe<Scalars['Int']>;
};
