import { css } from '@emotion/react';
import { MouseEventHandler } from 'react';

interface SpanProps {
  text: string;
  width: number | string;
  paddingX?: number;
  paddingY?: number;
  backgroundColor: string;
  color: string;
  weight: number;
  onClick?: MouseEventHandler<HTMLButtonElement>;
}

const Span = ({
  text,
  width,
  paddingX,
  paddingY,
  backgroundColor,
  weight,
  color,
  onClick,
}: SpanProps) => {
  return (
    <span
      onClick={onClick}
      css={css`
        background-color: ${backgroundColor};
        color: ${color};
        width: ${width}px;
        padding: ${paddingY}px ${paddingX}px;
        text-align: center;
        font-weight: ${weight};
      `}
    >
      {text}
    </span>
  );
};

export default Span;
