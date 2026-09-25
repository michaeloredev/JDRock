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
          <div className="flex flex-col mb-6 w-full">
            <label htmlFor="name" className="mb-2 font-medium text-stone-800">
              Full Name:
            </label>
            <input
              id="name"
              {...register("name", { required: "Name is required" })}
              className="w-full rounded-md border border-stone-300 bg-white p-3 text-stone-900 placeholder:text-stone-400 focus:border-brand-600 focus:outline-none focus:ring-2 focus:ring-brand-600/30"
              type="text"
              placeholder="Your Full Name"
            />
            {errors.name && (
              <p className="mt-1 text-sm text-red-700">{errors.name.message}</p>
            )}
          </div>
        </div>

        <div className="flex justify-center">
          <div className="flex flex-col mb-6 w-full">
            <label htmlFor="email" className="mb-2 font-medium text-stone-800">
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
              className="w-full rounded-md border border-stone-300 bg-white p-3 text-stone-900 placeholder:text-stone-400 focus:border-brand-600 focus:outline-none focus:ring-2 focus:ring-brand-600/30"
              type="email"
              placeholder="Your Email"
            />
            {errors.email && (
              <p className="mt-1 text-sm text-red-700">{errors.email.message}</p>
            )}
          </div>
        </div>

        <div className="flex justify-center">
          <div className="flex flex-col mb-6 w-full">
            <label htmlFor="phone" className="mb-2 font-medium text-stone-800">
              Phone Number:
            </label>
            <input
              id="phone"
              {...register("phone")}
              className="w-full rounded-md border border-stone-300 bg-white p-3 text-stone-900 placeholder:text-stone-400 focus:border-brand-600 focus:outline-none focus:ring-2 focus:ring-brand-600/30"
              type="tel"
              placeholder="Your Phone Number"
            />
          </div>
        </div>

        <div className="flex justify-center">
          <div className="flex flex-col mb-6 w-full">
            <label htmlFor="questions" className="mb-2 font-medium text-stone-800">
              Questions/Comments:
            </label>
            <textarea
              id="questions"
              {...register("questions", {
                required: "Please enter your question or comment",
              })}
              className="w-full rounded-md border border-stone-300 bg-white p-3 text-stone-900 placeholder:text-stone-400 focus:border-brand-600 focus:outline-none focus:ring-2 focus:ring-brand-600/30"
              rows={5}
              placeholder="Questions/Comments"
            ></textarea>
            {errors.questions && (
              <p className="mt-1 text-sm text-red-700">{errors.questions.message}</p>
            )}
          </div>
        </div>

        <div className="flex justify-center">
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full rounded-md bg-accent px-6 py-3 text-lg font-semibold text-accent-ink transition-colors hover:bg-accent-hover disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
          >
            {isSubmitting ? "Sending..." : "Submit"}
          </button>
        </div>

        {status && (
          <p
            role="status"
            className={`mt-6 rounded-md p-4 text-center ${status.ok ? "bg-brand-50 text-brand-800" : "bg-red-50 text-red-800"}`}
          >
            {status.message}
          </p>
        )}
      </form>
    </div>
  );
}
