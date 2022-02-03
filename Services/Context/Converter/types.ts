import { Dispatch, ReducerState } from "react";
import {
  LinkListActionInterface,
  LinkListReducerInterface,
  LinkListStateInterface,
} from "Services/Reducer/Converter/LinkCollectionReducer";
import {
  NavButtonsActionInterface,
  NavButtonsReducerInterface,
  NavButtonsStateInterface,
} from "Services/Reducer/Converter/NavigationButtonsReducer";

export interface ConverterLinkListContextValue {
  links: [
    ReducerState<LinkListReducerInterface>,
    Dispatch<LinkListActionInterface>
  ];
  navButtons: [
    ReducerState<NavButtonsReducerInterface>,
    Dispatch<NavButtonsActionInterface>
  ];
}

export interface ConverterLinkListContextProps {
  links?: LinkListStateInterface;
  navButtons?: NavButtonsStateInterface;
}
