declare namespace HomeModuleCssNamespace {
  export interface IHomeModuleCss {
    Banner: string;
    Main: string;
    Text: string;
  }
}

declare const HomeModuleCssModule: HomeModuleCssNamespace.IHomeModuleCss & {
  /** WARNING: Only available when `css-loader` is used without `style-loader` or `mini-css-extract-plugin` */
  locals: HomeModuleCssNamespace.IHomeModuleCss;
};

export = HomeModuleCssModule;
