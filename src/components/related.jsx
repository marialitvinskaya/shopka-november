import * as React from "react";
import { styled } from "@mui/material/styles";
import Chip from "@mui/material/Chip";
import { Stack } from "@mui/material";
import Typography from "@mui/material/Typography";
import theme from "../createTheme";

const ListItem = styled("li")(({ theme }) => ({
  margin: theme.spacing(0.5),
}));

export default function ChipsArray() {
  const chipData = [
    { key: 0, label: "worldwide shipping" },
    { key: 1, label: "under $50" },
    { key: 2, label: "kitten" },
    { key: 3, label: "plastic plugs" },
    { key: 4, label: "pucker shoes" },
    { key: 5, label: "vintage typewriter" },
  ];

  const handleClick = () => {
    console.info("You clicked the Chip.");
  };

  return (
    <Stack direction="row" alignItems="center" sx={{ mt: 5, mb: 2 }}>
      <Typography variant="captionMedium" sx={{color: (theme) => theme.palette.grey[100]}}>Related</Typography>
      <Stack
        direction="row"
        spacing={1}
        sx={{
          display: "flex",
          justifyContent: "center",
            flexWrap: "nowrap",
          listStyle: "none",
            p: 0,
            mx: 0.5,
        }}
        component="ul"
      >
        {chipData.map((data) => {
          return (
            <ListItem key={data.key}>
                <Chip sx={{
                    height: "32px",
                    px: 1.5,
                    py: 0.75,
                    color: (theme) => theme.palette.grey[70],
                    backgroundColor: (theme) => theme.palette.grey[5], ...theme.typography.caption
                }} label={data.label} onClick={handleClick}/>
            </ListItem>
          );
        })}
      </Stack>
    </Stack>
  );
}
