import React, {useState} from "react";
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ReviewButton from "./reviewsButtons";
import Box from "@mui/material/Box";
import {styled} from "@mui/material/styles";

const StyledAccordion = styled(Accordion)(({theme}) => ({
    '& .MuiButtonBase-root, &.MuiAccordionSummary-root': {
        maxHeight: "36px", // Set minHeight to unset
    },
}));
export default function CustomerReviews({setBtn}) {
    const [expanded, setExpanded] = useState(false);

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };

    return (
        <Box sx={{width: "245px"}}>
            <StyledAccordion expanded={expanded === 'panel'} onChange={handleChange('panel')} sx={{boxShadow: "none"}}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon/>}
                    aria-controls="panel-content"
                    id="1"
                >
                    <Typography variat="descriptionBoldRob" sx={{fontWeight: 900, my: "auto"}} textTransform="uppercase"
                                onChange={handleChange('panel')}>Customer Reviews</Typography>
                </AccordionSummary>
                <AccordionDetails sx={{p: 0.5}}>
                    <ReviewButton setBtn={setBtn}/>
                </AccordionDetails>
            </StyledAccordion>
        </Box>
    );
}