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
  }
  export interface DropdownProps {
    placeholder:string
  }
  export interface InputProps {
    value:any,
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void,
    label:string,
    name:string

  }
  export interface CheckboxProps {
    value:any,
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void,
    label:string,
    checked:boolean,
    name:string

  }