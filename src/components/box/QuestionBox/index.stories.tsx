import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import GuessingEntity from '@/entities/GuessingEntity';
import QuestionBox from '.';

export default {
  title: 'box/QuestionBox',
  component: QuestionBox,
  argTypes: {},
} as ComponentMeta<typeof QuestionBox>;

const Template: ComponentStory<typeof QuestionBox> = function Template(args) {
  return (
    <div className="w-screen h-screen flex justify-center items-center">
      <QuestionBox {...args} />
    </div>
  );
};

export const Primary = Template.bind({});
Primary.args = {
  guessing: GuessingEntity.newGuessingEntity(
    '123',
    null,
    '345',
    '_',
    'pending',
    'https://techcrunch.com/wp-content/uploads/2021/07/GettyImages-1207206237.jpg?w=730&crop=1',
    'Messi Yang',
    'Messi is playing baseball'
  ),
};
