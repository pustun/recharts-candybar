import React from 'react';

const CandyBar = (props) => {
	const {
    x: oX,
    y: oY,
    width: oWidth,
    height: oHeight,
    value,
    fill
  } = props;

  let x = oX;
  let y = oHeight < 0 ? oY + oHeight : oY;
	let width = oWidth;
  let height = Math.abs(oHeight);

	return (
  	<rect fill={fill}
    			mask='url(#mask-stripe)'
          x={x}
          y={y}
          width={width}
          height={height} />
    );
};

const renderCandyBarMask = (props = {}) => {
	const { angle = 45, strokeWidth = 4} = props;
  const cellSize = strokeWidth*2;

  const rotate = `rotate(${angle})`;

  return (
  <defs>
    <pattern id="pattern-stripe"
     	        width={cellSize} height={cellSize}
   	          patternUnits="userSpaceOnUse"
     	        patternTransform={rotate}>

      	<rect width={strokeWidth} height={cellSize} transform="translate(0,0)" fill="white"></rect>
    	</pattern>
    	<mask id="mask-stripe">
    		<rect x="0" y="0" width="100%" height="100%" fill="url(#pattern-stripe)" />
    	</mask>
    </defs>
  );
};

export { renderCandyBarMask, CandyBar};
