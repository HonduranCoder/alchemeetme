import logo from '../../assets/meet.png'
import './Header.css'
import { useUser } from '../../context/UserContext'

// replace the prop being passed in with the custom hook
const Header = () => {
  const { user } = useUser()
  const { color, name } = user
  return (
    <header>
      <img src={logo} className="app-logo" alt="Alchemy Logo" />
      <p>
        Meet <span style={{ color: `${color}` }}>{name}</span>!
      </p>
    </header>
  )
}

export default Header
