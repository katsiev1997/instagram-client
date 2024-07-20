import { SignUpForm } from "src/features";
import { Link } from "react-router-dom";

function SignUpPage() {
  return (
    <div className="flex justify-center items-center w-screen h-screen">
      <div>
        <SignUpForm />
        <div className="text-center w-full max-w-sm h-14 text-gray border border-border mt-5 rounded flex justify-center items-center">
          Есть аккаунт?{" "}
          <Link to="/sign-in" className="text-blue ml-4">
            Войти
          </Link>
        </div>
      </div>
    </div>
  );
}

export default SignUpPage;
