import dataTestids from './dataTestids';

type Props = {
  src: string;
  width?: number;
  height?: number;
};

function Image({ src, width = undefined, height = undefined }: Props) {
  return <img data-testid={dataTestids.root} src={src} width={width} height={height} alt="todo" />;
}

export default Image;
export { dataTestids };
