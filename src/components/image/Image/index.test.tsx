import { render, RenderResult, screen } from '@testing-library/react';
import Image, { dataTestids } from '.';

function renderImage(): RenderResult {
  return render(
    <Image
      src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_light_color_272x92dp.png"
      width={100}
      height={100}
    />
  );
}

describe('Image', () => {
  it('Should render component successfully.', () => {
    try {
      renderImage();
      const wrapper = screen.getByTestId(dataTestids.root);
      expect(wrapper).toBeInTheDocument();
    } catch (e) {
      expect(true).toBe(false);
    }
  });
});
