import Converter from "Components/Converter";
import { Paper } from "@mui/material";
import ConverterContextProvider from "Services/Context/Converter";

const Home = () => {
  return (
    <Paper elevation={0}>
      <ConverterContextProvider>
        <Converter />
      </ConverterContextProvider>
    </Paper>
  );
};

export default Home;
