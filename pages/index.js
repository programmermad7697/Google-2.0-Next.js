import Head from "next/head";
import Avatar from "../components/Avatar";
import { MicrophoneIcon, ViewGridIcon } from "@heroicons/react/solid";
import { SearchIcon } from "@heroicons/react/outline";
import Image from "next/image";
import Footer from "../components/Footer";
import React, { useRef } from "react";
import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();
  const searchInputRef = useRef(null);

  const search = (e) => {
    e.preventDefault();
    const term = searchInputRef.current.value;

    if (!term) return;

    router.push(`/search?term=${term}`);
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <Head>
        <title>Google 2.0</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Header */}
      <header className="flex w-full p-5 justify-between text-sm text-gray-700">
        {/* left */}
        <div className="flex space-x-4 items-center">
          <a href="https://www.google.co.in/url?sa=t&rct=j&q=&esrc=s&source=webhp&cd=&cad=rja&uact=8&ved=0ahUKEwi91o_w_sH0AhUIpJUCHcB4DBQQkNQCCBY&url=https%3A%2F%2Fabout.google%2F%3Futm_source%3Dgoogle-IN%26utm_medium%3Dreferral%26utm_campaign%3Dhp-footer%26fg%3D1&usg=AOvVaw33zjaJZ_ogw8iPEm4kPGYh">
            <p className="link">About</p>
          </a>
          <a href="https://store.google.com/in/?hl=en-GB">
            <p className="link">Store</p>
          </a>
        </div>

        {/* Right */}
        <div className="flex space-x-4 items-center">
          <a href="https://mail.google.com/mail/&ogbl">
            <p className="link">Gmail</p>
          </a>
          <a href="https://www.google.co.in/imghp?hl=en&ogbl">
            <p className="link">Images</p>
          </a>

          {/* Icon */}
          <ViewGridIcon className="h-10 w-10 p-2 rounded-full hover:bg-gray-100 cursor-pointer" />

          {/* Avatar */}
          <Avatar url="https://lh3.googleusercontent.com/ogw/ADea4I7asICWZEFz2Nuci5t0L3QybUfn7wpzvb56mxNi=s32-c-mo" />
        </div>
      </header>

      {/* Body */}
      <form className="flex flex-col items-center mt-44 flex-grow w-4/5">
        <Image src="/images/google_logo.png" height={100} width={300} />
        <div className="flex w-full mt-5 hover:shadow-lg focus-within:shadow-lg max-w-md rounded-full border border-gray-200 px-5 py-3 items-center sm:max-w-xl lg:max-w-2xl">
          <SearchIcon className="h-5 mr-3 text-gray-500" />

          <input
            ref={searchInputRef}
            type="text"
            className="focus:outline-none flex-grow"
          />

          <MicrophoneIcon className="h-5" />
        </div>

        <div className="flex flex-col w-1/2 space-y-2 justify-center mt-8 sm:space-y-0 sm:flex-row sm:space-x-4">
          <button onClick={search} className="btn">
            Google Search
          </button>

          <a href="https://www.google.com/doodles">
            <button type="button" className="btn">
              I am Feeling Lucky
            </button>
          </a>
        </div>
      </form>

      {/* Footer */}
      <Footer />
    </div>
  );
}
