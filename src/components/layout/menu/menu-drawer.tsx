"use client"

import { Button } from "@/components/ui/button"
import {
    DrawerBackdrop,
    DrawerBody,
    DrawerCloseTrigger,
    DrawerContent,
    DrawerFooter,
    DrawerHeader,
    DrawerRoot,
    DrawerTitle,
    DrawerTrigger,
} from "@/components/ui/drawer"
import { BsList } from "react-icons/bs"
import Logo from "../nav-bar/logo"
import MenuLinksAll from "../nav-bar/menu-links-all"

const MenuDrawer = ({
    open,
    setOpen,
}: {
    open: boolean,
    setOpen: (open: boolean) => void
}) => {
    return (
        <DrawerRoot
            open={open}
            onOpenChange={(e) => setOpen(e.open)}
            modal={true}

        >
            <DrawerTrigger asChild>
                <Button variant="ghost" size="lg">
                    <BsList />
                </Button>
            </DrawerTrigger>
            <DrawerBackdrop />

            <DrawerContent
                className="glass-dark"
                borderRadius={0}
                zIndex={12}
            >
                <DrawerHeader pt={10}>
                    <DrawerTitle>
                        <Logo />
                    </DrawerTitle>
                </DrawerHeader>
                <DrawerBody>
                    <MenuLinksAll />
                </DrawerBody>
                <DrawerFooter>
                    {/* <DrawerActionTrigger asChild>
                        <Button variant="outline">Cancel</Button>
                    </DrawerActionTrigger>
                    <Button>Save</Button> */}
                </DrawerFooter>
                <DrawerCloseTrigger />
            </DrawerContent>
        </DrawerRoot>
    )
}

export default MenuDrawer