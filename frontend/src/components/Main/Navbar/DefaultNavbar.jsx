import { Nav, Ul, Li, ALogo, ANav } from "./DefaultNavbar.style";
import { BsPerson } from "react-icons/bs";
import { FiPackage } from "react-icons/fi";
import { Link } from "react-router-dom";

const DefaultNavbar = () => {
  return (
    <Nav>
      <Ul>
        <Li>
          <ALogo>
            <FiPackage
              style={{
                paddingRight: "5px",
                marginBottom: "-3px",
                fontSize: "24px",
                strokeWidth: "2",
              }}
            ></FiPackage>
            DELiVER
          </ALogo>
        </Li>
        <Li>
          <ANav>
            <BsPerson
              style={{
                paddingRight: "5px",
                marginBottom: "-3px",
                fontSize: "24px",
                strokeWidth: "1",
              }}
            ></BsPerson>
            Zaloguj się
          </ANav>
        </Li>
        <Link to="/signup">
          <Li>
            <ANav>Rejestracja</ANav>
          </Li>
        </Link>
      </Ul>
    </Nav>
  );
};
export default DefaultNavbar;
