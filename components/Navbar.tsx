import { ThemeChanger } from "./ThemeChanger";

const Navbar = () => {
    return (
        <div className="h-10 rounded-b-2xl border border-white/10 bg-white/10 backdrop-blur-md shadow-lg dark:border-white/5 dark:bg-white/5">
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