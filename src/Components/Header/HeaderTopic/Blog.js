import React from "react";

const Blog = () => {
  return (
    <div>
      <section className="dark:bg-gray-800 dark:text-gray-100">
        <div className="container flex flex-col justify-center p-4 mx-auto md:p-8">
          <h2 className="mb-2 text-4xl font-bold leading-none text-center sm:text-5xl">
            Our Blogs
          </h2>
          <div className="text-center mb-6">
            <progress className="progress w-56  progress-primary "></progress>
          </div>
          <div className="grid gap-5 md:gap-8 sm:p-3 md:grid-cols-2 lg:px-12 xl:px-32">
            <div className="shadow-2xl p-4">
              <h3 className="font-semibold my-4 text-4xl">What is cors?</h3>
              <p className="mt-1 my-2 text-lg dark:text-gray-400">
                Cross-Origin Resource Sharing (CORS) is an HTTP-header based
                mechanism that allows a server to indicate any origins (domain,
                scheme, or port) other than its own from which a browser should
                permit loading resources. CORS also relies on a mechanism by
                which browsers make a "preflight" request to the server hosting
                the cross-origin resource, in order to check that the server
                will permit the actual request. In that preflight, the browser
                sends headers that indicate the HTTP method and headers that
                will be used in the actual request.
              </p>
              <p className="mt-1 my-2 text-lg dark:text-gray-400">
                For security reasons, browsers restrict cross-origin HTTP
                requests initiated from scripts. For example, XMLHttpRequest and
                the Fetch API follow the same-origin policy. This means that a
                web application using those APIs can only request resources from
                the same origin the application was loaded from unless the
                response from other origins includes the right CORS headers.
              </p>
            </div>
            <div className="shadow-2xl p-4">
              <h3 className="font-semibold my-4 text-3xl">
                Why are you using firebase?
              </h3>
              <p className="mt-1 my-2 text-lg dark:text-gray-400">
                The Firebase Realtime Database is a cloud-hosted database. Data
                is stored as JSON and synchronized in realtime to every
                connected client. When you build cross-platform apps with our
                Apple platforms, Android, and JavaScript SDKs, all of your
                clients share one Realtime Database instance and automatically
                receive updates with the newest data.
              </p>
              <h3 className="font-semibold my-4 text-2xl">
                What other options do you have to implement authentication?
              </h3>
              <p className="mt-1 my-2 text-lg dark:text-gray-400">
                Auth0, MongoDB, Passport, Okta, and Firebase are the most
                popular alternatives and competitors to Firebase Authentication.
              </p>
              <p className="mt-1 my-2 text-lg dark:text-gray-400">
                Authentication factors can be classified into three groups:
                something you know: a password or personal identification number
                (PIN); something you have: a token, such as bank card; something
                you are: biometrics, such as fingerprints and voice recognition.
              </p>
            </div>
           
            <div className="shadow-2xl p-4">
              <h3 className="font-semibold mb-3 text-3xl">
                How does the private route work?
              </h3>
              <p className="mt-1 text-lg my-2 dark:text-gray-400">
                Lorem ipsum dolor, sit amet Private Routes in React Router (also
                called Protected Routes) require a user being authorized to
                visit a route (read: page). So if a user is not authorized for a
                specific page, they cannot access it. The most common example is
                authentication in a React application where a user can only
                access the protected pages when they are authorized (which means
                in this case being authenticated). Authorization goes beyond
                authentication though. For example, a user can also have roles
                and permissions which give a user access to specific areas of
                the application.
              </p>
            </div>
            <div className="shadow-2xl p-4">
              <h3 className="font-semibold my-4 text-3xl">What is Node? </h3>
              <p className="mt-1 text-lg my-2 dark:text-gray-400">
                Lorem ipsum dolor, sit amet Node allows developers to write
                JavaScript code that runs directly in a computer process itself
                instead of in a browser. Node can, therefore, be used to write
                server-side applications with access to the operating system,
                file system, and everything else required to build
                fully-functional applications.
              </p>
              <h3 className="font-semibold my-4 text-2xl">
                How does Node work?{" "}
              </h3>
              <p className="mt-1 text-lg my-2 dark:text-gray-400">
                It is a used as backend service where javascript works on the
                server-side of the application. This way javascript is used on
                both frontend and backend. Node. js runs on chrome v8 engine
                which converts javascript code into machine code, it is highly
                scalable, lightweight, fast, and data-intensive.
              </p>
            </div>
          </div>
        </div>
      </section>
      <div className="">
        <img
          src="https://www.travelpayouts.com/blog/wp-content/uploads/2020/01/guest-blogging.jpg"
          alt=""
        />
      </div>
    </div>
  );
};

export default Blog;
