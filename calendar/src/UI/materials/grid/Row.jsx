import Grid from "@mui/material/Grid2";

const Row = ({ children, spacing }) => {
  return (
    <Grid container spacing={spacing || 1}>
      {children}
    </Grid>
  );
};

export default Row;
