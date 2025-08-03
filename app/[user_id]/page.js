"use client";

import Link from "next/link";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function UserProfile() {
  const { user_id } = useParams();
  const [data, setData] = useState();

  useEffect(() => {
    async function getData() {
      try {
        const response = await fetch(
          `https://jsonplaceholder.typicode.com/users/${user_id}`
        );
        const userData = await response.json();
        setData(userData);
      } catch (error) {
        console.log(error);
      }
    }
    getData();
  }, [user_id]);

  if (!data?.id) {
    return (
      <div className="flex justify-center text-6xl">
        Kullanıcı bilgileri yüklenemedi.
      </div>
    );
  }

  return (
    <div className="flex flex-col container mx-auto p-8 bg-white rounded-xl shadow-md font-sans">
      <div className="flex items-center mb-4">
        <div className="w-16 h-16 rounded-full bg-blue-600 flex items-center justify-center text-white text-3xl font-bold mr-4 select-none">
          {data.name?.charAt(0)}
        </div>
        <div>
          <h2 className="text-2xl font-bold text-gray-800 mb-1">{data.name}</h2>
          <p className="text-gray-500">@{data.username}</p>
        </div>
      </div>
      <div className="mb-4">
        <strong>Email:</strong>{" "}
        <a href={`mailto:${data.email}`} className="text-blue-600 underline">
          {data.email}
        </a>
      </div>
      <div className="mb-4">
        <strong>Telefon:</strong>{" "}
        <a href={`tel:${data.phone}`} className="text-blue-600 underline">
          {data.phone}
        </a>
      </div>
      <div className="mb-4">
        <strong>Website:</strong>{" "}
        <a
          href={`http://${data.website}`}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 underline"
        >
          {data.website}
        </a>
      </div>
      <div className="mb-4">
        <strong>Adres:</strong>
        <div className="text-gray-700 mt-1">
          {data.address.street}, {data.address.suite}
          <br />
          {data.address.city}, {data.address.zipcode}
        </div>
      </div>
      <div className="mb-4">
        <strong>Şirket:</strong>
        <div className="text-gray-700 mt-1">
          {data.company.name}
          <br />
          <span className="italic text-gray-400">
            {data.company.catchPhrase}
          </span>
        </div>
      </div>
      <Link
        href={`/${user_id}/albums`}
        className="my-8 px-4 py-2 bg-blue-600 text-white font-semibold text-center rounded hover:bg-blue-700 transition-colors w-fit"
      >
        Albümleri Görüntüle
      </Link>
      <div className="mb-4">
        <strong>Harita:</strong>
        <div
          className="mt-2 rounded overflow-hidden border border-gray-200"
          style={{ width: "100%", height: "300px" }}
        >
          <iframe
            title="Kullanıcı Konumu"
            width="100%"
            height="300"
            style={{ border: 0 }}
            src={`https://www.openstreetmap.org/export/embed.html?bbox=${
              parseFloat(data.address.geo.lng) - 0.01
            }%2C${parseFloat(data.address.geo.lat) - 0.01}%2C${
              parseFloat(data.address.geo.lng) + 0.01
            }%2C${
              parseFloat(data.address.geo.lat) + 0.01
            }&layer=mapnik&marker=${data.address.geo.lat}%2C${
              data.address.geo.lng
            }`}
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </div>
  );
}
