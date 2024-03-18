import SignUpForm from "../components/SignUpForm";

export default function SignUp() {
  return (
    <div className="bg-slate-100 w-full h-screen flex justify-center items-center ">
      <div className="card min-w-[300px] bg-slate-200 rounded-md p-3 max-w-full">
        <h2 className="text-2xl text-center font-semibold mb-4">Sign Up</h2>
        <SignUpForm />
        <div className="mt-4 text-sm text-gray-700">
          Don't have an account?{" "}
          <a href="/signin" className="text-blue-500">
            SignIn
          </a>
        </div>
      </div>
    </div>
  );
}
