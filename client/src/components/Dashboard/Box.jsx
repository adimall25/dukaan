import * as React from 'react';
import { Box, ThemeProvider } from '@mui/system';
// import { Typography } from "@mui/material";

export default function BoxSx(props) {
  return (
    <ThemeProvider
      theme={{
        palette: {
          primary: {
            main: props.color,
            dark: props.color,
          },
        },
      }}>
      <Box
        sx={{
          width: 300,
          height: 70,
          bgcolor: 'primary.dark',
          textAlign: 'center',
          '&:hover': {
            backgroundColor: 'primary.main',
            opacity: [0.9, 0.8, 0.7],
          },
        }}>
        <h2>{props.content}</h2>
      </Box>
    </ThemeProvider>
  );
}
