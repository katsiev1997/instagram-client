import { SignInForm } from "src/features";
import { Link } from "react-router-dom";

function SignInPage() {
  return (
    <div className="flex justify-center items-center w-screen h-screen">
      <div>
        <SignInForm />
        <div className="text-center w-full max-w-sm h-14 text-gray border border-border mt-5 rounded flex justify-center items-center">
          Нет аккаунта?{" "}
          <Link to="/sign-up" className="text-blue ml-4">
            Зарегистрироваться
          </Link>
        </div>
      </div>
    </div>
  );
}

export default SignInPage;
