const VisitNowPanel = () => {
  const handleClick = () => {
    console.log("John Henry Gumbao");
  };

  return (
    <div className="bg-white rounded-3xl shadow-2xl py-10 text-center max-w-xl w-full relative z-0 lg:z-10">
      <h1 className="font-black text-[35px] leading-none tracking-[-0.03em] text-center mb-5 font-extrabold">
        Remarkable <br/>new journeys on <br/> every flight
      </h1>

      <button onClick={handleClick} className=" bg-gradient-to-r from-orange-400 lg:w-[60%] w-[80%] p-3 to-orange-500 text-white font-extrabold text-[20px] leading-none tracking-tight text-center  rounded-2xl shadow-lg hover:scale-105 transition-all">
        Visit Now <span className="ml-2">→</span>
      </button>

      <p className="text-sm mt-4 mb-10">
        No delay in your current progress
      </p>
    </div>
  );
};

export default VisitNowPanel;
