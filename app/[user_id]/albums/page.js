"use client";

import { AlbumCard } from "@/components/AlbumCard";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function UserAlbums() {
  const { user_id } = useParams();
  const [data, setData] = useState();

  useEffect(() => {
    async function getData() {
      try {
        const response = await fetch(
          `https://jsonplaceholder.typicode.com/albums?userId=${user_id}`
        );
        const albumData = await response.json();
        setData(albumData);
      } catch (error) {
        console.log(error);
      }
    }
    getData();
  }, [user_id]);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 container mx-auto p-8">
      {data ? (
        data.map((album) => (
          <AlbumCard key={album.id} album={album} />
        ))
      ) : null}
    </div>
  );
}
