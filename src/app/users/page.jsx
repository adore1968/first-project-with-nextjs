import UserCard from "@/components/UserCard";
import axios, { AxiosError } from "axios";

const getUsers = async () => {
  try {
    const { status, data } = await axios("https://reqres.in/api/users?page=1");
    if (status === 200) {
      return data.data;
    }
  } catch (error) {
    if (error instanceof AxiosError) {
      console.log(error);
    }
  }
};

async function UsersPage() {
  const users = await getUsers();
  return (
    <section className="sm:px-0 px-5 pt-10">
      <div className="container flex flex-col items-center gap-5 mx-auto">
        <h2 className="sm:text-3xl text-2xl font-bold">Users</h2>
        {users.map((user) => (
          <UserCard key={user.id} user={user} />
        ))}
      </div>
    </section>
  );
}

export default UsersPage;
