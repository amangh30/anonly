"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export function ThemeChanger() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <button
      onClick={() =>
        setTheme(resolvedTheme === "light" ? "dark" : "light")
      }
    >
      {resolvedTheme === "light" ? (
        <Moon size={24} />
      ) : (
        <Sun size={24} />
      )}
    </button>
  );
}