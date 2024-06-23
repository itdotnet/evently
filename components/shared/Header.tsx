import Image from "next/image"
import Link from "next/link"

const Header = () => {
    return (
        <header className="w-full border-b">
            <div className="wrapper flex items-center justify-between">
                <Link className="w-36" href="/">
                    <Image src="/assets/images/logo.svg" alt="Evently logo" width={128} height={38} />
                </Link>

                <div className="flex justify-end gap-3 w-32"></div>
            </div>
        </header>
    )
}

export default Header