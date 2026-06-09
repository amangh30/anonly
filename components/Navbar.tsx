const Navbar = () => {
    return (
        <div className="h-10 dark:bg-[#121212] light:bg-red-900">
            <div className="flex justify-between p-2">
                <div>
                    Anonly
                </div>
                <div className="flex gap-2">
                    <div>
                        Home
                    </div>
                    <div>
                        About
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Navbar;