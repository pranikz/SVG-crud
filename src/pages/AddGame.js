import React from "react";
import { useForm, UseForm, Controller } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addNewGameAPI, getLoading } from "../feature/games/gameslice";

const AddGame = () => {
  const apiStatus = useSelector(getLoading);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { control, handleSubmit } = useForm({
    defaultValues: {
      name: "",
      url: "",
      author: "",
      published_date: new Date(),
    },
  });

  const addNewGameForm = (data) => {
    let payload = {
      name: data.name,
      url: data.url,
      author: data.author,
      published_date: data.published_date,
    };
    dispatch(addNewGameAPI(payload))
      .unwrap()
      .then(() => {
        navigate("/allgames");
      });
  };

  return (
    <>
      <div className="">
        {" "}
        <div>Add a new Game</div>
        <div className="w-full  md:max-w-full mx-auto">
          <div className="p-6 border border-gray-300 sm:rounded-md">
            <form onSubmit={handleSubmit(addNewGameForm)}>
              <label className="block mb-6">
                <span className="text-gray-700">Name of the game</span>
                <Controller
                  name="name"
                  control={control}
                  render={({ field }) => (
                    <input
                      {...field}
                      name="name"
                      type="text"
                      className="
            block
            w-full
            mt-1
            border-gray-300
            rounded-md
            shadow-sm
            focus:border-indigo-300
            focus:ring
            focus:ring-indigo-200
            focus:ring-opacity-50
          "
                      placeholder="Enter Game Name"
                    />
                  )}
                />
              </label>
              <label className="block mb-6">
                <span className="text-gray-700">Enter the website</span>
                <Controller
                  name="url"
                  control={control}
                  render={({ field }) => (
                    <input
                      {...field}
                      name="website"
                      type="url"
                      className="
              block
              w-full
              mt-1
              border-gray-300
              rounded-md
              shadow-sm
              focus:border-indigo-300
              focus:ring
              focus:ring-indigo-200
              focus:ring-opacity-50
            "
                      placeholder="https://www.example.com"
                    />
                  )}
                />
              </label>
              <label className="block mb-6">
                <span className="text-gray-700">Author</span>
                <Controller
                  name="author"
                  control={control}
                  render={({ field }) => (
                    <input
                      {...field}
                      name="author"
                      type="text"
                      className="
              block
              w-full
              mt-1
              border-gray-300
              rounded-md
              shadow-sm
              focus:border-indigo-300
              focus:ring
              focus:ring-indigo-200
              focus:ring-opacity-50
            "
                      placeholder=""
                    />
                  )}
                />
              </label>
              <label className="block mb-6">
                <span className="text-gray-700">Enter Date</span>
                <Controller
                  name="published_date"
                  control={control}
                  render={({ field }) => (
                    <input
                      {...field}
                      name="date"
                      type="date"
                      className="
              block
              w-full
              mt-1
              border-gray-300
              rounded-md
              shadow-sm
              focus:border-indigo-300
              focus:ring
              focus:ring-indigo-200
              focus:ring-opacity-50
            "
                      placeholder=""
                    />
                  )}
                />
              </label>

              <div className="mb-6">
                <button
                  type="submit"
                  className="
            h-10
            px-5
            text-indigo-100
            bg-indigo-700
            rounded-lg
            transition-colors
            duration-150
            focus:shadow-outline
            hover:bg-indigo-800
          "
                  disabled={apiStatus === "pending"}
                >
                  {apiStatus === "pending" ? "saving" : "Save"}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddGame;
