import { Main_container } from "./index.style";
import DefaultNavbar from "./Navbar/DefaultNavbar";
import LoggedNavbar from "./Navbar/LoggedNavbar";

const Main = () => {
  return (
    <Main_container>
      <LoggedNavbar></LoggedNavbar>
    </Main_container>
  );
};
export default Main;
