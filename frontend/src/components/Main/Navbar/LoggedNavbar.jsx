import { Nav, Ul, Li, ALogo, ANav, AAdd } from "./LoggedNavbar.style";
import { BiMessageSquare } from "react-icons/bi";
import { FiPackage } from "react-icons/fi";
import { BsPerson } from "react-icons/bs";
import { FaRegHeart } from "react-icons/fa";

const LoggedNavbar = () => {
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
            <BiMessageSquare
              style={{
                paddingRight: "5px",
                marginBottom: "-5px",
                fontSize: "25px",
              }}
            ></BiMessageSquare>
            Wiadomości
          </ANav>
        </Li>
        <Li>
          <ANav>
            <FaRegHeart
              style={{
                paddingRight: "5px",
                marginBottom: "-5px",
                fontSize: "25px",
                strokeWidth: "3",
              }}
            ></FaRegHeart>
          </ANav>
        </Li>
        <Li>
          <ANav>
            <BsPerson
              style={{
                paddingRight: "5px",
                marginBottom: "-3px",
                fontSize: "25px",
                strokeWidth: "0.3",
              }}
            ></BsPerson>
            Twoje konto
          </ANav>
        </Li>
        <Li>
          <AAdd>Dodaj ogłoszenie</AAdd>
        </Li>
      </Ul>
    </Nav>
  );
};
export default LoggedNavbar;
