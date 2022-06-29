import { Main_container } from "./index.style";
import DefaultNavbar from "./Navbar/DefaultNavbar";
import LoggedNavbar from "./Navbar/LoggedNavbar";

const Main = () => {
  const token = localStorage.getItem("token");
  return (
    <Main_container>
      {token ? <LoggedNavbar></LoggedNavbar> : <DefaultNavbar></DefaultNavbar>}
    </Main_container>
  );
};
export default Main;
