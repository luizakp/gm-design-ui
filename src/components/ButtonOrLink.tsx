import React from "react";
import { ComponentProps } from "react";

type ButtonOrLinkProps = ComponentProps<"button"> & ComponentProps<"a">;

export type Props = ButtonOrLinkProps;

export function ButtonOrLink({ href, ...props }: Props) {
  const isLink = typeof href !== "undefined";
  const ButtonOrLink = isLink ? "a" : "button";

  const content = <ButtonOrLink {...props} />;

  if (isLink) {
    return <a href={href}>{content}</a>;
  }

  return content;
}
