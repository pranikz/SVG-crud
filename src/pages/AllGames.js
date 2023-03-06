import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Loader } from "../@components/Loader/Loader";
import {
  getAllGames,
  getLoading,
  fetchALlGamesAPI,
} from "../feature/games/gameslice";

const AllGames = () => {
  const allGamesData = useSelector(getAllGames);
  const dataStatus = useSelector(getLoading);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  let contentToRender = "";

  useEffect(() => {
    dispatch(fetchALlGamesAPI());
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  contentToRender =
    dataStatus === "pending" ? (
      <>
        <div className="flex justify-center">
          <Loader />
        </div>
      </>
    ) : (
      <>
        <div className=" lg:my-2.5 mx-auto max-w-med px-4 sm:max-w-2xl lg:px-0">
          <div className="flex justify-between">
            <p className="text-base text-gray-300 sm:mt-5 sm:text-xl mb-10">
              All Games data
            </p>
            <div className=" flex space-x-5 justify-center items-center pl-2">
              <div className="relative cursor-pointer focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 ">
                <button
                  className="bg-blue-200 text-black active:bg-blue-500 
      font-bold px-3 py-1.5 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1"
                  type="button"
                  onClick={()=>{navigate("/addgame")}}
                >
                  {" "}
                  Add a New Game{" "}
                </button>
                <div className="animate-ping w-1.5 h-1.5 bg-indigo-700 rounded-full absolute -top-1 -right-1 m-auto duration-200" />
                <div className=" w-1.5 h-1.5 bg-indigo-700 rounded-full absolute -top-1 -right-1 m-auto shadow-lg" />
              </div>
            </div>
          </div>
          {allGamesData.map((data, i) => {
            return (
              <>
                <div className="container  px-5 mx-auto my-16" key={i}>
                  <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-1">
                    <div className="p-5 bg-white   rounded shadow-sm dark:bg-gray-800">
                      <div className="text-lg text-gray-400 dark:text-gray-300">
                        <div className="px-4 py-2">
                          <span>Game: </span>
                          {data?.name}
                        </div>
                        <div className="px-4 py-4">
                          <span>Url: </span>
                          <a href={data?.url}>{data?.url}</a>
                        </div>
                        <div className="px-4 py-4">
                          <span>Author: </span>
                          {data?.author}
                        </div>
                        <div className="px-4 py-4">
                          <span>Published Date: </span>
                          {new Date(data?.published_date).toLocaleDateString(
                            "en-GB"
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </>
    );

  return (
    <>
      <div>{contentToRender}</div>
    </>
  );
};

export default AllGames;
