import Text from '@/components/text/Text';
import dataTestids from './dataTestids';

type Props = {
  href: string;
  copy?: string;
};

function LinkText({ href, copy }: Props) {
  return (
    <a data-testid={dataTestids.root} href={href} target="_blank" rel="noreferrer">
      <Text copy={copy || href} color="#22c55e" size={16} underline />
    </a>
  );
}

export default LinkText;
export { dataTestids };
