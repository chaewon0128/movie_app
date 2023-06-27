import { Outlet } from "react-router-dom";
import Banner from "./component/banner/Banner";
import Navigation from "./component/navigation/Navigation";
import Header from "./component/header/Header";

export default function App() {
  return (
    <div>
      <Header />
      <Banner />
      <Navigation />
      <Outlet />
    </div>
  );
}
