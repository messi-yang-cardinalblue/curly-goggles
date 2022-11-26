import Text from '@/components/text/Text';
import Image from '@/components/image/Image';
import dataTestids from './dataTestids';

type Props = {
  question: string;
  imageUrl: string;
};

function GuessingQuestionBox({ question, imageUrl }: Props) {
  return (
    <div data-testid={dataTestids.root} className="flex flex-col">
      <Text copy={question} color="white" size={16} weight="bold" />
      <div className="mt-5 flex flex-col">
        <Image src={imageUrl} />
      </div>
    </div>
  );
}

export default GuessingQuestionBox;
export { dataTestids };
