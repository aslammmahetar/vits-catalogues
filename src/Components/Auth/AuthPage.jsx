"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { useRouter, useSearchParams } from "next/navigation";
import { getGeoLocation } from "../../lib/utils";
import LoginForm from "./Login/LoginForm";
import RegisterForm from "./Register/RegisterForm";
import { toast } from "react-hot-toast";
import logo from "../../app/logo.png";
import { useAuthStore } from "@/store/useAuthStore";
import Link from "next/link";
import { ArrowLeftCircle } from "lucide-react";

export default function AuthPage() {
  const searchParams = useSearchParams();
  const signin = useAuthStore((store) => store.signin);
  const signup = useAuthStore((store) => store.signup);
  const router = useRouter();
  const [loginData, setLoginData] = useState({ mobileNo: "", password: "" });
  const [isLogin, setIsLogin] = useState(true);
  const [latlng, setLatLng] = useState("");
  const [registerData, setRegisterData] = useState({
    name: "",
    email: "",
    password: "",
    mobileNo: "",
    firmName: "",
    address: "",
    city: "",
    state: "",
    pincode: "",
    businessType: 1,
    referredBy: "",
    latlng,
  });

  useEffect(() => {
    getGeoLocation()
      .then((loc) => setLatLng((prev) => (prev = `${loc.lat}, ${loc.lng}`)))
      .catch(console.error);
    if (searchParams.get("register") === "1") {
      setIsLogin(false);
    }
  }, []);

  useEffect(() => {
    if (latlng) {
      setRegisterData((prev) => ({ ...prev, latlng }));
    }
  }, [latlng]);

  const handleLoginChange = (e) =>
    setLoginData({ ...loginData, [e.target.name]: e.target.value });

  const handleRegisterChange = (e) =>
    setRegisterData({ ...registerData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();

    const reqBody = isLogin ? loginData : registerData;
    const auth = isLogin ? await signin(reqBody) : await signup(reqBody);
    console.log(auth);
    if (auth.status === "fail" || auth.status === 500) {
      toast.error(auth.message);
      return;
    }

    if (!isLogin) {
      toast.success(auth.message);
      setIsLogin(true);
    } else {
      toast.success(auth.message);
      router.push(`/${auth.user?.slug}/admin`);
    }
  };

  return (
    <div className="flex min-h-screen w-full from-green-50 to-white">
      <div className="hidden md:flex w-1/2 items-center justify-center bg-green-100 p-6">
        <div className="max-w-md text-center">
          <Image
            src={logo}
            width={300}
            height={300}
            alt="hero image"
            className="mx-auto"
          />
          <h2 className="text-3xl font-bold text-green-800 mt-6">
            Simplify your Product Sharing
          </h2>
          <p className="text-green-700 mt-3 text-sm">
            Create your online catalogue and share it instantly with customers —
            no more sending product photos manually!
          </p>
        </div>
      </div>
      {isLogin ? (
        <LoginForm
          handleChange={handleLoginChange}
          handleSubmit={handleSubmit}
          loginData={loginData}
          setIsLogin={setIsLogin}
        />
      ) : (
        <RegisterForm
          handleRegisterChange={handleRegisterChange}
          handleSubmit={handleSubmit}
          registerData={registerData}
          setIsLogin={setIsLogin}
        />
      )}
      <Link href={"/"} className="fixed top-5 left-5">
        <ArrowLeftCircle className="w-9 h-9 text-green-800 bg-white p-1 rounded-2xl" />
      </Link>
    </div>
  );
}
