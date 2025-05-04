import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"

import { Button } from "../ui/button"
import Link from "next/link"
import { ChevronRight } from "lucide-react";


export default function Topnav() {
    return (
        <header className="border-b py-8 px-16 flex items-center justify-between sticky top-0 bg-background z-10">
            <div>
                <h1 className="font-bold">SevenBuild</h1>
            </div>
            <div className="flex items-center">
                <NavigationMenu>
                    <NavigationMenuList>

                        {/* <NavigationMenuItem>
                            <NavigationMenuTrigger>Product</NavigationMenuTrigger>
                            <NavigationMenuContent>
                                <div className="flex flex-col space-y-2 w-[200px]">

                                    <Navlink title="View all" link="/" children="hello"/>
                                </div>
                            </NavigationMenuContent>
                        </NavigationMenuItem> */}

                        <NavigationMenuItem>
                            <Link href="/" legacyBehavior passHref>
                                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                                    Product
                                </NavigationMenuLink>
                            </Link>
                        </NavigationMenuItem>

                        <NavigationMenuItem>
                            <Link href="/blog" legacyBehavior passHref>
                                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                                    Blog
                                </NavigationMenuLink>
                            </Link>
                        </NavigationMenuItem>

                        <NavigationMenuItem>
                            <Link href="/teams" legacyBehavior passHref>
                                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                                    Teams
                                </NavigationMenuLink>
                            </Link>
                        </NavigationMenuItem>

                        <NavigationMenuItem>
                            <Link href="/donate" legacyBehavior passHref>
                                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                                    Donate
                                </NavigationMenuLink>
                            </Link>
                        </NavigationMenuItem>


                    </NavigationMenuList>
                </NavigationMenu>
                
            </div>
            <div>
                <Button asChild>
                    <Link href={"/"}>
                        {"Contact"}
                    </Link>
                </Button>
            </div>

        </header>
    )
}


export function Navlink({ title, children, link }: { title: string; children?: React.ReactNode; link: string }) {
    return (
        <NavigationMenuLink>
            <Link
                href={link}
                className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
            >   
            <div className="flex items-center">
                <div className="text-sm font-medium leading-none">{title} </div>
                <ChevronRight size={"18"}/>
            </div>
                <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                    {children}
                </p>
            </Link>
        </NavigationMenuLink>
    );
}

