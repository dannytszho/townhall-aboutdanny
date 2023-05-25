import Link from "next/link";
import { HomeModernIcon } from "@heroicons/react/24/solid";

export const Nav = () => {
    return (
        <div className="relative">
            <Link href='/'>
                <HomeModernIcon className="absolute w-8 h-8 right-0"></HomeModernIcon>
            </Link>
        </div>
    )
}