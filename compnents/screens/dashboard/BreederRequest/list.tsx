"use client";
import * as React from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";
import Typography from "@mui/material/Typography";

export default function SimplePaper() {
  const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    color: theme.palette.text.secondary,
    height: 60,
    padding: "10px 15px",
    // lineHeight: "60px",
  }));

  const showDate = new Date();
  const dateTime =
    showDate.getDate() +
    `/` +
    showDate.getMonth() +
    `/` +
    showDate.getFullYear();

  const location = "Texas";
  const ListItem = [0, 1, 2, 3, 4, 6];
  return (
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
        "& > :not(style)": {
          width: "100%",
          height: 85,
          margin: "4px 22px",
        },
      }}
    >
      {ListItem.map((elevation) => (
        <Item
          key={elevation}
          elevation={0}
          sx={{
            "&:hover": { borderLeft: "5px solid #064aac", bgcolor: "#ecf0f5" },
          }}
        >
          <Typography
            variant="subtitle1"
            color="initial"
            sx={{
              fontWeight: 700,
              color: "#064aac",
            }}
          >{`Gates Collins`}</Typography>

          {`Request Data: ${dateTime}`}
          <br />
          {`Location: ${location}`}
        </Item>
      ))}
    </Box>
  );
}
