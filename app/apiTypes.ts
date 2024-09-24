// clinicTypes.ts

export interface ClinicAttributes {
    ClinicName: string;
    ClinicCountry: string;
    ClinicCity: string;
    ClinicDefination: string[];
    Treatments: string[];
    Services: string[];
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
    VideoEmbed: string | null;
    MapEmbedCode: string | null;
    ClinicImages: object;
    ClinicMainImage: object;
  }
  
  export interface Clinic {
    id: number;
    params: { [key: string]: string };
    attributes: ClinicAttributes;
  }
  
  export interface ApiResponse {
    data: Clinic[];
  }
  