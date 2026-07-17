import Navbar from '@/Components/Navbar/Navbar'


const AuthLayout = ({children}) => {
  return (
    <div>
      <Navbar></Navbar>

      <div>
      {children}
      </div>
      </div>
  )
}

export default AuthLayout