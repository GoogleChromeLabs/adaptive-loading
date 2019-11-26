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

const Backdrop = ({ isShown, onClick }) => (
  isShown ? (
    <>
      <div className='backdrop' onClick={onClick} />
      <style jsx>{`
        .backdrop {
          width: 100%;
          height: 100%;
          position: fixed;
          z-index: 100;
          left: 0;
          top: 0;
          background-color: rgba(0, 0, 0, 0.5);
        }
      `}</style>
    </>
  ) : null
);

export default Backdrop;
