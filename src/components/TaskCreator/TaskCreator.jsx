import { Box, Button, TextField, Typography } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";

export default function TaskCreator() {
  return (
    <Grid container>
      <Grid xs={12} md={12}>
        <Typography variant="h" component="h1">
          Add Task
        </Typography>
      </Grid>
      <Box component="form" noValidate autoComplete="off" display="flex"  width='100%'>
        <Grid xs={6} md={5}>
          <TextField fullWidth label="Title" sx={{width:'100%'}} />
        </Grid>
        <Grid xs={6} md={5}>
          <TextField fullWidth label="Data"  sx={{width:'100%'}}/>
        </Grid>

        <Grid xs={1} md={2} mr={2} ml={2}>
          <Button variant="contained" color="success" sx={{height:'100%'}}>
            Add
          </Button>
        </Grid>
      </Box>
    </Grid>
  );
}
