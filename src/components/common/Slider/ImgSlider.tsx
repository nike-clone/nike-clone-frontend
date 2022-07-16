import React from 'react';

interface Prop {
  imgPath: string;
}

const ImgSlider = ({ imgPath }: Prop): JSX.Element => {
  return <img src={imgPath} alt="blacks" />;
};

export default ImgSlider;
