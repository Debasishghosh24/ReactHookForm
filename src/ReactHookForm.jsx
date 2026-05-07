import { useForm } from "react-hook-form";
import { zodResolver } from '@hookform/resolvers/zod';
import {  z } from "zod";


const formSchema = z.object({
    FirstName: z.string().min(1, "please Enter Your First Name") .min(3, "Minimum Length Should Be 3").max(20, "Maximum Length Should be 20"),
    lastName: z.string().min(1, "please Enter Your Last Name"),
    email: z.string().min(1, "please Enter Your Email ") .email("email is invalid"),
    age: z.coerce.number().min(1, "Please enter Your Age").min(10, "minimum age should be 10").max(100, "max age should be 100"),
    password: z.string().min(1, "Please Set A Password").min(6, "Password must be at least 6 characters"),
    ConfirmPassword: z.string().min(1, "Password And Confirm Password Must Be Same"),
}).refine((data) => data.password === data.ConfirmPassword, {
    
    message: "Passwords don't match",
    path: ["ConfirmPassword"],
})





function ReactHookForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({resolver: zodResolver(formSchema)});

 
    
  function submitForm(data) {
    console.log(data);
    reset();
  }

  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-screen bg-linear-to-t from-green-300 via-transparent to-orange-300 ">
        <div className="flex justify-center items-center mt-4">
        <p className="text-4xl font-extrabold italic text-white">Join Us Today </p>
        </div>
        <div className="border-2 rounded-2xl w-xl p-5 mt-10 mb-20 bg-cyan-200 m-5">
          <form onSubmit={handleSubmit(submitForm)}>
            <div className="flex flex-col mt-2">
              <label htmlFor="firstname" className="text-xl text-blue-600">
                First Name*
              </label>
              <input
                id="firstname"
                className={`h-13 border-2 bg-blue-50 text-xl border-e-black rounded-xl text-center ${errors.FirstName ? "border-red-500" : "border-e-black"} `}
                placeholder="Enter your First name"
                {...register("FirstName", {required: "please Enter your First Name"})}
              />
              {errors.FirstName && (
                <span className="text-xl mt-1 text-red-500">
                  {errors.FirstName.message}
                </span>
              )}
            </div>

            <div className="flex flex-col mt-2">
              <label htmlFor="lastname" className="text-xl text-blue-600">
                Last Name*
              </label>
              <input
                id="lastname"
                className={`h-13 border-2 bg-blue-50 text-xl border-e-black rounded-xl text-center ${errors.lastName ? "border-red-500" : "border-e-black"} `}
                placeholder="Enter your Last Name"
                {...register("lastName")}
              />
              {errors.lastName && (
                <span className="text-xl mt-1 text-red-500">
                  {errors.lastName.message}
                </span>
              )}
            </div>

            <div className="flex flex-col mt-2">
              <label htmlFor="email" className="text-xl text-blue-600">
                Email*
              </label>
              <input
                id="email"
                className={`h-13 border-2 bg-blue-50 text-xl border-e-black rounded-xl text-center ${errors.email ? "border-red-500" : "border-e-black"} `}
                placeholder="Enter your mail id "
                {...register("email")}
              />
              {errors.email && (
                <span className="text-xl mt-1 text-red-500">
                  {errors.email.message}
                </span>
              )}
            </div>


            <div className="flex flex-col mt-2">
              <label htmlFor="age" className="text-xl text-blue-600">
                Age*
              </label>
              <input
                type="number"
                id="age"
                className={`h-13 border-2 bg-blue-50 text-xl border-e-black rounded-xl text-center ${errors.age ? "border-red-500" : "border-e-black"} `}
                placeholder="Enter your age"
                max={100}
                min={1}
                {...register("age")}
              />
              {errors.age && (
                <span className="text-xl mt-1 text-red-500">
                  {errors.age.message}
                </span>
              )}
            </div>

            <div className="flex flex-col mt-2">
              <label htmlFor="password" className="text-xl text-blue-600">
                Password*
              </label>
              <input
                id="password"
                type="password"
                className={`h-13 border-2 bg-sky-50 text-xl border-e-black rounded-xl text-center ${errors.password ? "border-red-500" : "border-e-black"}`}
                placeholder="Enter your password"
                {...register("password")}
              />
              {errors.password && (
                <span className="text-xl mt-1 text-red-500">
                  {errors.password.message}
                </span>
              )}
            </div>

            <div className="flex flex-col mt-2">
              <label
                htmlFor="ConfirmPassword"
                className="text-xl text-blue-600"
              >
                Confirm Password*
              </label>
              <input
                id="ConfirmPassword"
                type="password"
                className={`h-13 border-2 bg-blue-50 text-xl border-e-black rounded-xl text-center ${errors.ConfirmPassword ? "border-red-500" : "border-e-black"} `}
                placeholder="Confirm your password"
                {...register("ConfirmPassword")}
              />
              {errors.ConfirmPassword && (
                <span className="text-xl mt-1 text-red-500">
                  {errors.ConfirmPassword.message}
                </span>
              )}
            </div>

            <div className="flex items-center justify-center gap-8">
              <button type="button" onClick={() => reset()} className=" h-10 w-27 p-2 bg-linear-to-t from-green-300 via-transparent to-orange-300 mt-4 rounded-2xl font-semibold border border-be-black cursor-pointer">
                Reset
              </button>
              <button className=" h-10 w-27 p-2 bg-linear-to-t from-green-300 via-transparent to-orange-300 mt-4 rounded-2xl font-semibold border border-be-black cursor-pointer">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default ReactHookForm;
