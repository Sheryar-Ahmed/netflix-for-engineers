import WatchVideo from "@/components/WatchVideo";
import Comment from "../components/Comment";
import React from "react";
import { useParams } from "react-router";

const Watch = () => {
  const { watch_id } = useParams();
  console.log(watch_id)

  return (
    <div className="flex w-full flex-col">
      <h1>watching for {watch_id}</h1>
      <WatchVideo />
      <Comment />
    </div>
  );
};

export default Watch;
