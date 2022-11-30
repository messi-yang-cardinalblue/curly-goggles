import Text from '@/components/text/Text';
import LinkText from '@/components/text/LinkText';
import Image from '@/components/image/Image';
import GuessingEntity from '@/entities/GuessingEntity';
import dataTestids from './dataTestids';

type Props = {
  guessing: GuessingEntity;
};

function OutputGuessingBox({ guessing }: Props) {
  const author = guessing.getAuthor();
  const prompt = guessing.getPrompt();
  const imageUrl = guessing.getImageUrl();
  const isProcessing = guessing.isProcessing();
  const shareUrl = `${window.origin}/${guessing.getId()}`;
  const resultUrl = `${window.origin}/result/${guessing.getRootId()}`;
  return (
    <div data-testid={dataTestids.root} className="flex flex-col">
      <Text copy={`${author}:`} color="white" size={16} weight="bold" />
      <div>
        <Text copy={`"${prompt}"`} color="white" size={16} weight="bold" />
      </div>
      <div className="mt-5">
        {isProcessing && (
          <div>
            <Text color="white" copy="Generating image..." />
          </div>
        )}
        <div className="flex flex-col">{imageUrl && <Image src={imageUrl} />}</div>
        <div className="mt-5">
          <Text color="white" copy="Share the link below:" weight="bold" />
        </div>
        <div>
          <LinkText href={shareUrl} />
        </div>
        <div className="mt-5">
          <Text color="white" copy="Check the result:" weight="bold" />
        </div>
        <div>
          <LinkText href={resultUrl} />
        </div>
      </div>
    </div>
  );
}

export default OutputGuessingBox;
export { dataTestids };
