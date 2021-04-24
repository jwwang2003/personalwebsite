declare namespace FooterModuleCssNamespace {
  export interface IFooterModuleCss {
    Contact: string;
    ContactItem: string;
    Content: string;
    End: string;
    Main: string;
    SocialMedia: string;
  }
}

declare const FooterModuleCssModule: FooterModuleCssNamespace.IFooterModuleCss & {
  /** WARNING: Only available when `css-loader` is used without `style-loader` or `mini-css-extract-plugin` */
  locals: FooterModuleCssNamespace.IFooterModuleCss;
};

export = FooterModuleCssModule;
