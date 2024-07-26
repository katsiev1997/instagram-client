import { Route, Routes } from "react-router-dom";
import AppLayout from "./app-layout";
import AuthLayout from "./auth-layout";
import ExplorePage from "src/pages/app-layout/explore-page";
import MessengerPage from "src/pages/app-layout/messenger-page";
import ProfilePage from "src/pages/app-layout/profile-page";
import ProfileEditPage from "src/pages/app-layout/profile-edit-page";
import SignInPage from "src/pages/auth-layout/sign-in-page";
import SignUpPage from "src/pages/auth-layout/sign-up-page";
import HomePage from "src/pages/app-layout/home-page";
import AddPostPage from "src/pages/app-layout/add-post-page";
import UserPage from "src/pages/app-layout/user-page";

const RouteProvider = () => {
  return (
    <Routes>
      <Route path="/" element={<AppLayout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/explore" element={<ExplorePage />} />
        <Route path="/messenger" element={<MessengerPage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/profile-edit" element={<ProfileEditPage />} />
        <Route path="/:username" element={<UserPage />} />
        <Route path="/add-post" element={<AddPostPage />} />
        <Route path="*" element={<HomePage />} />
      </Route>
      <Route path="/" element={<AuthLayout />}>
        <Route path="/sign-in" element={<SignInPage />} />
        <Route path="/sign-up" element={<SignUpPage />} />
      </Route>
    </Routes>
  );
};

export default RouteProvider;
