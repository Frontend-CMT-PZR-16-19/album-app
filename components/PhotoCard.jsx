import Image from "next/image";

export const PhotoCard = ({ photo }) => {
  return (
    <div className="relative w-80 h-80">
      <Image src={photo.url} alt="" fill className="object-cover" />
    </div>
  );
};
