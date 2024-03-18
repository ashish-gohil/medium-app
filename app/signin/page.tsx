import SignInForm from "../components/SignInForm";

export default function SignIn() {
  return (
    // <div className="flex container">
    <div className="bg-slate-100 w-full h-screen flex justify-center items-center ">
      <div className="card md:p-10 min-w-[300px] bg-slate-200 rounded-md p-3">
        <h2 className="text-2xl text-center font-semibold mb-4">Sign In</h2>

        <SignInForm />

        <div className="mt-4 text-sm text-gray-700">
          Don't have an account?{" "}
          <a href="/signup" className="text-blue-500">
            SignUp
          </a>
        </div>
      </div>
    </div>
  );
}
