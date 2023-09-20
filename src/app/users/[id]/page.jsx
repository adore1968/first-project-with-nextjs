import axios, { AxiosError } from "axios";

const getUser = async (id) => {
  try {
    const { status, data } = await axios(`https://reqres.in/api/users/${id}`);
    if (status === 200) {
      return data.data;
    }
  } catch (error) {
    if (error instanceof AxiosError) {
      console.log(error);
    }
  }
};

async function UserPage({ params }) {
  const { id } = params;
  const user = await getUser(id);
  const { first_name, last_name, email, avatar } = user;

  return (
    <section className="sm:px-0 px-5 flex justify-center items-center min-h-[calc(100vh-4.5rem)]">
      <div className="flex-auto max-w-2xl">
        <h2 className="sm:text-3xl mb-5 text-2xl font-bold text-center">
          User
        </h2>
        <div className="bg-neutral-900 p-5 rounded">
          <div className="mb-5 text-center">
            <h3 className="sm:text-2xl mb-1 text-xl font-medium">
              {id}. {first_name} {last_name}
            </h3>
            <p className="text-neutral-200 sm:text-xl text-lg">{email}</p>
          </div>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={avatar} alt={email} className="mx-auto rounded-full" />
        </div>
      </div>
    </section>
  );
}

export default UserPage;
