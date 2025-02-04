export const enum PortalTypeEnum {
    Basic = "basic",
    Custom = "custom"
}

export interface OptionType {
    value: string;
    label: string;
    color: string;
    isFixed?: boolean;
    isDisabled?: boolean;
    [key: string]: any;
  }

export interface SelectObject {
    multiple?: boolean,
    name: string,
    options: OptionType[],
    className?: string,
    classNamePrefix?: string,
    defaultValue?: OptionType[],
    openMenu?: boolean,
    isSearchable?: boolean,
    usePortal?: PortalTypeEnum,
    portalTarget?: HTMLElement,
    renderOption?: (param: OptionType) => JSX.Element
    zIndex?: string | null
}