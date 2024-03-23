"use client";

import Imagetotext from "../components/Imagetotext";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Features from "../components/Features";
import Pricing from "../components/Pricing";
import UserInfo from "../components/UserInfo";
import { signOut, useSession } from "next-auth/react";
import { useRouter } from 'next/navigation';
import React, { useEffect ,useState} from 'react';


export default function() {
  const { status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status !== "authenticated") {
      router.push('/');
    }
  }, [status, router]);

  
  return (  
    <>
      <Navbar />
      <UserInfo/>
      {/* <Imagetotext />
      <Pricing/>
      <Features/> */}
      <Footer />
      {/* <UserInfo/> */}
    </>

  );
}
