import { render, RenderResult, screen } from '@testing-library/react';
import GuessingQuestionBox, { dataTestids } from '.';

function renderGuessingQuestionBox(): RenderResult {
  return render(
    <GuessingQuestionBox
      question="How are you?"
      imageUrl="https://techcrunch.com/wp-content/uploads/2021/07/GettyImages-1207206237.jpg?w=730&crop=1"
    />
  );
}

describe('GuessingQuestionBox', () => {
  it('Should render component successfully.', () => {
    try {
      renderGuessingQuestionBox();
      const wrapper = screen.getByTestId(dataTestids.root);
      expect(wrapper).toBeInTheDocument();
    } catch (e) {
      expect(true).toBe(false);
    }
  });
});
