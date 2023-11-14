import React from "react";
import Button from "@mui/material/Button";
import theme from "../createTheme";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Stack from "@mui/material/Stack";

export default function WatchList({listItems, removeFromList, closeList}) {
    if (!listItems) {
        return null;
    }

    return (
        <Box sx={{
            zIndex: "999",
            backgroundColor: "#fff",
            position: "absolute",
            right: 0,
            top: 0,
            width: "500px",
            p: 2,
            border: "solid 1px #B4B4BB",
            boxShadow: "0 10px 20px rgba(0, 0, 0, 0.15)",
            borderRadius: "6px",
            textAlign: "center"
        }}>
            <IconButton onClick={closeList} sx={{position: "absolute", top: 2, right: 2}}>
                <CloseIcon size="small" color="#000"/>
            </IconButton>
            <Typography variant="descriptionBoldRob" sx={{color: theme.palette.grey[70]}}>Your list</Typography>
            {listItems.length === 0 ? <p style={{my: 3, color: "#000"}}> No items in the list. </p> : null}
            {listItems.map((item) => (
                <Box sx={{
                    flex: "display",
                    flexDirection: "column",
                    gap: 1,
                    border: "solid 1px #fff",
                    boxShadow: "5px 0 10px rgba(0, 0, 0, 0.1)",
                    borderRadius: "6px",
                    minWidth: "200px",
                    height: "100%",
                    p: 1,
                    mt: 1,
                }} key={item.id}>
                    <Stack direction="row" sx={{justifyContent: "space-evenly"}}>
                        <Typography sx={{color: theme.palette.grey[100]}}> {item.name} </Typography>
                        <Typography variant="priceCart" color="common.black" sx={{my: 1}}
                                    sx={{color: theme.palette.grey[100]}}> {(item.price - ((item.price * item.discount) / 100)).toFixed(2)} {item.currency.toLowerCase()}</Typography>
                    </Stack>
                    <Stack direction="row" sx={{
                        mx: "auto",
                        alignItems: "center",
                        my: 1,
                        justifyContent: "space-between",
                        maxWidth: "300px"
                    }}>
                        <Button
                            variant="outlined"
                            color="primary" z
                            onClick={() => removeFromList(item.id)}
                            sx={{width: "80px", height: "30px", ml: "auto"}}
                        >
                            Remove
                        </Button>
                    </Stack>
                </Box>
            ))}
        </Box>
    );
};

