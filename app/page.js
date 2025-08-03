"use client";

import { UserCard } from "@/components/UserCard";
import { useEffect, useState } from "react";

export default function Home() {
  const [data, setData] = useState();

  useEffect(() => {
    async function getData() {
      try {
        const response = await fetch("https://jsonplaceholder.typicode.com/users");
        const userData = await response.json();
        setData(userData);
      } catch (error) {
        console.log(error);
      }
    }
    getData();
  }, []);

  return (
    <div className="flex flex-col container h-screen mx-auto space-y-4 mt-8">
      {data ? (
        data.map((user) => (
          <UserCard key={user.id} user={user} />
        ))
      ) : null}
    </div>
  );
}
