import * as React from 'react';
import Box from '@mui/material/Box';
import Slider, {SliderThumb} from '@mui/material/Slider';
import {styled} from '@mui/material/styles';
import theme from "../createTheme";

const StyledSlider = styled(Slider)(({theme}) => ({
    width: 210,
    color: theme.palette.grey[30],
    '& .MuiSlider-thumb': {
        color: theme.palette.common.black
    },
    '& .MuiSlider-valueLabel': {
        fontSize: 12,
        fontWeight: 'normal',
        backgroundColor: 'unset',
        top: 2,
        color: theme.palette.text.primary,
        '&:before': {
            display: 'none',
        },
    }
}));
const valueText = (value) =>
    `$ ${value}`;

export default function RangeSlider({priceRange, onChange}) {
    return (
        <Box sx={{
            mt: 1,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            border: "3px solid",
            width: "245px",
            height: "73px",
            borderTop: "5px solid",
            borderBottom: "5px solid",
            borderLeft: "3px solid",
            borderRight: "3px solid",
            borderColor: theme.palette.grey[5],
            borderRadius: "3px",
            position: "relative"
        }}>
            <StyledSlider
                orientation="horizontal"
                getAriaLabel={() => 'PriceRange'}
                value={priceRange}
                onChange={(event, newValue) => {
                    onChange(newValue);
                }}
                getAriaValueText={valueText}
                min={10}
                max={300}
                valueLabelDisplay="on"
                valueLabelFormat={valueText}
                sx={{
                    position: "absolute",
                    bottom: "12.5%",
                    width: "200px",
                    '& .MuiSlider-rail': {
                        height: '3px'
                    },
                    '& .MuiSlider-track': {
                        height: '3px'
                    },
                    '& .MuiSlider-thumb': {
                        width: '16px',
                        height: '16px'
                    }
                }}
            />
        </Box>
    );
}