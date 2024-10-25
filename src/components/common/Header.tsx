// import React from 'react'

import { Link } from "react-router-dom"
import Logo from "./Logo"
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/clerk-react";

function Header() {
  return (
    <nav className="py-4 flex justify-between items-center">
      <Link to={"/"}>
        <Logo />
      </Link>
      <SignedOut>
        <SignInButton />
      </SignedOut>
      <SignedIn>
        <UserButton />
      </SignedIn>
    </nav>
  );
}

export default Header