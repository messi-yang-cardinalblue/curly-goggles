import { render, RenderResult, screen } from '@testing-library/react';
import LinkText, { dataTestids } from '.';

function renderLinkText(): RenderResult {
  return render(<LinkText />);
}

describe('LinkText', () => {
  it('Should render component successfully.', () => {
    try {
      renderLinkText();
      const wrapper = screen.getByTestId(dataTestids.root);
      expect(wrapper).toBeInTheDocument();
    } catch (e) {
      expect(true).toBe(false);
    }
  });
});
