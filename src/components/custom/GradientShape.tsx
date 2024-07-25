const GradientShape = ({ className }: { className?: string }) => {
  return (
    <div
      className={`absolute w-[60%] h-[200px] xl:h-[350px] blur-2xl ${
        className && className
      }`}
      style={{
        transform: "skew(-10deg, -5deg)",
        background:
          "linear-gradient(15.75deg, rgb(108, 34, 189) 0%,rgb(139, 37, 187) 9.091%,rgb(165, 43, 185) 18.182%,rgb(188, 52, 183) 27.273%,rgb(208, 64, 181) 36.364%,rgb(230, 69, 165) 45.455%,rgb(245, 81, 149) 54.545%,rgb(255, 97, 136) 63.636%,rgb(255, 121, 110) 72.727%,rgb(255, 150, 91) 81.818%,rgb(245, 178, 85) 90.909%,rgb(225, 205, 96) 100%); opacity: 0.4",
      }}
    ></div>
  );
};

export default GradientShape;
