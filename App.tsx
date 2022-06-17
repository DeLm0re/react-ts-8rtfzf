import * as React from 'react';
import './style.css';
import { VictoryPie } from 'victory';
import CustomSlice from './CustomSlice';

export default function App() {
  return (
    <svg height="400px" viewBox="0 0 400 400">
      <VictoryPie
        standalone={false}
        data={[{ y: 15 }, { y: 15 }, { y: 25 }, { y: 25 }, { y: 19 }]}
        labels={[]}
        innerRadius={120}
        dataComponent={<CustomSlice />}
        colorScale={['#53C6D9', '#FFBA08', '#EA7076', '#00BD9D', 'coral']}
      />
    </svg>
  );
}
