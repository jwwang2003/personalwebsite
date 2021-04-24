declare namespace BlogModuleCssNamespace {
  export interface IBlogModuleCss {
    Bar: string;
    Main: string;
  }
}

declare const BlogModuleCssModule: BlogModuleCssNamespace.IBlogModuleCss & {
  /** WARNING: Only available when `css-loader` is used without `style-loader` or `mini-css-extract-plugin` */
  locals: BlogModuleCssNamespace.IBlogModuleCss;
};

export = BlogModuleCssModule;
