import * as React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions';

import UpDefaultTheme from '../../../Common/theming'
import { ThemeProvider as UpThemeProvider } from '../../../Common/theming/themedComponents'

import UpBadge from './'

import UpBox from '../../Containers/Box'

console.log(UpDefaultTheme) ;

storiesOf('UpBadge', module)
  .addWithInfo('Simple usage', 'Utilisation du composant en lui passant les données à afficher',
   () => (
    <UpThemeProvider theme={UpDefaultTheme}>
      <UpBox style={{margin:'30px'}}>
        <UpBadge text="1" rounded={true} intent="primary" />
        <UpBadge text="2" rounded={true} intent="info" />
        <UpBadge text="3" rounded={true} intent="default" />
        <UpBadge text="4" rounded={true} intent="warning" />
        <UpBadge text="5" rounded={true} intent="danger" />
      </UpBox>
    </UpThemeProvider>
  )) ;