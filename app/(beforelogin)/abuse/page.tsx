"use client";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";

const Page = () => {
  const router = useRouter();
  useEffect(() => {
    alert("정상적인 접근이 아닙니다.");
    router.push("/");
  }, []);

  return <div></div>;
};

export default Page;
