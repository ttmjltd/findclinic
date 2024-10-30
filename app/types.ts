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

export interface ButtonProps {
  label: string | JSX.Element;
  icon?: JSX.Element;
  variation: string;
}

export interface SocialButtonProps extends ButtonProps {
  platform: "Google" | "Facebook" | "X";
  onClick: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
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

export interface DropdownProps {
  placeholder: string;
}

export interface PatientFormState {
  fullName: string;
  email: string;
  phone: string;
  treatment: string;
}

export interface ClinicDetailsTypes {
  params: any;
}

export interface BreadCrumTypes {
  clinicName: string;
}

export interface ProfileInfoValues {
  name: string;
  email: string;
  password: string;
  phoneCode: string;
  phoneNumber: string;
  address: string;
}

export interface ProfileInfoProps {
  onSubmit: (values: ProfileInfoValues) => void;
}

export interface ClinicService {
  name: string;
  icon: JSX.Element;
}

export interface ClinicProps {
  name: string;
  rating: string;
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

export interface DescriptionType {
  description: {
    children: { text: string | { children?: { text: string }[] } }[];
  }[];
}

export interface AccordionItemProps {
  title: string;
  children: React.ReactNode;
  isOpen: boolean;
  onToggle: () => void;
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
