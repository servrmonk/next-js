// our-domain.com/news/something-important but how to extract value after /news
// a special react hook useRouter
import React from "react";
import { useRouter } from "next/router";

const newsid = () => {
    const routerValue = useRouter();
    // console.log("Router value ",routerValue);
    
    console.log(routerValue.query.newsid) //jo filename hai sq braket me 
    const newsid = routerValue.query.newsid; //send a request to backend api to fetch the enws item with newsId

  return <h3>The Detail Page</h3>;
};

export default newsid;
