import React from "react";
import { useForm } from "react-hook-form";
import { BiLoaderAlt } from "react-icons/bi";

const Form = ({ onSubmit, isLoading }) => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();

  return (
    <div className="flex min-h-screen flex-1 flex-col justify-center px-6 py-12 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <h2 className="mt-10 text-center text-ft24-32 font-bold tracking-tight text-black-10">
          Sign in to your account
        </h2>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form className="space-y-6">
          <div>
            <label
              htmlFor="name"
              className="block text-ft14-20 font-medium text-black-10"
            >
              Name
            </label>
            <div className="mt-2">
              <input
                id="name"
                type="text"
                {...register("name", {
                  required: "Please enter name."
                })}
                className="block w-full rounded-md border-0 py-1.5 text-black-10 shadow-sm ring-1 ring-inset focus:ring-2 focus:ring-inset focus:ring-navyBlue-10 sm:text-ft14-20"
              />
            </div>
            {!!errors.name && (
              <div className="mt-1 pl-2 font-PoppinsRegular text-ft12-16 text-red-10">
                {errors.name.message}
              </div>
            )}
          </div>
          <div>
            <label
              htmlFor="email"
              className="block text-ft14-20 font-medium text-black-10"
            >
              Email address
            </label>
            <div className="mt-2">
              <input
                id="email"
                name="email"
                type="email"
                {...register("email", {
                  required: "Please enter email.",
                  pattern: {
                    value:
                      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                    message: "Please enter a valid email."
                  }
                })}
                className="block w-full rounded-md border-0 py-1.5 text-black-10 shadow-sm ring-1 ring-inset focus:ring-2 focus:ring-inset focus:ring-navyBlue-10 sm:text-ft14-20"
              />
            </div>
            {!!errors.email && (
              <div className="mt-1 pl-2 font-PoppinsRegular text-ft12-16 text-red-10 ">
                {errors.email.message}
              </div>
            )}
          </div>

          <div>
            <div className="flex items-center justify-between">
              <label
                htmlFor="password"
                className="block text-ft14-20 font-medium text-black-10"
              >
                Password
              </label>
              <div className="text-ft14-20">
                <a href="#" className="font-semibold text-navyBlue-10">
                  Forgot password?
                </a>
              </div>
            </div>
            <div className="mt-2">
              <input
                id="password"
                name="password"
                type="password"
                {...register("password", {
                  pattern: {
                    value:
                      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
                    message:
                      "Password must include letters, numbers and special characters."
                  },
                  minLength: {
                    value: 8,
                    message: "Password must be at least 8 characters."
                  },
                  required: "Password is required."
                })}
                className="block w-full rounded-md border-0 py-1.5 text-black-10 shadow-sm ring-1 ring-inset focus:ring-2 focus:ring-inset focus:ring-navyBlue-10 sm:text-ft14-20"
              />
            </div>
            {!!errors.password && (
              <div className="mt-1 pl-2 font-PoppinsRegular text-ft12-16 text-red-10 ">
                {errors.password.message}
              </div>
            )}
          </div>

          <div>
            <button
              type="submit"
              disabled={isLoading}
              onClick={handleSubmit(onSubmit)}
              className="flex w-full justify-center rounded-md bg-navyBlue-10 px-3 py-1.5 text-ft14-20 font-semibold text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-navyBlue-10"
            >
              {isLoading ? (
                <BiLoaderAlt className="h-8 w-8 animate-spin text-white" />
              ) : (
                "Sign in"
              )}
            </button>
          </div>
        </form>

        <p className="mt-10 text-center text-ft14-20">
          Not a member?{" "}
          <a href="#" className="font-semibold text-navyBlue-10">
            Signup
          </a>
        </p>
      </div>
    </div>
  );
};

export default Form;
