import { FormEvent, useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { fetchSignIn } from "../model/sign-in";
import { setUser } from "src/entities/user";

export const SignInForm = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (password.length < 6) {
      toast.error("Пароль должен содержать не менее 6 символов");
      return;
    }

    const userPromise = fetchSignIn(email, password);

    await toast.promise(userPromise, {
      loading: "Авторизация...",
      success: "Вы успешно авторизовались",
      error: "Ошибка при авторизации",
    });

    const { token, userData } = await userPromise;

    setUser({ token, userData });
    navigate("/");
  };
  const inputClassName =
    "pl-4 w-full h-10 border border-border rounded outline-none focus:border-blue ";
  return (
    <form
      onSubmit={(e) => handleSubmit(e)}
      className="flex flex-col items-center gap-3 max-w-sm w-full border border-border rounded-lg p-5"
    >
      <img src="/logo.png" alt="logo" width={103} height={29} />
      <p className="text-center text-gray">
        Войдите, чтобы смотреть фото и видео своих друзей
      </p>
      <input
        className={inputClassName}
        type="email"
        autoComplete="current-password"
        value={email}
        onChange={(e) => setEmail(e.currentTarget.value)}
        placeholder="Адрес электронной почты"
      />
      <input
        value={password}
        onChange={(e) => setPassword(e.currentTarget.value)}
        className={inputClassName}
        type="password"
        autoComplete="current-password"
        placeholder="Пароль"
      />

      <button
        disabled={password.length < 6 || email.length < 6}
        type="submit"
        className="w-full h-10 duration-100 transition-all text-blue hover:text-white font-medium border border-blue hover:bg-blue rounded"
      >
        Войти
      </button>
    </form>
  );
};
