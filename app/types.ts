export interface ClinicData {
  id: number;
  type: string;
  image: string;
  alt: string;
  title: string;
}
export interface ButtonProps {
  label: string;
  icon?: any;
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
  inputMode?: "text" | "email" | "search" | "tel" | "url" | "none" | "numeric" | "decimal";
}
export interface CheckboxProps {
  value: any;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  label: string;
  checked: boolean;
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

export interface Service {
  name: string;
  icon: JSX.Element;
}

export interface Clinic {
  name: string;
  rating: number;
  reviews: number;
  location: string;
  treatments: string[];
  services: Service[];
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

export interface ClinicDataTypes {
  id: number;
  type: string;
  image: string;
  alt: string;
  title: string;
}