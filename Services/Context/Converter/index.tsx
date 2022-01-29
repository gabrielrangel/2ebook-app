import { useReducer, createContext, FunctionComponent, useContext, useMemo } from "react";

import { State, ConverterReducer, Value } from "../../Reducer/Converter";

const initialState: State = { count: 1, links: [""] };

const ConverterContext = createContext<Value>({} as Value);

export const ConverterContextProvider: FunctionComponent = ({ children }) => {
  const [state, dispatch] = useReducer(ConverterReducer, initialState);
  const value: Value = useMemo(() => ({ state, dispatch }), [state, dispatch]);
  return <ConverterContext.Provider value={value}>{children}</ConverterContext.Provider>;
};

export function useConverterContext() {
  return useContext(ConverterContext);
}

export default ConverterContextProvider;
