import { FC, ReactNode } from 'react';
import s from './Marquee.module.css';
import MarqueeCp from 'react-fast-marquee';

interface Props {
  children: ReactNode[];
}

const Marquee: FC<Props> = ({ children }) => {
  return (
    <div className={s.root}>
      <MarqueeCp speed="50" gradient={false}>
        <div className={s.container}>{children}</div>
      </MarqueeCp>
    </div>
  );
};

export default Marquee;
