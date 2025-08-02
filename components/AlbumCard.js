import Link from "next/link";

export const AlbumCard = ({ album }) => {
  return (
    <Link
      href={`/${album.userId}/albums/${album.id}`}
      className="p-4 bg-blue-200 text-xl capitalize rounded-lg"
    >
      {album.title}
    </Link>
  );
};
