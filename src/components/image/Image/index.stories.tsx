import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Image from '.';

export default {
  title: 'image/Image',
  component: Image,
  argTypes: {},
} as ComponentMeta<typeof Image>;

const Template: ComponentStory<typeof Image> = function Template(args) {
  return (
    <div className="w-screen h-screen flex justify-center items-center">
      <Image {...args} />
    </div>
  );
};

export const Primary = Template.bind({});
Primary.args = {
  src: 'https://www.google.com/images/branding/googlelogo/2x/googlelogo_light_color_272x92dp.png',
};
