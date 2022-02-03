import { LinkListStateInterface, LinkListActionInterface } from "./types";

export function remove(
  links: LinkListStateInterface,
  { index }: LinkListActionInterface
) {
  return links.filter((_, i) => i !== index);
}

export default remove;
