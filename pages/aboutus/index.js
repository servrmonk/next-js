import Link from "next/link";
import { details } from "./[developer]";

const AboutUs = () => {
  console.log("Details in about us ", details);
  return (
    <>
      <h1>AboutUs</h1>

      <ul>
        {details?.map((elem) => (
          <li key={elem.id}>
            <Link href={`/aboutus/${elem.id}`}>
              <h3
                style={{
                  color: "red",
                  textDecoration: "none",
                  cursor: "pointer",
                }}
              >
                {elem.name}
              </h3>
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default AboutUs;
