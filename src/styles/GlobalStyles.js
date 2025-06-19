import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
    body{
    margin:0;
    font-family:'Franklin Gothic Medium ','Arial Narrow ' , 'Arial , sans-serif';
    -webkit-font-smoothing: antialiased ;
    -moz-osx-font-smoothing:grayscale';

    background-color:${({ theme }) => theme.colors.background};
    colors:${({ theme }) => theme.colors.text};
    transition:background-color 0.3s ease , color 0.3s ease;
    }
`;
