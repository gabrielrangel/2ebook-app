import {
  createContext,
  Dispatch,
  FunctionComponent,
  SetStateAction,
  useContext,
  useReducer,
  useState,
} from "react";
import ConverterConfig from "config/converter";
import {
  stepReducer,
  StepReducerState,
  StepReducerAction,
} from "Services/App/Converter/StepReducer";

interface ConverterContextProviderValue {
  linksState: [
    FunctionComponent<{}>[],
    Dispatch<SetStateAction<FunctionComponent<{}>[]>>
  ];
  stepsReducer: [StepReducerState, Dispatch<StepReducerAction>];
}

const ConverterContext = createContext({} as ConverterContextProviderValue);

export const ConverterContextProvider: FunctionComponent = ({ children }) => {
  const linksState = useState(ConverterConfig.links);
  const stepsReducer = useReducer(stepReducer, ConverterConfig.steps);

  return (
    <ConverterContext.Provider value={{ linksState, stepsReducer }}>
      {children}
    </ConverterContext.Provider>
  );
};

export function useConverterContext() {
  return useContext(ConverterContext);
}

export default ConverterContextProvider;
