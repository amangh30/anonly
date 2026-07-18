import { ThemeChanger } from "./ThemeChanger";

const Navbar = () => {
    return (
        <div className="h-10 bg-[#EDEDED] dark:bg-[#121212] rounded-b-2xl">
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
                    <div>
                        <ThemeChanger />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Navbar;