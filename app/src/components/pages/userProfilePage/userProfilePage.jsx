import React from "react";
import { Footer } from "../../organisms/footer/footer";
import { Header } from "../../organisms/header/header";
import { UserProfile } from "../../organisms/userProfile/userProfile";
import "./userProfilePage.scss";

export const UserProfilePage = () => {
  return (
    <>
      <Header />
      <div className="container">
        <UserProfile />
      </div>
      <Footer />
    </>
  );
};
