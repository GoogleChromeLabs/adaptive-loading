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

export const unsupportMessage = 'The Hardware Concurrency API is not supported on this platform.';

const useHardwareConcurrency = () => {
    const [hardwareConcurrency, setHardwareConcurrency] = useState(null);

    useEffect(() => {
        if ('hardwareConcurrency' in navigator) {
            setHardwareConcurrency(navigator.hardwareConcurrency);
        } else {
            setHardwareConcurrency({ unsupportMessage });
        }
    }, []);

    return { hardwareConcurrency };
};

export { useHardwareConcurrency };
