import { createContext, useContext, useEffect } from 'react';
import { useLocalStorageState } from '../hooks/useLocalStorageState';

const ThemeModeContext = createContext();

function ThemeModeProvider({ children }) {
	const [isLightMode, setIsLightMode] = useLocalStorageState(
		!window.matchMedia('(prefers-color-scheme: dark)').matches,
		'isLightMode'
	);

	useEffect(
		function () {
			if (isLightMode) {
				document.documentElement.classList.add('light-mode');
				document.documentElement.classList.remove('dark-mode');
			} else {
				document.documentElement.classList.add('dark-mode');
				document.documentElement.classList.remove('light-mode');
			}
		},
		[isLightMode]
	);

	function toggleThemeMode() {
		setIsLightMode((isLight) => !isLight);
	}

	return (
		<ThemeModeContext.Provider value={{ isLightMode, toggleThemeMode }}>{children}</ThemeModeContext.Provider>
	);
}

function useThemeMode() {
	const context = useContext(ThemeModeContext);
	if (context === undefined) throw new Error('ThemeModeContext used out side the provider');
	return context;
}

export { ThemeModeProvider, useThemeMode };
