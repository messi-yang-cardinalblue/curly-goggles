import Link from 'next/link';
import Text from '@/components/text/Text';
import Image from '@/components/image/Image';
import GuessingNodeEntity from '@/entities/GuessingNodeEntity';
import dataTestids from './dataTestids';

type Props = {
  guessingNode: GuessingNodeEntity;
};

function GuessingNodeChart({ guessingNode }: Props) {
  const children = guessingNode.getChildren();
  const imageUrl = guessingNode.getImageUrl();
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
      <Link href={`/${guessingNode.getId()}`}>
        <div className="cursor-pointer w-[200px] p-4 hover:bg-slate-500">
          <Text color="white" copy={`${guessingNode.getAuthor()}:`} />
          <div>
            <Text color="white" copy={guessingNode.getPrompt()} />
          </div>
          <div className="mt-2">{imageUrl && <Image width={200} src={imageUrl} />}</div>
        </div>
      </Link>
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
