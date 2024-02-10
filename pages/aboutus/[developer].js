import { useRouter } from "next/router";

const details = [
  { id: 1, name: "Yash", role: "Senior Developer" },
  { id: 2, name: "Vaibhav", role: "Backend Developer" },
  { id: 3, name: "Suresh", role: "Frontend Developer" },
];

const devel = () => {
  const router = useRouter();
  let routerVal = router.query.developer;
  console.log(routerVal);

  const developer = details.find((elem) => elem.id == routerVal);

  return (
    <>
      {developer ? (
        <h1>
          {developer.name} {developer.role}
        </h1>
      ) : (
        <h1>Developer doesn't exist</h1>
      )}
    </>
  );
};

export default devel;
