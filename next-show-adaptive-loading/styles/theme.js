/*
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

const defaultFontFamily = '-apple-system, BlinkMacSystemFont, sans-serif';

const theme = {
  breakpoints: {
    xs: 0,
    sm: 600,
    md: 960,
    lg: 1280,
    xl: 1920
  },
  typography: {
    fontFamily: defaultFontFamily,
    fontSize: 16,
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
    fontWeightBold: 700,
    h1: {
      fontFamily: defaultFontFamily,
      fontWeight: 300,
      fontSize: '6rem',
      lineHeight: 1,
      letterSpacing: '-0.01562em'
    },
    body2: {
      fontFamily: defaultFontFamily,
      fontWeight: 400,
      fontSize: '0.875rem',
      lineHeight: 1.43,
      letterSpacing: '0.01071em'
    },
    button: {
      fontFamily: defaultFontFamily,
      fontWeight: 700,
      fontSize: '0.875rem',
      lineHeight: 'normal',
      letterSpacing: '0.02857em'
    }
  },
  palette: {
    primary: {
      main: '#08e',
      contrastText: '#fff'
    },
    text: {
      primary: '#fff',
      secondary: 'rgb(214, 216, 218)'
    },
    background: {
      paper: '#fff',
      default: '#333'
    }
  }
};

export default theme;
