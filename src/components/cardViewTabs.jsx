import React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import GridViewSharpIcon from "@mui/icons-material/GridViewSharp";
import ViewListSharpIcon from "@mui/icons-material/ViewListSharp";
import {ThemeProvider} from "@mui/material/styles";
import themeTabs from "../createThemeFilterTabs";
import {useState} from "react";


export default function CardViewTabs() {
      const [view, setView] = useState("grid");

    const handleView = ((event, newValue) =>
        setView(newValue));


  return (
      <ThemeProvider theme={themeTabs}>
        <Tabs value={view} onChange={handleView} indicatorColor="none" sx={{marginLeft: 3}}>
      <Tab
          sx={{ width: "68px",  m: 0 }}
        icon=<ViewListSharpIcon sx={{width: "18px"}}/>
        aria-label="List View"
        value="list"
      />
      <Tab
          sx={{ width: "68px",  m: 0 }}
        icon=<GridViewSharpIcon sx={{width: "18px"}} />
        aria-label="Grid View"
        value="grid"
      />
    </Tabs>
      </ThemeProvider>
  );
}



