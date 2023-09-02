import SeasonList from "@/components/SeasonList";
import { fetcher } from "@/utils/fetcher";
import { Metadata } from "next";
import React from "react";

export const generateMetadata = async ({ params }: { params: { slug: [] } }): Promise<Metadata> => {
  const ids = params.slug.map((id) => id);
  const season_id = ids[0];
  const season_number = ids[1];

  const tvTitle = await fetcher(`tv/${season_id}`)
  const seasonTitle = await fetcher(`tv/${season_id}/season/${season_number}`)

  return {
    title: `${tvTitle.name} | ${seasonTitle.name}`,
  };
}

const Seasons = ({ params }: { params: { slug: [] } }) => {
  const ids = params.slug.map((id) => id);
  const season_id = ids[0];
  const season_number = ids[1];

  return <SeasonList seasonId={season_id} season_number={season_number} />;
};

export default Seasons;
