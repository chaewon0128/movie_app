import { Outlet } from "react-router-dom";
import Banner from "./component/Banner";
import Navigation from "./component/Navigation";
import Header from "./component/Header";

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
