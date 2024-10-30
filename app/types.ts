interface BaseContentType {
  id: number;
  title: string;
  image: string;
  alt: string;
  rating?: number;
  reviews?: number;
}

export interface ClinicDataTypes extends BaseContentType {
  type?: string;
}

export interface DoctorDataTypes extends BaseContentType {
  fullName: string;
  treatment: string;
}

export interface BlogPostDataTypes extends BaseContentType {
  date: string;
}

interface BaseFormElementProps {
  value: any;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  label: string;
  className?: string;
}

export interface InputProps extends BaseFormElementProps {
  placeholder?: string;
  type?: "text" | "email" | "password" | "tel";
  pattern?: string;
  inputMode?:
    | "text"
    | "email"
    | "search"
    | "tel"
    | "url"
    | "none"
    | "numeric"
    | "decimal";
}

export interface CheckboxProps extends BaseFormElementProps {
  checked: boolean;
}

export interface FacebookLoginResponse {
  name: string;
  email: string;
  picture?: {
    data: {
      height: number;
      is_silhouette: boolean;
      url: string;
      width: number;
    };
  } | null;
  id: string;
  userID: string;
  expiresIn: number;
  accessToken: string;
  signedRequest: string;
  graphDomain: string;
  data_access_expiration_time: number;
  status?: string;
}

export interface ButtonProps {
  label: string | JSX.Element;
  icon?: JSX.Element;
  variation: string;
}

export interface SocialButtonProps extends ButtonProps {
  platform: "Google" | "Facebook" | "X";
  onClick: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}