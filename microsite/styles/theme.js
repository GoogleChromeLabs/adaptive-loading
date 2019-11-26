/*
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

const theme = {
  fontFamily: {
    sansSerif: '-apple-system, "Helvetica Neue", Arial, sans-serif',
    mono: 'Menlo, Monaco, monospace',
    roboto: '"Roboto", Arial, sans-serif'
  },
  colors: {
    text: '#fff',
    subText: 'rgb(214, 216, 218)',
    anchorTextOnDark: '#3e7bb7',
    background: '#202124',
    headerBackground: '#212121'
  },
  linkHoveringEffect: `
    transition: color .1s cubic-bezier(.4,0,.2,1);
  `,
  imageHoveringEffect: `
    box-shadow: 0 0 0 1px rgba(255,255,255,.16);
    transition: box-shadow .3s cubic-bezier(.4,0,.2,1);
  `,
  breakpoint: {
    mobile: 521,
    tablet: 921
  }
};

export default theme;
