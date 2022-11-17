import { css } from '@emotion/react';

const li = css`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;

  border-bottom: 1px solid #d2d2d2;
`;

const userName = css`
  width: 100px;
`;
const styles = { li, userName };

export default styles;
