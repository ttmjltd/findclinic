import { only } from "node:test";

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
  ClinicImages: ImageData[];
  ClinicMainImage: ImageData;
}

export interface ImageData {
  data: {
    id: number;
    attributes: {
      url: string;
      alternativeText?: string;
      caption?: string;
    };
  };
}

export interface Clinic {
  id: number;
  attributes: ClinicAttributes;
}

export interface ApiResponseWrapper {
  data: Clinic[];
}
