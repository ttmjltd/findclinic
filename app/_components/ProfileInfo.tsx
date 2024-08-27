import Button from "../_atoms/Button";

const ProfileInfo = () => {
  return (
    <div>
      <section>
        <div className="mx-auto max-w-screen-xl px-4 py-1 sm:px-6 lg:px-8">
          <h2 className="text-xl text-secondary font-bold mb-4">
            Profile Info
          </h2>

          <div className="rounded-lg bg-white p-8 shadow-lg lg:p-12">
            <form action="#" className="space-y-4">
              <div className="lg:flex lg:space-x-4">
                <div className="lg:w-1/2 mb-3">
                  <label
                    className="block text-md font-medium text-gray-700"
                    htmlFor="name"
                  >
                    Clinic Name
                  </label>
                  <div className="relative w-full">
                    <input
                      className="mt-1 p-2 w-full rounded-md border-gray-400 bg-neutral shadow-sm sm:text-sm"
                      placeholder="John Doe"
                      type="text"
                      id="name"
                    />
                    <span className="pointer-events-none absolute inset-y-0 right-0 grid w-10 place-content-center text-gray-500">
                      {" "}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        className="size-4"
                      >
                        {" "}
                        <path
                          fillRule="evenodd"
                          d="M5.404 14.596A6.5 6.5 0 1116.5 10a1.25 1.25 0 01-2.5 0 4 4 0 10-.571 2.06A2.75 2.75 0 0018 10a8 8 0 10-2.343 5.657.75.75 0 00-1.06-1.06 6.5 6.5 0 01-9.193 0zM10 7.5a2.5 2.5 0 100 5 2.5 2.5 0 000-5z"
                          clipRule="evenodd"
                        />{" "}
                      </svg>{" "}
                    </span>
                  </div>
                </div>

                <div className="lg:w-1/2">
                  <label
                    htmlFor="UserEmail"
                    className="block text-md font-medium text-gray-700"
                  >
                    Email Address
                  </label>
                  <div className="relative w-full">
                    <input
                      type="email"
                      id="UserEmail"
                      placeholder="example@mail.com"
                      className="mt-1 p-2 w-full rounded-md border-gray-400 bg-neutral shadow-sm sm:text-sm"
                    />
                    <span className="pointer-events-none absolute inset-y-0 right-0 grid w-10 place-content-center text-gray-500">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        className="size-4"
                      >
                        <path
                          fillRule="evenodd"
                          d="M5.404 14.596A6.5 6.5 0 1116.5 10a1.25 1.25 0 01-2.5 0 4 4 0 10-.571 2.06A2.75 2.75 0 0018 10a8 8 0 10-2.343 5.657.75.75 0 00-1.06-1.06 6.5 6.5 0 01-9.193 0zM10 7.5a2.5 2.5 0 100 5 2.5 2.5 0 000-5z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </span>
                  </div>
                </div>
              </div>

              <div className="lg:flex lg:space-x-4">
                <div className="lg:w-1/2 mb-3">
                  <label
                    htmlFor="Address"
                    className="block text-md font-medium text-gray-700"
                  >
                    Address
                  </label>
                  <div className="relative w-full">
                    <input
                      type="text"
                      id="Address"
                      placeholder="162 Regent Street, London"
                      className="mt-1 p-2 w-full rounded-md border-gray-400 bg-neutral shadow-sm sm:text-sm"
                    />
                    <span className="pointer-events-none absolute inset-y-0 right-0 grid w-10 place-content-center text-gray-500">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        className="size-4"
                      >
                        <path
                          fillRule="evenodd"
                          d="M5.404 14.596A6.5 6.5 0 1116.5 10a1.25 1.25 0 01-2.5 0 4 4 0 10-.571 2.06A2.75 2.75 0 0018 10a8 8 0 10-2.343 5.657.75.75 0 00-1.06-1.06 6.5 6.5 0 01-9.193 0zM10 7.5a2.5 2.5 0 100 5 2.5 2.5 0 000-5z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </span>
                  </div>
                </div>

                <div className="lg:w-1/2">
                  <label
                    htmlFor="Password"
                    className="block text-md font-medium text-gray-700"
                  >
                    Password
                  </label>
                  <div className="relative w-full">
                    <input
                      type="password"
                      id="Password"
                      placeholder="**"
                      className="mt-1 p-2 w-full rounded-md border-gray-400 bg-neutral shadow-sm sm:text-sm"
                    />
                    <span className="pointer-events-none absolute inset-y-0 right-0 grid w-10 place-content-center text-gray-500">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        className="size-4"
                      >
                        <path
                          fillRule="evenodd"
                          d="M5.404 14.596A6.5 6.5 0 1116.5 10a1.25 1.25 0 01-2.5 0 4 4 0 10-.571 2.06A2.75 2.75 0 0018 10a8 8 0 10-2.343 5.657.75.75 0 00-1.06-1.06 6.5 6.5 0 01-9.193 0zM10 7.5a2.5 2.5 0 100 5 2.5 2.5 0 000-5z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </span>
                  </div>
                </div>
              </div>

              <div className="lg:flex lg:space-x-4">
                <div className="lg:w-1/2">
                  <label
                    className="block text-md font-medium text-gray-700"
                    htmlFor="phone"
                  >
                    Phone Number
                  </label>
                  <div className="flex gap-4">
                    <input
                      className="mt-1 p-2 w-20 rounded-md border-gray-400 bg-neutral shadow-sm sm:text-sm"
                      placeholder="+44"
                      type="tel"
                      id="country"
                    />
                    <input
                      type="tel"
                      id="phone"
                      placeholder="1234567"
                      className="mt-1 p-2 w-full rounded-md border-gray-400 bg-neutral shadow-sm sm:text-sm"
                    />
                    <span className="pointer-events-none absolute inset-y-0 right-0 grid w-10 place-content-center text-gray-500">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        className="size-4"
                      >
                        <path
                          fillRule="evenodd"
                          d="M5.404 14.596A6.5 6.5 0 1116.5 10a1.25 1.25 0 01-2.5 0 4 4 0 10-.571 2.06A2.75 2.75 0 0018 10a8 8 0 10-2.343 5.657.75.75 0 00-1.06-1.06 6.5 6.5 0 01-9.193 0zM10 7.5a2.5 2.5 0 100 5 2.5 2.5 0 000-5z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </span>
                  </div>
                </div>
              </div>
              <div className="relative">
                <div className="mt-4 lg:mt-0">
                  <Button label={"Save"} />
                </div>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProfileInfo;
