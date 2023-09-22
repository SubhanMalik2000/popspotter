"use client";
import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import Button from "@mui/material/Button";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function CustomTabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const SelectionOptions = [
    { label: "All User", year: 1994 },
    { label: "All User", year: 1994 },
  ];
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        margin: "70px 0px",
      }}
    >
      <Box sx={{ width: "40%", bgcolor: "#F9F9F9" }}>
        <Box
          sx={{
            borderBottom: "1px solid #cdcdcd",

            display: "flex",
            justifyContent: "center",
          }}
        >
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="basic tabs example"
          >
            <Tab
              label="Push notification"
              sx={{
                fontSize: "14px",
                fontWeight: "400",
                textTransform: "capitalize",
              }}
              {...a11yProps(0)}
            />
            <Tab
              label="Test Message"
              sx={{
                fontSize: "14px",
                fontWeight: "400",
                textTransform: "capitalize",
              }}
              {...a11yProps(1)}
            />
          </Tabs>
        </Box>
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <CustomTabPanel value={value} index={0}>
            Sent to
            <Autocomplete
              disablePortal
              id="combo-box-demo"
              options={SelectionOptions}
              sx={{
                width: 300,
                bgcolor: "white",
                borderColor: "#D0D0D0",
                marginBottom: 2,
              }}
              renderInput={(params) => <TextField {...params} />}
            />
            Message
            <Box>
              <TextField
                multiline
                rows={4}
                sx={{ width: 300, bgcolor: "white", borderColor: "#D0D0D0" }}
              />
            </Box>
            <Button
              sx={{
                bgcolor: "#064aac !important",
                width: 300,
                marginTop: 2,
                padding: 1,
              }}
              variant="contained"
            >
              Contained
            </Button>
          </CustomTabPanel>
          <CustomTabPanel value={value} index={1}>
            Sent to
            <Autocomplete
              disablePortal
              id="combo-box-demo"
              options={SelectionOptions}
              sx={{
                width: 300,
                bgcolor: "white",
                borderColor: "#D0D0D0",
                marginBottom: 2,
              }}
              renderInput={(params) => <TextField {...params} />}
            />
            Message
            <Box>
              <TextField
                multiline
                rows={4}
                sx={{ width: 300, bgcolor: "white", borderColor: "#D0D0D0" }}
              />
            </Box>
            <Button
              sx={{
                bgcolor: "#064aac !important",
                width: 300,
                marginTop: 2,
                padding: 1,
              }}
              variant="contained"
            >
              Continue
            </Button>
          </CustomTabPanel>
        </Box>
      </Box>
    </Box>
  );
}
