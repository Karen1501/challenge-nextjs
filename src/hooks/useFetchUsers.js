import { useInfiniteQuery } from "@tanstack/react-query";

//Custom hook using useInfiniteQuery to handle paged data loading
const fetchUsers = async ({ pageParam = 1 }) => {
  const response = await fetch(
    `https://randomuser.me/api/?page=${pageParam}&results=10&seed=abc&inc=name,picture`
  );
  if (!response.ok) {
    throw new Error("Error fetching users");
  }
  const data = await response.json();
  return {
    data: data.results,
    nextPage: pageParam + 1,
    hasNextPage: data.info.page < 10,
  };
};
export const useFetchUsers = () => {
  return useInfiniteQuery({
    queryKey: ["users"],
    queryFn: fetchUsers,
    getNextPageParam: (lastPage) =>
      lastPage.hasNextPage ? lastPage.nextPage : undefined,
  });
};
