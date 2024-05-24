export function Footer() {
    return (
        <footer className="flex-col w-full mt-20">
            <div
                className="text-[#dbdcdd] z-40 bg-[#0c0d10] lg:flex lg:h-[12rem] w-full lg:items-center lg:justify-between">
                <div
                    className="mx-auto flex w-[90%] lg:w-[95%] xl:w-[80%] flex-col space-y-10 py-6 lg:flex-row lg:items-center lg:justify-between lg:space-y-0 lg:py-0">
                    <div className="flex flex-col gap-2">
                        <p className="lg:text-[0.8rem] text-[#9c9c9c] max-w-2xl italic">Lorem ipsum dolor sit amet,
                            consectetur adipiscing elit. Fusce quam mi, semper non nisi gravida, viverra accumsan
                            tortor. Maecenas vel erat blandit, fringilla magna non, molestie eros.</p>
                    </div>
                </div>
            </div>
        </footer>
    );
}