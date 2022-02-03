import { Link, LinkListActionInterface, LinkListStateInterface } from "./";

export function add(
  links: LinkListStateInterface,
  { link }: LinkListActionInterface
): LinkListStateInterface {
  return [...links, link] as Link[];
}

export default add;
