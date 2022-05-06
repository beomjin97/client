import React from "react";
import styled, { css } from "styled-components";

interface propsType {
  url: string;
  silderCount: number;
}

const ImageBox = styled.div<{ sliderCount: number }>`
  width: 142px;
  height: 134px;
  background-color: #e5e5e5;
  margin: 0 14px 0 0;
  flex-shrink: 0;
  ${({ sliderCount }) =>
    sliderCount === 1 &&
    css`
      transform: translateX(-156px);
    `}
  ${({ sliderCount }) =>
    sliderCount === 2 &&
    css`
      transform: translateX(-312px);
    `}
  transition: 1s;
`;

const MyImg = styled.img`
  width: 142px;
  height: 134px;
  object-fit: contain;
`;

export default function ImageContainer({
  url,
  silderCount,
}: propsType): JSX.Element {
  return (
    <ImageBox sliderCount={silderCount}>
      <MyImg src={url} alt={"필요할까?"} />
    </ImageBox>
  );
}
