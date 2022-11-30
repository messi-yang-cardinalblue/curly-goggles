import Text from '@/components/text/Text';
import Input from '@/components/input/Input';
import Button from '@/components/button/Button';
import dataTestids from './dataTestids';

type Props = {
  authorLabel: string;
  author: string;
  onAuthorInput: (newAuthor: string) => void;
  promptLabel: string;
  prompt: string;
  onPromptInput: (newAuthor: string) => void;
  onSubmitClick: () => void;
};

function GuessingSubmitForm({
  authorLabel,
  author,
  onAuthorInput,
  promptLabel,
  prompt,
  onPromptInput,
  onSubmitClick,
}: Props) {
  const handleSubmitClick = () => {
    if (!author) {
      alert('Please enter your name');
      return;
    }
    if (prompt.split(' ').length < 1) {
      alert('Make sure you have at least 1 words');
      return;
    }
    onSubmitClick();
  };

  return (
    <div data-testid={dataTestids.root}>
      <div className="flex flex-col">
        <Text copy={authorLabel} color="white" size={16} weight="bold" />
        <div className="mt-2">
          <Input value={author} placeholder="Mike Mussina" onInput={onAuthorInput} />
        </div>
      </div>
      <div className="mt-5 flex flex-col">
        <Text copy={promptLabel} color="white" size={16} weight="bold" />
        <div className="mt-2">
          <Input value={prompt} placeholder="Dwigh Howard is crying on his bed" onInput={onPromptInput} />
        </div>
      </div>
      <div className="mt-7 flex flex-col">
        <Button text="Submit" onClick={handleSubmitClick} />
      </div>
    </div>
  );
}

export default GuessingSubmitForm;
export { dataTestids };
