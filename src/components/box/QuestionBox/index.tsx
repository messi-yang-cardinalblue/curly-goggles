import Text from '@/components/text/Text';
import Image from '@/components/image/Image';
import dataTestids from './dataTestids';
import GuessingEntity from '@/entities/GuessingEntity';

type Props = {
  guessing: GuessingEntity;
};

function QuestionBox({ guessing }: Props) {
  const question = `Question: What "${guessing.getAuthor()}" is thinking?`;
  const hintWordsCount = guessing.getHint().split(' ').length;
  const hint = `Hint: ${guessing.getHint().replaceAll(' ', '    ').replaceAll('_', '＿')} (${hintWordsCount} words)`;
  const imageUrl = guessing.getImageUrl();
  const isProcessing = guessing.isProcessing();
  const isFailed = guessing.isFailed();
  return (
    <div data-testid={dataTestids.root} className="flex flex-col">
      <Text copy={question} color="white" size={16} weight="bold" />
      <div>
        <Text copy={hint} color="white" size={16} weight="bold" />
      </div>
      {isProcessing && (
        <div>
          <Text color="white" copy="Generating image..." />
        </div>
      )}
      {isFailed && (
        <div>
          <Text color="white" copy="Failed" />
        </div>
      )}
      <div className="mt-5 flex flex-col">{imageUrl && <Image src={imageUrl} />}</div>
    </div>
  );
}

export default QuestionBox;
export { dataTestids };
