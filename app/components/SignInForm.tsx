"use client";
export default function SignInForm() {
  return (
    <>
      <div className="mb-4">
        <label
          htmlFor="email"
          className="block text-gray-700 text-sm font-bold mb-2"
        >
          Email
        </label>
        <input
          type="email"
          id="email"
          placeholder="Enter Email Address"
          name="email"
          // value={email}
          // onChange={(e) => {
          //   setEmail(e.target.value);
          // }}
          className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:border-blue-500"
          required
        />
      </div>
      <div className="mb-4">
        <label
          htmlFor="password"
          className="block text-gray-700 text-sm font-bold mb-2"
        >
          Password
        </label>
        <input
          type="password"
          id="password"
          name="password"
          placeholder="Enter Password"
          // value={password}
          // onChange={(e) => {
          //   setPassword(e.target.value);
          // }}
          className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:border-blue-500"
          required
        />
      </div>
      <button
        // onClick={signInHandler}
        className="bg-blue-500 flex text-white px-6 py-2 rounded hover:bg-blue-600 focus:outline-none focus:shadow-outline-blue active:bg-blue-800"
      >
        Sign In
      </button>
    </>
  );
}
