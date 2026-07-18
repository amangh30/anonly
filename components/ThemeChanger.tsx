"use client"
import { useTheme } from "next-themes";
import { Sun, Moon } from "lucide-react";

export const ThemeChanger = () =>{
  const { resolvedTheme, setTheme } = useTheme();
 
    return (
        <div>
            <button onClick={() => resolvedTheme == 'light' ? setTheme('dark') : setTheme('light')}>{resolvedTheme == 'light' ? <Moon size={24} /> : <Sun size={24} />}</button>
        </div>
    )
}