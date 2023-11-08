import {createTheme} from "@mui/material/styles";
import theme from "./createTheme";


const themeTabs = createTheme({
    components: {

        MuiTab: {
            styleOverrides: {
                root: {
                    minHeight: "unset",
                    minWidth: "unset",
                    height: "36px",
                    color: "#5A5B6A",
                    backgroundColor: "#EBF2FF",
                    padding: 0,
                    textTransform: "none",
                    borderRadius: "4px",
                    ...theme.typography.caption,

                    "&.Mui-selected": {
                        color: "#2264D1",
                        backgroundColor: "#fff",
                        boxShadow:
                            "0px 2px 4px 0px rgba(41, 121, 255, 0.24), 0px 1px 2px 0px rgba(27, 78, 163, 0.24)",
                        ...theme.typography.captionMedium,
                    },
                },
            },
        },

        },
})


export default themeTabs;