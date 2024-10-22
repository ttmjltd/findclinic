import { Clinic } from "../apiTypes";

const API_KEY: string | undefined = process.env.NEXT_PUBLIC_STRAPI_API_KEY;
const BASE_URL: string = "https://panel.findclinics.co.uk/api";
export const IMAGE_URL: string = "https://panel.findclinics.co.uk";

const fetchData = async (
  endpoint: string,
  options: RequestInit = {}
): Promise<any> => {
  const defaultOptions: RequestInit = {
    cache: "no-store",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${API_KEY}`,
    },
  };

  const finalOptions: RequestInit = { ...defaultOptions, ...options };
  const url: string = `${BASE_URL}${endpoint}`;

  try {
    const res = await fetch(url, finalOptions);
    if (!res.ok) {
      throw new Error(`Error: ${res.status} ${res.statusText}`);
    }
    const data = await res.json();
    return data;
  } catch (error) {
    console.error("Fetch error:", error);
    throw error;
  }
};

const getClinics = async (): Promise<Clinic[]> => {
  const data = await fetchData(`/clinics?populate=*`);
  return data.data;
};

const getAClinic = async (id: number): Promise<Clinic[]> => {
  const data = await fetchData(`/clinics/${id}?populate=*`);
  return data;
};

const getClinicsByName = async (clinicName: string): Promise<Clinic[]> => {
  const data = await fetchData(
    `/clinics?populate=*&filters[ClinicName][$eq]=${clinicName}`
  );

  return data.data;
};

export { getClinics, getAClinic, getClinicsByName };
