import Link from "next/link";

export function NavBar() {
    return (
        <nav className="z-[200] top-0 w-full px-6 py-4">
            <div className="flex items-center justify-between mx-auto w-[90%] lg:w-[90%] xl:w-[80%]">
                <ul className="flex items-center gap-8 text-[12px] font-bold uppercase tracking-wider">
                    <li>
                        <Link
                            href={`/`}
                            className="hover:text-action transition-all duration-150 ease-linear"
                        >
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link
                            href="/"
                            className="hover:text-action transition-all duration-150 ease-linear"
                        >
                            About me
                        </Link>
                    </li>
                    <li>
                        <Link
                            href="/"
                            className="hover:text-action transition-all duration-150 ease-linear"
                        >
                            Projects
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
}