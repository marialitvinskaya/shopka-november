import React, {useState} from "react";
import Button from "@mui/material/Button";
import theme from "../createTheme";
import WatchList from "./watchList";
import Badge from '@mui/material/Badge';
import {Link} from "react-router-dom";

export default function AccountButtons({cartItems, removeFromCart, count}) {

    const [isCartOpen, setIsCartOpen] = useState(false);

    const openCart = () => {
        setIsCartOpen(true);
    };
    const closeCart = () => {
        setIsCartOpen(false);
    };

    return (
        <div>
            <Badge color="red" badgeContent={count} showZero anchorOrigin={{vertical: "top", horizontal: "right"}}>
                <Link to="/watch-list">
            <Button
                color="primary"
                sx={{
                    minWidth: 104,
                    height: 40,
                    textTransform: "none",
                    fontWeight: 700,
                    fontSize: "20px",
                    py: 1,
                    px: 1.5,
                    border: "1px solid",
                    borderColor: theme.palette.primary.light,
                }}
                onClick={openCart}
            >
                Watch
            </Button>
                </Link>
            </Badge>
            {isCartOpen && <WatchList cartItems={cartItems} removeFromCart={removeFromCart} closeCart={closeCart}/>}
        </div>
    );
}
