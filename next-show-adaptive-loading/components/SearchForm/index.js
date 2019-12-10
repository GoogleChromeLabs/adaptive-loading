
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
