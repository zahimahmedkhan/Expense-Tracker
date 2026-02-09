import React , {createContext,useState} from "react";

export const UserContext = createContext();

const UserProvider = ({children}) =>{
    // ✅ reload par user restore hoga
  const [user, setUser] = useState(() => {
    const storedUser = localStorage.getItem("user");
    return storedUser ? JSON.parse(storedUser) : null;
  });

    // Function to update user Data
    const updateUser = (userData)=>{
        setUser(userData)
        localStorage.setItem("user", JSON.stringify(userData)) // ✅
    };

    // Function to clear user data (e.g ... on logout)

    const clearUser = ()=>{
        setUser(null)
        localStorage.removeItem("user"); // ✅
        localStorage.removeItem("token");
    };

    return (
        <UserContext.Provider
         value={{
            user,
            updateUser,
            clearUser
         }} 
        >
          {children}
        </UserContext.Provider>
    )
}

export default UserProvider;