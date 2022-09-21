import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Button } from '@chakra-ui/react';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Example/Button',
  component: Button,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  // argTypes: {
  //   backgroundColor: { control: 'color' },
  // },
} as ComponentMeta<typeof Button>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Small = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Small.args = {
  variant: 'solid',
  size: 'sm',
  label: 'Small',
};

export const Medium = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Medium.args = {
  variant: 'solid',
  size: 'md',
  label: 'Medium',
};

export const Large = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Large.args = {
  variant: 'solid',
  size: 'lg',
  label: 'Large',
};
