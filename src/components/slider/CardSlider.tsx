import React, { useEffect, useState } from 'react';
import { StyledContents, StyledLayout, StyledNextButton, StyledPrevButton, StyledSlider } from './CardSlider.styled';
import useWindowSize from '@hooks/useWindowSize';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

export type CardSliderProps = {
  list: any[];
  cardWidth: number;
  sliderRef: any;
  children: React.ReactChild;
};

const CardSlider = (props: CardSliderProps) => {
  const { list, cardWidth, children, sliderRef } = props;
  const windowSize = useWindowSize();
  const [index, setIndex] = useState<number>(1);
  const [count, setCount] = useState<number>(1);
  const [moveWidth, setMoveWidth] = useState<number>(0);
  const maxIndex = list.length;
  const nextIndex = index + count;
  const prevIndex = index - count;
  const cardMargin = 16;
  const nowWidth = cardWidth * count;
  const nowMargin = cardMargin * count;

  const onClickNext = () => {
    if (sliderRef.current) {
      setMoveWidth((prev) => prev + nowWidth + nowMargin);
      setIndex((prev) => prev + count);
    }
  };
  const onClickPrev = () => {
    if (sliderRef.current) {
      setMoveWidth((prev) => prev - nowWidth - nowMargin);
      setIndex((prev) => prev - count);
    }
  };

  useEffect(() => {
    if (sliderRef.current?.clientWidth) {
      setCount(Math.floor(sliderRef.current?.clientWidth / cardWidth));
    }
  }, [windowSize.width]);

  useEffect(() => {
    if (sliderRef.current) {
      sliderRef.current.style.transform = `translateX(-${moveWidth}px)`;
    }
  }, [moveWidth]);

  return (
    <StyledLayout>
      <StyledContents>
        <StyledSlider>
          {prevIndex > 0 && (
            <StyledPrevButton className="arrow" onClick={onClickPrev}>
              <ArrowBackIosNewIcon color="primary" />
            </StyledPrevButton>
          )}
          {children}
          {nextIndex <= maxIndex && (
            <StyledNextButton className="arrow" onClick={onClickNext}>
              <ArrowForwardIosIcon color="primary" />
            </StyledNextButton>
          )}
        </StyledSlider>
      </StyledContents>
    </StyledLayout>
  );
};

export default CardSlider;
