import { Clinic } from "../apiTypes"; // Arayüzü buradan import edin

// API_KEY'nin string olacağını belirtelim
const API_KEY: string | undefined = process.env.NEXT_PUBLIC_STRAPI_API_KEY;

// BASE_URL sabitinin tipini string olarak tanımlıyoruz
const BASE_URL: string = "https://panel.findclinics.co.uk/api";

// fetchData fonksiyonu için parametre ve dönüş tiplerini belirleyelim
const fetchData = async (endpoint: string, options: RequestInit = {}): Promise<any> => {
  // Default options için tip tanımlamamız gerek yok, çünkü TypeScript bunu otomatik olarak çıkarır
  const defaultOptions: RequestInit = {
    cache: "no-store",
    headers: {
      "Content-Type": "application/json",
      'Referrer-Policy': 'no-referrer-when-downgrade',
      Authorization: `Bearer ${API_KEY}`,
    },
  };

  // Son seçenekler default ile gelen ve kullanıcı tarafından geçilenleri birleştiriyoruz
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

// getCategories fonksiyonunun dönüş tipini tanımlıyoruz
const getClinics = async (): Promise<Clinic[]> => {
  const data = await fetchData(`/clinics?populate=*`);
  return data;
  
};

const getAClinic = async (id: number): Promise<Clinic[]> => {
    const data = await fetchData(`/clinics/${id}?populate=*`);
    return data;
  };

  const getClinicsByName = async (clinicName: string): Promise<Clinic[]> => {
    const data = await fetchData(`/clinics?populate=*&filters[ClinicName][$eq]=${clinicName}`);
    return data.data;
  };
  
// Fonksiyonları export ediyoruz
export {
  getClinics,
  getAClinic,
  getClinicsByName
};
