import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import LinkText from '.';

export default {
  title: 'text/LinkText',
  component: LinkText,
  argTypes: {},
} as ComponentMeta<typeof LinkText>;

const Template: ComponentStory<typeof LinkText> = function Template(args) {
  return (
    <div className="w-screen h-screen flex justify-center items-center">
      <LinkText {...args} />
    </div>
  );
};

export const Primary = Template.bind({});
Primary.args = {
  href: 'https://www.google.com',
};
