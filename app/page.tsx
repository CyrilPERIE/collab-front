"use client";

import { useEffect, useState } from "react";
import { get } from "./service/api";

export default function Home() {

  const [data, setData] = useState(null);

  async function fetchHelloWorld() {
    try {
      const result = await get("/");
      console.log(result)
      setData(result);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }

  useEffect(() => {
    fetchHelloWorld();
  }, []);

  return (
    <div>
      {data ? (
        <div>
          <h1>{data}</h1>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}
