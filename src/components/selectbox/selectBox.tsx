import Select from "react-select";
import { PortalTypeEnum, SelectObject } from "./selectBoxModel";

/**
 * <h2><b>SelectBox</b></h2>
 * 
 * <i>A flexible and beautiful Select Input control for ReactJS with multiselect, autocomplete, async and creatable support</i><br/>
 * for better experience in storybook please change the configuration using <b>PORTAL</b> <br/>
 * set <b>usePortal = "basic" (in this docs please use doublequotes)</b> <br/>
 * or <b>usePortal = "custom" and set portalTarget (required) = document.body || your element nodes</b><br/>
 * or <b>Leave it empty if you want to see the preview differences without portal.</b>
 * 
 */

const SelectBox = (props: SelectObject) => {
    const { multiple , name, options, className, classNamePrefix="select", defaultValue=[], openMenu, usePortal, portalTarget, renderOption, zIndex } = props;
    
    const getPortalTarget = (type: PortalTypeEnum | undefined, target: HTMLElement | undefined) : HTMLElement|null|undefined => {
        if(type === PortalTypeEnum.Basic){
            return document.body ;
        }else if(type === PortalTypeEnum.Custom){
            return target || null;
        }
        return null;
    }

    const multipleAttr = multiple ? { isMulti: true } : {};
    const openMenuAttr = openMenu ? { menuIsOpen: true } : {};
    const portalStyleAttr = usePortal == PortalTypeEnum.Basic || PortalTypeEnum.Custom || zIndex ? { styles: { menuPortal: (base: any) => ({ ...base, zIndex: zIndex || 9999 }) } } : {};
    const formatOptionLabelAttr = renderOption ? { formatOptionLabel: renderOption } : {};
    return (
        <Select
            {...props}
            defaultValue={[...defaultValue]}
            name={name}
            options={options}
            className={`basic-multi-select ${className}`}
            classNamePrefix={classNamePrefix}
            menuPortalTarget={getPortalTarget(usePortal, portalTarget)}
            {...formatOptionLabelAttr}
            {...openMenuAttr}
            {...multipleAttr}
            {...portalStyleAttr}
            
        />
    );
}

export default SelectBox;