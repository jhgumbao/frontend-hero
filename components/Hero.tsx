import ArrowWithTop from '@/components/ArrowWithTop';
import VisitNowPanel from '@/components/VisitNowPanel';
import TrustpilotBadge from '@/components/TrustpilotBadge';
import Navbar from '@/components/Navbar';
import PlaneBox from '@/components/PlaneBox';

const Hero = () => {
  return (
    <div className="h-screen flex flex-col bg-gradient-to-b from-[#FFA500] to-[#AB6F02] relative overflow-hidden">
      {/* fades */}
      <div className="absolute top-0 left-0 w-60 h-full bg-gradient-to-r from-[#FFA500]/40 to-transparent z-20 pointer-events-none" />
      <div className="absolute top-0 right-0 w-60 h-full bg-gradient-to-l from-[#FFA500]/40 to-transparent z-20 pointer-events-none" />

      {/* navbar */}
      <div className="h-[64px] shrink-0 z-50">
        <Navbar />
      </div>

      {/* planes */}
      <PlaneBox side="left" offset="-40px"/>
      <PlaneBox side="right" offset="25px" />
      <PlaneBox side="right" offset="-55px" top="20%" />

      {/* main content */}
      <div className="flex-1 flex items-center justify-center px-4 pt-12 lg:pt-10 z-10">
        <div className="flex flex-col lg:flex-row items-center justify-center gap-6 w-full">

          {/* main panel */}
          <div className="flex flex-col items-center justify-center text-center gap-4 max-w-md w-full order-1 lg:order-2 z-10 lg:z-0">
            <VisitNowPanel />
            <TrustpilotBadge />
          </div>

          {/* circled arrows */}
          <div className="flex justify-center items-center order-2 lg:order-1">
            <ArrowWithTop />
          </div>
        </div>
      </div>

      {/* bottom yello */}
      <div className="absolute bottom-0 w-full h-[25vh] bg-[#FFD149] z-0" />
    </div>
  );
};

export default Hero;
