import type { Meta, StoryObj } from '@storybook/react';
import './../../App.css'
import OptionRenderPage from './optionRenderPage';
import { colourOptions } from '../../data/dummy';
import { OptionType } from '../../components/selectbox/selectBoxModel';

//multiple , name, options, className, classNamePrefix="select", defaultValue=[]
const optionsData = colourOptions.map((item, idx) => {
    return {
        ...item,
        additionalField: idx
    }
})

const renderOption = (param: OptionType) => {
    const { label, value, additionalField } = param;
    return (
        <div style={{ display: "flex" }}>
            <div>{label}</div>
            <div style={{ marginLeft: "10px", color: "#ccc" }}>
                index ke - {additionalField} value: {value}
            </div>
        </div>
    )
}; 

const meta = {
  title: 'UseCase',
  component: OptionRenderPage,
  //tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
  args: {
    isSearchable: true,
    options: optionsData,
  },
} satisfies Meta<typeof OptionRenderPage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const OptionRender: Story = {
  args: {
    isSearchable:true,
    options: optionsData,
    renderOption: renderOption
  },
};
