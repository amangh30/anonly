"use client"
import { useTheme } from "next-themes";

export const ThemeChanger = () =>{
    const {theme, setTheme} = useTheme();
 
    return (
        <div>
            <button onClick={() => theme == 'light' ? setTheme('dark') : setTheme('light')}>Change Theme</button>
        </div>
    )
}