import { useContext, createContext, useState, useEffect } from 'react'
import { fetchUser } from '../services/user'

const UserContext = createContext()

// create a user provider trhat takes in the children
const UserProvider = ({ children }) => {
  const [user, setUser] = useState('')
  // sets up initial value
  useEffect(() => {
    fetchUser()
      .then((fetchedUser) => {
        setUser(fetchedUser)
      })
      .catch((error) => {
        throw new Error(`Error: ${error}`)
      })
  }, [])
  // use our provider context
  return <UserContext.Provider value={{ user, setUser }}>{children}</UserContext.Provider>
}

// custom hook
const useUser = () => {
  const context = useContext(UserContext)

  if (context === undefined) {
    throw new Error('need Provider')
  }
  return context
}

export { UserProvider, useUser }
