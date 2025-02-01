import React from "react";

interface IBannerProps {
  imageUrl: string
  title: string
  subtitle: string
  buttonUrl?: string
  buttonText?: string
  containerStyles?: string
  textStyles?: string
}

const Banner: React.FC<IBannerProps> = ({
  imageUrl,
  title,
  subtitle,
  buttonUrl,
  buttonText = "Ver mais",
  containerStyles = "",
  textStyles = "",
}) => {
  return (
    <div
      className={`relative w-full h-[75vh] bg-cover bg-center ${containerStyles}`}
      style={{ backgroundImage: `url(${imageUrl})` }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-25 flex items-center justify-start px-6 md:px-16 text-white">
        <div className={`space-y-4 max-w-lg ${textStyles}`}>
          <h1 className="text-4xl md:text-6xl font-bold leading-tight">{title}</h1>
          <h2 className="text-lg md:text-xl font-light">{subtitle}</h2>
          {buttonUrl && (
            <a href={buttonUrl} target="_blank" rel="noopener noreferrer">
              {buttonText}
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default Banner;
