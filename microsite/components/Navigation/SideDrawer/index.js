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

// TODO: not implemented yet
// import Logo from '../../Logo';
// import NavigationList from '../NavigationList';
import Backdrop from '../../UI/Backdrop';
import theme from '../../../styles/theme';

// TODO: side drawer hidden for now
const SideDrawer = ({ isOpened, onClose }) => {
    let attachedClasses = ['side-drawer', 'is-closed'];
    if (isOpened) {
      attachedClasses = ['side-drawer', 'is-opened'];
    }
    return (
      <>
        <Backdrop isShown={isOpened} onClick={onClose}/>
        <aside className={attachedClasses.join(' ')}>
          <div className='logo'>
            LOGO
            {/* <Logo /> */}
          </div>
          <nav>
            NAV
            {/* <NavigationList /> */}
          </nav>
        </aside>
        <style jsx>{`
          .side-drawer {
            position: fixed;
            width: 280px;
            max-width: 70%;
            height: 100%;
            left: 0;
            top: 0;
            z-index: 200;
            background-color: #fff;
            padding: 32px 16px;
            box-sizing: border-box;
            transition: transform 0.3s ease-out;
            
            transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
            box-shadow: 0px 8px 10px -5px rgba(0, 0, 0, 0.2), 0px 16px 24px 2px rgba(0, 0, 0, 0.14), 0px 6px 30px 5px rgba(0, 0, 0, 0.12);
            border-color: rgba(0, 0, 0, 0.12);
            border-right-width: 1px;
            border-right-style: solid;
            overflow: hidden;
          }
          .is-opened {
            transform: translateX(0);
          }
          .is-closed {
            transform: translateX(-100%);
          }
          // TODO: not implemented yet
          // .logo {
          //   height: 11%;
          //   margin-bottom: 32px;
          // }
          @media (min-width: ${theme.breakpoints.sm}px) {
            .side-drawer {
              // display: none;
            }
          }
        `}</style>
      </>
    );
};

export default SideDrawer;
