import Navbar from '@/Components/Navbar/Navbar'


const MainLayout = ({children}) => {
  return (
    <main className="">
        <Navbar />
        {children}
        
    </main>
  )
}

export default MainLayout