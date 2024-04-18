"use client";
import { useEffect, useState } from "react";

const HomePage = () => {
  const [data, setData] = useState<any>(null);

  useEffect(() => {
    // Llamar a tu API
    callApi();
  }, []);

  const callApi = async () => {
    const res = await fetch(`/api`, {
      method: "GET",
    });
    const data = await res.json();
    console.log(data);
  };

  return (
    <div>
      <h1>Página</h1>
    </div>
  );
};
export default HomePage;
