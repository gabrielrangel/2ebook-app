import { LinkListState, LinkListDispatchAction } from "./types";

export function remove(
  links: LinkListState,
  { index }: LinkListDispatchAction
) {
  return links.filter((_, i) => i !== index);
}

export default remove;
