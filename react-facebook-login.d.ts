declare module 'react-facebook-login' {
  import * as React from 'react';

  export interface ReactFacebookLoginInfo {
    id: string;
    accessToken: string;
    name?: string;
    email?: string;
    picture?: {
      data: {
        url: string;
      };
    } | null;
    status?: string;
  }

  export interface ReactFacebookLoginProps {
    appId: string;
    callback(userInfo: ReactFacebookLoginInfo): void;
    fields?: string;
    scope?: string;
    cssClass?: string;
    icon?: string;
    textButton?: string;
    autoLoad?: boolean;
    isMobile?: boolean;
    size?: 'small' | 'medium' | 'metro';
    buttonStyle?: React.CSSProperties;
    containerStyle?: React.CSSProperties;
  }

  export default class ReactFacebookLogin extends React.Component<ReactFacebookLoginProps> {}
}
