export interface ClinicDataTypes {
  id: number;
  type: string;
  image: string;
  alt: string;
  title: string;
}

export interface ButtonProps {
  label: string;
  icon?: JSX.Element;
  variation: string;
}

export interface DropdownProps {
  placeholder: string;
}

export interface InputProps {
  value: any;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  label: string;
  className?: string;
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

export interface CheckboxProps {
  value: any;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  label: string;
  checked: boolean;
  className?: string;
}

export interface PatientFormState {
  fullName: string;
  email: string;
  phone: string;
  treatment: string;
}

export interface FacebookPictureData {
  height: number;
  is_silhouette: boolean;
  url: string;
  width: number;
}

export interface FacebookPicture {
  data: FacebookPictureData;
}

export interface FacebookLoginResponse {
  name: string;
  email: string;
  picture?: FacebookPicture | null;
  id: string;
  userID: string;
  expiresIn: number;
  accessToken: string;
  signedRequest: string;
  graphDomain: string;
  data_access_expiration_time: number;
  status?: string;
}

export interface ClinicDetailsTypes {
  params: any;
}

export interface BreadCrumTypes {
  clinicName: string;
}

export interface ProfileInfoProps {
  onSubmit: (values: ProfileInfoValues) => void;
}

export interface ProfileInfoValues {
  name: string;
  email: string;
  password: string;
  phoneCode: string;
  phoneNumber: string;
  address: string;
}

export interface ClinicService {
  name: string;
  icon: JSX.Element;
}

export interface ClinicProps {
  name: string;
  rating: number;
  reviews: number;
  location: string;
  treatments: string[];
  services: ClinicService[];
}

export interface StarProps {
  color: string;
}

export interface MapMarkerFCProps {
  className?: string;
}

export interface ToggleSwitchProps {
  className?: string;
  checked: boolean;
  onChange: () => void;
}
export interface SocialButtonProps {
  platform: "Google" | "Facebook" | "X";
  onClick: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}
export interface Comment {
  title: string;
  text: string;
  name: string;
  image: string;
  reverse?: boolean;
}
export interface FooterLink {
  label: string;
  href: string;
}
export interface DashboardLocationProps {
  mapLink: string;
}

export interface Service {
  id: number;
  name: string;
  icon: JSX.Element;
  alt: string;
}

export interface PriceItemProps {
  service: string;
  minPrice: string;
  maxPrice: string;
}
