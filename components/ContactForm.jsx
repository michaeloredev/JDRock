"use client";
import { useForm } from "react-hook-form";
import React from "react";
import axios from "axios";

export default function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onHandleSubmit = async (values) => {
    let config = {
      method: "POST",
      url: `/api/contact`,
      headers: {
        "Content-Type": "application/json",
      },
      data: values,
    };
    try {
      const response = await axios(config);
      console.log(response);
      reset();
    } catch(err) {
      console.log(err);
    }
  };

  return (
    <div className="flex">
      <form className="w-full" onSubmit={handleSubmit(onHandleSubmit)}>
        <div className="flex justify-center">
          <div className="flex flex-col mb-9 w-4/6">
            <label htmlFor="name" className="mb-2">
              Full Name:
            </label>
            <input
              {...register("name", { required: "Name is required" })}
              className="w-full p-3 rounded-lg text-black"
              type="text"
              placeholder="Your Full Name"
            />
            {errors.name && (
              <p className="text-lime-400">{errors.name.message}</p>
            )}
          </div>
        </div>

        <div className="flex justify-center">
          <div className="flex flex-col mb-9 w-4/6">
            <label htmlFor="email" className="mb-2">
              Email:
            </label>
            <input
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value:
                    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                  message: "Please enter a valid email",
                },
              })}
              className="w-full p-3 rounded-lg text-black"
              type="text"
              placeholder="Your Email"
            />
            {errors.email && (
              <p className="text-lime-400">{errors.email.message}</p>
            )}
          </div>
        </div>

        <div className="flex justify-center">
          <div className="flex flex-col mb-9 w-4/6">
            <label htmlFor="phone" className="mb-2">
              Phone Number:
            </label>
            <input
              {...register("phone")}
              className="w-full p-3 rounded-lg text-black"
              type="text"
              placeholder="Your Phone Number"
            />
          </div>
        </div>

        <div className="flex justify-center">
          <div className="flex flex-col mb-9 w-4/6">
            <label htmlFor="questions" className="mb-2">
              Questions/Comments:
            </label>
            <textarea
              {...register("questions", {
                required: "Please enter your question of comment",
              })}
              className="w-full rounded-lg p-3 text-black"
              rows={5}
              placeholder="Questions/Comments"
            ></textarea>
            {errors.questions && (
              <p className="text-lime-400">{errors.questions.message}</p>
            )}
          </div>
        </div>

        <div className="flex justify-center">
          <button
            type="submit"
            className="bg-green-800 hover:bg-green-600 hover:shadow text-white font-bold py-2 px-6 rounded opacity-100"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}
