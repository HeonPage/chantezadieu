import Link from "next/link";
import Image from "next/image";
import React from "react";
const ContactBox = () => {
  return (
    <div className="w-full object-cover">
      <Link href="/contact/support">
        <article className="relative isolate flex flex-col justify-end overflow-hidden rounded-md px-8 pb-8 pt-40 h-[232px] tablet-size:h-20">
          <Image
            src="/bg/bg05.jpg"
            alt="University of Southern California"
            className="absolute inset-0 h-full w-full object-cover"
            width={500}
            height={250}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40"></div>
          <h3 className="z-10 mt-3 text-3xl font-bold text-white text-right">
            {"후원 안내"}
          </h3>
        </article>
      </Link>
    </div>
  );
};

export default ContactBox;
