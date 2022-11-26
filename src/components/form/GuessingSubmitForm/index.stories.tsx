import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import GuessingSubmitForm from '.';

export default {
  title: 'form/GuessingSubmitForm',
  component: GuessingSubmitForm,
  argTypes: {},
} as ComponentMeta<typeof GuessingSubmitForm>;

const Template: ComponentStory<typeof GuessingSubmitForm> = function Template(args) {
  return (
    <div className="w-screen h-screen flex justify-center items-center">
      <GuessingSubmitForm {...args} />
    </div>
  );
};

export const Primary = Template.bind({});
Primary.args = {};
