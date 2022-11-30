import { render, RenderResult, screen } from '@testing-library/react';
import GuessingEntity from '@/entities/GuessingEntity';
import GuessingNodeEntity from '@/entities/GuessingNodeEntity';
import GuessingNodeChart, { dataTestids } from '.';

function renderGuessingNodeChart(): RenderResult {
  const guessing = GuessingEntity.newGuessingEntity('1', null, '2', '_', 'processing', '1', '1', '1');
  const guessingNode: GuessingNodeEntity = GuessingNodeEntity.newGuessingEntity(guessing);
  return render(<GuessingNodeChart guessingNode={guessingNode} />);
}

describe('GuessingNodeChart', () => {
  it('Should render component successfully.', () => {
    try {
      renderGuessingNodeChart();
      const wrapper = screen.getByTestId(dataTestids.root);
      expect(wrapper).toBeInTheDocument();
    } catch (e) {
      expect(true).toBe(false);
    }
  });
});
