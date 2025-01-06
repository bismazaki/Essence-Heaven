import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaFacebook, FaInstagramSquare, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <footer className="text-gray-600 body-font mt-auto bg-gray-100">
        <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
          <Link
            href="/"
            className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900"
          >
            <Image src="/logo1.png" alt="Essence Heaven Logo" width={50} height={50} />
            <span className="ml-3 text-xl">Essence Heaven</span>
          </Link>
          <p className="text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">
            © 2025 Essence Heaven —{" "}
            <a
              href="/"
              className="text-gray-600 ml-1"
              rel="noopener noreferrer"
              target="_blank"
            >
              @bismaZaki
            </a>
          </p>
          <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
            <Link href="/" className="ml-3 text-gray-500">
              <FaFacebook size={30} />
            </Link>
            <Link href="/" className="ml-3 text-gray-500">
              <FaInstagramSquare size={30} />
            </Link>
            <Link href="/" className="ml-3 text-gray-500">
              <FaTwitter size={30} />
            </Link>
          </span>
        </div>
      </footer>
    </>
  );
};

export default Footer;
