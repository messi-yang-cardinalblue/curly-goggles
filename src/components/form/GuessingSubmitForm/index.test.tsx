import { render, RenderResult, screen } from '@testing-library/react';
import GuessingSubmitForm, { dataTestids } from '.';

function renderGuessingSubmitForm(): RenderResult {
  return render(
    <GuessingSubmitForm
      authorLabel="Your name?"
      author="Hello"
      onAuthorInput={() => {}}
      promptLabel="What is in your mind?"
      prompt="World"
      onPromptInput={() => {}}
      onSubmitClick={() => {}}
    />
  );
}

describe('GuessingSubmitForm', () => {
  it('Should render component successfully.', () => {
    try {
      renderGuessingSubmitForm();
      const wrapper = screen.getByTestId(dataTestids.root);
      expect(wrapper).toBeInTheDocument();
    } catch (e) {
      expect(true).toBe(false);
    }
  });
});
