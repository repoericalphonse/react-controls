import UpSelect from './UpSelect'
import * as React from 'react'

export default UpSelect ;

import {BaseProps} from '../../../Common/BaseControl/BaseControl' 

export interface UpSelectOption {
    id:number,
    text:string,
    icon:string
}

export interface UpSelectProps extends BaseProps<any> {
    default: any;
    getFullData: boolean;
    multiple?: boolean;
    data?: any;
    placeholder?: string;
    allowClear?: boolean;
    minimumInputLength?: number;
    dataSource?: {
        id?: string,
        text?: string,
        query: string,
        queryParameterName?: string
    },
    autoload?:boolean
    isNullable: boolean,
    isRequired: boolean,
    noResultsText? : string,
    clearAllText? : string,
    clearValueText? : string,
    addLabelText? : string,
    searchPromptText? : string,
    optionRenderer?: React.StatelessComponent<UpSelectOption>,
    valueRenderer?: React.StatelessComponent<UpSelectOption>
}