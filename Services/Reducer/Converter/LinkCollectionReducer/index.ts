import { add } from "./add";
import { remove } from "./remove";
import { edit } from "./edit";
import { removeAll } from "./removeAll";
import { LinkListDispatchAction, LinkListState } from "./types";

export * from "./types";

export function LinkCollectionReducer(
  links: LinkListState,
  action: LinkListDispatchAction
): LinkListState {
  switch (action.type) {
    case "add":
      return add(links, action);
    case "edit":
      return edit(links, action);
    case "remove":
      return remove(links, action);
    case "removeAll":
      return removeAll(links, action);
    default:
      return [...links];
  }
}

export default LinkCollectionReducer;
