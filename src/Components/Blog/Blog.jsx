import React from "react";

const Blog = () => {
  return (
    <div>
      <div className="bg-green-300 w-full  pb-20 mb-10 pt-10 ">
        <h1 className="text-center font-bold  text-orange-500 text-4xl">Question</h1>
      </div>
      <div className="mb-10 mt-10">
        <div class="w-[75%] mx-auto grid md:grid-cols-2 lg:grid-cols-2 px-8 gap-5 pt-5 ">
          <div class="ques border p-2 bg-green-300 ">
            <h2 class="text-xl mt-3 font-bold">
              A.What is an access token and refresh token? How do they work and where should we store them on the client-side?
            </h2>
            <p class="text-xl">
              <span class="text-xl font-bold"></span> When a user logins in, the authorization server issues an access token, which is an artifact that client applications can use to make secure calls to an API server.
              As mentioned, for security purposes, access tokens may be valid for a short amount of time. Once they expire, client applications can use a refresh token to "refresh" the access token.Access token and refresh token shouldn't be stored in the local/session storage, because they are not a place for any sensitive data.would store the access token in a httpOnly cookie  and I need it for most of my requests to the Resource Server anyway.
            </p>
          </div>
          <div class="ques border p-2 bg-green-300 ">
            <h2 class="text-xl mt-3 font-bold">2.Compare SQL and NoSQL databases?</h2>
            <p class="text-xl">
              <span class="text-xl font-bold"></span>
              SQL stands for Structured Query Language.SQL databases are classified as Relational databases,RDBMS.SQL databases use standard Structured Query Languages, as the name suggests.SQL databases can extend their capacity on a single server by increasing their RAM, CPU or SSD.
              <br />

              NoSQL databases are very flexible, easy to use, developer-friendly, and provide higher performance. NoSQL databases are known as non-relational or distributed database.NoSQL database has dynamic schema for unstructured data.NoSQL databases don’t have a pre-defined schema, which makes them schema-less and more flexible.
            </p>
          </div>
          <div class="ques border p-2 bg-green-300 ">
            <h2 class="text-xl mt-3 font-bold">3.What is express js? What is Nest JS?</h2>
            <p class="mt-2 text-xl">
              <span class="text-xl font-bold"></span>
              Express is a Node.js web application framework that provides a wide range of functionality for constructing web and mobile applications. It is a layer built on top of Node that aids in the management of servers and routes.
              <br />
              NestJS is a Node.js framework for building server-side applications. It is based on TypeScript and JavaScript.This framework is inspired by Angular, so most of what you find in Angular can also be found in Nest, including providers, middleware, components, and services.
            </p>
          </div>
          <div class="ques border p-2 bg-green-300 ">
            <h2 class="text-xl mt-3 font-bold">4.What is MongoDB aggregate and how does it work?</h2>
            <p class="mt-2 text-xl">
              <span class="text-xl font-bold">UseMemo:</span>
              Aggregation is a way of processing a large number of documents in a collection by means of passing them through different stages.Single-purpose aggregation operations are a collection of helper methods applied to a collection to calculate a result.aggregation operations process the data records/documents and return computed results.Aggregations group data from multiple sources and then process that data in some way to return a single result.The stages make up what is known as a pipeline. The stages in a pipeline can filter, sort, group, reshape and modify documents that pass through the pipeline.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
