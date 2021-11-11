import { ComponentType, FC, HTMLAttributes, ReactNode } from 'react';

interface Props {
  children: ReactNode[] | ReactNode;
  el?: ComponentType<HTMLAttributes<HTMLElement>>;
}

const Container: FC<Props> = ({ children, el: Component = 'div' }) => {
  console.log(Component);

  return <Component className="px-6 m-auto max-w-8xl">{children}</Component>;
};

export default Container;
