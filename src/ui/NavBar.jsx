/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "./Logo";
import Btn from "./Btn";
import BurgerIcon from "./BurgerIcon";
import PromoCard from "./PromoCard";

const Promocard = {
  promocard1: {
    items: [
      {
        id: 0,
        title: "Designers",
        desc: "Create accessible designs in record time right in Figma & Sketch.",
        to: "/for-designers",
      },
      {
        id: 1,
        title: "Product Managers",
        desc: "Manage accessibility in real-time across all your projects.",
        to: "/for-product-managers",
      },
      {
        id: 2,
        title: "Developers",
        desc: "Test and audit your code from early implementation to live product.",
        to: "/for-developers",
      },
      {
        id: 3,
        title: "Compliance Managers",
        desc: "Monitor, manage and audit your accessibility posture in one place",
        to: "/for-compliance-managers",
      },
    ],
    linkCard: {
      img: "https://images.getstark.co/marketing/accessibility-posture-white-paper/white-paper-callout.png?updatedAt=1709743608630",
      title: "Read our new white paper",
      desc: "Managing a modern accessibility posture and growing accessibility maturity at any scale",
      to: "/stark-whitepaper",
    },
  },
  promocard2: {
    items: [
      {
        id: 0,
        title: "Blog",
        desc: "Read about the latest updates to Star and articles from out team.",
        to: "/blog",
      },
      {
        id: 1,
        title: "Library",
        desc: "Learn about all things accessiblity and inclusive design.",
        to: "/library",
      },
      {
        id: 2,
        title: "The WCAG Explained",
        desc: "Simple explanations of every WCAG criteria.",
        to: "/wcag-explained",
      },
      {
        id: 3,
        title: "Support Center",
        desc: "Find answers to your questions plus tips and tricks on how to use Stark.",
        to: "/support",
      },
      {
        id: 4,
        title: "Community",
        desc: "Join more that 3,500 accessibility folks from around the world.",
        to: "/community",
      },
      {
        id: 5,
        title: "Stark White Paper",
        desc: "Managing and growing your accessibility posture at any scale.",
        to: "/stark-whitepaper",
      },
    ],
    linkCard: {
      img: "https://res.cloudinary.com/stark-lab/image/upload/v1711412084/medium_Header_60a6fb72ce.png",
      title:
        "Introducting Sidekick V2 and Stark Premium to boost your design and development workflow",
      desc: "Read more on the blog",
      to: "/blog/introducing-sidekick-v2-and-stark-premium",
    },
  },
};

let coords = {};
export default function NavBar() {
  const [showPromoCard, setShowPromoCard] = useState(false);
  function handlePromoCard(card, show) {
    setShowPromoCard(show);
    coords.top = "115%";
    coords.left = "0px";
    coords.card = card;
  }
  return (
    <nav className="mb-4 flex w-full items-center justify-between px-4">
      <div className="flex grow items-center">
        <Btn type="custom" className="mr-4 justify-self-start" to="/">
          <Logo />
        </Btn>
        <PageNav
          handlePromoCard={handlePromoCard}
          showPromoCard={showPromoCard}
        />
      </div>
      <div className="flex justify-self-end sm:ml-4 sm:grow-0">
        <Btn type="white">Start Free trial</Btn>
        <BurgerIcon />
      </div>
    </nav>
  );
}

function PageNav({ handlePromoCard, showPromoCard }) {
  return (
    <div className="relative hidden grow desktop:block">
      <ul
        className="flex flex-row justify-between gap-x-4 text-white"
        dir="ltr"
      >
        <li className="relative">
          <button
            className="flex h-8 items-center whitespace-nowrap rounded-md border-2 border-transparent px-2 align-middle text-sm font-black uppercase tracking-[1.12px] hover:border-white focus:border-white"
            onMouseEnter={(e) => handlePromoCard("promocard1", true)}
            onMouseLeave={(e) => handlePromoCard("promocard1", false)}
          >
            Use Cases{" "}
            <svg
              width="12"
              height="12"
              viewBox="0 0 12 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="ml-1"
            >
              <path
                d="M6.79669 8.0716C6.41769 8.6428 5.58231 8.6428 5.20331 8.0716L3.16242 4.9957C2.73821 4.35637 3.19436 3.5 3.95911 3.5L8.04089 3.5C8.80564 3.5 9.26179 4.35637 8.83758 4.9957L6.79669 8.0716Z"
                fill="currentColor"
              ></path>
            </svg>
          </button>
        </li>
        <li>
          <a
            className="nav:hover:border-white nav:focus:border-white flex h-8 items-center whitespace-nowrap rounded-md border-2 border-transparent px-2 align-middle text-sm font-black uppercase tracking-[1.12px] transition-colors"
            href="/pricing/"
          >
            Pricing
          </a>
        </li>
        <li>
          <a
            className="nav:hover:border-white nav:focus:border-white flex h-8 items-center whitespace-nowrap rounded-md border-2 border-transparent px-2 align-middle text-sm font-black uppercase tracking-[1.12px] transition-colors"
            href="/support/"
          >
            Support
          </a>
        </li>
        <li>
          <button
            className="flex h-8 items-center whitespace-nowrap rounded-md border-2 border-transparent px-2 align-middle text-sm font-black uppercase tracking-[1.12px] hover:border-white focus:border-white"
            onMouseEnter={(e) => handlePromoCard("promocard2", true)}
            onMouseLeave={(e) => handlePromoCard("promocard2", false)}
          >
            Resources{" "}
            <svg
              width="12"
              height="12"
              viewBox="0 0 12 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="ml-1"
            >
              <path
                d="M6.79669 8.0716C6.41769 8.6428 5.58231 8.6428 5.20331 8.0716L3.16242 4.9957C2.73821 4.35637 3.19436 3.5 3.95911 3.5L8.04089 3.5C8.80564 3.5 9.26179 4.35637 8.83758 4.9957L6.79669 8.0716Z"
                fill="currentColor"
              ></path>
            </svg>
          </button>
        </li>
        <li className="ml-auto justify-self-end">
          <a
            className="flex h-8 items-center whitespace-nowrap rounded-md border-2 border-transparent px-2 align-middle text-sm font-black uppercase tracking-[1.12px] hover:border-white focus:border-white"
            href="https://account.getstark.co/sign-in"
          >
            Log in
          </a>
        </li>
      </ul>
      {showPromoCard && (
        <PromoCard
          card={Promocard[coords.card]}
          coords={coords}
          handlePromoCard={handlePromoCard}
        />
      )}
    </div>
  );
}
