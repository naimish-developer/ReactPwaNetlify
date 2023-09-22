import { useEffect, useState } from "react";

function App() {
  const [IsOnline, setIsOnline] = useState(true);
  const [ApiData, setApiData] = useState([]);

  useEffect(() => {
    // Check User is Online
    window.addEventListener("load", () => {
      setIsOnline(navigator.onLine);
      if(!navigator.onLine){
setApiData(JSON.parse(localStorage.getItem("LocalApiData")))
      }
    });

    // Api Call
    const fetchdata = async () => {
      try {

        // Asume This is Fectch Responce
        const Data = [
          { id: 1, name: "A" },
          { id: 2, name: "B" },
        ]

        setApiData(Data);

        // Store Data on Local Storege
        localStorage.setItem(
          "LocalApiData",
          JSON.stringify(Data)
        );

      } catch (error) {
        console.log(error);

        // Use Loca Store Data
        setApiData(JSON.parse(localStorage.getItem("LocalApiData")));
      }
    };

    fetchdata();

    return () => {
      window.removeEventListener("load",()=>{});
    };
  },[]);

  return (
    <>
    <div>{IsOnline ? "ONLINE":"OFFLINE"}</div>
      <div className="container flex h-screen flex-col justify-center align-middle px-6 py-12 lg:px-8 bg-neutral-400">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <img
            className="mx-auto h-10 w-auto"
            src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
            alt="Your Company"
          />
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Sign in to your account
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" action="#" method="POST">
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Email address
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Password
                </label>
                <div className="text-sm">
                  <a
                    href="#"
                    className="font-semibold text-indigo-600 hover:text-indigo-500"
                  >
                    htmlForgot password?
                  </a>
                </div>
              </div>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Sign in
              </button>
            </div>
          </form>

          <p className="mt-10 text-center text-sm text-gray-500">
            Not a member?
            <button
              className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
            >
              Start a 14 day free trial
            </button>
          </p>
        </div>

        <div>

          {ApiData?.map((data)=>{return <div key={data.id}>No :{data.id} && Name :{data.name}</div>})}
        </div>
      </div>{" "}
    </>
  );
}

export default App;
