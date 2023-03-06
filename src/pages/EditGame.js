import React from "react";
import { useForm, UseForm, Controller } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import {
  getGameById,
  getLoading,
  updateGameAPI,
} from "../feature/games/gameslice";

const EditGame = () => {
  const apiStatus = useSelector(getLoading);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams();
  const itemToEdit = useSelector(getGameById(Number(id)));
  const { control, handleSubmit } = useForm({
    defaultValues: {
      name: itemToEdit.name,
      url: itemToEdit.url,
      author: itemToEdit.author,
      published_date: itemToEdit.published_date,
    },
  });

  const updateGameForm = (data) => {
    let payload = {
      id: id,
      name: data.name,
      url: data.url,
      author: data.author,
      published_date: data.published_date,
    };
    dispatch(updateGameAPI(payload))
      .unwrap()
      .then(() => {
        navigate("/allgames");
        window.location.reload(true);
      });
  };
  return (
    <>
      <div className="">
        {" "}
        <div>Update Game</div>
        <div className="w-full  md:max-w-full mx-auto">
          <div className="p-6 border border-gray-300 sm:rounded-md">
            <form onSubmit={handleSubmit(updateGameForm)}>
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
                      required
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
                      required
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
                      required
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
                      required
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
                  {apiStatus === "pending" ? "updating" : "update"}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default EditGame;
