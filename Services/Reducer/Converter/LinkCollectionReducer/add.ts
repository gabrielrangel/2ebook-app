import { Link, LinkListDispatchAction, LinkListState } from "./";

export function add(
  links: LinkListState,
  { link }: LinkListDispatchAction
): LinkListState {
  return [...links, link] as Link[];
}

export default add;
