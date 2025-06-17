import React from 'react';
import { useTheme } from '../../theme/themeContext';
import './ThemeToggle.scss'; // importe seu SCSS aqui

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div
      className={`theme-toggle ${theme === 'dark' ? 'dark' : ''}`}
      onClick={toggleTheme}
    />
  );
};

export default ThemeToggle;
