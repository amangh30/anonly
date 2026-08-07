import { ThemeChanger } from "./ThemeChanger";

const Navbar = () => {
  return (
    <div className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4">
      <nav className="flex w-full max-w-4xl items-center justify-between rounded-2xl border border-gray-200/50 bg-white/70 px-6 py-4 shadow-lg backdrop-blur-md dark:border-gray-700/50 dark:bg-gray-900/70">
        {/* Logo */}
        <h1 className="text-2xl font-bold">Anonly</h1>

        {/* Navigation */}
        <div className="flex items-center gap-8">
          <button className="text-sm font-medium text-gray-700 transition-colors hover:text-blue-500 dark:text-gray-300 dark:hover:text-blue-400">
            Home
          </button>

          <button className="text-sm font-medium text-gray-700 transition-colors hover:text-blue-500 dark:text-gray-300 dark:hover:text-blue-400">
            About
          </button>

          <div className="h-6 w-px bg-gray-300 dark:bg-gray-700" />

          <ThemeChanger />
        </div>
      </nav>
    </div>
  );
};

export default Navbar;