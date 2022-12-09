import React, { useContext } from "react";

const defaultValue = { isLogged: false };
const UserContext = React.createContext(defaultValue);

function UserProfile() {
  const userContextValue = useContext(UserContext);
  return (
    <div className="border-black margin-20px">
      <h1>This is UserProfile Component</h1>
      <p className="italic-text text-color-blue">useContext is used here</p>
      {userContextValue.isLogged ? (
        <p>Hi {userContextValue.name} ! [Username is taken from context]</p>
      ) : (
        <p>Please login.</p>
      )}
    </div>
  );
}

function ProfileWidget({ children }) {
  return (
    <div className="border-black margin-20px">
      <h1>This is ProfileWidget Component</h1>
      {children}
    </div>
  );
}

function Header() {
  return (
    <div className="border-black text-align-center margin-20px">
      <h1>This is Header Component</h1>
      <ProfileWidget>
        <UserProfile />
      </ProfileWidget>
    </div>
  );
}

function Page() {
  const contextValue = { isLogged: true, name: "Rajesh" };
  return (
    <div className="border-black text-align-center margin-20px">
      <h1>This is Page Component</h1>
      <p className="italic-text text-color-blue">
        UserContext.Provider is here
      </p>
      <UserContext.Provider value={contextValue}>
        <Header />
      </UserContext.Provider>
    </div>
  );
}

export default Page;
