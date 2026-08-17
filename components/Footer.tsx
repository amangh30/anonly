import { FaInstagram, FaLinkedin, FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="relative overflow-hidden border-t border-white/30 bg-white/[0.08] px-6 py-8 text-zinc-600 shadow-[0_-10px_40px_rgba(0,0,0,0.06),inset_0_1px_0_rgba(255,255,255,0.25)] backdrop-blur-2xl backdrop-saturate-200 dark:border-white/10 dark:bg-white/[0.04] dark:text-zinc-400">
      {/* Glass highlight */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/80 to-transparent dark:via-white/20" />

      {/* Ambient glow */}
      <div className="pointer-events-none absolute -top-24 left-1/2 h-48 w-48 -translate-x-1/2 rounded-full bg-pink-400/10 blur-3xl dark:bg-pink-500/10" />

      <div className="relative mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 sm:flex-row">
        <div className="text-sm">
          <span className="text-zinc-500 dark:text-zinc-500">
            Reach out:
          </span>{" "}
          <span className="font-medium text-zinc-900 dark:text-white">
            Let’s connect
          </span>
        </div>

        {/* Social glass pill */}
        <div className="flex items-center gap-1 rounded-full border border-white/30 bg-white/20 p-1.5 shadow-[inset_0_1px_0_rgba(255,255,255,0.35),0_4px_20px_rgba(0,0,0,0.04)] backdrop-blur-xl dark:border-white/10 dark:bg-white/[0.04]">
          <a
            href="#"
            aria-label="Instagram"
            className="group rounded-full p-2.5 transition-all duration-300 hover:bg-white/30 hover:text-pink-500 hover:shadow-[0_4px_20px_rgba(236,72,153,0.15)] dark:hover:bg-white/10 dark:hover:text-pink-400"
          >
            <FaInstagram
              size={18}
              className="transition-transform duration-300 group-hover:scale-110"
            />
          </a>

          <a
            href="#"
            aria-label="X"
            className="group rounded-full p-2.5 transition-all duration-300 hover:bg-white/30 hover:text-zinc-900 hover:shadow-[0_4px_20px_rgba(0,0,0,0.08)] dark:hover:bg-white/10 dark:hover:text-white"
          >
            <FaXTwitter
              size={18}
              className="transition-transform duration-300 group-hover:scale-110"
            />
          </a>
          <a
            href="#"
            aria-label="LinkedIn"
            className="group rounded-full p-2.5 transition-all duration-300 hover:bg-white/30 hover:text-blue-600 hover:shadow-[0_4px_20px_rgba(37,99,235,0.15)] dark:hover:bg-white/10 dark:hover:text-blue-400"
          >
            <FaLinkedin
              size={18}
              className="transition-transform duration-300 group-hover:scale-110"
            />
          </a>

        </div>
      </div>

      <div className="relative mx-auto mt-6 max-w-6xl border-t border-white/20 pt-5 text-center text-xs text-zinc-400 dark:border-white/10 dark:text-zinc-600 sm:text-left">
        © {new Date().getFullYear()} Aman Sinha. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;