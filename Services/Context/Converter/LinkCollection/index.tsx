import {
  useReducer,
  createContext,
  FunctionComponent,
  useContext,
  useMemo,
  Dispatch,
} from "react";

import {
  LinkListDispatchAction,
  LinkCollectionReducer,
  LinkListState,
  Link,
} from "../../../Reducer/Converter/LinkCollectionReducer";

export interface ConverterLinkListContextValue {
  links: LinkListState;
  dispatchLinks: Dispatch<LinkListDispatchAction>;
}

export interface ConverterLinkListContextProps {
  initialState?: Link[];
}

const ConverterContext = createContext<ConverterLinkListContextValue>(
  {} as ConverterLinkListContextValue
);

export const LinkCollectionContextProvider: FunctionComponent<
  ConverterLinkListContextProps
> = ({ children, initialState = [] as Link[] }) => {
  const [links, dispatchLinks] = useReducer(
    LinkCollectionReducer,
    initialState
  );
  const value: ConverterLinkListContextValue = useMemo(
    () => ({ links, dispatchLinks }),
    [links, dispatchLinks]
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

export default LinkCollectionContextProvider;
