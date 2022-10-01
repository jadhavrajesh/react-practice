import React from "react";

const defaultValue = { isLogged: false };
const UserContext = React.createContext(defaultValue);

// this is a consumer component
function UserProfile() {
  return (
    <>
      <p className="italic-text text-color-blue">
        UserContext.Consumer is here
      </p>
      <UserContext.Consumer>
        {({ isLogged, name }) =>
          isLogged ? (
            <p>Hi {name} ![Username is taken from context]</p>
          ) : (
            <p>Please login.</p>
          )
        }
      </UserContext.Consumer>
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
        {/* Consumer component is used here */}
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

// this is a page component that has childrens as Header, Body, Footer 
// & those childrens have wrapped inside the Context Provider which actually provides context values to them
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
