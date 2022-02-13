import React from 'react';
import {scopedClassMarker} from '../helpers/classMaker';

const sc = scopedClassMarker('rui-layout');

interface Props extends React.HTMLAttributes<HTMLElement> {}

const Footer: React.FunctionComponent<Props> = (props) => {
  const {className, ...rest} = props;
  return (
    <div className={[sc('footer'), className].join(' ')} {...rest}>
      {props.children}
    </div>
  );
};

export default Footer;