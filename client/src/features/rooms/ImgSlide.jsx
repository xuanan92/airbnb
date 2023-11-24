/* eslint-disable react/prop-types */
const ImgSlide = ({ image }) => {
  return (
    <>
      <img
        className="object-cover object-center w-auto"
        src={image}
        alt="img"
      />
    </>
  );
};

export default ImgSlide;
