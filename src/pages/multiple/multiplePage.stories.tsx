import type { Meta, StoryObj } from '@storybook/react';

import './../../App.css'
import MultiplePage from './multiplePage';

//multiple , name, options, className, classNamePrefix="select", defaultValue=[]
const meta = {
  title: 'UseCase',
  component: MultiplePage,
  //tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
  args: {
    multiple: false,
  },
} satisfies Meta<typeof MultiplePage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const MultipleOrSingle: Story = {
  args: {
    multiple:false,
  },
};
