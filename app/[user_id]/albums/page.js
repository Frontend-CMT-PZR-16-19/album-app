import { AlbumCard } from "@/components/AlbumCard";

export default async function UserAlbums({ params }) {
  const { user_id } = await params;

  try {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/albums?userId=${user_id}`
    );
    var data = await response.json();
  } catch (error) {
    console.log(error);
  }

  return (
    // Display user albums as gallery view
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 container mx-auto p-8">
      {data.map((album) => (
        <AlbumCard key={album.id} album={album} />
      ))}
    </div>
  );
}
