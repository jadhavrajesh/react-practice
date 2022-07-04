import React, { useContext } from "react";

const defaultValue = { isLogged: false };
const UserContext = React.createContext(defaultValue);

function UserProfile({ name }) {
  const userContextValue = useContext(UserContext);
  return (
    <>
      <p className="italic-text text-color-blue">useContext is used here</p>
      {userContextValue.isLogged ? (
        <p>Hi {userContextValue.name} ! [Username is taken from context]</p>
      ) : (
        <p>Please login.</p>
      )}
    </>
  );
}

function SharedComponent({ name, children }) {
  return (
    <div className="border-black">
      <p>This is {name} Component</p>
      {children}
    </div>
  );
}

function Header() {
  return (
    <>
      <SharedComponent name="Header">
        <UserProfile />
      </SharedComponent>
    </>
  );
}

function Body() {
  return <SharedComponent name="Body" />;
}

function Footer() {
  return <SharedComponent name="Footer" />;
}

function Page() {
  const contextValue = { isLogged: true, name: "Rajesh" };
  return (
    <div className="border-black">
      <p>This is Page Component</p>
      <p className="italic-text text-color-blue">
        UserContext.Provider is here
      </p>
      <UserContext.Provider value={contextValue}>
        <Header />
        <Body />
        <Footer />
      </UserContext.Provider>
    </div>
  );
}

export default Page;
