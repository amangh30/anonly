const Footer = () => {
  return (
    <footer className="relative border-t border-white/20 bg-white/10 px-6 py-8 text-zinc-600 shadow-[0_-8px_30px_rgba(0,0,0,0.04)] backdrop-blur-xl backdrop-saturate-150 dark:border-white/10 dark:bg-white/[0.03] dark:text-zinc-400">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 sm:flex-row">
        <div className="text-sm">
          <span className="text-zinc-500 dark:text-zinc-500">
            Reach out:
          </span>{" "}
          <span className="font-medium text-zinc-900 dark:text-white">
            Let’s connect
          </span>
        </div>

        <div className="flex items-center gap-6 text-sm">
          <a
            href="#"
            className="transition-colors hover:text-pink-500 dark:hover:text-pink-400"
          >
            Instagram
          </a>

          <a
            href="#"
            className="transition-colors hover:text-sky-500 dark:hover:text-sky-400"
          >
            Twitter
          </a>
        </div>
      </div>

      <div className="mx-auto mt-6 max-w-6xl border-t border-white/20 pt-5 text-center text-xs text-zinc-400 dark:border-white/10 dark:text-zinc-600 sm:text-left">
        © {new Date().getFullYear()} Aman Sinha. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;