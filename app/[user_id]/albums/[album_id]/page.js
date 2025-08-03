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

