type OptionalProps = {
  color: string;
  subText: string;
};

type Props = {
  title: string;
} & Partial<OptionalProps>;

const defaultProps: OptionalProps = {
  color: 'red',
  subText: 'sub text',
};

export const Card: React.FC<Props> = ({ title, color, subText }) => {
  return (
    <div style={{ color }}>
      <h2>{title}</h2>
      <p>{subText}</p>
    </div>
  );
};

Card.defaultProps = defaultProps;