import { css } from '@emotion/react';
import { MouseEventHandler } from 'react';

interface ButtonProps {
  text: string;
  width: number | string;
  paddingX: number;
  paddingY: number;
  border?: string;
  backgroundColor: string;
  marginX: number;
  marginY: number;
  color: string;
  type: 'submit' | 'button';
  onClick?: MouseEventHandler<HTMLButtonElement>;
}

const Button = ({
  text,
  width,
  paddingX,
  paddingY,
  backgroundColor,
  border,
  color,
  type,
  onClick,
  marginX,
  marginY,
}: ButtonProps) => {
  return (
    <button
      type={type}
      onClick={onClick}
      css={css`
        background-color: ${backgroundColor};
        color: ${color};
        width: ${width}px;
        padding: ${paddingY}px ${paddingX}px;
        text-align: center;
        border-radius: 6px;
        font-weight: 500;
        margin: ${marginY}px ${marginX}px;
      `}
    >
      {text}
    </button>
  );
};

export default Button;
