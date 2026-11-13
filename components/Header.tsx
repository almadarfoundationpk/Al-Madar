
"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

const links = [
  ["About", "/about"],
  ["Our Work", "/our-work"],
  ["Our Team", "/team"],
  ["Impact", "/impact"],
  ["Get Involved", "/get-involved"]
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="site-header">
      <div className="nav-wrap">
        <Link
          href="/"
          className="brand"
          onClick={() => setOpen(false)}
        >
          <Image
            src="/almadar-images/logo.png.png"
            alt="Al-Madar Foundation"
            width={52}
            height={52}
            priority
            style={{ objectFit: "contain" }}
          />
          <span>
            <b>AL-MADAR</b>
            <small>FOUNDATION</small>
          </span>
        </Link>

        <button
          className="menu-toggle"
          onClick={() => setOpen(!open)}
          aria-label="Toggle navigation"
        >
          ☰
        </button>

        <nav className={open ? "nav-links open" : "nav-links"}>
          {links.map(([label, href]) => (
            <Link
              key={href}
              href={href}
              onClick={() => setOpen(false)}
            >
              {label}
            </Link>
          ))}

          <Link
            href="/donate"
            className="nav-donate"
            onClick={() => setOpen(false)}
          >
            Donate
          </Link>
        </nav>
      </div>
    </header>
  );
}
