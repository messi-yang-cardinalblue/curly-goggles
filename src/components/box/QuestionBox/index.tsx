import Text from '@/components/text/Text';
import Image from '@/components/image/Image';
import dataTestids from './dataTestids';

type Props = {
  question: string;
  imageUrl: string | null;
  isReady: boolean;
};

function QuestionBox({ question, imageUrl, isReady }: Props) {
  return (
    <div data-testid={dataTestids.root} className="flex flex-col">
      <Text copy={question} color="white" size={16} weight="bold" />
      {!isReady && (
        <div>
          <Text color="white" copy="Processing image..." />
        </div>
      )}
      <div className="mt-5 flex flex-col">{imageUrl && <Image src={imageUrl} />}</div>
    </div>
  );
}

export default QuestionBox;
export { dataTestids };
