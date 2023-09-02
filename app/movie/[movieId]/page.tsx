import { Metadata } from "next";
import { fetcher } from "@/utils/fetcher";
import MovieDetails from "./components/MovieDetails";

export async function generateMetadata({
  params,
}: {
  params: { movieId: string };
}): Promise<Metadata> {
  const movie = await fetcher(`movie/${params.movieId}`);

  return {
    title: `Movie | ${movie.title}`,
  };
}

const Page = ({ params }: { params: { movieId: string } }) => {
  return <MovieDetails movieId={params.movieId} />;
};

export default Page
