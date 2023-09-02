import React from "react";
import PersonDetails from "./components/PersonDetails";
import { fetcher } from "@/utils/fetcher";
import { Metadata } from "next";

export async function generateMetadata({
  params,
}: {
  params: { actorId: string };
}): Promise<Metadata> {
  const person = await fetcher(`person/${params.actorId}`);

  return {
    title: `Person | ${person.name}`,
  };
}

const Page = ({ params }: { params: { actorId: string } }) => {
  return <PersonDetails person_id={params.actorId} />;
};

export default Page;
