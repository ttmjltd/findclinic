import React from "react";

interface ClinicVideoProps {
  videoData: string; // Expecting a valid JSON string
}

const ClinicVideo: React.FC<ClinicVideoProps> = ({ videoData }) => {
  if (!videoData) {
    return null;
  }
  const parsedData = JSON.parse(videoData);

  // URL'yi işleyen fonksiyon, hem youtu.be hem de youtube.com/watch?v=... formatlarını destekler
  const getEmbedUrl = (url: string): string => {
    // Eğer URL 'youtu.be' formatındaysa
    if (url.includes("youtu.be")) {
      return url.replace("youtu.be/", "youtube.com/embed/").split("?")[0];
    }
    // Eğer URL 'youtube.com/watch?v=' formatındaysa
    else if (url.includes("youtube.com/watch")) {
      const videoId = url.split("v=")[1].split("&")[0]; // video ID'sini ayırıyoruz
      return `https://www.youtube.com/embed/${videoId}`; // embed formatına dönüştürüyoruz
    }
    return url; // Herhangi başka bir format varsa orijinal URL'yi döndürüyoruz
  };

  const embedUrl = getEmbedUrl(parsedData.url);

  return (
    <div className="mt-6 md:mt-12 w-full">
      <div className="w-full max-w-[672px]">
        <h3 className="text-secondary font-bold text-lg md:text-xl mb-3">
          {parsedData.title}
        </h3>
        <div className="relative w-full" style={{ paddingBottom: "56.25%" }}>
          {" "}
          {/* Aspect Ratio 16:9 */}
          <iframe
            src={embedUrl} // Dinamik embed URL
            title={parsedData.title} // Video başlığı
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
            className="absolute inset-0 w-full h-full border-0"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default ClinicVideo;
