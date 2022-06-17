import React from 'react';
import { Slice, SliceProps } from 'victory';
import './victory.css';

const CustomSlice: React.FC<SliceProps> = ({ style, ...props }) => {
  return (
    <Slice
      {...props}
      slice={{
        ...props.slice,
        endAngle: (props?.slice?.endAngle ?? 0) + 0.185,
      }}
      cornerRadius={100}
      style={{
        fill: style.fill,
        stroke: style.fill,
      }}
      className="pieSlice"
    />
  );
};

export default CustomSlice;
