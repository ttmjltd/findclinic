declare module "react-twitter-auth" {
  import * as React from "react";

  interface TwitterLoginProps {
    loginUrl: string;
    onFailure: (response: any) => void;
    onSuccess: (response: any) => void;
    requestTokenUrl: string;
    showIcon?: boolean;
    forceLogin?: boolean;
    tag?: string | React.ComponentType<any>;
  }

  class TwitterLogin extends React.Component<TwitterLoginProps, any> {}

  export default TwitterLogin;
}
