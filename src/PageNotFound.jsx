import { Link } from 'react-router-dom';

function PageNotFound() {
  return (
    <div className="flex h-[70vh] flex-col items-center justify-center px-6 text-center">
      <h1 className="text-9xl font-black text-zinc-900">404</h1>
      <p className="mt-4 text-2xl text-zinc-400">
        You have drifted too far from the center.
      </p>
      <Link
        to="/"
        className="mt-8 border border-zinc-700 px-6 py-2 text-xs tracking-widest uppercase transition-all hover:bg-white hover:text-black"
      >
        Return to existence
      </Link>
    </div>
  );
}

export default PageNotFound;
