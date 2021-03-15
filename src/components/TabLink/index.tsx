import React, { ReactNode } from "react";
import NextLink from 'next/link';

type Props = {
  href: string,
  children: ReactNode
}

export default function TabLink({ href, children }: Props) {
  return (
    <NextLink href={href} passHref>
      {children}
    </NextLink>
  )
}