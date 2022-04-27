import Converter from "Components/Converter";
import { Paper } from "@mui/material";
import ConverterContextProvider from "Hooks/Converter/Context";

const Home = () => {
  return (
    <Paper elevation={0}>
      <Converter />
    </Paper>
  );
};

export default Home;
