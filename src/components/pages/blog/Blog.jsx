import Pagetitle from "../../common/Pagetitle";

const Blog = () => {
  return (
    <div className="pt-20">
      <Pagetitle title="ToyZoo | Blog"></Pagetitle>
      <div className="questions">
        {/* question 1  */}
        <div className="my-5 md:mx-0 mx-3">
          <div className="container max-w-4xl px-10 py-6 mx-auto rounded-lg shadow-sm dark:bg-gray-900">
            <div className="flex items-center justify-between">
              <span className="text-sm dark:text-gray-400">Jun 1, 2020</span>
              <p className="px-2 py-1 font-bold rounded dark:bg-amber-700 dark:text-gray-300">
                Question 1
              </p>
            </div>
            <div className="mt-3 text-slate-300">
              <h1 className="text-2xl text-amber-600 mt-6 font-bold hover:underline">
                What is an access token and refresh token? How do they work and
                where should we store them on the client-side?
              </h1>
              <p className="mt-2">
                <strong>Access Token:</strong> A short-lived credential issued
                by an authentication server after successful authentication,
                used to access specific resources or perform actions on behalf
                of the user.
              </p>
              <p className="mt-2">
                <strong>Refresh Token:</strong> A long-lived token issued
                alongside the access token, used to obtain a new access token
                when the current one expires, allowing the client to maintain an
                authenticated session without re-authentication.
              </p>
              <p className="mt-2">
                Access tokens can be stored securely in memory, local storage,
                or secure cookies, depending on the applications requirements
                and security measures implemented.
              </p>
            </div>
            <div className="mt-4">
              <div>
                <a
                  rel="noopener noreferrer"
                  href="#"
                  className="flex items-center"
                >
                  <img
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=50&ixid=MnwxfDB8MXxyYW5kb218MHx8cG9ydHJhaXR8fHx8fHwxNjg0Njc4NTc4&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=50"
                    alt="avatar"
                    className="object-cover w-10 h-10 mr-4 rounded-full dark:bg-gray-500"
                  />
                  <span className="hover:underline dark:text-gray-400">
                    Musfiqur Rahim
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
        {/* question 2  */}
        <div className="my-5 md:mx-0 mx-3">
          <div className="container max-w-4xl px-10 py-6 mx-auto rounded-lg shadow-sm dark:bg-gray-900">
            <div className="flex items-center justify-between">
              <span className="text-sm dark:text-gray-400">May 12, 2021</span>
              <p className="px-2 py-1 font-bold rounded dark:bg-amber-700 dark:text-gray-300">
                Question 2
              </p>
            </div>
            <div className="mt-3 text-slate-300">
              <h1 className="text-2xl text-amber-600 mt-6 font-bold hover:underline">
                Compare SQL and NoSQL databases?
              </h1>
              <p className="mt-2">
                SQL databases are suitable for structured data, complex queries,
                and strict consistency, while NoSQL databases are ideal for
                handling large-scale, flexible, and evolving data with
                horizontal scalability.
              </p>
              <p className="mt-2">
                <strong>SQL databases</strong> are based on a structured,
                tabular data model with predefined schemas. They are suitable
                for applications that require strict data consistency and
                complex queries. SQL databases scale vertically by upgrading
                hardware resources and use a standardized query language for
                data manipulation.
              </p>
              <p className="mt-2">
                <strong>NoSQL databases</strong>, on the other hand, use
                flexible data models such as key-value, document, columnar, or
                graph models. They are designed for horizontal scalability,
                distributing data across multiple servers to handle large
                amounts of data and traffic. NoSQL databases provide schema
                flexibility, allowing dynamic and unstructured data.
              </p>
            </div>
            <div className="mt-4">
              <div>
                <a
                  rel="noopener noreferrer"
                  href="#"
                  className="flex items-center"
                >
                  <img
                    src="https://images.unsplash.com/photo-1499996860823-5214fcc65f8f?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=50&ixid=MnwxfDB8MXxyYW5kb218MHx8cG9ydHJhaXR8fHx8fHwxNjg0Njc4NTk1&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=50"
                    alt="avatar"
                    className="object-cover w-10 h-10 mr-4 rounded-full dark:bg-gray-500"
                  />
                  <span className="hover:underline dark:text-gray-400">
                    Sakib Al-Hasan
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
        {/* question 3  */}
        <div className="my-5 md:mx-0 mx-3">
          <div className="container max-w-4xl px-10 py-6 mx-auto rounded-lg shadow-sm dark:bg-gray-900">
            <div className="flex items-center justify-between">
              <span className="text-sm dark:text-gray-400">
                August 26, 2022
              </span>
              <p className="px-2 py-1 font-bold rounded dark:bg-amber-700 dark:text-gray-300">
                Question 3
              </p>
            </div>
            <div className="mt-3 text-slate-300">
              <h1 className="text-2xl text-amber-600 mt-6 font-bold hover:underline">
                What is express js? What is Nest JS?
              </h1>

              <p className="mt-2">
                <strong>Express.js</strong> is a web application framework for
                Node.js that simplifies the process of building web applications
                and APIs. It provides tools and features for handling routing,
                request/response handling, and other common web application
                tasks.
              </p>
              <p className="mt-2">
                <strong>Nest.js</strong> is a progressive framework for building
                scalable and maintainable server-side applications with Node.js.
                It is built on top of Express.js and provides additional
                features and architectural patterns inspired by Angular, such as
                dependency injection and modules.
              </p>
            </div>
            <div className="mt-4">
              <div>
                <a
                  rel="noopener noreferrer"
                  href="#"
                  className="flex items-center"
                >
                  <img
                    src="https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=50&ixid=MnwxfDB8MXxyYW5kb218MHx8cG9ydHJhaXR8fHx8fHwxNjg0Njc4NjA4&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=50"
                    alt="avatar"
                    className="object-cover w-10 h-10 mr-4 rounded-full dark:bg-gray-500"
                  />
                  <span className="hover:underline dark:text-gray-400">
                    Tamim Iqbal
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
        {/* question 4  */}
        <div className="my-5 md:mx-0 mx-3">
          <div className="container max-w-4xl px-10 py-6 mx-auto rounded-lg shadow-sm dark:bg-gray-900">
            <div className="flex items-center justify-between">
              <span className="text-sm dark:text-gray-400">March 1, 2023</span>
              <p className="px-2 py-1 font-bold rounded dark:bg-amber-700 dark:text-gray-300">
                Question 4
              </p>
            </div>
            <div className="mt-3 text-slate-300">
              <h1 className="text-2xl text-amber-600 mt-6 font-bold hover:underline">
                What is MongoDB aggregate and how does it work (google it)?
              </h1>
              <p className="mt-2">
                <strong>MongoDB aggregate</strong> framework is used for
                advanced data processing and analysis tasks.
              </p>
              <p className="mt-2">
                It works by using a pipeline concept where each stage performs a
                specific operation on the data. The pipeline stages include
                match (filtering), group (grouping and aggregation), project
                (reshaping and transformation), and sort (sorting the output).
                Each stage takes the output of the previous stage and passes it
                to the next stage in the pipeline.
              </p>
            </div>
            <div className="mt-4">
              <div>
                <a
                  rel="noopener noreferrer"
                  href="#"
                  className="flex items-center"
                >
                  <img
                    src="https://images.unsplash.com/photo-1596075780750-81249df16d19?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=50&ixid=MnwxfDB8MXxyYW5kb218MHx8cG9ydHJhaXR8fHx8fHwxNjg0Njc4NjM1&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=50"
                    alt="avatar"
                    className="object-cover w-10 h-10 mr-4 rounded-full dark:bg-gray-500"
                  />
                  <span className="hover:underline dark:text-gray-400">
                    Masrafi Bin Murtaza
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
