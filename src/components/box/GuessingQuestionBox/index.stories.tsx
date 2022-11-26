import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import GuessingQuestionBox from '.';

export default {
  title: 'box/GuessingQuestionBox',
  component: GuessingQuestionBox,
  argTypes: {},
} as ComponentMeta<typeof GuessingQuestionBox>;

const Template: ComponentStory<typeof GuessingQuestionBox> = function Template(args) {
  return (
    <div className="w-screen h-screen flex justify-center items-center">
      <GuessingQuestionBox {...args} />
    </div>
  );
};

export const Primary = Template.bind({});
Primary.args = {};
