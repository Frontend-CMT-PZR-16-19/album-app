import { PhotoCard } from "@/components/PhotoCard";

export default async function AlbumPhotos() {
  try {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/photos?albumId=1"
    );

    var data = await response.json();
  } catch (error) {
    console.log(error);
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 container mx-auto p-8">
      {data.map((photo) => (
        <PhotoCard photo={photo} key={photo.id} />
      ))}
    </div>
  );
}
