"use client";
import React, { useState } from "react";
import { Menu } from "./ui/navbar-menu";
import { cn } from "@/lib/utils";
import { ThemeToggler } from "./ThemeToggler";
import NavItem from "./NavItem";
import Link from "next/link";
import Image from "next/image";
import { Button } from "./ui/button";
import { useSelector } from "react-redux";

const navItems = [
  {
    item: "Features",
    id: "features",
  },
  {
    item: "Integrations",
    id: "integrations",
  },
  {
    item: "Pricing",
    id: "pricing",
  },
];

export function NavbarDemo() {
  return (
    <div className="relative w-full flex items-center justify-center">
      <Navbar className="top-2" />
    </div>
  );
}

function Navbar({ className }: { className?: string }) {
  const authStatus = useSelector((state: any) => state.auth.status);
  const [active, setActive] = useState<string | null>(null);
  const logoutHandler = (e: React.MouseEvent) => {
    e.preventDefault();
    console.log("Logging out");
  };
  return (
    <div
      className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50", className)}
    >
      <Menu setActive={setActive}>
        <Link className="hidden md:block pointer-events-none" href={`/`}>
          <Image
            alt="logo"
            src="/logo-full.png"
            width={50}
            height={50}
            className="rounded-full border border-black pointer-events-none"
          />
        </Link>
        {navItems.map((navItem, index) => (
          <NavItem
            key={index}
            item={navItem.item}
            active={active}
            setActive={setActive}
            id={navItem.id}
          />
        ))}
        {!authStatus ? (
          <div className="flex lg:flex-row space-x-2 space-y-1 sm:flex-col items-center justify-between">
            <Button
              variant={"ghost"}
              className="px-4 py-2 text-center items-center border border-gray-400 rounded-md"
            >
              <Link href={"/sign-in"}>Sign In</Link>
            </Button>
            <Button className="px-4 py-2 text-center items-center border border-gray-400 rounded-md">
              <Link href={"/sign-up"}>Sign Up</Link>
            </Button>
          </div>
        ) : (
          <div className="flex lg:flex-row space-x-2 space-y-1 sm:flex-col items-center justify-between">
            <Button
              className="border boder-gray-200"
              onClick={logoutHandler}
              variant={"ghost"}
            >
              Logout
            </Button>
          </div>
        )}
        <ThemeToggler />
      </Menu>
    </div>
  );
}
