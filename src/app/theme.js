import { createTheme } from '@mui/material/styles';
import "@fontsource/raleway/500.css";
import "@fontsource/raleway/700.css";
import "@fontsource/raleway/cyrillic-500.css";
import "@fontsource/raleway/cyrillic-600.css";

//Создание темы MUI
const themeConfig = createTheme({
    breakpoints: {
      values: {
          xs: 0,
          sm: 800,
          md: 1012 //980 + внутренние отступы контейнера
      },
    },
    container: {
      maxWidth: 'md',
    },
    typography: {
        fontFamily: 'Raleway, sans-serif',
        fontWeightRegular: 500,
        fontWeightMedium: 600,
        fontWeightBold: 700,
    },
});

export default themeConfig;
