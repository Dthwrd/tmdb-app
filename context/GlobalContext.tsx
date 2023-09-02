"use client";

import { Dispatch, ReactNode, createContext, useEffect, useState } from "react";

export const GlobalContext = createContext({
  isOpen: {} as Partial<boolean>,
  setIsOpen: {} as Dispatch<Partial<boolean>>,
  openDialog: {} as Partial<boolean>,
  setOpenDialog: {} as Dispatch<Partial<boolean>>,
  openSearchBar: {} as Partial<boolean>,
  setOpenSearchBar: {} as Dispatch<Partial<boolean>>,
  movieId: {} as Partial<number | undefined>,
  setMovieId: {} as Dispatch<Partial<number | undefined>>,
  type: {} as Partial<string>,
  setType: {} as Dispatch<Partial<string>>,
  favorite: [] as {
    movieId: number;
    type: string;
    poster_path: string;
    title: string;
    tagline: string;
    overview: string;
    genres: [];
    runtime: number;
    rating: number;
  }[],
  setFavorite: {} as Dispatch<
    {
      movieId: number;
      type: string;
      poster_path: string;
      title: string;
      tagline: string;
      overview: string;
      genres: [];
      runtime: number;
      rating: number;
    }[]
  >,
  watchList: [] as {
    movieId: number;
    type: string;
    poster_path: string;
    title: string;
    tagline: string;
    overview: string;
    genres: [];
    runtime: number;
    rating: number;
  }[],
  setWatchList: {} as Dispatch<
    {
      movieId: number;
      type: string;
      poster_path: string;
      title: string;
      tagline: string;
      overview: string;
      genres: [];
      runtime: number;
      rating: number;
    }[]
  >,
});

export function GlobalProviders({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [openDialog, setOpenDialog] = useState(false);
  const [openSearchBar, setOpenSearchBar] = useState(false);
  const [movieId, setMovieId] = useState<number | undefined>(0);
  const [type, setType] = useState<string>("");
  const [favorite, setFavorite] = useState<
    | {
        movieId: number;
        type: string;
        poster_path: string;
        title: string;
        tagline: string;
        overview: string;
        genres: [];
        runtime: number;
        rating: number;
      }[]
    | []
  >([]);

  const [watchList, setWatchList] = useState<
    | {
        movieId: number;
        type: string;
        poster_path: string;
        title: string;
        tagline: string;
        overview: string;
        genres: [];
        runtime: number;
        rating: number;
      }[]
    | []
  >([]);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const isFavorite = localStorage.getItem("favorite");
      const isWatchList = localStorage.getItem("watchList");

      if (isFavorite) {
        setFavorite(JSON.parse(isFavorite));
      } else {
        setFavorite([]);
      }

      if (isWatchList) {
        setWatchList(JSON.parse(isWatchList));
      } else {
        setWatchList([]);
      }
    }

    document.addEventListener("keyup", (e) => {
      if (e.code === "Slash") setOpenSearchBar(!openSearchBar);
    });
  }, [setOpenSearchBar, openSearchBar]);

  return (
    <GlobalContext.Provider
      value={{
        isOpen,
        setIsOpen,
        openDialog,
        setOpenDialog,
        openSearchBar,
        setOpenSearchBar,
        movieId,
        setMovieId,
        type,
        setType,
        favorite,
        setFavorite,
        watchList,
        setWatchList,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
}
