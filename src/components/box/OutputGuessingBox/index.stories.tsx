import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import GuessingEntity from '@/entities/GuessingEntity';

import OutputGuessingBox from '.';

export default {
  title: 'box/OutputGuessingBox',
  component: OutputGuessingBox,
  argTypes: {},
} as ComponentMeta<typeof OutputGuessingBox>;

const Template: ComponentStory<typeof OutputGuessingBox> = function Template(args) {
  return (
    <div className="w-screen h-screen flex justify-center items-center">
      <OutputGuessingBox {...args} />
    </div>
  );
};
export const Primary = Template.bind({});
Primary.args = {
  guessing: GuessingEntity.newGuessingEntity(
    '123',
    null,
    'pending',
    'https://techcrunch.com/wp-content/uploads/2021/07/GettyImages-1207206237.jpg?w=730&crop=1',
    'Messi Yang',
    'Messi is playing baseball'
  ),
};
