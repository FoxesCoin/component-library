import { css } from 'styled-components';

import { COLORS, Color } from 'styles/color';
import { FontSize, FONT_SIZES } from 'styles/font-size';

interface Flex {
  gap?: number;
}

export interface Typography {
  color?: Color;
  fontSize?: FontSize;
}

export const cssGap = css<Flex>`
  gap: ${(props) => props.gap ?? 8}px;
`;

export const cssText = css<Typography>`
  ${(props) => (props.color ? `color: ${COLORS[props.color]};` : '')}
  ${(props) =>
    props.fontSize ? `font-size: ${FONT_SIZES[props.fontSize]};` : ''}
`;

export const cssAbsoluteCenter = css`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
`;

export const cssAbsoluteCentralize = css`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const cssFlexCenter = css`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const cssFullSize = css`
  min-height: 100%;
  width: 100%;
`;

export const cssFullSizeAbsolute = css`
  top: 0;
  bottom: 0;
  width: 100%;
  position: absolute;
`;

export const cssFullSizeFixed = css`
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  position: fixed;
`;

export const cssRound = (size: number) => css`
  width: ${size}px;
  height: ${size}px;
  border-radius: 50%;
`;
