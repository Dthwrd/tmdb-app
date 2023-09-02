import { Metadata } from "next";
import { fetcher } from "@/utils/fetcher";
import TvDetails from "./components/TvDetails";

export async function generateMetadata({
  params,
}: {
  params: { seriesId: string };
}): Promise<Metadata> {
  const tv = await fetcher(`tv/${params.seriesId}`);

  return {
    title: `Tv | ${tv.name}`,
  };
}

const Page = ({ params }: { params: { seriesId: string } }) => {
  return <TvDetails series_id={params.seriesId} />;
};

export default Page;
