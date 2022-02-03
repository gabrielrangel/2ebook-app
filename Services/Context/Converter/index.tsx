import {
  useReducer,
  createContext,
  FunctionComponent,
  useContext,
  useMemo,
} from "react";

import {
  NavButtonsReducerInterface,
  NavButtonsStateInterface,
  NavButtonReducer,
} from "Services/Reducer/Converter/NavigationButtonsReducer";

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
  const links = useReducer<LinkListReducerInterface>(
    LinkCollectionReducer,
    initialLinks ?? ([] as LinkListStateInterface)
  );

  const navButtons = useReducer<NavButtonsReducerInterface>(
    NavButtonReducer,
    initialNavButtons ?? ({} as NavButtonsStateInterface)
  );

  const value: ConverterLinkListContextValue = useMemo(
    () => ({ links, navButtons }),
    [links, navButtons]
  );

  return (
    <ConverterContext.Provider value={value}>
      {children}
    </ConverterContext.Provider>
  );
};

export function useLinkCollectionContext() {
  return useContext(ConverterContext);
}

export default ConverterContextProvider;
