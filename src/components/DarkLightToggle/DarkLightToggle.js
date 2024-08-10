import React from 'react';
import { Sun, Moon } from 'react-feather';
import Cookie from 'js-cookie';

import { LIGHT_TOKENS, DARK_TOKENS, COOKIE_COLOR_THEME_NAME } from '@/constants';
import VisuallyHidden from '@/components/VisuallyHidden';

function DarkLightToggle({styles, initialTheme}) {
  const [theme, setTheme] = React.useState(initialTheme);

  function handleClick() {
    const nextTheme = theme === 'light' ? 'dark' : 'light';

    setTheme(nextTheme);

    Cookie.set(COOKIE_COLOR_THEME_NAME, nextTheme, { expires: 1000});

    const COLORS = nextTheme === 'light' ? LIGHT_TOKENS : DARK_TOKENS;

    const root = document.documentElement;

    root.setAttribute('data-color-theme', nextTheme);

    Object.entries(COLORS).forEach(([key, value])=> {
      root.style.setProperty(key, value);
    });
  }

  return(
    <button className={styles} onClick={handleClick}>
      {theme === 'light' ? <Sun size="1.5rem" /> : <Moon size="1.5rem" />}
      <VisuallyHidden>
        Toggle dark / light mode
      </VisuallyHidden>
    </button>
  );
}

export default DarkLightToggle;
