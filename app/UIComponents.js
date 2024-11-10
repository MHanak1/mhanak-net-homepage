'use client'

import { BsMoonStarsFill, BsSunFill, BsGithub} from "react-icons/bs";
import { useTheme } from 'next-themes'

export const ThemeChanger = () => {
  const { theme, setTheme } = useTheme();

  return (
	<button onClick={() => theme == "dark"? setTheme('light'): setTheme("dark")}>
	  <div className="highlightable rounded-full flex size-10 justify-center items-center hover:text-yellow-500">
		  <BsSunFill className="dark:hidden inline"/>
		  <BsMoonStarsFill className="dark:inline hidden"/>
	  </div>
	</button>
  );
};

