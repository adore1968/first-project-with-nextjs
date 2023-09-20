import Link from "next/link";

function UserCard({ user }) {
  const { id, first_name, last_name, email, avatar } = user;

  return (
    <Link
      href={`/users/${id}`}
      className="bg-neutral-900 sm:max-w-2xl sm:flex-row sm:gap-0 last-of-type:mb-5 hover:bg-neutral-800 flex flex-col justify-between w-full gap-5 p-5 transition-colors ease-in rounded"
    >
      <div className="sm:text-left text-center">
        <h3 className="sm:text-2xl mb-1 text-xl font-medium">
          {id}. {first_name} {last_name}
        </h3>
        <p className="sm:text-xl text-neutral-200 text-lg">{email}</p>
      </div>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={avatar}
        alt={email}
        className="sm:w-auto sm:mx-0 w-32 mx-auto rounded-full"
      />
    </Link>
  );
}

export default UserCard;
