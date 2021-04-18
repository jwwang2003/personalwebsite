declare namespace AppModuleCssNamespace {
  export interface IAppModuleCss {
    Content: string;
    Main: string;
    Nav: string;
  }
}

declare const AppModuleCssModule: AppModuleCssNamespace.IAppModuleCss & {
  /** WARNING: Only available when `css-loader` is used without `style-loader` or `mini-css-extract-plugin` */
  locals: AppModuleCssNamespace.IAppModuleCss;
};

export = AppModuleCssModule;
