import styles from './styles';

const Label = ({ htmlFor, text }: { htmlFor: string; text: string }) => {
  return (
    <label css={styles.label} htmlFor={htmlFor}>
      {text}
    </label>
  );
};

export default Label;
