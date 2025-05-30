type PlaneBoxProps = {
  side: 'left' | 'right';
  offset?: string;
  top?: string;
};

const PlaneBox = ({ side, offset = '80px', top }: PlaneBoxProps) => {
  const style: React.CSSProperties = {
    [side]: offset,
    ...(top
      ? { top }
      : { top: '50%', transform: 'translateY(-50%)' }), // center vertically if no top
  };

  return (
    <div className="hidden lg:flex absolute w-32 h-24 bg-white rounded-2xl shadow-lg items-center justify-center" style={style}>
      <img src="/assets/plane.png" className="w-full h-auto object-contain"/>
    </div>
  );
};

export default PlaneBox;
