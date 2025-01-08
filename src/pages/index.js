import React, { useRef, useEffect, useCallback, useState } from "react";
import Card from "../componets/Card";
import Layout from "../componets/Layout";
import { useFetchCats } from "../hooks/useFetchCats";
import { useFetchUsers } from "../hooks/useFetchUsers";

const Home = () => {
  //Local status for storing combined user and cat data
  const [pairedData, setPairedData] = useState([]);

  //Get cats fact
  const {
    data: catsData,
    isLoading: isLoadingCats,
    isError: isErrorCats,
    error: errorCats,
    fetchNextPage: fetchNextCatsPage, //Load more paginated data
    hasNextPage: hasNextCatsPage, // Indicates if there is more data to be loaded.
    isFetchingNextPage: isFetchingNextCatsPage, //Loading status for the next page.
  } = useFetchCats();

  //Get user information
  const {
    data: usersData,
    isLoading: isLoadingUsers,
    isError: isErrorUsers,
    error: errorUsers,
    fetchNextPage: fetchNextUsersPage, //Load more paginated data
    hasNextPage: hasNextUsersPage, // Indicates if there is more data to be loaded.
    isFetchingNextPage: isFetchingNextUsersPage, //Loading status for the next page.
  } = useFetchUsers();

  //creates a reference to the element that will trigger additional data loading when visible (infinite scroll)
  const observerRef = useRef(null);

  //Callback to load more data
  const loadMoreData = useCallback(() => {
    if (
      hasNextUsersPage &&
      hasNextCatsPage &&
      !isFetchingNextUsersPage &&
      !isFetchingNextCatsPage
    ) {
      fetchNextUsersPage();
      fetchNextCatsPage();
    }
  }, [
    hasNextUsersPage,
    hasNextCatsPage,
    isFetchingNextUsersPage,
    isFetchingNextCatsPage,
    fetchNextUsersPage,
    fetchNextCatsPage,
  ]);

  //Combine user and cat data
  useEffect(() => {
    const lastUsersPage =
      usersData?.pages[usersData.pages.length - 1]?.data || [];
    const lastCatsPage = catsData?.pages[catsData.pages.length - 1]?.data || [];

    if (lastUsersPage.length && lastCatsPage.length) {
      const combinedPage = lastUsersPage.map((user, index) => ({
        ...user,
        catFact: lastCatsPage[index]?.fact || "No fact available",
      }));

      setPairedData((prev) => [...prev, ...combinedPage]);
    }
  }, [usersData, catsData]);

  //Detects when the referenced item (at the end of the list) enters the user's view.
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          loadMoreData();
        }
      },
      { threshold: 0.1 }
    );

    if (observerRef.current) {
      observer.observe(observerRef.current);
    }

    return () => observer.disconnect();
  }, [loadMoreData]);

  if (isLoadingUsers || isLoadingCats)
    return (
      <div class="text-5xl font-extrabold text-center mt-5">
        <span class="bg-clip-text text-dark">Loading...</span>
      </div>
    );

  if (isErrorUsers)
    return (
      <p className="text-5xl font-extrabold text-center mt-5 text-red-500">
        Error fetching users: {errorUsers.message}
      </p>
    );

  if (isErrorCats)
    return (
      <p className="text-5xl font-extrabold text-center mt-5 text-red-500">
        Error fetching cat facts: {errorCats.message}
      </p>
    );

  return (
    <Layout>
      <div className="flex flex-col gap-4">
        {pairedData.length > 0 ? (
          pairedData.map((item, index) => <Card key={index} {...item} />)
        ) : (
          <p className="text-5xl font-extrabold text-center mt-5 text-red-500">
            No data found
          </p>
        )}
        <div ref={observerRef} className="h-1"></div>
        {(isFetchingNextCatsPage || isFetchingNextUsersPage) && (
          <p className="text-5xl font-extrabold text-center mt-5 text-dark">
            Loading more data...
          </p>
        )}
        {(!hasNextCatsPage || !hasNextUsersPage) && (
          <p className="bg-cyan-100 p-4 rounded-lg text-center text-black">
            There's no more to show
          </p>
        )}
      </div>
    </Layout>
  );
};

export default Home;
