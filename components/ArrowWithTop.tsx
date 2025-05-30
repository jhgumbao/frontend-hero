const ArrowWithTop = () => {
  return (
    <div className="relative w-[400px] h-[400px] sm:w-[480px] sm:h-[480px] md:w-[560px] md:h-[560px] lg:mt-[23px] mt-[-120px] z-0 lg:z-10">
      <img src="/assets/arrow.svg" className="absolute top-[15%] lg:left-[25%] left-[18%] lg:w-[55%] w-[45%]"/>
      <img src="/assets/arrow.svg" className="absolute top-[8%] lg:left-[50%] left-[38%] lg:w-[55%] w-[45%] rotate-180"/>
      <img src="/assets/top.svg" className="absolute lg:w-[90%] w-[70%] lg:top-[25%] top-[30%] lg:left-[30%] left-[20%] z-10"/>
    </div>
  );
};

export default ArrowWithTop;
