import React, { useState } from "react";
import { estate_keys } from "../assets/images";
import { BsEnvelopePaper } from "react-icons/bs";
import PhoneInput from "react-phone-number-input";
import flag from "react-phone-number-input/flags";
import "react-phone-number-input/style.css";
import flags from "react-phone-number-input/flags";

export default function Contact() {
  const [phone, setPhone] = useState("");
  return (
    <main className="flex flex-col relative">
      <div className="bg-main relative min-h-[65vh] h-[70vh] px-4">
        <img
          src={estate_keys}
          alt=""
          className="absolute top-0 left-0 w-full h-full object-cover opacity-50"
        />
        <div className="relative py-10 container mx-auto text-white flex flex-col justify-center h-full gap-2">
          <h3 className="text-3xl md:text-4xl font-bold">
            Contact Airspace Support
          </h3>
          <p className="text-base md:text-lg">
            We are always online and actively waiting for your message
          </p>
        </div>
      </div>
      
      <div className="relative px-4 -mt-10 md-20 z-20">
        <form className="bg-white container mx-auto shad p-5 rounded-lg grid md:grid-cols-2 w-full max-w-screen-md gap md:gap-5">
          <div className="flex items-center gap-4 md:col-span-2">
            <div className="bg-orange-400 rounded-full h-10 w-10 grid place-items-center text-main text-xl md:text-3xl md:h-16 md:w-16">
              <BsEnvelopePaper />
            </div>
            <h3 className="text-2xl md:text-3xl font-bold text-main">
              Send us a message
            </h3>
          </div>
          <input
            type="text"
            placeholder="michael"
            required
            className="rounded-md border-2 border-slate-200 py-2 px-4 text-sm md-text-base outline-none hover:border-main"
          />
          <input
            type="text"
            placeholder="michael"
            required
            className="rounded-md border-2 border-slate-200 py-2 px-4 text-small md-text-base outline-none hover:border-main"
          />
          <input
            type="email"
            placeholder="michaelbrentford@email.com"
            required
            className="rounded-md border-2 border-slate-200 py-2 px-4 text-small md-text-base outline-none hover:border-main"
          />
          <div className="rounded-md border-2 border-slate-200 py-2 px-4 text-small md-text-base outline-none hover:border-main">
            <PhoneInput
              flags={flags}
              defaultCountry="NG"
              international
              onChange={(value) => setPhone(value)}
              value={phone}
            />
          </div>
          <textarea
            name=""
            id=""
            cols="30"
            rows="10"
            required
            placeholder="Enter your message"
            className="rounded-md border-2 border-slate-200 py-2 px-4 text-small md-text-base outline-none hover:border-main md:col-span-2"
          ></textarea>
          <button
            type="submit"
            className="rounded-full w-max  py-2 px-4 text-small md-text-base outline-none bg-main text-white"
          >
            Send Message
          </button>
        </form>
      </div>
    </main>
  );
}
