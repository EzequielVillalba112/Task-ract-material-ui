import {
  List,
  ListItem,
  ListItemText,
  Checkbox,
} from "@mui/material";

export default function TaskList() {
  return (
    <List sx={{ width: "100%",justifyContent:'space-between'}}>
      <ListItem alignItems="center">
        <ListItemText
          primary="Titulo Task"
          secondary={<>{"Lorem ipsum dolor sit amet"}</>}
        />
        <Checkbox defaultChecked color="success" />
      </ListItem>
    </List>
  );
}
