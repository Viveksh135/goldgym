import React from "react";
import { Box, Stack, Typography } from "@mui/material";
import Logo from "../assets/images/Logo-12.png";
const Footer = () => {
  return (
    <Box mt="80px" bgcolor="#fff3f4">
      <Stack gap="40px" alignItems="center" px="40px" pt="24px">
        <img src={Logo} alt="logo" width="200px" height="42px" />
        <Typography variant="h6" pb="40px" mt="20px">
          Made by admin {` `} all rights reserved
        </Typography>
      </Stack>
    </Box>
  );
};

export default Footer;
