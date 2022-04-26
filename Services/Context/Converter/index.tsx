import {
  useReducer,
  createContext,
  FunctionComponent,
  useContext,
  useMemo,
} from "react";

import {
  LinkCollectionReducer,
  LinkListReducerInterface,
  LinkListStateInterface,
} from "../../Reducer/Converter/LinkCollectionReducer";

import {
  ConverterLinkListContextProps,
  ConverterLinkListContextValue,
} from "./types";

const ConverterContext = createContext<ConverterLinkListContextValue>(
  {} as ConverterLinkListContextValue
);

export const ConverterContextProvider: FunctionComponent<
  ConverterLinkListContextProps
> = ({ children, links: initialLinks, navButtons: initialNavButtons }) => {
  return <>{ children }</>;
};

export function useLinkCollectionContext() {
  return useContext(ConverterContext);
}

export default ConverterContextProvider;
