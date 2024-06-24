import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs"
import Image from "next/image"
import Link from "next/link"
import { Button } from "../ui/button"
import NavItems from "./NavItems"
import MobileNav from "./MobileNav"

const Header = () => {
    return (
        <header className="w-full border-b">
            <div className="wrapper flex items-center justify-between">
                <Link className="w-36" href="/">
                    <Image src="/assets/images/logo.svg" alt="Evently logo" width={128} height={38} />
                </Link>

                <SignedIn>
                    <nav className="md:flex-between hidden w-full max-w-xs">
                        <NavItems/>
                    </nav>
                </SignedIn>

                <div className="flex justify-end gap-3 w-32">
                    <SignedIn>
                        <UserButton afterSignOutUrl="/"/>
                        <MobileNav/>
                    </SignedIn>
                    <SignedOut>
                        <Button asChild className="rounded-full" size="lg">
                            <Link href="/sign-in">Login</Link>
                        </Button>
                    </SignedOut>
                </div>
            </div>
        </header>
    )
}

export default Header