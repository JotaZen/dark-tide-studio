"use client";

import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'

const LinkLocalizated = ({
    children,
    href
}: {
    children: React.ReactNode
    href: string
}) => {

    return (
        <Link
            locale={locale}
            href={href}
        >
            {children}
        </Link>
    )
}

export default LinkLocalizated