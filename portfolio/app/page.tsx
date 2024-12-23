"use client";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

export default function Home() {
  return (
    <>
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <div>Initial set up</div>
      </main>

      <div className="absolute top-[38rem] right-[32rem] w-[50%] h-[50%]">
        <DotLottieReact
          src="https://lottie.host/74e40dfd-d6ff-405a-b45c-fb9be16eb819/VFpuJ5DiXA.lottie"
          loop
          autoplay
        />
      </div>
    </>
  );
}
