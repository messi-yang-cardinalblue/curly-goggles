import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Input from '.';

export default {
  title: 'input/Input',
  component: Input,
  argTypes: {},
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = function Template(args) {
  return (
    <div className="w-screen h-screen flex justify-center items-center">
      <Input {...args} />
    </div>
  );
};

export const Primary = Template.bind({});
Primary.args = {
  placeholder: 'Hello World',
};
