"use client";

import Image from "next/image";

export default function Section4() {
  return (
    <section className="relative pro-gradient min-h-screen overflow-x-hidden flex flex-col justify-between">

      <div className="text-center fractul-light text-[#224936] text-3xl sm:text-4xl md:text-5xl leading-tight mt-12">
        Avoid drinking{" "}
        <span className="fractul-medium uppercase">
          <em>pesticides</em>
        </span>
      </div>



      <div className="relative min-h-[600px] px-4 sm:px-6 overflow-x-hidden flex flex-col justify-between">
        <div className="flex-1 flex items-center justify-center">
          <div className="w-full max-w-7xl grid grid-cols-[300px_1fr_300px] items-center">
            {/* Left side */}
            <div className="flex flex-col items-start">
              <Image
                src="/product/s1.png"
                alt="Product"
                width={350}
                height={350}
                className="object-contain"
                priority
              />

              <button className="px-6 py-3 bg-[#224936] text-white font-medium shadow-lg hover:bg-green-800 transition fractul-light text-xl mt-6">
                TRY NOW
              </button>
            </div>

            {/* Center */}
            <div className="relative flex items-center justify-center">
              <Image
                src="/3/product.png"
                alt="Product"
                width={350}
                height={350}
                className="object-contain"
                priority
              />
            </div>

            {/* Right side */}
            <div className="flex items-center justify-center">
              <Image
                src="/product/s2.png"
                alt="Product"
                width={350}
                height={350}
                className="object-contain"
                priority
              />
            </div>
          </div>
        </div>


        <div className="w-full max-w-7xl mx-auto grid grid-cols-[300px_1fr_300px] items-end mb-0">
          <div>
            <p className="raf text-[#224936] text-xl sm:text-3xl md:text-3xl leading-tight">In Hindi,</p>
            <p className="fractul-light text-[#224936] text-3xl sm:text-4xl md:text-2xl leading-tight">
              <em className="fractul-medium">SACHA </em>means
            </p>
          </div>
          <div />
          <div />
        </div>
      </div>


      <div className="relative min-h-[500px] px-4 sm:px-6 overflow-x-hidden flex items-center justify-center">
        {/* Background split into two halves */}
        <div className="absolute inset-0">
          <div className="h-1/2 bg-[#fda71b00]" />
          <div className="h-1/2 bg-[#FDA71B]" />
        </div>

        {/* Centered Text */}
        <h1 className="relative text-5xl sm:text-[285px] font-bold  text-center text-[#224936] fractul-medium uppercase">
          <em>TRUTHFUL</em>
        </h1>
      </div>



      <div className="relative min-h-[400px] bg-[#FDA71B] px-4 sm:px-6 overflow-x-hidden">
        <div className="grid grid-cols-[400px_1fr_400px] items-start h-full max-w-7xl mx-auto">

          {/* Left Side */}
          <div className="max-w-[500px] flex flex-col items-start justify-center space-y-6">
            <p className="text-3xl text-white fractul-light">That’s who we are and<br />
              what we serve</p>

            <p className="text-xl text-white fractul-light flex flex-col items-start justify-center space-y-10 mt-10">
              Well, fun fact:<br />
              The soil should not be sprayed with<br />
              pesticides for atleast 3 years to be<br />
              called ORGANIC
            </p>
          </div>

          {/* Center (Flexible) */}
          <div className="flex items-center justify-center">
           
          </div>

          {/* Right Side */}
          <div className="max-w-[500px] flex flex-col items-start justify-center space-y-6">
            
            <p className="text-3xl text-white fractul-light">
              A blend of <em className="fractul-medium">organically<br />
              grown</em> and mindfully<br />
              hand-picked leaves <br />
            </p>
          </div>

        </div>
      </div>


    






   <section className="relative w-full h-[200px] flex items-center justify-center overflow-hidden bg-transparent mt-[-80px]">


  {/* First marquee (left → right) */}
  <div className="absolute w-full rotate-[-4deg]">
    <div className="whitespace-nowrap flex animate-marquee text-4xl sm:text-5xl font-bold text-[#FDA71B] bg-white fractul-medium uppercase py-4">
      <span className="mx-6">
        100% ORGANIC . ZERO BULLSHIT . 100% ORGANIC . ZERO BULLSHIT .
        100% ORGANIC . ZERO BULLSHIT . 100% ORGANIC . ZERO BULLSHIT .
      </span>
      <span className="mx-6">
        100% ORGANIC . ZERO BULLSHIT . 100% ORGANIC . ZERO BULLSHIT .
        100% ORGANIC . ZERO BULLSHIT . 100% ORGANIC . ZERO BULLSHIT .
      </span>
    </div>
  </div>

  {/* Second marquee (right → left) */}
  <div className="absolute w-full rotate-[4deg]">
    <div className="whitespace-nowrap flex animate-marquee-reverse text-4xl sm:text-5xl font-bold text-[#FDA71B] bg-white fractul-medium uppercase py-4">
      <span className="mx-6">
        100% ORGANIC . ZERO BULLSHIT . 100% ORGANIC . ZERO BULLSHIT .
        100% ORGANIC . ZERO BULLSHIT . 100% ORGANIC . ZERO BULLSHIT .
      </span>
      <span className="mx-6">
        100% ORGANIC . ZERO BULLSHIT . 100% ORGANIC . ZERO BULLSHIT .
        100% ORGANIC . ZERO BULLSHIT . 100% ORGANIC . ZERO BULLSHIT .
      </span>
    </div>
  </div>
</section>





    </section>
  );
}
