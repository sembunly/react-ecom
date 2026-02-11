import { Outlet } from "react-router-dom"
import TopBar from "../components/TopBar"
import Header from "../components/Header"
import Footer from "../components/Footer"
function RootLayout() {
  return (
    <>
      <TopBar />
      <Header />
      <Outlet />
      <Footer />
    </>
  )
}
export default RootLayout