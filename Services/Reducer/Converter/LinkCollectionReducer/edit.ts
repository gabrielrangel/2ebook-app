import { LinkListState, LinkListDispatchAction, Link } from "./";

export function edit(
  links: LinkListState,
  { index, link }: LinkListDispatchAction
): LinkListState {
  return [...links.map((l, i) => (i === index ? link : l))] as Link[];
}
export default edit;
