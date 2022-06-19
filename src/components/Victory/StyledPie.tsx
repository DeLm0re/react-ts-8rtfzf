import React from 'react';
import { VictoryPie, Slice, SliceProps } from 'victory';
import './victory.css';

const StyledPie: React.FC = () => {
    return (
        <svg height='400px' viewBox='0 0 400 400'>
            <VictoryPie
                standalone={false}
                // Data order matches with rendering order
                data={[{ y: 19 }, { y: 25 }, { y: 25 }, { y: 15 }, { y: 15 }]}
                colorScale={['coral', '#00BD9D', '#EA7076', '#FFBA08', '#53C6D9']}
                labels={[]}
                innerRadius={120}
                // Rotate pie because data is upside down
                endAngle={-360}
                dataComponent={<PieSlice />}
            />
        </svg>
    );
};

const PieSlice: React.FC<SliceProps> = ({ style, ...props }: any) => {
    return (
        <Slice
            {...props}
            slice={{
                ...props.slice,
                endAngle: (props.slice.endAngle ?? 0) - 0.185,
            }}
            cornerRadius={100}
            style={{
                fill: style.fill,
                stroke: style.fill,
            }}
            className='pieSlice'
        />
    );
};

export default StyledPie;
