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

import { useState, useEffect } from 'react';

export const unsupportMessage = 'The Media Capabilities API is not supported on this platform.';
export const noConfigMessage = 'No config found, make sure you pass in a `mediaConfig` property';

const useMediaCapabilities = ({ mediaConfig } = {}) => {
    const [mediaCapabilities, setMediaCapabilities] = useState(null);

    useEffect(() => {
        let validation = null

        if (!('mediaCapabilities' in navigator)) {
            validation = {
                ...validation,
                unsupportMessage
            }
        }

        if (!mediaConfig) {
            validation = {
                ...validation,
                noConfigMessage
            }
        }
        
        setMediaCapabilities(validation || navigator.mediaCapabilities.decodingInfo(mediaConfig));
    }, []);

    return { mediaCapabilities };
};

export { useMediaCapabilities };
