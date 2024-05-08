import { useRouteError, Link } from 'react-router-dom';

function Error() {
  const error = useRouteError();
  console.log({ error });

  if (error.status === 404) {
    return (
      <main className="grid min-h-[100vh] place-items-center px-0">
        <div className="text-center">
          <p className="text-9xl font-semibold text-primary">404</p>
          <h1 className="mt-4 text-3xl font-bold tracking-tight sm:text-5xl">
            page not found
          </h1>
          <p className="mt-6 text-lg leading-7">
            Sorry, we coudn't find the page you are looking for.
          </p>
          <div className="mt-10">
            <Link to="/" className="btn btn-secondary">
              go back home
            </Link>
          </div>
        </div>
      </main>
    );
  }
  return (
    <main className="grid min-h-[100vh] place-items-center px-0">
      <h4 className="text-center font-bold text-4xl">there was an error</h4>
    </main>
  );
}
export default Error;
