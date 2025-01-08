import { useInfiniteQuery } from "@tanstack/react-query";

//Custom hook using useInfiniteQuery to handle paged data loading
const fetchCatFacts = async ({ pageParam = 1 }) => {
  const response = await fetch(
    `https://catfact.ninja/facts?page=${pageParam}&limit=10`
  );
  if (!response.ok) {
    throw new Error("Error fetching cat facts");
  }
  const data = await response.json();
  return {
    data: data.data,
    nextPage: pageParam + 1,
    hasNextPage: data.current_page < 10,
  };
};

export const useFetchCats = () => {
  return useInfiniteQuery({
    queryKey: ["cats"],
    queryFn: fetchCatFacts,
    getNextPageParam: (lastPage) =>
      lastPage.hasNextPage ? lastPage.nextPage : undefined,
  });
};
