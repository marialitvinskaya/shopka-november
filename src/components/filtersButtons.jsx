import * as React from 'react';
import Button from '@mui/material/Button';
import theme from "../createTheme"

export default function FilterButton({content}){
    return (
        <Button  sx={{p:1.5, mb: 3,  textTransform: "none", backgroundColor: theme.palette.primary.superLight, color: theme.palette.primary.main, ...theme.typography.descriptionBoldRob}}>
            {content}
        </Button>
    )
}

