import { Header } from "@/components/header";
import React from "react";

export default async function ProfilePage({ params }: ParamsWithSearch) {
  const { id } = await params;
  return (
    <div className="wrapper page">
      <Header
        title="User name"
        subHeader="email@gmail.com"
        userImg="/assets/images/dummy.jpg"
      />

      <h1 className="text-2xl font-karla"> USER ID: {id}</h1>
    </div>
  );
}
