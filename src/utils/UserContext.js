const { createContext } = require("react");

const UserContext = createContext({
    loggedInUser: "Guest User"
})

export default UserContext;