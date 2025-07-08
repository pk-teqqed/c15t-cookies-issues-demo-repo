import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  Date: { input: any; output: any; }
  DateTime: { input: any; output: any; }
  Hex: { input: any; output: any; }
  Json: { input: any; output: any; }
  Long: { input: any; output: any; }
  RGBAHue: { input: any; output: any; }
  RGBATransparency: { input: any; output: any; }
  RichTextAST: { input: any; output: any; }
};

export type Aggregate = {
  __typename?: 'Aggregate';
  count: Scalars['Int']['output'];
};

/** Asset system model */
export type Asset = Entity & Node & {
  __typename?: 'Asset';
  altText?: Maybe<Scalars['String']['output']>;
  authorAvatar: Array<Author>;
  coverImagePost: Array<Post>;
  /** The time the document was created */
  createdAt: Scalars['DateTime']['output'];
  /** User that created this document */
  createdBy?: Maybe<User>;
  /** Get the document in other stages */
  documentInStages: Array<Asset>;
  /** The file name */
  fileName: Scalars['String']['output'];
  focalPoint?: Maybe<Scalars['Json']['output']>;
  /** The file handle */
  handle: Scalars['String']['output'];
  /** The height of the file */
  height?: Maybe<Scalars['Float']['output']>;
  heroSectionAsestNewLandingPage: Array<NewLandingPage>;
  /** List of Asset versions */
  history: Array<Version>;
  /** The unique identifier */
  id: Scalars['ID']['output'];
  /** System Locale field */
  locale: Locale;
  /** Get the other localizations for this document */
  localizations: Array<Asset>;
  /** The mime type of the file */
  mimeType?: Maybe<Scalars['String']['output']>;
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  /** User that last published this document */
  publishedBy?: Maybe<User>;
  scheduledIn: Array<ScheduledOperation>;
  /** The file size */
  size?: Maybe<Scalars['Float']['output']>;
  /** System stage field */
  stage: Stage;
  /** The time the document was updated */
  updatedAt: Scalars['DateTime']['output'];
  /** User that last updated this document */
  updatedBy?: Maybe<User>;
  /** Get the url for the asset with provided transformations applied. */
  url: Scalars['String']['output'];
  /** The file width */
  width?: Maybe<Scalars['Float']['output']>;
};


/** Asset system model */
export type AssetAuthorAvatarArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: InputMaybe<Array<Locale>>;
  orderBy?: InputMaybe<AuthorOrderByInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<AuthorWhereInput>;
};


/** Asset system model */
export type AssetCoverImagePostArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: InputMaybe<Array<Locale>>;
  orderBy?: InputMaybe<PostOrderByInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<PostWhereInput>;
};


/** Asset system model */
export type AssetCreatedAtArgs = {
  variation?: SystemDateTimeFieldVariation;
};


/** Asset system model */
export type AssetCreatedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  locales?: InputMaybe<Array<Locale>>;
};


/** Asset system model */
export type AssetDocumentInStagesArgs = {
  includeCurrent?: Scalars['Boolean']['input'];
  inheritLocale?: Scalars['Boolean']['input'];
  stages?: Array<Stage>;
};


/** Asset system model */
export type AssetHeroSectionAsestNewLandingPageArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: InputMaybe<Array<Locale>>;
  orderBy?: InputMaybe<NewLandingPageOrderByInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<NewLandingPageWhereInput>;
};


/** Asset system model */
export type AssetHistoryArgs = {
  limit?: Scalars['Int']['input'];
  skip?: Scalars['Int']['input'];
  stageOverride?: InputMaybe<Stage>;
};


/** Asset system model */
export type AssetLocalizationsArgs = {
  includeCurrent?: Scalars['Boolean']['input'];
  locales?: Array<Locale>;
};


/** Asset system model */
export type AssetPublishedAtArgs = {
  variation?: SystemDateTimeFieldVariation;
};


/** Asset system model */
export type AssetPublishedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  locales?: InputMaybe<Array<Locale>>;
};


/** Asset system model */
export type AssetScheduledInArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: InputMaybe<Array<Locale>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<ScheduledOperationWhereInput>;
};


/** Asset system model */
export type AssetUpdatedAtArgs = {
  variation?: SystemDateTimeFieldVariation;
};


/** Asset system model */
export type AssetUpdatedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  locales?: InputMaybe<Array<Locale>>;
};


/** Asset system model */
export type AssetUrlArgs = {
  transformation?: InputMaybe<AssetTransformationInput>;
};

export type AssetConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Document to connect */
  where: AssetWhereUniqueInput;
};

/** A connection to a list of items. */
export type AssetConnection = {
  __typename?: 'AssetConnection';
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<AssetEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type AssetCreateInput = {
  altText?: InputMaybe<Scalars['String']['input']>;
  authorAvatar?: InputMaybe<AuthorCreateManyInlineInput>;
  backgroundImageCategoryDetail?: InputMaybe<CategoryDetailCreateManyInlineInput>;
  coverImagePost?: InputMaybe<PostCreateManyInlineInput>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  fileName: Scalars['String']['input'];
  /** focalPoint input for default locale (en) */
  focalPoint?: InputMaybe<Scalars['Json']['input']>;
  handle: Scalars['String']['input'];
  height?: InputMaybe<Scalars['Float']['input']>;
  heroSectionAsestNewLandingPage?: InputMaybe<NewLandingPageCreateManyInlineInput>;
  iconLandingPagePoint?: InputMaybe<LandingPagePointCreateManyInlineInput>;
  imageCollection?: InputMaybe<CollectionCreateManyInlineInput>;
  imageImageWithText?: InputMaybe<ImageWithTextCreateManyInlineInput>;
  imageTemplatesDetail?: InputMaybe<TemplatesDetailCreateManyInlineInput>;
  imagesLandingPageSlidingImageGallery?: InputMaybe<LandingPageSlidingImageGalleryCreateManyInlineInput>;
  imagesTwoFoldmageGallery?: InputMaybe<TwoFoldmageGalleryCreateManyInlineInput>;
  /** Inline mutations for managing document localizations excluding the default locale */
  localizations?: InputMaybe<AssetCreateLocalizationsInput>;
  mimeType?: InputMaybe<Scalars['String']['input']>;
  size?: InputMaybe<Scalars['Float']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  width?: InputMaybe<Scalars['Float']['input']>;
};

export type AssetCreateLocalizationDataInput = {
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  fileName: Scalars['String']['input'];
  focalPoint?: InputMaybe<Scalars['Json']['input']>;
  handle: Scalars['String']['input'];
  height?: InputMaybe<Scalars['Float']['input']>;
  mimeType?: InputMaybe<Scalars['String']['input']>;
  size?: InputMaybe<Scalars['Float']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  width?: InputMaybe<Scalars['Float']['input']>;
};

export type AssetCreateLocalizationInput = {
  /** Localization input */
  data: AssetCreateLocalizationDataInput;
  locale: Locale;
};

export type AssetCreateLocalizationsInput = {
  /** Create localizations for the newly-created document */
  create?: InputMaybe<Array<AssetCreateLocalizationInput>>;
};

export type AssetCreateManyInlineInput = {
  /** Connect multiple existing Asset documents */
  connect?: InputMaybe<Array<AssetWhereUniqueInput>>;
  /** Create and connect multiple existing Asset documents */
  create?: InputMaybe<Array<AssetCreateInput>>;
};

export type AssetCreateOneInlineInput = {
  /** Connect one existing Asset document */
  connect?: InputMaybe<AssetWhereUniqueInput>;
  /** Create and connect one Asset document */
  create?: InputMaybe<AssetCreateInput>;
};

/** An edge in a connection. */
export type AssetEdge = {
  __typename?: 'AssetEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: Asset;
};

/** Identifies documents */
export type AssetManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<AssetWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<AssetWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<AssetWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']['input']>;
  altText?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  altText_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  altText_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  altText_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  altText_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  altText_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  altText_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  altText_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  altText_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  altText_starts_with?: InputMaybe<Scalars['String']['input']>;
  authorAvatar_every?: InputMaybe<AuthorWhereInput>;
  authorAvatar_none?: InputMaybe<AuthorWhereInput>;
  authorAvatar_some?: InputMaybe<AuthorWhereInput>;
  coverImagePost_every?: InputMaybe<PostWhereInput>;
  coverImagePost_none?: InputMaybe<PostWhereInput>;
  coverImagePost_some?: InputMaybe<PostWhereInput>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  createdBy?: InputMaybe<UserWhereInput>;
  documentInStages_every?: InputMaybe<AssetWhereStageInput>;
  documentInStages_none?: InputMaybe<AssetWhereStageInput>;
  documentInStages_some?: InputMaybe<AssetWhereStageInput>;
  heroSectionAsestNewLandingPage_every?: InputMaybe<NewLandingPageWhereInput>;
  heroSectionAsestNewLandingPage_none?: InputMaybe<NewLandingPageWhereInput>;
  heroSectionAsestNewLandingPage_some?: InputMaybe<NewLandingPageWhereInput>;
  id?: InputMaybe<Scalars['ID']['input']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']['input']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']['input']>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  updatedBy?: InputMaybe<UserWhereInput>;
};

export enum AssetOrderByInput {
  AltTextAsc = 'altText_ASC',
  AltTextDesc = 'altText_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  FileNameAsc = 'fileName_ASC',
  FileNameDesc = 'fileName_DESC',
  HandleAsc = 'handle_ASC',
  HandleDesc = 'handle_DESC',
  HeightAsc = 'height_ASC',
  HeightDesc = 'height_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  MimeTypeAsc = 'mimeType_ASC',
  MimeTypeDesc = 'mimeType_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  SizeAsc = 'size_ASC',
  SizeDesc = 'size_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
  WidthAsc = 'width_ASC',
  WidthDesc = 'width_DESC'
}

/** Transformations for Assets */
export type AssetTransformationInput = {
  document?: InputMaybe<DocumentTransformationInput>;
  image?: InputMaybe<ImageTransformationInput>;
  /** Pass true if you want to validate the passed transformation parameters */
  validateOptions?: InputMaybe<Scalars['Boolean']['input']>;
};

export type AssetUpdateInput = {
  altText?: InputMaybe<Scalars['String']['input']>;
  authorAvatar?: InputMaybe<AuthorUpdateManyInlineInput>;
  backgroundImageCategoryDetail?: InputMaybe<CategoryDetailUpdateManyInlineInput>;
  coverImagePost?: InputMaybe<PostUpdateManyInlineInput>;
  fileName?: InputMaybe<Scalars['String']['input']>;
  /** focalPoint input for default locale (en) */
  focalPoint?: InputMaybe<Scalars['Json']['input']>;
  handle?: InputMaybe<Scalars['String']['input']>;
  height?: InputMaybe<Scalars['Float']['input']>;
  heroSectionAsestNewLandingPage?: InputMaybe<NewLandingPageUpdateManyInlineInput>;
  iconLandingPagePoint?: InputMaybe<LandingPagePointUpdateManyInlineInput>;
  imageCollection?: InputMaybe<CollectionUpdateManyInlineInput>;
  imageImageWithText?: InputMaybe<ImageWithTextUpdateManyInlineInput>;
  imageTemplatesDetail?: InputMaybe<TemplatesDetailUpdateManyInlineInput>;
  imagesLandingPageSlidingImageGallery?: InputMaybe<LandingPageSlidingImageGalleryUpdateManyInlineInput>;
  imagesTwoFoldmageGallery?: InputMaybe<TwoFoldmageGalleryUpdateManyInlineInput>;
  /** Manage document localizations */
  localizations?: InputMaybe<AssetUpdateLocalizationsInput>;
  mimeType?: InputMaybe<Scalars['String']['input']>;
  size?: InputMaybe<Scalars['Float']['input']>;
  width?: InputMaybe<Scalars['Float']['input']>;
};

export type AssetUpdateLocalizationDataInput = {
  fileName?: InputMaybe<Scalars['String']['input']>;
  focalPoint?: InputMaybe<Scalars['Json']['input']>;
  handle?: InputMaybe<Scalars['String']['input']>;
  height?: InputMaybe<Scalars['Float']['input']>;
  mimeType?: InputMaybe<Scalars['String']['input']>;
  size?: InputMaybe<Scalars['Float']['input']>;
  width?: InputMaybe<Scalars['Float']['input']>;
};

export type AssetUpdateLocalizationInput = {
  data: AssetUpdateLocalizationDataInput;
  locale: Locale;
};

export type AssetUpdateLocalizationsInput = {
  /** Localizations to create */
  create?: InputMaybe<Array<AssetCreateLocalizationInput>>;
  /** Localizations to delete */
  delete?: InputMaybe<Array<Locale>>;
  /** Localizations to update */
  update?: InputMaybe<Array<AssetUpdateLocalizationInput>>;
  upsert?: InputMaybe<Array<AssetUpsertLocalizationInput>>;
};

export type AssetUpdateManyInlineInput = {
  /** Connect multiple existing Asset documents */
  connect?: InputMaybe<Array<AssetConnectInput>>;
  /** Create and connect multiple Asset documents */
  create?: InputMaybe<Array<AssetCreateInput>>;
  /** Delete multiple Asset documents */
  delete?: InputMaybe<Array<AssetWhereUniqueInput>>;
  /** Disconnect multiple Asset documents */
  disconnect?: InputMaybe<Array<AssetWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing Asset documents */
  set?: InputMaybe<Array<AssetWhereUniqueInput>>;
  /** Update multiple Asset documents */
  update?: InputMaybe<Array<AssetUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple Asset documents */
  upsert?: InputMaybe<Array<AssetUpsertWithNestedWhereUniqueInput>>;
};

export type AssetUpdateManyInput = {
  altText?: InputMaybe<Scalars['String']['input']>;
  fileName?: InputMaybe<Scalars['String']['input']>;
  /** focalPoint input for default locale (en) */
  focalPoint?: InputMaybe<Scalars['Json']['input']>;
  height?: InputMaybe<Scalars['Float']['input']>;
  /** Optional updates to localizations */
  localizations?: InputMaybe<AssetUpdateManyLocalizationsInput>;
  mimeType?: InputMaybe<Scalars['String']['input']>;
  size?: InputMaybe<Scalars['Float']['input']>;
  width?: InputMaybe<Scalars['Float']['input']>;
};

export type AssetUpdateManyLocalizationDataInput = {
  fileName?: InputMaybe<Scalars['String']['input']>;
  focalPoint?: InputMaybe<Scalars['Json']['input']>;
  height?: InputMaybe<Scalars['Float']['input']>;
  mimeType?: InputMaybe<Scalars['String']['input']>;
  size?: InputMaybe<Scalars['Float']['input']>;
  width?: InputMaybe<Scalars['Float']['input']>;
};

export type AssetUpdateManyLocalizationInput = {
  data: AssetUpdateManyLocalizationDataInput;
  locale: Locale;
};

export type AssetUpdateManyLocalizationsInput = {
  /** Localizations to update */
  update?: InputMaybe<Array<AssetUpdateManyLocalizationInput>>;
};

export type AssetUpdateManyWithNestedWhereInput = {
  /** Update many input */
  data: AssetUpdateManyInput;
  /** Document search */
  where: AssetWhereInput;
};

export type AssetUpdateOneInlineInput = {
  /** Connect existing Asset document */
  connect?: InputMaybe<AssetWhereUniqueInput>;
  /** Create and connect one Asset document */
  create?: InputMaybe<AssetCreateInput>;
  /** Delete currently connected Asset document */
  delete?: InputMaybe<Scalars['Boolean']['input']>;
  /** Disconnect currently connected Asset document */
  disconnect?: InputMaybe<Scalars['Boolean']['input']>;
  /** Update single Asset document */
  update?: InputMaybe<AssetUpdateWithNestedWhereUniqueInput>;
  /** Upsert single Asset document */
  upsert?: InputMaybe<AssetUpsertWithNestedWhereUniqueInput>;
};

export type AssetUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: AssetUpdateInput;
  /** Unique document search */
  where: AssetWhereUniqueInput;
};

export type AssetUpsertInput = {
  /** Create document if it didn't exist */
  create: AssetCreateInput;
  /** Update document if it exists */
  update: AssetUpdateInput;
};

export type AssetUpsertLocalizationInput = {
  create: AssetCreateLocalizationDataInput;
  locale: Locale;
  update: AssetUpdateLocalizationDataInput;
};

export type AssetUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: AssetUpsertInput;
  /** Unique document search */
  where: AssetWhereUniqueInput;
};

/** This contains a set of filters that can be used to compare values internally */
export type AssetWhereComparatorInput = {
  /** This field can be used to request to check if the entry is outdated by internal comparison */
  outdated_to?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Identifies documents */
export type AssetWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<AssetWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<AssetWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<AssetWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']['input']>;
  altText?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  altText_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  altText_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  altText_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  altText_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  altText_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  altText_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  altText_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  altText_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  altText_starts_with?: InputMaybe<Scalars['String']['input']>;
  authorAvatar_every?: InputMaybe<AuthorWhereInput>;
  authorAvatar_none?: InputMaybe<AuthorWhereInput>;
  authorAvatar_some?: InputMaybe<AuthorWhereInput>;
  coverImagePost_every?: InputMaybe<PostWhereInput>;
  coverImagePost_none?: InputMaybe<PostWhereInput>;
  coverImagePost_some?: InputMaybe<PostWhereInput>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  createdBy?: InputMaybe<UserWhereInput>;
  documentInStages_every?: InputMaybe<AssetWhereStageInput>;
  documentInStages_none?: InputMaybe<AssetWhereStageInput>;
  documentInStages_some?: InputMaybe<AssetWhereStageInput>;
  fileName?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  fileName_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  fileName_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  fileName_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  fileName_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  fileName_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  fileName_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  fileName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  fileName_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  fileName_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given json path. */
  focalPoint_json_path_exists?: InputMaybe<Scalars['String']['input']>;
  /**
   * Recursively tries to find the provided JSON scalar value inside the field.
   * It does use an exact match when comparing values.
   * If you pass `null` as value the filter will be ignored.
   * Note: This filter fails if you try to look for a non scalar JSON value!
   */
  focalPoint_value_recursive?: InputMaybe<Scalars['Json']['input']>;
  handle?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  handle_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  handle_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  handle_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  handle_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  handle_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  handle_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  handle_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  handle_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  handle_starts_with?: InputMaybe<Scalars['String']['input']>;
  height?: InputMaybe<Scalars['Float']['input']>;
  /** All values greater than the given value. */
  height_gt?: InputMaybe<Scalars['Float']['input']>;
  /** All values greater than or equal the given value. */
  height_gte?: InputMaybe<Scalars['Float']['input']>;
  /** All values that are contained in given list. */
  height_in?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  /** All values less than the given value. */
  height_lt?: InputMaybe<Scalars['Float']['input']>;
  /** All values less than or equal the given value. */
  height_lte?: InputMaybe<Scalars['Float']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  height_not?: InputMaybe<Scalars['Float']['input']>;
  /** All values that are not contained in given list. */
  height_not_in?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  heroSectionAsestNewLandingPage_every?: InputMaybe<NewLandingPageWhereInput>;
  heroSectionAsestNewLandingPage_none?: InputMaybe<NewLandingPageWhereInput>;
  heroSectionAsestNewLandingPage_some?: InputMaybe<NewLandingPageWhereInput>;
  id?: InputMaybe<Scalars['ID']['input']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']['input']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']['input']>;
  mimeType?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  mimeType_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  mimeType_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  mimeType_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  mimeType_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  mimeType_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  mimeType_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  mimeType_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  mimeType_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  mimeType_starts_with?: InputMaybe<Scalars['String']['input']>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
  size?: InputMaybe<Scalars['Float']['input']>;
  /** All values greater than the given value. */
  size_gt?: InputMaybe<Scalars['Float']['input']>;
  /** All values greater than or equal the given value. */
  size_gte?: InputMaybe<Scalars['Float']['input']>;
  /** All values that are contained in given list. */
  size_in?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  /** All values less than the given value. */
  size_lt?: InputMaybe<Scalars['Float']['input']>;
  /** All values less than or equal the given value. */
  size_lte?: InputMaybe<Scalars['Float']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  size_not?: InputMaybe<Scalars['Float']['input']>;
  /** All values that are not contained in given list. */
  size_not_in?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  updatedBy?: InputMaybe<UserWhereInput>;
  width?: InputMaybe<Scalars['Float']['input']>;
  /** All values greater than the given value. */
  width_gt?: InputMaybe<Scalars['Float']['input']>;
  /** All values greater than or equal the given value. */
  width_gte?: InputMaybe<Scalars['Float']['input']>;
  /** All values that are contained in given list. */
  width_in?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  /** All values less than the given value. */
  width_lt?: InputMaybe<Scalars['Float']['input']>;
  /** All values less than or equal the given value. */
  width_lte?: InputMaybe<Scalars['Float']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  width_not?: InputMaybe<Scalars['Float']['input']>;
  /** All values that are not contained in given list. */
  width_not_in?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
};

/** The document in stages filter allows specifying a stage entry to cross compare the same document between different stages */
export type AssetWhereStageInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<AssetWhereStageInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<AssetWhereStageInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<AssetWhereStageInput>>;
  /** This field contains fields which can be set as true or false to specify an internal comparison */
  compareWithParent?: InputMaybe<AssetWhereComparatorInput>;
  /** Specify the stage to compare with */
  stage?: InputMaybe<Stage>;
};

/** References Asset record uniquely */
export type AssetWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']['input']>;
};

export type Author = Entity & Node & {
  __typename?: 'Author';
  /** Enter a short bio about yourself, or other authors. */
  biography?: Maybe<Scalars['String']['output']>;
  /** The time the document was created */
  createdAt: Scalars['DateTime']['output'];
  /** User that created this document */
  createdBy?: Maybe<User>;
  /** Get the document in other stages */
  documentInStages: Array<Author>;
  /** List of Author versions */
  history: Array<Version>;
  /** The unique identifier */
  id: Scalars['ID']['output'];
  /** Enter the display name for authors */
  name: Scalars['String']['output'];
  /** Add a profile picture for authors */
  picture?: Maybe<Asset>;
  /** Connect blog posts to this author */
  posts: Array<Post>;
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  /** User that last published this document */
  publishedBy?: Maybe<User>;
  scheduledIn: Array<ScheduledOperation>;
  /** System stage field */
  stage: Stage;
  /** Enter the job title of the author */
  title?: Maybe<Scalars['String']['output']>;
  /** The time the document was updated */
  updatedAt: Scalars['DateTime']['output'];
  /** User that last updated this document */
  updatedBy?: Maybe<User>;
};


export type AuthorCreatedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  locales?: InputMaybe<Array<Locale>>;
};


export type AuthorDocumentInStagesArgs = {
  includeCurrent?: Scalars['Boolean']['input'];
  inheritLocale?: Scalars['Boolean']['input'];
  stages?: Array<Stage>;
};


export type AuthorHistoryArgs = {
  limit?: Scalars['Int']['input'];
  skip?: Scalars['Int']['input'];
  stageOverride?: InputMaybe<Stage>;
};


export type AuthorPictureArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  locales?: InputMaybe<Array<Locale>>;
};


export type AuthorPostsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: InputMaybe<Array<Locale>>;
  orderBy?: InputMaybe<PostOrderByInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<PostWhereInput>;
};


export type AuthorPublishedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  locales?: InputMaybe<Array<Locale>>;
};


export type AuthorScheduledInArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: InputMaybe<Array<Locale>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<ScheduledOperationWhereInput>;
};


export type AuthorUpdatedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  locales?: InputMaybe<Array<Locale>>;
};

export type AuthorConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Document to connect */
  where: AuthorWhereUniqueInput;
};

/** A connection to a list of items. */
export type AuthorConnection = {
  __typename?: 'AuthorConnection';
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<AuthorEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type AuthorCreateInput = {
  biography?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  name: Scalars['String']['input'];
  picture?: InputMaybe<AssetCreateOneInlineInput>;
  posts?: InputMaybe<PostCreateManyInlineInput>;
  title?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type AuthorCreateManyInlineInput = {
  /** Connect multiple existing Author documents */
  connect?: InputMaybe<Array<AuthorWhereUniqueInput>>;
  /** Create and connect multiple existing Author documents */
  create?: InputMaybe<Array<AuthorCreateInput>>;
};

export type AuthorCreateOneInlineInput = {
  /** Connect one existing Author document */
  connect?: InputMaybe<AuthorWhereUniqueInput>;
  /** Create and connect one Author document */
  create?: InputMaybe<AuthorCreateInput>;
};

/** An edge in a connection. */
export type AuthorEdge = {
  __typename?: 'AuthorEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: Author;
};

/** Identifies documents */
export type AuthorManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<AuthorWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<AuthorWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<AuthorWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']['input']>;
  biography?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  biography_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  biography_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  biography_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  biography_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  biography_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  biography_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  biography_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  biography_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  biography_starts_with?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  createdBy?: InputMaybe<UserWhereInput>;
  documentInStages_every?: InputMaybe<AuthorWhereStageInput>;
  documentInStages_none?: InputMaybe<AuthorWhereStageInput>;
  documentInStages_some?: InputMaybe<AuthorWhereStageInput>;
  id?: InputMaybe<Scalars['ID']['input']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']['input']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  name_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  name_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  name_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  name_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  name_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  name_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  name_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  name_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  name_starts_with?: InputMaybe<Scalars['String']['input']>;
  picture?: InputMaybe<AssetWhereInput>;
  posts_every?: InputMaybe<PostWhereInput>;
  posts_none?: InputMaybe<PostWhereInput>;
  posts_some?: InputMaybe<PostWhereInput>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
  title?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  title_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  title_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  title_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  title_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  title_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  title_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  title_starts_with?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  updatedBy?: InputMaybe<UserWhereInput>;
};

export enum AuthorOrderByInput {
  BiographyAsc = 'biography_ASC',
  BiographyDesc = 'biography_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC'
}

export type AuthorUpdateInput = {
  biography?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  picture?: InputMaybe<AssetUpdateOneInlineInput>;
  posts?: InputMaybe<PostUpdateManyInlineInput>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type AuthorUpdateManyInlineInput = {
  /** Connect multiple existing Author documents */
  connect?: InputMaybe<Array<AuthorConnectInput>>;
  /** Create and connect multiple Author documents */
  create?: InputMaybe<Array<AuthorCreateInput>>;
  /** Delete multiple Author documents */
  delete?: InputMaybe<Array<AuthorWhereUniqueInput>>;
  /** Disconnect multiple Author documents */
  disconnect?: InputMaybe<Array<AuthorWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing Author documents */
  set?: InputMaybe<Array<AuthorWhereUniqueInput>>;
  /** Update multiple Author documents */
  update?: InputMaybe<Array<AuthorUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple Author documents */
  upsert?: InputMaybe<Array<AuthorUpsertWithNestedWhereUniqueInput>>;
};

export type AuthorUpdateManyInput = {
  biography?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type AuthorUpdateManyWithNestedWhereInput = {
  /** Update many input */
  data: AuthorUpdateManyInput;
  /** Document search */
  where: AuthorWhereInput;
};

export type AuthorUpdateOneInlineInput = {
  /** Connect existing Author document */
  connect?: InputMaybe<AuthorWhereUniqueInput>;
  /** Create and connect one Author document */
  create?: InputMaybe<AuthorCreateInput>;
  /** Delete currently connected Author document */
  delete?: InputMaybe<Scalars['Boolean']['input']>;
  /** Disconnect currently connected Author document */
  disconnect?: InputMaybe<Scalars['Boolean']['input']>;
  /** Update single Author document */
  update?: InputMaybe<AuthorUpdateWithNestedWhereUniqueInput>;
  /** Upsert single Author document */
  upsert?: InputMaybe<AuthorUpsertWithNestedWhereUniqueInput>;
};

export type AuthorUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: AuthorUpdateInput;
  /** Unique document search */
  where: AuthorWhereUniqueInput;
};

export type AuthorUpsertInput = {
  /** Create document if it didn't exist */
  create: AuthorCreateInput;
  /** Update document if it exists */
  update: AuthorUpdateInput;
};

export type AuthorUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: AuthorUpsertInput;
  /** Unique document search */
  where: AuthorWhereUniqueInput;
};

/** This contains a set of filters that can be used to compare values internally */
export type AuthorWhereComparatorInput = {
  /** This field can be used to request to check if the entry is outdated by internal comparison */
  outdated_to?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Identifies documents */
export type AuthorWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<AuthorWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<AuthorWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<AuthorWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']['input']>;
  biography?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  biography_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  biography_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  biography_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  biography_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  biography_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  biography_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  biography_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  biography_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  biography_starts_with?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  createdBy?: InputMaybe<UserWhereInput>;
  documentInStages_every?: InputMaybe<AuthorWhereStageInput>;
  documentInStages_none?: InputMaybe<AuthorWhereStageInput>;
  documentInStages_some?: InputMaybe<AuthorWhereStageInput>;
  id?: InputMaybe<Scalars['ID']['input']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']['input']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  name_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  name_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  name_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  name_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  name_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  name_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  name_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  name_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  name_starts_with?: InputMaybe<Scalars['String']['input']>;
  picture?: InputMaybe<AssetWhereInput>;
  posts_every?: InputMaybe<PostWhereInput>;
  posts_none?: InputMaybe<PostWhereInput>;
  posts_some?: InputMaybe<PostWhereInput>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
  title?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  title_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  title_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  title_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  title_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  title_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  title_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  title_starts_with?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  updatedBy?: InputMaybe<UserWhereInput>;
};

/** The document in stages filter allows specifying a stage entry to cross compare the same document between different stages */
export type AuthorWhereStageInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<AuthorWhereStageInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<AuthorWhereStageInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<AuthorWhereStageInput>>;
  /** This field contains fields which can be set as true or false to specify an internal comparison */
  compareWithParent?: InputMaybe<AuthorWhereComparatorInput>;
  /** Specify the stage to compare with */
  stage?: InputMaybe<Stage>;
};

/** References Author record uniquely */
export type AuthorWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']['input']>;
};

export type BatchPayload = {
  __typename?: 'BatchPayload';
  /** The number of nodes that have been affected by the Batch operation. */
  count: Scalars['Long']['output'];
};

export type CategoryDetail = Entity & {
  __typename?: 'CategoryDetail';
  backgroundImage: Asset;
  buttonRedirectLink?: Maybe<Scalars['String']['output']>;
  buttonTilte?: Maybe<Scalars['String']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  /** The unique identifier */
  id: Scalars['ID']['output'];
  /** System Locale field */
  locale: Locale;
  /** Get the other localizations for this document */
  localizations: Array<CategoryDetail>;
  /** System stage field */
  stage: Stage;
  title?: Maybe<Scalars['String']['output']>;
};


export type CategoryDetailBackgroundImageArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  locales?: InputMaybe<Array<Locale>>;
};


export type CategoryDetailLocalizationsArgs = {
  includeCurrent?: Scalars['Boolean']['input'];
  locales?: Array<Locale>;
};

export type CategoryDetailConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Document to connect */
  where: CategoryDetailWhereUniqueInput;
};

/** A connection to a list of items. */
export type CategoryDetailConnection = {
  __typename?: 'CategoryDetailConnection';
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<CategoryDetailEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type CategoryDetailCreateInput = {
  backgroundImage: AssetCreateOneInlineInput;
  /** buttonRedirectLink input for default locale (en) */
  buttonRedirectLink?: InputMaybe<Scalars['String']['input']>;
  /** buttonTilte input for default locale (en) */
  buttonTilte?: InputMaybe<Scalars['String']['input']>;
  /** description input for default locale (en) */
  description?: InputMaybe<Scalars['String']['input']>;
  /** Inline mutations for managing document localizations excluding the default locale */
  localizations?: InputMaybe<CategoryDetailCreateLocalizationsInput>;
  /** title input for default locale (en) */
  title?: InputMaybe<Scalars['String']['input']>;
};

export type CategoryDetailCreateLocalizationDataInput = {
  buttonRedirectLink?: InputMaybe<Scalars['String']['input']>;
  buttonTilte?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type CategoryDetailCreateLocalizationInput = {
  /** Localization input */
  data: CategoryDetailCreateLocalizationDataInput;
  locale: Locale;
};

export type CategoryDetailCreateLocalizationsInput = {
  /** Create localizations for the newly-created document */
  create?: InputMaybe<Array<CategoryDetailCreateLocalizationInput>>;
};

export type CategoryDetailCreateManyInlineInput = {
  /** Create and connect multiple existing CategoryDetail documents */
  create?: InputMaybe<Array<CategoryDetailCreateInput>>;
};

export type CategoryDetailCreateOneInlineInput = {
  /** Create and connect one CategoryDetail document */
  create?: InputMaybe<CategoryDetailCreateInput>;
};

export type CategoryDetailCreateWithPositionInput = {
  /** Document to create */
  data: CategoryDetailCreateInput;
  /** Position in the list of existing component instances, will default to appending at the end of list */
  position?: InputMaybe<ConnectPositionInput>;
};

/** An edge in a connection. */
export type CategoryDetailEdge = {
  __typename?: 'CategoryDetailEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: CategoryDetail;
};

/** Identifies documents */
export type CategoryDetailManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<CategoryDetailWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<CategoryDetailWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<CategoryDetailWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']['input']>;
  backgroundImage?: InputMaybe<AssetWhereInput>;
  id?: InputMaybe<Scalars['ID']['input']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']['input']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']['input']>;
};

export enum CategoryDetailOrderByInput {
  ButtonRedirectLinkAsc = 'buttonRedirectLink_ASC',
  ButtonRedirectLinkDesc = 'buttonRedirectLink_DESC',
  ButtonTilteAsc = 'buttonTilte_ASC',
  ButtonTilteDesc = 'buttonTilte_DESC',
  DescriptionAsc = 'description_ASC',
  DescriptionDesc = 'description_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC'
}

export type CategoryDetailParent = CategorySection;

export type CategoryDetailParentConnectInput = {
  CategorySection?: InputMaybe<CategorySectionConnectInput>;
};

export type CategoryDetailParentCreateInput = {
  CategorySection?: InputMaybe<CategorySectionCreateInput>;
};

export type CategoryDetailParentCreateManyInlineInput = {
  /** Create and connect multiple existing CategoryDetailParent documents */
  create?: InputMaybe<Array<CategoryDetailParentCreateInput>>;
};

export type CategoryDetailParentCreateOneInlineInput = {
  /** Create and connect one CategoryDetailParent document */
  create?: InputMaybe<CategoryDetailParentCreateInput>;
};

export type CategoryDetailParentCreateWithPositionInput = {
  CategorySection?: InputMaybe<CategorySectionCreateWithPositionInput>;
};

export type CategoryDetailParentUpdateInput = {
  CategorySection?: InputMaybe<CategorySectionUpdateInput>;
};

export type CategoryDetailParentUpdateManyInlineInput = {
  /** Create and connect multiple CategoryDetailParent component instances */
  create?: InputMaybe<Array<CategoryDetailParentCreateWithPositionInput>>;
  /** Delete multiple CategoryDetailParent documents */
  delete?: InputMaybe<Array<CategoryDetailParentWhereUniqueInput>>;
  /** Update multiple CategoryDetailParent component instances */
  update?: InputMaybe<Array<CategoryDetailParentUpdateWithNestedWhereUniqueAndPositionInput>>;
  /** Upsert multiple CategoryDetailParent component instances */
  upsert?: InputMaybe<Array<CategoryDetailParentUpsertWithNestedWhereUniqueAndPositionInput>>;
};

export type CategoryDetailParentUpdateManyWithNestedWhereInput = {
  CategorySection?: InputMaybe<CategorySectionUpdateManyWithNestedWhereInput>;
};

export type CategoryDetailParentUpdateOneInlineInput = {
  /** Create and connect one CategoryDetailParent document */
  create?: InputMaybe<CategoryDetailParentCreateInput>;
  /** Delete currently connected CategoryDetailParent document */
  delete?: InputMaybe<Scalars['Boolean']['input']>;
  /** Update single CategoryDetailParent document */
  update?: InputMaybe<CategoryDetailParentUpdateWithNestedWhereUniqueInput>;
  /** Upsert single CategoryDetailParent document */
  upsert?: InputMaybe<CategoryDetailParentUpsertWithNestedWhereUniqueInput>;
};

export type CategoryDetailParentUpdateWithNestedWhereUniqueAndPositionInput = {
  CategorySection?: InputMaybe<CategorySectionUpdateWithNestedWhereUniqueAndPositionInput>;
};

export type CategoryDetailParentUpdateWithNestedWhereUniqueInput = {
  CategorySection?: InputMaybe<CategorySectionUpdateWithNestedWhereUniqueInput>;
};

export type CategoryDetailParentUpsertWithNestedWhereUniqueAndPositionInput = {
  CategorySection?: InputMaybe<CategorySectionUpsertWithNestedWhereUniqueAndPositionInput>;
};

export type CategoryDetailParentUpsertWithNestedWhereUniqueInput = {
  CategorySection?: InputMaybe<CategorySectionUpsertWithNestedWhereUniqueInput>;
};

export type CategoryDetailParentWhereInput = {
  CategorySection?: InputMaybe<CategorySectionWhereInput>;
};

export type CategoryDetailParentWhereUniqueInput = {
  CategorySection?: InputMaybe<CategorySectionWhereUniqueInput>;
};

export type CategoryDetailUpdateInput = {
  backgroundImage?: InputMaybe<AssetUpdateOneInlineInput>;
  /** buttonRedirectLink input for default locale (en) */
  buttonRedirectLink?: InputMaybe<Scalars['String']['input']>;
  /** buttonTilte input for default locale (en) */
  buttonTilte?: InputMaybe<Scalars['String']['input']>;
  /** description input for default locale (en) */
  description?: InputMaybe<Scalars['String']['input']>;
  /** Manage document localizations */
  localizations?: InputMaybe<CategoryDetailUpdateLocalizationsInput>;
  /** title input for default locale (en) */
  title?: InputMaybe<Scalars['String']['input']>;
};

export type CategoryDetailUpdateLocalizationDataInput = {
  buttonRedirectLink?: InputMaybe<Scalars['String']['input']>;
  buttonTilte?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type CategoryDetailUpdateLocalizationInput = {
  data: CategoryDetailUpdateLocalizationDataInput;
  locale: Locale;
};

export type CategoryDetailUpdateLocalizationsInput = {
  /** Localizations to create */
  create?: InputMaybe<Array<CategoryDetailCreateLocalizationInput>>;
  /** Localizations to delete */
  delete?: InputMaybe<Array<Locale>>;
  /** Localizations to update */
  update?: InputMaybe<Array<CategoryDetailUpdateLocalizationInput>>;
  upsert?: InputMaybe<Array<CategoryDetailUpsertLocalizationInput>>;
};

export type CategoryDetailUpdateManyInlineInput = {
  /** Create and connect multiple CategoryDetail component instances */
  create?: InputMaybe<Array<CategoryDetailCreateWithPositionInput>>;
  /** Delete multiple CategoryDetail documents */
  delete?: InputMaybe<Array<CategoryDetailWhereUniqueInput>>;
  /** Update multiple CategoryDetail component instances */
  update?: InputMaybe<Array<CategoryDetailUpdateWithNestedWhereUniqueAndPositionInput>>;
  /** Upsert multiple CategoryDetail component instances */
  upsert?: InputMaybe<Array<CategoryDetailUpsertWithNestedWhereUniqueAndPositionInput>>;
};

export type CategoryDetailUpdateManyInput = {
  /** buttonRedirectLink input for default locale (en) */
  buttonRedirectLink?: InputMaybe<Scalars['String']['input']>;
  /** buttonTilte input for default locale (en) */
  buttonTilte?: InputMaybe<Scalars['String']['input']>;
  /** description input for default locale (en) */
  description?: InputMaybe<Scalars['String']['input']>;
  /** Optional updates to localizations */
  localizations?: InputMaybe<CategoryDetailUpdateManyLocalizationsInput>;
  /** title input for default locale (en) */
  title?: InputMaybe<Scalars['String']['input']>;
};

export type CategoryDetailUpdateManyLocalizationDataInput = {
  buttonRedirectLink?: InputMaybe<Scalars['String']['input']>;
  buttonTilte?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type CategoryDetailUpdateManyLocalizationInput = {
  data: CategoryDetailUpdateManyLocalizationDataInput;
  locale: Locale;
};

export type CategoryDetailUpdateManyLocalizationsInput = {
  /** Localizations to update */
  update?: InputMaybe<Array<CategoryDetailUpdateManyLocalizationInput>>;
};

export type CategoryDetailUpdateManyWithNestedWhereInput = {
  /** Update many input */
  data: CategoryDetailUpdateManyInput;
  /** Document search */
  where: CategoryDetailWhereInput;
};

export type CategoryDetailUpdateOneInlineInput = {
  /** Create and connect one CategoryDetail document */
  create?: InputMaybe<CategoryDetailCreateInput>;
  /** Delete currently connected CategoryDetail document */
  delete?: InputMaybe<Scalars['Boolean']['input']>;
  /** Update single CategoryDetail document */
  update?: InputMaybe<CategoryDetailUpdateWithNestedWhereUniqueInput>;
  /** Upsert single CategoryDetail document */
  upsert?: InputMaybe<CategoryDetailUpsertWithNestedWhereUniqueInput>;
};

export type CategoryDetailUpdateWithNestedWhereUniqueAndPositionInput = {
  /** Document to update */
  data?: InputMaybe<CategoryDetailUpdateInput>;
  /** Position in the list of existing component instances, will default to appending at the end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Unique component instance search */
  where: CategoryDetailWhereUniqueInput;
};

export type CategoryDetailUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: CategoryDetailUpdateInput;
  /** Unique document search */
  where: CategoryDetailWhereUniqueInput;
};

export type CategoryDetailUpsertInput = {
  /** Create document if it didn't exist */
  create: CategoryDetailCreateInput;
  /** Update document if it exists */
  update: CategoryDetailUpdateInput;
};

export type CategoryDetailUpsertLocalizationInput = {
  create: CategoryDetailCreateLocalizationDataInput;
  locale: Locale;
  update: CategoryDetailUpdateLocalizationDataInput;
};

export type CategoryDetailUpsertWithNestedWhereUniqueAndPositionInput = {
  /** Document to upsert */
  data?: InputMaybe<CategoryDetailUpsertInput>;
  /** Position in the list of existing component instances, will default to appending at the end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Unique component instance search */
  where: CategoryDetailWhereUniqueInput;
};

export type CategoryDetailUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: CategoryDetailUpsertInput;
  /** Unique document search */
  where: CategoryDetailWhereUniqueInput;
};

/** Identifies documents */
export type CategoryDetailWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<CategoryDetailWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<CategoryDetailWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<CategoryDetailWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']['input']>;
  backgroundImage?: InputMaybe<AssetWhereInput>;
  buttonRedirectLink?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  buttonRedirectLink_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  buttonRedirectLink_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  buttonRedirectLink_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  buttonRedirectLink_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  buttonRedirectLink_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  buttonRedirectLink_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  buttonRedirectLink_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  buttonRedirectLink_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  buttonRedirectLink_starts_with?: InputMaybe<Scalars['String']['input']>;
  buttonTilte?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  buttonTilte_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  buttonTilte_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  buttonTilte_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  buttonTilte_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  buttonTilte_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  buttonTilte_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  buttonTilte_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  buttonTilte_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  buttonTilte_starts_with?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  description_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  description_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  description_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  description_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  description_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  description_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  description_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  description_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  description_starts_with?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']['input']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  title_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  title_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  title_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  title_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  title_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  title_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  title_starts_with?: InputMaybe<Scalars['String']['input']>;
};

/** References CategoryDetail record uniquely */
export type CategoryDetailWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']['input']>;
};

export type CategorySection = Entity & {
  __typename?: 'CategorySection';
  categoryDetails: Array<CategoryDetail>;
  description?: Maybe<Scalars['String']['output']>;
  /** The unique identifier */
  id: Scalars['ID']['output'];
  /** System Locale field */
  locale: Locale;
  /** Get the other localizations for this document */
  localizations: Array<CategorySection>;
  /** System stage field */
  stage: Stage;
  title?: Maybe<Scalars['String']['output']>;
};


export type CategorySectionCategoryDetailsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: InputMaybe<Array<Locale>>;
  orderBy?: InputMaybe<CategoryDetailOrderByInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<CategoryDetailWhereInput>;
};


export type CategorySectionLocalizationsArgs = {
  includeCurrent?: Scalars['Boolean']['input'];
  locales?: Array<Locale>;
};

export type CategorySectionConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Document to connect */
  where: CategorySectionWhereUniqueInput;
};

/** A connection to a list of items. */
export type CategorySectionConnection = {
  __typename?: 'CategorySectionConnection';
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<CategorySectionEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type CategorySectionCreateInput = {
  categoryDetails?: InputMaybe<CategoryDetailCreateManyInlineInput>;
  /** description input for default locale (en) */
  description?: InputMaybe<Scalars['String']['input']>;
  /** Inline mutations for managing document localizations excluding the default locale */
  localizations?: InputMaybe<CategorySectionCreateLocalizationsInput>;
  /** title input for default locale (en) */
  title?: InputMaybe<Scalars['String']['input']>;
};

export type CategorySectionCreateLocalizationDataInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type CategorySectionCreateLocalizationInput = {
  /** Localization input */
  data: CategorySectionCreateLocalizationDataInput;
  locale: Locale;
};

export type CategorySectionCreateLocalizationsInput = {
  /** Create localizations for the newly-created document */
  create?: InputMaybe<Array<CategorySectionCreateLocalizationInput>>;
};

export type CategorySectionCreateManyInlineInput = {
  /** Create and connect multiple existing CategorySection documents */
  create?: InputMaybe<Array<CategorySectionCreateInput>>;
};

export type CategorySectionCreateOneInlineInput = {
  /** Create and connect one CategorySection document */
  create?: InputMaybe<CategorySectionCreateInput>;
};

export type CategorySectionCreateWithPositionInput = {
  /** Document to create */
  data: CategorySectionCreateInput;
  /** Position in the list of existing component instances, will default to appending at the end of list */
  position?: InputMaybe<ConnectPositionInput>;
};

/** An edge in a connection. */
export type CategorySectionEdge = {
  __typename?: 'CategorySectionEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: CategorySection;
};

/** Identifies documents */
export type CategorySectionManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<CategorySectionWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<CategorySectionWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<CategorySectionWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']['input']>;
  categoryDetails_every?: InputMaybe<CategoryDetailWhereInput>;
  categoryDetails_none?: InputMaybe<CategoryDetailWhereInput>;
  categoryDetails_some?: InputMaybe<CategoryDetailWhereInput>;
  id?: InputMaybe<Scalars['ID']['input']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']['input']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']['input']>;
};

export enum CategorySectionOrderByInput {
  DescriptionAsc = 'description_ASC',
  DescriptionDesc = 'description_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC'
}

export type CategorySectionParent = NewLandingPage;

export type CategorySectionParentConnectInput = {
  NewLandingPage?: InputMaybe<NewLandingPageConnectInput>;
};

export type CategorySectionParentCreateInput = {
  NewLandingPage?: InputMaybe<NewLandingPageCreateInput>;
};

export type CategorySectionParentCreateManyInlineInput = {
  /** Connect multiple existing CategorySectionParent documents */
  connect?: InputMaybe<Array<CategorySectionParentWhereUniqueInput>>;
  /** Create and connect multiple existing CategorySectionParent documents */
  create?: InputMaybe<Array<CategorySectionParentCreateInput>>;
};

export type CategorySectionParentCreateOneInlineInput = {
  /** Connect one existing CategorySectionParent document */
  connect?: InputMaybe<CategorySectionParentWhereUniqueInput>;
  /** Create and connect one CategorySectionParent document */
  create?: InputMaybe<CategorySectionParentCreateInput>;
};

export type CategorySectionParentUpdateInput = {
  NewLandingPage?: InputMaybe<NewLandingPageUpdateInput>;
};

export type CategorySectionParentUpdateManyInlineInput = {
  /** Connect multiple existing CategorySectionParent documents */
  connect?: InputMaybe<Array<CategorySectionParentConnectInput>>;
  /** Create and connect multiple CategorySectionParent documents */
  create?: InputMaybe<Array<CategorySectionParentCreateInput>>;
  /** Delete multiple CategorySectionParent documents */
  delete?: InputMaybe<Array<CategorySectionParentWhereUniqueInput>>;
  /** Disconnect multiple CategorySectionParent documents */
  disconnect?: InputMaybe<Array<CategorySectionParentWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing CategorySectionParent documents */
  set?: InputMaybe<Array<CategorySectionParentWhereUniqueInput>>;
  /** Update multiple CategorySectionParent documents */
  update?: InputMaybe<Array<CategorySectionParentUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple CategorySectionParent documents */
  upsert?: InputMaybe<Array<CategorySectionParentUpsertWithNestedWhereUniqueInput>>;
};

export type CategorySectionParentUpdateManyWithNestedWhereInput = {
  NewLandingPage?: InputMaybe<NewLandingPageUpdateManyWithNestedWhereInput>;
};

export type CategorySectionParentUpdateOneInlineInput = {
  /** Connect existing CategorySectionParent document */
  connect?: InputMaybe<CategorySectionParentWhereUniqueInput>;
  /** Create and connect one CategorySectionParent document */
  create?: InputMaybe<CategorySectionParentCreateInput>;
  /** Delete currently connected CategorySectionParent document */
  delete?: InputMaybe<Scalars['Boolean']['input']>;
  /** Disconnect currently connected CategorySectionParent document */
  disconnect?: InputMaybe<Scalars['Boolean']['input']>;
  /** Update single CategorySectionParent document */
  update?: InputMaybe<CategorySectionParentUpdateWithNestedWhereUniqueInput>;
  /** Upsert single CategorySectionParent document */
  upsert?: InputMaybe<CategorySectionParentUpsertWithNestedWhereUniqueInput>;
};

export type CategorySectionParentUpdateWithNestedWhereUniqueInput = {
  NewLandingPage?: InputMaybe<NewLandingPageUpdateWithNestedWhereUniqueInput>;
};

export type CategorySectionParentUpsertWithNestedWhereUniqueInput = {
  NewLandingPage?: InputMaybe<NewLandingPageUpsertWithNestedWhereUniqueInput>;
};

export type CategorySectionParentWhereInput = {
  NewLandingPage?: InputMaybe<NewLandingPageWhereInput>;
};

export type CategorySectionParentWhereUniqueInput = {
  NewLandingPage?: InputMaybe<NewLandingPageWhereUniqueInput>;
};

export type CategorySectionUpdateInput = {
  categoryDetails?: InputMaybe<CategoryDetailUpdateManyInlineInput>;
  /** description input for default locale (en) */
  description?: InputMaybe<Scalars['String']['input']>;
  /** Manage document localizations */
  localizations?: InputMaybe<CategorySectionUpdateLocalizationsInput>;
  /** title input for default locale (en) */
  title?: InputMaybe<Scalars['String']['input']>;
};

export type CategorySectionUpdateLocalizationDataInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type CategorySectionUpdateLocalizationInput = {
  data: CategorySectionUpdateLocalizationDataInput;
  locale: Locale;
};

export type CategorySectionUpdateLocalizationsInput = {
  /** Localizations to create */
  create?: InputMaybe<Array<CategorySectionCreateLocalizationInput>>;
  /** Localizations to delete */
  delete?: InputMaybe<Array<Locale>>;
  /** Localizations to update */
  update?: InputMaybe<Array<CategorySectionUpdateLocalizationInput>>;
  upsert?: InputMaybe<Array<CategorySectionUpsertLocalizationInput>>;
};

export type CategorySectionUpdateManyInlineInput = {
  /** Create and connect multiple CategorySection component instances */
  create?: InputMaybe<Array<CategorySectionCreateWithPositionInput>>;
  /** Delete multiple CategorySection documents */
  delete?: InputMaybe<Array<CategorySectionWhereUniqueInput>>;
  /** Update multiple CategorySection component instances */
  update?: InputMaybe<Array<CategorySectionUpdateWithNestedWhereUniqueAndPositionInput>>;
  /** Upsert multiple CategorySection component instances */
  upsert?: InputMaybe<Array<CategorySectionUpsertWithNestedWhereUniqueAndPositionInput>>;
};

export type CategorySectionUpdateManyInput = {
  /** description input for default locale (en) */
  description?: InputMaybe<Scalars['String']['input']>;
  /** Optional updates to localizations */
  localizations?: InputMaybe<CategorySectionUpdateManyLocalizationsInput>;
  /** title input for default locale (en) */
  title?: InputMaybe<Scalars['String']['input']>;
};

export type CategorySectionUpdateManyLocalizationDataInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type CategorySectionUpdateManyLocalizationInput = {
  data: CategorySectionUpdateManyLocalizationDataInput;
  locale: Locale;
};

export type CategorySectionUpdateManyLocalizationsInput = {
  /** Localizations to update */
  update?: InputMaybe<Array<CategorySectionUpdateManyLocalizationInput>>;
};

export type CategorySectionUpdateManyWithNestedWhereInput = {
  /** Update many input */
  data: CategorySectionUpdateManyInput;
  /** Document search */
  where: CategorySectionWhereInput;
};

export type CategorySectionUpdateOneInlineInput = {
  /** Create and connect one CategorySection document */
  create?: InputMaybe<CategorySectionCreateInput>;
  /** Delete currently connected CategorySection document */
  delete?: InputMaybe<Scalars['Boolean']['input']>;
  /** Update single CategorySection document */
  update?: InputMaybe<CategorySectionUpdateWithNestedWhereUniqueInput>;
  /** Upsert single CategorySection document */
  upsert?: InputMaybe<CategorySectionUpsertWithNestedWhereUniqueInput>;
};

export type CategorySectionUpdateWithNestedWhereUniqueAndPositionInput = {
  /** Document to update */
  data?: InputMaybe<CategorySectionUpdateInput>;
  /** Position in the list of existing component instances, will default to appending at the end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Unique component instance search */
  where: CategorySectionWhereUniqueInput;
};

export type CategorySectionUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: CategorySectionUpdateInput;
  /** Unique document search */
  where: CategorySectionWhereUniqueInput;
};

export type CategorySectionUpsertInput = {
  /** Create document if it didn't exist */
  create: CategorySectionCreateInput;
  /** Update document if it exists */
  update: CategorySectionUpdateInput;
};

export type CategorySectionUpsertLocalizationInput = {
  create: CategorySectionCreateLocalizationDataInput;
  locale: Locale;
  update: CategorySectionUpdateLocalizationDataInput;
};

export type CategorySectionUpsertWithNestedWhereUniqueAndPositionInput = {
  /** Document to upsert */
  data?: InputMaybe<CategorySectionUpsertInput>;
  /** Position in the list of existing component instances, will default to appending at the end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Unique component instance search */
  where: CategorySectionWhereUniqueInput;
};

export type CategorySectionUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: CategorySectionUpsertInput;
  /** Unique document search */
  where: CategorySectionWhereUniqueInput;
};

/** Identifies documents */
export type CategorySectionWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<CategorySectionWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<CategorySectionWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<CategorySectionWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']['input']>;
  categoryDetails_every?: InputMaybe<CategoryDetailWhereInput>;
  categoryDetails_none?: InputMaybe<CategoryDetailWhereInput>;
  categoryDetails_some?: InputMaybe<CategoryDetailWhereInput>;
  description?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  description_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  description_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  description_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  description_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  description_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  description_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  description_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  description_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  description_starts_with?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']['input']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  title_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  title_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  title_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  title_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  title_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  title_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  title_starts_with?: InputMaybe<Scalars['String']['input']>;
};

/** References CategorySection record uniquely */
export type CategorySectionWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']['input']>;
};

export type Collection = Entity & {
  __typename?: 'Collection';
  buttonText?: Maybe<Scalars['String']['output']>;
  buttonUrl?: Maybe<Scalars['String']['output']>;
  endButtonText?: Maybe<Scalars['String']['output']>;
  endButtonUrl?: Maybe<Scalars['String']['output']>;
  endTitle?: Maybe<Scalars['String']['output']>;
  /** The unique identifier */
  id: Scalars['ID']['output'];
  image?: Maybe<Asset>;
  /** System stage field */
  stage: Stage;
  subtitle?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
  topic?: Maybe<Scalars['String']['output']>;
};


export type CollectionImageArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  locales?: InputMaybe<Array<Locale>>;
};

export type CollectionConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Document to connect */
  where: CollectionWhereUniqueInput;
};

/** A connection to a list of items. */
export type CollectionConnection = {
  __typename?: 'CollectionConnection';
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<CollectionEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type CollectionCreateInput = {
  buttonText?: InputMaybe<Scalars['String']['input']>;
  buttonUrl?: InputMaybe<Scalars['String']['input']>;
  endButtonText?: InputMaybe<Scalars['String']['input']>;
  endButtonUrl?: InputMaybe<Scalars['String']['input']>;
  endTitle?: InputMaybe<Scalars['String']['input']>;
  image?: InputMaybe<AssetCreateOneInlineInput>;
  subtitle?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  topic?: InputMaybe<Scalars['String']['input']>;
};

export type CollectionCreateManyInlineInput = {
  /** Create and connect multiple existing Collection documents */
  create?: InputMaybe<Array<CollectionCreateInput>>;
};

export type CollectionCreateOneInlineInput = {
  /** Create and connect one Collection document */
  create?: InputMaybe<CollectionCreateInput>;
};

export type CollectionCreateWithPositionInput = {
  /** Document to create */
  data: CollectionCreateInput;
  /** Position in the list of existing component instances, will default to appending at the end of list */
  position?: InputMaybe<ConnectPositionInput>;
};

/** An edge in a connection. */
export type CollectionEdge = {
  __typename?: 'CollectionEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: Collection;
};

/** Identifies documents */
export type CollectionManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<CollectionWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<CollectionWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<CollectionWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']['input']>;
  buttonText?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  buttonText_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  buttonText_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  buttonText_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  buttonText_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  buttonText_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  buttonText_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  buttonText_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  buttonText_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  buttonText_starts_with?: InputMaybe<Scalars['String']['input']>;
  buttonUrl?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  buttonUrl_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  buttonUrl_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  buttonUrl_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  buttonUrl_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  buttonUrl_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  buttonUrl_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  buttonUrl_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  buttonUrl_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  buttonUrl_starts_with?: InputMaybe<Scalars['String']['input']>;
  endButtonText?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  endButtonText_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  endButtonText_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  endButtonText_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  endButtonText_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  endButtonText_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  endButtonText_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  endButtonText_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  endButtonText_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  endButtonText_starts_with?: InputMaybe<Scalars['String']['input']>;
  endButtonUrl?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  endButtonUrl_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  endButtonUrl_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  endButtonUrl_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  endButtonUrl_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  endButtonUrl_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  endButtonUrl_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  endButtonUrl_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  endButtonUrl_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  endButtonUrl_starts_with?: InputMaybe<Scalars['String']['input']>;
  endTitle?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  endTitle_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  endTitle_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  endTitle_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  endTitle_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  endTitle_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  endTitle_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  endTitle_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  endTitle_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  endTitle_starts_with?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']['input']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']['input']>;
  image?: InputMaybe<AssetWhereInput>;
  subtitle?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  subtitle_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  subtitle_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  subtitle_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  subtitle_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  subtitle_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  subtitle_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  subtitle_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  subtitle_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  subtitle_starts_with?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  title_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  title_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  title_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  title_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  title_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  title_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  title_starts_with?: InputMaybe<Scalars['String']['input']>;
  topic?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  topic_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  topic_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  topic_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  topic_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  topic_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  topic_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  topic_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  topic_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  topic_starts_with?: InputMaybe<Scalars['String']['input']>;
};

export enum CollectionOrderByInput {
  ButtonTextAsc = 'buttonText_ASC',
  ButtonTextDesc = 'buttonText_DESC',
  ButtonUrlAsc = 'buttonUrl_ASC',
  ButtonUrlDesc = 'buttonUrl_DESC',
  EndButtonTextAsc = 'endButtonText_ASC',
  EndButtonTextDesc = 'endButtonText_DESC',
  EndButtonUrlAsc = 'endButtonUrl_ASC',
  EndButtonUrlDesc = 'endButtonUrl_DESC',
  EndTitleAsc = 'endTitle_ASC',
  EndTitleDesc = 'endTitle_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  SubtitleAsc = 'subtitle_ASC',
  SubtitleDesc = 'subtitle_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC',
  TopicAsc = 'topic_ASC',
  TopicDesc = 'topic_DESC'
}

export type CollectionParent = CollectionShowcase | SideBySideCompare;

export type CollectionParentConnectInput = {
  CollectionShowcase?: InputMaybe<CollectionShowcaseConnectInput>;
  SideBySideCompare?: InputMaybe<SideBySideCompareConnectInput>;
};

export type CollectionParentCreateInput = {
  CollectionShowcase?: InputMaybe<CollectionShowcaseCreateInput>;
  SideBySideCompare?: InputMaybe<SideBySideCompareCreateInput>;
};

export type CollectionParentCreateManyInlineInput = {
  /** Create and connect multiple existing CollectionParent documents */
  create?: InputMaybe<Array<CollectionParentCreateInput>>;
};

export type CollectionParentCreateOneInlineInput = {
  /** Create and connect one CollectionParent document */
  create?: InputMaybe<CollectionParentCreateInput>;
};

export type CollectionParentCreateWithPositionInput = {
  CollectionShowcase?: InputMaybe<CollectionShowcaseCreateWithPositionInput>;
  SideBySideCompare?: InputMaybe<SideBySideCompareCreateWithPositionInput>;
};

export type CollectionParentUpdateInput = {
  CollectionShowcase?: InputMaybe<CollectionShowcaseUpdateInput>;
  SideBySideCompare?: InputMaybe<SideBySideCompareUpdateInput>;
};

export type CollectionParentUpdateManyInlineInput = {
  /** Create and connect multiple CollectionParent component instances */
  create?: InputMaybe<Array<CollectionParentCreateWithPositionInput>>;
  /** Delete multiple CollectionParent documents */
  delete?: InputMaybe<Array<CollectionParentWhereUniqueInput>>;
  /** Update multiple CollectionParent component instances */
  update?: InputMaybe<Array<CollectionParentUpdateWithNestedWhereUniqueAndPositionInput>>;
  /** Upsert multiple CollectionParent component instances */
  upsert?: InputMaybe<Array<CollectionParentUpsertWithNestedWhereUniqueAndPositionInput>>;
};

export type CollectionParentUpdateManyWithNestedWhereInput = {
  CollectionShowcase?: InputMaybe<CollectionShowcaseUpdateManyWithNestedWhereInput>;
  SideBySideCompare?: InputMaybe<SideBySideCompareUpdateManyWithNestedWhereInput>;
};

export type CollectionParentUpdateOneInlineInput = {
  /** Create and connect one CollectionParent document */
  create?: InputMaybe<CollectionParentCreateInput>;
  /** Delete currently connected CollectionParent document */
  delete?: InputMaybe<Scalars['Boolean']['input']>;
  /** Update single CollectionParent document */
  update?: InputMaybe<CollectionParentUpdateWithNestedWhereUniqueInput>;
  /** Upsert single CollectionParent document */
  upsert?: InputMaybe<CollectionParentUpsertWithNestedWhereUniqueInput>;
};

export type CollectionParentUpdateWithNestedWhereUniqueAndPositionInput = {
  CollectionShowcase?: InputMaybe<CollectionShowcaseUpdateWithNestedWhereUniqueAndPositionInput>;
  SideBySideCompare?: InputMaybe<SideBySideCompareUpdateWithNestedWhereUniqueAndPositionInput>;
};

export type CollectionParentUpdateWithNestedWhereUniqueInput = {
  CollectionShowcase?: InputMaybe<CollectionShowcaseUpdateWithNestedWhereUniqueInput>;
  SideBySideCompare?: InputMaybe<SideBySideCompareUpdateWithNestedWhereUniqueInput>;
};

export type CollectionParentUpsertWithNestedWhereUniqueAndPositionInput = {
  CollectionShowcase?: InputMaybe<CollectionShowcaseUpsertWithNestedWhereUniqueAndPositionInput>;
  SideBySideCompare?: InputMaybe<SideBySideCompareUpsertWithNestedWhereUniqueAndPositionInput>;
};

export type CollectionParentUpsertWithNestedWhereUniqueInput = {
  CollectionShowcase?: InputMaybe<CollectionShowcaseUpsertWithNestedWhereUniqueInput>;
  SideBySideCompare?: InputMaybe<SideBySideCompareUpsertWithNestedWhereUniqueInput>;
};

export type CollectionParentWhereInput = {
  CollectionShowcase?: InputMaybe<CollectionShowcaseWhereInput>;
  SideBySideCompare?: InputMaybe<SideBySideCompareWhereInput>;
};

export type CollectionParentWhereUniqueInput = {
  CollectionShowcase?: InputMaybe<CollectionShowcaseWhereUniqueInput>;
  SideBySideCompare?: InputMaybe<SideBySideCompareWhereUniqueInput>;
};

export type CollectionShowcase = Entity & {
  __typename?: 'CollectionShowcase';
  collections: Array<CollectionShowcasecollectionsUnion>;
  /** The unique identifier */
  id: Scalars['ID']['output'];
  /** System stage field */
  stage: Stage;
  subtitle?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
  underCollectionButton?: Maybe<Scalars['String']['output']>;
  underCollectionButtonUrl?: Maybe<Scalars['String']['output']>;
  underCollectionTitle?: Maybe<Scalars['String']['output']>;
};


export type CollectionShowcaseCollectionsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: InputMaybe<Array<Locale>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};

export type CollectionShowcaseConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Document to connect */
  where: CollectionShowcaseWhereUniqueInput;
};

/** A connection to a list of items. */
export type CollectionShowcaseConnection = {
  __typename?: 'CollectionShowcaseConnection';
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<CollectionShowcaseEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type CollectionShowcaseCreateInput = {
  collections?: InputMaybe<CollectionShowcasecollectionsUnionCreateManyInlineInput>;
  subtitle?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  underCollectionButton?: InputMaybe<Scalars['String']['input']>;
  underCollectionButtonUrl?: InputMaybe<Scalars['String']['input']>;
  underCollectionTitle?: InputMaybe<Scalars['String']['input']>;
};

export type CollectionShowcaseCreateManyInlineInput = {
  /** Create and connect multiple existing CollectionShowcase documents */
  create?: InputMaybe<Array<CollectionShowcaseCreateInput>>;
};

export type CollectionShowcaseCreateOneInlineInput = {
  /** Create and connect one CollectionShowcase document */
  create?: InputMaybe<CollectionShowcaseCreateInput>;
};

export type CollectionShowcaseCreateWithPositionInput = {
  /** Document to create */
  data: CollectionShowcaseCreateInput;
  /** Position in the list of existing component instances, will default to appending at the end of list */
  position?: InputMaybe<ConnectPositionInput>;
};

/** An edge in a connection. */
export type CollectionShowcaseEdge = {
  __typename?: 'CollectionShowcaseEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: CollectionShowcase;
};

/** Identifies documents */
export type CollectionShowcaseManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<CollectionShowcaseWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<CollectionShowcaseWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<CollectionShowcaseWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']['input']>;
  /** All values in which the union is empty. */
  collections_empty?: InputMaybe<Scalars['Boolean']['input']>;
  /** Matches if the modular component contains at least one connection to the item provided to the filter */
  collections_some?: InputMaybe<CollectionShowcasecollectionsUnionWhereInput>;
  id?: InputMaybe<Scalars['ID']['input']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']['input']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']['input']>;
  subtitle?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  subtitle_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  subtitle_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  subtitle_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  subtitle_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  subtitle_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  subtitle_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  subtitle_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  subtitle_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  subtitle_starts_with?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  title_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  title_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  title_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  title_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  title_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  title_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  title_starts_with?: InputMaybe<Scalars['String']['input']>;
  underCollectionButton?: InputMaybe<Scalars['String']['input']>;
  underCollectionButtonUrl?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  underCollectionButtonUrl_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  underCollectionButtonUrl_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  underCollectionButtonUrl_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  underCollectionButtonUrl_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  underCollectionButtonUrl_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  underCollectionButtonUrl_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  underCollectionButtonUrl_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  underCollectionButtonUrl_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  underCollectionButtonUrl_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  underCollectionButton_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  underCollectionButton_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  underCollectionButton_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  underCollectionButton_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  underCollectionButton_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  underCollectionButton_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  underCollectionButton_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  underCollectionButton_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  underCollectionButton_starts_with?: InputMaybe<Scalars['String']['input']>;
  underCollectionTitle?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  underCollectionTitle_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  underCollectionTitle_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  underCollectionTitle_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  underCollectionTitle_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  underCollectionTitle_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  underCollectionTitle_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  underCollectionTitle_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  underCollectionTitle_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  underCollectionTitle_starts_with?: InputMaybe<Scalars['String']['input']>;
};

export enum CollectionShowcaseOrderByInput {
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  SubtitleAsc = 'subtitle_ASC',
  SubtitleDesc = 'subtitle_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC',
  UnderCollectionButtonUrlAsc = 'underCollectionButtonUrl_ASC',
  UnderCollectionButtonUrlDesc = 'underCollectionButtonUrl_DESC',
  UnderCollectionButtonAsc = 'underCollectionButton_ASC',
  UnderCollectionButtonDesc = 'underCollectionButton_DESC',
  UnderCollectionTitleAsc = 'underCollectionTitle_ASC',
  UnderCollectionTitleDesc = 'underCollectionTitle_DESC'
}

export type CollectionShowcaseParent = LandingPage;

export type CollectionShowcaseParentConnectInput = {
  LandingPage?: InputMaybe<LandingPageConnectInput>;
};

export type CollectionShowcaseParentCreateInput = {
  LandingPage?: InputMaybe<LandingPageCreateInput>;
};

export type CollectionShowcaseParentCreateManyInlineInput = {
  /** Connect multiple existing CollectionShowcaseParent documents */
  connect?: InputMaybe<Array<CollectionShowcaseParentWhereUniqueInput>>;
  /** Create and connect multiple existing CollectionShowcaseParent documents */
  create?: InputMaybe<Array<CollectionShowcaseParentCreateInput>>;
};

export type CollectionShowcaseParentCreateOneInlineInput = {
  /** Connect one existing CollectionShowcaseParent document */
  connect?: InputMaybe<CollectionShowcaseParentWhereUniqueInput>;
  /** Create and connect one CollectionShowcaseParent document */
  create?: InputMaybe<CollectionShowcaseParentCreateInput>;
};

export type CollectionShowcaseParentUpdateInput = {
  LandingPage?: InputMaybe<LandingPageUpdateInput>;
};

export type CollectionShowcaseParentUpdateManyInlineInput = {
  /** Connect multiple existing CollectionShowcaseParent documents */
  connect?: InputMaybe<Array<CollectionShowcaseParentConnectInput>>;
  /** Create and connect multiple CollectionShowcaseParent documents */
  create?: InputMaybe<Array<CollectionShowcaseParentCreateInput>>;
  /** Delete multiple CollectionShowcaseParent documents */
  delete?: InputMaybe<Array<CollectionShowcaseParentWhereUniqueInput>>;
  /** Disconnect multiple CollectionShowcaseParent documents */
  disconnect?: InputMaybe<Array<CollectionShowcaseParentWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing CollectionShowcaseParent documents */
  set?: InputMaybe<Array<CollectionShowcaseParentWhereUniqueInput>>;
  /** Update multiple CollectionShowcaseParent documents */
  update?: InputMaybe<Array<CollectionShowcaseParentUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple CollectionShowcaseParent documents */
  upsert?: InputMaybe<Array<CollectionShowcaseParentUpsertWithNestedWhereUniqueInput>>;
};

export type CollectionShowcaseParentUpdateManyWithNestedWhereInput = {
  LandingPage?: InputMaybe<LandingPageUpdateManyWithNestedWhereInput>;
};

export type CollectionShowcaseParentUpdateOneInlineInput = {
  /** Connect existing CollectionShowcaseParent document */
  connect?: InputMaybe<CollectionShowcaseParentWhereUniqueInput>;
  /** Create and connect one CollectionShowcaseParent document */
  create?: InputMaybe<CollectionShowcaseParentCreateInput>;
  /** Delete currently connected CollectionShowcaseParent document */
  delete?: InputMaybe<Scalars['Boolean']['input']>;
  /** Disconnect currently connected CollectionShowcaseParent document */
  disconnect?: InputMaybe<Scalars['Boolean']['input']>;
  /** Update single CollectionShowcaseParent document */
  update?: InputMaybe<CollectionShowcaseParentUpdateWithNestedWhereUniqueInput>;
  /** Upsert single CollectionShowcaseParent document */
  upsert?: InputMaybe<CollectionShowcaseParentUpsertWithNestedWhereUniqueInput>;
};

export type CollectionShowcaseParentUpdateWithNestedWhereUniqueInput = {
  LandingPage?: InputMaybe<LandingPageUpdateWithNestedWhereUniqueInput>;
};

export type CollectionShowcaseParentUpsertWithNestedWhereUniqueInput = {
  LandingPage?: InputMaybe<LandingPageUpsertWithNestedWhereUniqueInput>;
};

export type CollectionShowcaseParentWhereInput = {
  LandingPage?: InputMaybe<LandingPageWhereInput>;
};

export type CollectionShowcaseParentWhereUniqueInput = {
  LandingPage?: InputMaybe<LandingPageWhereUniqueInput>;
};

export type CollectionShowcaseUpdateInput = {
  collections?: InputMaybe<CollectionShowcasecollectionsUnionUpdateManyInlineInput>;
  subtitle?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  underCollectionButton?: InputMaybe<Scalars['String']['input']>;
  underCollectionButtonUrl?: InputMaybe<Scalars['String']['input']>;
  underCollectionTitle?: InputMaybe<Scalars['String']['input']>;
};

export type CollectionShowcaseUpdateManyInlineInput = {
  /** Create and connect multiple CollectionShowcase component instances */
  create?: InputMaybe<Array<CollectionShowcaseCreateWithPositionInput>>;
  /** Delete multiple CollectionShowcase documents */
  delete?: InputMaybe<Array<CollectionShowcaseWhereUniqueInput>>;
  /** Update multiple CollectionShowcase component instances */
  update?: InputMaybe<Array<CollectionShowcaseUpdateWithNestedWhereUniqueAndPositionInput>>;
  /** Upsert multiple CollectionShowcase component instances */
  upsert?: InputMaybe<Array<CollectionShowcaseUpsertWithNestedWhereUniqueAndPositionInput>>;
};

export type CollectionShowcaseUpdateManyInput = {
  subtitle?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  underCollectionButton?: InputMaybe<Scalars['String']['input']>;
  underCollectionButtonUrl?: InputMaybe<Scalars['String']['input']>;
  underCollectionTitle?: InputMaybe<Scalars['String']['input']>;
};

export type CollectionShowcaseUpdateManyWithNestedWhereInput = {
  /** Update many input */
  data: CollectionShowcaseUpdateManyInput;
  /** Document search */
  where: CollectionShowcaseWhereInput;
};

export type CollectionShowcaseUpdateOneInlineInput = {
  /** Create and connect one CollectionShowcase document */
  create?: InputMaybe<CollectionShowcaseCreateInput>;
  /** Delete currently connected CollectionShowcase document */
  delete?: InputMaybe<Scalars['Boolean']['input']>;
  /** Update single CollectionShowcase document */
  update?: InputMaybe<CollectionShowcaseUpdateWithNestedWhereUniqueInput>;
  /** Upsert single CollectionShowcase document */
  upsert?: InputMaybe<CollectionShowcaseUpsertWithNestedWhereUniqueInput>;
};

export type CollectionShowcaseUpdateWithNestedWhereUniqueAndPositionInput = {
  /** Document to update */
  data?: InputMaybe<CollectionShowcaseUpdateInput>;
  /** Position in the list of existing component instances, will default to appending at the end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Unique component instance search */
  where: CollectionShowcaseWhereUniqueInput;
};

export type CollectionShowcaseUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: CollectionShowcaseUpdateInput;
  /** Unique document search */
  where: CollectionShowcaseWhereUniqueInput;
};

export type CollectionShowcaseUpsertInput = {
  /** Create document if it didn't exist */
  create: CollectionShowcaseCreateInput;
  /** Update document if it exists */
  update: CollectionShowcaseUpdateInput;
};

export type CollectionShowcaseUpsertWithNestedWhereUniqueAndPositionInput = {
  /** Document to upsert */
  data?: InputMaybe<CollectionShowcaseUpsertInput>;
  /** Position in the list of existing component instances, will default to appending at the end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Unique component instance search */
  where: CollectionShowcaseWhereUniqueInput;
};

export type CollectionShowcaseUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: CollectionShowcaseUpsertInput;
  /** Unique document search */
  where: CollectionShowcaseWhereUniqueInput;
};

/** Identifies documents */
export type CollectionShowcaseWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<CollectionShowcaseWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<CollectionShowcaseWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<CollectionShowcaseWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']['input']>;
  /** All values in which the union is empty. */
  collections_empty?: InputMaybe<Scalars['Boolean']['input']>;
  /** Matches if the modular component contains at least one connection to the item provided to the filter */
  collections_some?: InputMaybe<CollectionShowcasecollectionsUnionWhereInput>;
  id?: InputMaybe<Scalars['ID']['input']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']['input']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']['input']>;
  subtitle?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  subtitle_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  subtitle_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  subtitle_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  subtitle_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  subtitle_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  subtitle_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  subtitle_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  subtitle_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  subtitle_starts_with?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  title_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  title_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  title_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  title_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  title_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  title_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  title_starts_with?: InputMaybe<Scalars['String']['input']>;
  underCollectionButton?: InputMaybe<Scalars['String']['input']>;
  underCollectionButtonUrl?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  underCollectionButtonUrl_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  underCollectionButtonUrl_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  underCollectionButtonUrl_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  underCollectionButtonUrl_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  underCollectionButtonUrl_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  underCollectionButtonUrl_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  underCollectionButtonUrl_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  underCollectionButtonUrl_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  underCollectionButtonUrl_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  underCollectionButton_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  underCollectionButton_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  underCollectionButton_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  underCollectionButton_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  underCollectionButton_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  underCollectionButton_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  underCollectionButton_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  underCollectionButton_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  underCollectionButton_starts_with?: InputMaybe<Scalars['String']['input']>;
  underCollectionTitle?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  underCollectionTitle_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  underCollectionTitle_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  underCollectionTitle_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  underCollectionTitle_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  underCollectionTitle_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  underCollectionTitle_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  underCollectionTitle_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  underCollectionTitle_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  underCollectionTitle_starts_with?: InputMaybe<Scalars['String']['input']>;
};

/** References CollectionShowcase record uniquely */
export type CollectionShowcaseWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']['input']>;
};

export type CollectionShowcasecollectionsUnion = Collection;

export type CollectionShowcasecollectionsUnionConnectInput = {
  Collection?: InputMaybe<CollectionConnectInput>;
};

export type CollectionShowcasecollectionsUnionCreateInput = {
  Collection?: InputMaybe<CollectionCreateInput>;
};

export type CollectionShowcasecollectionsUnionCreateManyInlineInput = {
  /** Create and connect multiple existing CollectionShowcasecollectionsUnion documents */
  create?: InputMaybe<Array<CollectionShowcasecollectionsUnionCreateInput>>;
};

export type CollectionShowcasecollectionsUnionCreateOneInlineInput = {
  /** Create and connect one CollectionShowcasecollectionsUnion document */
  create?: InputMaybe<CollectionShowcasecollectionsUnionCreateInput>;
};

export type CollectionShowcasecollectionsUnionCreateWithPositionInput = {
  Collection?: InputMaybe<CollectionCreateWithPositionInput>;
};

export type CollectionShowcasecollectionsUnionUpdateInput = {
  Collection?: InputMaybe<CollectionUpdateInput>;
};

export type CollectionShowcasecollectionsUnionUpdateManyInlineInput = {
  /** Create and connect multiple CollectionShowcasecollectionsUnion component instances */
  create?: InputMaybe<Array<CollectionShowcasecollectionsUnionCreateWithPositionInput>>;
  /** Delete multiple CollectionShowcasecollectionsUnion documents */
  delete?: InputMaybe<Array<CollectionShowcasecollectionsUnionWhereUniqueInput>>;
  /** Update multiple CollectionShowcasecollectionsUnion component instances */
  update?: InputMaybe<Array<CollectionShowcasecollectionsUnionUpdateWithNestedWhereUniqueAndPositionInput>>;
  /** Upsert multiple CollectionShowcasecollectionsUnion component instances */
  upsert?: InputMaybe<Array<CollectionShowcasecollectionsUnionUpsertWithNestedWhereUniqueAndPositionInput>>;
};

export type CollectionShowcasecollectionsUnionUpdateManyWithNestedWhereInput = {
  Collection?: InputMaybe<CollectionUpdateManyWithNestedWhereInput>;
};

export type CollectionShowcasecollectionsUnionUpdateOneInlineInput = {
  /** Create and connect one CollectionShowcasecollectionsUnion document */
  create?: InputMaybe<CollectionShowcasecollectionsUnionCreateInput>;
  /** Delete currently connected CollectionShowcasecollectionsUnion document */
  delete?: InputMaybe<Scalars['Boolean']['input']>;
  /** Update single CollectionShowcasecollectionsUnion document */
  update?: InputMaybe<CollectionShowcasecollectionsUnionUpdateWithNestedWhereUniqueInput>;
  /** Upsert single CollectionShowcasecollectionsUnion document */
  upsert?: InputMaybe<CollectionShowcasecollectionsUnionUpsertWithNestedWhereUniqueInput>;
};

export type CollectionShowcasecollectionsUnionUpdateWithNestedWhereUniqueAndPositionInput = {
  Collection?: InputMaybe<CollectionUpdateWithNestedWhereUniqueAndPositionInput>;
};

export type CollectionShowcasecollectionsUnionUpdateWithNestedWhereUniqueInput = {
  Collection?: InputMaybe<CollectionUpdateWithNestedWhereUniqueInput>;
};

export type CollectionShowcasecollectionsUnionUpsertWithNestedWhereUniqueAndPositionInput = {
  Collection?: InputMaybe<CollectionUpsertWithNestedWhereUniqueAndPositionInput>;
};

export type CollectionShowcasecollectionsUnionUpsertWithNestedWhereUniqueInput = {
  Collection?: InputMaybe<CollectionUpsertWithNestedWhereUniqueInput>;
};

export type CollectionShowcasecollectionsUnionWhereInput = {
  Collection?: InputMaybe<CollectionWhereInput>;
};

export type CollectionShowcasecollectionsUnionWhereUniqueInput = {
  Collection?: InputMaybe<CollectionWhereUniqueInput>;
};

export type CollectionUpdateInput = {
  buttonText?: InputMaybe<Scalars['String']['input']>;
  buttonUrl?: InputMaybe<Scalars['String']['input']>;
  endButtonText?: InputMaybe<Scalars['String']['input']>;
  endButtonUrl?: InputMaybe<Scalars['String']['input']>;
  endTitle?: InputMaybe<Scalars['String']['input']>;
  image?: InputMaybe<AssetUpdateOneInlineInput>;
  subtitle?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  topic?: InputMaybe<Scalars['String']['input']>;
};

export type CollectionUpdateManyInlineInput = {
  /** Create and connect multiple Collection component instances */
  create?: InputMaybe<Array<CollectionCreateWithPositionInput>>;
  /** Delete multiple Collection documents */
  delete?: InputMaybe<Array<CollectionWhereUniqueInput>>;
  /** Update multiple Collection component instances */
  update?: InputMaybe<Array<CollectionUpdateWithNestedWhereUniqueAndPositionInput>>;
  /** Upsert multiple Collection component instances */
  upsert?: InputMaybe<Array<CollectionUpsertWithNestedWhereUniqueAndPositionInput>>;
};

export type CollectionUpdateManyInput = {
  buttonText?: InputMaybe<Scalars['String']['input']>;
  buttonUrl?: InputMaybe<Scalars['String']['input']>;
  endButtonText?: InputMaybe<Scalars['String']['input']>;
  endButtonUrl?: InputMaybe<Scalars['String']['input']>;
  endTitle?: InputMaybe<Scalars['String']['input']>;
  subtitle?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  topic?: InputMaybe<Scalars['String']['input']>;
};

export type CollectionUpdateManyWithNestedWhereInput = {
  /** Update many input */
  data: CollectionUpdateManyInput;
  /** Document search */
  where: CollectionWhereInput;
};

export type CollectionUpdateOneInlineInput = {
  /** Create and connect one Collection document */
  create?: InputMaybe<CollectionCreateInput>;
  /** Delete currently connected Collection document */
  delete?: InputMaybe<Scalars['Boolean']['input']>;
  /** Update single Collection document */
  update?: InputMaybe<CollectionUpdateWithNestedWhereUniqueInput>;
  /** Upsert single Collection document */
  upsert?: InputMaybe<CollectionUpsertWithNestedWhereUniqueInput>;
};

export type CollectionUpdateWithNestedWhereUniqueAndPositionInput = {
  /** Document to update */
  data?: InputMaybe<CollectionUpdateInput>;
  /** Position in the list of existing component instances, will default to appending at the end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Unique component instance search */
  where: CollectionWhereUniqueInput;
};

export type CollectionUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: CollectionUpdateInput;
  /** Unique document search */
  where: CollectionWhereUniqueInput;
};

export type CollectionUpsertInput = {
  /** Create document if it didn't exist */
  create: CollectionCreateInput;
  /** Update document if it exists */
  update: CollectionUpdateInput;
};

export type CollectionUpsertWithNestedWhereUniqueAndPositionInput = {
  /** Document to upsert */
  data?: InputMaybe<CollectionUpsertInput>;
  /** Position in the list of existing component instances, will default to appending at the end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Unique component instance search */
  where: CollectionWhereUniqueInput;
};

export type CollectionUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: CollectionUpsertInput;
  /** Unique document search */
  where: CollectionWhereUniqueInput;
};

/** Identifies documents */
export type CollectionWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<CollectionWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<CollectionWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<CollectionWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']['input']>;
  buttonText?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  buttonText_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  buttonText_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  buttonText_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  buttonText_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  buttonText_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  buttonText_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  buttonText_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  buttonText_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  buttonText_starts_with?: InputMaybe<Scalars['String']['input']>;
  buttonUrl?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  buttonUrl_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  buttonUrl_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  buttonUrl_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  buttonUrl_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  buttonUrl_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  buttonUrl_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  buttonUrl_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  buttonUrl_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  buttonUrl_starts_with?: InputMaybe<Scalars['String']['input']>;
  endButtonText?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  endButtonText_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  endButtonText_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  endButtonText_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  endButtonText_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  endButtonText_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  endButtonText_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  endButtonText_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  endButtonText_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  endButtonText_starts_with?: InputMaybe<Scalars['String']['input']>;
  endButtonUrl?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  endButtonUrl_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  endButtonUrl_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  endButtonUrl_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  endButtonUrl_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  endButtonUrl_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  endButtonUrl_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  endButtonUrl_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  endButtonUrl_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  endButtonUrl_starts_with?: InputMaybe<Scalars['String']['input']>;
  endTitle?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  endTitle_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  endTitle_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  endTitle_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  endTitle_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  endTitle_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  endTitle_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  endTitle_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  endTitle_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  endTitle_starts_with?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']['input']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']['input']>;
  image?: InputMaybe<AssetWhereInput>;
  subtitle?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  subtitle_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  subtitle_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  subtitle_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  subtitle_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  subtitle_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  subtitle_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  subtitle_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  subtitle_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  subtitle_starts_with?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  title_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  title_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  title_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  title_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  title_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  title_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  title_starts_with?: InputMaybe<Scalars['String']['input']>;
  topic?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  topic_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  topic_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  topic_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  topic_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  topic_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  topic_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  topic_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  topic_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  topic_starts_with?: InputMaybe<Scalars['String']['input']>;
};

/** References Collection record uniquely */
export type CollectionWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']['input']>;
};

/** Representing a color value comprising of HEX, RGBA and css color values */
export type Color = {
  __typename?: 'Color';
  css: Scalars['String']['output'];
  hex: Scalars['Hex']['output'];
  rgba: Rgba;
};

/** Accepts either HEX or RGBA color value. At least one of hex or rgba value should be passed. If both are passed RGBA is used. */
export type ColorInput = {
  hex?: InputMaybe<Scalars['Hex']['input']>;
  rgba?: InputMaybe<RgbaInput>;
};

export type ConnectPositionInput = {
  /** Connect document after specified document */
  after?: InputMaybe<Scalars['ID']['input']>;
  /** Connect document before specified document */
  before?: InputMaybe<Scalars['ID']['input']>;
  /** Connect document at last position */
  end?: InputMaybe<Scalars['Boolean']['input']>;
  /** Connect document at first position */
  start?: InputMaybe<Scalars['Boolean']['input']>;
};

export enum DocumentFileTypes {
  Doc = 'doc',
  Docx = 'docx',
  Html = 'html',
  Jpg = 'jpg',
  Odp = 'odp',
  Ods = 'ods',
  Odt = 'odt',
  Pdf = 'pdf',
  Png = 'png',
  Ppt = 'ppt',
  Pptx = 'pptx',
  Svg = 'svg',
  Txt = 'txt',
  Webp = 'webp',
  Xls = 'xls',
  Xlsx = 'xlsx'
}

export type DocumentOutputInput = {
  /**
   * Transforms a document into a desired file type.
   * See this matrix for format support:
   *
   * PDF:	jpg, odp, ods, odt, png, svg, txt, and webp
   * DOC:	docx, html, jpg, odt, pdf, png, svg, txt, and webp
   * DOCX:	doc, html, jpg, odt, pdf, png, svg, txt, and webp
   * ODT:	doc, docx, html, jpg, pdf, png, svg, txt, and webp
   * XLS:	jpg, pdf, ods, png, svg, xlsx, and webp
   * XLSX:	jpg, pdf, ods, png, svg, xls, and webp
   * ODS:	jpg, pdf, png, xls, svg, xlsx, and webp
   * PPT:	jpg, odp, pdf, png, svg, pptx, and webp
   * PPTX:	jpg, odp, pdf, png, svg, ppt, and webp
   * ODP:	jpg, pdf, png, ppt, svg, pptx, and webp
   * BMP:	jpg, odp, ods, odt, pdf, png, svg, and webp
   * GIF:	jpg, odp, ods, odt, pdf, png, svg, and webp
   * JPG:	jpg, odp, ods, odt, pdf, png, svg, and webp
   * PNG:	jpg, odp, ods, odt, pdf, png, svg, and webp
   * WEBP:	jpg, odp, ods, odt, pdf, png, svg, and webp
   * TIFF:	jpg, odp, ods, odt, pdf, png, svg, and webp
   * AI:	    jpg, odp, ods, odt, pdf, png, svg, and webp
   * PSD:	jpg, odp, ods, odt, pdf, png, svg, and webp
   * SVG:	jpg, odp, ods, odt, pdf, png, and webp
   * HTML:	jpg, odt, pdf, svg, txt, and webp
   * TXT:	jpg, html, odt, pdf, svg, and webp
   */
  format?: InputMaybe<DocumentFileTypes>;
};

/** Transformations for Documents */
export type DocumentTransformationInput = {
  /** Changes the output for the file. */
  output?: InputMaybe<DocumentOutputInput>;
};

export type DocumentVersion = {
  __typename?: 'DocumentVersion';
  createdAt: Scalars['DateTime']['output'];
  data?: Maybe<Scalars['Json']['output']>;
  id: Scalars['ID']['output'];
  revision: Scalars['Int']['output'];
  stage: Stage;
};

/** An object with an ID */
export type Entity = {
  /** The id of the object. */
  id: Scalars['ID']['output'];
  /** The Stage of an object */
  stage: Stage;
};

/** This enumeration holds all typenames that implement the Entity interface. Components and models implement the Entity interface. */
export enum EntityTypeName {
  /** Asset system model */
  Asset = 'Asset',
  Author = 'Author',
  CategoryDetail = 'CategoryDetail',
  CategorySection = 'CategorySection',
  Collection = 'Collection',
  CollectionShowcase = 'CollectionShowcase',
  Faq = 'Faq',
  FaqDetail = 'FaqDetail',
  HomeFeaturePoint = 'HomeFeaturePoint',
  HowItsWorkDetail = 'HowItsWorkDetail',
  ImageWithText = 'ImageWithText',
  Keyword = 'Keyword',
  LandingPage = 'LandingPage',
  LandingPagePoint = 'LandingPagePoint',
  LandingPageSlidingImageGallery = 'LandingPageSlidingImageGallery',
  /** This New Landing Page Contains the data of the "sensoriumarte/${slug}"  */
  NewLandingPage = 'NewLandingPage',
  Post = 'Post',
  PrivacyPolicy = 'PrivacyPolicy',
  RelatedLandingPageTemplate = 'RelatedLandingPageTemplate',
  Review = 'Review',
  /** Scheduled Operation system model */
  ScheduledOperation = 'ScheduledOperation',
  /** Scheduled Release system model */
  ScheduledRelease = 'ScheduledRelease',
  SeoOverride = 'SeoOverride',
  SideBySideCompare = 'SideBySideCompare',
  Tag = 'Tag',
  TemplatesDetail = 'TemplatesDetail',
  Testimonial = 'Testimonial',
  TwoFoldmageGallery = 'TwoFoldmageGallery',
  /** User system model */
  User = 'User',
  UspsDetail = 'UspsDetail',
  WhySensoriumUsp = 'WhySensoriumUsp'
}

/** Allows to specify input to query models and components directly */
export type EntityWhereInput = {
  /** The ID of an object */
  id: Scalars['ID']['input'];
  locale?: InputMaybe<Locale>;
  stage: Stage;
  /** The Type name of an object */
  typename: EntityTypeName;
};

export type Faq = Entity & {
  __typename?: 'Faq';
  faqDetails: Array<FaqDetail>;
  faqTitle: Scalars['String']['output'];
  /** The unique identifier */
  id: Scalars['ID']['output'];
  /** System Locale field */
  locale: Locale;
  /** Get the other localizations for this document */
  localizations: Array<Faq>;
  /** System stage field */
  stage: Stage;
};


export type FaqFaqDetailsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: InputMaybe<Array<Locale>>;
  orderBy?: InputMaybe<FaqDetailOrderByInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<FaqDetailWhereInput>;
};


export type FaqLocalizationsArgs = {
  includeCurrent?: Scalars['Boolean']['input'];
  locales?: Array<Locale>;
};

export type FaqConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Document to connect */
  where: FaqWhereUniqueInput;
};

/** A connection to a list of items. */
export type FaqConnection = {
  __typename?: 'FaqConnection';
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<FaqEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type FaqCreateInput = {
  faqDetails?: InputMaybe<FaqDetailCreateManyInlineInput>;
  /** faqTitle input for default locale (en) */
  faqTitle: Scalars['String']['input'];
  /** Inline mutations for managing document localizations excluding the default locale */
  localizations?: InputMaybe<FaqCreateLocalizationsInput>;
};

export type FaqCreateLocalizationDataInput = {
  faqTitle: Scalars['String']['input'];
};

export type FaqCreateLocalizationInput = {
  /** Localization input */
  data: FaqCreateLocalizationDataInput;
  locale: Locale;
};

export type FaqCreateLocalizationsInput = {
  /** Create localizations for the newly-created document */
  create?: InputMaybe<Array<FaqCreateLocalizationInput>>;
};

export type FaqCreateManyInlineInput = {
  /** Create and connect multiple existing Faq documents */
  create?: InputMaybe<Array<FaqCreateInput>>;
};

export type FaqCreateOneInlineInput = {
  /** Create and connect one Faq document */
  create?: InputMaybe<FaqCreateInput>;
};

export type FaqCreateWithPositionInput = {
  /** Document to create */
  data: FaqCreateInput;
  /** Position in the list of existing component instances, will default to appending at the end of list */
  position?: InputMaybe<ConnectPositionInput>;
};

export type FaqDetail = Entity & {
  __typename?: 'FaqDetail';
  description?: Maybe<RichText>;
  /** The unique identifier */
  id: Scalars['ID']['output'];
  /** System Locale field */
  locale: Locale;
  /** Get the other localizations for this document */
  localizations: Array<FaqDetail>;
  question: Scalars['String']['output'];
  /** System stage field */
  stage: Stage;
};


export type FaqDetailLocalizationsArgs = {
  includeCurrent?: Scalars['Boolean']['input'];
  locales?: Array<Locale>;
};

export type FaqDetailConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Document to connect */
  where: FaqDetailWhereUniqueInput;
};

/** A connection to a list of items. */
export type FaqDetailConnection = {
  __typename?: 'FaqDetailConnection';
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<FaqDetailEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type FaqDetailCreateInput = {
  /** description input for default locale (en) */
  description?: InputMaybe<Scalars['RichTextAST']['input']>;
  /** Inline mutations for managing document localizations excluding the default locale */
  localizations?: InputMaybe<FaqDetailCreateLocalizationsInput>;
  /** question input for default locale (en) */
  question: Scalars['String']['input'];
};

export type FaqDetailCreateLocalizationDataInput = {
  description?: InputMaybe<Scalars['RichTextAST']['input']>;
  question: Scalars['String']['input'];
};

export type FaqDetailCreateLocalizationInput = {
  /** Localization input */
  data: FaqDetailCreateLocalizationDataInput;
  locale: Locale;
};

export type FaqDetailCreateLocalizationsInput = {
  /** Create localizations for the newly-created document */
  create?: InputMaybe<Array<FaqDetailCreateLocalizationInput>>;
};

export type FaqDetailCreateManyInlineInput = {
  /** Create and connect multiple existing FaqDetail documents */
  create?: InputMaybe<Array<FaqDetailCreateInput>>;
};

export type FaqDetailCreateOneInlineInput = {
  /** Create and connect one FaqDetail document */
  create?: InputMaybe<FaqDetailCreateInput>;
};

export type FaqDetailCreateWithPositionInput = {
  /** Document to create */
  data: FaqDetailCreateInput;
  /** Position in the list of existing component instances, will default to appending at the end of list */
  position?: InputMaybe<ConnectPositionInput>;
};

/** An edge in a connection. */
export type FaqDetailEdge = {
  __typename?: 'FaqDetailEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: FaqDetail;
};

/** Identifies documents */
export type FaqDetailManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<FaqDetailWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<FaqDetailWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<FaqDetailWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']['input']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']['input']>;
};

export enum FaqDetailOrderByInput {
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  QuestionAsc = 'question_ASC',
  QuestionDesc = 'question_DESC'
}

export type FaqDetailParent = Faq;

export type FaqDetailParentConnectInput = {
  Faq?: InputMaybe<FaqConnectInput>;
};

export type FaqDetailParentCreateInput = {
  Faq?: InputMaybe<FaqCreateInput>;
};

export type FaqDetailParentCreateManyInlineInput = {
  /** Create and connect multiple existing FaqDetailParent documents */
  create?: InputMaybe<Array<FaqDetailParentCreateInput>>;
};

export type FaqDetailParentCreateOneInlineInput = {
  /** Create and connect one FaqDetailParent document */
  create?: InputMaybe<FaqDetailParentCreateInput>;
};

export type FaqDetailParentCreateWithPositionInput = {
  Faq?: InputMaybe<FaqCreateWithPositionInput>;
};

export type FaqDetailParentUpdateInput = {
  Faq?: InputMaybe<FaqUpdateInput>;
};

export type FaqDetailParentUpdateManyInlineInput = {
  /** Create and connect multiple FaqDetailParent component instances */
  create?: InputMaybe<Array<FaqDetailParentCreateWithPositionInput>>;
  /** Delete multiple FaqDetailParent documents */
  delete?: InputMaybe<Array<FaqDetailParentWhereUniqueInput>>;
  /** Update multiple FaqDetailParent component instances */
  update?: InputMaybe<Array<FaqDetailParentUpdateWithNestedWhereUniqueAndPositionInput>>;
  /** Upsert multiple FaqDetailParent component instances */
  upsert?: InputMaybe<Array<FaqDetailParentUpsertWithNestedWhereUniqueAndPositionInput>>;
};

export type FaqDetailParentUpdateManyWithNestedWhereInput = {
  Faq?: InputMaybe<FaqUpdateManyWithNestedWhereInput>;
};

export type FaqDetailParentUpdateOneInlineInput = {
  /** Create and connect one FaqDetailParent document */
  create?: InputMaybe<FaqDetailParentCreateInput>;
  /** Delete currently connected FaqDetailParent document */
  delete?: InputMaybe<Scalars['Boolean']['input']>;
  /** Update single FaqDetailParent document */
  update?: InputMaybe<FaqDetailParentUpdateWithNestedWhereUniqueInput>;
  /** Upsert single FaqDetailParent document */
  upsert?: InputMaybe<FaqDetailParentUpsertWithNestedWhereUniqueInput>;
};

export type FaqDetailParentUpdateWithNestedWhereUniqueAndPositionInput = {
  Faq?: InputMaybe<FaqUpdateWithNestedWhereUniqueAndPositionInput>;
};

export type FaqDetailParentUpdateWithNestedWhereUniqueInput = {
  Faq?: InputMaybe<FaqUpdateWithNestedWhereUniqueInput>;
};

export type FaqDetailParentUpsertWithNestedWhereUniqueAndPositionInput = {
  Faq?: InputMaybe<FaqUpsertWithNestedWhereUniqueAndPositionInput>;
};

export type FaqDetailParentUpsertWithNestedWhereUniqueInput = {
  Faq?: InputMaybe<FaqUpsertWithNestedWhereUniqueInput>;
};

export type FaqDetailParentWhereInput = {
  Faq?: InputMaybe<FaqWhereInput>;
};

export type FaqDetailParentWhereUniqueInput = {
  Faq?: InputMaybe<FaqWhereUniqueInput>;
};

export type FaqDetailUpdateInput = {
  /** description input for default locale (en) */
  description?: InputMaybe<Scalars['RichTextAST']['input']>;
  /** Manage document localizations */
  localizations?: InputMaybe<FaqDetailUpdateLocalizationsInput>;
  /** question input for default locale (en) */
  question?: InputMaybe<Scalars['String']['input']>;
};

export type FaqDetailUpdateLocalizationDataInput = {
  description?: InputMaybe<Scalars['RichTextAST']['input']>;
  question?: InputMaybe<Scalars['String']['input']>;
};

export type FaqDetailUpdateLocalizationInput = {
  data: FaqDetailUpdateLocalizationDataInput;
  locale: Locale;
};

export type FaqDetailUpdateLocalizationsInput = {
  /** Localizations to create */
  create?: InputMaybe<Array<FaqDetailCreateLocalizationInput>>;
  /** Localizations to delete */
  delete?: InputMaybe<Array<Locale>>;
  /** Localizations to update */
  update?: InputMaybe<Array<FaqDetailUpdateLocalizationInput>>;
  upsert?: InputMaybe<Array<FaqDetailUpsertLocalizationInput>>;
};

export type FaqDetailUpdateManyInlineInput = {
  /** Create and connect multiple FaqDetail component instances */
  create?: InputMaybe<Array<FaqDetailCreateWithPositionInput>>;
  /** Delete multiple FaqDetail documents */
  delete?: InputMaybe<Array<FaqDetailWhereUniqueInput>>;
  /** Update multiple FaqDetail component instances */
  update?: InputMaybe<Array<FaqDetailUpdateWithNestedWhereUniqueAndPositionInput>>;
  /** Upsert multiple FaqDetail component instances */
  upsert?: InputMaybe<Array<FaqDetailUpsertWithNestedWhereUniqueAndPositionInput>>;
};

export type FaqDetailUpdateManyInput = {
  /** description input for default locale (en) */
  description?: InputMaybe<Scalars['RichTextAST']['input']>;
  /** Optional updates to localizations */
  localizations?: InputMaybe<FaqDetailUpdateManyLocalizationsInput>;
  /** question input for default locale (en) */
  question?: InputMaybe<Scalars['String']['input']>;
};

export type FaqDetailUpdateManyLocalizationDataInput = {
  description?: InputMaybe<Scalars['RichTextAST']['input']>;
  question?: InputMaybe<Scalars['String']['input']>;
};

export type FaqDetailUpdateManyLocalizationInput = {
  data: FaqDetailUpdateManyLocalizationDataInput;
  locale: Locale;
};

export type FaqDetailUpdateManyLocalizationsInput = {
  /** Localizations to update */
  update?: InputMaybe<Array<FaqDetailUpdateManyLocalizationInput>>;
};

export type FaqDetailUpdateManyWithNestedWhereInput = {
  /** Update many input */
  data: FaqDetailUpdateManyInput;
  /** Document search */
  where: FaqDetailWhereInput;
};

export type FaqDetailUpdateOneInlineInput = {
  /** Create and connect one FaqDetail document */
  create?: InputMaybe<FaqDetailCreateInput>;
  /** Delete currently connected FaqDetail document */
  delete?: InputMaybe<Scalars['Boolean']['input']>;
  /** Update single FaqDetail document */
  update?: InputMaybe<FaqDetailUpdateWithNestedWhereUniqueInput>;
  /** Upsert single FaqDetail document */
  upsert?: InputMaybe<FaqDetailUpsertWithNestedWhereUniqueInput>;
};

export type FaqDetailUpdateWithNestedWhereUniqueAndPositionInput = {
  /** Document to update */
  data?: InputMaybe<FaqDetailUpdateInput>;
  /** Position in the list of existing component instances, will default to appending at the end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Unique component instance search */
  where: FaqDetailWhereUniqueInput;
};

export type FaqDetailUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: FaqDetailUpdateInput;
  /** Unique document search */
  where: FaqDetailWhereUniqueInput;
};

export type FaqDetailUpsertInput = {
  /** Create document if it didn't exist */
  create: FaqDetailCreateInput;
  /** Update document if it exists */
  update: FaqDetailUpdateInput;
};

export type FaqDetailUpsertLocalizationInput = {
  create: FaqDetailCreateLocalizationDataInput;
  locale: Locale;
  update: FaqDetailUpdateLocalizationDataInput;
};

export type FaqDetailUpsertWithNestedWhereUniqueAndPositionInput = {
  /** Document to upsert */
  data?: InputMaybe<FaqDetailUpsertInput>;
  /** Position in the list of existing component instances, will default to appending at the end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Unique component instance search */
  where: FaqDetailWhereUniqueInput;
};

export type FaqDetailUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: FaqDetailUpsertInput;
  /** Unique document search */
  where: FaqDetailWhereUniqueInput;
};

/** Identifies documents */
export type FaqDetailWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<FaqDetailWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<FaqDetailWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<FaqDetailWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']['input']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']['input']>;
  question?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  question_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  question_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  question_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  question_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  question_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  question_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  question_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  question_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  question_starts_with?: InputMaybe<Scalars['String']['input']>;
};

/** References FaqDetail record uniquely */
export type FaqDetailWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']['input']>;
};

/** An edge in a connection. */
export type FaqEdge = {
  __typename?: 'FaqEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: Faq;
};

/** Identifies documents */
export type FaqManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<FaqWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<FaqWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<FaqWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']['input']>;
  faqDetails_every?: InputMaybe<FaqDetailWhereInput>;
  faqDetails_none?: InputMaybe<FaqDetailWhereInput>;
  faqDetails_some?: InputMaybe<FaqDetailWhereInput>;
  id?: InputMaybe<Scalars['ID']['input']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']['input']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']['input']>;
};

export enum FaqOrderByInput {
  FaqTitleAsc = 'faqTitle_ASC',
  FaqTitleDesc = 'faqTitle_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC'
}

export type FaqParent = NewLandingPage;

export type FaqParentConnectInput = {
  NewLandingPage?: InputMaybe<NewLandingPageConnectInput>;
};

export type FaqParentCreateInput = {
  NewLandingPage?: InputMaybe<NewLandingPageCreateInput>;
};

export type FaqParentCreateManyInlineInput = {
  /** Connect multiple existing FaqParent documents */
  connect?: InputMaybe<Array<FaqParentWhereUniqueInput>>;
  /** Create and connect multiple existing FaqParent documents */
  create?: InputMaybe<Array<FaqParentCreateInput>>;
};

export type FaqParentCreateOneInlineInput = {
  /** Connect one existing FaqParent document */
  connect?: InputMaybe<FaqParentWhereUniqueInput>;
  /** Create and connect one FaqParent document */
  create?: InputMaybe<FaqParentCreateInput>;
};

export type FaqParentUpdateInput = {
  NewLandingPage?: InputMaybe<NewLandingPageUpdateInput>;
};

export type FaqParentUpdateManyInlineInput = {
  /** Connect multiple existing FaqParent documents */
  connect?: InputMaybe<Array<FaqParentConnectInput>>;
  /** Create and connect multiple FaqParent documents */
  create?: InputMaybe<Array<FaqParentCreateInput>>;
  /** Delete multiple FaqParent documents */
  delete?: InputMaybe<Array<FaqParentWhereUniqueInput>>;
  /** Disconnect multiple FaqParent documents */
  disconnect?: InputMaybe<Array<FaqParentWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing FaqParent documents */
  set?: InputMaybe<Array<FaqParentWhereUniqueInput>>;
  /** Update multiple FaqParent documents */
  update?: InputMaybe<Array<FaqParentUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple FaqParent documents */
  upsert?: InputMaybe<Array<FaqParentUpsertWithNestedWhereUniqueInput>>;
};

export type FaqParentUpdateManyWithNestedWhereInput = {
  NewLandingPage?: InputMaybe<NewLandingPageUpdateManyWithNestedWhereInput>;
};

export type FaqParentUpdateOneInlineInput = {
  /** Connect existing FaqParent document */
  connect?: InputMaybe<FaqParentWhereUniqueInput>;
  /** Create and connect one FaqParent document */
  create?: InputMaybe<FaqParentCreateInput>;
  /** Delete currently connected FaqParent document */
  delete?: InputMaybe<Scalars['Boolean']['input']>;
  /** Disconnect currently connected FaqParent document */
  disconnect?: InputMaybe<Scalars['Boolean']['input']>;
  /** Update single FaqParent document */
  update?: InputMaybe<FaqParentUpdateWithNestedWhereUniqueInput>;
  /** Upsert single FaqParent document */
  upsert?: InputMaybe<FaqParentUpsertWithNestedWhereUniqueInput>;
};

export type FaqParentUpdateWithNestedWhereUniqueInput = {
  NewLandingPage?: InputMaybe<NewLandingPageUpdateWithNestedWhereUniqueInput>;
};

export type FaqParentUpsertWithNestedWhereUniqueInput = {
  NewLandingPage?: InputMaybe<NewLandingPageUpsertWithNestedWhereUniqueInput>;
};

export type FaqParentWhereInput = {
  NewLandingPage?: InputMaybe<NewLandingPageWhereInput>;
};

export type FaqParentWhereUniqueInput = {
  NewLandingPage?: InputMaybe<NewLandingPageWhereUniqueInput>;
};

export type FaqUpdateInput = {
  faqDetails?: InputMaybe<FaqDetailUpdateManyInlineInput>;
  /** faqTitle input for default locale (en) */
  faqTitle?: InputMaybe<Scalars['String']['input']>;
  /** Manage document localizations */
  localizations?: InputMaybe<FaqUpdateLocalizationsInput>;
};

export type FaqUpdateLocalizationDataInput = {
  faqTitle?: InputMaybe<Scalars['String']['input']>;
};

export type FaqUpdateLocalizationInput = {
  data: FaqUpdateLocalizationDataInput;
  locale: Locale;
};

export type FaqUpdateLocalizationsInput = {
  /** Localizations to create */
  create?: InputMaybe<Array<FaqCreateLocalizationInput>>;
  /** Localizations to delete */
  delete?: InputMaybe<Array<Locale>>;
  /** Localizations to update */
  update?: InputMaybe<Array<FaqUpdateLocalizationInput>>;
  upsert?: InputMaybe<Array<FaqUpsertLocalizationInput>>;
};

export type FaqUpdateManyInlineInput = {
  /** Create and connect multiple Faq component instances */
  create?: InputMaybe<Array<FaqCreateWithPositionInput>>;
  /** Delete multiple Faq documents */
  delete?: InputMaybe<Array<FaqWhereUniqueInput>>;
  /** Update multiple Faq component instances */
  update?: InputMaybe<Array<FaqUpdateWithNestedWhereUniqueAndPositionInput>>;
  /** Upsert multiple Faq component instances */
  upsert?: InputMaybe<Array<FaqUpsertWithNestedWhereUniqueAndPositionInput>>;
};

export type FaqUpdateManyInput = {
  /** faqTitle input for default locale (en) */
  faqTitle?: InputMaybe<Scalars['String']['input']>;
  /** Optional updates to localizations */
  localizations?: InputMaybe<FaqUpdateManyLocalizationsInput>;
};

export type FaqUpdateManyLocalizationDataInput = {
  faqTitle?: InputMaybe<Scalars['String']['input']>;
};

export type FaqUpdateManyLocalizationInput = {
  data: FaqUpdateManyLocalizationDataInput;
  locale: Locale;
};

export type FaqUpdateManyLocalizationsInput = {
  /** Localizations to update */
  update?: InputMaybe<Array<FaqUpdateManyLocalizationInput>>;
};

export type FaqUpdateManyWithNestedWhereInput = {
  /** Update many input */
  data: FaqUpdateManyInput;
  /** Document search */
  where: FaqWhereInput;
};

export type FaqUpdateOneInlineInput = {
  /** Create and connect one Faq document */
  create?: InputMaybe<FaqCreateInput>;
  /** Delete currently connected Faq document */
  delete?: InputMaybe<Scalars['Boolean']['input']>;
  /** Update single Faq document */
  update?: InputMaybe<FaqUpdateWithNestedWhereUniqueInput>;
  /** Upsert single Faq document */
  upsert?: InputMaybe<FaqUpsertWithNestedWhereUniqueInput>;
};

export type FaqUpdateWithNestedWhereUniqueAndPositionInput = {
  /** Document to update */
  data?: InputMaybe<FaqUpdateInput>;
  /** Position in the list of existing component instances, will default to appending at the end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Unique component instance search */
  where: FaqWhereUniqueInput;
};

export type FaqUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: FaqUpdateInput;
  /** Unique document search */
  where: FaqWhereUniqueInput;
};

export type FaqUpsertInput = {
  /** Create document if it didn't exist */
  create: FaqCreateInput;
  /** Update document if it exists */
  update: FaqUpdateInput;
};

export type FaqUpsertLocalizationInput = {
  create: FaqCreateLocalizationDataInput;
  locale: Locale;
  update: FaqUpdateLocalizationDataInput;
};

export type FaqUpsertWithNestedWhereUniqueAndPositionInput = {
  /** Document to upsert */
  data?: InputMaybe<FaqUpsertInput>;
  /** Position in the list of existing component instances, will default to appending at the end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Unique component instance search */
  where: FaqWhereUniqueInput;
};

export type FaqUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: FaqUpsertInput;
  /** Unique document search */
  where: FaqWhereUniqueInput;
};

/** Identifies documents */
export type FaqWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<FaqWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<FaqWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<FaqWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']['input']>;
  faqDetails_every?: InputMaybe<FaqDetailWhereInput>;
  faqDetails_none?: InputMaybe<FaqDetailWhereInput>;
  faqDetails_some?: InputMaybe<FaqDetailWhereInput>;
  faqTitle?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  faqTitle_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  faqTitle_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  faqTitle_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  faqTitle_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  faqTitle_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  faqTitle_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  faqTitle_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  faqTitle_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  faqTitle_starts_with?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']['input']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']['input']>;
};

/** References Faq record uniquely */
export type FaqWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']['input']>;
};

export type HomeFeaturePoint = Entity & {
  __typename?: 'HomeFeaturePoint';
  featuresPoint?: Maybe<Scalars['String']['output']>;
  /** The unique identifier */
  id: Scalars['ID']['output'];
  /** System Locale field */
  locale: Locale;
  /** Get the other localizations for this document */
  localizations: Array<HomeFeaturePoint>;
  /** System stage field */
  stage: Stage;
};


export type HomeFeaturePointLocalizationsArgs = {
  includeCurrent?: Scalars['Boolean']['input'];
  locales?: Array<Locale>;
};

export type HomeFeaturePointConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Document to connect */
  where: HomeFeaturePointWhereUniqueInput;
};

/** A connection to a list of items. */
export type HomeFeaturePointConnection = {
  __typename?: 'HomeFeaturePointConnection';
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<HomeFeaturePointEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type HomeFeaturePointCreateInput = {
  /** featuresPoint input for default locale (en) */
  featuresPoint?: InputMaybe<Scalars['String']['input']>;
  /** Inline mutations for managing document localizations excluding the default locale */
  localizations?: InputMaybe<HomeFeaturePointCreateLocalizationsInput>;
};

export type HomeFeaturePointCreateLocalizationDataInput = {
  featuresPoint?: InputMaybe<Scalars['String']['input']>;
};

export type HomeFeaturePointCreateLocalizationInput = {
  /** Localization input */
  data: HomeFeaturePointCreateLocalizationDataInput;
  locale: Locale;
};

export type HomeFeaturePointCreateLocalizationsInput = {
  /** Create localizations for the newly-created document */
  create?: InputMaybe<Array<HomeFeaturePointCreateLocalizationInput>>;
};

export type HomeFeaturePointCreateManyInlineInput = {
  /** Create and connect multiple existing HomeFeaturePoint documents */
  create?: InputMaybe<Array<HomeFeaturePointCreateInput>>;
};

export type HomeFeaturePointCreateOneInlineInput = {
  /** Create and connect one HomeFeaturePoint document */
  create?: InputMaybe<HomeFeaturePointCreateInput>;
};

export type HomeFeaturePointCreateWithPositionInput = {
  /** Document to create */
  data: HomeFeaturePointCreateInput;
  /** Position in the list of existing component instances, will default to appending at the end of list */
  position?: InputMaybe<ConnectPositionInput>;
};

/** An edge in a connection. */
export type HomeFeaturePointEdge = {
  __typename?: 'HomeFeaturePointEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: HomeFeaturePoint;
};

/** Identifies documents */
export type HomeFeaturePointManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<HomeFeaturePointWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<HomeFeaturePointWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<HomeFeaturePointWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']['input']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']['input']>;
};

export enum HomeFeaturePointOrderByInput {
  FeaturesPointAsc = 'featuresPoint_ASC',
  FeaturesPointDesc = 'featuresPoint_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC'
}

export type HomeFeaturePointParent = NewLandingPage;

export type HomeFeaturePointParentConnectInput = {
  NewLandingPage?: InputMaybe<NewLandingPageConnectInput>;
};

export type HomeFeaturePointParentCreateInput = {
  NewLandingPage?: InputMaybe<NewLandingPageCreateInput>;
};

export type HomeFeaturePointParentCreateManyInlineInput = {
  /** Connect multiple existing HomeFeaturePointParent documents */
  connect?: InputMaybe<Array<HomeFeaturePointParentWhereUniqueInput>>;
  /** Create and connect multiple existing HomeFeaturePointParent documents */
  create?: InputMaybe<Array<HomeFeaturePointParentCreateInput>>;
};

export type HomeFeaturePointParentCreateOneInlineInput = {
  /** Connect one existing HomeFeaturePointParent document */
  connect?: InputMaybe<HomeFeaturePointParentWhereUniqueInput>;
  /** Create and connect one HomeFeaturePointParent document */
  create?: InputMaybe<HomeFeaturePointParentCreateInput>;
};

export type HomeFeaturePointParentUpdateInput = {
  NewLandingPage?: InputMaybe<NewLandingPageUpdateInput>;
};

export type HomeFeaturePointParentUpdateManyInlineInput = {
  /** Connect multiple existing HomeFeaturePointParent documents */
  connect?: InputMaybe<Array<HomeFeaturePointParentConnectInput>>;
  /** Create and connect multiple HomeFeaturePointParent documents */
  create?: InputMaybe<Array<HomeFeaturePointParentCreateInput>>;
  /** Delete multiple HomeFeaturePointParent documents */
  delete?: InputMaybe<Array<HomeFeaturePointParentWhereUniqueInput>>;
  /** Disconnect multiple HomeFeaturePointParent documents */
  disconnect?: InputMaybe<Array<HomeFeaturePointParentWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing HomeFeaturePointParent documents */
  set?: InputMaybe<Array<HomeFeaturePointParentWhereUniqueInput>>;
  /** Update multiple HomeFeaturePointParent documents */
  update?: InputMaybe<Array<HomeFeaturePointParentUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple HomeFeaturePointParent documents */
  upsert?: InputMaybe<Array<HomeFeaturePointParentUpsertWithNestedWhereUniqueInput>>;
};

export type HomeFeaturePointParentUpdateManyWithNestedWhereInput = {
  NewLandingPage?: InputMaybe<NewLandingPageUpdateManyWithNestedWhereInput>;
};

export type HomeFeaturePointParentUpdateOneInlineInput = {
  /** Connect existing HomeFeaturePointParent document */
  connect?: InputMaybe<HomeFeaturePointParentWhereUniqueInput>;
  /** Create and connect one HomeFeaturePointParent document */
  create?: InputMaybe<HomeFeaturePointParentCreateInput>;
  /** Delete currently connected HomeFeaturePointParent document */
  delete?: InputMaybe<Scalars['Boolean']['input']>;
  /** Disconnect currently connected HomeFeaturePointParent document */
  disconnect?: InputMaybe<Scalars['Boolean']['input']>;
  /** Update single HomeFeaturePointParent document */
  update?: InputMaybe<HomeFeaturePointParentUpdateWithNestedWhereUniqueInput>;
  /** Upsert single HomeFeaturePointParent document */
  upsert?: InputMaybe<HomeFeaturePointParentUpsertWithNestedWhereUniqueInput>;
};

export type HomeFeaturePointParentUpdateWithNestedWhereUniqueInput = {
  NewLandingPage?: InputMaybe<NewLandingPageUpdateWithNestedWhereUniqueInput>;
};

export type HomeFeaturePointParentUpsertWithNestedWhereUniqueInput = {
  NewLandingPage?: InputMaybe<NewLandingPageUpsertWithNestedWhereUniqueInput>;
};

export type HomeFeaturePointParentWhereInput = {
  NewLandingPage?: InputMaybe<NewLandingPageWhereInput>;
};

export type HomeFeaturePointParentWhereUniqueInput = {
  NewLandingPage?: InputMaybe<NewLandingPageWhereUniqueInput>;
};

export type HomeFeaturePointUpdateInput = {
  /** featuresPoint input for default locale (en) */
  featuresPoint?: InputMaybe<Scalars['String']['input']>;
  /** Manage document localizations */
  localizations?: InputMaybe<HomeFeaturePointUpdateLocalizationsInput>;
};

export type HomeFeaturePointUpdateLocalizationDataInput = {
  featuresPoint?: InputMaybe<Scalars['String']['input']>;
};

export type HomeFeaturePointUpdateLocalizationInput = {
  data: HomeFeaturePointUpdateLocalizationDataInput;
  locale: Locale;
};

export type HomeFeaturePointUpdateLocalizationsInput = {
  /** Localizations to create */
  create?: InputMaybe<Array<HomeFeaturePointCreateLocalizationInput>>;
  /** Localizations to delete */
  delete?: InputMaybe<Array<Locale>>;
  /** Localizations to update */
  update?: InputMaybe<Array<HomeFeaturePointUpdateLocalizationInput>>;
  upsert?: InputMaybe<Array<HomeFeaturePointUpsertLocalizationInput>>;
};

export type HomeFeaturePointUpdateManyInlineInput = {
  /** Create and connect multiple HomeFeaturePoint component instances */
  create?: InputMaybe<Array<HomeFeaturePointCreateWithPositionInput>>;
  /** Delete multiple HomeFeaturePoint documents */
  delete?: InputMaybe<Array<HomeFeaturePointWhereUniqueInput>>;
  /** Update multiple HomeFeaturePoint component instances */
  update?: InputMaybe<Array<HomeFeaturePointUpdateWithNestedWhereUniqueAndPositionInput>>;
  /** Upsert multiple HomeFeaturePoint component instances */
  upsert?: InputMaybe<Array<HomeFeaturePointUpsertWithNestedWhereUniqueAndPositionInput>>;
};

export type HomeFeaturePointUpdateManyInput = {
  /** featuresPoint input for default locale (en) */
  featuresPoint?: InputMaybe<Scalars['String']['input']>;
  /** Optional updates to localizations */
  localizations?: InputMaybe<HomeFeaturePointUpdateManyLocalizationsInput>;
};

export type HomeFeaturePointUpdateManyLocalizationDataInput = {
  featuresPoint?: InputMaybe<Scalars['String']['input']>;
};

export type HomeFeaturePointUpdateManyLocalizationInput = {
  data: HomeFeaturePointUpdateManyLocalizationDataInput;
  locale: Locale;
};

export type HomeFeaturePointUpdateManyLocalizationsInput = {
  /** Localizations to update */
  update?: InputMaybe<Array<HomeFeaturePointUpdateManyLocalizationInput>>;
};

export type HomeFeaturePointUpdateManyWithNestedWhereInput = {
  /** Update many input */
  data: HomeFeaturePointUpdateManyInput;
  /** Document search */
  where: HomeFeaturePointWhereInput;
};

export type HomeFeaturePointUpdateOneInlineInput = {
  /** Create and connect one HomeFeaturePoint document */
  create?: InputMaybe<HomeFeaturePointCreateInput>;
  /** Delete currently connected HomeFeaturePoint document */
  delete?: InputMaybe<Scalars['Boolean']['input']>;
  /** Update single HomeFeaturePoint document */
  update?: InputMaybe<HomeFeaturePointUpdateWithNestedWhereUniqueInput>;
  /** Upsert single HomeFeaturePoint document */
  upsert?: InputMaybe<HomeFeaturePointUpsertWithNestedWhereUniqueInput>;
};

export type HomeFeaturePointUpdateWithNestedWhereUniqueAndPositionInput = {
  /** Document to update */
  data?: InputMaybe<HomeFeaturePointUpdateInput>;
  /** Position in the list of existing component instances, will default to appending at the end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Unique component instance search */
  where: HomeFeaturePointWhereUniqueInput;
};

export type HomeFeaturePointUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: HomeFeaturePointUpdateInput;
  /** Unique document search */
  where: HomeFeaturePointWhereUniqueInput;
};

export type HomeFeaturePointUpsertInput = {
  /** Create document if it didn't exist */
  create: HomeFeaturePointCreateInput;
  /** Update document if it exists */
  update: HomeFeaturePointUpdateInput;
};

export type HomeFeaturePointUpsertLocalizationInput = {
  create: HomeFeaturePointCreateLocalizationDataInput;
  locale: Locale;
  update: HomeFeaturePointUpdateLocalizationDataInput;
};

export type HomeFeaturePointUpsertWithNestedWhereUniqueAndPositionInput = {
  /** Document to upsert */
  data?: InputMaybe<HomeFeaturePointUpsertInput>;
  /** Position in the list of existing component instances, will default to appending at the end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Unique component instance search */
  where: HomeFeaturePointWhereUniqueInput;
};

export type HomeFeaturePointUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: HomeFeaturePointUpsertInput;
  /** Unique document search */
  where: HomeFeaturePointWhereUniqueInput;
};

/** Identifies documents */
export type HomeFeaturePointWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<HomeFeaturePointWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<HomeFeaturePointWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<HomeFeaturePointWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']['input']>;
  featuresPoint?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  featuresPoint_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  featuresPoint_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  featuresPoint_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  featuresPoint_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  featuresPoint_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  featuresPoint_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  featuresPoint_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  featuresPoint_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  featuresPoint_starts_with?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']['input']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']['input']>;
};

/** References HomeFeaturePoint record uniquely */
export type HomeFeaturePointWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']['input']>;
};

export type HowItsWorkDetail = Entity & {
  __typename?: 'HowItsWorkDetail';
  description?: Maybe<RichText>;
  /** The unique identifier */
  id: Scalars['ID']['output'];
  /** System Locale field */
  locale: Locale;
  /** Get the other localizations for this document */
  localizations: Array<HowItsWorkDetail>;
  /** System stage field */
  stage: Stage;
  title?: Maybe<Scalars['String']['output']>;
};


export type HowItsWorkDetailLocalizationsArgs = {
  includeCurrent?: Scalars['Boolean']['input'];
  locales?: Array<Locale>;
};

export type HowItsWorkDetailConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Document to connect */
  where: HowItsWorkDetailWhereUniqueInput;
};

/** A connection to a list of items. */
export type HowItsWorkDetailConnection = {
  __typename?: 'HowItsWorkDetailConnection';
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<HowItsWorkDetailEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type HowItsWorkDetailCreateInput = {
  /** description input for default locale (en) */
  description?: InputMaybe<Scalars['RichTextAST']['input']>;
  /** Inline mutations for managing document localizations excluding the default locale */
  localizations?: InputMaybe<HowItsWorkDetailCreateLocalizationsInput>;
  /** title input for default locale (en) */
  title?: InputMaybe<Scalars['String']['input']>;
};

export type HowItsWorkDetailCreateLocalizationDataInput = {
  description?: InputMaybe<Scalars['RichTextAST']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type HowItsWorkDetailCreateLocalizationInput = {
  /** Localization input */
  data: HowItsWorkDetailCreateLocalizationDataInput;
  locale: Locale;
};

export type HowItsWorkDetailCreateLocalizationsInput = {
  /** Create localizations for the newly-created document */
  create?: InputMaybe<Array<HowItsWorkDetailCreateLocalizationInput>>;
};

export type HowItsWorkDetailCreateManyInlineInput = {
  /** Create and connect multiple existing HowItsWorkDetail documents */
  create?: InputMaybe<Array<HowItsWorkDetailCreateInput>>;
};

export type HowItsWorkDetailCreateOneInlineInput = {
  /** Create and connect one HowItsWorkDetail document */
  create?: InputMaybe<HowItsWorkDetailCreateInput>;
};

export type HowItsWorkDetailCreateWithPositionInput = {
  /** Document to create */
  data: HowItsWorkDetailCreateInput;
  /** Position in the list of existing component instances, will default to appending at the end of list */
  position?: InputMaybe<ConnectPositionInput>;
};

/** An edge in a connection. */
export type HowItsWorkDetailEdge = {
  __typename?: 'HowItsWorkDetailEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: HowItsWorkDetail;
};

/** Identifies documents */
export type HowItsWorkDetailManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<HowItsWorkDetailWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<HowItsWorkDetailWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<HowItsWorkDetailWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']['input']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']['input']>;
};

export enum HowItsWorkDetailOrderByInput {
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC'
}

export type HowItsWorkDetailParent = NewLandingPage;

export type HowItsWorkDetailParentConnectInput = {
  NewLandingPage?: InputMaybe<NewLandingPageConnectInput>;
};

export type HowItsWorkDetailParentCreateInput = {
  NewLandingPage?: InputMaybe<NewLandingPageCreateInput>;
};

export type HowItsWorkDetailParentCreateManyInlineInput = {
  /** Connect multiple existing HowItsWorkDetailParent documents */
  connect?: InputMaybe<Array<HowItsWorkDetailParentWhereUniqueInput>>;
  /** Create and connect multiple existing HowItsWorkDetailParent documents */
  create?: InputMaybe<Array<HowItsWorkDetailParentCreateInput>>;
};

export type HowItsWorkDetailParentCreateOneInlineInput = {
  /** Connect one existing HowItsWorkDetailParent document */
  connect?: InputMaybe<HowItsWorkDetailParentWhereUniqueInput>;
  /** Create and connect one HowItsWorkDetailParent document */
  create?: InputMaybe<HowItsWorkDetailParentCreateInput>;
};

export type HowItsWorkDetailParentUpdateInput = {
  NewLandingPage?: InputMaybe<NewLandingPageUpdateInput>;
};

export type HowItsWorkDetailParentUpdateManyInlineInput = {
  /** Connect multiple existing HowItsWorkDetailParent documents */
  connect?: InputMaybe<Array<HowItsWorkDetailParentConnectInput>>;
  /** Create and connect multiple HowItsWorkDetailParent documents */
  create?: InputMaybe<Array<HowItsWorkDetailParentCreateInput>>;
  /** Delete multiple HowItsWorkDetailParent documents */
  delete?: InputMaybe<Array<HowItsWorkDetailParentWhereUniqueInput>>;
  /** Disconnect multiple HowItsWorkDetailParent documents */
  disconnect?: InputMaybe<Array<HowItsWorkDetailParentWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing HowItsWorkDetailParent documents */
  set?: InputMaybe<Array<HowItsWorkDetailParentWhereUniqueInput>>;
  /** Update multiple HowItsWorkDetailParent documents */
  update?: InputMaybe<Array<HowItsWorkDetailParentUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple HowItsWorkDetailParent documents */
  upsert?: InputMaybe<Array<HowItsWorkDetailParentUpsertWithNestedWhereUniqueInput>>;
};

export type HowItsWorkDetailParentUpdateManyWithNestedWhereInput = {
  NewLandingPage?: InputMaybe<NewLandingPageUpdateManyWithNestedWhereInput>;
};

export type HowItsWorkDetailParentUpdateOneInlineInput = {
  /** Connect existing HowItsWorkDetailParent document */
  connect?: InputMaybe<HowItsWorkDetailParentWhereUniqueInput>;
  /** Create and connect one HowItsWorkDetailParent document */
  create?: InputMaybe<HowItsWorkDetailParentCreateInput>;
  /** Delete currently connected HowItsWorkDetailParent document */
  delete?: InputMaybe<Scalars['Boolean']['input']>;
  /** Disconnect currently connected HowItsWorkDetailParent document */
  disconnect?: InputMaybe<Scalars['Boolean']['input']>;
  /** Update single HowItsWorkDetailParent document */
  update?: InputMaybe<HowItsWorkDetailParentUpdateWithNestedWhereUniqueInput>;
  /** Upsert single HowItsWorkDetailParent document */
  upsert?: InputMaybe<HowItsWorkDetailParentUpsertWithNestedWhereUniqueInput>;
};

export type HowItsWorkDetailParentUpdateWithNestedWhereUniqueInput = {
  NewLandingPage?: InputMaybe<NewLandingPageUpdateWithNestedWhereUniqueInput>;
};

export type HowItsWorkDetailParentUpsertWithNestedWhereUniqueInput = {
  NewLandingPage?: InputMaybe<NewLandingPageUpsertWithNestedWhereUniqueInput>;
};

export type HowItsWorkDetailParentWhereInput = {
  NewLandingPage?: InputMaybe<NewLandingPageWhereInput>;
};

export type HowItsWorkDetailParentWhereUniqueInput = {
  NewLandingPage?: InputMaybe<NewLandingPageWhereUniqueInput>;
};

export type HowItsWorkDetailUpdateInput = {
  /** description input for default locale (en) */
  description?: InputMaybe<Scalars['RichTextAST']['input']>;
  /** Manage document localizations */
  localizations?: InputMaybe<HowItsWorkDetailUpdateLocalizationsInput>;
  /** title input for default locale (en) */
  title?: InputMaybe<Scalars['String']['input']>;
};

export type HowItsWorkDetailUpdateLocalizationDataInput = {
  description?: InputMaybe<Scalars['RichTextAST']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type HowItsWorkDetailUpdateLocalizationInput = {
  data: HowItsWorkDetailUpdateLocalizationDataInput;
  locale: Locale;
};

export type HowItsWorkDetailUpdateLocalizationsInput = {
  /** Localizations to create */
  create?: InputMaybe<Array<HowItsWorkDetailCreateLocalizationInput>>;
  /** Localizations to delete */
  delete?: InputMaybe<Array<Locale>>;
  /** Localizations to update */
  update?: InputMaybe<Array<HowItsWorkDetailUpdateLocalizationInput>>;
  upsert?: InputMaybe<Array<HowItsWorkDetailUpsertLocalizationInput>>;
};

export type HowItsWorkDetailUpdateManyInlineInput = {
  /** Create and connect multiple HowItsWorkDetail component instances */
  create?: InputMaybe<Array<HowItsWorkDetailCreateWithPositionInput>>;
  /** Delete multiple HowItsWorkDetail documents */
  delete?: InputMaybe<Array<HowItsWorkDetailWhereUniqueInput>>;
  /** Update multiple HowItsWorkDetail component instances */
  update?: InputMaybe<Array<HowItsWorkDetailUpdateWithNestedWhereUniqueAndPositionInput>>;
  /** Upsert multiple HowItsWorkDetail component instances */
  upsert?: InputMaybe<Array<HowItsWorkDetailUpsertWithNestedWhereUniqueAndPositionInput>>;
};

export type HowItsWorkDetailUpdateManyInput = {
  /** description input for default locale (en) */
  description?: InputMaybe<Scalars['RichTextAST']['input']>;
  /** Optional updates to localizations */
  localizations?: InputMaybe<HowItsWorkDetailUpdateManyLocalizationsInput>;
  /** title input for default locale (en) */
  title?: InputMaybe<Scalars['String']['input']>;
};

export type HowItsWorkDetailUpdateManyLocalizationDataInput = {
  description?: InputMaybe<Scalars['RichTextAST']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type HowItsWorkDetailUpdateManyLocalizationInput = {
  data: HowItsWorkDetailUpdateManyLocalizationDataInput;
  locale: Locale;
};

export type HowItsWorkDetailUpdateManyLocalizationsInput = {
  /** Localizations to update */
  update?: InputMaybe<Array<HowItsWorkDetailUpdateManyLocalizationInput>>;
};

export type HowItsWorkDetailUpdateManyWithNestedWhereInput = {
  /** Update many input */
  data: HowItsWorkDetailUpdateManyInput;
  /** Document search */
  where: HowItsWorkDetailWhereInput;
};

export type HowItsWorkDetailUpdateOneInlineInput = {
  /** Create and connect one HowItsWorkDetail document */
  create?: InputMaybe<HowItsWorkDetailCreateInput>;
  /** Delete currently connected HowItsWorkDetail document */
  delete?: InputMaybe<Scalars['Boolean']['input']>;
  /** Update single HowItsWorkDetail document */
  update?: InputMaybe<HowItsWorkDetailUpdateWithNestedWhereUniqueInput>;
  /** Upsert single HowItsWorkDetail document */
  upsert?: InputMaybe<HowItsWorkDetailUpsertWithNestedWhereUniqueInput>;
};

export type HowItsWorkDetailUpdateWithNestedWhereUniqueAndPositionInput = {
  /** Document to update */
  data?: InputMaybe<HowItsWorkDetailUpdateInput>;
  /** Position in the list of existing component instances, will default to appending at the end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Unique component instance search */
  where: HowItsWorkDetailWhereUniqueInput;
};

export type HowItsWorkDetailUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: HowItsWorkDetailUpdateInput;
  /** Unique document search */
  where: HowItsWorkDetailWhereUniqueInput;
};

export type HowItsWorkDetailUpsertInput = {
  /** Create document if it didn't exist */
  create: HowItsWorkDetailCreateInput;
  /** Update document if it exists */
  update: HowItsWorkDetailUpdateInput;
};

export type HowItsWorkDetailUpsertLocalizationInput = {
  create: HowItsWorkDetailCreateLocalizationDataInput;
  locale: Locale;
  update: HowItsWorkDetailUpdateLocalizationDataInput;
};

export type HowItsWorkDetailUpsertWithNestedWhereUniqueAndPositionInput = {
  /** Document to upsert */
  data?: InputMaybe<HowItsWorkDetailUpsertInput>;
  /** Position in the list of existing component instances, will default to appending at the end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Unique component instance search */
  where: HowItsWorkDetailWhereUniqueInput;
};

export type HowItsWorkDetailUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: HowItsWorkDetailUpsertInput;
  /** Unique document search */
  where: HowItsWorkDetailWhereUniqueInput;
};

/** Identifies documents */
export type HowItsWorkDetailWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<HowItsWorkDetailWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<HowItsWorkDetailWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<HowItsWorkDetailWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']['input']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  title_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  title_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  title_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  title_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  title_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  title_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  title_starts_with?: InputMaybe<Scalars['String']['input']>;
};

/** References HowItsWorkDetail record uniquely */
export type HowItsWorkDetailWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']['input']>;
};

export enum ImageFit {
  /** Resizes the image to fit within the specified parameters without distorting, cropping, or changing the aspect ratio. */
  Clip = 'clip',
  /** Resizes the image to fit the specified parameters exactly by removing any parts of the image that don't fit within the boundaries. */
  Crop = 'crop',
  /** Resizes the image to fit within the parameters, but as opposed to 'fit:clip' will not scale the image if the image is smaller than the output size. */
  Max = 'max',
  /** Resizes the image to fit the specified parameters exactly by scaling the image to the desired size. The aspect ratio of the image is not respected and the image can be distorted using this method. */
  Scale = 'scale'
}

export type ImageResizeInput = {
  /** The default value for the fit parameter is fit:clip. */
  fit?: InputMaybe<ImageFit>;
  /** The height in pixels to resize the image to. The value must be an integer from 1 to 10000. */
  height?: InputMaybe<Scalars['Int']['input']>;
  /** The width in pixels to resize the image to. The value must be an integer from 1 to 10000. */
  width?: InputMaybe<Scalars['Int']['input']>;
};

/** Transformations for Images */
export type ImageTransformationInput = {
  /** Resizes the image */
  resize?: InputMaybe<ImageResizeInput>;
};

export type ImageWithText = Entity & {
  __typename?: 'ImageWithText';
  /** The unique identifier */
  id: Scalars['ID']['output'];
  image?: Maybe<Asset>;
  /** System stage field */
  stage: Stage;
  title?: Maybe<Scalars['String']['output']>;
};


export type ImageWithTextImageArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  locales?: InputMaybe<Array<Locale>>;
};

export type ImageWithTextConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Document to connect */
  where: ImageWithTextWhereUniqueInput;
};

/** A connection to a list of items. */
export type ImageWithTextConnection = {
  __typename?: 'ImageWithTextConnection';
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<ImageWithTextEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type ImageWithTextCreateInput = {
  image?: InputMaybe<AssetCreateOneInlineInput>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type ImageWithTextCreateManyInlineInput = {
  /** Create and connect multiple existing ImageWithText documents */
  create?: InputMaybe<Array<ImageWithTextCreateInput>>;
};

export type ImageWithTextCreateOneInlineInput = {
  /** Create and connect one ImageWithText document */
  create?: InputMaybe<ImageWithTextCreateInput>;
};

export type ImageWithTextCreateWithPositionInput = {
  /** Document to create */
  data: ImageWithTextCreateInput;
  /** Position in the list of existing component instances, will default to appending at the end of list */
  position?: InputMaybe<ConnectPositionInput>;
};

/** An edge in a connection. */
export type ImageWithTextEdge = {
  __typename?: 'ImageWithTextEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: ImageWithText;
};

/** Identifies documents */
export type ImageWithTextManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<ImageWithTextWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<ImageWithTextWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<ImageWithTextWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']['input']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']['input']>;
  image?: InputMaybe<AssetWhereInput>;
  title?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  title_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  title_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  title_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  title_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  title_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  title_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  title_starts_with?: InputMaybe<Scalars['String']['input']>;
};

export enum ImageWithTextOrderByInput {
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC'
}

export type ImageWithTextParent = LandingPage;

export type ImageWithTextParentConnectInput = {
  LandingPage?: InputMaybe<LandingPageConnectInput>;
};

export type ImageWithTextParentCreateInput = {
  LandingPage?: InputMaybe<LandingPageCreateInput>;
};

export type ImageWithTextParentCreateManyInlineInput = {
  /** Connect multiple existing ImageWithTextParent documents */
  connect?: InputMaybe<Array<ImageWithTextParentWhereUniqueInput>>;
  /** Create and connect multiple existing ImageWithTextParent documents */
  create?: InputMaybe<Array<ImageWithTextParentCreateInput>>;
};

export type ImageWithTextParentCreateOneInlineInput = {
  /** Connect one existing ImageWithTextParent document */
  connect?: InputMaybe<ImageWithTextParentWhereUniqueInput>;
  /** Create and connect one ImageWithTextParent document */
  create?: InputMaybe<ImageWithTextParentCreateInput>;
};

export type ImageWithTextParentUpdateInput = {
  LandingPage?: InputMaybe<LandingPageUpdateInput>;
};

export type ImageWithTextParentUpdateManyInlineInput = {
  /** Connect multiple existing ImageWithTextParent documents */
  connect?: InputMaybe<Array<ImageWithTextParentConnectInput>>;
  /** Create and connect multiple ImageWithTextParent documents */
  create?: InputMaybe<Array<ImageWithTextParentCreateInput>>;
  /** Delete multiple ImageWithTextParent documents */
  delete?: InputMaybe<Array<ImageWithTextParentWhereUniqueInput>>;
  /** Disconnect multiple ImageWithTextParent documents */
  disconnect?: InputMaybe<Array<ImageWithTextParentWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing ImageWithTextParent documents */
  set?: InputMaybe<Array<ImageWithTextParentWhereUniqueInput>>;
  /** Update multiple ImageWithTextParent documents */
  update?: InputMaybe<Array<ImageWithTextParentUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple ImageWithTextParent documents */
  upsert?: InputMaybe<Array<ImageWithTextParentUpsertWithNestedWhereUniqueInput>>;
};

export type ImageWithTextParentUpdateManyWithNestedWhereInput = {
  LandingPage?: InputMaybe<LandingPageUpdateManyWithNestedWhereInput>;
};

export type ImageWithTextParentUpdateOneInlineInput = {
  /** Connect existing ImageWithTextParent document */
  connect?: InputMaybe<ImageWithTextParentWhereUniqueInput>;
  /** Create and connect one ImageWithTextParent document */
  create?: InputMaybe<ImageWithTextParentCreateInput>;
  /** Delete currently connected ImageWithTextParent document */
  delete?: InputMaybe<Scalars['Boolean']['input']>;
  /** Disconnect currently connected ImageWithTextParent document */
  disconnect?: InputMaybe<Scalars['Boolean']['input']>;
  /** Update single ImageWithTextParent document */
  update?: InputMaybe<ImageWithTextParentUpdateWithNestedWhereUniqueInput>;
  /** Upsert single ImageWithTextParent document */
  upsert?: InputMaybe<ImageWithTextParentUpsertWithNestedWhereUniqueInput>;
};

export type ImageWithTextParentUpdateWithNestedWhereUniqueInput = {
  LandingPage?: InputMaybe<LandingPageUpdateWithNestedWhereUniqueInput>;
};

export type ImageWithTextParentUpsertWithNestedWhereUniqueInput = {
  LandingPage?: InputMaybe<LandingPageUpsertWithNestedWhereUniqueInput>;
};

export type ImageWithTextParentWhereInput = {
  LandingPage?: InputMaybe<LandingPageWhereInput>;
};

export type ImageWithTextParentWhereUniqueInput = {
  LandingPage?: InputMaybe<LandingPageWhereUniqueInput>;
};

export type ImageWithTextUpdateInput = {
  image?: InputMaybe<AssetUpdateOneInlineInput>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type ImageWithTextUpdateManyInlineInput = {
  /** Create and connect multiple ImageWithText component instances */
  create?: InputMaybe<Array<ImageWithTextCreateWithPositionInput>>;
  /** Delete multiple ImageWithText documents */
  delete?: InputMaybe<Array<ImageWithTextWhereUniqueInput>>;
  /** Update multiple ImageWithText component instances */
  update?: InputMaybe<Array<ImageWithTextUpdateWithNestedWhereUniqueAndPositionInput>>;
  /** Upsert multiple ImageWithText component instances */
  upsert?: InputMaybe<Array<ImageWithTextUpsertWithNestedWhereUniqueAndPositionInput>>;
};

export type ImageWithTextUpdateManyInput = {
  title?: InputMaybe<Scalars['String']['input']>;
};

export type ImageWithTextUpdateManyWithNestedWhereInput = {
  /** Update many input */
  data: ImageWithTextUpdateManyInput;
  /** Document search */
  where: ImageWithTextWhereInput;
};

export type ImageWithTextUpdateOneInlineInput = {
  /** Create and connect one ImageWithText document */
  create?: InputMaybe<ImageWithTextCreateInput>;
  /** Delete currently connected ImageWithText document */
  delete?: InputMaybe<Scalars['Boolean']['input']>;
  /** Update single ImageWithText document */
  update?: InputMaybe<ImageWithTextUpdateWithNestedWhereUniqueInput>;
  /** Upsert single ImageWithText document */
  upsert?: InputMaybe<ImageWithTextUpsertWithNestedWhereUniqueInput>;
};

export type ImageWithTextUpdateWithNestedWhereUniqueAndPositionInput = {
  /** Document to update */
  data?: InputMaybe<ImageWithTextUpdateInput>;
  /** Position in the list of existing component instances, will default to appending at the end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Unique component instance search */
  where: ImageWithTextWhereUniqueInput;
};

export type ImageWithTextUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: ImageWithTextUpdateInput;
  /** Unique document search */
  where: ImageWithTextWhereUniqueInput;
};

export type ImageWithTextUpsertInput = {
  /** Create document if it didn't exist */
  create: ImageWithTextCreateInput;
  /** Update document if it exists */
  update: ImageWithTextUpdateInput;
};

export type ImageWithTextUpsertWithNestedWhereUniqueAndPositionInput = {
  /** Document to upsert */
  data?: InputMaybe<ImageWithTextUpsertInput>;
  /** Position in the list of existing component instances, will default to appending at the end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Unique component instance search */
  where: ImageWithTextWhereUniqueInput;
};

export type ImageWithTextUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: ImageWithTextUpsertInput;
  /** Unique document search */
  where: ImageWithTextWhereUniqueInput;
};

/** Identifies documents */
export type ImageWithTextWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<ImageWithTextWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<ImageWithTextWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<ImageWithTextWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']['input']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']['input']>;
  image?: InputMaybe<AssetWhereInput>;
  title?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  title_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  title_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  title_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  title_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  title_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  title_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  title_starts_with?: InputMaybe<Scalars['String']['input']>;
};

/** References ImageWithText record uniquely */
export type ImageWithTextWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']['input']>;
};

export type Keyword = Entity & Node & {
  __typename?: 'Keyword';
  /** The time the document was created */
  createdAt: Scalars['DateTime']['output'];
  /** User that created this document */
  createdBy?: Maybe<User>;
  /** Get the document in other stages */
  documentInStages: Array<Keyword>;
  /** List of Keyword versions */
  history: Array<Version>;
  /** The unique identifier */
  id: Scalars['ID']['output'];
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  /** User that last published this document */
  publishedBy?: Maybe<User>;
  scheduledIn: Array<ScheduledOperation>;
  slug?: Maybe<Scalars['String']['output']>;
  /** System stage field */
  stage: Stage;
  title: Scalars['String']['output'];
  /** The time the document was updated */
  updatedAt: Scalars['DateTime']['output'];
  /** User that last updated this document */
  updatedBy?: Maybe<User>;
};


export type KeywordCreatedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  locales?: InputMaybe<Array<Locale>>;
};


export type KeywordDocumentInStagesArgs = {
  includeCurrent?: Scalars['Boolean']['input'];
  inheritLocale?: Scalars['Boolean']['input'];
  stages?: Array<Stage>;
};


export type KeywordHistoryArgs = {
  limit?: Scalars['Int']['input'];
  skip?: Scalars['Int']['input'];
  stageOverride?: InputMaybe<Stage>;
};


export type KeywordPublishedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  locales?: InputMaybe<Array<Locale>>;
};


export type KeywordScheduledInArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: InputMaybe<Array<Locale>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<ScheduledOperationWhereInput>;
};


export type KeywordUpdatedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  locales?: InputMaybe<Array<Locale>>;
};

export type KeywordConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Document to connect */
  where: KeywordWhereUniqueInput;
};

/** A connection to a list of items. */
export type KeywordConnection = {
  __typename?: 'KeywordConnection';
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<KeywordEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type KeywordCreateInput = {
  clp89yt1g4qie01un5kyd4371?: InputMaybe<PostCreateManyInlineInput>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
  title: Scalars['String']['input'];
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type KeywordCreateManyInlineInput = {
  /** Connect multiple existing Keyword documents */
  connect?: InputMaybe<Array<KeywordWhereUniqueInput>>;
  /** Create and connect multiple existing Keyword documents */
  create?: InputMaybe<Array<KeywordCreateInput>>;
};

export type KeywordCreateOneInlineInput = {
  /** Connect one existing Keyword document */
  connect?: InputMaybe<KeywordWhereUniqueInput>;
  /** Create and connect one Keyword document */
  create?: InputMaybe<KeywordCreateInput>;
};

/** An edge in a connection. */
export type KeywordEdge = {
  __typename?: 'KeywordEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: Keyword;
};

/** Identifies documents */
export type KeywordManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<KeywordWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<KeywordWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<KeywordWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  createdBy?: InputMaybe<UserWhereInput>;
  documentInStages_every?: InputMaybe<KeywordWhereStageInput>;
  documentInStages_none?: InputMaybe<KeywordWhereStageInput>;
  documentInStages_some?: InputMaybe<KeywordWhereStageInput>;
  id?: InputMaybe<Scalars['ID']['input']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']['input']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']['input']>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
  slug?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  slug_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  slug_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  slug_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  slug_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  slug_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  slug_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  slug_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  slug_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  slug_starts_with?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  title_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  title_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  title_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  title_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  title_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  title_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  title_starts_with?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  updatedBy?: InputMaybe<UserWhereInput>;
};

export enum KeywordOrderByInput {
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  SlugAsc = 'slug_ASC',
  SlugDesc = 'slug_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC'
}

export type KeywordUpdateInput = {
  clp89yt1g4qie01un5kyd4371?: InputMaybe<PostUpdateManyInlineInput>;
  slug?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type KeywordUpdateManyInlineInput = {
  /** Connect multiple existing Keyword documents */
  connect?: InputMaybe<Array<KeywordConnectInput>>;
  /** Create and connect multiple Keyword documents */
  create?: InputMaybe<Array<KeywordCreateInput>>;
  /** Delete multiple Keyword documents */
  delete?: InputMaybe<Array<KeywordWhereUniqueInput>>;
  /** Disconnect multiple Keyword documents */
  disconnect?: InputMaybe<Array<KeywordWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing Keyword documents */
  set?: InputMaybe<Array<KeywordWhereUniqueInput>>;
  /** Update multiple Keyword documents */
  update?: InputMaybe<Array<KeywordUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple Keyword documents */
  upsert?: InputMaybe<Array<KeywordUpsertWithNestedWhereUniqueInput>>;
};

export type KeywordUpdateManyInput = {
  title?: InputMaybe<Scalars['String']['input']>;
};

export type KeywordUpdateManyWithNestedWhereInput = {
  /** Update many input */
  data: KeywordUpdateManyInput;
  /** Document search */
  where: KeywordWhereInput;
};

export type KeywordUpdateOneInlineInput = {
  /** Connect existing Keyword document */
  connect?: InputMaybe<KeywordWhereUniqueInput>;
  /** Create and connect one Keyword document */
  create?: InputMaybe<KeywordCreateInput>;
  /** Delete currently connected Keyword document */
  delete?: InputMaybe<Scalars['Boolean']['input']>;
  /** Disconnect currently connected Keyword document */
  disconnect?: InputMaybe<Scalars['Boolean']['input']>;
  /** Update single Keyword document */
  update?: InputMaybe<KeywordUpdateWithNestedWhereUniqueInput>;
  /** Upsert single Keyword document */
  upsert?: InputMaybe<KeywordUpsertWithNestedWhereUniqueInput>;
};

export type KeywordUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: KeywordUpdateInput;
  /** Unique document search */
  where: KeywordWhereUniqueInput;
};

export type KeywordUpsertInput = {
  /** Create document if it didn't exist */
  create: KeywordCreateInput;
  /** Update document if it exists */
  update: KeywordUpdateInput;
};

export type KeywordUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: KeywordUpsertInput;
  /** Unique document search */
  where: KeywordWhereUniqueInput;
};

/** This contains a set of filters that can be used to compare values internally */
export type KeywordWhereComparatorInput = {
  /** This field can be used to request to check if the entry is outdated by internal comparison */
  outdated_to?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Identifies documents */
export type KeywordWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<KeywordWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<KeywordWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<KeywordWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  createdBy?: InputMaybe<UserWhereInput>;
  documentInStages_every?: InputMaybe<KeywordWhereStageInput>;
  documentInStages_none?: InputMaybe<KeywordWhereStageInput>;
  documentInStages_some?: InputMaybe<KeywordWhereStageInput>;
  id?: InputMaybe<Scalars['ID']['input']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']['input']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']['input']>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
  slug?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  slug_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  slug_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  slug_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  slug_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  slug_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  slug_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  slug_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  slug_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  slug_starts_with?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  title_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  title_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  title_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  title_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  title_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  title_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  title_starts_with?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  updatedBy?: InputMaybe<UserWhereInput>;
};

/** The document in stages filter allows specifying a stage entry to cross compare the same document between different stages */
export type KeywordWhereStageInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<KeywordWhereStageInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<KeywordWhereStageInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<KeywordWhereStageInput>>;
  /** This field contains fields which can be set as true or false to specify an internal comparison */
  compareWithParent?: InputMaybe<KeywordWhereComparatorInput>;
  /** Specify the stage to compare with */
  stage?: InputMaybe<Stage>;
};

/** References Keyword record uniquely */
export type KeywordWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
};

export type LandingPage = Entity & Node & {
  __typename?: 'LandingPage';
  components: Array<LandingPagecomponentsUnion>;
  /** The time the document was created */
  createdAt: Scalars['DateTime']['output'];
  /** User that created this document */
  createdBy?: Maybe<User>;
  /** Get the document in other stages */
  documentInStages: Array<LandingPage>;
  heading?: Maybe<Scalars['String']['output']>;
  /** List of LandingPage versions */
  history: Array<Version>;
  /** The unique identifier */
  id: Scalars['ID']['output'];
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  /** User that last published this document */
  publishedBy?: Maybe<User>;
  scheduledIn: Array<ScheduledOperation>;
  slug?: Maybe<Scalars['String']['output']>;
  /** System stage field */
  stage: Stage;
  subHeading?: Maybe<Scalars['String']['output']>;
  subPoints: Array<LandingPagesubPointsUnion>;
  subtitle?: Maybe<Scalars['String']['output']>;
  /** The time the document was updated */
  updatedAt: Scalars['DateTime']['output'];
  /** User that last updated this document */
  updatedBy?: Maybe<User>;
};


export type LandingPageComponentsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: InputMaybe<Array<Locale>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type LandingPageCreatedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  locales?: InputMaybe<Array<Locale>>;
};


export type LandingPageDocumentInStagesArgs = {
  includeCurrent?: Scalars['Boolean']['input'];
  inheritLocale?: Scalars['Boolean']['input'];
  stages?: Array<Stage>;
};


export type LandingPageHistoryArgs = {
  limit?: Scalars['Int']['input'];
  skip?: Scalars['Int']['input'];
  stageOverride?: InputMaybe<Stage>;
};


export type LandingPagePublishedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  locales?: InputMaybe<Array<Locale>>;
};


export type LandingPageScheduledInArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: InputMaybe<Array<Locale>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<ScheduledOperationWhereInput>;
};


export type LandingPageSubPointsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: InputMaybe<Array<Locale>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type LandingPageUpdatedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  locales?: InputMaybe<Array<Locale>>;
};

export type LandingPageConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Document to connect */
  where: LandingPageWhereUniqueInput;
};

/** A connection to a list of items. */
export type LandingPageConnection = {
  __typename?: 'LandingPageConnection';
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<LandingPageEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type LandingPageCreateInput = {
  components?: InputMaybe<LandingPagecomponentsUnionCreateManyInlineInput>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  heading?: InputMaybe<Scalars['String']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
  subHeading?: InputMaybe<Scalars['String']['input']>;
  subPoints?: InputMaybe<LandingPagesubPointsUnionCreateManyInlineInput>;
  subtitle?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type LandingPageCreateManyInlineInput = {
  /** Connect multiple existing LandingPage documents */
  connect?: InputMaybe<Array<LandingPageWhereUniqueInput>>;
  /** Create and connect multiple existing LandingPage documents */
  create?: InputMaybe<Array<LandingPageCreateInput>>;
};

export type LandingPageCreateOneInlineInput = {
  /** Connect one existing LandingPage document */
  connect?: InputMaybe<LandingPageWhereUniqueInput>;
  /** Create and connect one LandingPage document */
  create?: InputMaybe<LandingPageCreateInput>;
};

/** An edge in a connection. */
export type LandingPageEdge = {
  __typename?: 'LandingPageEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: LandingPage;
};

/** Identifies documents */
export type LandingPageManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<LandingPageWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<LandingPageWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<LandingPageWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']['input']>;
  /** All values in which the union is empty. */
  components_empty?: InputMaybe<Scalars['Boolean']['input']>;
  /** Matches if the modular component contains at least one connection to the item provided to the filter */
  components_some?: InputMaybe<LandingPagecomponentsUnionWhereInput>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  createdBy?: InputMaybe<UserWhereInput>;
  documentInStages_every?: InputMaybe<LandingPageWhereStageInput>;
  documentInStages_none?: InputMaybe<LandingPageWhereStageInput>;
  documentInStages_some?: InputMaybe<LandingPageWhereStageInput>;
  heading?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  heading_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  heading_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  heading_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  heading_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  heading_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  heading_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  heading_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  heading_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  heading_starts_with?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']['input']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']['input']>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
  slug?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  slug_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  slug_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  slug_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  slug_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  slug_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  slug_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  slug_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  slug_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  slug_starts_with?: InputMaybe<Scalars['String']['input']>;
  subHeading?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  subHeading_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  subHeading_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  subHeading_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  subHeading_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  subHeading_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  subHeading_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  subHeading_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  subHeading_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  subHeading_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values in which the union is empty. */
  subPoints_empty?: InputMaybe<Scalars['Boolean']['input']>;
  /** Matches if the modular component contains at least one connection to the item provided to the filter */
  subPoints_some?: InputMaybe<LandingPagesubPointsUnionWhereInput>;
  subtitle?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  subtitle_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  subtitle_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  subtitle_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  subtitle_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  subtitle_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  subtitle_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  subtitle_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  subtitle_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  subtitle_starts_with?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  updatedBy?: InputMaybe<UserWhereInput>;
};

export enum LandingPageOrderByInput {
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  HeadingAsc = 'heading_ASC',
  HeadingDesc = 'heading_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  SlugAsc = 'slug_ASC',
  SlugDesc = 'slug_DESC',
  SubHeadingAsc = 'subHeading_ASC',
  SubHeadingDesc = 'subHeading_DESC',
  SubtitleAsc = 'subtitle_ASC',
  SubtitleDesc = 'subtitle_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC'
}

export type LandingPagePoint = Entity & {
  __typename?: 'LandingPagePoint';
  icon: Asset;
  /** The unique identifier */
  id: Scalars['ID']['output'];
  /** System stage field */
  stage: Stage;
  subtitle?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
};


export type LandingPagePointIconArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  locales?: InputMaybe<Array<Locale>>;
};

export type LandingPagePointConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Document to connect */
  where: LandingPagePointWhereUniqueInput;
};

/** A connection to a list of items. */
export type LandingPagePointConnection = {
  __typename?: 'LandingPagePointConnection';
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<LandingPagePointEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type LandingPagePointCreateInput = {
  icon: AssetCreateOneInlineInput;
  subtitle?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type LandingPagePointCreateManyInlineInput = {
  /** Create and connect multiple existing LandingPagePoint documents */
  create?: InputMaybe<Array<LandingPagePointCreateInput>>;
};

export type LandingPagePointCreateOneInlineInput = {
  /** Create and connect one LandingPagePoint document */
  create?: InputMaybe<LandingPagePointCreateInput>;
};

export type LandingPagePointCreateWithPositionInput = {
  /** Document to create */
  data: LandingPagePointCreateInput;
  /** Position in the list of existing component instances, will default to appending at the end of list */
  position?: InputMaybe<ConnectPositionInput>;
};

/** An edge in a connection. */
export type LandingPagePointEdge = {
  __typename?: 'LandingPagePointEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: LandingPagePoint;
};

/** Identifies documents */
export type LandingPagePointManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<LandingPagePointWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<LandingPagePointWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<LandingPagePointWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']['input']>;
  icon?: InputMaybe<AssetWhereInput>;
  id?: InputMaybe<Scalars['ID']['input']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']['input']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']['input']>;
  subtitle?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  subtitle_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  subtitle_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  subtitle_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  subtitle_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  subtitle_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  subtitle_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  subtitle_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  subtitle_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  subtitle_starts_with?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  title_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  title_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  title_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  title_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  title_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  title_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  title_starts_with?: InputMaybe<Scalars['String']['input']>;
};

export enum LandingPagePointOrderByInput {
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  SubtitleAsc = 'subtitle_ASC',
  SubtitleDesc = 'subtitle_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC'
}

export type LandingPagePointParent = LandingPage;

export type LandingPagePointParentConnectInput = {
  LandingPage?: InputMaybe<LandingPageConnectInput>;
};

export type LandingPagePointParentCreateInput = {
  LandingPage?: InputMaybe<LandingPageCreateInput>;
};

export type LandingPagePointParentCreateManyInlineInput = {
  /** Connect multiple existing LandingPagePointParent documents */
  connect?: InputMaybe<Array<LandingPagePointParentWhereUniqueInput>>;
  /** Create and connect multiple existing LandingPagePointParent documents */
  create?: InputMaybe<Array<LandingPagePointParentCreateInput>>;
};

export type LandingPagePointParentCreateOneInlineInput = {
  /** Connect one existing LandingPagePointParent document */
  connect?: InputMaybe<LandingPagePointParentWhereUniqueInput>;
  /** Create and connect one LandingPagePointParent document */
  create?: InputMaybe<LandingPagePointParentCreateInput>;
};

export type LandingPagePointParentUpdateInput = {
  LandingPage?: InputMaybe<LandingPageUpdateInput>;
};

export type LandingPagePointParentUpdateManyInlineInput = {
  /** Connect multiple existing LandingPagePointParent documents */
  connect?: InputMaybe<Array<LandingPagePointParentConnectInput>>;
  /** Create and connect multiple LandingPagePointParent documents */
  create?: InputMaybe<Array<LandingPagePointParentCreateInput>>;
  /** Delete multiple LandingPagePointParent documents */
  delete?: InputMaybe<Array<LandingPagePointParentWhereUniqueInput>>;
  /** Disconnect multiple LandingPagePointParent documents */
  disconnect?: InputMaybe<Array<LandingPagePointParentWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing LandingPagePointParent documents */
  set?: InputMaybe<Array<LandingPagePointParentWhereUniqueInput>>;
  /** Update multiple LandingPagePointParent documents */
  update?: InputMaybe<Array<LandingPagePointParentUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple LandingPagePointParent documents */
  upsert?: InputMaybe<Array<LandingPagePointParentUpsertWithNestedWhereUniqueInput>>;
};

export type LandingPagePointParentUpdateManyWithNestedWhereInput = {
  LandingPage?: InputMaybe<LandingPageUpdateManyWithNestedWhereInput>;
};

export type LandingPagePointParentUpdateOneInlineInput = {
  /** Connect existing LandingPagePointParent document */
  connect?: InputMaybe<LandingPagePointParentWhereUniqueInput>;
  /** Create and connect one LandingPagePointParent document */
  create?: InputMaybe<LandingPagePointParentCreateInput>;
  /** Delete currently connected LandingPagePointParent document */
  delete?: InputMaybe<Scalars['Boolean']['input']>;
  /** Disconnect currently connected LandingPagePointParent document */
  disconnect?: InputMaybe<Scalars['Boolean']['input']>;
  /** Update single LandingPagePointParent document */
  update?: InputMaybe<LandingPagePointParentUpdateWithNestedWhereUniqueInput>;
  /** Upsert single LandingPagePointParent document */
  upsert?: InputMaybe<LandingPagePointParentUpsertWithNestedWhereUniqueInput>;
};

export type LandingPagePointParentUpdateWithNestedWhereUniqueInput = {
  LandingPage?: InputMaybe<LandingPageUpdateWithNestedWhereUniqueInput>;
};

export type LandingPagePointParentUpsertWithNestedWhereUniqueInput = {
  LandingPage?: InputMaybe<LandingPageUpsertWithNestedWhereUniqueInput>;
};

export type LandingPagePointParentWhereInput = {
  LandingPage?: InputMaybe<LandingPageWhereInput>;
};

export type LandingPagePointParentWhereUniqueInput = {
  LandingPage?: InputMaybe<LandingPageWhereUniqueInput>;
};

export type LandingPagePointUpdateInput = {
  icon?: InputMaybe<AssetUpdateOneInlineInput>;
  subtitle?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type LandingPagePointUpdateManyInlineInput = {
  /** Create and connect multiple LandingPagePoint component instances */
  create?: InputMaybe<Array<LandingPagePointCreateWithPositionInput>>;
  /** Delete multiple LandingPagePoint documents */
  delete?: InputMaybe<Array<LandingPagePointWhereUniqueInput>>;
  /** Update multiple LandingPagePoint component instances */
  update?: InputMaybe<Array<LandingPagePointUpdateWithNestedWhereUniqueAndPositionInput>>;
  /** Upsert multiple LandingPagePoint component instances */
  upsert?: InputMaybe<Array<LandingPagePointUpsertWithNestedWhereUniqueAndPositionInput>>;
};

export type LandingPagePointUpdateManyInput = {
  subtitle?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type LandingPagePointUpdateManyWithNestedWhereInput = {
  /** Update many input */
  data: LandingPagePointUpdateManyInput;
  /** Document search */
  where: LandingPagePointWhereInput;
};

export type LandingPagePointUpdateOneInlineInput = {
  /** Create and connect one LandingPagePoint document */
  create?: InputMaybe<LandingPagePointCreateInput>;
  /** Delete currently connected LandingPagePoint document */
  delete?: InputMaybe<Scalars['Boolean']['input']>;
  /** Update single LandingPagePoint document */
  update?: InputMaybe<LandingPagePointUpdateWithNestedWhereUniqueInput>;
  /** Upsert single LandingPagePoint document */
  upsert?: InputMaybe<LandingPagePointUpsertWithNestedWhereUniqueInput>;
};

export type LandingPagePointUpdateWithNestedWhereUniqueAndPositionInput = {
  /** Document to update */
  data?: InputMaybe<LandingPagePointUpdateInput>;
  /** Position in the list of existing component instances, will default to appending at the end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Unique component instance search */
  where: LandingPagePointWhereUniqueInput;
};

export type LandingPagePointUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: LandingPagePointUpdateInput;
  /** Unique document search */
  where: LandingPagePointWhereUniqueInput;
};

export type LandingPagePointUpsertInput = {
  /** Create document if it didn't exist */
  create: LandingPagePointCreateInput;
  /** Update document if it exists */
  update: LandingPagePointUpdateInput;
};

export type LandingPagePointUpsertWithNestedWhereUniqueAndPositionInput = {
  /** Document to upsert */
  data?: InputMaybe<LandingPagePointUpsertInput>;
  /** Position in the list of existing component instances, will default to appending at the end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Unique component instance search */
  where: LandingPagePointWhereUniqueInput;
};

export type LandingPagePointUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: LandingPagePointUpsertInput;
  /** Unique document search */
  where: LandingPagePointWhereUniqueInput;
};

/** Identifies documents */
export type LandingPagePointWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<LandingPagePointWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<LandingPagePointWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<LandingPagePointWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']['input']>;
  icon?: InputMaybe<AssetWhereInput>;
  id?: InputMaybe<Scalars['ID']['input']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']['input']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']['input']>;
  subtitle?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  subtitle_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  subtitle_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  subtitle_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  subtitle_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  subtitle_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  subtitle_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  subtitle_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  subtitle_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  subtitle_starts_with?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  title_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  title_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  title_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  title_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  title_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  title_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  title_starts_with?: InputMaybe<Scalars['String']['input']>;
};

/** References LandingPagePoint record uniquely */
export type LandingPagePointWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']['input']>;
};

export type LandingPageSlidingImageGallery = Entity & {
  __typename?: 'LandingPageSlidingImageGallery';
  buttonLink?: Maybe<Scalars['String']['output']>;
  buttonText?: Maybe<Scalars['String']['output']>;
  /** The unique identifier */
  id: Scalars['ID']['output'];
  images: Array<Asset>;
  /** System stage field */
  stage: Stage;
  subtitle?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
  underImageSubtitle?: Maybe<Scalars['String']['output']>;
  underImageTitle?: Maybe<Scalars['String']['output']>;
};


export type LandingPageSlidingImageGalleryImagesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: InputMaybe<Array<Locale>>;
  orderBy?: InputMaybe<AssetOrderByInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<AssetWhereInput>;
};

export type LandingPageSlidingImageGalleryConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Document to connect */
  where: LandingPageSlidingImageGalleryWhereUniqueInput;
};

/** A connection to a list of items. */
export type LandingPageSlidingImageGalleryConnection = {
  __typename?: 'LandingPageSlidingImageGalleryConnection';
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<LandingPageSlidingImageGalleryEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type LandingPageSlidingImageGalleryCreateInput = {
  buttonLink?: InputMaybe<Scalars['String']['input']>;
  buttonText?: InputMaybe<Scalars['String']['input']>;
  images?: InputMaybe<AssetCreateManyInlineInput>;
  subtitle?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  underImageSubtitle?: InputMaybe<Scalars['String']['input']>;
  underImageTitle?: InputMaybe<Scalars['String']['input']>;
};

export type LandingPageSlidingImageGalleryCreateManyInlineInput = {
  /** Create and connect multiple existing LandingPageSlidingImageGallery documents */
  create?: InputMaybe<Array<LandingPageSlidingImageGalleryCreateInput>>;
};

export type LandingPageSlidingImageGalleryCreateOneInlineInput = {
  /** Create and connect one LandingPageSlidingImageGallery document */
  create?: InputMaybe<LandingPageSlidingImageGalleryCreateInput>;
};

export type LandingPageSlidingImageGalleryCreateWithPositionInput = {
  /** Document to create */
  data: LandingPageSlidingImageGalleryCreateInput;
  /** Position in the list of existing component instances, will default to appending at the end of list */
  position?: InputMaybe<ConnectPositionInput>;
};

/** An edge in a connection. */
export type LandingPageSlidingImageGalleryEdge = {
  __typename?: 'LandingPageSlidingImageGalleryEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: LandingPageSlidingImageGallery;
};

/** Identifies documents */
export type LandingPageSlidingImageGalleryManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<LandingPageSlidingImageGalleryWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<LandingPageSlidingImageGalleryWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<LandingPageSlidingImageGalleryWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']['input']>;
  buttonLink?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  buttonLink_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  buttonLink_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  buttonLink_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  buttonLink_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  buttonLink_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  buttonLink_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  buttonLink_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  buttonLink_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  buttonLink_starts_with?: InputMaybe<Scalars['String']['input']>;
  buttonText?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  buttonText_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  buttonText_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  buttonText_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  buttonText_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  buttonText_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  buttonText_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  buttonText_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  buttonText_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  buttonText_starts_with?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']['input']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']['input']>;
  images_every?: InputMaybe<AssetWhereInput>;
  images_none?: InputMaybe<AssetWhereInput>;
  images_some?: InputMaybe<AssetWhereInput>;
  subtitle?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  subtitle_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  subtitle_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  subtitle_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  subtitle_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  subtitle_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  subtitle_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  subtitle_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  subtitle_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  subtitle_starts_with?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  title_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  title_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  title_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  title_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  title_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  title_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  title_starts_with?: InputMaybe<Scalars['String']['input']>;
  underImageSubtitle?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  underImageSubtitle_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  underImageSubtitle_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  underImageSubtitle_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  underImageSubtitle_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  underImageSubtitle_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  underImageSubtitle_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  underImageSubtitle_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  underImageSubtitle_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  underImageSubtitle_starts_with?: InputMaybe<Scalars['String']['input']>;
  underImageTitle?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  underImageTitle_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  underImageTitle_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  underImageTitle_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  underImageTitle_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  underImageTitle_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  underImageTitle_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  underImageTitle_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  underImageTitle_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  underImageTitle_starts_with?: InputMaybe<Scalars['String']['input']>;
};

export enum LandingPageSlidingImageGalleryOrderByInput {
  ButtonLinkAsc = 'buttonLink_ASC',
  ButtonLinkDesc = 'buttonLink_DESC',
  ButtonTextAsc = 'buttonText_ASC',
  ButtonTextDesc = 'buttonText_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  SubtitleAsc = 'subtitle_ASC',
  SubtitleDesc = 'subtitle_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC',
  UnderImageSubtitleAsc = 'underImageSubtitle_ASC',
  UnderImageSubtitleDesc = 'underImageSubtitle_DESC',
  UnderImageTitleAsc = 'underImageTitle_ASC',
  UnderImageTitleDesc = 'underImageTitle_DESC'
}

export type LandingPageSlidingImageGalleryParent = LandingPage;

export type LandingPageSlidingImageGalleryParentConnectInput = {
  LandingPage?: InputMaybe<LandingPageConnectInput>;
};

export type LandingPageSlidingImageGalleryParentCreateInput = {
  LandingPage?: InputMaybe<LandingPageCreateInput>;
};

export type LandingPageSlidingImageGalleryParentCreateManyInlineInput = {
  /** Connect multiple existing LandingPageSlidingImageGalleryParent documents */
  connect?: InputMaybe<Array<LandingPageSlidingImageGalleryParentWhereUniqueInput>>;
  /** Create and connect multiple existing LandingPageSlidingImageGalleryParent documents */
  create?: InputMaybe<Array<LandingPageSlidingImageGalleryParentCreateInput>>;
};

export type LandingPageSlidingImageGalleryParentCreateOneInlineInput = {
  /** Connect one existing LandingPageSlidingImageGalleryParent document */
  connect?: InputMaybe<LandingPageSlidingImageGalleryParentWhereUniqueInput>;
  /** Create and connect one LandingPageSlidingImageGalleryParent document */
  create?: InputMaybe<LandingPageSlidingImageGalleryParentCreateInput>;
};

export type LandingPageSlidingImageGalleryParentUpdateInput = {
  LandingPage?: InputMaybe<LandingPageUpdateInput>;
};

export type LandingPageSlidingImageGalleryParentUpdateManyInlineInput = {
  /** Connect multiple existing LandingPageSlidingImageGalleryParent documents */
  connect?: InputMaybe<Array<LandingPageSlidingImageGalleryParentConnectInput>>;
  /** Create and connect multiple LandingPageSlidingImageGalleryParent documents */
  create?: InputMaybe<Array<LandingPageSlidingImageGalleryParentCreateInput>>;
  /** Delete multiple LandingPageSlidingImageGalleryParent documents */
  delete?: InputMaybe<Array<LandingPageSlidingImageGalleryParentWhereUniqueInput>>;
  /** Disconnect multiple LandingPageSlidingImageGalleryParent documents */
  disconnect?: InputMaybe<Array<LandingPageSlidingImageGalleryParentWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing LandingPageSlidingImageGalleryParent documents */
  set?: InputMaybe<Array<LandingPageSlidingImageGalleryParentWhereUniqueInput>>;
  /** Update multiple LandingPageSlidingImageGalleryParent documents */
  update?: InputMaybe<Array<LandingPageSlidingImageGalleryParentUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple LandingPageSlidingImageGalleryParent documents */
  upsert?: InputMaybe<Array<LandingPageSlidingImageGalleryParentUpsertWithNestedWhereUniqueInput>>;
};

export type LandingPageSlidingImageGalleryParentUpdateManyWithNestedWhereInput = {
  LandingPage?: InputMaybe<LandingPageUpdateManyWithNestedWhereInput>;
};

export type LandingPageSlidingImageGalleryParentUpdateOneInlineInput = {
  /** Connect existing LandingPageSlidingImageGalleryParent document */
  connect?: InputMaybe<LandingPageSlidingImageGalleryParentWhereUniqueInput>;
  /** Create and connect one LandingPageSlidingImageGalleryParent document */
  create?: InputMaybe<LandingPageSlidingImageGalleryParentCreateInput>;
  /** Delete currently connected LandingPageSlidingImageGalleryParent document */
  delete?: InputMaybe<Scalars['Boolean']['input']>;
  /** Disconnect currently connected LandingPageSlidingImageGalleryParent document */
  disconnect?: InputMaybe<Scalars['Boolean']['input']>;
  /** Update single LandingPageSlidingImageGalleryParent document */
  update?: InputMaybe<LandingPageSlidingImageGalleryParentUpdateWithNestedWhereUniqueInput>;
  /** Upsert single LandingPageSlidingImageGalleryParent document */
  upsert?: InputMaybe<LandingPageSlidingImageGalleryParentUpsertWithNestedWhereUniqueInput>;
};

export type LandingPageSlidingImageGalleryParentUpdateWithNestedWhereUniqueInput = {
  LandingPage?: InputMaybe<LandingPageUpdateWithNestedWhereUniqueInput>;
};

export type LandingPageSlidingImageGalleryParentUpsertWithNestedWhereUniqueInput = {
  LandingPage?: InputMaybe<LandingPageUpsertWithNestedWhereUniqueInput>;
};

export type LandingPageSlidingImageGalleryParentWhereInput = {
  LandingPage?: InputMaybe<LandingPageWhereInput>;
};

export type LandingPageSlidingImageGalleryParentWhereUniqueInput = {
  LandingPage?: InputMaybe<LandingPageWhereUniqueInput>;
};

export type LandingPageSlidingImageGalleryUpdateInput = {
  buttonLink?: InputMaybe<Scalars['String']['input']>;
  buttonText?: InputMaybe<Scalars['String']['input']>;
  images?: InputMaybe<AssetUpdateManyInlineInput>;
  subtitle?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  underImageSubtitle?: InputMaybe<Scalars['String']['input']>;
  underImageTitle?: InputMaybe<Scalars['String']['input']>;
};

export type LandingPageSlidingImageGalleryUpdateManyInlineInput = {
  /** Create and connect multiple LandingPageSlidingImageGallery component instances */
  create?: InputMaybe<Array<LandingPageSlidingImageGalleryCreateWithPositionInput>>;
  /** Delete multiple LandingPageSlidingImageGallery documents */
  delete?: InputMaybe<Array<LandingPageSlidingImageGalleryWhereUniqueInput>>;
  /** Update multiple LandingPageSlidingImageGallery component instances */
  update?: InputMaybe<Array<LandingPageSlidingImageGalleryUpdateWithNestedWhereUniqueAndPositionInput>>;
  /** Upsert multiple LandingPageSlidingImageGallery component instances */
  upsert?: InputMaybe<Array<LandingPageSlidingImageGalleryUpsertWithNestedWhereUniqueAndPositionInput>>;
};

export type LandingPageSlidingImageGalleryUpdateManyInput = {
  buttonLink?: InputMaybe<Scalars['String']['input']>;
  buttonText?: InputMaybe<Scalars['String']['input']>;
  subtitle?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  underImageSubtitle?: InputMaybe<Scalars['String']['input']>;
  underImageTitle?: InputMaybe<Scalars['String']['input']>;
};

export type LandingPageSlidingImageGalleryUpdateManyWithNestedWhereInput = {
  /** Update many input */
  data: LandingPageSlidingImageGalleryUpdateManyInput;
  /** Document search */
  where: LandingPageSlidingImageGalleryWhereInput;
};

export type LandingPageSlidingImageGalleryUpdateOneInlineInput = {
  /** Create and connect one LandingPageSlidingImageGallery document */
  create?: InputMaybe<LandingPageSlidingImageGalleryCreateInput>;
  /** Delete currently connected LandingPageSlidingImageGallery document */
  delete?: InputMaybe<Scalars['Boolean']['input']>;
  /** Update single LandingPageSlidingImageGallery document */
  update?: InputMaybe<LandingPageSlidingImageGalleryUpdateWithNestedWhereUniqueInput>;
  /** Upsert single LandingPageSlidingImageGallery document */
  upsert?: InputMaybe<LandingPageSlidingImageGalleryUpsertWithNestedWhereUniqueInput>;
};

export type LandingPageSlidingImageGalleryUpdateWithNestedWhereUniqueAndPositionInput = {
  /** Document to update */
  data?: InputMaybe<LandingPageSlidingImageGalleryUpdateInput>;
  /** Position in the list of existing component instances, will default to appending at the end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Unique component instance search */
  where: LandingPageSlidingImageGalleryWhereUniqueInput;
};

export type LandingPageSlidingImageGalleryUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: LandingPageSlidingImageGalleryUpdateInput;
  /** Unique document search */
  where: LandingPageSlidingImageGalleryWhereUniqueInput;
};

export type LandingPageSlidingImageGalleryUpsertInput = {
  /** Create document if it didn't exist */
  create: LandingPageSlidingImageGalleryCreateInput;
  /** Update document if it exists */
  update: LandingPageSlidingImageGalleryUpdateInput;
};

export type LandingPageSlidingImageGalleryUpsertWithNestedWhereUniqueAndPositionInput = {
  /** Document to upsert */
  data?: InputMaybe<LandingPageSlidingImageGalleryUpsertInput>;
  /** Position in the list of existing component instances, will default to appending at the end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Unique component instance search */
  where: LandingPageSlidingImageGalleryWhereUniqueInput;
};

export type LandingPageSlidingImageGalleryUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: LandingPageSlidingImageGalleryUpsertInput;
  /** Unique document search */
  where: LandingPageSlidingImageGalleryWhereUniqueInput;
};

/** Identifies documents */
export type LandingPageSlidingImageGalleryWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<LandingPageSlidingImageGalleryWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<LandingPageSlidingImageGalleryWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<LandingPageSlidingImageGalleryWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']['input']>;
  buttonLink?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  buttonLink_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  buttonLink_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  buttonLink_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  buttonLink_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  buttonLink_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  buttonLink_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  buttonLink_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  buttonLink_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  buttonLink_starts_with?: InputMaybe<Scalars['String']['input']>;
  buttonText?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  buttonText_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  buttonText_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  buttonText_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  buttonText_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  buttonText_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  buttonText_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  buttonText_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  buttonText_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  buttonText_starts_with?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']['input']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']['input']>;
  images_every?: InputMaybe<AssetWhereInput>;
  images_none?: InputMaybe<AssetWhereInput>;
  images_some?: InputMaybe<AssetWhereInput>;
  subtitle?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  subtitle_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  subtitle_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  subtitle_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  subtitle_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  subtitle_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  subtitle_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  subtitle_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  subtitle_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  subtitle_starts_with?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  title_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  title_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  title_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  title_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  title_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  title_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  title_starts_with?: InputMaybe<Scalars['String']['input']>;
  underImageSubtitle?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  underImageSubtitle_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  underImageSubtitle_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  underImageSubtitle_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  underImageSubtitle_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  underImageSubtitle_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  underImageSubtitle_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  underImageSubtitle_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  underImageSubtitle_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  underImageSubtitle_starts_with?: InputMaybe<Scalars['String']['input']>;
  underImageTitle?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  underImageTitle_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  underImageTitle_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  underImageTitle_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  underImageTitle_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  underImageTitle_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  underImageTitle_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  underImageTitle_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  underImageTitle_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  underImageTitle_starts_with?: InputMaybe<Scalars['String']['input']>;
};

/** References LandingPageSlidingImageGallery record uniquely */
export type LandingPageSlidingImageGalleryWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']['input']>;
};

export type LandingPageUpdateInput = {
  components?: InputMaybe<LandingPagecomponentsUnionUpdateManyInlineInput>;
  heading?: InputMaybe<Scalars['String']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
  subHeading?: InputMaybe<Scalars['String']['input']>;
  subPoints?: InputMaybe<LandingPagesubPointsUnionUpdateManyInlineInput>;
  subtitle?: InputMaybe<Scalars['String']['input']>;
};

export type LandingPageUpdateManyInlineInput = {
  /** Connect multiple existing LandingPage documents */
  connect?: InputMaybe<Array<LandingPageConnectInput>>;
  /** Create and connect multiple LandingPage documents */
  create?: InputMaybe<Array<LandingPageCreateInput>>;
  /** Delete multiple LandingPage documents */
  delete?: InputMaybe<Array<LandingPageWhereUniqueInput>>;
  /** Disconnect multiple LandingPage documents */
  disconnect?: InputMaybe<Array<LandingPageWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing LandingPage documents */
  set?: InputMaybe<Array<LandingPageWhereUniqueInput>>;
  /** Update multiple LandingPage documents */
  update?: InputMaybe<Array<LandingPageUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple LandingPage documents */
  upsert?: InputMaybe<Array<LandingPageUpsertWithNestedWhereUniqueInput>>;
};

export type LandingPageUpdateManyInput = {
  heading?: InputMaybe<Scalars['String']['input']>;
  subHeading?: InputMaybe<Scalars['String']['input']>;
  subtitle?: InputMaybe<Scalars['String']['input']>;
};

export type LandingPageUpdateManyWithNestedWhereInput = {
  /** Update many input */
  data: LandingPageUpdateManyInput;
  /** Document search */
  where: LandingPageWhereInput;
};

export type LandingPageUpdateOneInlineInput = {
  /** Connect existing LandingPage document */
  connect?: InputMaybe<LandingPageWhereUniqueInput>;
  /** Create and connect one LandingPage document */
  create?: InputMaybe<LandingPageCreateInput>;
  /** Delete currently connected LandingPage document */
  delete?: InputMaybe<Scalars['Boolean']['input']>;
  /** Disconnect currently connected LandingPage document */
  disconnect?: InputMaybe<Scalars['Boolean']['input']>;
  /** Update single LandingPage document */
  update?: InputMaybe<LandingPageUpdateWithNestedWhereUniqueInput>;
  /** Upsert single LandingPage document */
  upsert?: InputMaybe<LandingPageUpsertWithNestedWhereUniqueInput>;
};

export type LandingPageUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: LandingPageUpdateInput;
  /** Unique document search */
  where: LandingPageWhereUniqueInput;
};

export type LandingPageUpsertInput = {
  /** Create document if it didn't exist */
  create: LandingPageCreateInput;
  /** Update document if it exists */
  update: LandingPageUpdateInput;
};

export type LandingPageUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: LandingPageUpsertInput;
  /** Unique document search */
  where: LandingPageWhereUniqueInput;
};

/** This contains a set of filters that can be used to compare values internally */
export type LandingPageWhereComparatorInput = {
  /** This field can be used to request to check if the entry is outdated by internal comparison */
  outdated_to?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Identifies documents */
export type LandingPageWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<LandingPageWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<LandingPageWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<LandingPageWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']['input']>;
  /** All values in which the union is empty. */
  components_empty?: InputMaybe<Scalars['Boolean']['input']>;
  /** Matches if the modular component contains at least one connection to the item provided to the filter */
  components_some?: InputMaybe<LandingPagecomponentsUnionWhereInput>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  createdBy?: InputMaybe<UserWhereInput>;
  documentInStages_every?: InputMaybe<LandingPageWhereStageInput>;
  documentInStages_none?: InputMaybe<LandingPageWhereStageInput>;
  documentInStages_some?: InputMaybe<LandingPageWhereStageInput>;
  heading?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  heading_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  heading_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  heading_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  heading_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  heading_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  heading_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  heading_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  heading_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  heading_starts_with?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']['input']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']['input']>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
  slug?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  slug_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  slug_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  slug_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  slug_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  slug_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  slug_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  slug_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  slug_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  slug_starts_with?: InputMaybe<Scalars['String']['input']>;
  subHeading?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  subHeading_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  subHeading_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  subHeading_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  subHeading_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  subHeading_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  subHeading_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  subHeading_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  subHeading_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  subHeading_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values in which the union is empty. */
  subPoints_empty?: InputMaybe<Scalars['Boolean']['input']>;
  /** Matches if the modular component contains at least one connection to the item provided to the filter */
  subPoints_some?: InputMaybe<LandingPagesubPointsUnionWhereInput>;
  subtitle?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  subtitle_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  subtitle_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  subtitle_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  subtitle_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  subtitle_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  subtitle_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  subtitle_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  subtitle_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  subtitle_starts_with?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  updatedBy?: InputMaybe<UserWhereInput>;
};

/** The document in stages filter allows specifying a stage entry to cross compare the same document between different stages */
export type LandingPageWhereStageInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<LandingPageWhereStageInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<LandingPageWhereStageInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<LandingPageWhereStageInput>>;
  /** This field contains fields which can be set as true or false to specify an internal comparison */
  compareWithParent?: InputMaybe<LandingPageWhereComparatorInput>;
  /** Specify the stage to compare with */
  stage?: InputMaybe<Stage>;
};

/** References LandingPage record uniquely */
export type LandingPageWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
};

export type LandingPagecomponentsUnion = CollectionShowcase | ImageWithText | LandingPageSlidingImageGallery | SideBySideCompare | TwoFoldmageGallery;

export type LandingPagecomponentsUnionConnectInput = {
  CollectionShowcase?: InputMaybe<CollectionShowcaseConnectInput>;
  ImageWithText?: InputMaybe<ImageWithTextConnectInput>;
  LandingPageSlidingImageGallery?: InputMaybe<LandingPageSlidingImageGalleryConnectInput>;
  SideBySideCompare?: InputMaybe<SideBySideCompareConnectInput>;
  TwoFoldmageGallery?: InputMaybe<TwoFoldmageGalleryConnectInput>;
};

export type LandingPagecomponentsUnionCreateInput = {
  CollectionShowcase?: InputMaybe<CollectionShowcaseCreateInput>;
  ImageWithText?: InputMaybe<ImageWithTextCreateInput>;
  LandingPageSlidingImageGallery?: InputMaybe<LandingPageSlidingImageGalleryCreateInput>;
  SideBySideCompare?: InputMaybe<SideBySideCompareCreateInput>;
  TwoFoldmageGallery?: InputMaybe<TwoFoldmageGalleryCreateInput>;
};

export type LandingPagecomponentsUnionCreateManyInlineInput = {
  /** Create and connect multiple existing LandingPagecomponentsUnion documents */
  create?: InputMaybe<Array<LandingPagecomponentsUnionCreateInput>>;
};

export type LandingPagecomponentsUnionCreateOneInlineInput = {
  /** Create and connect one LandingPagecomponentsUnion document */
  create?: InputMaybe<LandingPagecomponentsUnionCreateInput>;
};

export type LandingPagecomponentsUnionCreateWithPositionInput = {
  CollectionShowcase?: InputMaybe<CollectionShowcaseCreateWithPositionInput>;
  ImageWithText?: InputMaybe<ImageWithTextCreateWithPositionInput>;
  LandingPageSlidingImageGallery?: InputMaybe<LandingPageSlidingImageGalleryCreateWithPositionInput>;
  SideBySideCompare?: InputMaybe<SideBySideCompareCreateWithPositionInput>;
  TwoFoldmageGallery?: InputMaybe<TwoFoldmageGalleryCreateWithPositionInput>;
};

export type LandingPagecomponentsUnionUpdateInput = {
  CollectionShowcase?: InputMaybe<CollectionShowcaseUpdateInput>;
  ImageWithText?: InputMaybe<ImageWithTextUpdateInput>;
  LandingPageSlidingImageGallery?: InputMaybe<LandingPageSlidingImageGalleryUpdateInput>;
  SideBySideCompare?: InputMaybe<SideBySideCompareUpdateInput>;
  TwoFoldmageGallery?: InputMaybe<TwoFoldmageGalleryUpdateInput>;
};

export type LandingPagecomponentsUnionUpdateManyInlineInput = {
  /** Create and connect multiple LandingPagecomponentsUnion component instances */
  create?: InputMaybe<Array<LandingPagecomponentsUnionCreateWithPositionInput>>;
  /** Delete multiple LandingPagecomponentsUnion documents */
  delete?: InputMaybe<Array<LandingPagecomponentsUnionWhereUniqueInput>>;
  /** Update multiple LandingPagecomponentsUnion component instances */
  update?: InputMaybe<Array<LandingPagecomponentsUnionUpdateWithNestedWhereUniqueAndPositionInput>>;
  /** Upsert multiple LandingPagecomponentsUnion component instances */
  upsert?: InputMaybe<Array<LandingPagecomponentsUnionUpsertWithNestedWhereUniqueAndPositionInput>>;
};

export type LandingPagecomponentsUnionUpdateManyWithNestedWhereInput = {
  CollectionShowcase?: InputMaybe<CollectionShowcaseUpdateManyWithNestedWhereInput>;
  ImageWithText?: InputMaybe<ImageWithTextUpdateManyWithNestedWhereInput>;
  LandingPageSlidingImageGallery?: InputMaybe<LandingPageSlidingImageGalleryUpdateManyWithNestedWhereInput>;
  SideBySideCompare?: InputMaybe<SideBySideCompareUpdateManyWithNestedWhereInput>;
  TwoFoldmageGallery?: InputMaybe<TwoFoldmageGalleryUpdateManyWithNestedWhereInput>;
};

export type LandingPagecomponentsUnionUpdateOneInlineInput = {
  /** Create and connect one LandingPagecomponentsUnion document */
  create?: InputMaybe<LandingPagecomponentsUnionCreateInput>;
  /** Delete currently connected LandingPagecomponentsUnion document */
  delete?: InputMaybe<Scalars['Boolean']['input']>;
  /** Update single LandingPagecomponentsUnion document */
  update?: InputMaybe<LandingPagecomponentsUnionUpdateWithNestedWhereUniqueInput>;
  /** Upsert single LandingPagecomponentsUnion document */
  upsert?: InputMaybe<LandingPagecomponentsUnionUpsertWithNestedWhereUniqueInput>;
};

export type LandingPagecomponentsUnionUpdateWithNestedWhereUniqueAndPositionInput = {
  CollectionShowcase?: InputMaybe<CollectionShowcaseUpdateWithNestedWhereUniqueAndPositionInput>;
  ImageWithText?: InputMaybe<ImageWithTextUpdateWithNestedWhereUniqueAndPositionInput>;
  LandingPageSlidingImageGallery?: InputMaybe<LandingPageSlidingImageGalleryUpdateWithNestedWhereUniqueAndPositionInput>;
  SideBySideCompare?: InputMaybe<SideBySideCompareUpdateWithNestedWhereUniqueAndPositionInput>;
  TwoFoldmageGallery?: InputMaybe<TwoFoldmageGalleryUpdateWithNestedWhereUniqueAndPositionInput>;
};

export type LandingPagecomponentsUnionUpdateWithNestedWhereUniqueInput = {
  CollectionShowcase?: InputMaybe<CollectionShowcaseUpdateWithNestedWhereUniqueInput>;
  ImageWithText?: InputMaybe<ImageWithTextUpdateWithNestedWhereUniqueInput>;
  LandingPageSlidingImageGallery?: InputMaybe<LandingPageSlidingImageGalleryUpdateWithNestedWhereUniqueInput>;
  SideBySideCompare?: InputMaybe<SideBySideCompareUpdateWithNestedWhereUniqueInput>;
  TwoFoldmageGallery?: InputMaybe<TwoFoldmageGalleryUpdateWithNestedWhereUniqueInput>;
};

export type LandingPagecomponentsUnionUpsertWithNestedWhereUniqueAndPositionInput = {
  CollectionShowcase?: InputMaybe<CollectionShowcaseUpsertWithNestedWhereUniqueAndPositionInput>;
  ImageWithText?: InputMaybe<ImageWithTextUpsertWithNestedWhereUniqueAndPositionInput>;
  LandingPageSlidingImageGallery?: InputMaybe<LandingPageSlidingImageGalleryUpsertWithNestedWhereUniqueAndPositionInput>;
  SideBySideCompare?: InputMaybe<SideBySideCompareUpsertWithNestedWhereUniqueAndPositionInput>;
  TwoFoldmageGallery?: InputMaybe<TwoFoldmageGalleryUpsertWithNestedWhereUniqueAndPositionInput>;
};

export type LandingPagecomponentsUnionUpsertWithNestedWhereUniqueInput = {
  CollectionShowcase?: InputMaybe<CollectionShowcaseUpsertWithNestedWhereUniqueInput>;
  ImageWithText?: InputMaybe<ImageWithTextUpsertWithNestedWhereUniqueInput>;
  LandingPageSlidingImageGallery?: InputMaybe<LandingPageSlidingImageGalleryUpsertWithNestedWhereUniqueInput>;
  SideBySideCompare?: InputMaybe<SideBySideCompareUpsertWithNestedWhereUniqueInput>;
  TwoFoldmageGallery?: InputMaybe<TwoFoldmageGalleryUpsertWithNestedWhereUniqueInput>;
};

export type LandingPagecomponentsUnionWhereInput = {
  CollectionShowcase?: InputMaybe<CollectionShowcaseWhereInput>;
  ImageWithText?: InputMaybe<ImageWithTextWhereInput>;
  LandingPageSlidingImageGallery?: InputMaybe<LandingPageSlidingImageGalleryWhereInput>;
  SideBySideCompare?: InputMaybe<SideBySideCompareWhereInput>;
  TwoFoldmageGallery?: InputMaybe<TwoFoldmageGalleryWhereInput>;
};

export type LandingPagecomponentsUnionWhereUniqueInput = {
  CollectionShowcase?: InputMaybe<CollectionShowcaseWhereUniqueInput>;
  ImageWithText?: InputMaybe<ImageWithTextWhereUniqueInput>;
  LandingPageSlidingImageGallery?: InputMaybe<LandingPageSlidingImageGalleryWhereUniqueInput>;
  SideBySideCompare?: InputMaybe<SideBySideCompareWhereUniqueInput>;
  TwoFoldmageGallery?: InputMaybe<TwoFoldmageGalleryWhereUniqueInput>;
};

export type LandingPagesubPointsUnion = LandingPagePoint;

export type LandingPagesubPointsUnionConnectInput = {
  LandingPagePoint?: InputMaybe<LandingPagePointConnectInput>;
};

export type LandingPagesubPointsUnionCreateInput = {
  LandingPagePoint?: InputMaybe<LandingPagePointCreateInput>;
};

export type LandingPagesubPointsUnionCreateManyInlineInput = {
  /** Create and connect multiple existing LandingPagesubPointsUnion documents */
  create?: InputMaybe<Array<LandingPagesubPointsUnionCreateInput>>;
};

export type LandingPagesubPointsUnionCreateOneInlineInput = {
  /** Create and connect one LandingPagesubPointsUnion document */
  create?: InputMaybe<LandingPagesubPointsUnionCreateInput>;
};

export type LandingPagesubPointsUnionCreateWithPositionInput = {
  LandingPagePoint?: InputMaybe<LandingPagePointCreateWithPositionInput>;
};

export type LandingPagesubPointsUnionUpdateInput = {
  LandingPagePoint?: InputMaybe<LandingPagePointUpdateInput>;
};

export type LandingPagesubPointsUnionUpdateManyInlineInput = {
  /** Create and connect multiple LandingPagesubPointsUnion component instances */
  create?: InputMaybe<Array<LandingPagesubPointsUnionCreateWithPositionInput>>;
  /** Delete multiple LandingPagesubPointsUnion documents */
  delete?: InputMaybe<Array<LandingPagesubPointsUnionWhereUniqueInput>>;
  /** Update multiple LandingPagesubPointsUnion component instances */
  update?: InputMaybe<Array<LandingPagesubPointsUnionUpdateWithNestedWhereUniqueAndPositionInput>>;
  /** Upsert multiple LandingPagesubPointsUnion component instances */
  upsert?: InputMaybe<Array<LandingPagesubPointsUnionUpsertWithNestedWhereUniqueAndPositionInput>>;
};

export type LandingPagesubPointsUnionUpdateManyWithNestedWhereInput = {
  LandingPagePoint?: InputMaybe<LandingPagePointUpdateManyWithNestedWhereInput>;
};

export type LandingPagesubPointsUnionUpdateOneInlineInput = {
  /** Create and connect one LandingPagesubPointsUnion document */
  create?: InputMaybe<LandingPagesubPointsUnionCreateInput>;
  /** Delete currently connected LandingPagesubPointsUnion document */
  delete?: InputMaybe<Scalars['Boolean']['input']>;
  /** Update single LandingPagesubPointsUnion document */
  update?: InputMaybe<LandingPagesubPointsUnionUpdateWithNestedWhereUniqueInput>;
  /** Upsert single LandingPagesubPointsUnion document */
  upsert?: InputMaybe<LandingPagesubPointsUnionUpsertWithNestedWhereUniqueInput>;
};

export type LandingPagesubPointsUnionUpdateWithNestedWhereUniqueAndPositionInput = {
  LandingPagePoint?: InputMaybe<LandingPagePointUpdateWithNestedWhereUniqueAndPositionInput>;
};

export type LandingPagesubPointsUnionUpdateWithNestedWhereUniqueInput = {
  LandingPagePoint?: InputMaybe<LandingPagePointUpdateWithNestedWhereUniqueInput>;
};

export type LandingPagesubPointsUnionUpsertWithNestedWhereUniqueAndPositionInput = {
  LandingPagePoint?: InputMaybe<LandingPagePointUpsertWithNestedWhereUniqueAndPositionInput>;
};

export type LandingPagesubPointsUnionUpsertWithNestedWhereUniqueInput = {
  LandingPagePoint?: InputMaybe<LandingPagePointUpsertWithNestedWhereUniqueInput>;
};

export type LandingPagesubPointsUnionWhereInput = {
  LandingPagePoint?: InputMaybe<LandingPagePointWhereInput>;
};

export type LandingPagesubPointsUnionWhereUniqueInput = {
  LandingPagePoint?: InputMaybe<LandingPagePointWhereUniqueInput>;
};

/** Locale system enumeration */
export enum Locale {
  /** System locale */
  En = 'en',
  NlNl = 'nl_NL'
}

/** Representing a geolocation point with latitude and longitude */
export type Location = {
  __typename?: 'Location';
  distance: Scalars['Float']['output'];
  latitude: Scalars['Float']['output'];
  longitude: Scalars['Float']['output'];
};


/** Representing a geolocation point with latitude and longitude */
export type LocationDistanceArgs = {
  from: LocationInput;
};

/** Input for a geolocation point with latitude and longitude */
export type LocationInput = {
  latitude: Scalars['Float']['input'];
  longitude: Scalars['Float']['input'];
};

export type Mutation = {
  __typename?: 'Mutation';
  /**
   * Create one asset
   * @deprecated Asset mutations will be overhauled soon
   */
  createAsset?: Maybe<Asset>;
  /** Create one author */
  createAuthor?: Maybe<Author>;
  /** Create one keyword */
  createKeyword?: Maybe<Keyword>;
  /** Create one landingPage */
  createLandingPage?: Maybe<LandingPage>;
  /** Create one newLandingPage */
  createNewLandingPage?: Maybe<NewLandingPage>;
  /** Create one post */
  createPost?: Maybe<Post>;
  /** Create one privacyPolicy */
  createPrivacyPolicy?: Maybe<PrivacyPolicy>;
  /** Create one review */
  createReview?: Maybe<Review>;
  /** Create one scheduledRelease */
  createScheduledRelease?: Maybe<ScheduledRelease>;
  /** Create one tag */
  createTag?: Maybe<Tag>;
  /** Delete one asset from _all_ existing stages. Returns deleted document. */
  deleteAsset?: Maybe<Asset>;
  /** Delete one author from _all_ existing stages. Returns deleted document. */
  deleteAuthor?: Maybe<Author>;
  /** Delete one keyword from _all_ existing stages. Returns deleted document. */
  deleteKeyword?: Maybe<Keyword>;
  /** Delete one landingPage from _all_ existing stages. Returns deleted document. */
  deleteLandingPage?: Maybe<LandingPage>;
  /**
   * Delete many Asset documents
   * @deprecated Please use the new paginated many mutation (deleteManyAssetsConnection)
   */
  deleteManyAssets: BatchPayload;
  /** Delete many Asset documents, return deleted documents */
  deleteManyAssetsConnection: AssetConnection;
  /**
   * Delete many Author documents
   * @deprecated Please use the new paginated many mutation (deleteManyAuthorsConnection)
   */
  deleteManyAuthors: BatchPayload;
  /** Delete many Author documents, return deleted documents */
  deleteManyAuthorsConnection: AuthorConnection;
  /**
   * Delete many Keyword documents
   * @deprecated Please use the new paginated many mutation (deleteManyKeywordsConnection)
   */
  deleteManyKeywords: BatchPayload;
  /** Delete many Keyword documents, return deleted documents */
  deleteManyKeywordsConnection: KeywordConnection;
  /**
   * Delete many LandingPage documents
   * @deprecated Please use the new paginated many mutation (deleteManyLandingPagesConnection)
   */
  deleteManyLandingPages: BatchPayload;
  /** Delete many LandingPage documents, return deleted documents */
  deleteManyLandingPagesConnection: LandingPageConnection;
  /**
   * Delete many NewLandingPage documents
   * @deprecated Please use the new paginated many mutation (deleteManyNewLandingPagesConnection)
   */
  deleteManyNewLandingPages: BatchPayload;
  /** Delete many NewLandingPage documents, return deleted documents */
  deleteManyNewLandingPagesConnection: NewLandingPageConnection;
  /**
   * Delete many Post documents
   * @deprecated Please use the new paginated many mutation (deleteManyPostsConnection)
   */
  deleteManyPosts: BatchPayload;
  /** Delete many Post documents, return deleted documents */
  deleteManyPostsConnection: PostConnection;
  /**
   * Delete many PrivacyPolicy documents
   * @deprecated Please use the new paginated many mutation (deleteManyPrivacyPoliciesConnection)
   */
  deleteManyPrivacyPolicies: BatchPayload;
  /** Delete many PrivacyPolicy documents, return deleted documents */
  deleteManyPrivacyPoliciesConnection: PrivacyPolicyConnection;
  /**
   * Delete many Review documents
   * @deprecated Please use the new paginated many mutation (deleteManyReviewsConnection)
   */
  deleteManyReviews: BatchPayload;
  /** Delete many Review documents, return deleted documents */
  deleteManyReviewsConnection: ReviewConnection;
  /**
   * Delete many Tag documents
   * @deprecated Please use the new paginated many mutation (deleteManyTagsConnection)
   */
  deleteManyTags: BatchPayload;
  /** Delete many Tag documents, return deleted documents */
  deleteManyTagsConnection: TagConnection;
  /** Delete one newLandingPage from _all_ existing stages. Returns deleted document. */
  deleteNewLandingPage?: Maybe<NewLandingPage>;
  /** Delete one post from _all_ existing stages. Returns deleted document. */
  deletePost?: Maybe<Post>;
  /** Delete one privacyPolicy from _all_ existing stages. Returns deleted document. */
  deletePrivacyPolicy?: Maybe<PrivacyPolicy>;
  /** Delete one review from _all_ existing stages. Returns deleted document. */
  deleteReview?: Maybe<Review>;
  /** Delete and return scheduled operation */
  deleteScheduledOperation?: Maybe<ScheduledOperation>;
  /** Delete one scheduledRelease from _all_ existing stages. Returns deleted document. */
  deleteScheduledRelease?: Maybe<ScheduledRelease>;
  /** Delete one tag from _all_ existing stages. Returns deleted document. */
  deleteTag?: Maybe<Tag>;
  /** Publish one asset */
  publishAsset?: Maybe<Asset>;
  /** Publish one author */
  publishAuthor?: Maybe<Author>;
  /** Publish one keyword */
  publishKeyword?: Maybe<Keyword>;
  /** Publish one landingPage */
  publishLandingPage?: Maybe<LandingPage>;
  /**
   * Publish many Asset documents
   * @deprecated Please use the new paginated many mutation (publishManyAssetsConnection)
   */
  publishManyAssets: BatchPayload;
  /** Publish many Asset documents */
  publishManyAssetsConnection: AssetConnection;
  /**
   * Publish many Author documents
   * @deprecated Please use the new paginated many mutation (publishManyAuthorsConnection)
   */
  publishManyAuthors: BatchPayload;
  /** Publish many Author documents */
  publishManyAuthorsConnection: AuthorConnection;
  /**
   * Publish many Keyword documents
   * @deprecated Please use the new paginated many mutation (publishManyKeywordsConnection)
   */
  publishManyKeywords: BatchPayload;
  /** Publish many Keyword documents */
  publishManyKeywordsConnection: KeywordConnection;
  /**
   * Publish many LandingPage documents
   * @deprecated Please use the new paginated many mutation (publishManyLandingPagesConnection)
   */
  publishManyLandingPages: BatchPayload;
  /** Publish many LandingPage documents */
  publishManyLandingPagesConnection: LandingPageConnection;
  /**
   * Publish many NewLandingPage documents
   * @deprecated Please use the new paginated many mutation (publishManyNewLandingPagesConnection)
   */
  publishManyNewLandingPages: BatchPayload;
  /** Publish many NewLandingPage documents */
  publishManyNewLandingPagesConnection: NewLandingPageConnection;
  /**
   * Publish many Post documents
   * @deprecated Please use the new paginated many mutation (publishManyPostsConnection)
   */
  publishManyPosts: BatchPayload;
  /** Publish many Post documents */
  publishManyPostsConnection: PostConnection;
  /**
   * Publish many PrivacyPolicy documents
   * @deprecated Please use the new paginated many mutation (publishManyPrivacyPoliciesConnection)
   */
  publishManyPrivacyPolicies: BatchPayload;
  /** Publish many PrivacyPolicy documents */
  publishManyPrivacyPoliciesConnection: PrivacyPolicyConnection;
  /**
   * Publish many Review documents
   * @deprecated Please use the new paginated many mutation (publishManyReviewsConnection)
   */
  publishManyReviews: BatchPayload;
  /** Publish many Review documents */
  publishManyReviewsConnection: ReviewConnection;
  /**
   * Publish many Tag documents
   * @deprecated Please use the new paginated many mutation (publishManyTagsConnection)
   */
  publishManyTags: BatchPayload;
  /** Publish many Tag documents */
  publishManyTagsConnection: TagConnection;
  /** Publish one newLandingPage */
  publishNewLandingPage?: Maybe<NewLandingPage>;
  /** Publish one post */
  publishPost?: Maybe<Post>;
  /** Publish one privacyPolicy */
  publishPrivacyPolicy?: Maybe<PrivacyPolicy>;
  /** Publish one review */
  publishReview?: Maybe<Review>;
  /** Publish one tag */
  publishTag?: Maybe<Tag>;
  /** Schedule to publish one asset */
  schedulePublishAsset?: Maybe<Asset>;
  /** Schedule to publish one author */
  schedulePublishAuthor?: Maybe<Author>;
  /** Schedule to publish one keyword */
  schedulePublishKeyword?: Maybe<Keyword>;
  /** Schedule to publish one landingPage */
  schedulePublishLandingPage?: Maybe<LandingPage>;
  /** Schedule to publish one newLandingPage */
  schedulePublishNewLandingPage?: Maybe<NewLandingPage>;
  /** Schedule to publish one post */
  schedulePublishPost?: Maybe<Post>;
  /** Schedule to publish one privacyPolicy */
  schedulePublishPrivacyPolicy?: Maybe<PrivacyPolicy>;
  /** Schedule to publish one review */
  schedulePublishReview?: Maybe<Review>;
  /** Schedule to publish one tag */
  schedulePublishTag?: Maybe<Tag>;
  /** Unpublish one asset from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  scheduleUnpublishAsset?: Maybe<Asset>;
  /** Unpublish one author from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  scheduleUnpublishAuthor?: Maybe<Author>;
  /** Unpublish one keyword from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  scheduleUnpublishKeyword?: Maybe<Keyword>;
  /** Unpublish one landingPage from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  scheduleUnpublishLandingPage?: Maybe<LandingPage>;
  /** Unpublish one newLandingPage from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  scheduleUnpublishNewLandingPage?: Maybe<NewLandingPage>;
  /** Unpublish one post from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  scheduleUnpublishPost?: Maybe<Post>;
  /** Unpublish one privacyPolicy from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  scheduleUnpublishPrivacyPolicy?: Maybe<PrivacyPolicy>;
  /** Unpublish one review from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  scheduleUnpublishReview?: Maybe<Review>;
  /** Unpublish one tag from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  scheduleUnpublishTag?: Maybe<Tag>;
  /** Unpublish one asset from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  unpublishAsset?: Maybe<Asset>;
  /** Unpublish one author from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  unpublishAuthor?: Maybe<Author>;
  /** Unpublish one keyword from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  unpublishKeyword?: Maybe<Keyword>;
  /** Unpublish one landingPage from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  unpublishLandingPage?: Maybe<LandingPage>;
  /**
   * Unpublish many Asset documents
   * @deprecated Please use the new paginated many mutation (unpublishManyAssetsConnection)
   */
  unpublishManyAssets: BatchPayload;
  /** Find many Asset documents that match criteria in specified stage and unpublish from target stages */
  unpublishManyAssetsConnection: AssetConnection;
  /**
   * Unpublish many Author documents
   * @deprecated Please use the new paginated many mutation (unpublishManyAuthorsConnection)
   */
  unpublishManyAuthors: BatchPayload;
  /** Find many Author documents that match criteria in specified stage and unpublish from target stages */
  unpublishManyAuthorsConnection: AuthorConnection;
  /**
   * Unpublish many Keyword documents
   * @deprecated Please use the new paginated many mutation (unpublishManyKeywordsConnection)
   */
  unpublishManyKeywords: BatchPayload;
  /** Find many Keyword documents that match criteria in specified stage and unpublish from target stages */
  unpublishManyKeywordsConnection: KeywordConnection;
  /**
   * Unpublish many LandingPage documents
   * @deprecated Please use the new paginated many mutation (unpublishManyLandingPagesConnection)
   */
  unpublishManyLandingPages: BatchPayload;
  /** Find many LandingPage documents that match criteria in specified stage and unpublish from target stages */
  unpublishManyLandingPagesConnection: LandingPageConnection;
  /**
   * Unpublish many NewLandingPage documents
   * @deprecated Please use the new paginated many mutation (unpublishManyNewLandingPagesConnection)
   */
  unpublishManyNewLandingPages: BatchPayload;
  /** Find many NewLandingPage documents that match criteria in specified stage and unpublish from target stages */
  unpublishManyNewLandingPagesConnection: NewLandingPageConnection;
  /**
   * Unpublish many Post documents
   * @deprecated Please use the new paginated many mutation (unpublishManyPostsConnection)
   */
  unpublishManyPosts: BatchPayload;
  /** Find many Post documents that match criteria in specified stage and unpublish from target stages */
  unpublishManyPostsConnection: PostConnection;
  /**
   * Unpublish many PrivacyPolicy documents
   * @deprecated Please use the new paginated many mutation (unpublishManyPrivacyPoliciesConnection)
   */
  unpublishManyPrivacyPolicies: BatchPayload;
  /** Find many PrivacyPolicy documents that match criteria in specified stage and unpublish from target stages */
  unpublishManyPrivacyPoliciesConnection: PrivacyPolicyConnection;
  /**
   * Unpublish many Review documents
   * @deprecated Please use the new paginated many mutation (unpublishManyReviewsConnection)
   */
  unpublishManyReviews: BatchPayload;
  /** Find many Review documents that match criteria in specified stage and unpublish from target stages */
  unpublishManyReviewsConnection: ReviewConnection;
  /**
   * Unpublish many Tag documents
   * @deprecated Please use the new paginated many mutation (unpublishManyTagsConnection)
   */
  unpublishManyTags: BatchPayload;
  /** Find many Tag documents that match criteria in specified stage and unpublish from target stages */
  unpublishManyTagsConnection: TagConnection;
  /** Unpublish one newLandingPage from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  unpublishNewLandingPage?: Maybe<NewLandingPage>;
  /** Unpublish one post from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  unpublishPost?: Maybe<Post>;
  /** Unpublish one privacyPolicy from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  unpublishPrivacyPolicy?: Maybe<PrivacyPolicy>;
  /** Unpublish one review from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  unpublishReview?: Maybe<Review>;
  /** Unpublish one tag from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  unpublishTag?: Maybe<Tag>;
  /** Update one asset */
  updateAsset?: Maybe<Asset>;
  /** Update one author */
  updateAuthor?: Maybe<Author>;
  /** Update one keyword */
  updateKeyword?: Maybe<Keyword>;
  /** Update one landingPage */
  updateLandingPage?: Maybe<LandingPage>;
  /**
   * Update many assets
   * @deprecated Please use the new paginated many mutation (updateManyAssetsConnection)
   */
  updateManyAssets: BatchPayload;
  /** Update many Asset documents */
  updateManyAssetsConnection: AssetConnection;
  /**
   * Update many authors
   * @deprecated Please use the new paginated many mutation (updateManyAuthorsConnection)
   */
  updateManyAuthors: BatchPayload;
  /** Update many Author documents */
  updateManyAuthorsConnection: AuthorConnection;
  /**
   * Update many keywords
   * @deprecated Please use the new paginated many mutation (updateManyKeywordsConnection)
   */
  updateManyKeywords: BatchPayload;
  /** Update many Keyword documents */
  updateManyKeywordsConnection: KeywordConnection;
  /**
   * Update many landingPages
   * @deprecated Please use the new paginated many mutation (updateManyLandingPagesConnection)
   */
  updateManyLandingPages: BatchPayload;
  /** Update many LandingPage documents */
  updateManyLandingPagesConnection: LandingPageConnection;
  /**
   * Update many newLandingPages
   * @deprecated Please use the new paginated many mutation (updateManyNewLandingPagesConnection)
   */
  updateManyNewLandingPages: BatchPayload;
  /** Update many NewLandingPage documents */
  updateManyNewLandingPagesConnection: NewLandingPageConnection;
  /**
   * Update many posts
   * @deprecated Please use the new paginated many mutation (updateManyPostsConnection)
   */
  updateManyPosts: BatchPayload;
  /** Update many Post documents */
  updateManyPostsConnection: PostConnection;
  /**
   * Update many privacyPolicies
   * @deprecated Please use the new paginated many mutation (updateManyPrivacyPoliciesConnection)
   */
  updateManyPrivacyPolicies: BatchPayload;
  /** Update many PrivacyPolicy documents */
  updateManyPrivacyPoliciesConnection: PrivacyPolicyConnection;
  /**
   * Update many reviews
   * @deprecated Please use the new paginated many mutation (updateManyReviewsConnection)
   */
  updateManyReviews: BatchPayload;
  /** Update many Review documents */
  updateManyReviewsConnection: ReviewConnection;
  /**
   * Update many tags
   * @deprecated Please use the new paginated many mutation (updateManyTagsConnection)
   */
  updateManyTags: BatchPayload;
  /** Update many Tag documents */
  updateManyTagsConnection: TagConnection;
  /** Update one newLandingPage */
  updateNewLandingPage?: Maybe<NewLandingPage>;
  /** Update one post */
  updatePost?: Maybe<Post>;
  /** Update one privacyPolicy */
  updatePrivacyPolicy?: Maybe<PrivacyPolicy>;
  /** Update one review */
  updateReview?: Maybe<Review>;
  /** Update one scheduledRelease */
  updateScheduledRelease?: Maybe<ScheduledRelease>;
  /** Update one tag */
  updateTag?: Maybe<Tag>;
  /** Upsert one asset */
  upsertAsset?: Maybe<Asset>;
  /** Upsert one author */
  upsertAuthor?: Maybe<Author>;
  /** Upsert one keyword */
  upsertKeyword?: Maybe<Keyword>;
  /** Upsert one landingPage */
  upsertLandingPage?: Maybe<LandingPage>;
  /** Upsert one newLandingPage */
  upsertNewLandingPage?: Maybe<NewLandingPage>;
  /** Upsert one post */
  upsertPost?: Maybe<Post>;
  /** Upsert one privacyPolicy */
  upsertPrivacyPolicy?: Maybe<PrivacyPolicy>;
  /** Upsert one review */
  upsertReview?: Maybe<Review>;
  /** Upsert one tag */
  upsertTag?: Maybe<Tag>;
};


export type MutationCreateAssetArgs = {
  data: AssetCreateInput;
};


export type MutationCreateAuthorArgs = {
  data: AuthorCreateInput;
};


export type MutationCreateKeywordArgs = {
  data: KeywordCreateInput;
};


export type MutationCreateLandingPageArgs = {
  data: LandingPageCreateInput;
};


export type MutationCreateNewLandingPageArgs = {
  data: NewLandingPageCreateInput;
};


export type MutationCreatePostArgs = {
  data: PostCreateInput;
};


export type MutationCreatePrivacyPolicyArgs = {
  data: PrivacyPolicyCreateInput;
};


export type MutationCreateReviewArgs = {
  data: ReviewCreateInput;
};


export type MutationCreateScheduledReleaseArgs = {
  data: ScheduledReleaseCreateInput;
};


export type MutationCreateTagArgs = {
  data: TagCreateInput;
};


export type MutationDeleteAssetArgs = {
  where: AssetWhereUniqueInput;
};


export type MutationDeleteAuthorArgs = {
  where: AuthorWhereUniqueInput;
};


export type MutationDeleteKeywordArgs = {
  where: KeywordWhereUniqueInput;
};


export type MutationDeleteLandingPageArgs = {
  where: LandingPageWhereUniqueInput;
};


export type MutationDeleteManyAssetsArgs = {
  where?: InputMaybe<AssetManyWhereInput>;
};


export type MutationDeleteManyAssetsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']['input']>;
  before?: InputMaybe<Scalars['ID']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<AssetManyWhereInput>;
};


export type MutationDeleteManyAuthorsArgs = {
  where?: InputMaybe<AuthorManyWhereInput>;
};


export type MutationDeleteManyAuthorsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']['input']>;
  before?: InputMaybe<Scalars['ID']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<AuthorManyWhereInput>;
};


export type MutationDeleteManyKeywordsArgs = {
  where?: InputMaybe<KeywordManyWhereInput>;
};


export type MutationDeleteManyKeywordsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']['input']>;
  before?: InputMaybe<Scalars['ID']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<KeywordManyWhereInput>;
};


export type MutationDeleteManyLandingPagesArgs = {
  where?: InputMaybe<LandingPageManyWhereInput>;
};


export type MutationDeleteManyLandingPagesConnectionArgs = {
  after?: InputMaybe<Scalars['ID']['input']>;
  before?: InputMaybe<Scalars['ID']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<LandingPageManyWhereInput>;
};


export type MutationDeleteManyNewLandingPagesArgs = {
  where?: InputMaybe<NewLandingPageManyWhereInput>;
};


export type MutationDeleteManyNewLandingPagesConnectionArgs = {
  after?: InputMaybe<Scalars['ID']['input']>;
  before?: InputMaybe<Scalars['ID']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<NewLandingPageManyWhereInput>;
};


export type MutationDeleteManyPostsArgs = {
  where?: InputMaybe<PostManyWhereInput>;
};


export type MutationDeleteManyPostsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']['input']>;
  before?: InputMaybe<Scalars['ID']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<PostManyWhereInput>;
};


export type MutationDeleteManyPrivacyPoliciesArgs = {
  where?: InputMaybe<PrivacyPolicyManyWhereInput>;
};


export type MutationDeleteManyPrivacyPoliciesConnectionArgs = {
  after?: InputMaybe<Scalars['ID']['input']>;
  before?: InputMaybe<Scalars['ID']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<PrivacyPolicyManyWhereInput>;
};


export type MutationDeleteManyReviewsArgs = {
  where?: InputMaybe<ReviewManyWhereInput>;
};


export type MutationDeleteManyReviewsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']['input']>;
  before?: InputMaybe<Scalars['ID']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<ReviewManyWhereInput>;
};


export type MutationDeleteManyTagsArgs = {
  where?: InputMaybe<TagManyWhereInput>;
};


export type MutationDeleteManyTagsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']['input']>;
  before?: InputMaybe<Scalars['ID']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<TagManyWhereInput>;
};


export type MutationDeleteNewLandingPageArgs = {
  where: NewLandingPageWhereUniqueInput;
};


export type MutationDeletePostArgs = {
  where: PostWhereUniqueInput;
};


export type MutationDeletePrivacyPolicyArgs = {
  where: PrivacyPolicyWhereUniqueInput;
};


export type MutationDeleteReviewArgs = {
  where: ReviewWhereUniqueInput;
};


export type MutationDeleteScheduledOperationArgs = {
  where: ScheduledOperationWhereUniqueInput;
};


export type MutationDeleteScheduledReleaseArgs = {
  where: ScheduledReleaseWhereUniqueInput;
};


export type MutationDeleteTagArgs = {
  where: TagWhereUniqueInput;
};


export type MutationPublishAssetArgs = {
  locales?: InputMaybe<Array<Locale>>;
  publishBase?: InputMaybe<Scalars['Boolean']['input']>;
  to?: Array<Stage>;
  where: AssetWhereUniqueInput;
  withDefaultLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationPublishAuthorArgs = {
  to?: Array<Stage>;
  where: AuthorWhereUniqueInput;
};


export type MutationPublishKeywordArgs = {
  to?: Array<Stage>;
  where: KeywordWhereUniqueInput;
};


export type MutationPublishLandingPageArgs = {
  to?: Array<Stage>;
  where: LandingPageWhereUniqueInput;
};


export type MutationPublishManyAssetsArgs = {
  locales?: InputMaybe<Array<Locale>>;
  publishBase?: InputMaybe<Scalars['Boolean']['input']>;
  to?: Array<Stage>;
  where?: InputMaybe<AssetManyWhereInput>;
  withDefaultLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationPublishManyAssetsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']['input']>;
  before?: InputMaybe<Scalars['ID']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  from?: InputMaybe<Stage>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: InputMaybe<Array<Locale>>;
  publishBase?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  to?: Array<Stage>;
  where?: InputMaybe<AssetManyWhereInput>;
  withDefaultLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationPublishManyAuthorsArgs = {
  to?: Array<Stage>;
  where?: InputMaybe<AuthorManyWhereInput>;
};


export type MutationPublishManyAuthorsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']['input']>;
  before?: InputMaybe<Scalars['ID']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  from?: InputMaybe<Stage>;
  last?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  to?: Array<Stage>;
  where?: InputMaybe<AuthorManyWhereInput>;
};


export type MutationPublishManyKeywordsArgs = {
  to?: Array<Stage>;
  where?: InputMaybe<KeywordManyWhereInput>;
};


export type MutationPublishManyKeywordsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']['input']>;
  before?: InputMaybe<Scalars['ID']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  from?: InputMaybe<Stage>;
  last?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  to?: Array<Stage>;
  where?: InputMaybe<KeywordManyWhereInput>;
};


export type MutationPublishManyLandingPagesArgs = {
  to?: Array<Stage>;
  where?: InputMaybe<LandingPageManyWhereInput>;
};


export type MutationPublishManyLandingPagesConnectionArgs = {
  after?: InputMaybe<Scalars['ID']['input']>;
  before?: InputMaybe<Scalars['ID']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  from?: InputMaybe<Stage>;
  last?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  to?: Array<Stage>;
  where?: InputMaybe<LandingPageManyWhereInput>;
};


export type MutationPublishManyNewLandingPagesArgs = {
  locales?: InputMaybe<Array<Locale>>;
  publishBase?: InputMaybe<Scalars['Boolean']['input']>;
  to?: Array<Stage>;
  where?: InputMaybe<NewLandingPageManyWhereInput>;
  withDefaultLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationPublishManyNewLandingPagesConnectionArgs = {
  after?: InputMaybe<Scalars['ID']['input']>;
  before?: InputMaybe<Scalars['ID']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  from?: InputMaybe<Stage>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: InputMaybe<Array<Locale>>;
  publishBase?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  to?: Array<Stage>;
  where?: InputMaybe<NewLandingPageManyWhereInput>;
  withDefaultLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationPublishManyPostsArgs = {
  to?: Array<Stage>;
  where?: InputMaybe<PostManyWhereInput>;
};


export type MutationPublishManyPostsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']['input']>;
  before?: InputMaybe<Scalars['ID']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  from?: InputMaybe<Stage>;
  last?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  to?: Array<Stage>;
  where?: InputMaybe<PostManyWhereInput>;
};


export type MutationPublishManyPrivacyPoliciesArgs = {
  locales?: InputMaybe<Array<Locale>>;
  publishBase?: InputMaybe<Scalars['Boolean']['input']>;
  to?: Array<Stage>;
  where?: InputMaybe<PrivacyPolicyManyWhereInput>;
  withDefaultLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationPublishManyPrivacyPoliciesConnectionArgs = {
  after?: InputMaybe<Scalars['ID']['input']>;
  before?: InputMaybe<Scalars['ID']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  from?: InputMaybe<Stage>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: InputMaybe<Array<Locale>>;
  publishBase?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  to?: Array<Stage>;
  where?: InputMaybe<PrivacyPolicyManyWhereInput>;
  withDefaultLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationPublishManyReviewsArgs = {
  locales?: InputMaybe<Array<Locale>>;
  publishBase?: InputMaybe<Scalars['Boolean']['input']>;
  to?: Array<Stage>;
  where?: InputMaybe<ReviewManyWhereInput>;
  withDefaultLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationPublishManyReviewsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']['input']>;
  before?: InputMaybe<Scalars['ID']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  from?: InputMaybe<Stage>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: InputMaybe<Array<Locale>>;
  publishBase?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  to?: Array<Stage>;
  where?: InputMaybe<ReviewManyWhereInput>;
  withDefaultLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationPublishManyTagsArgs = {
  to?: Array<Stage>;
  where?: InputMaybe<TagManyWhereInput>;
};


export type MutationPublishManyTagsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']['input']>;
  before?: InputMaybe<Scalars['ID']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  from?: InputMaybe<Stage>;
  last?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  to?: Array<Stage>;
  where?: InputMaybe<TagManyWhereInput>;
};


export type MutationPublishNewLandingPageArgs = {
  locales?: InputMaybe<Array<Locale>>;
  publishBase?: InputMaybe<Scalars['Boolean']['input']>;
  to?: Array<Stage>;
  where: NewLandingPageWhereUniqueInput;
  withDefaultLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationPublishPostArgs = {
  to?: Array<Stage>;
  where: PostWhereUniqueInput;
};


export type MutationPublishPrivacyPolicyArgs = {
  locales?: InputMaybe<Array<Locale>>;
  publishBase?: InputMaybe<Scalars['Boolean']['input']>;
  to?: Array<Stage>;
  where: PrivacyPolicyWhereUniqueInput;
  withDefaultLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationPublishReviewArgs = {
  locales?: InputMaybe<Array<Locale>>;
  publishBase?: InputMaybe<Scalars['Boolean']['input']>;
  to?: Array<Stage>;
  where: ReviewWhereUniqueInput;
  withDefaultLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationPublishTagArgs = {
  to?: Array<Stage>;
  where: TagWhereUniqueInput;
};


export type MutationSchedulePublishAssetArgs = {
  locales?: InputMaybe<Array<Locale>>;
  publishBase?: InputMaybe<Scalars['Boolean']['input']>;
  releaseAt?: InputMaybe<Scalars['DateTime']['input']>;
  releaseId?: InputMaybe<Scalars['String']['input']>;
  to?: Array<Stage>;
  where: AssetWhereUniqueInput;
  withDefaultLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationSchedulePublishAuthorArgs = {
  releaseAt?: InputMaybe<Scalars['DateTime']['input']>;
  releaseId?: InputMaybe<Scalars['String']['input']>;
  to?: Array<Stage>;
  where: AuthorWhereUniqueInput;
};


export type MutationSchedulePublishKeywordArgs = {
  releaseAt?: InputMaybe<Scalars['DateTime']['input']>;
  releaseId?: InputMaybe<Scalars['String']['input']>;
  to?: Array<Stage>;
  where: KeywordWhereUniqueInput;
};


export type MutationSchedulePublishLandingPageArgs = {
  releaseAt?: InputMaybe<Scalars['DateTime']['input']>;
  releaseId?: InputMaybe<Scalars['String']['input']>;
  to?: Array<Stage>;
  where: LandingPageWhereUniqueInput;
};


export type MutationSchedulePublishNewLandingPageArgs = {
  locales?: InputMaybe<Array<Locale>>;
  publishBase?: InputMaybe<Scalars['Boolean']['input']>;
  releaseAt?: InputMaybe<Scalars['DateTime']['input']>;
  releaseId?: InputMaybe<Scalars['String']['input']>;
  to?: Array<Stage>;
  where: NewLandingPageWhereUniqueInput;
  withDefaultLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationSchedulePublishPostArgs = {
  releaseAt?: InputMaybe<Scalars['DateTime']['input']>;
  releaseId?: InputMaybe<Scalars['String']['input']>;
  to?: Array<Stage>;
  where: PostWhereUniqueInput;
};


export type MutationSchedulePublishPrivacyPolicyArgs = {
  locales?: InputMaybe<Array<Locale>>;
  publishBase?: InputMaybe<Scalars['Boolean']['input']>;
  releaseAt?: InputMaybe<Scalars['DateTime']['input']>;
  releaseId?: InputMaybe<Scalars['String']['input']>;
  to?: Array<Stage>;
  where: PrivacyPolicyWhereUniqueInput;
  withDefaultLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationSchedulePublishReviewArgs = {
  locales?: InputMaybe<Array<Locale>>;
  publishBase?: InputMaybe<Scalars['Boolean']['input']>;
  releaseAt?: InputMaybe<Scalars['DateTime']['input']>;
  releaseId?: InputMaybe<Scalars['String']['input']>;
  to?: Array<Stage>;
  where: ReviewWhereUniqueInput;
  withDefaultLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationSchedulePublishTagArgs = {
  releaseAt?: InputMaybe<Scalars['DateTime']['input']>;
  releaseId?: InputMaybe<Scalars['String']['input']>;
  to?: Array<Stage>;
  where: TagWhereUniqueInput;
};


export type MutationScheduleUnpublishAssetArgs = {
  from?: Array<Stage>;
  locales?: InputMaybe<Array<Locale>>;
  releaseAt?: InputMaybe<Scalars['DateTime']['input']>;
  releaseId?: InputMaybe<Scalars['String']['input']>;
  unpublishBase?: InputMaybe<Scalars['Boolean']['input']>;
  where: AssetWhereUniqueInput;
};


export type MutationScheduleUnpublishAuthorArgs = {
  from?: Array<Stage>;
  releaseAt?: InputMaybe<Scalars['DateTime']['input']>;
  releaseId?: InputMaybe<Scalars['String']['input']>;
  where: AuthorWhereUniqueInput;
};


export type MutationScheduleUnpublishKeywordArgs = {
  from?: Array<Stage>;
  releaseAt?: InputMaybe<Scalars['DateTime']['input']>;
  releaseId?: InputMaybe<Scalars['String']['input']>;
  where: KeywordWhereUniqueInput;
};


export type MutationScheduleUnpublishLandingPageArgs = {
  from?: Array<Stage>;
  releaseAt?: InputMaybe<Scalars['DateTime']['input']>;
  releaseId?: InputMaybe<Scalars['String']['input']>;
  where: LandingPageWhereUniqueInput;
};


export type MutationScheduleUnpublishNewLandingPageArgs = {
  from?: Array<Stage>;
  locales?: InputMaybe<Array<Locale>>;
  releaseAt?: InputMaybe<Scalars['DateTime']['input']>;
  releaseId?: InputMaybe<Scalars['String']['input']>;
  unpublishBase?: InputMaybe<Scalars['Boolean']['input']>;
  where: NewLandingPageWhereUniqueInput;
};


export type MutationScheduleUnpublishPostArgs = {
  from?: Array<Stage>;
  releaseAt?: InputMaybe<Scalars['DateTime']['input']>;
  releaseId?: InputMaybe<Scalars['String']['input']>;
  where: PostWhereUniqueInput;
};


export type MutationScheduleUnpublishPrivacyPolicyArgs = {
  from?: Array<Stage>;
  locales?: InputMaybe<Array<Locale>>;
  releaseAt?: InputMaybe<Scalars['DateTime']['input']>;
  releaseId?: InputMaybe<Scalars['String']['input']>;
  unpublishBase?: InputMaybe<Scalars['Boolean']['input']>;
  where: PrivacyPolicyWhereUniqueInput;
};


export type MutationScheduleUnpublishReviewArgs = {
  from?: Array<Stage>;
  locales?: InputMaybe<Array<Locale>>;
  releaseAt?: InputMaybe<Scalars['DateTime']['input']>;
  releaseId?: InputMaybe<Scalars['String']['input']>;
  unpublishBase?: InputMaybe<Scalars['Boolean']['input']>;
  where: ReviewWhereUniqueInput;
};


export type MutationScheduleUnpublishTagArgs = {
  from?: Array<Stage>;
  releaseAt?: InputMaybe<Scalars['DateTime']['input']>;
  releaseId?: InputMaybe<Scalars['String']['input']>;
  where: TagWhereUniqueInput;
};


export type MutationUnpublishAssetArgs = {
  from?: Array<Stage>;
  locales?: InputMaybe<Array<Locale>>;
  unpublishBase?: InputMaybe<Scalars['Boolean']['input']>;
  where: AssetWhereUniqueInput;
};


export type MutationUnpublishAuthorArgs = {
  from?: Array<Stage>;
  where: AuthorWhereUniqueInput;
};


export type MutationUnpublishKeywordArgs = {
  from?: Array<Stage>;
  where: KeywordWhereUniqueInput;
};


export type MutationUnpublishLandingPageArgs = {
  from?: Array<Stage>;
  where: LandingPageWhereUniqueInput;
};


export type MutationUnpublishManyAssetsArgs = {
  from?: Array<Stage>;
  locales?: InputMaybe<Array<Locale>>;
  unpublishBase?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<AssetManyWhereInput>;
};


export type MutationUnpublishManyAssetsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']['input']>;
  before?: InputMaybe<Scalars['ID']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  from?: Array<Stage>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: InputMaybe<Array<Locale>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  stage?: InputMaybe<Stage>;
  unpublishBase?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<AssetManyWhereInput>;
};


export type MutationUnpublishManyAuthorsArgs = {
  from?: Array<Stage>;
  where?: InputMaybe<AuthorManyWhereInput>;
};


export type MutationUnpublishManyAuthorsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']['input']>;
  before?: InputMaybe<Scalars['ID']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  from?: Array<Stage>;
  last?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  stage?: InputMaybe<Stage>;
  where?: InputMaybe<AuthorManyWhereInput>;
};


export type MutationUnpublishManyKeywordsArgs = {
  from?: Array<Stage>;
  where?: InputMaybe<KeywordManyWhereInput>;
};


export type MutationUnpublishManyKeywordsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']['input']>;
  before?: InputMaybe<Scalars['ID']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  from?: Array<Stage>;
  last?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  stage?: InputMaybe<Stage>;
  where?: InputMaybe<KeywordManyWhereInput>;
};


export type MutationUnpublishManyLandingPagesArgs = {
  from?: Array<Stage>;
  where?: InputMaybe<LandingPageManyWhereInput>;
};


export type MutationUnpublishManyLandingPagesConnectionArgs = {
  after?: InputMaybe<Scalars['ID']['input']>;
  before?: InputMaybe<Scalars['ID']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  from?: Array<Stage>;
  last?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  stage?: InputMaybe<Stage>;
  where?: InputMaybe<LandingPageManyWhereInput>;
};


export type MutationUnpublishManyNewLandingPagesArgs = {
  from?: Array<Stage>;
  locales?: InputMaybe<Array<Locale>>;
  unpublishBase?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<NewLandingPageManyWhereInput>;
};


export type MutationUnpublishManyNewLandingPagesConnectionArgs = {
  after?: InputMaybe<Scalars['ID']['input']>;
  before?: InputMaybe<Scalars['ID']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  from?: Array<Stage>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: InputMaybe<Array<Locale>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  stage?: InputMaybe<Stage>;
  unpublishBase?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<NewLandingPageManyWhereInput>;
};


export type MutationUnpublishManyPostsArgs = {
  from?: Array<Stage>;
  where?: InputMaybe<PostManyWhereInput>;
};


export type MutationUnpublishManyPostsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']['input']>;
  before?: InputMaybe<Scalars['ID']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  from?: Array<Stage>;
  last?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  stage?: InputMaybe<Stage>;
  where?: InputMaybe<PostManyWhereInput>;
};


export type MutationUnpublishManyPrivacyPoliciesArgs = {
  from?: Array<Stage>;
  locales?: InputMaybe<Array<Locale>>;
  unpublishBase?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<PrivacyPolicyManyWhereInput>;
};


export type MutationUnpublishManyPrivacyPoliciesConnectionArgs = {
  after?: InputMaybe<Scalars['ID']['input']>;
  before?: InputMaybe<Scalars['ID']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  from?: Array<Stage>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: InputMaybe<Array<Locale>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  stage?: InputMaybe<Stage>;
  unpublishBase?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<PrivacyPolicyManyWhereInput>;
};


export type MutationUnpublishManyReviewsArgs = {
  from?: Array<Stage>;
  locales?: InputMaybe<Array<Locale>>;
  unpublishBase?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<ReviewManyWhereInput>;
};


export type MutationUnpublishManyReviewsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']['input']>;
  before?: InputMaybe<Scalars['ID']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  from?: Array<Stage>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: InputMaybe<Array<Locale>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  stage?: InputMaybe<Stage>;
  unpublishBase?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<ReviewManyWhereInput>;
};


export type MutationUnpublishManyTagsArgs = {
  from?: Array<Stage>;
  where?: InputMaybe<TagManyWhereInput>;
};


export type MutationUnpublishManyTagsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']['input']>;
  before?: InputMaybe<Scalars['ID']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  from?: Array<Stage>;
  last?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  stage?: InputMaybe<Stage>;
  where?: InputMaybe<TagManyWhereInput>;
};


export type MutationUnpublishNewLandingPageArgs = {
  from?: Array<Stage>;
  locales?: InputMaybe<Array<Locale>>;
  unpublishBase?: InputMaybe<Scalars['Boolean']['input']>;
  where: NewLandingPageWhereUniqueInput;
};


export type MutationUnpublishPostArgs = {
  from?: Array<Stage>;
  where: PostWhereUniqueInput;
};


export type MutationUnpublishPrivacyPolicyArgs = {
  from?: Array<Stage>;
  locales?: InputMaybe<Array<Locale>>;
  unpublishBase?: InputMaybe<Scalars['Boolean']['input']>;
  where: PrivacyPolicyWhereUniqueInput;
};


export type MutationUnpublishReviewArgs = {
  from?: Array<Stage>;
  locales?: InputMaybe<Array<Locale>>;
  unpublishBase?: InputMaybe<Scalars['Boolean']['input']>;
  where: ReviewWhereUniqueInput;
};


export type MutationUnpublishTagArgs = {
  from?: Array<Stage>;
  where: TagWhereUniqueInput;
};


export type MutationUpdateAssetArgs = {
  data: AssetUpdateInput;
  where: AssetWhereUniqueInput;
};


export type MutationUpdateAuthorArgs = {
  data: AuthorUpdateInput;
  where: AuthorWhereUniqueInput;
};


export type MutationUpdateKeywordArgs = {
  data: KeywordUpdateInput;
  where: KeywordWhereUniqueInput;
};


export type MutationUpdateLandingPageArgs = {
  data: LandingPageUpdateInput;
  where: LandingPageWhereUniqueInput;
};


export type MutationUpdateManyAssetsArgs = {
  data: AssetUpdateManyInput;
  where?: InputMaybe<AssetManyWhereInput>;
};


export type MutationUpdateManyAssetsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']['input']>;
  before?: InputMaybe<Scalars['ID']['input']>;
  data: AssetUpdateManyInput;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<AssetManyWhereInput>;
};


export type MutationUpdateManyAuthorsArgs = {
  data: AuthorUpdateManyInput;
  where?: InputMaybe<AuthorManyWhereInput>;
};


export type MutationUpdateManyAuthorsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']['input']>;
  before?: InputMaybe<Scalars['ID']['input']>;
  data: AuthorUpdateManyInput;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<AuthorManyWhereInput>;
};


export type MutationUpdateManyKeywordsArgs = {
  data: KeywordUpdateManyInput;
  where?: InputMaybe<KeywordManyWhereInput>;
};


export type MutationUpdateManyKeywordsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']['input']>;
  before?: InputMaybe<Scalars['ID']['input']>;
  data: KeywordUpdateManyInput;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<KeywordManyWhereInput>;
};


export type MutationUpdateManyLandingPagesArgs = {
  data: LandingPageUpdateManyInput;
  where?: InputMaybe<LandingPageManyWhereInput>;
};


export type MutationUpdateManyLandingPagesConnectionArgs = {
  after?: InputMaybe<Scalars['ID']['input']>;
  before?: InputMaybe<Scalars['ID']['input']>;
  data: LandingPageUpdateManyInput;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<LandingPageManyWhereInput>;
};


export type MutationUpdateManyNewLandingPagesArgs = {
  data: NewLandingPageUpdateManyInput;
  where?: InputMaybe<NewLandingPageManyWhereInput>;
};


export type MutationUpdateManyNewLandingPagesConnectionArgs = {
  after?: InputMaybe<Scalars['ID']['input']>;
  before?: InputMaybe<Scalars['ID']['input']>;
  data: NewLandingPageUpdateManyInput;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<NewLandingPageManyWhereInput>;
};


export type MutationUpdateManyPostsArgs = {
  data: PostUpdateManyInput;
  where?: InputMaybe<PostManyWhereInput>;
};


export type MutationUpdateManyPostsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']['input']>;
  before?: InputMaybe<Scalars['ID']['input']>;
  data: PostUpdateManyInput;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<PostManyWhereInput>;
};


export type MutationUpdateManyPrivacyPoliciesArgs = {
  data: PrivacyPolicyUpdateManyInput;
  where?: InputMaybe<PrivacyPolicyManyWhereInput>;
};


export type MutationUpdateManyPrivacyPoliciesConnectionArgs = {
  after?: InputMaybe<Scalars['ID']['input']>;
  before?: InputMaybe<Scalars['ID']['input']>;
  data: PrivacyPolicyUpdateManyInput;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<PrivacyPolicyManyWhereInput>;
};


export type MutationUpdateManyReviewsArgs = {
  data: ReviewUpdateManyInput;
  where?: InputMaybe<ReviewManyWhereInput>;
};


export type MutationUpdateManyReviewsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']['input']>;
  before?: InputMaybe<Scalars['ID']['input']>;
  data: ReviewUpdateManyInput;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<ReviewManyWhereInput>;
};


export type MutationUpdateManyTagsArgs = {
  data: TagUpdateManyInput;
  where?: InputMaybe<TagManyWhereInput>;
};


export type MutationUpdateManyTagsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']['input']>;
  before?: InputMaybe<Scalars['ID']['input']>;
  data: TagUpdateManyInput;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<TagManyWhereInput>;
};


export type MutationUpdateNewLandingPageArgs = {
  data: NewLandingPageUpdateInput;
  where: NewLandingPageWhereUniqueInput;
};


export type MutationUpdatePostArgs = {
  data: PostUpdateInput;
  where: PostWhereUniqueInput;
};


export type MutationUpdatePrivacyPolicyArgs = {
  data: PrivacyPolicyUpdateInput;
  where: PrivacyPolicyWhereUniqueInput;
};


export type MutationUpdateReviewArgs = {
  data: ReviewUpdateInput;
  where: ReviewWhereUniqueInput;
};


export type MutationUpdateScheduledReleaseArgs = {
  data: ScheduledReleaseUpdateInput;
  where: ScheduledReleaseWhereUniqueInput;
};


export type MutationUpdateTagArgs = {
  data: TagUpdateInput;
  where: TagWhereUniqueInput;
};


export type MutationUpsertAssetArgs = {
  upsert: AssetUpsertInput;
  where: AssetWhereUniqueInput;
};


export type MutationUpsertAuthorArgs = {
  upsert: AuthorUpsertInput;
  where: AuthorWhereUniqueInput;
};


export type MutationUpsertKeywordArgs = {
  upsert: KeywordUpsertInput;
  where: KeywordWhereUniqueInput;
};


export type MutationUpsertLandingPageArgs = {
  upsert: LandingPageUpsertInput;
  where: LandingPageWhereUniqueInput;
};


export type MutationUpsertNewLandingPageArgs = {
  upsert: NewLandingPageUpsertInput;
  where: NewLandingPageWhereUniqueInput;
};


export type MutationUpsertPostArgs = {
  upsert: PostUpsertInput;
  where: PostWhereUniqueInput;
};


export type MutationUpsertPrivacyPolicyArgs = {
  upsert: PrivacyPolicyUpsertInput;
  where: PrivacyPolicyWhereUniqueInput;
};


export type MutationUpsertReviewArgs = {
  upsert: ReviewUpsertInput;
  where: ReviewWhereUniqueInput;
};


export type MutationUpsertTagArgs = {
  upsert: TagUpsertInput;
  where: TagWhereUniqueInput;
};

/** This New Landing Page Contains the data of the "sensoriumarte/${slug}"  */
export type NewLandingPage = Entity & Node & {
  __typename?: 'NewLandingPage';
  averageRating: Scalars['Float']['output'];
  categoryShowcase?: Maybe<CategorySection>;
  /** The time the document was created */
  createdAt: Scalars['DateTime']['output'];
  /** User that created this document */
  createdBy?: Maybe<User>;
  /** Get the document in other stages */
  documentInStages: Array<NewLandingPage>;
  faqSection?: Maybe<Faq>;
  heroCtaButton1: Scalars['String']['output'];
  heroCtaButton2: Scalars['String']['output'];
  heroCtaButtonRedirectUrl?: Maybe<Scalars['String']['output']>;
  /** The description below the heroTitle */
  heroDescription: Scalars['String']['output'];
  heroFeatureList: Array<HomeFeaturePoint>;
  /** Upload the image or video only which will be shown in the hero section */
  heroSectionAsest: Asset;
  heroSectionUspsDescription?: Maybe<Scalars['String']['output']>;
  /** This will contain the main title which has been shown on the hero banner */
  heroTitle: Scalars['String']['output'];
  heroUspsTilte?: Maybe<Scalars['String']['output']>;
  /** List of NewLandingPage versions */
  history: Array<Version>;
  howItsWorkCta?: Maybe<Scalars['String']['output']>;
  howItsWorkDetail: Array<HowItsWorkDetail>;
  howItsWorkHeadline?: Maybe<Scalars['String']['output']>;
  /** The unique identifier */
  id: Scalars['ID']['output'];
  /** System Locale field */
  locale: Locale;
  /** Get the other localizations for this document */
  localizations: Array<NewLandingPage>;
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  /** User that last published this document */
  publishedBy?: Maybe<User>;
  relatedTemplatesSection?: Maybe<RelatedLandingPageTemplate>;
  reviewsCounts: Scalars['Int']['output'];
  scheduledIn: Array<ScheduledOperation>;
  sensoriumUsps?: Maybe<WhySensoriumUsp>;
  /** This title will be shown to the home page popular occasion section */
  shortTitle?: Maybe<Scalars['String']['output']>;
  /** This will contain the url name from which the page will open */
  slug?: Maybe<Scalars['String']['output']>;
  /** System stage field */
  stage: Stage;
  /** The time the document was updated */
  updatedAt: Scalars['DateTime']['output'];
  /** User that last updated this document */
  updatedBy?: Maybe<User>;
};


/** This New Landing Page Contains the data of the "sensoriumarte/${slug}"  */
export type NewLandingPageCategoryShowcaseArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  locales?: InputMaybe<Array<Locale>>;
};


/** This New Landing Page Contains the data of the "sensoriumarte/${slug}"  */
export type NewLandingPageCreatedAtArgs = {
  variation?: SystemDateTimeFieldVariation;
};


/** This New Landing Page Contains the data of the "sensoriumarte/${slug}"  */
export type NewLandingPageCreatedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  locales?: InputMaybe<Array<Locale>>;
};


/** This New Landing Page Contains the data of the "sensoriumarte/${slug}"  */
export type NewLandingPageDocumentInStagesArgs = {
  includeCurrent?: Scalars['Boolean']['input'];
  inheritLocale?: Scalars['Boolean']['input'];
  stages?: Array<Stage>;
};


/** This New Landing Page Contains the data of the "sensoriumarte/${slug}"  */
export type NewLandingPageFaqSectionArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  locales?: InputMaybe<Array<Locale>>;
};


/** This New Landing Page Contains the data of the "sensoriumarte/${slug}"  */
export type NewLandingPageHeroFeatureListArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: InputMaybe<Array<Locale>>;
  orderBy?: InputMaybe<HomeFeaturePointOrderByInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<HomeFeaturePointWhereInput>;
};


/** This New Landing Page Contains the data of the "sensoriumarte/${slug}"  */
export type NewLandingPageHeroSectionAsestArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  locales?: InputMaybe<Array<Locale>>;
};


/** This New Landing Page Contains the data of the "sensoriumarte/${slug}"  */
export type NewLandingPageHistoryArgs = {
  limit?: Scalars['Int']['input'];
  skip?: Scalars['Int']['input'];
  stageOverride?: InputMaybe<Stage>;
};


/** This New Landing Page Contains the data of the "sensoriumarte/${slug}"  */
export type NewLandingPageHowItsWorkDetailArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: InputMaybe<Array<Locale>>;
  orderBy?: InputMaybe<HowItsWorkDetailOrderByInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<HowItsWorkDetailWhereInput>;
};


/** This New Landing Page Contains the data of the "sensoriumarte/${slug}"  */
export type NewLandingPageLocalizationsArgs = {
  includeCurrent?: Scalars['Boolean']['input'];
  locales?: Array<Locale>;
};


/** This New Landing Page Contains the data of the "sensoriumarte/${slug}"  */
export type NewLandingPagePublishedAtArgs = {
  variation?: SystemDateTimeFieldVariation;
};


/** This New Landing Page Contains the data of the "sensoriumarte/${slug}"  */
export type NewLandingPagePublishedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  locales?: InputMaybe<Array<Locale>>;
};


/** This New Landing Page Contains the data of the "sensoriumarte/${slug}"  */
export type NewLandingPageRelatedTemplatesSectionArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  locales?: InputMaybe<Array<Locale>>;
};


/** This New Landing Page Contains the data of the "sensoriumarte/${slug}"  */
export type NewLandingPageScheduledInArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: InputMaybe<Array<Locale>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<ScheduledOperationWhereInput>;
};


/** This New Landing Page Contains the data of the "sensoriumarte/${slug}"  */
export type NewLandingPageSensoriumUspsArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  locales?: InputMaybe<Array<Locale>>;
};


/** This New Landing Page Contains the data of the "sensoriumarte/${slug}"  */
export type NewLandingPageUpdatedAtArgs = {
  variation?: SystemDateTimeFieldVariation;
};


/** This New Landing Page Contains the data of the "sensoriumarte/${slug}"  */
export type NewLandingPageUpdatedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  locales?: InputMaybe<Array<Locale>>;
};

export type NewLandingPageConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Document to connect */
  where: NewLandingPageWhereUniqueInput;
};

/** A connection to a list of items. */
export type NewLandingPageConnection = {
  __typename?: 'NewLandingPageConnection';
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<NewLandingPageEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type NewLandingPageCreateInput = {
  averageRating: Scalars['Float']['input'];
  categoryShowcase?: InputMaybe<CategorySectionCreateOneInlineInput>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  faqSection?: InputMaybe<FaqCreateOneInlineInput>;
  /** heroCtaButton1 input for default locale (en) */
  heroCtaButton1: Scalars['String']['input'];
  /** heroCtaButton2 input for default locale (en) */
  heroCtaButton2: Scalars['String']['input'];
  heroCtaButtonRedirectUrl?: InputMaybe<Scalars['String']['input']>;
  /** heroDescription input for default locale (en) */
  heroDescription: Scalars['String']['input'];
  heroFeatureList?: InputMaybe<HomeFeaturePointCreateManyInlineInput>;
  heroSectionAsest: AssetCreateOneInlineInput;
  /** heroSectionUspsDescription input for default locale (en) */
  heroSectionUspsDescription?: InputMaybe<Scalars['String']['input']>;
  /** heroTitle input for default locale (en) */
  heroTitle: Scalars['String']['input'];
  /** heroUspsTilte input for default locale (en) */
  heroUspsTilte?: InputMaybe<Scalars['String']['input']>;
  /** howItsWorkCta input for default locale (en) */
  howItsWorkCta?: InputMaybe<Scalars['String']['input']>;
  howItsWorkDetail?: InputMaybe<HowItsWorkDetailCreateManyInlineInput>;
  /** howItsWorkHeadline input for default locale (en) */
  howItsWorkHeadline?: InputMaybe<Scalars['String']['input']>;
  /** Inline mutations for managing document localizations excluding the default locale */
  localizations?: InputMaybe<NewLandingPageCreateLocalizationsInput>;
  relatedTemplatesSection?: InputMaybe<RelatedLandingPageTemplateCreateOneInlineInput>;
  reviewsCounts: Scalars['Int']['input'];
  sensoriumUsps?: InputMaybe<WhySensoriumUspCreateOneInlineInput>;
  /** shortTitle input for default locale (en) */
  shortTitle?: InputMaybe<Scalars['String']['input']>;
  /** slug input for default locale (en) */
  slug?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type NewLandingPageCreateLocalizationDataInput = {
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  heroCtaButton1: Scalars['String']['input'];
  heroCtaButton2: Scalars['String']['input'];
  heroDescription: Scalars['String']['input'];
  heroSectionUspsDescription?: InputMaybe<Scalars['String']['input']>;
  heroTitle: Scalars['String']['input'];
  heroUspsTilte?: InputMaybe<Scalars['String']['input']>;
  howItsWorkCta?: InputMaybe<Scalars['String']['input']>;
  howItsWorkHeadline?: InputMaybe<Scalars['String']['input']>;
  shortTitle?: InputMaybe<Scalars['String']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type NewLandingPageCreateLocalizationInput = {
  /** Localization input */
  data: NewLandingPageCreateLocalizationDataInput;
  locale: Locale;
};

export type NewLandingPageCreateLocalizationsInput = {
  /** Create localizations for the newly-created document */
  create?: InputMaybe<Array<NewLandingPageCreateLocalizationInput>>;
};

export type NewLandingPageCreateManyInlineInput = {
  /** Connect multiple existing NewLandingPage documents */
  connect?: InputMaybe<Array<NewLandingPageWhereUniqueInput>>;
  /** Create and connect multiple existing NewLandingPage documents */
  create?: InputMaybe<Array<NewLandingPageCreateInput>>;
};

export type NewLandingPageCreateOneInlineInput = {
  /** Connect one existing NewLandingPage document */
  connect?: InputMaybe<NewLandingPageWhereUniqueInput>;
  /** Create and connect one NewLandingPage document */
  create?: InputMaybe<NewLandingPageCreateInput>;
};

/** An edge in a connection. */
export type NewLandingPageEdge = {
  __typename?: 'NewLandingPageEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: NewLandingPage;
};

/** Identifies documents */
export type NewLandingPageManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<NewLandingPageWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<NewLandingPageWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<NewLandingPageWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']['input']>;
  averageRating?: InputMaybe<Scalars['Float']['input']>;
  /** All values greater than the given value. */
  averageRating_gt?: InputMaybe<Scalars['Float']['input']>;
  /** All values greater than or equal the given value. */
  averageRating_gte?: InputMaybe<Scalars['Float']['input']>;
  /** All values that are contained in given list. */
  averageRating_in?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  /** All values less than the given value. */
  averageRating_lt?: InputMaybe<Scalars['Float']['input']>;
  /** All values less than or equal the given value. */
  averageRating_lte?: InputMaybe<Scalars['Float']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  averageRating_not?: InputMaybe<Scalars['Float']['input']>;
  /** All values that are not contained in given list. */
  averageRating_not_in?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  categoryShowcase?: InputMaybe<CategorySectionWhereInput>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  createdBy?: InputMaybe<UserWhereInput>;
  documentInStages_every?: InputMaybe<NewLandingPageWhereStageInput>;
  documentInStages_none?: InputMaybe<NewLandingPageWhereStageInput>;
  documentInStages_some?: InputMaybe<NewLandingPageWhereStageInput>;
  faqSection?: InputMaybe<FaqWhereInput>;
  heroCtaButtonRedirectUrl?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  heroCtaButtonRedirectUrl_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  heroCtaButtonRedirectUrl_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  heroCtaButtonRedirectUrl_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  heroCtaButtonRedirectUrl_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  heroCtaButtonRedirectUrl_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  heroCtaButtonRedirectUrl_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  heroCtaButtonRedirectUrl_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  heroCtaButtonRedirectUrl_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  heroCtaButtonRedirectUrl_starts_with?: InputMaybe<Scalars['String']['input']>;
  heroFeatureList_every?: InputMaybe<HomeFeaturePointWhereInput>;
  heroFeatureList_none?: InputMaybe<HomeFeaturePointWhereInput>;
  heroFeatureList_some?: InputMaybe<HomeFeaturePointWhereInput>;
  heroSectionAsest?: InputMaybe<AssetWhereInput>;
  howItsWorkDetail_every?: InputMaybe<HowItsWorkDetailWhereInput>;
  howItsWorkDetail_none?: InputMaybe<HowItsWorkDetailWhereInput>;
  howItsWorkDetail_some?: InputMaybe<HowItsWorkDetailWhereInput>;
  id?: InputMaybe<Scalars['ID']['input']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']['input']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']['input']>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  relatedTemplatesSection?: InputMaybe<RelatedLandingPageTemplateWhereInput>;
  reviewsCounts?: InputMaybe<Scalars['Int']['input']>;
  /** All values greater than the given value. */
  reviewsCounts_gt?: InputMaybe<Scalars['Int']['input']>;
  /** All values greater than or equal the given value. */
  reviewsCounts_gte?: InputMaybe<Scalars['Int']['input']>;
  /** All values that are contained in given list. */
  reviewsCounts_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  /** All values less than the given value. */
  reviewsCounts_lt?: InputMaybe<Scalars['Int']['input']>;
  /** All values less than or equal the given value. */
  reviewsCounts_lte?: InputMaybe<Scalars['Int']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  reviewsCounts_not?: InputMaybe<Scalars['Int']['input']>;
  /** All values that are not contained in given list. */
  reviewsCounts_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
  sensoriumUsps?: InputMaybe<WhySensoriumUspWhereInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  updatedBy?: InputMaybe<UserWhereInput>;
};

export enum NewLandingPageOrderByInput {
  AverageRatingAsc = 'averageRating_ASC',
  AverageRatingDesc = 'averageRating_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  HeroCtaButton1Asc = 'heroCtaButton1_ASC',
  HeroCtaButton1Desc = 'heroCtaButton1_DESC',
  HeroCtaButton2Asc = 'heroCtaButton2_ASC',
  HeroCtaButton2Desc = 'heroCtaButton2_DESC',
  HeroCtaButtonRedirectUrlAsc = 'heroCtaButtonRedirectUrl_ASC',
  HeroCtaButtonRedirectUrlDesc = 'heroCtaButtonRedirectUrl_DESC',
  HeroDescriptionAsc = 'heroDescription_ASC',
  HeroDescriptionDesc = 'heroDescription_DESC',
  HeroSectionUspsDescriptionAsc = 'heroSectionUspsDescription_ASC',
  HeroSectionUspsDescriptionDesc = 'heroSectionUspsDescription_DESC',
  HeroTitleAsc = 'heroTitle_ASC',
  HeroTitleDesc = 'heroTitle_DESC',
  HeroUspsTilteAsc = 'heroUspsTilte_ASC',
  HeroUspsTilteDesc = 'heroUspsTilte_DESC',
  HowItsWorkCtaAsc = 'howItsWorkCta_ASC',
  HowItsWorkCtaDesc = 'howItsWorkCta_DESC',
  HowItsWorkHeadlineAsc = 'howItsWorkHeadline_ASC',
  HowItsWorkHeadlineDesc = 'howItsWorkHeadline_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  ReviewsCountsAsc = 'reviewsCounts_ASC',
  ReviewsCountsDesc = 'reviewsCounts_DESC',
  ShortTitleAsc = 'shortTitle_ASC',
  ShortTitleDesc = 'shortTitle_DESC',
  SlugAsc = 'slug_ASC',
  SlugDesc = 'slug_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC'
}

export type NewLandingPageUpdateInput = {
  averageRating?: InputMaybe<Scalars['Float']['input']>;
  categoryShowcase?: InputMaybe<CategorySectionUpdateOneInlineInput>;
  faqSection?: InputMaybe<FaqUpdateOneInlineInput>;
  /** heroCtaButton1 input for default locale (en) */
  heroCtaButton1?: InputMaybe<Scalars['String']['input']>;
  /** heroCtaButton2 input for default locale (en) */
  heroCtaButton2?: InputMaybe<Scalars['String']['input']>;
  heroCtaButtonRedirectUrl?: InputMaybe<Scalars['String']['input']>;
  /** heroDescription input for default locale (en) */
  heroDescription?: InputMaybe<Scalars['String']['input']>;
  heroFeatureList?: InputMaybe<HomeFeaturePointUpdateManyInlineInput>;
  heroSectionAsest?: InputMaybe<AssetUpdateOneInlineInput>;
  /** heroSectionUspsDescription input for default locale (en) */
  heroSectionUspsDescription?: InputMaybe<Scalars['String']['input']>;
  /** heroTitle input for default locale (en) */
  heroTitle?: InputMaybe<Scalars['String']['input']>;
  /** heroUspsTilte input for default locale (en) */
  heroUspsTilte?: InputMaybe<Scalars['String']['input']>;
  /** howItsWorkCta input for default locale (en) */
  howItsWorkCta?: InputMaybe<Scalars['String']['input']>;
  howItsWorkDetail?: InputMaybe<HowItsWorkDetailUpdateManyInlineInput>;
  /** howItsWorkHeadline input for default locale (en) */
  howItsWorkHeadline?: InputMaybe<Scalars['String']['input']>;
  /** Manage document localizations */
  localizations?: InputMaybe<NewLandingPageUpdateLocalizationsInput>;
  relatedTemplatesSection?: InputMaybe<RelatedLandingPageTemplateUpdateOneInlineInput>;
  reviewsCounts?: InputMaybe<Scalars['Int']['input']>;
  sensoriumUsps?: InputMaybe<WhySensoriumUspUpdateOneInlineInput>;
  /** shortTitle input for default locale (en) */
  shortTitle?: InputMaybe<Scalars['String']['input']>;
  /** slug input for default locale (en) */
  slug?: InputMaybe<Scalars['String']['input']>;
};

export type NewLandingPageUpdateLocalizationDataInput = {
  heroCtaButton1?: InputMaybe<Scalars['String']['input']>;
  heroCtaButton2?: InputMaybe<Scalars['String']['input']>;
  heroDescription?: InputMaybe<Scalars['String']['input']>;
  heroSectionUspsDescription?: InputMaybe<Scalars['String']['input']>;
  heroTitle?: InputMaybe<Scalars['String']['input']>;
  heroUspsTilte?: InputMaybe<Scalars['String']['input']>;
  howItsWorkCta?: InputMaybe<Scalars['String']['input']>;
  howItsWorkHeadline?: InputMaybe<Scalars['String']['input']>;
  shortTitle?: InputMaybe<Scalars['String']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
};

export type NewLandingPageUpdateLocalizationInput = {
  data: NewLandingPageUpdateLocalizationDataInput;
  locale: Locale;
};

export type NewLandingPageUpdateLocalizationsInput = {
  /** Localizations to create */
  create?: InputMaybe<Array<NewLandingPageCreateLocalizationInput>>;
  /** Localizations to delete */
  delete?: InputMaybe<Array<Locale>>;
  /** Localizations to update */
  update?: InputMaybe<Array<NewLandingPageUpdateLocalizationInput>>;
  upsert?: InputMaybe<Array<NewLandingPageUpsertLocalizationInput>>;
};

export type NewLandingPageUpdateManyInlineInput = {
  /** Connect multiple existing NewLandingPage documents */
  connect?: InputMaybe<Array<NewLandingPageConnectInput>>;
  /** Create and connect multiple NewLandingPage documents */
  create?: InputMaybe<Array<NewLandingPageCreateInput>>;
  /** Delete multiple NewLandingPage documents */
  delete?: InputMaybe<Array<NewLandingPageWhereUniqueInput>>;
  /** Disconnect multiple NewLandingPage documents */
  disconnect?: InputMaybe<Array<NewLandingPageWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing NewLandingPage documents */
  set?: InputMaybe<Array<NewLandingPageWhereUniqueInput>>;
  /** Update multiple NewLandingPage documents */
  update?: InputMaybe<Array<NewLandingPageUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple NewLandingPage documents */
  upsert?: InputMaybe<Array<NewLandingPageUpsertWithNestedWhereUniqueInput>>;
};

export type NewLandingPageUpdateManyInput = {
  averageRating?: InputMaybe<Scalars['Float']['input']>;
  /** heroCtaButton1 input for default locale (en) */
  heroCtaButton1?: InputMaybe<Scalars['String']['input']>;
  /** heroCtaButton2 input for default locale (en) */
  heroCtaButton2?: InputMaybe<Scalars['String']['input']>;
  heroCtaButtonRedirectUrl?: InputMaybe<Scalars['String']['input']>;
  /** heroDescription input for default locale (en) */
  heroDescription?: InputMaybe<Scalars['String']['input']>;
  /** heroSectionUspsDescription input for default locale (en) */
  heroSectionUspsDescription?: InputMaybe<Scalars['String']['input']>;
  /** heroUspsTilte input for default locale (en) */
  heroUspsTilte?: InputMaybe<Scalars['String']['input']>;
  /** howItsWorkCta input for default locale (en) */
  howItsWorkCta?: InputMaybe<Scalars['String']['input']>;
  /** howItsWorkHeadline input for default locale (en) */
  howItsWorkHeadline?: InputMaybe<Scalars['String']['input']>;
  /** Optional updates to localizations */
  localizations?: InputMaybe<NewLandingPageUpdateManyLocalizationsInput>;
  reviewsCounts?: InputMaybe<Scalars['Int']['input']>;
  /** shortTitle input for default locale (en) */
  shortTitle?: InputMaybe<Scalars['String']['input']>;
};

export type NewLandingPageUpdateManyLocalizationDataInput = {
  heroCtaButton1?: InputMaybe<Scalars['String']['input']>;
  heroCtaButton2?: InputMaybe<Scalars['String']['input']>;
  heroDescription?: InputMaybe<Scalars['String']['input']>;
  heroSectionUspsDescription?: InputMaybe<Scalars['String']['input']>;
  heroUspsTilte?: InputMaybe<Scalars['String']['input']>;
  howItsWorkCta?: InputMaybe<Scalars['String']['input']>;
  howItsWorkHeadline?: InputMaybe<Scalars['String']['input']>;
  shortTitle?: InputMaybe<Scalars['String']['input']>;
};

export type NewLandingPageUpdateManyLocalizationInput = {
  data: NewLandingPageUpdateManyLocalizationDataInput;
  locale: Locale;
};

export type NewLandingPageUpdateManyLocalizationsInput = {
  /** Localizations to update */
  update?: InputMaybe<Array<NewLandingPageUpdateManyLocalizationInput>>;
};

export type NewLandingPageUpdateManyWithNestedWhereInput = {
  /** Update many input */
  data: NewLandingPageUpdateManyInput;
  /** Document search */
  where: NewLandingPageWhereInput;
};

export type NewLandingPageUpdateOneInlineInput = {
  /** Connect existing NewLandingPage document */
  connect?: InputMaybe<NewLandingPageWhereUniqueInput>;
  /** Create and connect one NewLandingPage document */
  create?: InputMaybe<NewLandingPageCreateInput>;
  /** Delete currently connected NewLandingPage document */
  delete?: InputMaybe<Scalars['Boolean']['input']>;
  /** Disconnect currently connected NewLandingPage document */
  disconnect?: InputMaybe<Scalars['Boolean']['input']>;
  /** Update single NewLandingPage document */
  update?: InputMaybe<NewLandingPageUpdateWithNestedWhereUniqueInput>;
  /** Upsert single NewLandingPage document */
  upsert?: InputMaybe<NewLandingPageUpsertWithNestedWhereUniqueInput>;
};

export type NewLandingPageUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: NewLandingPageUpdateInput;
  /** Unique document search */
  where: NewLandingPageWhereUniqueInput;
};

export type NewLandingPageUpsertInput = {
  /** Create document if it didn't exist */
  create: NewLandingPageCreateInput;
  /** Update document if it exists */
  update: NewLandingPageUpdateInput;
};

export type NewLandingPageUpsertLocalizationInput = {
  create: NewLandingPageCreateLocalizationDataInput;
  locale: Locale;
  update: NewLandingPageUpdateLocalizationDataInput;
};

export type NewLandingPageUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: NewLandingPageUpsertInput;
  /** Unique document search */
  where: NewLandingPageWhereUniqueInput;
};

/** This contains a set of filters that can be used to compare values internally */
export type NewLandingPageWhereComparatorInput = {
  /** This field can be used to request to check if the entry is outdated by internal comparison */
  outdated_to?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Identifies documents */
export type NewLandingPageWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<NewLandingPageWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<NewLandingPageWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<NewLandingPageWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']['input']>;
  averageRating?: InputMaybe<Scalars['Float']['input']>;
  /** All values greater than the given value. */
  averageRating_gt?: InputMaybe<Scalars['Float']['input']>;
  /** All values greater than or equal the given value. */
  averageRating_gte?: InputMaybe<Scalars['Float']['input']>;
  /** All values that are contained in given list. */
  averageRating_in?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  /** All values less than the given value. */
  averageRating_lt?: InputMaybe<Scalars['Float']['input']>;
  /** All values less than or equal the given value. */
  averageRating_lte?: InputMaybe<Scalars['Float']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  averageRating_not?: InputMaybe<Scalars['Float']['input']>;
  /** All values that are not contained in given list. */
  averageRating_not_in?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  categoryShowcase?: InputMaybe<CategorySectionWhereInput>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  createdBy?: InputMaybe<UserWhereInput>;
  documentInStages_every?: InputMaybe<NewLandingPageWhereStageInput>;
  documentInStages_none?: InputMaybe<NewLandingPageWhereStageInput>;
  documentInStages_some?: InputMaybe<NewLandingPageWhereStageInput>;
  faqSection?: InputMaybe<FaqWhereInput>;
  heroCtaButton1?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  heroCtaButton1_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  heroCtaButton1_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  heroCtaButton1_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  heroCtaButton1_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  heroCtaButton1_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  heroCtaButton1_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  heroCtaButton1_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  heroCtaButton1_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  heroCtaButton1_starts_with?: InputMaybe<Scalars['String']['input']>;
  heroCtaButton2?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  heroCtaButton2_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  heroCtaButton2_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  heroCtaButton2_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  heroCtaButton2_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  heroCtaButton2_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  heroCtaButton2_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  heroCtaButton2_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  heroCtaButton2_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  heroCtaButton2_starts_with?: InputMaybe<Scalars['String']['input']>;
  heroCtaButtonRedirectUrl?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  heroCtaButtonRedirectUrl_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  heroCtaButtonRedirectUrl_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  heroCtaButtonRedirectUrl_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  heroCtaButtonRedirectUrl_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  heroCtaButtonRedirectUrl_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  heroCtaButtonRedirectUrl_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  heroCtaButtonRedirectUrl_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  heroCtaButtonRedirectUrl_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  heroCtaButtonRedirectUrl_starts_with?: InputMaybe<Scalars['String']['input']>;
  heroDescription?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  heroDescription_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  heroDescription_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  heroDescription_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  heroDescription_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  heroDescription_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  heroDescription_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  heroDescription_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  heroDescription_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  heroDescription_starts_with?: InputMaybe<Scalars['String']['input']>;
  heroFeatureList_every?: InputMaybe<HomeFeaturePointWhereInput>;
  heroFeatureList_none?: InputMaybe<HomeFeaturePointWhereInput>;
  heroFeatureList_some?: InputMaybe<HomeFeaturePointWhereInput>;
  heroSectionAsest?: InputMaybe<AssetWhereInput>;
  heroSectionUspsDescription?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  heroSectionUspsDescription_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  heroSectionUspsDescription_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  heroSectionUspsDescription_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  heroSectionUspsDescription_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  heroSectionUspsDescription_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  heroSectionUspsDescription_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  heroSectionUspsDescription_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  heroSectionUspsDescription_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  heroSectionUspsDescription_starts_with?: InputMaybe<Scalars['String']['input']>;
  heroTitle?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  heroTitle_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  heroTitle_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  heroTitle_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  heroTitle_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  heroTitle_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  heroTitle_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  heroTitle_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  heroTitle_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  heroTitle_starts_with?: InputMaybe<Scalars['String']['input']>;
  heroUspsTilte?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  heroUspsTilte_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  heroUspsTilte_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  heroUspsTilte_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  heroUspsTilte_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  heroUspsTilte_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  heroUspsTilte_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  heroUspsTilte_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  heroUspsTilte_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  heroUspsTilte_starts_with?: InputMaybe<Scalars['String']['input']>;
  howItsWorkCta?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  howItsWorkCta_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  howItsWorkCta_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  howItsWorkCta_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  howItsWorkCta_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  howItsWorkCta_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  howItsWorkCta_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  howItsWorkCta_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  howItsWorkCta_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  howItsWorkCta_starts_with?: InputMaybe<Scalars['String']['input']>;
  howItsWorkDetail_every?: InputMaybe<HowItsWorkDetailWhereInput>;
  howItsWorkDetail_none?: InputMaybe<HowItsWorkDetailWhereInput>;
  howItsWorkDetail_some?: InputMaybe<HowItsWorkDetailWhereInput>;
  howItsWorkHeadline?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  howItsWorkHeadline_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  howItsWorkHeadline_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  howItsWorkHeadline_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  howItsWorkHeadline_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  howItsWorkHeadline_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  howItsWorkHeadline_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  howItsWorkHeadline_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  howItsWorkHeadline_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  howItsWorkHeadline_starts_with?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']['input']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']['input']>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  relatedTemplatesSection?: InputMaybe<RelatedLandingPageTemplateWhereInput>;
  reviewsCounts?: InputMaybe<Scalars['Int']['input']>;
  /** All values greater than the given value. */
  reviewsCounts_gt?: InputMaybe<Scalars['Int']['input']>;
  /** All values greater than or equal the given value. */
  reviewsCounts_gte?: InputMaybe<Scalars['Int']['input']>;
  /** All values that are contained in given list. */
  reviewsCounts_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  /** All values less than the given value. */
  reviewsCounts_lt?: InputMaybe<Scalars['Int']['input']>;
  /** All values less than or equal the given value. */
  reviewsCounts_lte?: InputMaybe<Scalars['Int']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  reviewsCounts_not?: InputMaybe<Scalars['Int']['input']>;
  /** All values that are not contained in given list. */
  reviewsCounts_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
  sensoriumUsps?: InputMaybe<WhySensoriumUspWhereInput>;
  shortTitle?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  shortTitle_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  shortTitle_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  shortTitle_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  shortTitle_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  shortTitle_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  shortTitle_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  shortTitle_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  shortTitle_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  shortTitle_starts_with?: InputMaybe<Scalars['String']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  slug_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  slug_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  slug_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  slug_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  slug_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  slug_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  slug_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  slug_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  slug_starts_with?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  updatedBy?: InputMaybe<UserWhereInput>;
};

/** The document in stages filter allows specifying a stage entry to cross compare the same document between different stages */
export type NewLandingPageWhereStageInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<NewLandingPageWhereStageInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<NewLandingPageWhereStageInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<NewLandingPageWhereStageInput>>;
  /** This field contains fields which can be set as true or false to specify an internal comparison */
  compareWithParent?: InputMaybe<NewLandingPageWhereComparatorInput>;
  /** Specify the stage to compare with */
  stage?: InputMaybe<Stage>;
};

/** References NewLandingPage record uniquely */
export type NewLandingPageWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']['input']>;
};

/** An object with an ID */
export type Node = {
  /** The id of the object. */
  id: Scalars['ID']['output'];
  /** The Stage of an object */
  stage: Stage;
};

/** Information about pagination in a connection. */
export type PageInfo = {
  __typename?: 'PageInfo';
  /** When paginating forwards, the cursor to continue. */
  endCursor?: Maybe<Scalars['String']['output']>;
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean']['output'];
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean']['output'];
  /** Number of items in the current page. */
  pageSize?: Maybe<Scalars['Int']['output']>;
  /** When paginating backwards, the cursor to continue. */
  startCursor?: Maybe<Scalars['String']['output']>;
};

export type Post = Entity & Node & {
  __typename?: 'Post';
  /** Who should be credited with writing this post? */
  author?: Maybe<Author>;
  /** Write your blog post! */
  content: PostContentRichText;
  /** Upload or select a cover image to set as your Featured Image */
  coverImage: Asset;
  /** The time the document was created */
  createdAt: Scalars['DateTime']['output'];
  /** User that created this document */
  createdBy?: Maybe<User>;
  /** What is the published date you would like to show for this post? */
  date: Scalars['Date']['output'];
  /** Get the document in other stages */
  documentInStages: Array<Post>;
  /** Add a short excerpt to summarize this post */
  excerpt?: Maybe<Scalars['String']['output']>;
  /** List of Post versions */
  history: Array<Version>;
  /** The unique identifier */
  id: Scalars['ID']['output'];
  keywords: Array<Keyword>;
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  /** User that last published this document */
  publishedBy?: Maybe<User>;
  scheduledIn: Array<ScheduledOperation>;
  seoOverride?: Maybe<SeoOverride>;
  /** Select a slug for this blog post, such as post-1, post-2, etc. */
  slug: Scalars['String']['output'];
  /** System stage field */
  stage: Stage;
  tags: Array<Tag>;
  /** Name your blog post! */
  title: Scalars['String']['output'];
  /** The time the document was updated */
  updatedAt: Scalars['DateTime']['output'];
  /** User that last updated this document */
  updatedBy?: Maybe<User>;
};


export type PostAuthorArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  locales?: InputMaybe<Array<Locale>>;
};


export type PostCoverImageArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  locales?: InputMaybe<Array<Locale>>;
};


export type PostCreatedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  locales?: InputMaybe<Array<Locale>>;
};


export type PostDocumentInStagesArgs = {
  includeCurrent?: Scalars['Boolean']['input'];
  inheritLocale?: Scalars['Boolean']['input'];
  stages?: Array<Stage>;
};


export type PostHistoryArgs = {
  limit?: Scalars['Int']['input'];
  skip?: Scalars['Int']['input'];
  stageOverride?: InputMaybe<Stage>;
};


export type PostKeywordsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: InputMaybe<Array<Locale>>;
  orderBy?: InputMaybe<KeywordOrderByInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<KeywordWhereInput>;
};


export type PostPublishedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  locales?: InputMaybe<Array<Locale>>;
};


export type PostScheduledInArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: InputMaybe<Array<Locale>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<ScheduledOperationWhereInput>;
};


export type PostSeoOverrideArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  locales?: InputMaybe<Array<Locale>>;
};


export type PostTagsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: InputMaybe<Array<Locale>>;
  orderBy?: InputMaybe<TagOrderByInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<TagWhereInput>;
};


export type PostUpdatedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  locales?: InputMaybe<Array<Locale>>;
};

export type PostConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Document to connect */
  where: PostWhereUniqueInput;
};

/** A connection to a list of items. */
export type PostConnection = {
  __typename?: 'PostConnection';
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<PostEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type PostContentRichText = {
  __typename?: 'PostContentRichText';
  /** Returns HTMl representation */
  html: Scalars['String']['output'];
  json: Scalars['RichTextAST']['output'];
  /** Returns Markdown representation */
  markdown: Scalars['String']['output'];
  /** @deprecated Please use the 'json' field */
  raw: Scalars['RichTextAST']['output'];
  references: Array<PostContentRichTextEmbeddedTypes>;
  /** Returns plain-text contents of RichText */
  text: Scalars['String']['output'];
};


export type PostContentRichTextReferencesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};

export type PostContentRichTextEmbeddedTypes = Asset;

export type PostCreateInput = {
  author?: InputMaybe<AuthorCreateOneInlineInput>;
  content: Scalars['RichTextAST']['input'];
  coverImage: AssetCreateOneInlineInput;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  date: Scalars['Date']['input'];
  excerpt?: InputMaybe<Scalars['String']['input']>;
  keywords?: InputMaybe<KeywordCreateManyInlineInput>;
  seoOverride?: InputMaybe<SeoOverrideCreateOneInlineInput>;
  slug: Scalars['String']['input'];
  tags?: InputMaybe<TagCreateManyInlineInput>;
  title: Scalars['String']['input'];
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type PostCreateManyInlineInput = {
  /** Connect multiple existing Post documents */
  connect?: InputMaybe<Array<PostWhereUniqueInput>>;
  /** Create and connect multiple existing Post documents */
  create?: InputMaybe<Array<PostCreateInput>>;
};

export type PostCreateOneInlineInput = {
  /** Connect one existing Post document */
  connect?: InputMaybe<PostWhereUniqueInput>;
  /** Create and connect one Post document */
  create?: InputMaybe<PostCreateInput>;
};

/** An edge in a connection. */
export type PostEdge = {
  __typename?: 'PostEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: Post;
};

/** Identifies documents */
export type PostManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<PostWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<PostWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<PostWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']['input']>;
  author?: InputMaybe<AuthorWhereInput>;
  coverImage?: InputMaybe<AssetWhereInput>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  createdBy?: InputMaybe<UserWhereInput>;
  date?: InputMaybe<Scalars['Date']['input']>;
  /** All values greater than the given value. */
  date_gt?: InputMaybe<Scalars['Date']['input']>;
  /** All values greater than or equal the given value. */
  date_gte?: InputMaybe<Scalars['Date']['input']>;
  /** All values that are contained in given list. */
  date_in?: InputMaybe<Array<InputMaybe<Scalars['Date']['input']>>>;
  /** All values less than the given value. */
  date_lt?: InputMaybe<Scalars['Date']['input']>;
  /** All values less than or equal the given value. */
  date_lte?: InputMaybe<Scalars['Date']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  date_not?: InputMaybe<Scalars['Date']['input']>;
  /** All values that are not contained in given list. */
  date_not_in?: InputMaybe<Array<InputMaybe<Scalars['Date']['input']>>>;
  documentInStages_every?: InputMaybe<PostWhereStageInput>;
  documentInStages_none?: InputMaybe<PostWhereStageInput>;
  documentInStages_some?: InputMaybe<PostWhereStageInput>;
  excerpt?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  excerpt_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  excerpt_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  excerpt_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  excerpt_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  excerpt_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  excerpt_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  excerpt_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  excerpt_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  excerpt_starts_with?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']['input']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']['input']>;
  keywords_every?: InputMaybe<KeywordWhereInput>;
  keywords_none?: InputMaybe<KeywordWhereInput>;
  keywords_some?: InputMaybe<KeywordWhereInput>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
  seoOverride?: InputMaybe<SeoOverrideWhereInput>;
  slug?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  slug_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  slug_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  slug_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  slug_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  slug_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  slug_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  slug_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  slug_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  slug_starts_with?: InputMaybe<Scalars['String']['input']>;
  tags_every?: InputMaybe<TagWhereInput>;
  tags_none?: InputMaybe<TagWhereInput>;
  tags_some?: InputMaybe<TagWhereInput>;
  title?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  title_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  title_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  title_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  title_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  title_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  title_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  title_starts_with?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  updatedBy?: InputMaybe<UserWhereInput>;
};

export enum PostOrderByInput {
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  DateAsc = 'date_ASC',
  DateDesc = 'date_DESC',
  ExcerptAsc = 'excerpt_ASC',
  ExcerptDesc = 'excerpt_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  SlugAsc = 'slug_ASC',
  SlugDesc = 'slug_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC'
}

export type PostUpdateInput = {
  author?: InputMaybe<AuthorUpdateOneInlineInput>;
  content?: InputMaybe<Scalars['RichTextAST']['input']>;
  coverImage?: InputMaybe<AssetUpdateOneInlineInput>;
  date?: InputMaybe<Scalars['Date']['input']>;
  excerpt?: InputMaybe<Scalars['String']['input']>;
  keywords?: InputMaybe<KeywordUpdateManyInlineInput>;
  seoOverride?: InputMaybe<SeoOverrideUpdateOneInlineInput>;
  slug?: InputMaybe<Scalars['String']['input']>;
  tags?: InputMaybe<TagUpdateManyInlineInput>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type PostUpdateManyInlineInput = {
  /** Connect multiple existing Post documents */
  connect?: InputMaybe<Array<PostConnectInput>>;
  /** Create and connect multiple Post documents */
  create?: InputMaybe<Array<PostCreateInput>>;
  /** Delete multiple Post documents */
  delete?: InputMaybe<Array<PostWhereUniqueInput>>;
  /** Disconnect multiple Post documents */
  disconnect?: InputMaybe<Array<PostWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing Post documents */
  set?: InputMaybe<Array<PostWhereUniqueInput>>;
  /** Update multiple Post documents */
  update?: InputMaybe<Array<PostUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple Post documents */
  upsert?: InputMaybe<Array<PostUpsertWithNestedWhereUniqueInput>>;
};

export type PostUpdateManyInput = {
  content?: InputMaybe<Scalars['RichTextAST']['input']>;
  date?: InputMaybe<Scalars['Date']['input']>;
  excerpt?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type PostUpdateManyWithNestedWhereInput = {
  /** Update many input */
  data: PostUpdateManyInput;
  /** Document search */
  where: PostWhereInput;
};

export type PostUpdateOneInlineInput = {
  /** Connect existing Post document */
  connect?: InputMaybe<PostWhereUniqueInput>;
  /** Create and connect one Post document */
  create?: InputMaybe<PostCreateInput>;
  /** Delete currently connected Post document */
  delete?: InputMaybe<Scalars['Boolean']['input']>;
  /** Disconnect currently connected Post document */
  disconnect?: InputMaybe<Scalars['Boolean']['input']>;
  /** Update single Post document */
  update?: InputMaybe<PostUpdateWithNestedWhereUniqueInput>;
  /** Upsert single Post document */
  upsert?: InputMaybe<PostUpsertWithNestedWhereUniqueInput>;
};

export type PostUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: PostUpdateInput;
  /** Unique document search */
  where: PostWhereUniqueInput;
};

export type PostUpsertInput = {
  /** Create document if it didn't exist */
  create: PostCreateInput;
  /** Update document if it exists */
  update: PostUpdateInput;
};

export type PostUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: PostUpsertInput;
  /** Unique document search */
  where: PostWhereUniqueInput;
};

/** This contains a set of filters that can be used to compare values internally */
export type PostWhereComparatorInput = {
  /** This field can be used to request to check if the entry is outdated by internal comparison */
  outdated_to?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Identifies documents */
export type PostWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<PostWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<PostWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<PostWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']['input']>;
  author?: InputMaybe<AuthorWhereInput>;
  coverImage?: InputMaybe<AssetWhereInput>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  createdBy?: InputMaybe<UserWhereInput>;
  date?: InputMaybe<Scalars['Date']['input']>;
  /** All values greater than the given value. */
  date_gt?: InputMaybe<Scalars['Date']['input']>;
  /** All values greater than or equal the given value. */
  date_gte?: InputMaybe<Scalars['Date']['input']>;
  /** All values that are contained in given list. */
  date_in?: InputMaybe<Array<InputMaybe<Scalars['Date']['input']>>>;
  /** All values less than the given value. */
  date_lt?: InputMaybe<Scalars['Date']['input']>;
  /** All values less than or equal the given value. */
  date_lte?: InputMaybe<Scalars['Date']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  date_not?: InputMaybe<Scalars['Date']['input']>;
  /** All values that are not contained in given list. */
  date_not_in?: InputMaybe<Array<InputMaybe<Scalars['Date']['input']>>>;
  documentInStages_every?: InputMaybe<PostWhereStageInput>;
  documentInStages_none?: InputMaybe<PostWhereStageInput>;
  documentInStages_some?: InputMaybe<PostWhereStageInput>;
  excerpt?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  excerpt_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  excerpt_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  excerpt_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  excerpt_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  excerpt_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  excerpt_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  excerpt_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  excerpt_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  excerpt_starts_with?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']['input']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']['input']>;
  keywords_every?: InputMaybe<KeywordWhereInput>;
  keywords_none?: InputMaybe<KeywordWhereInput>;
  keywords_some?: InputMaybe<KeywordWhereInput>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
  seoOverride?: InputMaybe<SeoOverrideWhereInput>;
  slug?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  slug_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  slug_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  slug_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  slug_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  slug_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  slug_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  slug_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  slug_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  slug_starts_with?: InputMaybe<Scalars['String']['input']>;
  tags_every?: InputMaybe<TagWhereInput>;
  tags_none?: InputMaybe<TagWhereInput>;
  tags_some?: InputMaybe<TagWhereInput>;
  title?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  title_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  title_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  title_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  title_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  title_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  title_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  title_starts_with?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  updatedBy?: InputMaybe<UserWhereInput>;
};

/** The document in stages filter allows specifying a stage entry to cross compare the same document between different stages */
export type PostWhereStageInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<PostWhereStageInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<PostWhereStageInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<PostWhereStageInput>>;
  /** This field contains fields which can be set as true or false to specify an internal comparison */
  compareWithParent?: InputMaybe<PostWhereComparatorInput>;
  /** Specify the stage to compare with */
  stage?: InputMaybe<Stage>;
};

/** References Post record uniquely */
export type PostWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
};

export type PrivacyPolicy = Entity & Node & {
  __typename?: 'PrivacyPolicy';
  content: RichText;
  /** The time the document was created */
  createdAt: Scalars['DateTime']['output'];
  /** User that created this document */
  createdBy?: Maybe<User>;
  /** Get the document in other stages */
  documentInStages: Array<PrivacyPolicy>;
  /** List of PrivacyPolicy versions */
  history: Array<Version>;
  /** The unique identifier */
  id: Scalars['ID']['output'];
  /** System Locale field */
  locale: Locale;
  /** Get the other localizations for this document */
  localizations: Array<PrivacyPolicy>;
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  /** User that last published this document */
  publishedBy?: Maybe<User>;
  scheduledIn: Array<ScheduledOperation>;
  /** System stage field */
  stage: Stage;
  /** The time the document was updated */
  updatedAt: Scalars['DateTime']['output'];
  /** User that last updated this document */
  updatedBy?: Maybe<User>;
};


export type PrivacyPolicyCreatedAtArgs = {
  variation?: SystemDateTimeFieldVariation;
};


export type PrivacyPolicyCreatedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  locales?: InputMaybe<Array<Locale>>;
};


export type PrivacyPolicyDocumentInStagesArgs = {
  includeCurrent?: Scalars['Boolean']['input'];
  inheritLocale?: Scalars['Boolean']['input'];
  stages?: Array<Stage>;
};


export type PrivacyPolicyHistoryArgs = {
  limit?: Scalars['Int']['input'];
  skip?: Scalars['Int']['input'];
  stageOverride?: InputMaybe<Stage>;
};


export type PrivacyPolicyLocalizationsArgs = {
  includeCurrent?: Scalars['Boolean']['input'];
  locales?: Array<Locale>;
};


export type PrivacyPolicyPublishedAtArgs = {
  variation?: SystemDateTimeFieldVariation;
};


export type PrivacyPolicyPublishedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  locales?: InputMaybe<Array<Locale>>;
};


export type PrivacyPolicyScheduledInArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: InputMaybe<Array<Locale>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<ScheduledOperationWhereInput>;
};


export type PrivacyPolicyUpdatedAtArgs = {
  variation?: SystemDateTimeFieldVariation;
};


export type PrivacyPolicyUpdatedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  locales?: InputMaybe<Array<Locale>>;
};

export type PrivacyPolicyConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Document to connect */
  where: PrivacyPolicyWhereUniqueInput;
};

/** A connection to a list of items. */
export type PrivacyPolicyConnection = {
  __typename?: 'PrivacyPolicyConnection';
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<PrivacyPolicyEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type PrivacyPolicyCreateInput = {
  /** content input for default locale (en) */
  content: Scalars['RichTextAST']['input'];
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** Inline mutations for managing document localizations excluding the default locale */
  localizations?: InputMaybe<PrivacyPolicyCreateLocalizationsInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type PrivacyPolicyCreateLocalizationDataInput = {
  content: Scalars['RichTextAST']['input'];
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type PrivacyPolicyCreateLocalizationInput = {
  /** Localization input */
  data: PrivacyPolicyCreateLocalizationDataInput;
  locale: Locale;
};

export type PrivacyPolicyCreateLocalizationsInput = {
  /** Create localizations for the newly-created document */
  create?: InputMaybe<Array<PrivacyPolicyCreateLocalizationInput>>;
};

export type PrivacyPolicyCreateManyInlineInput = {
  /** Connect multiple existing PrivacyPolicy documents */
  connect?: InputMaybe<Array<PrivacyPolicyWhereUniqueInput>>;
  /** Create and connect multiple existing PrivacyPolicy documents */
  create?: InputMaybe<Array<PrivacyPolicyCreateInput>>;
};

export type PrivacyPolicyCreateOneInlineInput = {
  /** Connect one existing PrivacyPolicy document */
  connect?: InputMaybe<PrivacyPolicyWhereUniqueInput>;
  /** Create and connect one PrivacyPolicy document */
  create?: InputMaybe<PrivacyPolicyCreateInput>;
};

/** An edge in a connection. */
export type PrivacyPolicyEdge = {
  __typename?: 'PrivacyPolicyEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: PrivacyPolicy;
};

/** Identifies documents */
export type PrivacyPolicyManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<PrivacyPolicyWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<PrivacyPolicyWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<PrivacyPolicyWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  createdBy?: InputMaybe<UserWhereInput>;
  documentInStages_every?: InputMaybe<PrivacyPolicyWhereStageInput>;
  documentInStages_none?: InputMaybe<PrivacyPolicyWhereStageInput>;
  documentInStages_some?: InputMaybe<PrivacyPolicyWhereStageInput>;
  id?: InputMaybe<Scalars['ID']['input']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']['input']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']['input']>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  updatedBy?: InputMaybe<UserWhereInput>;
};

export enum PrivacyPolicyOrderByInput {
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC'
}

export type PrivacyPolicyUpdateInput = {
  /** content input for default locale (en) */
  content?: InputMaybe<Scalars['RichTextAST']['input']>;
  /** Manage document localizations */
  localizations?: InputMaybe<PrivacyPolicyUpdateLocalizationsInput>;
};

export type PrivacyPolicyUpdateLocalizationDataInput = {
  content?: InputMaybe<Scalars['RichTextAST']['input']>;
};

export type PrivacyPolicyUpdateLocalizationInput = {
  data: PrivacyPolicyUpdateLocalizationDataInput;
  locale: Locale;
};

export type PrivacyPolicyUpdateLocalizationsInput = {
  /** Localizations to create */
  create?: InputMaybe<Array<PrivacyPolicyCreateLocalizationInput>>;
  /** Localizations to delete */
  delete?: InputMaybe<Array<Locale>>;
  /** Localizations to update */
  update?: InputMaybe<Array<PrivacyPolicyUpdateLocalizationInput>>;
  upsert?: InputMaybe<Array<PrivacyPolicyUpsertLocalizationInput>>;
};

export type PrivacyPolicyUpdateManyInlineInput = {
  /** Connect multiple existing PrivacyPolicy documents */
  connect?: InputMaybe<Array<PrivacyPolicyConnectInput>>;
  /** Create and connect multiple PrivacyPolicy documents */
  create?: InputMaybe<Array<PrivacyPolicyCreateInput>>;
  /** Delete multiple PrivacyPolicy documents */
  delete?: InputMaybe<Array<PrivacyPolicyWhereUniqueInput>>;
  /** Disconnect multiple PrivacyPolicy documents */
  disconnect?: InputMaybe<Array<PrivacyPolicyWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing PrivacyPolicy documents */
  set?: InputMaybe<Array<PrivacyPolicyWhereUniqueInput>>;
  /** Update multiple PrivacyPolicy documents */
  update?: InputMaybe<Array<PrivacyPolicyUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple PrivacyPolicy documents */
  upsert?: InputMaybe<Array<PrivacyPolicyUpsertWithNestedWhereUniqueInput>>;
};

export type PrivacyPolicyUpdateManyInput = {
  /** content input for default locale (en) */
  content?: InputMaybe<Scalars['RichTextAST']['input']>;
  /** Optional updates to localizations */
  localizations?: InputMaybe<PrivacyPolicyUpdateManyLocalizationsInput>;
};

export type PrivacyPolicyUpdateManyLocalizationDataInput = {
  content?: InputMaybe<Scalars['RichTextAST']['input']>;
};

export type PrivacyPolicyUpdateManyLocalizationInput = {
  data: PrivacyPolicyUpdateManyLocalizationDataInput;
  locale: Locale;
};

export type PrivacyPolicyUpdateManyLocalizationsInput = {
  /** Localizations to update */
  update?: InputMaybe<Array<PrivacyPolicyUpdateManyLocalizationInput>>;
};

export type PrivacyPolicyUpdateManyWithNestedWhereInput = {
  /** Update many input */
  data: PrivacyPolicyUpdateManyInput;
  /** Document search */
  where: PrivacyPolicyWhereInput;
};

export type PrivacyPolicyUpdateOneInlineInput = {
  /** Connect existing PrivacyPolicy document */
  connect?: InputMaybe<PrivacyPolicyWhereUniqueInput>;
  /** Create and connect one PrivacyPolicy document */
  create?: InputMaybe<PrivacyPolicyCreateInput>;
  /** Delete currently connected PrivacyPolicy document */
  delete?: InputMaybe<Scalars['Boolean']['input']>;
  /** Disconnect currently connected PrivacyPolicy document */
  disconnect?: InputMaybe<Scalars['Boolean']['input']>;
  /** Update single PrivacyPolicy document */
  update?: InputMaybe<PrivacyPolicyUpdateWithNestedWhereUniqueInput>;
  /** Upsert single PrivacyPolicy document */
  upsert?: InputMaybe<PrivacyPolicyUpsertWithNestedWhereUniqueInput>;
};

export type PrivacyPolicyUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: PrivacyPolicyUpdateInput;
  /** Unique document search */
  where: PrivacyPolicyWhereUniqueInput;
};

export type PrivacyPolicyUpsertInput = {
  /** Create document if it didn't exist */
  create: PrivacyPolicyCreateInput;
  /** Update document if it exists */
  update: PrivacyPolicyUpdateInput;
};

export type PrivacyPolicyUpsertLocalizationInput = {
  create: PrivacyPolicyCreateLocalizationDataInput;
  locale: Locale;
  update: PrivacyPolicyUpdateLocalizationDataInput;
};

export type PrivacyPolicyUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: PrivacyPolicyUpsertInput;
  /** Unique document search */
  where: PrivacyPolicyWhereUniqueInput;
};

/** This contains a set of filters that can be used to compare values internally */
export type PrivacyPolicyWhereComparatorInput = {
  /** This field can be used to request to check if the entry is outdated by internal comparison */
  outdated_to?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Identifies documents */
export type PrivacyPolicyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<PrivacyPolicyWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<PrivacyPolicyWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<PrivacyPolicyWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  createdBy?: InputMaybe<UserWhereInput>;
  documentInStages_every?: InputMaybe<PrivacyPolicyWhereStageInput>;
  documentInStages_none?: InputMaybe<PrivacyPolicyWhereStageInput>;
  documentInStages_some?: InputMaybe<PrivacyPolicyWhereStageInput>;
  id?: InputMaybe<Scalars['ID']['input']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']['input']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']['input']>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  updatedBy?: InputMaybe<UserWhereInput>;
};

/** The document in stages filter allows specifying a stage entry to cross compare the same document between different stages */
export type PrivacyPolicyWhereStageInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<PrivacyPolicyWhereStageInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<PrivacyPolicyWhereStageInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<PrivacyPolicyWhereStageInput>>;
  /** This field contains fields which can be set as true or false to specify an internal comparison */
  compareWithParent?: InputMaybe<PrivacyPolicyWhereComparatorInput>;
  /** Specify the stage to compare with */
  stage?: InputMaybe<Stage>;
};

/** References PrivacyPolicy record uniquely */
export type PrivacyPolicyWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']['input']>;
};

export type PublishLocaleInput = {
  /** Locales to publish */
  locale: Locale;
  /** Stages to publish selected locales to */
  stages: Array<Stage>;
};

export type Query = {
  __typename?: 'Query';
  /** Retrieve a single asset */
  asset?: Maybe<Asset>;
  /** Retrieve document version */
  assetVersion?: Maybe<DocumentVersion>;
  /** Retrieve multiple assets */
  assets: Array<Asset>;
  /** Retrieve multiple assets using the Relay connection interface */
  assetsConnection: AssetConnection;
  /** Retrieve a single author */
  author?: Maybe<Author>;
  /** Retrieve document version */
  authorVersion?: Maybe<DocumentVersion>;
  /** Retrieve multiple authors */
  authors: Array<Author>;
  /** Retrieve multiple authors using the Relay connection interface */
  authorsConnection: AuthorConnection;
  /** Fetches an object given its ID */
  entities?: Maybe<Array<Entity>>;
  /** Retrieve a single keyword */
  keyword?: Maybe<Keyword>;
  /** Retrieve document version */
  keywordVersion?: Maybe<DocumentVersion>;
  /** Retrieve multiple keywords */
  keywords: Array<Keyword>;
  /** Retrieve multiple keywords using the Relay connection interface */
  keywordsConnection: KeywordConnection;
  /** Retrieve a single landingPage */
  landingPage?: Maybe<LandingPage>;
  /** Retrieve document version */
  landingPageVersion?: Maybe<DocumentVersion>;
  /** Retrieve multiple landingPages */
  landingPages: Array<LandingPage>;
  /** Retrieve multiple landingPages using the Relay connection interface */
  landingPagesConnection: LandingPageConnection;
  /** Retrieve a single newLandingPage */
  newLandingPage?: Maybe<NewLandingPage>;
  /** Retrieve document version */
  newLandingPageVersion?: Maybe<DocumentVersion>;
  /** Retrieve multiple newLandingPages */
  newLandingPages: Array<NewLandingPage>;
  /** Retrieve multiple newLandingPages using the Relay connection interface */
  newLandingPagesConnection: NewLandingPageConnection;
  /** Fetches an object given its ID */
  node?: Maybe<Node>;
  /** Retrieve a single post */
  post?: Maybe<Post>;
  /** Retrieve document version */
  postVersion?: Maybe<DocumentVersion>;
  /** Retrieve multiple posts */
  posts: Array<Post>;
  /** Retrieve multiple posts using the Relay connection interface */
  postsConnection: PostConnection;
  /** Retrieve multiple privacyPolicies */
  privacyPolicies: Array<PrivacyPolicy>;
  /** Retrieve multiple privacyPolicies using the Relay connection interface */
  privacyPoliciesConnection: PrivacyPolicyConnection;
  /** Retrieve a single privacyPolicy */
  privacyPolicy?: Maybe<PrivacyPolicy>;
  /** Retrieve document version */
  privacyPolicyVersion?: Maybe<DocumentVersion>;
  /** Retrieve a single review */
  review?: Maybe<Review>;
  /** Retrieve document version */
  reviewVersion?: Maybe<DocumentVersion>;
  /** Retrieve multiple reviews */
  reviews: Array<Review>;
  /** Retrieve multiple reviews using the Relay connection interface */
  reviewsConnection: ReviewConnection;
  /** Retrieve a single scheduledOperation */
  scheduledOperation?: Maybe<ScheduledOperation>;
  /** Retrieve multiple scheduledOperations */
  scheduledOperations: Array<ScheduledOperation>;
  /** Retrieve multiple scheduledOperations using the Relay connection interface */
  scheduledOperationsConnection: ScheduledOperationConnection;
  /** Retrieve a single scheduledRelease */
  scheduledRelease?: Maybe<ScheduledRelease>;
  /** Retrieve multiple scheduledReleases */
  scheduledReleases: Array<ScheduledRelease>;
  /** Retrieve multiple scheduledReleases using the Relay connection interface */
  scheduledReleasesConnection: ScheduledReleaseConnection;
  /** Retrieve a single tag */
  tag?: Maybe<Tag>;
  /** Retrieve document version */
  tagVersion?: Maybe<DocumentVersion>;
  /** Retrieve multiple tags */
  tags: Array<Tag>;
  /** Retrieve multiple tags using the Relay connection interface */
  tagsConnection: TagConnection;
  /** Retrieve a single user */
  user?: Maybe<User>;
  /** Retrieve multiple users */
  users: Array<User>;
  /** Retrieve multiple users using the Relay connection interface */
  usersConnection: UserConnection;
};


export type QueryAssetArgs = {
  locales?: Array<Locale>;
  stage?: Stage;
  where: AssetWhereUniqueInput;
};


export type QueryAssetVersionArgs = {
  where: VersionWhereInput;
};


export type QueryAssetsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<AssetOrderByInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  stage?: Stage;
  where?: InputMaybe<AssetWhereInput>;
};


export type QueryAssetsConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<AssetOrderByInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  stage?: Stage;
  where?: InputMaybe<AssetWhereInput>;
};


export type QueryAuthorArgs = {
  locales?: Array<Locale>;
  stage?: Stage;
  where: AuthorWhereUniqueInput;
};


export type QueryAuthorVersionArgs = {
  where: VersionWhereInput;
};


export type QueryAuthorsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<AuthorOrderByInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  stage?: Stage;
  where?: InputMaybe<AuthorWhereInput>;
};


export type QueryAuthorsConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<AuthorOrderByInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  stage?: Stage;
  where?: InputMaybe<AuthorWhereInput>;
};


export type QueryEntitiesArgs = {
  locales?: InputMaybe<Array<Locale>>;
  where: Array<EntityWhereInput>;
};


export type QueryKeywordArgs = {
  locales?: Array<Locale>;
  stage?: Stage;
  where: KeywordWhereUniqueInput;
};


export type QueryKeywordVersionArgs = {
  where: VersionWhereInput;
};


export type QueryKeywordsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<KeywordOrderByInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  stage?: Stage;
  where?: InputMaybe<KeywordWhereInput>;
};


export type QueryKeywordsConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<KeywordOrderByInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  stage?: Stage;
  where?: InputMaybe<KeywordWhereInput>;
};


export type QueryLandingPageArgs = {
  locales?: Array<Locale>;
  stage?: Stage;
  where: LandingPageWhereUniqueInput;
};


export type QueryLandingPageVersionArgs = {
  where: VersionWhereInput;
};


export type QueryLandingPagesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<LandingPageOrderByInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  stage?: Stage;
  where?: InputMaybe<LandingPageWhereInput>;
};


export type QueryLandingPagesConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<LandingPageOrderByInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  stage?: Stage;
  where?: InputMaybe<LandingPageWhereInput>;
};


export type QueryNewLandingPageArgs = {
  locales?: Array<Locale>;
  stage?: Stage;
  where: NewLandingPageWhereUniqueInput;
};


export type QueryNewLandingPageVersionArgs = {
  where: VersionWhereInput;
};


export type QueryNewLandingPagesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<NewLandingPageOrderByInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  stage?: Stage;
  where?: InputMaybe<NewLandingPageWhereInput>;
};


export type QueryNewLandingPagesConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<NewLandingPageOrderByInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  stage?: Stage;
  where?: InputMaybe<NewLandingPageWhereInput>;
};


export type QueryNodeArgs = {
  id: Scalars['ID']['input'];
  locales?: Array<Locale>;
  stage?: Stage;
};


export type QueryPostArgs = {
  locales?: Array<Locale>;
  stage?: Stage;
  where: PostWhereUniqueInput;
};


export type QueryPostVersionArgs = {
  where: VersionWhereInput;
};


export type QueryPostsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<PostOrderByInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  stage?: Stage;
  where?: InputMaybe<PostWhereInput>;
};


export type QueryPostsConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<PostOrderByInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  stage?: Stage;
  where?: InputMaybe<PostWhereInput>;
};


export type QueryPrivacyPoliciesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<PrivacyPolicyOrderByInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  stage?: Stage;
  where?: InputMaybe<PrivacyPolicyWhereInput>;
};


export type QueryPrivacyPoliciesConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<PrivacyPolicyOrderByInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  stage?: Stage;
  where?: InputMaybe<PrivacyPolicyWhereInput>;
};


export type QueryPrivacyPolicyArgs = {
  locales?: Array<Locale>;
  stage?: Stage;
  where: PrivacyPolicyWhereUniqueInput;
};


export type QueryPrivacyPolicyVersionArgs = {
  where: VersionWhereInput;
};


export type QueryReviewArgs = {
  locales?: Array<Locale>;
  stage?: Stage;
  where: ReviewWhereUniqueInput;
};


export type QueryReviewVersionArgs = {
  where: VersionWhereInput;
};


export type QueryReviewsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<ReviewOrderByInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  stage?: Stage;
  where?: InputMaybe<ReviewWhereInput>;
};


export type QueryReviewsConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<ReviewOrderByInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  stage?: Stage;
  where?: InputMaybe<ReviewWhereInput>;
};


export type QueryScheduledOperationArgs = {
  locales?: Array<Locale>;
  stage?: Stage;
  where: ScheduledOperationWhereUniqueInput;
};


export type QueryScheduledOperationsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<ScheduledOperationOrderByInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  stage?: Stage;
  where?: InputMaybe<ScheduledOperationWhereInput>;
};


export type QueryScheduledOperationsConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<ScheduledOperationOrderByInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  stage?: Stage;
  where?: InputMaybe<ScheduledOperationWhereInput>;
};


export type QueryScheduledReleaseArgs = {
  locales?: Array<Locale>;
  stage?: Stage;
  where: ScheduledReleaseWhereUniqueInput;
};


export type QueryScheduledReleasesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<ScheduledReleaseOrderByInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  stage?: Stage;
  where?: InputMaybe<ScheduledReleaseWhereInput>;
};


export type QueryScheduledReleasesConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<ScheduledReleaseOrderByInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  stage?: Stage;
  where?: InputMaybe<ScheduledReleaseWhereInput>;
};


export type QueryTagArgs = {
  locales?: Array<Locale>;
  stage?: Stage;
  where: TagWhereUniqueInput;
};


export type QueryTagVersionArgs = {
  where: VersionWhereInput;
};


export type QueryTagsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<TagOrderByInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  stage?: Stage;
  where?: InputMaybe<TagWhereInput>;
};


export type QueryTagsConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<TagOrderByInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  stage?: Stage;
  where?: InputMaybe<TagWhereInput>;
};


export type QueryUserArgs = {
  locales?: Array<Locale>;
  stage?: Stage;
  where: UserWhereUniqueInput;
};


export type QueryUsersArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<UserOrderByInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  stage?: Stage;
  where?: InputMaybe<UserWhereInput>;
};


export type QueryUsersConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<UserOrderByInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  stage?: Stage;
  where?: InputMaybe<UserWhereInput>;
};

/** Representing a RGBA color value: https://developer.mozilla.org/en-US/docs/Web/CSS/color_value#rgb()_and_rgba() */
export type Rgba = {
  __typename?: 'RGBA';
  a: Scalars['RGBATransparency']['output'];
  b: Scalars['RGBAHue']['output'];
  g: Scalars['RGBAHue']['output'];
  r: Scalars['RGBAHue']['output'];
};

/** Input type representing a RGBA color value: https://developer.mozilla.org/en-US/docs/Web/CSS/color_value#rgb()_and_rgba() */
export type RgbaInput = {
  a: Scalars['RGBATransparency']['input'];
  b: Scalars['RGBAHue']['input'];
  g: Scalars['RGBAHue']['input'];
  r: Scalars['RGBAHue']['input'];
};

export type RelatedLandingPageTemplate = Entity & {
  __typename?: 'RelatedLandingPageTemplate';
  /** The unique identifier */
  id: Scalars['ID']['output'];
  leftCtaButton?: Maybe<Scalars['String']['output']>;
  /** System Locale field */
  locale: Locale;
  /** Get the other localizations for this document */
  localizations: Array<RelatedLandingPageTemplate>;
  mainDescription: Scalars['String']['output'];
  mainTitle: Scalars['String']['output'];
  rightCtaButton?: Maybe<Scalars['String']['output']>;
  /** System stage field */
  stage: Stage;
  templatesInformation: Array<TemplatesDetail>;
};


export type RelatedLandingPageTemplateLocalizationsArgs = {
  includeCurrent?: Scalars['Boolean']['input'];
  locales?: Array<Locale>;
};


export type RelatedLandingPageTemplateTemplatesInformationArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: InputMaybe<Array<Locale>>;
  orderBy?: InputMaybe<TemplatesDetailOrderByInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<TemplatesDetailWhereInput>;
};

export type RelatedLandingPageTemplateConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Document to connect */
  where: RelatedLandingPageTemplateWhereUniqueInput;
};

/** A connection to a list of items. */
export type RelatedLandingPageTemplateConnection = {
  __typename?: 'RelatedLandingPageTemplateConnection';
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<RelatedLandingPageTemplateEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type RelatedLandingPageTemplateCreateInput = {
  /** leftCtaButton input for default locale (en) */
  leftCtaButton?: InputMaybe<Scalars['String']['input']>;
  /** Inline mutations for managing document localizations excluding the default locale */
  localizations?: InputMaybe<RelatedLandingPageTemplateCreateLocalizationsInput>;
  /** mainDescription input for default locale (en) */
  mainDescription: Scalars['String']['input'];
  /** mainTitle input for default locale (en) */
  mainTitle: Scalars['String']['input'];
  /** rightCtaButton input for default locale (en) */
  rightCtaButton?: InputMaybe<Scalars['String']['input']>;
  templatesInformation?: InputMaybe<TemplatesDetailCreateManyInlineInput>;
};

export type RelatedLandingPageTemplateCreateLocalizationDataInput = {
  leftCtaButton?: InputMaybe<Scalars['String']['input']>;
  mainDescription: Scalars['String']['input'];
  mainTitle: Scalars['String']['input'];
  rightCtaButton?: InputMaybe<Scalars['String']['input']>;
};

export type RelatedLandingPageTemplateCreateLocalizationInput = {
  /** Localization input */
  data: RelatedLandingPageTemplateCreateLocalizationDataInput;
  locale: Locale;
};

export type RelatedLandingPageTemplateCreateLocalizationsInput = {
  /** Create localizations for the newly-created document */
  create?: InputMaybe<Array<RelatedLandingPageTemplateCreateLocalizationInput>>;
};

export type RelatedLandingPageTemplateCreateManyInlineInput = {
  /** Create and connect multiple existing RelatedLandingPageTemplate documents */
  create?: InputMaybe<Array<RelatedLandingPageTemplateCreateInput>>;
};

export type RelatedLandingPageTemplateCreateOneInlineInput = {
  /** Create and connect one RelatedLandingPageTemplate document */
  create?: InputMaybe<RelatedLandingPageTemplateCreateInput>;
};

export type RelatedLandingPageTemplateCreateWithPositionInput = {
  /** Document to create */
  data: RelatedLandingPageTemplateCreateInput;
  /** Position in the list of existing component instances, will default to appending at the end of list */
  position?: InputMaybe<ConnectPositionInput>;
};

/** An edge in a connection. */
export type RelatedLandingPageTemplateEdge = {
  __typename?: 'RelatedLandingPageTemplateEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: RelatedLandingPageTemplate;
};

/** Identifies documents */
export type RelatedLandingPageTemplateManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<RelatedLandingPageTemplateWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<RelatedLandingPageTemplateWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<RelatedLandingPageTemplateWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']['input']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']['input']>;
  templatesInformation_every?: InputMaybe<TemplatesDetailWhereInput>;
  templatesInformation_none?: InputMaybe<TemplatesDetailWhereInput>;
  templatesInformation_some?: InputMaybe<TemplatesDetailWhereInput>;
};

export enum RelatedLandingPageTemplateOrderByInput {
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  LeftCtaButtonAsc = 'leftCtaButton_ASC',
  LeftCtaButtonDesc = 'leftCtaButton_DESC',
  MainDescriptionAsc = 'mainDescription_ASC',
  MainDescriptionDesc = 'mainDescription_DESC',
  MainTitleAsc = 'mainTitle_ASC',
  MainTitleDesc = 'mainTitle_DESC',
  RightCtaButtonAsc = 'rightCtaButton_ASC',
  RightCtaButtonDesc = 'rightCtaButton_DESC'
}

export type RelatedLandingPageTemplateParent = NewLandingPage;

export type RelatedLandingPageTemplateParentConnectInput = {
  NewLandingPage?: InputMaybe<NewLandingPageConnectInput>;
};

export type RelatedLandingPageTemplateParentCreateInput = {
  NewLandingPage?: InputMaybe<NewLandingPageCreateInput>;
};

export type RelatedLandingPageTemplateParentCreateManyInlineInput = {
  /** Connect multiple existing RelatedLandingPageTemplateParent documents */
  connect?: InputMaybe<Array<RelatedLandingPageTemplateParentWhereUniqueInput>>;
  /** Create and connect multiple existing RelatedLandingPageTemplateParent documents */
  create?: InputMaybe<Array<RelatedLandingPageTemplateParentCreateInput>>;
};

export type RelatedLandingPageTemplateParentCreateOneInlineInput = {
  /** Connect one existing RelatedLandingPageTemplateParent document */
  connect?: InputMaybe<RelatedLandingPageTemplateParentWhereUniqueInput>;
  /** Create and connect one RelatedLandingPageTemplateParent document */
  create?: InputMaybe<RelatedLandingPageTemplateParentCreateInput>;
};

export type RelatedLandingPageTemplateParentUpdateInput = {
  NewLandingPage?: InputMaybe<NewLandingPageUpdateInput>;
};

export type RelatedLandingPageTemplateParentUpdateManyInlineInput = {
  /** Connect multiple existing RelatedLandingPageTemplateParent documents */
  connect?: InputMaybe<Array<RelatedLandingPageTemplateParentConnectInput>>;
  /** Create and connect multiple RelatedLandingPageTemplateParent documents */
  create?: InputMaybe<Array<RelatedLandingPageTemplateParentCreateInput>>;
  /** Delete multiple RelatedLandingPageTemplateParent documents */
  delete?: InputMaybe<Array<RelatedLandingPageTemplateParentWhereUniqueInput>>;
  /** Disconnect multiple RelatedLandingPageTemplateParent documents */
  disconnect?: InputMaybe<Array<RelatedLandingPageTemplateParentWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing RelatedLandingPageTemplateParent documents */
  set?: InputMaybe<Array<RelatedLandingPageTemplateParentWhereUniqueInput>>;
  /** Update multiple RelatedLandingPageTemplateParent documents */
  update?: InputMaybe<Array<RelatedLandingPageTemplateParentUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple RelatedLandingPageTemplateParent documents */
  upsert?: InputMaybe<Array<RelatedLandingPageTemplateParentUpsertWithNestedWhereUniqueInput>>;
};

export type RelatedLandingPageTemplateParentUpdateManyWithNestedWhereInput = {
  NewLandingPage?: InputMaybe<NewLandingPageUpdateManyWithNestedWhereInput>;
};

export type RelatedLandingPageTemplateParentUpdateOneInlineInput = {
  /** Connect existing RelatedLandingPageTemplateParent document */
  connect?: InputMaybe<RelatedLandingPageTemplateParentWhereUniqueInput>;
  /** Create and connect one RelatedLandingPageTemplateParent document */
  create?: InputMaybe<RelatedLandingPageTemplateParentCreateInput>;
  /** Delete currently connected RelatedLandingPageTemplateParent document */
  delete?: InputMaybe<Scalars['Boolean']['input']>;
  /** Disconnect currently connected RelatedLandingPageTemplateParent document */
  disconnect?: InputMaybe<Scalars['Boolean']['input']>;
  /** Update single RelatedLandingPageTemplateParent document */
  update?: InputMaybe<RelatedLandingPageTemplateParentUpdateWithNestedWhereUniqueInput>;
  /** Upsert single RelatedLandingPageTemplateParent document */
  upsert?: InputMaybe<RelatedLandingPageTemplateParentUpsertWithNestedWhereUniqueInput>;
};

export type RelatedLandingPageTemplateParentUpdateWithNestedWhereUniqueInput = {
  NewLandingPage?: InputMaybe<NewLandingPageUpdateWithNestedWhereUniqueInput>;
};

export type RelatedLandingPageTemplateParentUpsertWithNestedWhereUniqueInput = {
  NewLandingPage?: InputMaybe<NewLandingPageUpsertWithNestedWhereUniqueInput>;
};

export type RelatedLandingPageTemplateParentWhereInput = {
  NewLandingPage?: InputMaybe<NewLandingPageWhereInput>;
};

export type RelatedLandingPageTemplateParentWhereUniqueInput = {
  NewLandingPage?: InputMaybe<NewLandingPageWhereUniqueInput>;
};

export type RelatedLandingPageTemplateUpdateInput = {
  /** leftCtaButton input for default locale (en) */
  leftCtaButton?: InputMaybe<Scalars['String']['input']>;
  /** Manage document localizations */
  localizations?: InputMaybe<RelatedLandingPageTemplateUpdateLocalizationsInput>;
  /** mainDescription input for default locale (en) */
  mainDescription?: InputMaybe<Scalars['String']['input']>;
  /** mainTitle input for default locale (en) */
  mainTitle?: InputMaybe<Scalars['String']['input']>;
  /** rightCtaButton input for default locale (en) */
  rightCtaButton?: InputMaybe<Scalars['String']['input']>;
  templatesInformation?: InputMaybe<TemplatesDetailUpdateManyInlineInput>;
};

export type RelatedLandingPageTemplateUpdateLocalizationDataInput = {
  leftCtaButton?: InputMaybe<Scalars['String']['input']>;
  mainDescription?: InputMaybe<Scalars['String']['input']>;
  mainTitle?: InputMaybe<Scalars['String']['input']>;
  rightCtaButton?: InputMaybe<Scalars['String']['input']>;
};

export type RelatedLandingPageTemplateUpdateLocalizationInput = {
  data: RelatedLandingPageTemplateUpdateLocalizationDataInput;
  locale: Locale;
};

export type RelatedLandingPageTemplateUpdateLocalizationsInput = {
  /** Localizations to create */
  create?: InputMaybe<Array<RelatedLandingPageTemplateCreateLocalizationInput>>;
  /** Localizations to delete */
  delete?: InputMaybe<Array<Locale>>;
  /** Localizations to update */
  update?: InputMaybe<Array<RelatedLandingPageTemplateUpdateLocalizationInput>>;
  upsert?: InputMaybe<Array<RelatedLandingPageTemplateUpsertLocalizationInput>>;
};

export type RelatedLandingPageTemplateUpdateManyInlineInput = {
  /** Create and connect multiple RelatedLandingPageTemplate component instances */
  create?: InputMaybe<Array<RelatedLandingPageTemplateCreateWithPositionInput>>;
  /** Delete multiple RelatedLandingPageTemplate documents */
  delete?: InputMaybe<Array<RelatedLandingPageTemplateWhereUniqueInput>>;
  /** Update multiple RelatedLandingPageTemplate component instances */
  update?: InputMaybe<Array<RelatedLandingPageTemplateUpdateWithNestedWhereUniqueAndPositionInput>>;
  /** Upsert multiple RelatedLandingPageTemplate component instances */
  upsert?: InputMaybe<Array<RelatedLandingPageTemplateUpsertWithNestedWhereUniqueAndPositionInput>>;
};

export type RelatedLandingPageTemplateUpdateManyInput = {
  /** leftCtaButton input for default locale (en) */
  leftCtaButton?: InputMaybe<Scalars['String']['input']>;
  /** Optional updates to localizations */
  localizations?: InputMaybe<RelatedLandingPageTemplateUpdateManyLocalizationsInput>;
  /** mainDescription input for default locale (en) */
  mainDescription?: InputMaybe<Scalars['String']['input']>;
  /** mainTitle input for default locale (en) */
  mainTitle?: InputMaybe<Scalars['String']['input']>;
  /** rightCtaButton input for default locale (en) */
  rightCtaButton?: InputMaybe<Scalars['String']['input']>;
};

export type RelatedLandingPageTemplateUpdateManyLocalizationDataInput = {
  leftCtaButton?: InputMaybe<Scalars['String']['input']>;
  mainDescription?: InputMaybe<Scalars['String']['input']>;
  mainTitle?: InputMaybe<Scalars['String']['input']>;
  rightCtaButton?: InputMaybe<Scalars['String']['input']>;
};

export type RelatedLandingPageTemplateUpdateManyLocalizationInput = {
  data: RelatedLandingPageTemplateUpdateManyLocalizationDataInput;
  locale: Locale;
};

export type RelatedLandingPageTemplateUpdateManyLocalizationsInput = {
  /** Localizations to update */
  update?: InputMaybe<Array<RelatedLandingPageTemplateUpdateManyLocalizationInput>>;
};

export type RelatedLandingPageTemplateUpdateManyWithNestedWhereInput = {
  /** Update many input */
  data: RelatedLandingPageTemplateUpdateManyInput;
  /** Document search */
  where: RelatedLandingPageTemplateWhereInput;
};

export type RelatedLandingPageTemplateUpdateOneInlineInput = {
  /** Create and connect one RelatedLandingPageTemplate document */
  create?: InputMaybe<RelatedLandingPageTemplateCreateInput>;
  /** Delete currently connected RelatedLandingPageTemplate document */
  delete?: InputMaybe<Scalars['Boolean']['input']>;
  /** Update single RelatedLandingPageTemplate document */
  update?: InputMaybe<RelatedLandingPageTemplateUpdateWithNestedWhereUniqueInput>;
  /** Upsert single RelatedLandingPageTemplate document */
  upsert?: InputMaybe<RelatedLandingPageTemplateUpsertWithNestedWhereUniqueInput>;
};

export type RelatedLandingPageTemplateUpdateWithNestedWhereUniqueAndPositionInput = {
  /** Document to update */
  data?: InputMaybe<RelatedLandingPageTemplateUpdateInput>;
  /** Position in the list of existing component instances, will default to appending at the end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Unique component instance search */
  where: RelatedLandingPageTemplateWhereUniqueInput;
};

export type RelatedLandingPageTemplateUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: RelatedLandingPageTemplateUpdateInput;
  /** Unique document search */
  where: RelatedLandingPageTemplateWhereUniqueInput;
};

export type RelatedLandingPageTemplateUpsertInput = {
  /** Create document if it didn't exist */
  create: RelatedLandingPageTemplateCreateInput;
  /** Update document if it exists */
  update: RelatedLandingPageTemplateUpdateInput;
};

export type RelatedLandingPageTemplateUpsertLocalizationInput = {
  create: RelatedLandingPageTemplateCreateLocalizationDataInput;
  locale: Locale;
  update: RelatedLandingPageTemplateUpdateLocalizationDataInput;
};

export type RelatedLandingPageTemplateUpsertWithNestedWhereUniqueAndPositionInput = {
  /** Document to upsert */
  data?: InputMaybe<RelatedLandingPageTemplateUpsertInput>;
  /** Position in the list of existing component instances, will default to appending at the end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Unique component instance search */
  where: RelatedLandingPageTemplateWhereUniqueInput;
};

export type RelatedLandingPageTemplateUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: RelatedLandingPageTemplateUpsertInput;
  /** Unique document search */
  where: RelatedLandingPageTemplateWhereUniqueInput;
};

/** Identifies documents */
export type RelatedLandingPageTemplateWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<RelatedLandingPageTemplateWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<RelatedLandingPageTemplateWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<RelatedLandingPageTemplateWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']['input']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']['input']>;
  leftCtaButton?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  leftCtaButton_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  leftCtaButton_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  leftCtaButton_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  leftCtaButton_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  leftCtaButton_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  leftCtaButton_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  leftCtaButton_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  leftCtaButton_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  leftCtaButton_starts_with?: InputMaybe<Scalars['String']['input']>;
  mainDescription?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  mainDescription_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  mainDescription_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  mainDescription_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  mainDescription_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  mainDescription_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  mainDescription_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  mainDescription_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  mainDescription_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  mainDescription_starts_with?: InputMaybe<Scalars['String']['input']>;
  mainTitle?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  mainTitle_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  mainTitle_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  mainTitle_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  mainTitle_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  mainTitle_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  mainTitle_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  mainTitle_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  mainTitle_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  mainTitle_starts_with?: InputMaybe<Scalars['String']['input']>;
  rightCtaButton?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  rightCtaButton_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  rightCtaButton_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  rightCtaButton_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  rightCtaButton_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  rightCtaButton_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  rightCtaButton_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  rightCtaButton_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  rightCtaButton_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  rightCtaButton_starts_with?: InputMaybe<Scalars['String']['input']>;
  templatesInformation_every?: InputMaybe<TemplatesDetailWhereInput>;
  templatesInformation_none?: InputMaybe<TemplatesDetailWhereInput>;
  templatesInformation_some?: InputMaybe<TemplatesDetailWhereInput>;
};

/** References RelatedLandingPageTemplate record uniquely */
export type RelatedLandingPageTemplateWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']['input']>;
};

export type Review = Entity & Node & {
  __typename?: 'Review';
  /** The time the document was created */
  createdAt: Scalars['DateTime']['output'];
  /** User that created this document */
  createdBy?: Maybe<User>;
  /** Get the document in other stages */
  documentInStages: Array<Review>;
  /** List of Review versions */
  history: Array<Version>;
  /** The unique identifier */
  id: Scalars['ID']['output'];
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  /** User that last published this document */
  publishedBy?: Maybe<User>;
  reviews: Array<ReviewreviewsUnion>;
  scheduledIn: Array<ScheduledOperation>;
  /** System stage field */
  stage: Stage;
  /** The time the document was updated */
  updatedAt: Scalars['DateTime']['output'];
  /** User that last updated this document */
  updatedBy?: Maybe<User>;
};


export type ReviewCreatedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  locales?: InputMaybe<Array<Locale>>;
};


export type ReviewDocumentInStagesArgs = {
  includeCurrent?: Scalars['Boolean']['input'];
  inheritLocale?: Scalars['Boolean']['input'];
  stages?: Array<Stage>;
};


export type ReviewHistoryArgs = {
  limit?: Scalars['Int']['input'];
  skip?: Scalars['Int']['input'];
  stageOverride?: InputMaybe<Stage>;
};


export type ReviewPublishedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  locales?: InputMaybe<Array<Locale>>;
};


export type ReviewReviewsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: InputMaybe<Array<Locale>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type ReviewScheduledInArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: InputMaybe<Array<Locale>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<ScheduledOperationWhereInput>;
};


export type ReviewUpdatedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  locales?: InputMaybe<Array<Locale>>;
};

export type ReviewConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Document to connect */
  where: ReviewWhereUniqueInput;
};

/** A connection to a list of items. */
export type ReviewConnection = {
  __typename?: 'ReviewConnection';
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<ReviewEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type ReviewCreateInput = {
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** Inline mutations for managing document localizations excluding the default locale */
  localizations?: InputMaybe<ReviewCreateLocalizationsInput>;
  reviews?: InputMaybe<ReviewreviewsUnionCreateManyInlineInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type ReviewCreateLocalizationDataInput = {
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type ReviewCreateLocalizationInput = {
  /** Localization input */
  data: ReviewCreateLocalizationDataInput;
  locale: Locale;
};

export type ReviewCreateLocalizationsInput = {
  /** Create localizations for the newly-created document */
  create?: InputMaybe<Array<ReviewCreateLocalizationInput>>;
};

export type ReviewCreateManyInlineInput = {
  /** Connect multiple existing Review documents */
  connect?: InputMaybe<Array<ReviewWhereUniqueInput>>;
  /** Create and connect multiple existing Review documents */
  create?: InputMaybe<Array<ReviewCreateInput>>;
};

export type ReviewCreateOneInlineInput = {
  /** Connect one existing Review document */
  connect?: InputMaybe<ReviewWhereUniqueInput>;
  /** Create and connect one Review document */
  create?: InputMaybe<ReviewCreateInput>;
};

/** An edge in a connection. */
export type ReviewEdge = {
  __typename?: 'ReviewEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: Review;
};

/** Identifies documents */
export type ReviewManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<ReviewWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<ReviewWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<ReviewWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  createdBy?: InputMaybe<UserWhereInput>;
  documentInStages_every?: InputMaybe<ReviewWhereStageInput>;
  documentInStages_none?: InputMaybe<ReviewWhereStageInput>;
  documentInStages_some?: InputMaybe<ReviewWhereStageInput>;
  id?: InputMaybe<Scalars['ID']['input']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']['input']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']['input']>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  /** All values in which the union is empty. */
  reviews_empty?: InputMaybe<Scalars['Boolean']['input']>;
  /** Matches if the modular component contains at least one connection to the item provided to the filter */
  reviews_some?: InputMaybe<ReviewreviewsUnionWhereInput>;
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  updatedBy?: InputMaybe<UserWhereInput>;
};

export enum ReviewOrderByInput {
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC'
}

export type ReviewUpdateInput = {
  /** Manage document localizations */
  localizations?: InputMaybe<ReviewUpdateLocalizationsInput>;
  reviews?: InputMaybe<ReviewreviewsUnionUpdateManyInlineInput>;
};

export type ReviewUpdateLocalizationsInput = {
  /** Localizations to create */
  create?: InputMaybe<Array<ReviewCreateLocalizationInput>>;
  /** Localizations to delete */
  delete?: InputMaybe<Array<Locale>>;
};

export type ReviewUpdateManyInlineInput = {
  /** Connect multiple existing Review documents */
  connect?: InputMaybe<Array<ReviewConnectInput>>;
  /** Create and connect multiple Review documents */
  create?: InputMaybe<Array<ReviewCreateInput>>;
  /** Delete multiple Review documents */
  delete?: InputMaybe<Array<ReviewWhereUniqueInput>>;
  /** Disconnect multiple Review documents */
  disconnect?: InputMaybe<Array<ReviewWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing Review documents */
  set?: InputMaybe<Array<ReviewWhereUniqueInput>>;
  /** Update multiple Review documents */
  update?: InputMaybe<Array<ReviewUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple Review documents */
  upsert?: InputMaybe<Array<ReviewUpsertWithNestedWhereUniqueInput>>;
};

export type ReviewUpdateManyInput = {
  /** No fields in updateMany data input */
  _?: InputMaybe<Scalars['String']['input']>;
};

export type ReviewUpdateManyWithNestedWhereInput = {
  /** Update many input */
  data: ReviewUpdateManyInput;
  /** Document search */
  where: ReviewWhereInput;
};

export type ReviewUpdateOneInlineInput = {
  /** Connect existing Review document */
  connect?: InputMaybe<ReviewWhereUniqueInput>;
  /** Create and connect one Review document */
  create?: InputMaybe<ReviewCreateInput>;
  /** Delete currently connected Review document */
  delete?: InputMaybe<Scalars['Boolean']['input']>;
  /** Disconnect currently connected Review document */
  disconnect?: InputMaybe<Scalars['Boolean']['input']>;
  /** Update single Review document */
  update?: InputMaybe<ReviewUpdateWithNestedWhereUniqueInput>;
  /** Upsert single Review document */
  upsert?: InputMaybe<ReviewUpsertWithNestedWhereUniqueInput>;
};

export type ReviewUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: ReviewUpdateInput;
  /** Unique document search */
  where: ReviewWhereUniqueInput;
};

export type ReviewUpsertInput = {
  /** Create document if it didn't exist */
  create: ReviewCreateInput;
  /** Update document if it exists */
  update: ReviewUpdateInput;
};

export type ReviewUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: ReviewUpsertInput;
  /** Unique document search */
  where: ReviewWhereUniqueInput;
};

/** This contains a set of filters that can be used to compare values internally */
export type ReviewWhereComparatorInput = {
  /** This field can be used to request to check if the entry is outdated by internal comparison */
  outdated_to?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Identifies documents */
export type ReviewWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<ReviewWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<ReviewWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<ReviewWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  createdBy?: InputMaybe<UserWhereInput>;
  documentInStages_every?: InputMaybe<ReviewWhereStageInput>;
  documentInStages_none?: InputMaybe<ReviewWhereStageInput>;
  documentInStages_some?: InputMaybe<ReviewWhereStageInput>;
  id?: InputMaybe<Scalars['ID']['input']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']['input']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']['input']>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  /** All values in which the union is empty. */
  reviews_empty?: InputMaybe<Scalars['Boolean']['input']>;
  /** Matches if the modular component contains at least one connection to the item provided to the filter */
  reviews_some?: InputMaybe<ReviewreviewsUnionWhereInput>;
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  updatedBy?: InputMaybe<UserWhereInput>;
};

/** The document in stages filter allows specifying a stage entry to cross compare the same document between different stages */
export type ReviewWhereStageInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<ReviewWhereStageInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<ReviewWhereStageInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<ReviewWhereStageInput>>;
  /** This field contains fields which can be set as true or false to specify an internal comparison */
  compareWithParent?: InputMaybe<ReviewWhereComparatorInput>;
  /** Specify the stage to compare with */
  stage?: InputMaybe<Stage>;
};

/** References Review record uniquely */
export type ReviewWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']['input']>;
};

export type ReviewreviewsUnion = Testimonial;

export type ReviewreviewsUnionConnectInput = {
  Testimonial?: InputMaybe<TestimonialConnectInput>;
};

export type ReviewreviewsUnionCreateInput = {
  Testimonial?: InputMaybe<TestimonialCreateInput>;
};

export type ReviewreviewsUnionCreateManyInlineInput = {
  /** Create and connect multiple existing ReviewreviewsUnion documents */
  create?: InputMaybe<Array<ReviewreviewsUnionCreateInput>>;
};

export type ReviewreviewsUnionCreateOneInlineInput = {
  /** Create and connect one ReviewreviewsUnion document */
  create?: InputMaybe<ReviewreviewsUnionCreateInput>;
};

export type ReviewreviewsUnionCreateWithPositionInput = {
  Testimonial?: InputMaybe<TestimonialCreateWithPositionInput>;
};

export type ReviewreviewsUnionUpdateInput = {
  Testimonial?: InputMaybe<TestimonialUpdateInput>;
};

export type ReviewreviewsUnionUpdateManyInlineInput = {
  /** Create and connect multiple ReviewreviewsUnion component instances */
  create?: InputMaybe<Array<ReviewreviewsUnionCreateWithPositionInput>>;
  /** Delete multiple ReviewreviewsUnion documents */
  delete?: InputMaybe<Array<ReviewreviewsUnionWhereUniqueInput>>;
  /** Update multiple ReviewreviewsUnion component instances */
  update?: InputMaybe<Array<ReviewreviewsUnionUpdateWithNestedWhereUniqueAndPositionInput>>;
  /** Upsert multiple ReviewreviewsUnion component instances */
  upsert?: InputMaybe<Array<ReviewreviewsUnionUpsertWithNestedWhereUniqueAndPositionInput>>;
};

export type ReviewreviewsUnionUpdateManyWithNestedWhereInput = {
  Testimonial?: InputMaybe<TestimonialUpdateManyWithNestedWhereInput>;
};

export type ReviewreviewsUnionUpdateOneInlineInput = {
  /** Create and connect one ReviewreviewsUnion document */
  create?: InputMaybe<ReviewreviewsUnionCreateInput>;
  /** Delete currently connected ReviewreviewsUnion document */
  delete?: InputMaybe<Scalars['Boolean']['input']>;
  /** Update single ReviewreviewsUnion document */
  update?: InputMaybe<ReviewreviewsUnionUpdateWithNestedWhereUniqueInput>;
  /** Upsert single ReviewreviewsUnion document */
  upsert?: InputMaybe<ReviewreviewsUnionUpsertWithNestedWhereUniqueInput>;
};

export type ReviewreviewsUnionUpdateWithNestedWhereUniqueAndPositionInput = {
  Testimonial?: InputMaybe<TestimonialUpdateWithNestedWhereUniqueAndPositionInput>;
};

export type ReviewreviewsUnionUpdateWithNestedWhereUniqueInput = {
  Testimonial?: InputMaybe<TestimonialUpdateWithNestedWhereUniqueInput>;
};

export type ReviewreviewsUnionUpsertWithNestedWhereUniqueAndPositionInput = {
  Testimonial?: InputMaybe<TestimonialUpsertWithNestedWhereUniqueAndPositionInput>;
};

export type ReviewreviewsUnionUpsertWithNestedWhereUniqueInput = {
  Testimonial?: InputMaybe<TestimonialUpsertWithNestedWhereUniqueInput>;
};

export type ReviewreviewsUnionWhereInput = {
  Testimonial?: InputMaybe<TestimonialWhereInput>;
};

export type ReviewreviewsUnionWhereUniqueInput = {
  Testimonial?: InputMaybe<TestimonialWhereUniqueInput>;
};

/** Custom type representing a rich text value comprising of raw rich text ast, html, markdown and text values */
export type RichText = {
  __typename?: 'RichText';
  /** Returns HTMl representation */
  html: Scalars['String']['output'];
  /** Returns Markdown representation */
  markdown: Scalars['String']['output'];
  /** Returns AST representation */
  raw: Scalars['RichTextAST']['output'];
  /** Returns plain-text contents of RichText */
  text: Scalars['String']['output'];
};

/** Scheduled Operation system model */
export type ScheduledOperation = Entity & Node & {
  __typename?: 'ScheduledOperation';
  affectedDocuments: Array<ScheduledOperationAffectedDocument>;
  /** The time the document was created */
  createdAt: Scalars['DateTime']['output'];
  /** User that created this document */
  createdBy?: Maybe<User>;
  /** Operation description */
  description?: Maybe<Scalars['String']['output']>;
  /** Get the document in other stages */
  documentInStages: Array<ScheduledOperation>;
  /** Operation error message */
  errorMessage?: Maybe<Scalars['String']['output']>;
  /** The unique identifier */
  id: Scalars['ID']['output'];
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  /** User that last published this document */
  publishedBy?: Maybe<User>;
  /** Raw operation payload including all details, this field is subject to change */
  rawPayload: Scalars['Json']['output'];
  /** The release this operation is scheduled for */
  release?: Maybe<ScheduledRelease>;
  /** System stage field */
  stage: Stage;
  /** operation Status */
  status: ScheduledOperationStatus;
  /** The time the document was updated */
  updatedAt: Scalars['DateTime']['output'];
  /** User that last updated this document */
  updatedBy?: Maybe<User>;
};


/** Scheduled Operation system model */
export type ScheduledOperationAffectedDocumentsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: InputMaybe<Array<Locale>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


/** Scheduled Operation system model */
export type ScheduledOperationCreatedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  locales?: InputMaybe<Array<Locale>>;
};


/** Scheduled Operation system model */
export type ScheduledOperationDocumentInStagesArgs = {
  includeCurrent?: Scalars['Boolean']['input'];
  inheritLocale?: Scalars['Boolean']['input'];
  stages?: Array<Stage>;
};


/** Scheduled Operation system model */
export type ScheduledOperationPublishedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  locales?: InputMaybe<Array<Locale>>;
};


/** Scheduled Operation system model */
export type ScheduledOperationReleaseArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  locales?: InputMaybe<Array<Locale>>;
};


/** Scheduled Operation system model */
export type ScheduledOperationUpdatedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  locales?: InputMaybe<Array<Locale>>;
};

export type ScheduledOperationAffectedDocument = Asset | Author | Keyword | LandingPage | NewLandingPage | Post | PrivacyPolicy | Review | Tag;

export type ScheduledOperationConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Document to connect */
  where: ScheduledOperationWhereUniqueInput;
};

/** A connection to a list of items. */
export type ScheduledOperationConnection = {
  __typename?: 'ScheduledOperationConnection';
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<ScheduledOperationEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type ScheduledOperationCreateManyInlineInput = {
  /** Connect multiple existing ScheduledOperation documents */
  connect?: InputMaybe<Array<ScheduledOperationWhereUniqueInput>>;
};

export type ScheduledOperationCreateOneInlineInput = {
  /** Connect one existing ScheduledOperation document */
  connect?: InputMaybe<ScheduledOperationWhereUniqueInput>;
};

/** An edge in a connection. */
export type ScheduledOperationEdge = {
  __typename?: 'ScheduledOperationEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: ScheduledOperation;
};

/** Identifies documents */
export type ScheduledOperationManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<ScheduledOperationWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<ScheduledOperationWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<ScheduledOperationWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  createdBy?: InputMaybe<UserWhereInput>;
  description?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  description_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  description_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  description_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  description_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  description_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  description_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  description_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  description_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  description_starts_with?: InputMaybe<Scalars['String']['input']>;
  errorMessage?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  errorMessage_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  errorMessage_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  errorMessage_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  errorMessage_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  errorMessage_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  errorMessage_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  errorMessage_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  errorMessage_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  errorMessage_starts_with?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']['input']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']['input']>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  /** All values containing the given json path. */
  rawPayload_json_path_exists?: InputMaybe<Scalars['String']['input']>;
  /**
   * Recursively tries to find the provided JSON scalar value inside the field.
   * It does use an exact match when comparing values.
   * If you pass `null` as value the filter will be ignored.
   * Note: This filter fails if you try to look for a non scalar JSON value!
   */
  rawPayload_value_recursive?: InputMaybe<Scalars['Json']['input']>;
  release?: InputMaybe<ScheduledReleaseWhereInput>;
  status?: InputMaybe<ScheduledOperationStatus>;
  /** All values that are contained in given list. */
  status_in?: InputMaybe<Array<InputMaybe<ScheduledOperationStatus>>>;
  /** Any other value that exists and is not equal to the given value. */
  status_not?: InputMaybe<ScheduledOperationStatus>;
  /** All values that are not contained in given list. */
  status_not_in?: InputMaybe<Array<InputMaybe<ScheduledOperationStatus>>>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  updatedBy?: InputMaybe<UserWhereInput>;
};

export enum ScheduledOperationOrderByInput {
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  DescriptionAsc = 'description_ASC',
  DescriptionDesc = 'description_DESC',
  ErrorMessageAsc = 'errorMessage_ASC',
  ErrorMessageDesc = 'errorMessage_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  StatusAsc = 'status_ASC',
  StatusDesc = 'status_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC'
}

/** System Scheduled Operation Status */
export enum ScheduledOperationStatus {
  Canceled = 'CANCELED',
  Completed = 'COMPLETED',
  Failed = 'FAILED',
  InProgress = 'IN_PROGRESS',
  Pending = 'PENDING'
}

export type ScheduledOperationUpdateManyInlineInput = {
  /** Connect multiple existing ScheduledOperation documents */
  connect?: InputMaybe<Array<ScheduledOperationConnectInput>>;
  /** Disconnect multiple ScheduledOperation documents */
  disconnect?: InputMaybe<Array<ScheduledOperationWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing ScheduledOperation documents */
  set?: InputMaybe<Array<ScheduledOperationWhereUniqueInput>>;
};

export type ScheduledOperationUpdateOneInlineInput = {
  /** Connect existing ScheduledOperation document */
  connect?: InputMaybe<ScheduledOperationWhereUniqueInput>;
  /** Disconnect currently connected ScheduledOperation document */
  disconnect?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Identifies documents */
export type ScheduledOperationWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<ScheduledOperationWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<ScheduledOperationWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<ScheduledOperationWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  createdBy?: InputMaybe<UserWhereInput>;
  description?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  description_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  description_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  description_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  description_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  description_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  description_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  description_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  description_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  description_starts_with?: InputMaybe<Scalars['String']['input']>;
  errorMessage?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  errorMessage_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  errorMessage_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  errorMessage_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  errorMessage_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  errorMessage_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  errorMessage_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  errorMessage_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  errorMessage_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  errorMessage_starts_with?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']['input']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']['input']>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  /** All values containing the given json path. */
  rawPayload_json_path_exists?: InputMaybe<Scalars['String']['input']>;
  /**
   * Recursively tries to find the provided JSON scalar value inside the field.
   * It does use an exact match when comparing values.
   * If you pass `null` as value the filter will be ignored.
   * Note: This filter fails if you try to look for a non scalar JSON value!
   */
  rawPayload_value_recursive?: InputMaybe<Scalars['Json']['input']>;
  release?: InputMaybe<ScheduledReleaseWhereInput>;
  status?: InputMaybe<ScheduledOperationStatus>;
  /** All values that are contained in given list. */
  status_in?: InputMaybe<Array<InputMaybe<ScheduledOperationStatus>>>;
  /** Any other value that exists and is not equal to the given value. */
  status_not?: InputMaybe<ScheduledOperationStatus>;
  /** All values that are not contained in given list. */
  status_not_in?: InputMaybe<Array<InputMaybe<ScheduledOperationStatus>>>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  updatedBy?: InputMaybe<UserWhereInput>;
};

/** References ScheduledOperation record uniquely */
export type ScheduledOperationWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']['input']>;
};

/** Scheduled Release system model */
export type ScheduledRelease = Entity & Node & {
  __typename?: 'ScheduledRelease';
  /** The time the document was created */
  createdAt: Scalars['DateTime']['output'];
  /** User that created this document */
  createdBy?: Maybe<User>;
  /** Release description */
  description?: Maybe<Scalars['String']['output']>;
  /** Get the document in other stages */
  documentInStages: Array<ScheduledRelease>;
  /** Release error message */
  errorMessage?: Maybe<Scalars['String']['output']>;
  /** The unique identifier */
  id: Scalars['ID']['output'];
  /** Whether scheduled release should be run */
  isActive: Scalars['Boolean']['output'];
  /** Whether scheduled release is implicit */
  isImplicit: Scalars['Boolean']['output'];
  /** Operations to run with this release */
  operations: Array<ScheduledOperation>;
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  /** User that last published this document */
  publishedBy?: Maybe<User>;
  /** Release date and time */
  releaseAt?: Maybe<Scalars['DateTime']['output']>;
  /** System stage field */
  stage: Stage;
  /** Release Status */
  status: ScheduledReleaseStatus;
  /** Release Title */
  title?: Maybe<Scalars['String']['output']>;
  /** The time the document was updated */
  updatedAt: Scalars['DateTime']['output'];
  /** User that last updated this document */
  updatedBy?: Maybe<User>;
};


/** Scheduled Release system model */
export type ScheduledReleaseCreatedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  locales?: InputMaybe<Array<Locale>>;
};


/** Scheduled Release system model */
export type ScheduledReleaseDocumentInStagesArgs = {
  includeCurrent?: Scalars['Boolean']['input'];
  inheritLocale?: Scalars['Boolean']['input'];
  stages?: Array<Stage>;
};


/** Scheduled Release system model */
export type ScheduledReleaseOperationsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: InputMaybe<Array<Locale>>;
  orderBy?: InputMaybe<ScheduledOperationOrderByInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<ScheduledOperationWhereInput>;
};


/** Scheduled Release system model */
export type ScheduledReleasePublishedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  locales?: InputMaybe<Array<Locale>>;
};


/** Scheduled Release system model */
export type ScheduledReleaseUpdatedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  locales?: InputMaybe<Array<Locale>>;
};

export type ScheduledReleaseConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Document to connect */
  where: ScheduledReleaseWhereUniqueInput;
};

/** A connection to a list of items. */
export type ScheduledReleaseConnection = {
  __typename?: 'ScheduledReleaseConnection';
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<ScheduledReleaseEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type ScheduledReleaseCreateInput = {
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  errorMessage?: InputMaybe<Scalars['String']['input']>;
  isActive?: InputMaybe<Scalars['Boolean']['input']>;
  releaseAt?: InputMaybe<Scalars['DateTime']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type ScheduledReleaseCreateManyInlineInput = {
  /** Connect multiple existing ScheduledRelease documents */
  connect?: InputMaybe<Array<ScheduledReleaseWhereUniqueInput>>;
  /** Create and connect multiple existing ScheduledRelease documents */
  create?: InputMaybe<Array<ScheduledReleaseCreateInput>>;
};

export type ScheduledReleaseCreateOneInlineInput = {
  /** Connect one existing ScheduledRelease document */
  connect?: InputMaybe<ScheduledReleaseWhereUniqueInput>;
  /** Create and connect one ScheduledRelease document */
  create?: InputMaybe<ScheduledReleaseCreateInput>;
};

/** An edge in a connection. */
export type ScheduledReleaseEdge = {
  __typename?: 'ScheduledReleaseEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: ScheduledRelease;
};

/** Identifies documents */
export type ScheduledReleaseManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<ScheduledReleaseWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<ScheduledReleaseWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<ScheduledReleaseWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  createdBy?: InputMaybe<UserWhereInput>;
  description?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  description_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  description_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  description_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  description_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  description_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  description_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  description_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  description_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  description_starts_with?: InputMaybe<Scalars['String']['input']>;
  errorMessage?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  errorMessage_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  errorMessage_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  errorMessage_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  errorMessage_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  errorMessage_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  errorMessage_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  errorMessage_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  errorMessage_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  errorMessage_starts_with?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']['input']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']['input']>;
  isActive?: InputMaybe<Scalars['Boolean']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  isActive_not?: InputMaybe<Scalars['Boolean']['input']>;
  isImplicit?: InputMaybe<Scalars['Boolean']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  isImplicit_not?: InputMaybe<Scalars['Boolean']['input']>;
  operations_every?: InputMaybe<ScheduledOperationWhereInput>;
  operations_none?: InputMaybe<ScheduledOperationWhereInput>;
  operations_some?: InputMaybe<ScheduledOperationWhereInput>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  releaseAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  releaseAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  releaseAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  releaseAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  releaseAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  releaseAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  releaseAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  releaseAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  status?: InputMaybe<ScheduledReleaseStatus>;
  /** All values that are contained in given list. */
  status_in?: InputMaybe<Array<InputMaybe<ScheduledReleaseStatus>>>;
  /** Any other value that exists and is not equal to the given value. */
  status_not?: InputMaybe<ScheduledReleaseStatus>;
  /** All values that are not contained in given list. */
  status_not_in?: InputMaybe<Array<InputMaybe<ScheduledReleaseStatus>>>;
  title?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  title_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  title_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  title_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  title_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  title_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  title_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  title_starts_with?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  updatedBy?: InputMaybe<UserWhereInput>;
};

export enum ScheduledReleaseOrderByInput {
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  DescriptionAsc = 'description_ASC',
  DescriptionDesc = 'description_DESC',
  ErrorMessageAsc = 'errorMessage_ASC',
  ErrorMessageDesc = 'errorMessage_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  IsActiveAsc = 'isActive_ASC',
  IsActiveDesc = 'isActive_DESC',
  IsImplicitAsc = 'isImplicit_ASC',
  IsImplicitDesc = 'isImplicit_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  ReleaseAtAsc = 'releaseAt_ASC',
  ReleaseAtDesc = 'releaseAt_DESC',
  StatusAsc = 'status_ASC',
  StatusDesc = 'status_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC'
}

/** System Scheduled Release Status */
export enum ScheduledReleaseStatus {
  Completed = 'COMPLETED',
  Failed = 'FAILED',
  InProgress = 'IN_PROGRESS',
  Pending = 'PENDING'
}

export type ScheduledReleaseUpdateInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  errorMessage?: InputMaybe<Scalars['String']['input']>;
  isActive?: InputMaybe<Scalars['Boolean']['input']>;
  releaseAt?: InputMaybe<Scalars['DateTime']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type ScheduledReleaseUpdateManyInlineInput = {
  /** Connect multiple existing ScheduledRelease documents */
  connect?: InputMaybe<Array<ScheduledReleaseConnectInput>>;
  /** Create and connect multiple ScheduledRelease documents */
  create?: InputMaybe<Array<ScheduledReleaseCreateInput>>;
  /** Delete multiple ScheduledRelease documents */
  delete?: InputMaybe<Array<ScheduledReleaseWhereUniqueInput>>;
  /** Disconnect multiple ScheduledRelease documents */
  disconnect?: InputMaybe<Array<ScheduledReleaseWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing ScheduledRelease documents */
  set?: InputMaybe<Array<ScheduledReleaseWhereUniqueInput>>;
  /** Update multiple ScheduledRelease documents */
  update?: InputMaybe<Array<ScheduledReleaseUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple ScheduledRelease documents */
  upsert?: InputMaybe<Array<ScheduledReleaseUpsertWithNestedWhereUniqueInput>>;
};

export type ScheduledReleaseUpdateManyInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  errorMessage?: InputMaybe<Scalars['String']['input']>;
  isActive?: InputMaybe<Scalars['Boolean']['input']>;
  releaseAt?: InputMaybe<Scalars['DateTime']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type ScheduledReleaseUpdateManyWithNestedWhereInput = {
  /** Update many input */
  data: ScheduledReleaseUpdateManyInput;
  /** Document search */
  where: ScheduledReleaseWhereInput;
};

export type ScheduledReleaseUpdateOneInlineInput = {
  /** Connect existing ScheduledRelease document */
  connect?: InputMaybe<ScheduledReleaseWhereUniqueInput>;
  /** Create and connect one ScheduledRelease document */
  create?: InputMaybe<ScheduledReleaseCreateInput>;
  /** Delete currently connected ScheduledRelease document */
  delete?: InputMaybe<Scalars['Boolean']['input']>;
  /** Disconnect currently connected ScheduledRelease document */
  disconnect?: InputMaybe<Scalars['Boolean']['input']>;
  /** Update single ScheduledRelease document */
  update?: InputMaybe<ScheduledReleaseUpdateWithNestedWhereUniqueInput>;
  /** Upsert single ScheduledRelease document */
  upsert?: InputMaybe<ScheduledReleaseUpsertWithNestedWhereUniqueInput>;
};

export type ScheduledReleaseUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: ScheduledReleaseUpdateInput;
  /** Unique document search */
  where: ScheduledReleaseWhereUniqueInput;
};

export type ScheduledReleaseUpsertInput = {
  /** Create document if it didn't exist */
  create: ScheduledReleaseCreateInput;
  /** Update document if it exists */
  update: ScheduledReleaseUpdateInput;
};

export type ScheduledReleaseUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: ScheduledReleaseUpsertInput;
  /** Unique document search */
  where: ScheduledReleaseWhereUniqueInput;
};

/** Identifies documents */
export type ScheduledReleaseWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<ScheduledReleaseWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<ScheduledReleaseWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<ScheduledReleaseWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  createdBy?: InputMaybe<UserWhereInput>;
  description?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  description_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  description_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  description_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  description_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  description_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  description_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  description_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  description_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  description_starts_with?: InputMaybe<Scalars['String']['input']>;
  errorMessage?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  errorMessage_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  errorMessage_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  errorMessage_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  errorMessage_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  errorMessage_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  errorMessage_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  errorMessage_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  errorMessage_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  errorMessage_starts_with?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']['input']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']['input']>;
  isActive?: InputMaybe<Scalars['Boolean']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  isActive_not?: InputMaybe<Scalars['Boolean']['input']>;
  isImplicit?: InputMaybe<Scalars['Boolean']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  isImplicit_not?: InputMaybe<Scalars['Boolean']['input']>;
  operations_every?: InputMaybe<ScheduledOperationWhereInput>;
  operations_none?: InputMaybe<ScheduledOperationWhereInput>;
  operations_some?: InputMaybe<ScheduledOperationWhereInput>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  releaseAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  releaseAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  releaseAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  releaseAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  releaseAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  releaseAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  releaseAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  releaseAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  status?: InputMaybe<ScheduledReleaseStatus>;
  /** All values that are contained in given list. */
  status_in?: InputMaybe<Array<InputMaybe<ScheduledReleaseStatus>>>;
  /** Any other value that exists and is not equal to the given value. */
  status_not?: InputMaybe<ScheduledReleaseStatus>;
  /** All values that are not contained in given list. */
  status_not_in?: InputMaybe<Array<InputMaybe<ScheduledReleaseStatus>>>;
  title?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  title_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  title_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  title_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  title_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  title_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  title_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  title_starts_with?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  updatedBy?: InputMaybe<UserWhereInput>;
};

/** References ScheduledRelease record uniquely */
export type ScheduledReleaseWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']['input']>;
};

export type SeoOverride = Entity & {
  __typename?: 'SeoOverride';
  description?: Maybe<Scalars['String']['output']>;
  /** The unique identifier */
  id: Scalars['ID']['output'];
  keywords: Array<Scalars['String']['output']>;
  /** System stage field */
  stage: Stage;
  title?: Maybe<Scalars['String']['output']>;
};

export type SeoOverrideConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Document to connect */
  where: SeoOverrideWhereUniqueInput;
};

/** A connection to a list of items. */
export type SeoOverrideConnection = {
  __typename?: 'SeoOverrideConnection';
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<SeoOverrideEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type SeoOverrideCreateInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  keywords?: InputMaybe<Array<Scalars['String']['input']>>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type SeoOverrideCreateManyInlineInput = {
  /** Create and connect multiple existing SeoOverride documents */
  create?: InputMaybe<Array<SeoOverrideCreateInput>>;
};

export type SeoOverrideCreateOneInlineInput = {
  /** Create and connect one SeoOverride document */
  create?: InputMaybe<SeoOverrideCreateInput>;
};

export type SeoOverrideCreateWithPositionInput = {
  /** Document to create */
  data: SeoOverrideCreateInput;
  /** Position in the list of existing component instances, will default to appending at the end of list */
  position?: InputMaybe<ConnectPositionInput>;
};

/** An edge in a connection. */
export type SeoOverrideEdge = {
  __typename?: 'SeoOverrideEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: SeoOverride;
};

/** Identifies documents */
export type SeoOverrideManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<SeoOverrideWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<SeoOverrideWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<SeoOverrideWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  description_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  description_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  description_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  description_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  description_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  description_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  description_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  description_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  description_starts_with?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']['input']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']['input']>;
  /** Matches if the field array contains *all* items provided to the filter and order does match */
  keywords?: InputMaybe<Array<Scalars['String']['input']>>;
  /** Matches if the field array contains *all* items provided to the filter */
  keywords_contains_all?: InputMaybe<Array<Scalars['String']['input']>>;
  /** Matches if the field array does not contain any of the items provided to the filter */
  keywords_contains_none?: InputMaybe<Array<Scalars['String']['input']>>;
  /** Matches if the field array contains at least one item provided to the filter */
  keywords_contains_some?: InputMaybe<Array<Scalars['String']['input']>>;
  /** Matches if the field array does not contains *all* items provided to the filter or order does not match */
  keywords_not?: InputMaybe<Array<Scalars['String']['input']>>;
  title?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  title_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  title_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  title_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  title_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  title_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  title_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  title_starts_with?: InputMaybe<Scalars['String']['input']>;
};

export enum SeoOverrideOrderByInput {
  DescriptionAsc = 'description_ASC',
  DescriptionDesc = 'description_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  KeywordsAsc = 'keywords_ASC',
  KeywordsDesc = 'keywords_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC'
}

export type SeoOverrideParent = Post;

export type SeoOverrideParentConnectInput = {
  Post?: InputMaybe<PostConnectInput>;
};

export type SeoOverrideParentCreateInput = {
  Post?: InputMaybe<PostCreateInput>;
};

export type SeoOverrideParentCreateManyInlineInput = {
  /** Connect multiple existing SeoOverrideParent documents */
  connect?: InputMaybe<Array<SeoOverrideParentWhereUniqueInput>>;
  /** Create and connect multiple existing SeoOverrideParent documents */
  create?: InputMaybe<Array<SeoOverrideParentCreateInput>>;
};

export type SeoOverrideParentCreateOneInlineInput = {
  /** Connect one existing SeoOverrideParent document */
  connect?: InputMaybe<SeoOverrideParentWhereUniqueInput>;
  /** Create and connect one SeoOverrideParent document */
  create?: InputMaybe<SeoOverrideParentCreateInput>;
};

export type SeoOverrideParentUpdateInput = {
  Post?: InputMaybe<PostUpdateInput>;
};

export type SeoOverrideParentUpdateManyInlineInput = {
  /** Connect multiple existing SeoOverrideParent documents */
  connect?: InputMaybe<Array<SeoOverrideParentConnectInput>>;
  /** Create and connect multiple SeoOverrideParent documents */
  create?: InputMaybe<Array<SeoOverrideParentCreateInput>>;
  /** Delete multiple SeoOverrideParent documents */
  delete?: InputMaybe<Array<SeoOverrideParentWhereUniqueInput>>;
  /** Disconnect multiple SeoOverrideParent documents */
  disconnect?: InputMaybe<Array<SeoOverrideParentWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing SeoOverrideParent documents */
  set?: InputMaybe<Array<SeoOverrideParentWhereUniqueInput>>;
  /** Update multiple SeoOverrideParent documents */
  update?: InputMaybe<Array<SeoOverrideParentUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple SeoOverrideParent documents */
  upsert?: InputMaybe<Array<SeoOverrideParentUpsertWithNestedWhereUniqueInput>>;
};

export type SeoOverrideParentUpdateManyWithNestedWhereInput = {
  Post?: InputMaybe<PostUpdateManyWithNestedWhereInput>;
};

export type SeoOverrideParentUpdateOneInlineInput = {
  /** Connect existing SeoOverrideParent document */
  connect?: InputMaybe<SeoOverrideParentWhereUniqueInput>;
  /** Create and connect one SeoOverrideParent document */
  create?: InputMaybe<SeoOverrideParentCreateInput>;
  /** Delete currently connected SeoOverrideParent document */
  delete?: InputMaybe<Scalars['Boolean']['input']>;
  /** Disconnect currently connected SeoOverrideParent document */
  disconnect?: InputMaybe<Scalars['Boolean']['input']>;
  /** Update single SeoOverrideParent document */
  update?: InputMaybe<SeoOverrideParentUpdateWithNestedWhereUniqueInput>;
  /** Upsert single SeoOverrideParent document */
  upsert?: InputMaybe<SeoOverrideParentUpsertWithNestedWhereUniqueInput>;
};

export type SeoOverrideParentUpdateWithNestedWhereUniqueInput = {
  Post?: InputMaybe<PostUpdateWithNestedWhereUniqueInput>;
};

export type SeoOverrideParentUpsertWithNestedWhereUniqueInput = {
  Post?: InputMaybe<PostUpsertWithNestedWhereUniqueInput>;
};

export type SeoOverrideParentWhereInput = {
  Post?: InputMaybe<PostWhereInput>;
};

export type SeoOverrideParentWhereUniqueInput = {
  Post?: InputMaybe<PostWhereUniqueInput>;
};

export type SeoOverrideUpdateInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  keywords?: InputMaybe<Array<Scalars['String']['input']>>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type SeoOverrideUpdateManyInlineInput = {
  /** Create and connect multiple SeoOverride component instances */
  create?: InputMaybe<Array<SeoOverrideCreateWithPositionInput>>;
  /** Delete multiple SeoOverride documents */
  delete?: InputMaybe<Array<SeoOverrideWhereUniqueInput>>;
  /** Update multiple SeoOverride component instances */
  update?: InputMaybe<Array<SeoOverrideUpdateWithNestedWhereUniqueAndPositionInput>>;
  /** Upsert multiple SeoOverride component instances */
  upsert?: InputMaybe<Array<SeoOverrideUpsertWithNestedWhereUniqueAndPositionInput>>;
};

export type SeoOverrideUpdateManyInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  keywords?: InputMaybe<Array<Scalars['String']['input']>>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type SeoOverrideUpdateManyWithNestedWhereInput = {
  /** Update many input */
  data: SeoOverrideUpdateManyInput;
  /** Document search */
  where: SeoOverrideWhereInput;
};

export type SeoOverrideUpdateOneInlineInput = {
  /** Create and connect one SeoOverride document */
  create?: InputMaybe<SeoOverrideCreateInput>;
  /** Delete currently connected SeoOverride document */
  delete?: InputMaybe<Scalars['Boolean']['input']>;
  /** Update single SeoOverride document */
  update?: InputMaybe<SeoOverrideUpdateWithNestedWhereUniqueInput>;
  /** Upsert single SeoOverride document */
  upsert?: InputMaybe<SeoOverrideUpsertWithNestedWhereUniqueInput>;
};

export type SeoOverrideUpdateWithNestedWhereUniqueAndPositionInput = {
  /** Document to update */
  data?: InputMaybe<SeoOverrideUpdateInput>;
  /** Position in the list of existing component instances, will default to appending at the end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Unique component instance search */
  where: SeoOverrideWhereUniqueInput;
};

export type SeoOverrideUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: SeoOverrideUpdateInput;
  /** Unique document search */
  where: SeoOverrideWhereUniqueInput;
};

export type SeoOverrideUpsertInput = {
  /** Create document if it didn't exist */
  create: SeoOverrideCreateInput;
  /** Update document if it exists */
  update: SeoOverrideUpdateInput;
};

export type SeoOverrideUpsertWithNestedWhereUniqueAndPositionInput = {
  /** Document to upsert */
  data?: InputMaybe<SeoOverrideUpsertInput>;
  /** Position in the list of existing component instances, will default to appending at the end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Unique component instance search */
  where: SeoOverrideWhereUniqueInput;
};

export type SeoOverrideUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: SeoOverrideUpsertInput;
  /** Unique document search */
  where: SeoOverrideWhereUniqueInput;
};

/** Identifies documents */
export type SeoOverrideWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<SeoOverrideWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<SeoOverrideWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<SeoOverrideWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  description_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  description_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  description_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  description_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  description_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  description_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  description_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  description_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  description_starts_with?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']['input']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']['input']>;
  /** Matches if the field array contains *all* items provided to the filter and order does match */
  keywords?: InputMaybe<Array<Scalars['String']['input']>>;
  /** Matches if the field array contains *all* items provided to the filter */
  keywords_contains_all?: InputMaybe<Array<Scalars['String']['input']>>;
  /** Matches if the field array does not contain any of the items provided to the filter */
  keywords_contains_none?: InputMaybe<Array<Scalars['String']['input']>>;
  /** Matches if the field array contains at least one item provided to the filter */
  keywords_contains_some?: InputMaybe<Array<Scalars['String']['input']>>;
  /** Matches if the field array does not contains *all* items provided to the filter or order does not match */
  keywords_not?: InputMaybe<Array<Scalars['String']['input']>>;
  title?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  title_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  title_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  title_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  title_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  title_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  title_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  title_starts_with?: InputMaybe<Scalars['String']['input']>;
};

/** References SeoOverride record uniquely */
export type SeoOverrideWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']['input']>;
};

export type SideBySideCompare = Entity & {
  __typename?: 'SideBySideCompare';
  collections: Array<SideBySideComparecollectionsUnion>;
  /** The unique identifier */
  id: Scalars['ID']['output'];
  /** System stage field */
  stage: Stage;
  subtitle?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
};


export type SideBySideCompareCollectionsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: InputMaybe<Array<Locale>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};

export type SideBySideCompareConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Document to connect */
  where: SideBySideCompareWhereUniqueInput;
};

/** A connection to a list of items. */
export type SideBySideCompareConnection = {
  __typename?: 'SideBySideCompareConnection';
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<SideBySideCompareEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type SideBySideCompareCreateInput = {
  collections?: InputMaybe<SideBySideComparecollectionsUnionCreateManyInlineInput>;
  subtitle?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type SideBySideCompareCreateManyInlineInput = {
  /** Create and connect multiple existing SideBySideCompare documents */
  create?: InputMaybe<Array<SideBySideCompareCreateInput>>;
};

export type SideBySideCompareCreateOneInlineInput = {
  /** Create and connect one SideBySideCompare document */
  create?: InputMaybe<SideBySideCompareCreateInput>;
};

export type SideBySideCompareCreateWithPositionInput = {
  /** Document to create */
  data: SideBySideCompareCreateInput;
  /** Position in the list of existing component instances, will default to appending at the end of list */
  position?: InputMaybe<ConnectPositionInput>;
};

/** An edge in a connection. */
export type SideBySideCompareEdge = {
  __typename?: 'SideBySideCompareEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: SideBySideCompare;
};

/** Identifies documents */
export type SideBySideCompareManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<SideBySideCompareWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<SideBySideCompareWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<SideBySideCompareWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']['input']>;
  /** All values in which the union is empty. */
  collections_empty?: InputMaybe<Scalars['Boolean']['input']>;
  /** Matches if the modular component contains at least one connection to the item provided to the filter */
  collections_some?: InputMaybe<SideBySideComparecollectionsUnionWhereInput>;
  id?: InputMaybe<Scalars['ID']['input']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']['input']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']['input']>;
  subtitle?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  subtitle_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  subtitle_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  subtitle_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  subtitle_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  subtitle_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  subtitle_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  subtitle_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  subtitle_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  subtitle_starts_with?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  title_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  title_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  title_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  title_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  title_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  title_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  title_starts_with?: InputMaybe<Scalars['String']['input']>;
};

export enum SideBySideCompareOrderByInput {
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  SubtitleAsc = 'subtitle_ASC',
  SubtitleDesc = 'subtitle_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC'
}

export type SideBySideCompareParent = LandingPage;

export type SideBySideCompareParentConnectInput = {
  LandingPage?: InputMaybe<LandingPageConnectInput>;
};

export type SideBySideCompareParentCreateInput = {
  LandingPage?: InputMaybe<LandingPageCreateInput>;
};

export type SideBySideCompareParentCreateManyInlineInput = {
  /** Connect multiple existing SideBySideCompareParent documents */
  connect?: InputMaybe<Array<SideBySideCompareParentWhereUniqueInput>>;
  /** Create and connect multiple existing SideBySideCompareParent documents */
  create?: InputMaybe<Array<SideBySideCompareParentCreateInput>>;
};

export type SideBySideCompareParentCreateOneInlineInput = {
  /** Connect one existing SideBySideCompareParent document */
  connect?: InputMaybe<SideBySideCompareParentWhereUniqueInput>;
  /** Create and connect one SideBySideCompareParent document */
  create?: InputMaybe<SideBySideCompareParentCreateInput>;
};

export type SideBySideCompareParentUpdateInput = {
  LandingPage?: InputMaybe<LandingPageUpdateInput>;
};

export type SideBySideCompareParentUpdateManyInlineInput = {
  /** Connect multiple existing SideBySideCompareParent documents */
  connect?: InputMaybe<Array<SideBySideCompareParentConnectInput>>;
  /** Create and connect multiple SideBySideCompareParent documents */
  create?: InputMaybe<Array<SideBySideCompareParentCreateInput>>;
  /** Delete multiple SideBySideCompareParent documents */
  delete?: InputMaybe<Array<SideBySideCompareParentWhereUniqueInput>>;
  /** Disconnect multiple SideBySideCompareParent documents */
  disconnect?: InputMaybe<Array<SideBySideCompareParentWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing SideBySideCompareParent documents */
  set?: InputMaybe<Array<SideBySideCompareParentWhereUniqueInput>>;
  /** Update multiple SideBySideCompareParent documents */
  update?: InputMaybe<Array<SideBySideCompareParentUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple SideBySideCompareParent documents */
  upsert?: InputMaybe<Array<SideBySideCompareParentUpsertWithNestedWhereUniqueInput>>;
};

export type SideBySideCompareParentUpdateManyWithNestedWhereInput = {
  LandingPage?: InputMaybe<LandingPageUpdateManyWithNestedWhereInput>;
};

export type SideBySideCompareParentUpdateOneInlineInput = {
  /** Connect existing SideBySideCompareParent document */
  connect?: InputMaybe<SideBySideCompareParentWhereUniqueInput>;
  /** Create and connect one SideBySideCompareParent document */
  create?: InputMaybe<SideBySideCompareParentCreateInput>;
  /** Delete currently connected SideBySideCompareParent document */
  delete?: InputMaybe<Scalars['Boolean']['input']>;
  /** Disconnect currently connected SideBySideCompareParent document */
  disconnect?: InputMaybe<Scalars['Boolean']['input']>;
  /** Update single SideBySideCompareParent document */
  update?: InputMaybe<SideBySideCompareParentUpdateWithNestedWhereUniqueInput>;
  /** Upsert single SideBySideCompareParent document */
  upsert?: InputMaybe<SideBySideCompareParentUpsertWithNestedWhereUniqueInput>;
};

export type SideBySideCompareParentUpdateWithNestedWhereUniqueInput = {
  LandingPage?: InputMaybe<LandingPageUpdateWithNestedWhereUniqueInput>;
};

export type SideBySideCompareParentUpsertWithNestedWhereUniqueInput = {
  LandingPage?: InputMaybe<LandingPageUpsertWithNestedWhereUniqueInput>;
};

export type SideBySideCompareParentWhereInput = {
  LandingPage?: InputMaybe<LandingPageWhereInput>;
};

export type SideBySideCompareParentWhereUniqueInput = {
  LandingPage?: InputMaybe<LandingPageWhereUniqueInput>;
};

export type SideBySideCompareUpdateInput = {
  collections?: InputMaybe<SideBySideComparecollectionsUnionUpdateManyInlineInput>;
  subtitle?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type SideBySideCompareUpdateManyInlineInput = {
  /** Create and connect multiple SideBySideCompare component instances */
  create?: InputMaybe<Array<SideBySideCompareCreateWithPositionInput>>;
  /** Delete multiple SideBySideCompare documents */
  delete?: InputMaybe<Array<SideBySideCompareWhereUniqueInput>>;
  /** Update multiple SideBySideCompare component instances */
  update?: InputMaybe<Array<SideBySideCompareUpdateWithNestedWhereUniqueAndPositionInput>>;
  /** Upsert multiple SideBySideCompare component instances */
  upsert?: InputMaybe<Array<SideBySideCompareUpsertWithNestedWhereUniqueAndPositionInput>>;
};

export type SideBySideCompareUpdateManyInput = {
  subtitle?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type SideBySideCompareUpdateManyWithNestedWhereInput = {
  /** Update many input */
  data: SideBySideCompareUpdateManyInput;
  /** Document search */
  where: SideBySideCompareWhereInput;
};

export type SideBySideCompareUpdateOneInlineInput = {
  /** Create and connect one SideBySideCompare document */
  create?: InputMaybe<SideBySideCompareCreateInput>;
  /** Delete currently connected SideBySideCompare document */
  delete?: InputMaybe<Scalars['Boolean']['input']>;
  /** Update single SideBySideCompare document */
  update?: InputMaybe<SideBySideCompareUpdateWithNestedWhereUniqueInput>;
  /** Upsert single SideBySideCompare document */
  upsert?: InputMaybe<SideBySideCompareUpsertWithNestedWhereUniqueInput>;
};

export type SideBySideCompareUpdateWithNestedWhereUniqueAndPositionInput = {
  /** Document to update */
  data?: InputMaybe<SideBySideCompareUpdateInput>;
  /** Position in the list of existing component instances, will default to appending at the end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Unique component instance search */
  where: SideBySideCompareWhereUniqueInput;
};

export type SideBySideCompareUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: SideBySideCompareUpdateInput;
  /** Unique document search */
  where: SideBySideCompareWhereUniqueInput;
};

export type SideBySideCompareUpsertInput = {
  /** Create document if it didn't exist */
  create: SideBySideCompareCreateInput;
  /** Update document if it exists */
  update: SideBySideCompareUpdateInput;
};

export type SideBySideCompareUpsertWithNestedWhereUniqueAndPositionInput = {
  /** Document to upsert */
  data?: InputMaybe<SideBySideCompareUpsertInput>;
  /** Position in the list of existing component instances, will default to appending at the end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Unique component instance search */
  where: SideBySideCompareWhereUniqueInput;
};

export type SideBySideCompareUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: SideBySideCompareUpsertInput;
  /** Unique document search */
  where: SideBySideCompareWhereUniqueInput;
};

/** Identifies documents */
export type SideBySideCompareWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<SideBySideCompareWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<SideBySideCompareWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<SideBySideCompareWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']['input']>;
  /** All values in which the union is empty. */
  collections_empty?: InputMaybe<Scalars['Boolean']['input']>;
  /** Matches if the modular component contains at least one connection to the item provided to the filter */
  collections_some?: InputMaybe<SideBySideComparecollectionsUnionWhereInput>;
  id?: InputMaybe<Scalars['ID']['input']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']['input']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']['input']>;
  subtitle?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  subtitle_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  subtitle_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  subtitle_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  subtitle_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  subtitle_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  subtitle_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  subtitle_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  subtitle_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  subtitle_starts_with?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  title_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  title_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  title_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  title_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  title_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  title_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  title_starts_with?: InputMaybe<Scalars['String']['input']>;
};

/** References SideBySideCompare record uniquely */
export type SideBySideCompareWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']['input']>;
};

export type SideBySideComparecollectionsUnion = Collection;

export type SideBySideComparecollectionsUnionConnectInput = {
  Collection?: InputMaybe<CollectionConnectInput>;
};

export type SideBySideComparecollectionsUnionCreateInput = {
  Collection?: InputMaybe<CollectionCreateInput>;
};

export type SideBySideComparecollectionsUnionCreateManyInlineInput = {
  /** Create and connect multiple existing SideBySideComparecollectionsUnion documents */
  create?: InputMaybe<Array<SideBySideComparecollectionsUnionCreateInput>>;
};

export type SideBySideComparecollectionsUnionCreateOneInlineInput = {
  /** Create and connect one SideBySideComparecollectionsUnion document */
  create?: InputMaybe<SideBySideComparecollectionsUnionCreateInput>;
};

export type SideBySideComparecollectionsUnionCreateWithPositionInput = {
  Collection?: InputMaybe<CollectionCreateWithPositionInput>;
};

export type SideBySideComparecollectionsUnionUpdateInput = {
  Collection?: InputMaybe<CollectionUpdateInput>;
};

export type SideBySideComparecollectionsUnionUpdateManyInlineInput = {
  /** Create and connect multiple SideBySideComparecollectionsUnion component instances */
  create?: InputMaybe<Array<SideBySideComparecollectionsUnionCreateWithPositionInput>>;
  /** Delete multiple SideBySideComparecollectionsUnion documents */
  delete?: InputMaybe<Array<SideBySideComparecollectionsUnionWhereUniqueInput>>;
  /** Update multiple SideBySideComparecollectionsUnion component instances */
  update?: InputMaybe<Array<SideBySideComparecollectionsUnionUpdateWithNestedWhereUniqueAndPositionInput>>;
  /** Upsert multiple SideBySideComparecollectionsUnion component instances */
  upsert?: InputMaybe<Array<SideBySideComparecollectionsUnionUpsertWithNestedWhereUniqueAndPositionInput>>;
};

export type SideBySideComparecollectionsUnionUpdateManyWithNestedWhereInput = {
  Collection?: InputMaybe<CollectionUpdateManyWithNestedWhereInput>;
};

export type SideBySideComparecollectionsUnionUpdateOneInlineInput = {
  /** Create and connect one SideBySideComparecollectionsUnion document */
  create?: InputMaybe<SideBySideComparecollectionsUnionCreateInput>;
  /** Delete currently connected SideBySideComparecollectionsUnion document */
  delete?: InputMaybe<Scalars['Boolean']['input']>;
  /** Update single SideBySideComparecollectionsUnion document */
  update?: InputMaybe<SideBySideComparecollectionsUnionUpdateWithNestedWhereUniqueInput>;
  /** Upsert single SideBySideComparecollectionsUnion document */
  upsert?: InputMaybe<SideBySideComparecollectionsUnionUpsertWithNestedWhereUniqueInput>;
};

export type SideBySideComparecollectionsUnionUpdateWithNestedWhereUniqueAndPositionInput = {
  Collection?: InputMaybe<CollectionUpdateWithNestedWhereUniqueAndPositionInput>;
};

export type SideBySideComparecollectionsUnionUpdateWithNestedWhereUniqueInput = {
  Collection?: InputMaybe<CollectionUpdateWithNestedWhereUniqueInput>;
};

export type SideBySideComparecollectionsUnionUpsertWithNestedWhereUniqueAndPositionInput = {
  Collection?: InputMaybe<CollectionUpsertWithNestedWhereUniqueAndPositionInput>;
};

export type SideBySideComparecollectionsUnionUpsertWithNestedWhereUniqueInput = {
  Collection?: InputMaybe<CollectionUpsertWithNestedWhereUniqueInput>;
};

export type SideBySideComparecollectionsUnionWhereInput = {
  Collection?: InputMaybe<CollectionWhereInput>;
};

export type SideBySideComparecollectionsUnionWhereUniqueInput = {
  Collection?: InputMaybe<CollectionWhereUniqueInput>;
};

/** Stage system enumeration */
export enum Stage {
  /** The Draft is the default stage for all your content. */
  Draft = 'DRAFT',
  /** The Published stage is where you can publish your content to. */
  Published = 'PUBLISHED'
}

export enum SystemDateTimeFieldVariation {
  Base = 'BASE',
  Combined = 'COMBINED',
  Localization = 'LOCALIZATION'
}

export type Tag = Entity & Node & {
  __typename?: 'Tag';
  allowBotToUseThisCategory?: Maybe<Scalars['Boolean']['output']>;
  /** The time the document was created */
  createdAt: Scalars['DateTime']['output'];
  /** User that created this document */
  createdBy?: Maybe<User>;
  /** Get the document in other stages */
  documentInStages: Array<Tag>;
  /** List of Tag versions */
  history: Array<Version>;
  /** The unique identifier */
  id: Scalars['ID']['output'];
  name?: Maybe<Scalars['String']['output']>;
  posts: Array<Post>;
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  /** User that last published this document */
  publishedBy?: Maybe<User>;
  scheduledIn: Array<ScheduledOperation>;
  slug?: Maybe<Scalars['String']['output']>;
  /** System stage field */
  stage: Stage;
  /** The time the document was updated */
  updatedAt: Scalars['DateTime']['output'];
  /** User that last updated this document */
  updatedBy?: Maybe<User>;
};


export type TagCreatedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  locales?: InputMaybe<Array<Locale>>;
};


export type TagDocumentInStagesArgs = {
  includeCurrent?: Scalars['Boolean']['input'];
  inheritLocale?: Scalars['Boolean']['input'];
  stages?: Array<Stage>;
};


export type TagHistoryArgs = {
  limit?: Scalars['Int']['input'];
  skip?: Scalars['Int']['input'];
  stageOverride?: InputMaybe<Stage>;
};


export type TagPostsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: InputMaybe<Array<Locale>>;
  orderBy?: InputMaybe<PostOrderByInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<PostWhereInput>;
};


export type TagPublishedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  locales?: InputMaybe<Array<Locale>>;
};


export type TagScheduledInArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: InputMaybe<Array<Locale>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<ScheduledOperationWhereInput>;
};


export type TagUpdatedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  locales?: InputMaybe<Array<Locale>>;
};

export type TagConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Document to connect */
  where: TagWhereUniqueInput;
};

/** A connection to a list of items. */
export type TagConnection = {
  __typename?: 'TagConnection';
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<TagEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type TagCreateInput = {
  allowBotToUseThisCategory?: InputMaybe<Scalars['Boolean']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  posts?: InputMaybe<PostCreateManyInlineInput>;
  slug?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type TagCreateManyInlineInput = {
  /** Connect multiple existing Tag documents */
  connect?: InputMaybe<Array<TagWhereUniqueInput>>;
  /** Create and connect multiple existing Tag documents */
  create?: InputMaybe<Array<TagCreateInput>>;
};

export type TagCreateOneInlineInput = {
  /** Connect one existing Tag document */
  connect?: InputMaybe<TagWhereUniqueInput>;
  /** Create and connect one Tag document */
  create?: InputMaybe<TagCreateInput>;
};

/** An edge in a connection. */
export type TagEdge = {
  __typename?: 'TagEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: Tag;
};

/** Identifies documents */
export type TagManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<TagWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<TagWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<TagWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']['input']>;
  allowBotToUseThisCategory?: InputMaybe<Scalars['Boolean']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  allowBotToUseThisCategory_not?: InputMaybe<Scalars['Boolean']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  createdBy?: InputMaybe<UserWhereInput>;
  documentInStages_every?: InputMaybe<TagWhereStageInput>;
  documentInStages_none?: InputMaybe<TagWhereStageInput>;
  documentInStages_some?: InputMaybe<TagWhereStageInput>;
  id?: InputMaybe<Scalars['ID']['input']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']['input']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  name_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  name_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  name_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  name_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  name_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  name_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  name_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  name_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  name_starts_with?: InputMaybe<Scalars['String']['input']>;
  posts_every?: InputMaybe<PostWhereInput>;
  posts_none?: InputMaybe<PostWhereInput>;
  posts_some?: InputMaybe<PostWhereInput>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
  slug?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  slug_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  slug_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  slug_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  slug_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  slug_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  slug_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  slug_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  slug_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  slug_starts_with?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  updatedBy?: InputMaybe<UserWhereInput>;
};

export enum TagOrderByInput {
  AllowBotToUseThisCategoryAsc = 'allowBotToUseThisCategory_ASC',
  AllowBotToUseThisCategoryDesc = 'allowBotToUseThisCategory_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  SlugAsc = 'slug_ASC',
  SlugDesc = 'slug_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC'
}

export type TagUpdateInput = {
  allowBotToUseThisCategory?: InputMaybe<Scalars['Boolean']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  posts?: InputMaybe<PostUpdateManyInlineInput>;
  slug?: InputMaybe<Scalars['String']['input']>;
};

export type TagUpdateManyInlineInput = {
  /** Connect multiple existing Tag documents */
  connect?: InputMaybe<Array<TagConnectInput>>;
  /** Create and connect multiple Tag documents */
  create?: InputMaybe<Array<TagCreateInput>>;
  /** Delete multiple Tag documents */
  delete?: InputMaybe<Array<TagWhereUniqueInput>>;
  /** Disconnect multiple Tag documents */
  disconnect?: InputMaybe<Array<TagWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing Tag documents */
  set?: InputMaybe<Array<TagWhereUniqueInput>>;
  /** Update multiple Tag documents */
  update?: InputMaybe<Array<TagUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple Tag documents */
  upsert?: InputMaybe<Array<TagUpsertWithNestedWhereUniqueInput>>;
};

export type TagUpdateManyInput = {
  allowBotToUseThisCategory?: InputMaybe<Scalars['Boolean']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};

export type TagUpdateManyWithNestedWhereInput = {
  /** Update many input */
  data: TagUpdateManyInput;
  /** Document search */
  where: TagWhereInput;
};

export type TagUpdateOneInlineInput = {
  /** Connect existing Tag document */
  connect?: InputMaybe<TagWhereUniqueInput>;
  /** Create and connect one Tag document */
  create?: InputMaybe<TagCreateInput>;
  /** Delete currently connected Tag document */
  delete?: InputMaybe<Scalars['Boolean']['input']>;
  /** Disconnect currently connected Tag document */
  disconnect?: InputMaybe<Scalars['Boolean']['input']>;
  /** Update single Tag document */
  update?: InputMaybe<TagUpdateWithNestedWhereUniqueInput>;
  /** Upsert single Tag document */
  upsert?: InputMaybe<TagUpsertWithNestedWhereUniqueInput>;
};

export type TagUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: TagUpdateInput;
  /** Unique document search */
  where: TagWhereUniqueInput;
};

export type TagUpsertInput = {
  /** Create document if it didn't exist */
  create: TagCreateInput;
  /** Update document if it exists */
  update: TagUpdateInput;
};

export type TagUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: TagUpsertInput;
  /** Unique document search */
  where: TagWhereUniqueInput;
};

/** This contains a set of filters that can be used to compare values internally */
export type TagWhereComparatorInput = {
  /** This field can be used to request to check if the entry is outdated by internal comparison */
  outdated_to?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Identifies documents */
export type TagWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<TagWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<TagWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<TagWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']['input']>;
  allowBotToUseThisCategory?: InputMaybe<Scalars['Boolean']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  allowBotToUseThisCategory_not?: InputMaybe<Scalars['Boolean']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  createdBy?: InputMaybe<UserWhereInput>;
  documentInStages_every?: InputMaybe<TagWhereStageInput>;
  documentInStages_none?: InputMaybe<TagWhereStageInput>;
  documentInStages_some?: InputMaybe<TagWhereStageInput>;
  id?: InputMaybe<Scalars['ID']['input']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']['input']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  name_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  name_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  name_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  name_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  name_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  name_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  name_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  name_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  name_starts_with?: InputMaybe<Scalars['String']['input']>;
  posts_every?: InputMaybe<PostWhereInput>;
  posts_none?: InputMaybe<PostWhereInput>;
  posts_some?: InputMaybe<PostWhereInput>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
  slug?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  slug_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  slug_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  slug_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  slug_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  slug_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  slug_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  slug_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  slug_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  slug_starts_with?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  updatedBy?: InputMaybe<UserWhereInput>;
};

/** The document in stages filter allows specifying a stage entry to cross compare the same document between different stages */
export type TagWhereStageInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<TagWhereStageInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<TagWhereStageInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<TagWhereStageInput>>;
  /** This field contains fields which can be set as true or false to specify an internal comparison */
  compareWithParent?: InputMaybe<TagWhereComparatorInput>;
  /** Specify the stage to compare with */
  stage?: InputMaybe<Stage>;
};

/** References Tag record uniquely */
export type TagWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
};

export type TemplatesDetail = Entity & {
  __typename?: 'TemplatesDetail';
  /** The unique identifier */
  id: Scalars['ID']['output'];
  image: Asset;
  /** System Locale field */
  locale: Locale;
  /** Get the other localizations for this document */
  localizations: Array<TemplatesDetail>;
  redirectionLink?: Maybe<Scalars['String']['output']>;
  /** System stage field */
  stage: Stage;
  startingPrice: Scalars['Float']['output'];
  title: Scalars['String']['output'];
};


export type TemplatesDetailImageArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  locales?: InputMaybe<Array<Locale>>;
};


export type TemplatesDetailLocalizationsArgs = {
  includeCurrent?: Scalars['Boolean']['input'];
  locales?: Array<Locale>;
};

export type TemplatesDetailConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Document to connect */
  where: TemplatesDetailWhereUniqueInput;
};

/** A connection to a list of items. */
export type TemplatesDetailConnection = {
  __typename?: 'TemplatesDetailConnection';
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<TemplatesDetailEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type TemplatesDetailCreateInput = {
  image: AssetCreateOneInlineInput;
  /** Inline mutations for managing document localizations excluding the default locale */
  localizations?: InputMaybe<TemplatesDetailCreateLocalizationsInput>;
  redirectionLink?: InputMaybe<Scalars['String']['input']>;
  startingPrice: Scalars['Float']['input'];
  /** title input for default locale (en) */
  title: Scalars['String']['input'];
};

export type TemplatesDetailCreateLocalizationDataInput = {
  title: Scalars['String']['input'];
};

export type TemplatesDetailCreateLocalizationInput = {
  /** Localization input */
  data: TemplatesDetailCreateLocalizationDataInput;
  locale: Locale;
};

export type TemplatesDetailCreateLocalizationsInput = {
  /** Create localizations for the newly-created document */
  create?: InputMaybe<Array<TemplatesDetailCreateLocalizationInput>>;
};

export type TemplatesDetailCreateManyInlineInput = {
  /** Create and connect multiple existing TemplatesDetail documents */
  create?: InputMaybe<Array<TemplatesDetailCreateInput>>;
};

export type TemplatesDetailCreateOneInlineInput = {
  /** Create and connect one TemplatesDetail document */
  create?: InputMaybe<TemplatesDetailCreateInput>;
};

export type TemplatesDetailCreateWithPositionInput = {
  /** Document to create */
  data: TemplatesDetailCreateInput;
  /** Position in the list of existing component instances, will default to appending at the end of list */
  position?: InputMaybe<ConnectPositionInput>;
};

/** An edge in a connection. */
export type TemplatesDetailEdge = {
  __typename?: 'TemplatesDetailEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: TemplatesDetail;
};

/** Identifies documents */
export type TemplatesDetailManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<TemplatesDetailWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<TemplatesDetailWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<TemplatesDetailWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']['input']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']['input']>;
  image?: InputMaybe<AssetWhereInput>;
  redirectionLink?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  redirectionLink_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  redirectionLink_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  redirectionLink_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  redirectionLink_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  redirectionLink_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  redirectionLink_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  redirectionLink_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  redirectionLink_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  redirectionLink_starts_with?: InputMaybe<Scalars['String']['input']>;
  startingPrice?: InputMaybe<Scalars['Float']['input']>;
  /** All values greater than the given value. */
  startingPrice_gt?: InputMaybe<Scalars['Float']['input']>;
  /** All values greater than or equal the given value. */
  startingPrice_gte?: InputMaybe<Scalars['Float']['input']>;
  /** All values that are contained in given list. */
  startingPrice_in?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  /** All values less than the given value. */
  startingPrice_lt?: InputMaybe<Scalars['Float']['input']>;
  /** All values less than or equal the given value. */
  startingPrice_lte?: InputMaybe<Scalars['Float']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  startingPrice_not?: InputMaybe<Scalars['Float']['input']>;
  /** All values that are not contained in given list. */
  startingPrice_not_in?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
};

export enum TemplatesDetailOrderByInput {
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  RedirectionLinkAsc = 'redirectionLink_ASC',
  RedirectionLinkDesc = 'redirectionLink_DESC',
  StartingPriceAsc = 'startingPrice_ASC',
  StartingPriceDesc = 'startingPrice_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC'
}

export type TemplatesDetailParent = RelatedLandingPageTemplate;

export type TemplatesDetailParentConnectInput = {
  RelatedLandingPageTemplate?: InputMaybe<RelatedLandingPageTemplateConnectInput>;
};

export type TemplatesDetailParentCreateInput = {
  RelatedLandingPageTemplate?: InputMaybe<RelatedLandingPageTemplateCreateInput>;
};

export type TemplatesDetailParentCreateManyInlineInput = {
  /** Create and connect multiple existing TemplatesDetailParent documents */
  create?: InputMaybe<Array<TemplatesDetailParentCreateInput>>;
};

export type TemplatesDetailParentCreateOneInlineInput = {
  /** Create and connect one TemplatesDetailParent document */
  create?: InputMaybe<TemplatesDetailParentCreateInput>;
};

export type TemplatesDetailParentCreateWithPositionInput = {
  RelatedLandingPageTemplate?: InputMaybe<RelatedLandingPageTemplateCreateWithPositionInput>;
};

export type TemplatesDetailParentUpdateInput = {
  RelatedLandingPageTemplate?: InputMaybe<RelatedLandingPageTemplateUpdateInput>;
};

export type TemplatesDetailParentUpdateManyInlineInput = {
  /** Create and connect multiple TemplatesDetailParent component instances */
  create?: InputMaybe<Array<TemplatesDetailParentCreateWithPositionInput>>;
  /** Delete multiple TemplatesDetailParent documents */
  delete?: InputMaybe<Array<TemplatesDetailParentWhereUniqueInput>>;
  /** Update multiple TemplatesDetailParent component instances */
  update?: InputMaybe<Array<TemplatesDetailParentUpdateWithNestedWhereUniqueAndPositionInput>>;
  /** Upsert multiple TemplatesDetailParent component instances */
  upsert?: InputMaybe<Array<TemplatesDetailParentUpsertWithNestedWhereUniqueAndPositionInput>>;
};

export type TemplatesDetailParentUpdateManyWithNestedWhereInput = {
  RelatedLandingPageTemplate?: InputMaybe<RelatedLandingPageTemplateUpdateManyWithNestedWhereInput>;
};

export type TemplatesDetailParentUpdateOneInlineInput = {
  /** Create and connect one TemplatesDetailParent document */
  create?: InputMaybe<TemplatesDetailParentCreateInput>;
  /** Delete currently connected TemplatesDetailParent document */
  delete?: InputMaybe<Scalars['Boolean']['input']>;
  /** Update single TemplatesDetailParent document */
  update?: InputMaybe<TemplatesDetailParentUpdateWithNestedWhereUniqueInput>;
  /** Upsert single TemplatesDetailParent document */
  upsert?: InputMaybe<TemplatesDetailParentUpsertWithNestedWhereUniqueInput>;
};

export type TemplatesDetailParentUpdateWithNestedWhereUniqueAndPositionInput = {
  RelatedLandingPageTemplate?: InputMaybe<RelatedLandingPageTemplateUpdateWithNestedWhereUniqueAndPositionInput>;
};

export type TemplatesDetailParentUpdateWithNestedWhereUniqueInput = {
  RelatedLandingPageTemplate?: InputMaybe<RelatedLandingPageTemplateUpdateWithNestedWhereUniqueInput>;
};

export type TemplatesDetailParentUpsertWithNestedWhereUniqueAndPositionInput = {
  RelatedLandingPageTemplate?: InputMaybe<RelatedLandingPageTemplateUpsertWithNestedWhereUniqueAndPositionInput>;
};

export type TemplatesDetailParentUpsertWithNestedWhereUniqueInput = {
  RelatedLandingPageTemplate?: InputMaybe<RelatedLandingPageTemplateUpsertWithNestedWhereUniqueInput>;
};

export type TemplatesDetailParentWhereInput = {
  RelatedLandingPageTemplate?: InputMaybe<RelatedLandingPageTemplateWhereInput>;
};

export type TemplatesDetailParentWhereUniqueInput = {
  RelatedLandingPageTemplate?: InputMaybe<RelatedLandingPageTemplateWhereUniqueInput>;
};

export type TemplatesDetailUpdateInput = {
  image?: InputMaybe<AssetUpdateOneInlineInput>;
  /** Manage document localizations */
  localizations?: InputMaybe<TemplatesDetailUpdateLocalizationsInput>;
  redirectionLink?: InputMaybe<Scalars['String']['input']>;
  startingPrice?: InputMaybe<Scalars['Float']['input']>;
  /** title input for default locale (en) */
  title?: InputMaybe<Scalars['String']['input']>;
};

export type TemplatesDetailUpdateLocalizationDataInput = {
  title?: InputMaybe<Scalars['String']['input']>;
};

export type TemplatesDetailUpdateLocalizationInput = {
  data: TemplatesDetailUpdateLocalizationDataInput;
  locale: Locale;
};

export type TemplatesDetailUpdateLocalizationsInput = {
  /** Localizations to create */
  create?: InputMaybe<Array<TemplatesDetailCreateLocalizationInput>>;
  /** Localizations to delete */
  delete?: InputMaybe<Array<Locale>>;
  /** Localizations to update */
  update?: InputMaybe<Array<TemplatesDetailUpdateLocalizationInput>>;
  upsert?: InputMaybe<Array<TemplatesDetailUpsertLocalizationInput>>;
};

export type TemplatesDetailUpdateManyInlineInput = {
  /** Create and connect multiple TemplatesDetail component instances */
  create?: InputMaybe<Array<TemplatesDetailCreateWithPositionInput>>;
  /** Delete multiple TemplatesDetail documents */
  delete?: InputMaybe<Array<TemplatesDetailWhereUniqueInput>>;
  /** Update multiple TemplatesDetail component instances */
  update?: InputMaybe<Array<TemplatesDetailUpdateWithNestedWhereUniqueAndPositionInput>>;
  /** Upsert multiple TemplatesDetail component instances */
  upsert?: InputMaybe<Array<TemplatesDetailUpsertWithNestedWhereUniqueAndPositionInput>>;
};

export type TemplatesDetailUpdateManyInput = {
  /** Optional updates to localizations */
  localizations?: InputMaybe<TemplatesDetailUpdateManyLocalizationsInput>;
  startingPrice?: InputMaybe<Scalars['Float']['input']>;
  /** title input for default locale (en) */
  title?: InputMaybe<Scalars['String']['input']>;
};

export type TemplatesDetailUpdateManyLocalizationDataInput = {
  title?: InputMaybe<Scalars['String']['input']>;
};

export type TemplatesDetailUpdateManyLocalizationInput = {
  data: TemplatesDetailUpdateManyLocalizationDataInput;
  locale: Locale;
};

export type TemplatesDetailUpdateManyLocalizationsInput = {
  /** Localizations to update */
  update?: InputMaybe<Array<TemplatesDetailUpdateManyLocalizationInput>>;
};

export type TemplatesDetailUpdateManyWithNestedWhereInput = {
  /** Update many input */
  data: TemplatesDetailUpdateManyInput;
  /** Document search */
  where: TemplatesDetailWhereInput;
};

export type TemplatesDetailUpdateOneInlineInput = {
  /** Create and connect one TemplatesDetail document */
  create?: InputMaybe<TemplatesDetailCreateInput>;
  /** Delete currently connected TemplatesDetail document */
  delete?: InputMaybe<Scalars['Boolean']['input']>;
  /** Update single TemplatesDetail document */
  update?: InputMaybe<TemplatesDetailUpdateWithNestedWhereUniqueInput>;
  /** Upsert single TemplatesDetail document */
  upsert?: InputMaybe<TemplatesDetailUpsertWithNestedWhereUniqueInput>;
};

export type TemplatesDetailUpdateWithNestedWhereUniqueAndPositionInput = {
  /** Document to update */
  data?: InputMaybe<TemplatesDetailUpdateInput>;
  /** Position in the list of existing component instances, will default to appending at the end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Unique component instance search */
  where: TemplatesDetailWhereUniqueInput;
};

export type TemplatesDetailUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: TemplatesDetailUpdateInput;
  /** Unique document search */
  where: TemplatesDetailWhereUniqueInput;
};

export type TemplatesDetailUpsertInput = {
  /** Create document if it didn't exist */
  create: TemplatesDetailCreateInput;
  /** Update document if it exists */
  update: TemplatesDetailUpdateInput;
};

export type TemplatesDetailUpsertLocalizationInput = {
  create: TemplatesDetailCreateLocalizationDataInput;
  locale: Locale;
  update: TemplatesDetailUpdateLocalizationDataInput;
};

export type TemplatesDetailUpsertWithNestedWhereUniqueAndPositionInput = {
  /** Document to upsert */
  data?: InputMaybe<TemplatesDetailUpsertInput>;
  /** Position in the list of existing component instances, will default to appending at the end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Unique component instance search */
  where: TemplatesDetailWhereUniqueInput;
};

export type TemplatesDetailUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: TemplatesDetailUpsertInput;
  /** Unique document search */
  where: TemplatesDetailWhereUniqueInput;
};

/** Identifies documents */
export type TemplatesDetailWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<TemplatesDetailWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<TemplatesDetailWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<TemplatesDetailWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']['input']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']['input']>;
  image?: InputMaybe<AssetWhereInput>;
  redirectionLink?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  redirectionLink_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  redirectionLink_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  redirectionLink_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  redirectionLink_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  redirectionLink_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  redirectionLink_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  redirectionLink_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  redirectionLink_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  redirectionLink_starts_with?: InputMaybe<Scalars['String']['input']>;
  startingPrice?: InputMaybe<Scalars['Float']['input']>;
  /** All values greater than the given value. */
  startingPrice_gt?: InputMaybe<Scalars['Float']['input']>;
  /** All values greater than or equal the given value. */
  startingPrice_gte?: InputMaybe<Scalars['Float']['input']>;
  /** All values that are contained in given list. */
  startingPrice_in?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  /** All values less than the given value. */
  startingPrice_lt?: InputMaybe<Scalars['Float']['input']>;
  /** All values less than or equal the given value. */
  startingPrice_lte?: InputMaybe<Scalars['Float']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  startingPrice_not?: InputMaybe<Scalars['Float']['input']>;
  /** All values that are not contained in given list. */
  startingPrice_not_in?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  title?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  title_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  title_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  title_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  title_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  title_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  title_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  title_starts_with?: InputMaybe<Scalars['String']['input']>;
};

/** References TemplatesDetail record uniquely */
export type TemplatesDetailWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']['input']>;
  redirectionLink?: InputMaybe<Scalars['String']['input']>;
};

export type Testimonial = Entity & {
  __typename?: 'Testimonial';
  description?: Maybe<RichText>;
  /** The unique identifier */
  id: Scalars['ID']['output'];
  /** System Locale field */
  locale: Locale;
  /** Get the other localizations for this document */
  localizations: Array<Testimonial>;
  ratingFrom5?: Maybe<Scalars['Int']['output']>;
  /** System stage field */
  stage: Stage;
  title?: Maybe<Scalars['String']['output']>;
};


export type TestimonialLocalizationsArgs = {
  includeCurrent?: Scalars['Boolean']['input'];
  locales?: Array<Locale>;
};

export type TestimonialConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Document to connect */
  where: TestimonialWhereUniqueInput;
};

/** A connection to a list of items. */
export type TestimonialConnection = {
  __typename?: 'TestimonialConnection';
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<TestimonialEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type TestimonialCreateInput = {
  /** description input for default locale (en) */
  description?: InputMaybe<Scalars['RichTextAST']['input']>;
  /** Inline mutations for managing document localizations excluding the default locale */
  localizations?: InputMaybe<TestimonialCreateLocalizationsInput>;
  /** ratingFrom5 input for default locale (en) */
  ratingFrom5?: InputMaybe<Scalars['Int']['input']>;
  /** title input for default locale (en) */
  title?: InputMaybe<Scalars['String']['input']>;
};

export type TestimonialCreateLocalizationDataInput = {
  description?: InputMaybe<Scalars['RichTextAST']['input']>;
  ratingFrom5?: InputMaybe<Scalars['Int']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type TestimonialCreateLocalizationInput = {
  /** Localization input */
  data: TestimonialCreateLocalizationDataInput;
  locale: Locale;
};

export type TestimonialCreateLocalizationsInput = {
  /** Create localizations for the newly-created document */
  create?: InputMaybe<Array<TestimonialCreateLocalizationInput>>;
};

export type TestimonialCreateManyInlineInput = {
  /** Create and connect multiple existing Testimonial documents */
  create?: InputMaybe<Array<TestimonialCreateInput>>;
};

export type TestimonialCreateOneInlineInput = {
  /** Create and connect one Testimonial document */
  create?: InputMaybe<TestimonialCreateInput>;
};

export type TestimonialCreateWithPositionInput = {
  /** Document to create */
  data: TestimonialCreateInput;
  /** Position in the list of existing component instances, will default to appending at the end of list */
  position?: InputMaybe<ConnectPositionInput>;
};

/** An edge in a connection. */
export type TestimonialEdge = {
  __typename?: 'TestimonialEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: Testimonial;
};

/** Identifies documents */
export type TestimonialManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<TestimonialWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<TestimonialWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<TestimonialWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']['input']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']['input']>;
};

export enum TestimonialOrderByInput {
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  RatingFrom5Asc = 'ratingFrom5_ASC',
  RatingFrom5Desc = 'ratingFrom5_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC'
}

export type TestimonialParent = Review;

export type TestimonialParentConnectInput = {
  Review?: InputMaybe<ReviewConnectInput>;
};

export type TestimonialParentCreateInput = {
  Review?: InputMaybe<ReviewCreateInput>;
};

export type TestimonialParentCreateManyInlineInput = {
  /** Connect multiple existing TestimonialParent documents */
  connect?: InputMaybe<Array<TestimonialParentWhereUniqueInput>>;
  /** Create and connect multiple existing TestimonialParent documents */
  create?: InputMaybe<Array<TestimonialParentCreateInput>>;
};

export type TestimonialParentCreateOneInlineInput = {
  /** Connect one existing TestimonialParent document */
  connect?: InputMaybe<TestimonialParentWhereUniqueInput>;
  /** Create and connect one TestimonialParent document */
  create?: InputMaybe<TestimonialParentCreateInput>;
};

export type TestimonialParentUpdateInput = {
  Review?: InputMaybe<ReviewUpdateInput>;
};

export type TestimonialParentUpdateManyInlineInput = {
  /** Connect multiple existing TestimonialParent documents */
  connect?: InputMaybe<Array<TestimonialParentConnectInput>>;
  /** Create and connect multiple TestimonialParent documents */
  create?: InputMaybe<Array<TestimonialParentCreateInput>>;
  /** Delete multiple TestimonialParent documents */
  delete?: InputMaybe<Array<TestimonialParentWhereUniqueInput>>;
  /** Disconnect multiple TestimonialParent documents */
  disconnect?: InputMaybe<Array<TestimonialParentWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing TestimonialParent documents */
  set?: InputMaybe<Array<TestimonialParentWhereUniqueInput>>;
  /** Update multiple TestimonialParent documents */
  update?: InputMaybe<Array<TestimonialParentUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple TestimonialParent documents */
  upsert?: InputMaybe<Array<TestimonialParentUpsertWithNestedWhereUniqueInput>>;
};

export type TestimonialParentUpdateManyWithNestedWhereInput = {
  Review?: InputMaybe<ReviewUpdateManyWithNestedWhereInput>;
};

export type TestimonialParentUpdateOneInlineInput = {
  /** Connect existing TestimonialParent document */
  connect?: InputMaybe<TestimonialParentWhereUniqueInput>;
  /** Create and connect one TestimonialParent document */
  create?: InputMaybe<TestimonialParentCreateInput>;
  /** Delete currently connected TestimonialParent document */
  delete?: InputMaybe<Scalars['Boolean']['input']>;
  /** Disconnect currently connected TestimonialParent document */
  disconnect?: InputMaybe<Scalars['Boolean']['input']>;
  /** Update single TestimonialParent document */
  update?: InputMaybe<TestimonialParentUpdateWithNestedWhereUniqueInput>;
  /** Upsert single TestimonialParent document */
  upsert?: InputMaybe<TestimonialParentUpsertWithNestedWhereUniqueInput>;
};

export type TestimonialParentUpdateWithNestedWhereUniqueInput = {
  Review?: InputMaybe<ReviewUpdateWithNestedWhereUniqueInput>;
};

export type TestimonialParentUpsertWithNestedWhereUniqueInput = {
  Review?: InputMaybe<ReviewUpsertWithNestedWhereUniqueInput>;
};

export type TestimonialParentWhereInput = {
  Review?: InputMaybe<ReviewWhereInput>;
};

export type TestimonialParentWhereUniqueInput = {
  Review?: InputMaybe<ReviewWhereUniqueInput>;
};

export type TestimonialUpdateInput = {
  /** description input for default locale (en) */
  description?: InputMaybe<Scalars['RichTextAST']['input']>;
  /** Manage document localizations */
  localizations?: InputMaybe<TestimonialUpdateLocalizationsInput>;
  /** ratingFrom5 input for default locale (en) */
  ratingFrom5?: InputMaybe<Scalars['Int']['input']>;
  /** title input for default locale (en) */
  title?: InputMaybe<Scalars['String']['input']>;
};

export type TestimonialUpdateLocalizationDataInput = {
  description?: InputMaybe<Scalars['RichTextAST']['input']>;
  ratingFrom5?: InputMaybe<Scalars['Int']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type TestimonialUpdateLocalizationInput = {
  data: TestimonialUpdateLocalizationDataInput;
  locale: Locale;
};

export type TestimonialUpdateLocalizationsInput = {
  /** Localizations to create */
  create?: InputMaybe<Array<TestimonialCreateLocalizationInput>>;
  /** Localizations to delete */
  delete?: InputMaybe<Array<Locale>>;
  /** Localizations to update */
  update?: InputMaybe<Array<TestimonialUpdateLocalizationInput>>;
  upsert?: InputMaybe<Array<TestimonialUpsertLocalizationInput>>;
};

export type TestimonialUpdateManyInlineInput = {
  /** Create and connect multiple Testimonial component instances */
  create?: InputMaybe<Array<TestimonialCreateWithPositionInput>>;
  /** Delete multiple Testimonial documents */
  delete?: InputMaybe<Array<TestimonialWhereUniqueInput>>;
  /** Update multiple Testimonial component instances */
  update?: InputMaybe<Array<TestimonialUpdateWithNestedWhereUniqueAndPositionInput>>;
  /** Upsert multiple Testimonial component instances */
  upsert?: InputMaybe<Array<TestimonialUpsertWithNestedWhereUniqueAndPositionInput>>;
};

export type TestimonialUpdateManyInput = {
  /** description input for default locale (en) */
  description?: InputMaybe<Scalars['RichTextAST']['input']>;
  /** Optional updates to localizations */
  localizations?: InputMaybe<TestimonialUpdateManyLocalizationsInput>;
  /** ratingFrom5 input for default locale (en) */
  ratingFrom5?: InputMaybe<Scalars['Int']['input']>;
  /** title input for default locale (en) */
  title?: InputMaybe<Scalars['String']['input']>;
};

export type TestimonialUpdateManyLocalizationDataInput = {
  description?: InputMaybe<Scalars['RichTextAST']['input']>;
  ratingFrom5?: InputMaybe<Scalars['Int']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type TestimonialUpdateManyLocalizationInput = {
  data: TestimonialUpdateManyLocalizationDataInput;
  locale: Locale;
};

export type TestimonialUpdateManyLocalizationsInput = {
  /** Localizations to update */
  update?: InputMaybe<Array<TestimonialUpdateManyLocalizationInput>>;
};

export type TestimonialUpdateManyWithNestedWhereInput = {
  /** Update many input */
  data: TestimonialUpdateManyInput;
  /** Document search */
  where: TestimonialWhereInput;
};

export type TestimonialUpdateOneInlineInput = {
  /** Create and connect one Testimonial document */
  create?: InputMaybe<TestimonialCreateInput>;
  /** Delete currently connected Testimonial document */
  delete?: InputMaybe<Scalars['Boolean']['input']>;
  /** Update single Testimonial document */
  update?: InputMaybe<TestimonialUpdateWithNestedWhereUniqueInput>;
  /** Upsert single Testimonial document */
  upsert?: InputMaybe<TestimonialUpsertWithNestedWhereUniqueInput>;
};

export type TestimonialUpdateWithNestedWhereUniqueAndPositionInput = {
  /** Document to update */
  data?: InputMaybe<TestimonialUpdateInput>;
  /** Position in the list of existing component instances, will default to appending at the end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Unique component instance search */
  where: TestimonialWhereUniqueInput;
};

export type TestimonialUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: TestimonialUpdateInput;
  /** Unique document search */
  where: TestimonialWhereUniqueInput;
};

export type TestimonialUpsertInput = {
  /** Create document if it didn't exist */
  create: TestimonialCreateInput;
  /** Update document if it exists */
  update: TestimonialUpdateInput;
};

export type TestimonialUpsertLocalizationInput = {
  create: TestimonialCreateLocalizationDataInput;
  locale: Locale;
  update: TestimonialUpdateLocalizationDataInput;
};

export type TestimonialUpsertWithNestedWhereUniqueAndPositionInput = {
  /** Document to upsert */
  data?: InputMaybe<TestimonialUpsertInput>;
  /** Position in the list of existing component instances, will default to appending at the end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Unique component instance search */
  where: TestimonialWhereUniqueInput;
};

export type TestimonialUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: TestimonialUpsertInput;
  /** Unique document search */
  where: TestimonialWhereUniqueInput;
};

/** Identifies documents */
export type TestimonialWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<TestimonialWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<TestimonialWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<TestimonialWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']['input']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']['input']>;
  ratingFrom5?: InputMaybe<Scalars['Int']['input']>;
  /** All values greater than the given value. */
  ratingFrom5_gt?: InputMaybe<Scalars['Int']['input']>;
  /** All values greater than or equal the given value. */
  ratingFrom5_gte?: InputMaybe<Scalars['Int']['input']>;
  /** All values that are contained in given list. */
  ratingFrom5_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  /** All values less than the given value. */
  ratingFrom5_lt?: InputMaybe<Scalars['Int']['input']>;
  /** All values less than or equal the given value. */
  ratingFrom5_lte?: InputMaybe<Scalars['Int']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  ratingFrom5_not?: InputMaybe<Scalars['Int']['input']>;
  /** All values that are not contained in given list. */
  ratingFrom5_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  title?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  title_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  title_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  title_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  title_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  title_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  title_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  title_starts_with?: InputMaybe<Scalars['String']['input']>;
};

/** References Testimonial record uniquely */
export type TestimonialWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']['input']>;
};

export type TwoFoldmageGallery = Entity & {
  __typename?: 'TwoFoldmageGallery';
  buttonText?: Maybe<Scalars['String']['output']>;
  buttonUrl?: Maybe<Scalars['String']['output']>;
  /** The unique identifier */
  id: Scalars['ID']['output'];
  images: Array<Asset>;
  /** System stage field */
  stage: Stage;
  subtitle?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
};


export type TwoFoldmageGalleryImagesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: InputMaybe<Array<Locale>>;
  orderBy?: InputMaybe<AssetOrderByInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<AssetWhereInput>;
};

export type TwoFoldmageGalleryConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Document to connect */
  where: TwoFoldmageGalleryWhereUniqueInput;
};

/** A connection to a list of items. */
export type TwoFoldmageGalleryConnection = {
  __typename?: 'TwoFoldmageGalleryConnection';
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<TwoFoldmageGalleryEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type TwoFoldmageGalleryCreateInput = {
  buttonText?: InputMaybe<Scalars['String']['input']>;
  buttonUrl?: InputMaybe<Scalars['String']['input']>;
  images?: InputMaybe<AssetCreateManyInlineInput>;
  subtitle?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type TwoFoldmageGalleryCreateManyInlineInput = {
  /** Create and connect multiple existing TwoFoldmageGallery documents */
  create?: InputMaybe<Array<TwoFoldmageGalleryCreateInput>>;
};

export type TwoFoldmageGalleryCreateOneInlineInput = {
  /** Create and connect one TwoFoldmageGallery document */
  create?: InputMaybe<TwoFoldmageGalleryCreateInput>;
};

export type TwoFoldmageGalleryCreateWithPositionInput = {
  /** Document to create */
  data: TwoFoldmageGalleryCreateInput;
  /** Position in the list of existing component instances, will default to appending at the end of list */
  position?: InputMaybe<ConnectPositionInput>;
};

/** An edge in a connection. */
export type TwoFoldmageGalleryEdge = {
  __typename?: 'TwoFoldmageGalleryEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: TwoFoldmageGallery;
};

/** Identifies documents */
export type TwoFoldmageGalleryManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<TwoFoldmageGalleryWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<TwoFoldmageGalleryWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<TwoFoldmageGalleryWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']['input']>;
  buttonText?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  buttonText_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  buttonText_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  buttonText_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  buttonText_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  buttonText_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  buttonText_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  buttonText_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  buttonText_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  buttonText_starts_with?: InputMaybe<Scalars['String']['input']>;
  buttonUrl?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  buttonUrl_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  buttonUrl_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  buttonUrl_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  buttonUrl_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  buttonUrl_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  buttonUrl_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  buttonUrl_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  buttonUrl_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  buttonUrl_starts_with?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']['input']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']['input']>;
  images_every?: InputMaybe<AssetWhereInput>;
  images_none?: InputMaybe<AssetWhereInput>;
  images_some?: InputMaybe<AssetWhereInput>;
  subtitle?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  subtitle_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  subtitle_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  subtitle_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  subtitle_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  subtitle_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  subtitle_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  subtitle_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  subtitle_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  subtitle_starts_with?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  title_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  title_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  title_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  title_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  title_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  title_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  title_starts_with?: InputMaybe<Scalars['String']['input']>;
};

export enum TwoFoldmageGalleryOrderByInput {
  ButtonTextAsc = 'buttonText_ASC',
  ButtonTextDesc = 'buttonText_DESC',
  ButtonUrlAsc = 'buttonUrl_ASC',
  ButtonUrlDesc = 'buttonUrl_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  SubtitleAsc = 'subtitle_ASC',
  SubtitleDesc = 'subtitle_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC'
}

export type TwoFoldmageGalleryParent = LandingPage;

export type TwoFoldmageGalleryParentConnectInput = {
  LandingPage?: InputMaybe<LandingPageConnectInput>;
};

export type TwoFoldmageGalleryParentCreateInput = {
  LandingPage?: InputMaybe<LandingPageCreateInput>;
};

export type TwoFoldmageGalleryParentCreateManyInlineInput = {
  /** Connect multiple existing TwoFoldmageGalleryParent documents */
  connect?: InputMaybe<Array<TwoFoldmageGalleryParentWhereUniqueInput>>;
  /** Create and connect multiple existing TwoFoldmageGalleryParent documents */
  create?: InputMaybe<Array<TwoFoldmageGalleryParentCreateInput>>;
};

export type TwoFoldmageGalleryParentCreateOneInlineInput = {
  /** Connect one existing TwoFoldmageGalleryParent document */
  connect?: InputMaybe<TwoFoldmageGalleryParentWhereUniqueInput>;
  /** Create and connect one TwoFoldmageGalleryParent document */
  create?: InputMaybe<TwoFoldmageGalleryParentCreateInput>;
};

export type TwoFoldmageGalleryParentUpdateInput = {
  LandingPage?: InputMaybe<LandingPageUpdateInput>;
};

export type TwoFoldmageGalleryParentUpdateManyInlineInput = {
  /** Connect multiple existing TwoFoldmageGalleryParent documents */
  connect?: InputMaybe<Array<TwoFoldmageGalleryParentConnectInput>>;
  /** Create and connect multiple TwoFoldmageGalleryParent documents */
  create?: InputMaybe<Array<TwoFoldmageGalleryParentCreateInput>>;
  /** Delete multiple TwoFoldmageGalleryParent documents */
  delete?: InputMaybe<Array<TwoFoldmageGalleryParentWhereUniqueInput>>;
  /** Disconnect multiple TwoFoldmageGalleryParent documents */
  disconnect?: InputMaybe<Array<TwoFoldmageGalleryParentWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing TwoFoldmageGalleryParent documents */
  set?: InputMaybe<Array<TwoFoldmageGalleryParentWhereUniqueInput>>;
  /** Update multiple TwoFoldmageGalleryParent documents */
  update?: InputMaybe<Array<TwoFoldmageGalleryParentUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple TwoFoldmageGalleryParent documents */
  upsert?: InputMaybe<Array<TwoFoldmageGalleryParentUpsertWithNestedWhereUniqueInput>>;
};

export type TwoFoldmageGalleryParentUpdateManyWithNestedWhereInput = {
  LandingPage?: InputMaybe<LandingPageUpdateManyWithNestedWhereInput>;
};

export type TwoFoldmageGalleryParentUpdateOneInlineInput = {
  /** Connect existing TwoFoldmageGalleryParent document */
  connect?: InputMaybe<TwoFoldmageGalleryParentWhereUniqueInput>;
  /** Create and connect one TwoFoldmageGalleryParent document */
  create?: InputMaybe<TwoFoldmageGalleryParentCreateInput>;
  /** Delete currently connected TwoFoldmageGalleryParent document */
  delete?: InputMaybe<Scalars['Boolean']['input']>;
  /** Disconnect currently connected TwoFoldmageGalleryParent document */
  disconnect?: InputMaybe<Scalars['Boolean']['input']>;
  /** Update single TwoFoldmageGalleryParent document */
  update?: InputMaybe<TwoFoldmageGalleryParentUpdateWithNestedWhereUniqueInput>;
  /** Upsert single TwoFoldmageGalleryParent document */
  upsert?: InputMaybe<TwoFoldmageGalleryParentUpsertWithNestedWhereUniqueInput>;
};

export type TwoFoldmageGalleryParentUpdateWithNestedWhereUniqueInput = {
  LandingPage?: InputMaybe<LandingPageUpdateWithNestedWhereUniqueInput>;
};

export type TwoFoldmageGalleryParentUpsertWithNestedWhereUniqueInput = {
  LandingPage?: InputMaybe<LandingPageUpsertWithNestedWhereUniqueInput>;
};

export type TwoFoldmageGalleryParentWhereInput = {
  LandingPage?: InputMaybe<LandingPageWhereInput>;
};

export type TwoFoldmageGalleryParentWhereUniqueInput = {
  LandingPage?: InputMaybe<LandingPageWhereUniqueInput>;
};

export type TwoFoldmageGalleryUpdateInput = {
  buttonText?: InputMaybe<Scalars['String']['input']>;
  buttonUrl?: InputMaybe<Scalars['String']['input']>;
  images?: InputMaybe<AssetUpdateManyInlineInput>;
  subtitle?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type TwoFoldmageGalleryUpdateManyInlineInput = {
  /** Create and connect multiple TwoFoldmageGallery component instances */
  create?: InputMaybe<Array<TwoFoldmageGalleryCreateWithPositionInput>>;
  /** Delete multiple TwoFoldmageGallery documents */
  delete?: InputMaybe<Array<TwoFoldmageGalleryWhereUniqueInput>>;
  /** Update multiple TwoFoldmageGallery component instances */
  update?: InputMaybe<Array<TwoFoldmageGalleryUpdateWithNestedWhereUniqueAndPositionInput>>;
  /** Upsert multiple TwoFoldmageGallery component instances */
  upsert?: InputMaybe<Array<TwoFoldmageGalleryUpsertWithNestedWhereUniqueAndPositionInput>>;
};

export type TwoFoldmageGalleryUpdateManyInput = {
  buttonText?: InputMaybe<Scalars['String']['input']>;
  buttonUrl?: InputMaybe<Scalars['String']['input']>;
  subtitle?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type TwoFoldmageGalleryUpdateManyWithNestedWhereInput = {
  /** Update many input */
  data: TwoFoldmageGalleryUpdateManyInput;
  /** Document search */
  where: TwoFoldmageGalleryWhereInput;
};

export type TwoFoldmageGalleryUpdateOneInlineInput = {
  /** Create and connect one TwoFoldmageGallery document */
  create?: InputMaybe<TwoFoldmageGalleryCreateInput>;
  /** Delete currently connected TwoFoldmageGallery document */
  delete?: InputMaybe<Scalars['Boolean']['input']>;
  /** Update single TwoFoldmageGallery document */
  update?: InputMaybe<TwoFoldmageGalleryUpdateWithNestedWhereUniqueInput>;
  /** Upsert single TwoFoldmageGallery document */
  upsert?: InputMaybe<TwoFoldmageGalleryUpsertWithNestedWhereUniqueInput>;
};

export type TwoFoldmageGalleryUpdateWithNestedWhereUniqueAndPositionInput = {
  /** Document to update */
  data?: InputMaybe<TwoFoldmageGalleryUpdateInput>;
  /** Position in the list of existing component instances, will default to appending at the end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Unique component instance search */
  where: TwoFoldmageGalleryWhereUniqueInput;
};

export type TwoFoldmageGalleryUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: TwoFoldmageGalleryUpdateInput;
  /** Unique document search */
  where: TwoFoldmageGalleryWhereUniqueInput;
};

export type TwoFoldmageGalleryUpsertInput = {
  /** Create document if it didn't exist */
  create: TwoFoldmageGalleryCreateInput;
  /** Update document if it exists */
  update: TwoFoldmageGalleryUpdateInput;
};

export type TwoFoldmageGalleryUpsertWithNestedWhereUniqueAndPositionInput = {
  /** Document to upsert */
  data?: InputMaybe<TwoFoldmageGalleryUpsertInput>;
  /** Position in the list of existing component instances, will default to appending at the end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Unique component instance search */
  where: TwoFoldmageGalleryWhereUniqueInput;
};

export type TwoFoldmageGalleryUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: TwoFoldmageGalleryUpsertInput;
  /** Unique document search */
  where: TwoFoldmageGalleryWhereUniqueInput;
};

/** Identifies documents */
export type TwoFoldmageGalleryWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<TwoFoldmageGalleryWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<TwoFoldmageGalleryWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<TwoFoldmageGalleryWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']['input']>;
  buttonText?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  buttonText_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  buttonText_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  buttonText_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  buttonText_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  buttonText_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  buttonText_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  buttonText_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  buttonText_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  buttonText_starts_with?: InputMaybe<Scalars['String']['input']>;
  buttonUrl?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  buttonUrl_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  buttonUrl_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  buttonUrl_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  buttonUrl_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  buttonUrl_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  buttonUrl_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  buttonUrl_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  buttonUrl_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  buttonUrl_starts_with?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']['input']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']['input']>;
  images_every?: InputMaybe<AssetWhereInput>;
  images_none?: InputMaybe<AssetWhereInput>;
  images_some?: InputMaybe<AssetWhereInput>;
  subtitle?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  subtitle_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  subtitle_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  subtitle_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  subtitle_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  subtitle_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  subtitle_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  subtitle_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  subtitle_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  subtitle_starts_with?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  title_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  title_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  title_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  title_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  title_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  title_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  title_starts_with?: InputMaybe<Scalars['String']['input']>;
};

/** References TwoFoldmageGallery record uniquely */
export type TwoFoldmageGalleryWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']['input']>;
};

export type UnpublishLocaleInput = {
  /** Locales to unpublish */
  locale: Locale;
  /** Stages to unpublish selected locales from */
  stages: Array<Stage>;
};

/** User system model */
export type User = Entity & Node & {
  __typename?: 'User';
  /** The time the document was created */
  createdAt: Scalars['DateTime']['output'];
  /** Get the document in other stages */
  documentInStages: Array<User>;
  /** The unique identifier */
  id: Scalars['ID']['output'];
  /** Flag to determine if user is active or not */
  isActive: Scalars['Boolean']['output'];
  /** User Kind. Can be either MEMBER, PAT or PUBLIC */
  kind: UserKind;
  /** The username */
  name: Scalars['String']['output'];
  /** Profile Picture url */
  picture?: Maybe<Scalars['String']['output']>;
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  /** System stage field */
  stage: Stage;
  /** The time the document was updated */
  updatedAt: Scalars['DateTime']['output'];
};


/** User system model */
export type UserDocumentInStagesArgs = {
  includeCurrent?: Scalars['Boolean']['input'];
  inheritLocale?: Scalars['Boolean']['input'];
  stages?: Array<Stage>;
};

export type UserConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Document to connect */
  where: UserWhereUniqueInput;
};

/** A connection to a list of items. */
export type UserConnection = {
  __typename?: 'UserConnection';
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<UserEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type UserCreateManyInlineInput = {
  /** Connect multiple existing User documents */
  connect?: InputMaybe<Array<UserWhereUniqueInput>>;
};

export type UserCreateOneInlineInput = {
  /** Connect one existing User document */
  connect?: InputMaybe<UserWhereUniqueInput>;
};

/** An edge in a connection. */
export type UserEdge = {
  __typename?: 'UserEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: User;
};

/** System User Kind */
export enum UserKind {
  Member = 'MEMBER',
  Pat = 'PAT',
  Public = 'PUBLIC',
  Webhook = 'WEBHOOK'
}

/** Identifies documents */
export type UserManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<UserWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<UserWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<UserWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  documentInStages_every?: InputMaybe<UserWhereStageInput>;
  documentInStages_none?: InputMaybe<UserWhereStageInput>;
  documentInStages_some?: InputMaybe<UserWhereStageInput>;
  id?: InputMaybe<Scalars['ID']['input']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']['input']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']['input']>;
  isActive?: InputMaybe<Scalars['Boolean']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  isActive_not?: InputMaybe<Scalars['Boolean']['input']>;
  kind?: InputMaybe<UserKind>;
  /** All values that are contained in given list. */
  kind_in?: InputMaybe<Array<InputMaybe<UserKind>>>;
  /** Any other value that exists and is not equal to the given value. */
  kind_not?: InputMaybe<UserKind>;
  /** All values that are not contained in given list. */
  kind_not_in?: InputMaybe<Array<InputMaybe<UserKind>>>;
  name?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  name_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  name_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  name_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  name_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  name_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  name_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  name_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  name_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  name_starts_with?: InputMaybe<Scalars['String']['input']>;
  picture?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  picture_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  picture_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  picture_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  picture_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  picture_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  picture_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  picture_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  picture_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  picture_starts_with?: InputMaybe<Scalars['String']['input']>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
};

export enum UserOrderByInput {
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  IsActiveAsc = 'isActive_ASC',
  IsActiveDesc = 'isActive_DESC',
  KindAsc = 'kind_ASC',
  KindDesc = 'kind_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  PictureAsc = 'picture_ASC',
  PictureDesc = 'picture_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC'
}

export type UserUpdateManyInlineInput = {
  /** Connect multiple existing User documents */
  connect?: InputMaybe<Array<UserConnectInput>>;
  /** Disconnect multiple User documents */
  disconnect?: InputMaybe<Array<UserWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing User documents */
  set?: InputMaybe<Array<UserWhereUniqueInput>>;
};

export type UserUpdateOneInlineInput = {
  /** Connect existing User document */
  connect?: InputMaybe<UserWhereUniqueInput>;
  /** Disconnect currently connected User document */
  disconnect?: InputMaybe<Scalars['Boolean']['input']>;
};

/** This contains a set of filters that can be used to compare values internally */
export type UserWhereComparatorInput = {
  /** This field can be used to request to check if the entry is outdated by internal comparison */
  outdated_to?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Identifies documents */
export type UserWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<UserWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<UserWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<UserWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  documentInStages_every?: InputMaybe<UserWhereStageInput>;
  documentInStages_none?: InputMaybe<UserWhereStageInput>;
  documentInStages_some?: InputMaybe<UserWhereStageInput>;
  id?: InputMaybe<Scalars['ID']['input']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']['input']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']['input']>;
  isActive?: InputMaybe<Scalars['Boolean']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  isActive_not?: InputMaybe<Scalars['Boolean']['input']>;
  kind?: InputMaybe<UserKind>;
  /** All values that are contained in given list. */
  kind_in?: InputMaybe<Array<InputMaybe<UserKind>>>;
  /** Any other value that exists and is not equal to the given value. */
  kind_not?: InputMaybe<UserKind>;
  /** All values that are not contained in given list. */
  kind_not_in?: InputMaybe<Array<InputMaybe<UserKind>>>;
  name?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  name_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  name_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  name_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  name_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  name_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  name_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  name_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  name_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  name_starts_with?: InputMaybe<Scalars['String']['input']>;
  picture?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  picture_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  picture_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  picture_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  picture_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  picture_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  picture_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  picture_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  picture_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  picture_starts_with?: InputMaybe<Scalars['String']['input']>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
};

/** The document in stages filter allows specifying a stage entry to cross compare the same document between different stages */
export type UserWhereStageInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<UserWhereStageInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<UserWhereStageInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<UserWhereStageInput>>;
  /** This field contains fields which can be set as true or false to specify an internal comparison */
  compareWithParent?: InputMaybe<UserWhereComparatorInput>;
  /** Specify the stage to compare with */
  stage?: InputMaybe<Stage>;
};

/** References User record uniquely */
export type UserWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']['input']>;
};

export type UspsDetail = Entity & {
  __typename?: 'UspsDetail';
  description: Scalars['String']['output'];
  /** The unique identifier */
  id: Scalars['ID']['output'];
  /** System Locale field */
  locale: Locale;
  /** Get the other localizations for this document */
  localizations: Array<UspsDetail>;
  /** System stage field */
  stage: Stage;
  title: Scalars['String']['output'];
};


export type UspsDetailLocalizationsArgs = {
  includeCurrent?: Scalars['Boolean']['input'];
  locales?: Array<Locale>;
};

export type UspsDetailConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Document to connect */
  where: UspsDetailWhereUniqueInput;
};

/** A connection to a list of items. */
export type UspsDetailConnection = {
  __typename?: 'UspsDetailConnection';
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<UspsDetailEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type UspsDetailCreateInput = {
  /** description input for default locale (en) */
  description: Scalars['String']['input'];
  /** Inline mutations for managing document localizations excluding the default locale */
  localizations?: InputMaybe<UspsDetailCreateLocalizationsInput>;
  /** title input for default locale (en) */
  title: Scalars['String']['input'];
};

export type UspsDetailCreateLocalizationDataInput = {
  description: Scalars['String']['input'];
  title: Scalars['String']['input'];
};

export type UspsDetailCreateLocalizationInput = {
  /** Localization input */
  data: UspsDetailCreateLocalizationDataInput;
  locale: Locale;
};

export type UspsDetailCreateLocalizationsInput = {
  /** Create localizations for the newly-created document */
  create?: InputMaybe<Array<UspsDetailCreateLocalizationInput>>;
};

export type UspsDetailCreateManyInlineInput = {
  /** Create and connect multiple existing UspsDetail documents */
  create?: InputMaybe<Array<UspsDetailCreateInput>>;
};

export type UspsDetailCreateOneInlineInput = {
  /** Create and connect one UspsDetail document */
  create?: InputMaybe<UspsDetailCreateInput>;
};

export type UspsDetailCreateWithPositionInput = {
  /** Document to create */
  data: UspsDetailCreateInput;
  /** Position in the list of existing component instances, will default to appending at the end of list */
  position?: InputMaybe<ConnectPositionInput>;
};

/** An edge in a connection. */
export type UspsDetailEdge = {
  __typename?: 'UspsDetailEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: UspsDetail;
};

/** Identifies documents */
export type UspsDetailManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<UspsDetailWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<UspsDetailWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<UspsDetailWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']['input']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']['input']>;
};

export enum UspsDetailOrderByInput {
  DescriptionAsc = 'description_ASC',
  DescriptionDesc = 'description_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC'
}

export type UspsDetailParent = WhySensoriumUsp;

export type UspsDetailParentConnectInput = {
  WhySensoriumUsp?: InputMaybe<WhySensoriumUspConnectInput>;
};

export type UspsDetailParentCreateInput = {
  WhySensoriumUsp?: InputMaybe<WhySensoriumUspCreateInput>;
};

export type UspsDetailParentCreateManyInlineInput = {
  /** Create and connect multiple existing UspsDetailParent documents */
  create?: InputMaybe<Array<UspsDetailParentCreateInput>>;
};

export type UspsDetailParentCreateOneInlineInput = {
  /** Create and connect one UspsDetailParent document */
  create?: InputMaybe<UspsDetailParentCreateInput>;
};

export type UspsDetailParentCreateWithPositionInput = {
  WhySensoriumUsp?: InputMaybe<WhySensoriumUspCreateWithPositionInput>;
};

export type UspsDetailParentUpdateInput = {
  WhySensoriumUsp?: InputMaybe<WhySensoriumUspUpdateInput>;
};

export type UspsDetailParentUpdateManyInlineInput = {
  /** Create and connect multiple UspsDetailParent component instances */
  create?: InputMaybe<Array<UspsDetailParentCreateWithPositionInput>>;
  /** Delete multiple UspsDetailParent documents */
  delete?: InputMaybe<Array<UspsDetailParentWhereUniqueInput>>;
  /** Update multiple UspsDetailParent component instances */
  update?: InputMaybe<Array<UspsDetailParentUpdateWithNestedWhereUniqueAndPositionInput>>;
  /** Upsert multiple UspsDetailParent component instances */
  upsert?: InputMaybe<Array<UspsDetailParentUpsertWithNestedWhereUniqueAndPositionInput>>;
};

export type UspsDetailParentUpdateManyWithNestedWhereInput = {
  WhySensoriumUsp?: InputMaybe<WhySensoriumUspUpdateManyWithNestedWhereInput>;
};

export type UspsDetailParentUpdateOneInlineInput = {
  /** Create and connect one UspsDetailParent document */
  create?: InputMaybe<UspsDetailParentCreateInput>;
  /** Delete currently connected UspsDetailParent document */
  delete?: InputMaybe<Scalars['Boolean']['input']>;
  /** Update single UspsDetailParent document */
  update?: InputMaybe<UspsDetailParentUpdateWithNestedWhereUniqueInput>;
  /** Upsert single UspsDetailParent document */
  upsert?: InputMaybe<UspsDetailParentUpsertWithNestedWhereUniqueInput>;
};

export type UspsDetailParentUpdateWithNestedWhereUniqueAndPositionInput = {
  WhySensoriumUsp?: InputMaybe<WhySensoriumUspUpdateWithNestedWhereUniqueAndPositionInput>;
};

export type UspsDetailParentUpdateWithNestedWhereUniqueInput = {
  WhySensoriumUsp?: InputMaybe<WhySensoriumUspUpdateWithNestedWhereUniqueInput>;
};

export type UspsDetailParentUpsertWithNestedWhereUniqueAndPositionInput = {
  WhySensoriumUsp?: InputMaybe<WhySensoriumUspUpsertWithNestedWhereUniqueAndPositionInput>;
};

export type UspsDetailParentUpsertWithNestedWhereUniqueInput = {
  WhySensoriumUsp?: InputMaybe<WhySensoriumUspUpsertWithNestedWhereUniqueInput>;
};

export type UspsDetailParentWhereInput = {
  WhySensoriumUsp?: InputMaybe<WhySensoriumUspWhereInput>;
};

export type UspsDetailParentWhereUniqueInput = {
  WhySensoriumUsp?: InputMaybe<WhySensoriumUspWhereUniqueInput>;
};

export type UspsDetailUpdateInput = {
  /** description input for default locale (en) */
  description?: InputMaybe<Scalars['String']['input']>;
  /** Manage document localizations */
  localizations?: InputMaybe<UspsDetailUpdateLocalizationsInput>;
  /** title input for default locale (en) */
  title?: InputMaybe<Scalars['String']['input']>;
};

export type UspsDetailUpdateLocalizationDataInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type UspsDetailUpdateLocalizationInput = {
  data: UspsDetailUpdateLocalizationDataInput;
  locale: Locale;
};

export type UspsDetailUpdateLocalizationsInput = {
  /** Localizations to create */
  create?: InputMaybe<Array<UspsDetailCreateLocalizationInput>>;
  /** Localizations to delete */
  delete?: InputMaybe<Array<Locale>>;
  /** Localizations to update */
  update?: InputMaybe<Array<UspsDetailUpdateLocalizationInput>>;
  upsert?: InputMaybe<Array<UspsDetailUpsertLocalizationInput>>;
};

export type UspsDetailUpdateManyInlineInput = {
  /** Create and connect multiple UspsDetail component instances */
  create?: InputMaybe<Array<UspsDetailCreateWithPositionInput>>;
  /** Delete multiple UspsDetail documents */
  delete?: InputMaybe<Array<UspsDetailWhereUniqueInput>>;
  /** Update multiple UspsDetail component instances */
  update?: InputMaybe<Array<UspsDetailUpdateWithNestedWhereUniqueAndPositionInput>>;
  /** Upsert multiple UspsDetail component instances */
  upsert?: InputMaybe<Array<UspsDetailUpsertWithNestedWhereUniqueAndPositionInput>>;
};

export type UspsDetailUpdateManyInput = {
  /** description input for default locale (en) */
  description?: InputMaybe<Scalars['String']['input']>;
  /** Optional updates to localizations */
  localizations?: InputMaybe<UspsDetailUpdateManyLocalizationsInput>;
  /** title input for default locale (en) */
  title?: InputMaybe<Scalars['String']['input']>;
};

export type UspsDetailUpdateManyLocalizationDataInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type UspsDetailUpdateManyLocalizationInput = {
  data: UspsDetailUpdateManyLocalizationDataInput;
  locale: Locale;
};

export type UspsDetailUpdateManyLocalizationsInput = {
  /** Localizations to update */
  update?: InputMaybe<Array<UspsDetailUpdateManyLocalizationInput>>;
};

export type UspsDetailUpdateManyWithNestedWhereInput = {
  /** Update many input */
  data: UspsDetailUpdateManyInput;
  /** Document search */
  where: UspsDetailWhereInput;
};

export type UspsDetailUpdateOneInlineInput = {
  /** Create and connect one UspsDetail document */
  create?: InputMaybe<UspsDetailCreateInput>;
  /** Delete currently connected UspsDetail document */
  delete?: InputMaybe<Scalars['Boolean']['input']>;
  /** Update single UspsDetail document */
  update?: InputMaybe<UspsDetailUpdateWithNestedWhereUniqueInput>;
  /** Upsert single UspsDetail document */
  upsert?: InputMaybe<UspsDetailUpsertWithNestedWhereUniqueInput>;
};

export type UspsDetailUpdateWithNestedWhereUniqueAndPositionInput = {
  /** Document to update */
  data?: InputMaybe<UspsDetailUpdateInput>;
  /** Position in the list of existing component instances, will default to appending at the end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Unique component instance search */
  where: UspsDetailWhereUniqueInput;
};

export type UspsDetailUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: UspsDetailUpdateInput;
  /** Unique document search */
  where: UspsDetailWhereUniqueInput;
};

export type UspsDetailUpsertInput = {
  /** Create document if it didn't exist */
  create: UspsDetailCreateInput;
  /** Update document if it exists */
  update: UspsDetailUpdateInput;
};

export type UspsDetailUpsertLocalizationInput = {
  create: UspsDetailCreateLocalizationDataInput;
  locale: Locale;
  update: UspsDetailUpdateLocalizationDataInput;
};

export type UspsDetailUpsertWithNestedWhereUniqueAndPositionInput = {
  /** Document to upsert */
  data?: InputMaybe<UspsDetailUpsertInput>;
  /** Position in the list of existing component instances, will default to appending at the end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Unique component instance search */
  where: UspsDetailWhereUniqueInput;
};

export type UspsDetailUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: UspsDetailUpsertInput;
  /** Unique document search */
  where: UspsDetailWhereUniqueInput;
};

/** Identifies documents */
export type UspsDetailWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<UspsDetailWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<UspsDetailWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<UspsDetailWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  description_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  description_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  description_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  description_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  description_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  description_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  description_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  description_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  description_starts_with?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']['input']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  title_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  title_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  title_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  title_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  title_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  title_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  title_starts_with?: InputMaybe<Scalars['String']['input']>;
};

/** References UspsDetail record uniquely */
export type UspsDetailWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']['input']>;
};

export type Version = {
  __typename?: 'Version';
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['ID']['output'];
  revision: Scalars['Int']['output'];
  stage: Stage;
};

export type VersionWhereInput = {
  id: Scalars['ID']['input'];
  revision: Scalars['Int']['input'];
  stage: Stage;
};

export type WhySensoriumUsp = Entity & {
  __typename?: 'WhySensoriumUsp';
  /** The unique identifier */
  id: Scalars['ID']['output'];
  /** System Locale field */
  locale: Locale;
  /** Get the other localizations for this document */
  localizations: Array<WhySensoriumUsp>;
  mainTitle: Scalars['String']['output'];
  /** System stage field */
  stage: Stage;
  uspsDetail: Array<UspsDetail>;
};


export type WhySensoriumUspLocalizationsArgs = {
  includeCurrent?: Scalars['Boolean']['input'];
  locales?: Array<Locale>;
};


export type WhySensoriumUspUspsDetailArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: InputMaybe<Array<Locale>>;
  orderBy?: InputMaybe<UspsDetailOrderByInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<UspsDetailWhereInput>;
};

export type WhySensoriumUspConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Document to connect */
  where: WhySensoriumUspWhereUniqueInput;
};

/** A connection to a list of items. */
export type WhySensoriumUspConnection = {
  __typename?: 'WhySensoriumUspConnection';
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<WhySensoriumUspEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type WhySensoriumUspCreateInput = {
  /** Inline mutations for managing document localizations excluding the default locale */
  localizations?: InputMaybe<WhySensoriumUspCreateLocalizationsInput>;
  /** mainTitle input for default locale (en) */
  mainTitle: Scalars['String']['input'];
  uspsDetail?: InputMaybe<UspsDetailCreateManyInlineInput>;
};

export type WhySensoriumUspCreateLocalizationDataInput = {
  mainTitle: Scalars['String']['input'];
};

export type WhySensoriumUspCreateLocalizationInput = {
  /** Localization input */
  data: WhySensoriumUspCreateLocalizationDataInput;
  locale: Locale;
};

export type WhySensoriumUspCreateLocalizationsInput = {
  /** Create localizations for the newly-created document */
  create?: InputMaybe<Array<WhySensoriumUspCreateLocalizationInput>>;
};

export type WhySensoriumUspCreateManyInlineInput = {
  /** Create and connect multiple existing WhySensoriumUsp documents */
  create?: InputMaybe<Array<WhySensoriumUspCreateInput>>;
};

export type WhySensoriumUspCreateOneInlineInput = {
  /** Create and connect one WhySensoriumUsp document */
  create?: InputMaybe<WhySensoriumUspCreateInput>;
};

export type WhySensoriumUspCreateWithPositionInput = {
  /** Document to create */
  data: WhySensoriumUspCreateInput;
  /** Position in the list of existing component instances, will default to appending at the end of list */
  position?: InputMaybe<ConnectPositionInput>;
};

/** An edge in a connection. */
export type WhySensoriumUspEdge = {
  __typename?: 'WhySensoriumUspEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: WhySensoriumUsp;
};

/** Identifies documents */
export type WhySensoriumUspManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<WhySensoriumUspWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<WhySensoriumUspWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<WhySensoriumUspWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']['input']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']['input']>;
  uspsDetail_every?: InputMaybe<UspsDetailWhereInput>;
  uspsDetail_none?: InputMaybe<UspsDetailWhereInput>;
  uspsDetail_some?: InputMaybe<UspsDetailWhereInput>;
};

export enum WhySensoriumUspOrderByInput {
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  MainTitleAsc = 'mainTitle_ASC',
  MainTitleDesc = 'mainTitle_DESC'
}

export type WhySensoriumUspParent = NewLandingPage;

export type WhySensoriumUspParentConnectInput = {
  NewLandingPage?: InputMaybe<NewLandingPageConnectInput>;
};

export type WhySensoriumUspParentCreateInput = {
  NewLandingPage?: InputMaybe<NewLandingPageCreateInput>;
};

export type WhySensoriumUspParentCreateManyInlineInput = {
  /** Connect multiple existing WhySensoriumUspParent documents */
  connect?: InputMaybe<Array<WhySensoriumUspParentWhereUniqueInput>>;
  /** Create and connect multiple existing WhySensoriumUspParent documents */
  create?: InputMaybe<Array<WhySensoriumUspParentCreateInput>>;
};

export type WhySensoriumUspParentCreateOneInlineInput = {
  /** Connect one existing WhySensoriumUspParent document */
  connect?: InputMaybe<WhySensoriumUspParentWhereUniqueInput>;
  /** Create and connect one WhySensoriumUspParent document */
  create?: InputMaybe<WhySensoriumUspParentCreateInput>;
};

export type WhySensoriumUspParentUpdateInput = {
  NewLandingPage?: InputMaybe<NewLandingPageUpdateInput>;
};

export type WhySensoriumUspParentUpdateManyInlineInput = {
  /** Connect multiple existing WhySensoriumUspParent documents */
  connect?: InputMaybe<Array<WhySensoriumUspParentConnectInput>>;
  /** Create and connect multiple WhySensoriumUspParent documents */
  create?: InputMaybe<Array<WhySensoriumUspParentCreateInput>>;
  /** Delete multiple WhySensoriumUspParent documents */
  delete?: InputMaybe<Array<WhySensoriumUspParentWhereUniqueInput>>;
  /** Disconnect multiple WhySensoriumUspParent documents */
  disconnect?: InputMaybe<Array<WhySensoriumUspParentWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing WhySensoriumUspParent documents */
  set?: InputMaybe<Array<WhySensoriumUspParentWhereUniqueInput>>;
  /** Update multiple WhySensoriumUspParent documents */
  update?: InputMaybe<Array<WhySensoriumUspParentUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple WhySensoriumUspParent documents */
  upsert?: InputMaybe<Array<WhySensoriumUspParentUpsertWithNestedWhereUniqueInput>>;
};

export type WhySensoriumUspParentUpdateManyWithNestedWhereInput = {
  NewLandingPage?: InputMaybe<NewLandingPageUpdateManyWithNestedWhereInput>;
};

export type WhySensoriumUspParentUpdateOneInlineInput = {
  /** Connect existing WhySensoriumUspParent document */
  connect?: InputMaybe<WhySensoriumUspParentWhereUniqueInput>;
  /** Create and connect one WhySensoriumUspParent document */
  create?: InputMaybe<WhySensoriumUspParentCreateInput>;
  /** Delete currently connected WhySensoriumUspParent document */
  delete?: InputMaybe<Scalars['Boolean']['input']>;
  /** Disconnect currently connected WhySensoriumUspParent document */
  disconnect?: InputMaybe<Scalars['Boolean']['input']>;
  /** Update single WhySensoriumUspParent document */
  update?: InputMaybe<WhySensoriumUspParentUpdateWithNestedWhereUniqueInput>;
  /** Upsert single WhySensoriumUspParent document */
  upsert?: InputMaybe<WhySensoriumUspParentUpsertWithNestedWhereUniqueInput>;
};

export type WhySensoriumUspParentUpdateWithNestedWhereUniqueInput = {
  NewLandingPage?: InputMaybe<NewLandingPageUpdateWithNestedWhereUniqueInput>;
};

export type WhySensoriumUspParentUpsertWithNestedWhereUniqueInput = {
  NewLandingPage?: InputMaybe<NewLandingPageUpsertWithNestedWhereUniqueInput>;
};

export type WhySensoriumUspParentWhereInput = {
  NewLandingPage?: InputMaybe<NewLandingPageWhereInput>;
};

export type WhySensoriumUspParentWhereUniqueInput = {
  NewLandingPage?: InputMaybe<NewLandingPageWhereUniqueInput>;
};

export type WhySensoriumUspUpdateInput = {
  /** Manage document localizations */
  localizations?: InputMaybe<WhySensoriumUspUpdateLocalizationsInput>;
  /** mainTitle input for default locale (en) */
  mainTitle?: InputMaybe<Scalars['String']['input']>;
  uspsDetail?: InputMaybe<UspsDetailUpdateManyInlineInput>;
};

export type WhySensoriumUspUpdateLocalizationDataInput = {
  mainTitle?: InputMaybe<Scalars['String']['input']>;
};

export type WhySensoriumUspUpdateLocalizationInput = {
  data: WhySensoriumUspUpdateLocalizationDataInput;
  locale: Locale;
};

export type WhySensoriumUspUpdateLocalizationsInput = {
  /** Localizations to create */
  create?: InputMaybe<Array<WhySensoriumUspCreateLocalizationInput>>;
  /** Localizations to delete */
  delete?: InputMaybe<Array<Locale>>;
  /** Localizations to update */
  update?: InputMaybe<Array<WhySensoriumUspUpdateLocalizationInput>>;
  upsert?: InputMaybe<Array<WhySensoriumUspUpsertLocalizationInput>>;
};

export type WhySensoriumUspUpdateManyInlineInput = {
  /** Create and connect multiple WhySensoriumUsp component instances */
  create?: InputMaybe<Array<WhySensoriumUspCreateWithPositionInput>>;
  /** Delete multiple WhySensoriumUsp documents */
  delete?: InputMaybe<Array<WhySensoriumUspWhereUniqueInput>>;
  /** Update multiple WhySensoriumUsp component instances */
  update?: InputMaybe<Array<WhySensoriumUspUpdateWithNestedWhereUniqueAndPositionInput>>;
  /** Upsert multiple WhySensoriumUsp component instances */
  upsert?: InputMaybe<Array<WhySensoriumUspUpsertWithNestedWhereUniqueAndPositionInput>>;
};

export type WhySensoriumUspUpdateManyInput = {
  /** Optional updates to localizations */
  localizations?: InputMaybe<WhySensoriumUspUpdateManyLocalizationsInput>;
  /** mainTitle input for default locale (en) */
  mainTitle?: InputMaybe<Scalars['String']['input']>;
};

export type WhySensoriumUspUpdateManyLocalizationDataInput = {
  mainTitle?: InputMaybe<Scalars['String']['input']>;
};

export type WhySensoriumUspUpdateManyLocalizationInput = {
  data: WhySensoriumUspUpdateManyLocalizationDataInput;
  locale: Locale;
};

export type WhySensoriumUspUpdateManyLocalizationsInput = {
  /** Localizations to update */
  update?: InputMaybe<Array<WhySensoriumUspUpdateManyLocalizationInput>>;
};

export type WhySensoriumUspUpdateManyWithNestedWhereInput = {
  /** Update many input */
  data: WhySensoriumUspUpdateManyInput;
  /** Document search */
  where: WhySensoriumUspWhereInput;
};

export type WhySensoriumUspUpdateOneInlineInput = {
  /** Create and connect one WhySensoriumUsp document */
  create?: InputMaybe<WhySensoriumUspCreateInput>;
  /** Delete currently connected WhySensoriumUsp document */
  delete?: InputMaybe<Scalars['Boolean']['input']>;
  /** Update single WhySensoriumUsp document */
  update?: InputMaybe<WhySensoriumUspUpdateWithNestedWhereUniqueInput>;
  /** Upsert single WhySensoriumUsp document */
  upsert?: InputMaybe<WhySensoriumUspUpsertWithNestedWhereUniqueInput>;
};

export type WhySensoriumUspUpdateWithNestedWhereUniqueAndPositionInput = {
  /** Document to update */
  data?: InputMaybe<WhySensoriumUspUpdateInput>;
  /** Position in the list of existing component instances, will default to appending at the end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Unique component instance search */
  where: WhySensoriumUspWhereUniqueInput;
};

export type WhySensoriumUspUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: WhySensoriumUspUpdateInput;
  /** Unique document search */
  where: WhySensoriumUspWhereUniqueInput;
};

export type WhySensoriumUspUpsertInput = {
  /** Create document if it didn't exist */
  create: WhySensoriumUspCreateInput;
  /** Update document if it exists */
  update: WhySensoriumUspUpdateInput;
};

export type WhySensoriumUspUpsertLocalizationInput = {
  create: WhySensoriumUspCreateLocalizationDataInput;
  locale: Locale;
  update: WhySensoriumUspUpdateLocalizationDataInput;
};

export type WhySensoriumUspUpsertWithNestedWhereUniqueAndPositionInput = {
  /** Document to upsert */
  data?: InputMaybe<WhySensoriumUspUpsertInput>;
  /** Position in the list of existing component instances, will default to appending at the end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Unique component instance search */
  where: WhySensoriumUspWhereUniqueInput;
};

export type WhySensoriumUspUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: WhySensoriumUspUpsertInput;
  /** Unique document search */
  where: WhySensoriumUspWhereUniqueInput;
};

/** Identifies documents */
export type WhySensoriumUspWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<WhySensoriumUspWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<WhySensoriumUspWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<WhySensoriumUspWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']['input']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']['input']>;
  mainTitle?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  mainTitle_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  mainTitle_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  mainTitle_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  mainTitle_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  mainTitle_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  mainTitle_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  mainTitle_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  mainTitle_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  mainTitle_starts_with?: InputMaybe<Scalars['String']['input']>;
  uspsDetail_every?: InputMaybe<UspsDetailWhereInput>;
  uspsDetail_none?: InputMaybe<UspsDetailWhereInput>;
  uspsDetail_some?: InputMaybe<UspsDetailWhereInput>;
};

/** References WhySensoriumUsp record uniquely */
export type WhySensoriumUspWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']['input']>;
};

export enum _FilterKind {
  And = 'AND',
  Not = 'NOT',
  Or = 'OR',
  Contains = 'contains',
  ContainsAll = 'contains_all',
  ContainsNone = 'contains_none',
  ContainsSome = 'contains_some',
  EndsWith = 'ends_with',
  Eq = 'eq',
  EqNot = 'eq_not',
  Gt = 'gt',
  Gte = 'gte',
  In = 'in',
  JsonPathExists = 'json_path_exists',
  JsonValueRecursive = 'json_value_recursive',
  Lt = 'lt',
  Lte = 'lte',
  NotContains = 'not_contains',
  NotEndsWith = 'not_ends_with',
  NotIn = 'not_in',
  NotStartsWith = 'not_starts_with',
  RelationalEvery = 'relational_every',
  RelationalNone = 'relational_none',
  RelationalSingle = 'relational_single',
  RelationalSome = 'relational_some',
  Search = 'search',
  StartsWith = 'starts_with',
  UnionEmpty = 'union_empty',
  UnionEvery = 'union_every',
  UnionNone = 'union_none',
  UnionSingle = 'union_single',
  UnionSome = 'union_some'
}

export enum _MutationInputFieldKind {
  Enum = 'enum',
  Relation = 'relation',
  RichText = 'richText',
  RichTextWithEmbeds = 'richTextWithEmbeds',
  Scalar = 'scalar',
  Union = 'union',
  Virtual = 'virtual'
}

export enum _MutationKind {
  Create = 'create',
  Delete = 'delete',
  DeleteMany = 'deleteMany',
  Publish = 'publish',
  PublishMany = 'publishMany',
  SchedulePublish = 'schedulePublish',
  ScheduleUnpublish = 'scheduleUnpublish',
  Unpublish = 'unpublish',
  UnpublishMany = 'unpublishMany',
  Update = 'update',
  UpdateMany = 'updateMany',
  Upsert = 'upsert'
}

export enum _OrderDirection {
  Asc = 'asc',
  Desc = 'desc'
}

export enum _RelationInputCardinality {
  Many = 'many',
  One = 'one'
}

export enum _RelationInputKind {
  Create = 'create',
  Update = 'update'
}

export enum _RelationKind {
  Regular = 'regular',
  Union = 'union'
}

export enum _SystemDateTimeFieldVariation {
  Base = 'base',
  Combined = 'combined',
  Localization = 'localization'
}

export type GetAllLandingPagesOverviewQueryVariables = Exact<{
  locales?: InputMaybe<Array<Locale> | Locale>;
}>;


export type GetAllLandingPagesOverviewQuery = { __typename?: 'Query', newLandingPages: Array<{ __typename?: 'NewLandingPage', heroTitle: string, heroDescription: string, slug?: string | null, shortTitle?: string | null, heroSectionAsest: { __typename?: 'Asset', url: string } }> };

export type GetAllBlogsSlugQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAllBlogsSlugQuery = { __typename?: 'Query', posts: Array<{ __typename?: 'Post', slug: string }> };

export type GetAllBlogsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAllBlogsQuery = { __typename?: 'Query', posts: Array<{ __typename?: 'Post', slug: string, title: string, publishedAt?: any | null, tags: Array<{ __typename?: 'Tag', name?: string | null, slug?: string | null }>, content: { __typename?: 'PostContentRichText', html: string }, coverImage: { __typename?: 'Asset', width?: number | null, url: string, height?: number | null } }> };

export type GetLandingPageDetailsQueryVariables = Exact<{
  slug?: InputMaybe<Scalars['String']['input']>;
  locales?: InputMaybe<Array<Locale> | Locale>;
}>;


export type GetLandingPageDetailsQuery = { __typename?: 'Query', newLandingPages: Array<{ __typename?: 'NewLandingPage', slug?: string | null, heroTitle: string, heroDescription: string, averageRating: number, heroCtaButton1: string, heroCtaButtonRedirectUrl?: string | null, heroCtaButton2: string, howItsWorkHeadline?: string | null, reviewsCounts: number, publishedAt?: any | null, howItsWorkCta?: string | null, heroSectionAsest: { __typename?: 'Asset', altText?: string | null, url: string }, relatedTemplatesSection?: { __typename?: 'RelatedLandingPageTemplate', mainTitle: string, mainDescription: string, leftCtaButton?: string | null, rightCtaButton?: string | null, templatesInformation: Array<{ __typename?: 'TemplatesDetail', locale: Locale, id: string, redirectionLink?: string | null, startingPrice: number, title: string, image: { __typename?: 'Asset', url: string } }> } | null, faqSection?: { __typename?: 'Faq', faqTitle: string, locale: Locale, id: string, faqDetails: Array<{ __typename?: 'FaqDetail', id: string, locale: Locale, question: string, description?: { __typename?: 'RichText', html: string } | null }> } | null, categoryShowcase?: { __typename?: 'CategorySection', description?: string | null, id: string, title?: string | null, categoryDetails: Array<{ __typename?: 'CategoryDetail', title?: string | null, description?: string | null, buttonTilte?: string | null, buttonRedirectLink?: string | null, id: string, locale: Locale, backgroundImage: { __typename?: 'Asset', url: string } }> } | null, sensoriumUsps?: { __typename?: 'WhySensoriumUsp', locale: Locale, mainTitle: string, uspsDetail: Array<{ __typename?: 'UspsDetail', id: string, description: string, title: string }> } | null, howItsWorkDetail: Array<{ __typename?: 'HowItsWorkDetail', title?: string | null, description?: { __typename?: 'RichText', html: string } | null }>, heroFeatureList: Array<{ __typename?: 'HomeFeaturePoint', featuresPoint?: string | null, id: string }> }> };

export type GetAllLandingPagesQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAllLandingPagesQuery = { __typename?: 'Query', landingPages: Array<{ __typename?: 'LandingPage', slug?: string | null, subtitle?: string | null, subHeading?: string | null, heading?: string | null, subPoints: Array<{ __typename?: 'LandingPagePoint', subtitle?: string | null, title?: string | null, icon: { __typename?: 'Asset', url: string, width?: number | null, height?: number | null } }>, components: Array<{ __typename?: 'CollectionShowcase', id: string, subtitle?: string | null, title?: string | null, underCollectionButton?: string | null, underCollectionButtonUrl?: string | null, underCollectionTitle?: string | null, cards: Array<{ __typename?: 'Collection', id: string, buttonUrl?: string | null, buttonText?: string | null, title?: string | null, topic?: string | null, subtitle?: string | null, image?: { __typename?: 'Asset', width?: number | null, url: string, height?: number | null } | null }> } | { __typename?: 'ImageWithText', id: string, title?: string | null, image?: { __typename?: 'Asset', height?: number | null, width?: number | null, url: string } | null } | { __typename?: 'LandingPageSlidingImageGallery', id: string, title?: string | null, subtitle?: string | null, underImageSubtitle?: string | null, underImageTitle?: string | null, images: Array<{ __typename?: 'Asset', height?: number | null, url: string, width?: number | null }> } | { __typename?: 'SideBySideCompare', id: string, title?: string | null, subtitle?: string | null, collections: Array<{ __typename?: 'Collection', id: string, buttonUrl?: string | null, buttonText?: string | null, title?: string | null, topic?: string | null, subtitle?: string | null, image?: { __typename?: 'Asset', width?: number | null, url: string, height?: number | null } | null }> } | { __typename?: 'TwoFoldmageGallery', id: string, title?: string | null, subtitle?: string | null, buttonUrl?: string | null, buttonText?: string | null, images: Array<{ __typename?: 'Asset', width?: number | null, url: string, height?: number | null }> }> }> };

export type GetAllReviewsQueryVariables = Exact<{
  locale: Locale;
  last?: InputMaybe<Scalars['Int']['input']>;
}>;


export type GetAllReviewsQuery = { __typename?: 'Query', reviews: Array<{ __typename?: 'Review', reviews: Array<{ __typename?: 'Testimonial', id: string, title?: string | null, ratingFrom5?: number | null, description?: { __typename?: 'RichText', markdown: string } | null }> }> };

export type GetSingleBlogQueryVariables = Exact<{
  slug?: InputMaybe<Scalars['String']['input']>;
}>;


export type GetSingleBlogQuery = { __typename?: 'Query', post?: { __typename?: 'Post', slug: string, title: string, publishedAt?: any | null, excerpt?: string | null, content: { __typename?: 'PostContentRichText', html: string }, coverImage: { __typename?: 'Asset', width?: number | null, url: string, height?: number | null }, tags: Array<{ __typename?: 'Tag', name?: string | null, slug?: string | null }>, seoOverride?: { __typename?: 'SeoOverride', description?: string | null, title?: string | null } | null } | null };

export type GetAllTagsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAllTagsQuery = { __typename?: 'Query', tags: Array<{ __typename?: 'Tag', name?: string | null, slug?: string | null }> };

export type GetAllPostsForTagQueryVariables = Exact<{
  slug?: InputMaybe<Scalars['String']['input']>;
}>;


export type GetAllPostsForTagQuery = { __typename?: 'Query', tag?: { __typename?: 'Tag', posts: Array<{ __typename?: 'Post', slug: string, title: string, publishedAt?: any | null, tags: Array<{ __typename?: 'Tag', name?: string | null, slug?: string | null }>, content: { __typename?: 'PostContentRichText', html: string }, coverImage: { __typename?: 'Asset', width?: number | null, url: string, height?: number | null } }> } | null };


export const GetAllLandingPagesOverviewDocument = gql`
    query getAllLandingPagesOverview($locales: [Locale!] = en) {
  newLandingPages(locales: $locales) {
    heroSectionAsest {
      url
    }
    heroTitle
    heroDescription
    slug
    shortTitle
  }
}
    `;

/**
 * __useGetAllLandingPagesOverviewQuery__
 *
 * To run a query within a React component, call `useGetAllLandingPagesOverviewQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAllLandingPagesOverviewQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAllLandingPagesOverviewQuery({
 *   variables: {
 *      locales: // value for 'locales'
 *   },
 * });
 */
export function useGetAllLandingPagesOverviewQuery(baseOptions?: Apollo.QueryHookOptions<GetAllLandingPagesOverviewQuery, GetAllLandingPagesOverviewQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetAllLandingPagesOverviewQuery, GetAllLandingPagesOverviewQueryVariables>(GetAllLandingPagesOverviewDocument, options);
      }
export function useGetAllLandingPagesOverviewLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetAllLandingPagesOverviewQuery, GetAllLandingPagesOverviewQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetAllLandingPagesOverviewQuery, GetAllLandingPagesOverviewQueryVariables>(GetAllLandingPagesOverviewDocument, options);
        }
export function useGetAllLandingPagesOverviewSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<GetAllLandingPagesOverviewQuery, GetAllLandingPagesOverviewQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetAllLandingPagesOverviewQuery, GetAllLandingPagesOverviewQueryVariables>(GetAllLandingPagesOverviewDocument, options);
        }
export type GetAllLandingPagesOverviewQueryHookResult = ReturnType<typeof useGetAllLandingPagesOverviewQuery>;
export type GetAllLandingPagesOverviewLazyQueryHookResult = ReturnType<typeof useGetAllLandingPagesOverviewLazyQuery>;
export type GetAllLandingPagesOverviewSuspenseQueryHookResult = ReturnType<typeof useGetAllLandingPagesOverviewSuspenseQuery>;
export type GetAllLandingPagesOverviewQueryResult = Apollo.QueryResult<GetAllLandingPagesOverviewQuery, GetAllLandingPagesOverviewQueryVariables>;
export const GetAllBlogsSlugDocument = gql`
    query getAllBlogsSlug {
  posts {
    slug
  }
}
    `;

/**
 * __useGetAllBlogsSlugQuery__
 *
 * To run a query within a React component, call `useGetAllBlogsSlugQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAllBlogsSlugQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAllBlogsSlugQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetAllBlogsSlugQuery(baseOptions?: Apollo.QueryHookOptions<GetAllBlogsSlugQuery, GetAllBlogsSlugQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetAllBlogsSlugQuery, GetAllBlogsSlugQueryVariables>(GetAllBlogsSlugDocument, options);
      }
export function useGetAllBlogsSlugLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetAllBlogsSlugQuery, GetAllBlogsSlugQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetAllBlogsSlugQuery, GetAllBlogsSlugQueryVariables>(GetAllBlogsSlugDocument, options);
        }
export function useGetAllBlogsSlugSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<GetAllBlogsSlugQuery, GetAllBlogsSlugQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetAllBlogsSlugQuery, GetAllBlogsSlugQueryVariables>(GetAllBlogsSlugDocument, options);
        }
export type GetAllBlogsSlugQueryHookResult = ReturnType<typeof useGetAllBlogsSlugQuery>;
export type GetAllBlogsSlugLazyQueryHookResult = ReturnType<typeof useGetAllBlogsSlugLazyQuery>;
export type GetAllBlogsSlugSuspenseQueryHookResult = ReturnType<typeof useGetAllBlogsSlugSuspenseQuery>;
export type GetAllBlogsSlugQueryResult = Apollo.QueryResult<GetAllBlogsSlugQuery, GetAllBlogsSlugQueryVariables>;
export const GetAllBlogsDocument = gql`
    query getAllBlogs {
  posts {
    slug
    title
    tags {
      name
      slug
    }
    publishedAt
    content {
      html
    }
    coverImage {
      width
      url
      height
    }
  }
}
    `;

/**
 * __useGetAllBlogsQuery__
 *
 * To run a query within a React component, call `useGetAllBlogsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAllBlogsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAllBlogsQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetAllBlogsQuery(baseOptions?: Apollo.QueryHookOptions<GetAllBlogsQuery, GetAllBlogsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetAllBlogsQuery, GetAllBlogsQueryVariables>(GetAllBlogsDocument, options);
      }
export function useGetAllBlogsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetAllBlogsQuery, GetAllBlogsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetAllBlogsQuery, GetAllBlogsQueryVariables>(GetAllBlogsDocument, options);
        }
export function useGetAllBlogsSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<GetAllBlogsQuery, GetAllBlogsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetAllBlogsQuery, GetAllBlogsQueryVariables>(GetAllBlogsDocument, options);
        }
export type GetAllBlogsQueryHookResult = ReturnType<typeof useGetAllBlogsQuery>;
export type GetAllBlogsLazyQueryHookResult = ReturnType<typeof useGetAllBlogsLazyQuery>;
export type GetAllBlogsSuspenseQueryHookResult = ReturnType<typeof useGetAllBlogsSuspenseQuery>;
export type GetAllBlogsQueryResult = Apollo.QueryResult<GetAllBlogsQuery, GetAllBlogsQueryVariables>;
export const GetLandingPageDetailsDocument = gql`
    query GetLandingPageDetails($slug: String = "", $locales: [Locale!] = en) {
  newLandingPages(where: {slug: $slug}, locales: $locales) {
    slug
    heroTitle
    heroDescription
    heroSectionAsest {
      altText
      url
    }
    averageRating
    heroCtaButton1
    heroCtaButtonRedirectUrl
    heroCtaButton2
    howItsWorkHeadline
    relatedTemplatesSection(locales: $locales) {
      mainTitle
      mainDescription
      templatesInformation {
        locale
        id
        redirectionLink
        startingPrice
        title
        image {
          url
        }
      }
      leftCtaButton
      rightCtaButton
    }
    reviewsCounts
    publishedAt
    faqSection(locales: $locales) {
      faqDetails {
        id
        locale
        question
        description {
          html
        }
      }
      faqTitle
      locale
      id
    }
    categoryShowcase(locales: $locales) {
      description
      id
      title
      categoryDetails {
        backgroundImage {
          url
        }
        title
        description
        buttonTilte
        buttonRedirectLink
        id
        locale
      }
    }
    sensoriumUsps(locales: $locales) {
      locale
      mainTitle
      uspsDetail {
        id
        description
        title
      }
    }
    howItsWorkDetail {
      description {
        html
      }
      title
    }
    howItsWorkCta
    heroFeatureList {
      featuresPoint
      id
    }
  }
}
    `;

/**
 * __useGetLandingPageDetailsQuery__
 *
 * To run a query within a React component, call `useGetLandingPageDetailsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetLandingPageDetailsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetLandingPageDetailsQuery({
 *   variables: {
 *      slug: // value for 'slug'
 *      locales: // value for 'locales'
 *   },
 * });
 */
export function useGetLandingPageDetailsQuery(baseOptions?: Apollo.QueryHookOptions<GetLandingPageDetailsQuery, GetLandingPageDetailsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetLandingPageDetailsQuery, GetLandingPageDetailsQueryVariables>(GetLandingPageDetailsDocument, options);
      }
export function useGetLandingPageDetailsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetLandingPageDetailsQuery, GetLandingPageDetailsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetLandingPageDetailsQuery, GetLandingPageDetailsQueryVariables>(GetLandingPageDetailsDocument, options);
        }
export function useGetLandingPageDetailsSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<GetLandingPageDetailsQuery, GetLandingPageDetailsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetLandingPageDetailsQuery, GetLandingPageDetailsQueryVariables>(GetLandingPageDetailsDocument, options);
        }
export type GetLandingPageDetailsQueryHookResult = ReturnType<typeof useGetLandingPageDetailsQuery>;
export type GetLandingPageDetailsLazyQueryHookResult = ReturnType<typeof useGetLandingPageDetailsLazyQuery>;
export type GetLandingPageDetailsSuspenseQueryHookResult = ReturnType<typeof useGetLandingPageDetailsSuspenseQuery>;
export type GetLandingPageDetailsQueryResult = Apollo.QueryResult<GetLandingPageDetailsQuery, GetLandingPageDetailsQueryVariables>;
export const GetAllLandingPagesDocument = gql`
    query GetAllLandingPages {
  landingPages {
    slug
    subtitle
    subHeading
    heading
    subPoints {
      ... on LandingPagePoint {
        subtitle
        title
        icon {
          url
          width
          height
        }
      }
    }
    components {
      ... on CollectionShowcase {
        id
        subtitle
        title
        underCollectionButton
        underCollectionButtonUrl
        underCollectionTitle
        cards: collections {
          ... on Collection {
            id
            buttonUrl
            buttonText
            title
            topic
            subtitle
            image {
              width
              url
              height
            }
          }
        }
      }
      ... on ImageWithText {
        id
        image {
          height
          width
          url
        }
        title
      }
      ... on LandingPageSlidingImageGallery {
        id
        images {
          height
          url
          width
        }
        title
        subtitle
        underImageSubtitle
        underImageTitle
      }
      ... on SideBySideCompare {
        id
        title
        subtitle
        collections {
          ... on Collection {
            id
            buttonUrl
            buttonText
            title
            topic
            subtitle
            image {
              width
              url
              height
            }
          }
        }
      }
      ... on TwoFoldmageGallery {
        id
        title
        subtitle
        buttonUrl
        buttonText
        images {
          width
          url
          height
        }
      }
    }
  }
}
    `;

/**
 * __useGetAllLandingPagesQuery__
 *
 * To run a query within a React component, call `useGetAllLandingPagesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAllLandingPagesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAllLandingPagesQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetAllLandingPagesQuery(baseOptions?: Apollo.QueryHookOptions<GetAllLandingPagesQuery, GetAllLandingPagesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetAllLandingPagesQuery, GetAllLandingPagesQueryVariables>(GetAllLandingPagesDocument, options);
      }
export function useGetAllLandingPagesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetAllLandingPagesQuery, GetAllLandingPagesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetAllLandingPagesQuery, GetAllLandingPagesQueryVariables>(GetAllLandingPagesDocument, options);
        }
export function useGetAllLandingPagesSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<GetAllLandingPagesQuery, GetAllLandingPagesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetAllLandingPagesQuery, GetAllLandingPagesQueryVariables>(GetAllLandingPagesDocument, options);
        }
export type GetAllLandingPagesQueryHookResult = ReturnType<typeof useGetAllLandingPagesQuery>;
export type GetAllLandingPagesLazyQueryHookResult = ReturnType<typeof useGetAllLandingPagesLazyQuery>;
export type GetAllLandingPagesSuspenseQueryHookResult = ReturnType<typeof useGetAllLandingPagesSuspenseQuery>;
export type GetAllLandingPagesQueryResult = Apollo.QueryResult<GetAllLandingPagesQuery, GetAllLandingPagesQueryVariables>;
export const GetAllReviewsDocument = gql`
    query GetAllReviews($locale: Locale!, $last: Int) {
  reviews(locales: [$locale], last: $last) {
    reviews {
      ... on Testimonial {
        id
        description {
          markdown
        }
        title
        ratingFrom5
      }
    }
  }
}
    `;

/**
 * __useGetAllReviewsQuery__
 *
 * To run a query within a React component, call `useGetAllReviewsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAllReviewsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAllReviewsQuery({
 *   variables: {
 *      locale: // value for 'locale'
 *      last: // value for 'last'
 *   },
 * });
 */
export function useGetAllReviewsQuery(baseOptions: Apollo.QueryHookOptions<GetAllReviewsQuery, GetAllReviewsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetAllReviewsQuery, GetAllReviewsQueryVariables>(GetAllReviewsDocument, options);
      }
export function useGetAllReviewsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetAllReviewsQuery, GetAllReviewsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetAllReviewsQuery, GetAllReviewsQueryVariables>(GetAllReviewsDocument, options);
        }
export function useGetAllReviewsSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<GetAllReviewsQuery, GetAllReviewsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetAllReviewsQuery, GetAllReviewsQueryVariables>(GetAllReviewsDocument, options);
        }
export type GetAllReviewsQueryHookResult = ReturnType<typeof useGetAllReviewsQuery>;
export type GetAllReviewsLazyQueryHookResult = ReturnType<typeof useGetAllReviewsLazyQuery>;
export type GetAllReviewsSuspenseQueryHookResult = ReturnType<typeof useGetAllReviewsSuspenseQuery>;
export type GetAllReviewsQueryResult = Apollo.QueryResult<GetAllReviewsQuery, GetAllReviewsQueryVariables>;
export const GetSingleBlogDocument = gql`
    query GetSingleBlog($slug: String) {
  post(where: {slug: $slug}) {
    slug
    title
    publishedAt
    content {
      html
    }
    coverImage {
      width
      url
      height
    }
    tags {
      name
      slug
    }
    excerpt
    seoOverride {
      description
      title
    }
  }
}
    `;

/**
 * __useGetSingleBlogQuery__
 *
 * To run a query within a React component, call `useGetSingleBlogQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetSingleBlogQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetSingleBlogQuery({
 *   variables: {
 *      slug: // value for 'slug'
 *   },
 * });
 */
export function useGetSingleBlogQuery(baseOptions?: Apollo.QueryHookOptions<GetSingleBlogQuery, GetSingleBlogQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetSingleBlogQuery, GetSingleBlogQueryVariables>(GetSingleBlogDocument, options);
      }
export function useGetSingleBlogLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetSingleBlogQuery, GetSingleBlogQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetSingleBlogQuery, GetSingleBlogQueryVariables>(GetSingleBlogDocument, options);
        }
export function useGetSingleBlogSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<GetSingleBlogQuery, GetSingleBlogQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetSingleBlogQuery, GetSingleBlogQueryVariables>(GetSingleBlogDocument, options);
        }
export type GetSingleBlogQueryHookResult = ReturnType<typeof useGetSingleBlogQuery>;
export type GetSingleBlogLazyQueryHookResult = ReturnType<typeof useGetSingleBlogLazyQuery>;
export type GetSingleBlogSuspenseQueryHookResult = ReturnType<typeof useGetSingleBlogSuspenseQuery>;
export type GetSingleBlogQueryResult = Apollo.QueryResult<GetSingleBlogQuery, GetSingleBlogQueryVariables>;
export const GetAllTagsDocument = gql`
    query GetAllTags {
  tags {
    name
    slug
  }
}
    `;

/**
 * __useGetAllTagsQuery__
 *
 * To run a query within a React component, call `useGetAllTagsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAllTagsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAllTagsQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetAllTagsQuery(baseOptions?: Apollo.QueryHookOptions<GetAllTagsQuery, GetAllTagsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetAllTagsQuery, GetAllTagsQueryVariables>(GetAllTagsDocument, options);
      }
export function useGetAllTagsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetAllTagsQuery, GetAllTagsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetAllTagsQuery, GetAllTagsQueryVariables>(GetAllTagsDocument, options);
        }
export function useGetAllTagsSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<GetAllTagsQuery, GetAllTagsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetAllTagsQuery, GetAllTagsQueryVariables>(GetAllTagsDocument, options);
        }
export type GetAllTagsQueryHookResult = ReturnType<typeof useGetAllTagsQuery>;
export type GetAllTagsLazyQueryHookResult = ReturnType<typeof useGetAllTagsLazyQuery>;
export type GetAllTagsSuspenseQueryHookResult = ReturnType<typeof useGetAllTagsSuspenseQuery>;
export type GetAllTagsQueryResult = Apollo.QueryResult<GetAllTagsQuery, GetAllTagsQueryVariables>;
export const GetAllPostsForTagDocument = gql`
    query GetAllPostsForTag($slug: String) {
  tag(where: {slug: $slug}) {
    posts {
      slug
      title
      tags {
        name
        slug
      }
      publishedAt
      content {
        html
      }
      coverImage {
        width
        url
        height
      }
    }
  }
}
    `;

/**
 * __useGetAllPostsForTagQuery__
 *
 * To run a query within a React component, call `useGetAllPostsForTagQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAllPostsForTagQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAllPostsForTagQuery({
 *   variables: {
 *      slug: // value for 'slug'
 *   },
 * });
 */
export function useGetAllPostsForTagQuery(baseOptions?: Apollo.QueryHookOptions<GetAllPostsForTagQuery, GetAllPostsForTagQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetAllPostsForTagQuery, GetAllPostsForTagQueryVariables>(GetAllPostsForTagDocument, options);
      }
export function useGetAllPostsForTagLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetAllPostsForTagQuery, GetAllPostsForTagQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetAllPostsForTagQuery, GetAllPostsForTagQueryVariables>(GetAllPostsForTagDocument, options);
        }
export function useGetAllPostsForTagSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<GetAllPostsForTagQuery, GetAllPostsForTagQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetAllPostsForTagQuery, GetAllPostsForTagQueryVariables>(GetAllPostsForTagDocument, options);
        }
export type GetAllPostsForTagQueryHookResult = ReturnType<typeof useGetAllPostsForTagQuery>;
export type GetAllPostsForTagLazyQueryHookResult = ReturnType<typeof useGetAllPostsForTagLazyQuery>;
export type GetAllPostsForTagSuspenseQueryHookResult = ReturnType<typeof useGetAllPostsForTagSuspenseQuery>;
export type GetAllPostsForTagQueryResult = Apollo.QueryResult<GetAllPostsForTagQuery, GetAllPostsForTagQueryVariables>;