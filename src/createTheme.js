import {createTheme} from "@mui/material/styles";
import {isDisabled} from "@testing-library/user-event/dist/utils";

const theme = createTheme({
typography: {

    //fontWeightRegular: 400
    //medium 500
    //bold 700
caption: {
    fontFamily: "Inter",
    fontSize: "0.875rem",
    fontWeight: 400,
    lineHeight: 1.43,
},
    captionMedium: {
        fontFamily: "Inter",
        fontSize: "0.875rem",
        fontWeight: 500,
        lineHeight: 1.43,
    },
    badge: {
        fontFamily: "Quicksand",
        fontSize: "0.875rem",
        fontWeight: 700,
        lineHeight: 1.43,
    },

    price: {
    fontFamily: "Inter",
        fontSize: "1.5rem",
        fontWeight: 700,
        lineHeight: 1.5,
    },
    priceCart: {
        fontFamily: "Inter",
        fontSize: "1rem",
        fontWeight: 700,
        lineHeight: 1.5,
    },
description: {
    fontFamily: "Inter",
    fontSize: "1rem",
    fontWeight: 400,
    lineHeight: 1.5,
},
    descriptionMedium: {
        fontFamily: "Inter",
        fontWeight: 500,
        fontSize: "1rem",
        lineHeight: 1.5,
    },
    descriptionBoldRob: {
        fontFamily: "Roboto",
        fontSize: "1rem",
        fontWeight: 700,
        lineHeight: 1.5,
    },
    h6: {
        fontFamily: "Quicksand",
        fontSize: "1.25rem",
        fontWeight: 700,
        lineHeight: 1.5,
    },
    button: {
        fontFamily: "Inter",
        fontWeight: 500,
        lineHeight: 1.58,
        textTransform: "none"
    },
    searchInput: {
        fontFamily: "Inter",
        fontSize: "1.25rem",
        fontWeight: 400,
        lineHeight: 1.58,
        color: "#19191D",
    },
},

    palette: {
        primary: {
            blue60: "#2979FF",
            main: "#2264D1",
            light: "#9DC2FF",
            superLight: "#EBF2FF"
        },
        grey: {
            100: "#19191D",
            70: "#4A4B57",
            60: "#5A5B6A",
            50: "#787885",
            40: "#9696A0",
            30: "#B4B4BB",
            5: "#EDEDF0",
            0: "#F7F7FA",
        },
        pink: {
            70: "#C23564",
            5: "#FDEDF2",
        },
        green: {
            70: "#37833B",
5: "#ECF7ED",
        },
        red: {
            main: "#F44336",
        }
    },

    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    margin: 0,
                    p: 0,
                    '&:hover': {
                        '& .MuiTouchRipple-root': {
                            backgroundColor: 'transparent', // Set the ripple color to transparent on hover
                        },
                    },
                    '& .MuiTouchRipple-root': {
                        backgroundColor: 'transparent', // Set the ripple color to transparent on hover
                    },
                },
            },
        },

        MuiFormControl: {
            styleOverrides: {
                root: {
                    minWidth: 136,

                },
            },
        },
        MuiInputBase: {
            styleOverrides: {
                root: {},
            },
        },
        MuiSelect: {
            styleOverrides: {
                root: {
                    position: "relative",
height: "36px",
                    padding: 0,
                },
            },
        },
        MuiInputLabel: {
            styleOverrides: {
                root: {
                    color: "#787885",
                    fontFamily: "Inter",
                    fontSize: "0.875rem",
                    fontWeight: 500,
                    lineHeight: 1.43,
                    top: "-22%",
                },
            },
        },

        MuiOutlinedInput: {
            styleOverrides: {
                input: {
                    paddingLeft: 12,
                },
            },
        },
        MuiMenuItem: {
            styleOverrides: {
                root: {
                    color: "#19191D",
                    fontFamily: "Inter",
                    fontSize: "0.875rem",
                    fontWeight: 500,
                    lineHeight: 1.43,
                },
            },
        },

        MuiCardContent: {
            styleOverrides: {
                root: {
                    display: "flex",
                    flexDirection: "column",
                    alignContent: "space-between",
                },
            },
        },

        MuiAccordionActions:{
            styleOverrides:{
                root: {
                    display: "flex",
                    flexDirection: "column",
                   alignItems: "flex-end",
                },
            },
        },
        MuiList: {
            styleOverrides: {
                root: {
                    padding: 0
                },
            },
        },
        MuiListItem: {
            styleOverrides: {
                root: {
                    padding: 0
                },
            },
        },
        MuiListItemText: {
            styleOverrides: {
                root: {
                    marginBottom: 16,
                    marginTop: 0
                },
            },
        },


    },
});


export default theme;

