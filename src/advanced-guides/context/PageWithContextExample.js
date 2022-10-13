import React, { useState } from "react";

const defaultValue = { isLogged: false };
const UserContext = React.createContext(defaultValue);

// this is a consumer component
function UserProfile() {
  return (
    <div className="border-black margin-20px">
      <p className="italic-text text-color-blue">
        UserContext.Consumer is here
      </p>
      <UserContext.Consumer>
        {({ contextValue, setContextValue }) =>
          contextValue.isLogged ? (
            <>
              <p>Hi {contextValue.name} ![Name is taken from context]</p>
              <button
                onClick={() => setContextValue({ isLogged: false, name: null })}
              >
                Logout
              </button>
            </>
          ) : (
            <p>Please login.</p>
          )
        }
      </UserContext.Consumer>
    </div>
  );
}

function SharedComponent({ name, children }) {
  return (
    <div className="border-black margin-20px">
      <h1>This is {name} Component</h1>
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
  return (
    <SharedComponent name="Footer">
      <p className="italic-text text-color-blue">
        UserContext.Consumer is here
      </p>
      <UserContext.Consumer>
        {({ contextValue }) => {
          return (
            <p>
              Current logged in user is {contextValue.name}. ![Name is taken
              from context]
            </p>
          );
        }}
      </UserContext.Consumer>     
    </SharedComponent>
  );
}

// this is a page component that has childrens as Header, Body, Footer
// & those childrens have wrapped inside the Context Provider which actually provides context values to them
function Page() {
  const initialValue = { isLogged: true, name: "Rajesh" };
  const [contextValue, setContextValue] = useState(initialValue);

  return (
    <div className="border-black text-align-center margin-20px">
      <h1>This is Page Component</h1>
      <p className="italic-text text-color-blue">
        UserContext.Provider is here
      </p>
      <UserContext.Provider value={{ contextValue, setContextValue }}>
        <Header />
        <Body />
        <Footer />
      </UserContext.Provider>
    </div>
  );
}

export default Page;
