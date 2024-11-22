import { useRouter } from "next/router";

const UserIndex = () => {
  const router = useRouter();
  return (
    <div>
      <h1> This is index page!</h1>
      <button
        onClick={(e) => router.push(`/user/${router.query.username}/settings`)}
      >
        open setting page
      </button>
    </div>
  );
};

export default UserIndex;