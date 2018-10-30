import * as classnames from 'classnames'

import { CommonCheckableStyle } from '../_Common/Styled'
import { UpRadioStyledProps } from './types';
import { style } from 'typestyle';
import { NestedCSSProperties } from 'typestyle/lib/types';

const baseStyles = (props: UpRadioStyledProps) : NestedCSSProperties => (
{
  $nest : {
    '.up-control-indicator' : {
      borderRadius: '50%',
      fontSize: '6px',
    },
    '.up-control-text' : {
      zIndex:100,
    },
    'input:checked ~ .up-control-indicator::before' : {
      display: 'inline-block',
      position: 'absolute',
      top: '50%',
      left: '50%',
      '-webkit-transform': 'translate(-50%, -50%)',
      transform: 'translate(-50%, -50%)',
      borderRadius: '50%',
      background: '#ffffff',
      width: '1em',
      height: '1em',
      content: "", 
    }, 
    'input:indeterminate ~ .up-control-indicator::before' : {
      display: 'inline-block',
      position: 'absolute',
      top: '50%',
      left: '50%',
      '-webkit-transform': 'translate(-50%, -50%)',
              transform: 'translate(-50%, -50%)',
      borderRadius: '50%',
    }
  }
});

export const getStyles = (props: UpRadioStyledProps) => (
  classnames(style(CommonCheckableStyle(props)), style(baseStyles(props)))
);

export const RadioGroupStyles : NestedCSSProperties = {
  $nest : {
    '&.upContainer__groupradio-horizontal label.up-radio' : {
      float : 'left',
      marginRight: '10px',
    },
    '&.upContainer__groupradio-button label.up-radio' : {
      float : 'left',
      padding: '8px',
      backgroundColor: '#EEE',
      border:'0.01em solid #CCC',
      position:'relative',
      marginTop:0,
    },
    '&.upContainer__groupradio-button label.up-radio:nth-child(2)' : {
      borderTopLeftRadius:'6px',
      borderBottomLeftRadius:'6px'
    },
    '&.upContainer__groupradio-button label.up-radio:last-child' : {
      borderTopRightRadius:'6px',
      borderBottomRightRadius:'6px',
    }, 
    '&.upContainer__groupradio-button label.up-radio input ~ .up-control-indicator::before' : {
      display:'none',
    },
    '&.upContainer__groupradio-button label.up-radio  input ~ .up-control-text' : {
      position:'relative',
    },
    '&.upContainer__groupradio-button label.up-radio input ~ .up-control-indicator' : {
      position:'absolute',
      width:'100%',
      height: '100%',
      border:0,
      top:0,
      left:0,
      borderRadius:0,
      display:'inline-block',
      boxShadow:'unset',
    },
    '&.upContainer__groupradio-button label.up-radio input:indeterminate ~ .up-control-indicator' : {
      background: '#EFEFEF',
    },
    '&.upContainer__groupradio-button label.up-radio input:checked ~ .up-control-indicator ~ *' : {
      color:'white',
      fontWeight:700,
    }
  }
}
