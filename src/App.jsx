import { Container } from "@mui/material";
import TaskCreator from "./components/TaskCreator/TaskCreator";
import "./app.css";
import TaskList from "./components/TaskLIst/TaskList";

function App() {
  return (
    <>
      <Container
        maxWidth="md"
        sx={{ pb: 2, border: 2, mt: 1}}
      >
        <TaskCreator />
        <TaskList/>
      </Container>
    </>
  );
}

export default App;
