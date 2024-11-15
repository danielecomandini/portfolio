import Grid from "@mui/material/Grid2"

const Column = ({children, mobile, laptop}) => {
  return <Grid size={{
    xs: mobile || 12,
    sm: laptop || 12
  }}>
    {children}
  </Grid>
}

export default Column