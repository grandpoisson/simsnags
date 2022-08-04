import { useState } from "react";
import Head from "next/head";

import { useSession } from "next-auth/react";
import { useRouter } from "next/router";

import prisma from "lib/prisma";

export default function Home() {
  const { data: session, status } = useSession();
  const router = useRouter();

  if (status === "loading") {
    return null;
  }

  if (session) {
    router.push("/home");
  }

  return (
    <div>
      <Head>
        <title>Snag Utility</title>
        <meta name="description" content="A great snag utility" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Heading />

      {/*{snags.length === 0 && (*/}
      <p className="flex justify-center mt-20">No snags found!</p>
      {/*)}
      <Videos videos={videos} />
      {!reachedEnd && (
        <LoadMore
          videos={videos}
          setVideos={setVideos}
          setReachedEnd={setReachedEnd}
        />
      )}*/}
    </div>
  );
}
