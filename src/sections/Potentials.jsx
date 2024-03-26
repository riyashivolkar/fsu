import { img2 } from "../assets/images";

const Potentials = () => {
  const thumbnailUrl = `https://img.youtube.com/vi/-DXa8dyqBM8&t/QUALITY.jpg`;

  return (
    <section className="relative ">
      <img src={img2} alt="" className="block object-contain w-full h-auto " />

      <div className="absolute inset-0 flex flex-col items-center justify-between text-white ">
        <div className="">
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

        <img
          src={thumbnailUrl}
          alt="YouTube Thumbnail"
          width={20}
          height={20}
        />

        <div>
          <div className="text-[10px] tracking-widest md:text-xl sm:text-lg py-1">
            ....
          </div>
          <div className="text-base font-bold tracking-widest md:text-3xl sm:text-xl">
            00
          </div>
        </div>
      </div>
    </section>
  );
};

export default Potentials;
