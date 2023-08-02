"use client";

import { useSession, signIn, signOut } from "next-auth/react";
import { useState, useEffect } from "react";

import Image from "next/image";
import Link from "next/link";

const Nav = () => {
  const { data: session } = useSession();
  const [toggleDropdown, setToggleDropdown] = useState(false);

  return (
    <nav>
      <Link href="/" className="logo__container">
        <Image
          src="/assets/logo.png"
          alt="BizLinks logo"
          width={80}
          height={50}
          className="logo__img "
        />
        <p className="logo__text blue__gradient">BizLinks</p>
      </Link>

      {/* DESKTOP MENU */}
      {session?.user ? (
        <div className="nav__menu nav__desktop-menu">
          <Link href="/create-review-link" className="blue__btn">
            Create Link
          </Link>

          <button
            type="button"
            onClick={() =>
              signOut({
                callbackUrl: `${window.location.origin}`,
              })
            }
            className="outline__btn hover-underline-animation"
          >
            Sign Out
          </button>

          <Link href="/profile">
            <Image
              src={session?.user.image || "/assets/profile-placeholder.jpeg"}
              alt="Profile photo"
              width={37}
              height={37}
              className="nav__profile-img"
            />
          </Link>
        </div>
      ) : (
        <button onClick={() => signIn()} className="blue__btn">
          Sign in
        </button>
      )}

      {/* MOBILE MENU */}
      {session?.user ? (
        <div className="nav__menu nav__mobile-menu">
          <div className="dropdownMenu__container">
            <Image
              src={session?.user.image || "/assets/profile-placeholder.jpeg"}
              alt="Profile photo"
              width={37}
              height={37}
              className="nav__profile-img"
              onClick={() => setToggleDropdown((prev) => !prev)}
            />

            {toggleDropdown && (
              <ul className="dropdownMenu">
                <li>
                  <Link
                    href="/profile"
                    onClick={() => setToggleDropdown(false)}
                  >
                    My Profile
                  </Link>
                </li>

                <li>
                  <Link
                    href="/create-review-link"
                    onClick={() => setToggleDropdown(false)}
                  >
                    Create Link
                  </Link>
                </li>

                <li>
                  <button
                    type="button"
                    onClick={() => {
                      signOut({
                        callbackUrl: `${window.location.origin}`,
                      });
                      setToggleDropdown(false);
                    }}
                    className="blue__btn"
                  >
                    Sign Out
                  </button>
                </li>
              </ul>
            )}
          </div>
        </div>
      ) : null}
    </nav>
  );
};

export default Nav;
