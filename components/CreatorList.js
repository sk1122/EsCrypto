import Head from "next/head";
import Card from "./Card";

export default function CreatorList() {
  return (
    <div className="h-full w-full text-black flex flex-wrap -mx-px overflow-hidden sm:-mx-1 md:-mx-1 lg:-mx-2 xl:-mx-2 mt-16">
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
    </div>
  );
}
