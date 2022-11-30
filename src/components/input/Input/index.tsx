import { FormEventHandler } from 'react';
import dataTestids from './dataTestids';

type Props = {
  value: string;
  placeholder?: string;
  onInput: (newVal: string) => void;
};

function Input({ value, placeholder = '', onInput }: Props) {
  const handleInput: FormEventHandler<HTMLInputElement> = (e) => {
    // @ts-ignore
    onInput(e.target.value);
  };
  return (
    <input
      data-testid={dataTestids.root}
      className="p-2 w-full rounded-sm outline-none font-space-grotesk"
      placeholder={placeholder}
      value={value}
      onInput={handleInput}
    />
  );
}

export default Input;
export { dataTestids };
