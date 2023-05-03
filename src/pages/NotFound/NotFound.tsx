import './NotFound.scss';

export const NotFound = () => {
  return (
    <div className="not-found">
      <h1 className="not-found__text not-found__text-decorate">404</h1>
      <p className="not-found__text">Oops! Something is wrong.</p>
      <a className="not-found__button">Go back in initial page, is better.</a>
    </div>
  );
};
