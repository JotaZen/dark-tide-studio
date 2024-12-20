"use client"

import {
    PopoverBody,
    PopoverContent,
    PopoverRoot,
    PopoverTrigger,
    PopoverArrow
} from "@/components/ui/popover"

import { Button, createListCollection } from '@chakra-ui/react'
import React, { startTransition, useState } from 'react'
import Cookies from 'js-cookie'
import { useRouter } from 'next/navigation'
import { usePathname } from 'next/navigation'
import { useTranslations } from 'next-intl'
import { BsTranslate } from 'react-icons/bs'

const LanguageSelect = () => {

    const router = useRouter()
    const pathName = usePathname()
    const locale = '/' + Cookies.get('NEXT_LOCALE')
    const t = useTranslations()

    const [isOpen, setIsOpen] = useState(false)
    const onLanguageChange = (value: string) => {
        Cookies.set('NEXT_LOCALE', value)
        const currentPath = pathName.replace(locale, '')
        startTransition(() => {
            router.replace(`/${value}` + currentPath)
        })
    }


    return (
        <PopoverRoot
            positioning={{
                placement: 'bottom',

            }}
            open={isOpen}
            onOpenChange={(e) => setIsOpen(e.open)}
        >
            <PopoverTrigger
                asChild

            >
                <Button
                    colorPalette={'blue'}
                    variant={'solid'}
                >
                    {t("general.language")}
                    <BsTranslate />
                </Button>
            </PopoverTrigger>
            <PopoverContent>
                <PopoverArrow />
                <PopoverBody p={0} m={0} display={'flex'} flexDir={'column'}>
                    {
                        languages.items.map((item, index) => (
                            <Button
                                borderRadius={0}
                                flex={1}
                                m={0}
                                p={5}
                                key={index}
                                variant="ghost"
                                onClick={() => {
                                    onLanguageChange(item.value)
                                }}
                            >
                                {item.label}
                            </Button>
                        ))
                    }
                </PopoverBody>
            </PopoverContent>
        </PopoverRoot>
    )
}

export default LanguageSelect

const languages = createListCollection({
    items: [
        { label: "(🇺🇸) English", value: "en" },
        { label: "(🇪🇸) Español", value: "es" },
    ],
})