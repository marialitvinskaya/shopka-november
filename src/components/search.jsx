import React, {useState} from "react";
import { styled } from "@mui/material/styles";
import { InputAdornment, Input, Paper } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import theme from "../createTheme";


const SearchContainer = styled(Paper)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  width: 668,
  height: 48,
  borderRadius: 99,
  backgroundColor: theme.palette.grey[5],
  paddingLeft: theme.spacing(1),
  paddingRight: theme.spacing(1),
  margin: "14px",
}));
const SearchBar = ({query, setQuery}) => {

    return (
        <SearchContainer elevation={0} sx={{maxWidth: "668px", height: "48px", mx: "55px"}}>
            <InputAdornment position="start">
                <SearchIcon sx={{width: 17.5, height: 17.5, color: (theme) => theme.palette.grey[50]}}/>
            </InputAdornment>
            <Input value={query} onChange={(e) => setQuery(e.target.value)} disableUnderline fullWidth
                   placeholder="search"
                   sx={{color: (theme) => theme.palette.grey[100], ...theme.typography.searchInput}}/>
        </SearchContainer>
  );
};

export default SearchBar;