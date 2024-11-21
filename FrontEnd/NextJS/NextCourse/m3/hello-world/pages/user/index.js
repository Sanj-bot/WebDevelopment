import { useRouter } from "next/router";

const UserIndex = () => {
  return (
    <div>
      <h1> This is index page!</h1>
      <button
        onClick={(e) => router.push("/user/${router.query.user}/settings")}
      >
        open setting page
      </button>
    </div>
  );
};

export default UserIndex;
