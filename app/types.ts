export interface ClinicData {
    id: number;
    type: string;
    image: string;
    alt: string;
    title: string;
  }
  export interface ButtonProps {
    label: string;
    icon: any;
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