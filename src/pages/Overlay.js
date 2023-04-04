import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar";

const overlay = arg => {
    return <>
      <NavBar/>
      <Outlet/>
    </>
}

export default overlay;