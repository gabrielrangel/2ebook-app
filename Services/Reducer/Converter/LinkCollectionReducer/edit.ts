import { LinkListStateInterface, LinkListActionInterface, Link } from "./";

export function edit(
  links: LinkListStateInterface,
  { index, link }: LinkListActionInterface
): LinkListStateInterface {
  return [...links.map((l, i) => (i === index ? link : l))] as Link[];
}
export default edit;
