import { render, RenderResult, screen } from '@testing-library/react';
import GuessingEntity from '@/entities/GuessingEntity';
import OutputGuessingBox, { dataTestids } from '.';

function renderOutputGuessingBox(): RenderResult {
  const guessing = GuessingEntity.newGuessingEntity(
    '123',
    null,
    'pending',
    'https://techcrunch.com/wp-content/uploads/2021/07/GettyImages-1207206237.jpg?w=730&crop=1',
    'Messi Yang',
    'Messi is playing baseball'
  );
  return render(<OutputGuessingBox guessing={guessing} />);
}

describe('OutputGuessingBox', () => {
  it('Should render component successfully.', () => {
    try {
      renderOutputGuessingBox();
      const wrapper = screen.getByTestId(dataTestids.root);
      expect(wrapper).toBeInTheDocument();
    } catch (e) {
      expect(true).toBe(false);
    }
  });
});
