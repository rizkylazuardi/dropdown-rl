import type { Meta, StoryObj, Preview } from '@storybook/react';
import { Title, Subtitle, Description, Primary, Controls, Stories } from '@storybook/blocks';
import SelectBox from './selectBox';
import { colourOptions } from '../../data/dummy';
import { PortalTypeEnum } from './selectBoxModel';
import './../../App.css'

//multiple , name, options, className, classNamePrefix="select", defaultValue=[]
const meta = {
  title: 'Component',
  component: SelectBox,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
  args: {
    multiple: true,
    name: "sample_dropdown",
    options: colourOptions,
    className: "text-xl",
    defaultValue:[],
    isSearchable: true,
    usePortal: PortalTypeEnum.Basic,
    zIndex: 9999
  },
  argTypes: {
    multiple: {
      table: { defaultValue: { summary: 'true' } }
    },
    isSearchable: {
      table: { defaultValue: { summary: 'true' } }
    },
    usePortal: {
      table: { defaultValue: { summary: '"basic"' } },
      description: "<b>'basic' &nbsp;|&nbsp; 'custom' &nbsp;|&nbsp; ''</b>"
    },
    zIndex: {
      table: { defaultValue: { summary: '9999 or null' } },
      description: "default value is null if not using portal, if using portal default value is 9999"
    }
  }
} satisfies Meta<typeof SelectBox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Selectbox: Story = {
  args: {
    multiple: true,
    name: "sample_dropdown",
    options: colourOptions,
    className: "text-xl",
    isSearchable: true,
    usePortal: PortalTypeEnum.Basic,
    zIndex: 9999
  },
};
