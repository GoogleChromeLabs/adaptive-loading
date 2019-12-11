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

import Router from 'next/router';

import TextField from '../TextField';
import ContainedButton from '../ContainedButton';
import { serializeToQueryParam } from '../../utils/helpers';
import { PAGES, QUERY_PARAMS } from '../../utils/constants';

const SearchForm = ({ shows }) => {
  const onSubmitHandler = event => {
    Router.push(serializeToQueryParam({[event.target[QUERY_PARAMS.QUERY].name]: event.target[QUERY_PARAMS.QUERY].value}, PAGES.SEARCH));
    event.preventDefault();
  };
  return (
    <>
      <div>
        <h1>{shows.length > 0 ? 'Search' : 'No results found'}</h1>
        <form onSubmit={onSubmitHandler}>
          <TextField label='' name={QUERY_PARAMS.QUERY} />
          <ContainedButton type='submit'>Submit</ContainedButton>
        </form>
      </div>
      <style jsx>{`
        h1 {
          margin-top: 36px;
        }
        form {
          display: flex;
          width: 294px;
          margin: 24px auto;
        }
      `}</style>
    </>
  );
};

export default SearchForm;
