import React from "react";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import StarIcon from '@mui/icons-material/Star';
import {styled} from "@mui/material/styles";



const StyledButton = styled(Button)(({theme}) => ({
    backgroundColor: theme.palette.grey[5],
    borderRadius: "4px",
    height: "32px",
    boxShadow: "none",
    margin: "2px",
}));


const Star = () => {
    return <StarIcon sx={{fontSize: "16px", color: "#FB8200"}}/>
}

const Rating = ({rating}) => {
    const stars = Array.from({length: rating}, (_, index) => <Star key={index} sx={{mx: 0.1}}/>);

    return <Typography variant="captionMedium" sx={{color: "#000", display: "flex", alignItems: "center"}}>{stars} <span
        style={{margin: '0 3px'}}>&</span> Up</Typography>;
};

export default function ReviewButton({setBtn}) {

    const handleChange = ((value) => {
        setBtn(value);
    })

    return (
        <div>
            <StyledButton onClick={() => handleChange(4)}>
                <Rating rating={4}/>
            </StyledButton>
            <StyledButton onClick={() => handleChange(3)}>
                <Rating rating={3}/>
            </StyledButton>
            <StyledButton onClick={() => handleChange(2)}>
                <Rating rating={2}/>
            </StyledButton>
            <StyledButton onClick={() => handleChange(1)}>
                <Rating rating={1}/>
            </StyledButton>
        </div>

    );
};


