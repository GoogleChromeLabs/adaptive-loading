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

const SvgIconButton = ({ name, width, height, onClick, withHoverEffect }) => (
  <button
    id='svg-icon'
    aria-label='icon'
    className={withHoverEffect ? 'svg-icon-container' : 'svg-icon-container__no-hover-effect'}
    onClick={onClick}>
    <div className='svg-icon'></div>
    <style jsx>{`
      .svg-icon-container, .svg-icon-container__no-hover-effect {
        position: relative;
        cursor: pointer;
        padding: 12px;
        box-sizing: border-box;
        border: none;
        outline: none;
        background-color: transparent;
        fill: currentColor;
      }
      .svg-icon-container:hover:after {
        position: absolute;
        top: calc(50% - 50%);
        left: calc(50% - 50%);
        width: 100%;
        height: 100%;
        background-color: #fff;
        opacity: 0.08;
        border-radius: 50%;
        transition: opacity 15ms linear, background-color 15ms linear;
        pointer-events: none;
        content: "";
      }
      .svg-icon {
        width: ${width || '24px'};
        height: ${height || '24px'};
        background-image: url(/static/images/icons/${name}.svg);
        background-repeat: no-repeat;
        background-position: center;
        background-size: contain;
      }
    `}</style>
  </button>
);

export default SvgIconButton;
