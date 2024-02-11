// import React from 'react'

import Link from "next/link";

const NewsPage = () => {
  return (
    <>
      <h1>NewsPage</h1>
      <ul>
        <li>
          {" "}
          <Link style={{ color:' blue', 'text-decoration': 'none'}} href="/news/nextjs-is-a-great-framework">
            {" "}
            Next Js is A Great Framework
          </Link>
        </li>
        <li>Something Else</li>
      </ul>
    </>
  );
};

export default NewsPage;
