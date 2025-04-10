import { createContext, ReactNode, useContext, useEffect, useState } from 'react'
import { ThemeType } from '../types/theme';

const ThemeContextProvider = createContext<ThemeType | null>(null);

const ThemeContext = ({children}: {children: ReactNode}) => {

    const themeStorage = localStorage.getItem('theme');
    const [theme, setTheme] = useState(themeStorage ? JSON.parse(themeStorage) as boolean : false)
    console.log(theme)

    useEffect(() => {
        localStorage.setItem('theme', JSON.stringify(theme));
        const html = document.querySelector('html') as HTMLHtmlElement;
        if (theme){
            html.classList.add('dark');
        }else{
            html.classList.remove('dark');
        }
    }, [theme]);

    function toggle(): void{
        setTheme(prev => !prev);
    }
    
    return (
        <ThemeContextProvider.Provider value={{dark: theme, toggle}}>
            {children}
        </ThemeContextProvider.Provider>
    )
}

export default ThemeContext;
export function useTheme(): ThemeType{
    const context = useContext(ThemeContextProvider);
    if (context === null) {
        throw new Error('Theme can´t be null.');
    };
    return context;
}