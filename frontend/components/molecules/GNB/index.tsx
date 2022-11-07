import { MouseEventHandler } from 'react';
import Button from '../../atoms/Button';
import Span from '../../atoms/Span';
import styles from './styles';

interface GNBProps {
  text: string;
  onClick: MouseEventHandler<HTMLButtonElement>;
}

const GNB = ({ text, onClick }: GNBProps) => {
  return (
    <div css={styles.container}>
      <Span
        text={text}
        width={100}
        backgroundColor={'transparent'}
        color={'#000'}
        weight={700}
      />
      <Button
        text={'로그아웃'}
        width={80}
        paddingX={10}
        paddingY={5}
        backgroundColor={'#D2D2D2'}
        color={'#000'}
        type={'button'}
        onClick={onClick}
        marginX={0}
        marginY={0}
      />
    </div>
  );
};

export default GNB;
