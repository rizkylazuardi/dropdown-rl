import type { Meta, StoryObj } from '@storybook/react';
import SearchablePage from './searchablePage';
import './../../App.css'

//multiple , name, options, className, classNamePrefix="select", defaultValue=[]
const meta = {
  title: 'UseCase',
  component: SearchablePage,
  //tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
  args: {
    isSearchable: true,
  },
} satisfies Meta<typeof SearchablePage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Searchable: Story = {
  args: {
    isSearchable:true,
  },
};
