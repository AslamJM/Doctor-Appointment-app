import React from 'react';
import {Button as ButtonBase, IButtonProps} from 'native-base';
import Colors from '../constants/Colors';

const Button = ({children, ...props}: IButtonProps) => {
  return (
    <ButtonBase
      {...props}
      color={Colors.white}
      background={Colors.primary}
      spinnerPlacement="start">
      {children}
    </ButtonBase>
  );
};

export default Button;
