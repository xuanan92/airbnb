/* eslint-disable react/prop-types */
const ImgSlide = ({ image }) => {
  return (
    <>
      <img
        className="object-cover object-center w-full h-60"
        src={image}
        alt="img"
      />
    </>
  );
};

export default ImgSlide;
