"use client";
import { DEFAULT_LIMIT } from "@/constant";
import { trpc } from "@/trpc/client";
import { Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";

export const VideosSecction = () => {
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <ErrorBoundary
        fallback={<p>Error</p>}
      >
        <VideosSecctionSuspense />
      </ErrorBoundary>
    </Suspense>
  );
};

export const VideosSecctionSuspense = () => {
  const [data] = trpc.studio.getMany.useSuspenseInfiniteQuery(
    {
      limit: DEFAULT_LIMIT,
    },
    {
      getNextPageParam: (lastPage) => lastPage.nextCursor,
    }
  );
  return <div>{JSON.stringify(data)}</div>;
};
