import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import LogoHeader from "./logo.jsx";
import "../App.css";
import AccountButtons from "./watchbutton";
import SearchBar from "./search.jsx";
import Stack from "@mui/material/Stack";

function ResponsiveAppBar({setQuery, cartItems, removeFromCart, count}) {
  return (
    <AppBar
      position="static"
      disableGutters
      sx={{
          backgroundColor: "#fff", maxWidth: "1383px"
      }}
      elevation={0}
    >
      <Container
        maxWidth={false}
        disableGutters
        sx={{
          width: "100%",
          padding: "0 16px",
        }}
      >
        <Toolbar disableGutters>
            <LogoHeader/>
            <SearchBar setQuery={setQuery} sx={{mx: "55px"}}/>
            <Stack direction="row" sx={{ml: "auto"}}>
                <AccountButtons cartItems={cartItems} removeFromCart={removeFromCart} count={count}/>
                <Avatar alt="User Pic" src="/assets/Edward Powlowski.svg" sx={{ml: 3.25}}/>
            </Stack>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;
