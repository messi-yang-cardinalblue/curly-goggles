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
  src: 'https://techcrunch.com/wp-content/uploads/2021/07/GettyImages-1207206237.jpg?w=730&crop=1',
};
