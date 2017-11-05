import React from 'react';
import ReactDOM from 'react-dom';

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend
} from 'recharts';

import {CandyBar, renderCandyBarMask} from './src/index';

const data = [
      {name: 'Page A', uv: 400, female: 240, male: 240},
      {name: 'Page B', uv: 300, female: 139, male: 221},
      {name: 'Page C', uv: -200, female: -980, male: 229},
      {name: 'Page D', uv: 278, female: 390, male: 200},
      {name: 'Page E', uv: 189, female: 480, male: 218},
      {name: 'Page F', uv: 239, female: -380, male: 250},
      {name: 'Page G', uv: 349, female: 430, male: 210}
];

class CustomShapeBarChart extends React.Component {

  render () {
  	return (
    <div>
      <BarChart width={700} height={300} data={data}
            margin={{top: 20, right: 30, left: 20, bottom: 5}}>
       {renderCandyBarMask()}
       <XAxis dataKey="name"/>
       <YAxis/>
       <Tooltip />
       < Legend />
       <CartesianGrid strokeDasharray="3 3"/>
       <Bar dataKey="female" isAnimationActive={false} fill="green" shape={<CandyBar />} />
       <Bar dataKey="male" isAnimationActive={false} fill="yellow" />
       <Bar dataKey="uv" isAnimationActive={false} fill="#8884d8" shape={<CandyBar />} />
      </BarChart>
    </div>
    );
  }
}

ReactDOM.render(
  <CustomShapeBarChart />,
  document.getElementById('root')
);
