import { Outlet } from "react-router-dom";
import Header from "./component/Header";
import Banner from "./component/Banner";

export default function App() {
  return (
    <div>
      <Banner />
      <Header />
      <Outlet />
    </div>
  );
}
