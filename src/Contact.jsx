import Footer from "./Footer";
import call from "./assets/call.png";
import email from "./assets/message.png";
import location from "./assets/location.png";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

const formSchema = z.object({
  firstName: z
    .string()
    .min(1, "Please Enter Your First Name")
    .min(3, "Minimum Length Should be 3")
    .max(20, "maximum length should be 20"),
  lastName: z
    .string()
    .min(1, "Please Enter Your Last Name")
    .min(3, "Minimum Length Should be 3")
    .max(20, "maximum length should be 20"),
  email: z
    .string()
    .min(1, "please Enter Your Email ")
    .email("email is invalid"),
  message: z.string().min(1, "Please Enter Your Problem"),
});

function Contact() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({ resolver: zodResolver(formSchema) });

  function SubmitForm(data) {
    console.log(data);
    reset();
  }

  return (
    <>
      <div className="min-h-screen flex flex-col xl:flex-row lg:flex-row  items-center justify-center  bg-linear-to-t from-green-300 via-transparent to-orange-300 ">
        <div className="w-auto mt-15 h-auto p-3 xl:w-145.5 xl:h-150.5 lg:w-145.5 lg:h-150.5 sm:h-160.5 sm:w-xl md:w-xl md:h-140  lg:mt-10 md:mt-20 sm:mt-35  md:rounded-t-2xl xl:rounded-r-none xl:rounded-l-2xl lg:rounded-r-none lg:rounded-l-2xl sm:rounded-t-2xl bg-[radial-gradient(circle,#0b2a31_0%,#071A1F_40%,#000000_100%)]">
          <div className="flex items-center justify-center flex-col gap-3">
            <div className="mt-20">
              <h1 className="text-4xl text-white font-extrabold ">Get In </h1>
              <h1 className="text-4xl text-orange-300 font-extrabold ml-15">
                Touch
              </h1>
            </div>
            <div className="mt-10">
              <h1 className="text-4xl text-orange-300 font-extrabold italic">
                If you have any Query
              </h1>
              <h1 className="text-4xl text-white font-extrabold ml-12 italic">
                Please Contact With Us
              </h1>
            </div>
            <div className="flex flex-col gap-3 mt-9">
              <div className="flex flex-row gap-3 items-center">
                <img src={call} className="h-5 w-5" />
                <h1 className="text-xl text-orange-300 font-bold cursor-pointer">
                  +91 98765 43210
                </h1>
              </div>
              <div className="flex flex-row items-center gap-3">
                <img src={email} className="h-5 w-5 " />
                <h1 className="text-xl text-orange-300 font-bold cursor-pointer">
                  mywebsite@gmail.com
                </h1>
              </div>
              <div className="flex flex-row items-center gap-3">
                <img src={location} className="w-5 h-5 " />
                <p className="text-xl text-orange-300 font-bold">
                  Kolkata, West Bengal{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full p-5 max-w-xl xl:w-140 xl:h-150.5 xl:mt-10 md:mt-0 lg:w-130 md:w-160.5 md:h-140 bg-[radial-gradient(circle,#0b2a31_0%,#071A1F_40%,#000000_100%)] xl:rounded-r-2xl xl:rounded-l-none overflow-y-auto md:rounded-b-2xl">
          <form onSubmit={handleSubmit(SubmitForm)}>
            <div className="flex flex-col gap-2 mt-6">
              <label
                htmlFor="firstName"
                className="text-white text-2xl font-bold"
              >
                First Name*
              </label>
              <input
                id="firstName"
                className="max-w-md h-12 bg-orange-100 text-xl border-2 border-white rounded-xl p-4"
                placeholder="Enter Your First Name"
                {...register("firstName")}
              />
              {errors.firstName && (
                <p className="text-red-600 mt-1 ">{errors.firstName.message}</p>
              )}
            </div>

            <div className="flex flex-col gap-2 mt-3">
              <label
                htmlFor="lastName"
                className="text-white text-2xl font-bold"
              >
                Last Name*
              </label>
              <input
                id="lastName"
                className="max-w-md h-12 bg-orange-100 text-xl border-2 border-white rounded-xl p-4"
                placeholder="Enter Your First Name"
                {...register("lastName")}
              />
              {errors.lastName && (
                <p className="text-red-600 mt-1">{errors.lastName.message}</p>
              )}
            </div>

            <div className="flex flex-col gap-2 mt-3">
              <label
                htmlFor="firstName"
                className="text-white text-2xl font-bold"
              >
                Email*
              </label>
              <input
                id="firstName"
                type="email"
                className="max-w-md h-12 bg-orange-100 text-xl border-2 border-white rounded-xl p-4"
                placeholder="Enter Your Email"
                {...register("email")}
              />
              {errors.email && (
                <p className="text-red-600 mt-1">{errors.email.message}</p>
              )}
            </div>

            <div className="flex flex-col gap-2 mt-3">
              <label
                htmlFor="message"
                className="text-white text-2xl font-bold"
              >
                Message*
              </label>
              <textarea
                id="message"
                rows={10}
                cols={23}
                className="max-w-md h-21 bg-orange-100 text-xl border-2 border-white rounded-xl p-4"
                placeholder="Explain your Problem "
                {...register("message")}
              />
              {errors.message && (
                <p className="text-red-500 mt-1 ">{errors.message.message}</p>
              )}
            </div>

            <div className="flex flex-row gap-5 items-center justify-center mt-6 xl:mr-30 mb-5">
              <button
                className="w-20 h-10 cursor-pointer bg-orange-300 text-xl text-black font-bold rounded-2xl"
                type="button"
                onClick={() => reset()}
              >
                Reset
              </button>

              <button className="w-20 h-10  cursor-pointer bg-orange-300 text-xl text-black font-bold rounded-2xl">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Contact;
