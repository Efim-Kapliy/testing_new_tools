import { FC, PropsWithChildren, useState } from 'react';

export enum CardVariant {
  outlined = 'outline',
  primary = 'primary',
}

interface CardProps extends PropsWithChildren {
  width?: string;
  height?: string;
  variant: CardVariant;
  onClick: (num: number) => void;
}

const Card: FC<CardProps> = ({ width, height, children, variant, onClick }) => {
  const [state, setState] = useState(0);

  return (
    <div
      style={{
        width,
        height,
        border: variant === CardVariant.outlined ? '3px solid purple' : 'none',
        background: variant === CardVariant.primary ? 'lightgrey' : '',
      }}
      onClick={() => onClick(state)}
    >
      {children}
    </div>
  );
};

export default Card;
