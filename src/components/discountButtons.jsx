import React from "react";
import Button from "@mui/material/Button";
import {styled} from "@mui/material/styles";
import theme from "../createTheme";

const StyledDiscButton = styled(Button)(({theme}) => ({
    borderRadius: "4px",
    height: "24px",
    width: "70px",
    boxShadow: "none",
    fontFamily: "Roboto",
    fontSize: "12px",
    fontWeight: 400,
    whiteSpace: "nowrap",
    textTransform: "none"
}));


export default function DiscountButton({content}) {
    return (
        content > 0 &&
        <StyledDiscButton sx={{
            backgroundColor: content < 50 ? theme.palette.pink[5] : theme.palette.green[5],
            color: content < 50 ? theme.palette.pink[70] : theme.palette.green[70]
        }}>
            {content}% OFF
        </StyledDiscButton>
    )
}


