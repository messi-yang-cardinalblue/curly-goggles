import { render, RenderResult, screen } from '@testing-library/react';
import Input, { dataTestids } from '.';

function renderInput(): RenderResult {
  return render(<Input value="" onInput={() => {}} />);
}

describe('Input', () => {
  it('Should render component successfully.', () => {
    try {
      renderInput();
      const wrapper = screen.getByTestId(dataTestids.root);
      expect(wrapper).toBeInTheDocument();
    } catch (e) {
      expect(true).toBe(false);
    }
  });
});
