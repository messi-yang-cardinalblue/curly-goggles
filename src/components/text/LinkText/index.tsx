import Text from '@/components/text/Text';
import dataTestids from './dataTestids';

type Props = {
  href?: string;
};

function LinkText({ href = '' }: Props) {
  return (
    <a data-testid={dataTestids.root} href={href} target="_blank" rel="noreferrer">
      <Text copy={href} color="white" size={16} underline />
    </a>
  );
}

export default LinkText;
export { dataTestids };
