type UndefinedKeys<T> = {
  [K in keyof T]: undefined extends T[K] ? K : never;
}[keyof T]

type ExtractOptional<T> = Pick<T, Exclude<UndefinedKeys<T>, undefined>>

type Default<T> = Required<ExtractOptional<T>>;

type Props = {
  title: string;
  color?: string;
  subText?: string;
};

const defaultProps: Default<Props> = {
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