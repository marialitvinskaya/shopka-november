import React from "react";
import Button from "@mui/material/Button";
import {styled} from "@mui/material/styles";

const StyledStockButton = styled(Button)(({theme}) => ({
    // height: "24px",
    // width: "70px",
    boxShadow: "none",
    fontFamily: "Roboto",
    fontSize: "12px",
    fontWeight: 400,
    whiteSpace: "nowrap",
    textTransform: "none",
    backgroundColor: "#F44336",
    position: "absolute", left: 0, top: 0, zIndex: 1,
    borderRadius: "0",
}));

export default function StockButton(props) {
    if (props.inStock === false) {
        return (
            <StyledStockButton disabled sx={{'&.MuiButton-root': {color: 'common.black'}}}>
                Out of stock
            </StyledStockButton>
        )
    }
}
