import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import GuessingNodeChart from '.';

export default {
  title: 'chart/GuessingNodeChart',
  component: GuessingNodeChart,
  argTypes: {},
} as ComponentMeta<typeof GuessingNodeChart>;

const Template: ComponentStory<typeof GuessingNodeChart> = function Template(args) {
  return (
    <div className="w-screen h-screen flex justify-center items-center">
      <GuessingNodeChart {...args} />
    </div>
  );
};

export const Primary = Template.bind({});
Primary.args = {};
