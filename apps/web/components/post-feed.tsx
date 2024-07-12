"use client";

import { Post } from "@/components/post";
import { ExclamationTriangleIcon } from "@radix-ui/react-icons";
import type { PostResolved } from "@semicolon/api/schema";
import { Alert, AlertDescription, AlertTitle } from "@semicolon/ui/alert";
import { Button } from "@semicolon/ui/button";
import { Separator } from "@semicolon/ui/separator";
import Spinner from "@semicolon/ui/spinner";
import _ from "lodash";
import { RotateCw } from "lucide-react";
import React, { Fragment } from "react";
import { InView } from "react-intersection-observer";

export function PostFeed({
  posts,
  loading,
  error,
  fetchNextPage,
  refetch,
  hasNextPage,
}: {
  posts: PostResolved[];
  loading: boolean;
  error: boolean;
  hasNextPage: boolean;
  fetchNextPage: () => Promise<unknown>;
  refetch: () => Promise<unknown>;
}) {
  return (
    <>
      {
        <div className="flex flex-col">
          {posts.map((post, i) => (
            <Fragment key={i}>
              <Post {...post} />
              <Separator />
            </Fragment>
          ))}
        </div>
      }
      {loading ? (
        <div className="flex h-20 items-center justify-center">
          <Spinner size={30} />
        </div>
      ) : error ? (
        <div className="border-destructive m-5 flex flex-grow flex-row items-center justify-between rounded-lg border p-0">
          <Alert variant="destructive" className="border-none">
            <ExclamationTriangleIcon className="h-4 w-4" />
            <AlertTitle>Error</AlertTitle>
            <AlertDescription>
              There was a problem fetching your posts.
            </AlertDescription>
          </Alert>
          <Button
            size={"icon"}
            variant={"ghost"}
            className="hover:bg-destructive/30 mr-4 aspect-square rounded-full"
            onClick={async () => refetch()}
          >
            <RotateCw className="stroke-destructive" />
          </Button>
        </div>
      ) : hasNextPage ? (
        <InView
          as="div"
          threshold={0.9}
          onChange={async (inView, _) => {
            if (inView) {
              await fetchNextPage();
            }
          }}
        >
          <div className="flex h-20 flex-row items-center justify-center" />
        </InView>
      ) : undefined}
    </>
  );
}