import Text from '@/components/text/Text';
import LinkText from '@/components/text/LinkText';
import Image from '@/components/image/Image';
import GuessingNodeEntity from '@/entities/GuessingNodeEntity';
import dataTestids from './dataTestids';

type Props = {
  guessingNode: GuessingNodeEntity;
};

function GuessingNodeChart({ guessingNode }: Props) {
  const children = guessingNode.getChildren();
  const imageUrl = guessingNode.getImageUrl();
  const shareUrl = `${window.origin}/${guessingNode.getId()}`;
  const isReady = guessingNode.isReady();
  return (
    <div data-testid={dataTestids.root} className="flex flex-col items-center">
      {guessingNode.hasSiblings() && (
        <div className="w-full flex">
          <div className={['flex-grow', 'h-[1px]', guessingNode.hasLeftSibling() ? 'bg-white' : null].join(' ')} />
          <div className={['flex-grow', 'h-[1px]', guessingNode.hasRighSibling() ? 'bg-white' : null].join(' ')} />
        </div>
      )}
      {guessingNode.hasParent() && (
        <div className="h-10">
          <div className="w-[1px] h-full bg-white" />
        </div>
      )}
      <div className="w-[200px] p-4">
        <Text color="white" copy={`${guessingNode.getAuthor()}:`} weight="bold" />
        <div>
          <Text color="white" copy={`"${guessingNode.getPrompt()}"`} />
        </div>
        <div>
          <LinkText href={shareUrl} copy="Answer again" />
        </div>
        {isReady ? (
          <div className="mt-2">{imageUrl && <Image width={200} src={imageUrl} />}</div>
        ) : (
          <Text color="white" copy="Generating image..." />
        )}
      </div>
      {guessingNode.hasChildren() && (
        <div className="flex-grow">
          <div className="h-10">
            <div className="w-[1px] h-full bg-white" />
          </div>
          <div className="w-full">
            <div className="w-full h-[1px] bg-white" />
          </div>
        </div>
      )}
      <div className="flex justify-center">
        {children.map((guessingChild) => (
          <div key={guessingChild.getId()} className="flex-grow">
            <GuessingNodeChart guessingNode={guessingChild} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default GuessingNodeChart;
export { dataTestids };
