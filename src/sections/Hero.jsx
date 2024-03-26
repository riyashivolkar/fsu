import { img1 } from "../assets/images";
const Hero = () => {
  return (
    <section className="relative ">
      <img src={img1} alt="" className="block object-contain w-full h-auto " />
      <div className="absolute inset-0 flex flex-col items-center justify-center text-white ">
        <div className="text-[10px] tracking-widest md:text-xl sm:text-lg py-1">
          FUTURE STATE
        </div>
        <div className="text-base font-bold tracking-widest md:text-3xl sm:text-xl">
          UNIVERSITY
        </div>
        <div className="mb-5 text-[9px]  md:text-base sm:text-sm">
          Learn | Assess | Connect | Build Careers
        </div>
      </div>
    </section>
  );
};

export default Hero;
