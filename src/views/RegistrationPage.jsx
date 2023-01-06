import React from "react";
import Footer from "../components/Footer";
import JoinWhitelist from "../components/JoinWhitelist";
import RecentlyJoined from "../components/RecentlyJoined";
import SignNow from "../SignNow";

const RegistrationPage = () => {
  return (
    <div>
      <JoinWhitelist />
      <RecentlyJoined />
      <SignNow />
      <Footer />
    </div>
  );
};

export default RegistrationPage;
