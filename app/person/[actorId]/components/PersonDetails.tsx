"use client";

import PersonCarousel from "@/components/carousel/PersonCarousel";
import PersonDetailsSkeleton from "@/components/skeleton/PersonDetailsSkeleton";
import { usePersonCredits, usePersonDetails } from "@/hooks/usePerson";

import Image from "next/image";
import React from "react";

const PersonDetails = ({ person_id }: { person_id: string }) => {
  const { person, loadingPerson, errorPerson } = usePersonDetails(person_id);
  const { personCredits, loadingPersonCredits, errorPersonCredits } =
    usePersonCredits(person_id);

  if (loadingPerson) return <PersonDetailsSkeleton />;
  if (errorPerson) return;

  const birth = new Date(person.birthday).getFullYear();
  const now = new Date().getFullYear();

  const age = now - birth;

  const type = person?.known_for_department === "Acting" ? "person" : "movie";

  return (
    <div>
      <div className="px-8 h-full">
        <div className="flex flex-col md:flex-row gap-y-16 md:gap-x-16 md:py-16 w-full h-full">
          <div className="overflow-hidden rounded-lg w-full md:w-[30%] h-full">
            <Image
              src={`https://image.tmdb.org/t/p/original${person.profile_path}`}
              alt=""
              className="w-full h-full"
              width={500}
              height={500}
            />
          </div>
          <div className="flex flex-col gap-y-4 w-full">
            <h1 className="text-4xl font-semibold">{person.name}</h1>
            <div>
              <h2 className="font-semibold">Known For</h2>
              <p className="text-sm">{person.known_for_department}</p>
            </div>
            <div>
              <h2 className="font-semibold">Known For</h2>
              <p className="text-sm">
                {person.gender === 2
                  ? "male"
                  : person.gender === 1
                  ? "female"
                  : "other"}
              </p>
            </div>
            <div>
              <h2 className="font-semibold">Place of Birth</h2>
              <p className="text-sm">{person.place_of_birth}</p>
            </div>
            <div>
              <h2 className="font-semibold">Birthday</h2>
              <p className="text-sm">
                {person.birthday} ({age} years old)
              </p>
            </div>
            <div>
              <h2 className="font-semibold">Biography</h2>
              <p className="text-sm">{person.biography}</p>
            </div>
          </div>
        </div>
      </div>
      <PersonCarousel
        data={personCredits}
        isLoading={loadingPersonCredits}
        isError={errorPersonCredits}
        title="Known For"
        type={type}
      />
    </div>
  );
};

export default PersonDetails;
