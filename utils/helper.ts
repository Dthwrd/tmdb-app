type DirectorType = {
  id: number;
  name: string;
}

export const job = (data: { crew: any }) => {
  const director: DirectorType = data?.crew.find((crew: any) => crew.job === "Director");
  const producer = data?.crew.filter((crew: any) => crew.job === "Producer");
  const screenplay = data?.crew.filter(
    (crew: any) => crew.job === "Screenplay"
  );

  return { director, producer, screenplay };
};
