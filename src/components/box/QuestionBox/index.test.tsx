import { render, RenderResult, screen } from '@testing-library/react';
import QuestionBox, { dataTestids } from '.';

function renderQuestionBox(): RenderResult {
  return render(
    <QuestionBox
      question="How are you?"
      imageUrl="https://techcrunch.com/wp-content/uploads/2021/07/GettyImages-1207206237.jpg?w=730&crop=1"
      isReady
    />
  );
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
