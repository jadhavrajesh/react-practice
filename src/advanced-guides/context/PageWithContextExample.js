import React, { useState } from "react";

const defaultValue = { isLogged: false };
const UserContext = React.createContext(defaultValue);

// this is a consumer component
function UserProfile() {
  return (
    <div className="border-black margin-20px">
      <h1>This is UserProfile Component</h1>
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
            <>
              <p>Please login.</p>
              <button
                onClick={() =>
                  setContextValue({ isLogged: true, name: "Rajesh" })
                }
              >
                Login
              </button>
            </>
          )
        }
      </UserContext.Consumer>
    </div>
  );
}

function Header() {
  return (
    <div className="border-black text-align-center margin-20px">
      <h1>This is Header Component</h1>
      <ProfileWidget>
        {/* Consumer component is used here */}
        <UserProfile />
      </ProfileWidget>
    </div>
  );
}

function ProfileWidget({ children }) {
  return (
    <div className="border-black text-align-center margin-20px">
      <h1>This is ProfileWidget Component</h1>
      {children}
    </div>
  );
}

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
      </UserContext.Provider>
    </div>
  );
}

export default Page;
