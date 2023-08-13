import { Grid } from "@mui/material";
import { ReactNode } from "react";

const AuthLayout = ({ children }: { children: ReactNode }) => {
  return (
    <Grid
      sx={{ p: 2 }}
      container
      direction="column"
      justifyContent="flex-start"
      alignItems="center"
    >
      <img src="misc-logo.png" alt="misc-logo" height="40px" />
      <main>{children}</main>
    </Grid>
  );
};

export default AuthLayout;
