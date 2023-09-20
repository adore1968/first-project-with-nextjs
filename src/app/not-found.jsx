import Link from "next/link";

function ErrorPage() {
  return (
    <section className="sm:px-0 flex justify-center px-5 pt-10">
      <div className="flex flex-col gap-5 text-center">
        <h2 className="sm:text-3xl text-2xl font-bold">
          Error 404, page not found
        </h2>
        <Link
          href="/"
          className="hover:bg-sky-500 bg-sky-600 sm:text-xl text-neutral-200 block px-4 py-2 mx-auto text-lg transition-colors ease-in rounded"
        >
          Go home
        </Link>
      </div>
    </section>
  );
}

export default ErrorPage;
