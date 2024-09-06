export interface ClinicDataTypes {
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
    placeholder:string
  }
  export interface InputProps {
    value:any,
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void,
    label:string,
   
  }

  export interface CheckboxProps {
    value:any,
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void,
    label:string,
    checked:boolean,
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
  clinicName: string
  
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


export interface Comment {
  title: string;
  text: string;
  name: string;
  image: string;
  reverse?: boolean;

export interface FooterLink {
  label: string;
  href: string;
}
export interface Comment {
  title: string;
  text: string;
  name: string;
  image: string;
  reverse?: boolean;
}