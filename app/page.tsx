"use client";
import Image from "next/image";
import React from "react";
import { useEffect } from "react";
import { getCurrentUser } from "@/lib/actions/user.actions";
import { login, logout } from "@/store/AuthSlice";
import { useDispatch } from "react-redux";

const Home = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    const isUserLoggedIn = async () => {
      const user = await getCurrentUser();
      console.log("Found user:", user);
      if (user) {
        dispatch(login(user));
      } else {
        dispatch(logout());
      }
    };
    isUserLoggedIn();
  }, []);

  return (
    <main className="text-center flex flex-col space-y-4 justify-around items-center">
      <h1 className="lg:text-6xl lg:w-[800px] md:w-full sm:text-4xl text-center font-bold">
        Get <span className="text-primary">Testimonials</span> from your
        customers with ease
      </h1>
      <p className="text-gray-400 lg:w-[800px] w-auto">
        I know collecting feedback is difficult, but guess what? We have got you
        covered. With{" "}
        <span className="text-primary font-bold">Testimonials</span>, getting
        reviews has become interesting like never before.
      </p>
      <div className="flex justify-between space-x-10 px-2 sm:px-0 sm:space-y-2">
        <Image
          alt="logo"
          width={387}
          height={100}
          src="/logo-full.png"
          className="rounded-full border border-black pointer-events-none"
        />
      </div>

      <section>Features Section</section>
      <section>Integrations Section</section>
      <section>Pricing Section</section>
      <section>Footer</section>
    </main>
  );
};

export default Home;
