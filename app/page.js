import { UserCard } from "@/components/UserCard";

export default async function Home() {
  try {
    let response = await fetch("https://jsonplaceholder.typicode.com/users");
    var data = await response.json();
  } catch (error) {
    console.log(error);
  }

  return (
    <div className="flex flex-col container h-screen mx-auto space-y-4 mt-8">
      {data.map((user) => (
        <UserCard key={user.id} user={user} />
      ))}
    </div>
  );
}
