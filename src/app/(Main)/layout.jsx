import Footer from '@/Components/Footer/Footer'
import Navbar from '@/Components/Navbar/Navbar'


const MainLayout = ({children}) => {
  return (
    <div className="">
        <Navbar />

        <div>
        {children}
        </div>
        
        <Footer></Footer>
    </div>
  )
}

export default MainLayout