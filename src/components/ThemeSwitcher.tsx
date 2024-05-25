import { useTheme } from "next-themes";


export default function ThemeSwitcher() {
  const { setTheme } = useTheme();

  const setLightTheme = () => setTheme('light')
  const setDarkTheme = () => setTheme('dark')

  return (
    <div className="flex space-x-5">
      <button onClick={setLightTheme}>Light</button>
      <button onClick={setDarkTheme}>Dark</button>
    </div>
  );
} 
