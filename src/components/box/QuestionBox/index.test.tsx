import { render, RenderResult, screen } from '@testing-library/react';
import GuessingEntity from '@/entities/GuessingEntity';
import QuestionBox, { dataTestids } from '.';

function renderQuestionBox(): RenderResult {
  const guessing = GuessingEntity.newGuessingEntity(
    '123',
    null,
    '345',
    '_',
    'pending',
    'https://techcrunch.com/wp-content/uploads/2021/07/GettyImages-1207206237.jpg?w=730&crop=1',
    'Messi Yang',
    'Messi is playing baseball'
  );
  return render(<QuestionBox guessing={guessing} />);
}

describe('QuestionBox', () => {
  it('Should render component successfully.', () => {
    try {
      renderQuestionBox();
      const wrapper = screen.getByTestId(dataTestids.root);
      expect(wrapper).toBeInTheDocument();
    } catch (e) {
      expect(true).toBe(false);
    }
  });
});
