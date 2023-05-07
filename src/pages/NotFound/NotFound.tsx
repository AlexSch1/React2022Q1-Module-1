import './NotFound.scss';
import { Link, useRouteError } from 'react-router-dom';

export const NotFound = () => {
  const error = useRouteError();

  return (
    <div className="not-found">
      <h1 className="not-found__text not-found__text-decorate">404</h1>
      <p className="not-found__text">Oops! Something is wrong.</p>
      <p className="not-found__text">{error.error?.message}</p>
      <Link to={`/`}>Go back in initial page, is better.</Link>
    </div>
  );
};
