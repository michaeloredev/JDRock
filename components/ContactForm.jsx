"use client";
import { useForm } from "react-hook-form";
import React, { useState } from "react";
import axios from "axios";

export default function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm();
  const [status, setStatus] = useState(null);

  const onHandleSubmit = async (values) => {
    let config = {
      method: "POST",
      url: `/api/contact`,
      headers: {
        "Content-Type": "application/json",
      },
      data: values,
    };
    setStatus(null);
    try {
      await axios(config);
      reset();
      setStatus({
        ok: true,
        message: "Thanks! Your message has been sent. We'll be in touch soon.",
      });
    } catch (err) {
      console.error(err);
      setStatus({
        ok: false,
        message:
          "Sorry, something went wrong sending your message. Please call us at 443-244-0484.",
      });
    }
  };

  return (
    <div className="flex">
      <form className="w-full" onSubmit={handleSubmit(onHandleSubmit)}>
        <div className="flex justify-center">
          <div className="flex flex-col mb-9 w-full">
            <label htmlFor="name" className="mb-2">
              Full Name:
            </label>
            <input
              id="name"
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
          <div className="flex flex-col mb-9 w-full">
            <label htmlFor="email" className="mb-2">
              Email:
            </label>
            <input
              id="email"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value:
                    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                  message: "Please enter a valid email",
                },
              })}
              className="w-full p-3 rounded-lg text-black"
              type="email"
              placeholder="Your Email"
            />
            {errors.email && (
              <p className="text-lime-400">{errors.email.message}</p>
            )}
          </div>
        </div>

        <div className="flex justify-center">
          <div className="flex flex-col mb-9 w-full">
            <label htmlFor="phone" className="mb-2">
              Phone Number:
            </label>
            <input
              id="phone"
              {...register("phone")}
              className="w-full p-3 rounded-lg text-black"
              type="tel"
              placeholder="Your Phone Number"
            />
          </div>
        </div>

        <div className="flex justify-center">
          <div className="flex flex-col mb-9 w-full">
            <label htmlFor="questions" className="mb-2">
              Questions/Comments:
            </label>
            <textarea
              id="questions"
              {...register("questions", {
                required: "Please enter your question or comment",
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
            disabled={isSubmitting}
            className="bg-green-800 hover:bg-green-600 hover:shadow text-white font-bold py-2 px-6 rounded opacity-100 disabled:opacity-60 disabled:cursor-not-allowed"
          >
            {isSubmitting ? "Sending..." : "Submit"}
          </button>
        </div>

        {status && (
          <p
            role="status"
            className={`mt-6 text-center ${status.ok ? "text-lime-400" : "text-red-300"}`}
          >
            {status.message}
          </p>
        )}
      </form>
    </div>
  );
}
