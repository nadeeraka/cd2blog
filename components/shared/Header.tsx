import Link from "next/link";
import React from "react";
import Image from "next/image";
import Logo from "../../public/c.png";
import { SignIn, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import { Button } from "../ui/button";

const Header = () => {
  return (
    <div className="w-full border-b">
      <div className="wrapper flex justify-between items-center">
        <Link href={"/"} className="w-36">
          <div className="flex items-center">
            <Image src={Logo} alt="logo" width={50} height={50} />
            <h1 className="text-2xl font-bold text-emerald-400">D2</h1>
            <h1 className="text-2xl font-bold text-emerald-400">Blog</h1>
          </div>
        </Link>

        <SignedIn>
          <nav className="md:flex-between hidden w-full max-w-xs">
            {/* <NavItems /> */}
          </nav>
        </SignedIn>

        <div className="flex w-32 justify-end gap-3">
          <SignedIn>
            <UserButton afterSignOutUrl="/" />
            {/* <MobileNav /> */}
          </SignedIn>
          <SignedOut>
            <Button asChild className="rounded-full" size="lg">
              <Link href="/sign-in">Login</Link>
            </Button>
          </SignedOut>
        </div>
      </div>
    </div>
  );
};

export default Header;
