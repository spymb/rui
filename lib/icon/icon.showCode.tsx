import IconExample from './icon.example';
import React from 'react';
import ShowCode from '../../showCode';

const IconDemo = () => {
  return (
    <ShowCode code={require('!!raw-loader!./icon.example.tsx').default}>
      <IconExample/>
    </ShowCode>
  );
};

export default IconDemo;