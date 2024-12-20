"use client"

import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React from 'react'

function sleep(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

const TransitionLink = ({
    children,
    href,
    ...props
}: {
    children: React.ReactNode,
    href: string
}) => {

    const router = useRouter()


    const handleTransition = async (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
        e.preventDefault()

        const body = document.querySelector('body')

        body?.classList.add('page-transition')

        sleep(540)
        router.push(href)
        sleep(540)

        body?.classList.remove('page-transition')
    }

    return (
        <Link
            onClick={handleTransition}
            href={href}
            {...props}
        >
            {children}
        </Link>
    )
}

export default TransitionLink