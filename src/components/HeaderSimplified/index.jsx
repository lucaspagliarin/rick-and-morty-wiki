import { HeaderContainer, Logo } from "./style";
import LogoImg from '../../assets/logo.svg'
import { Link } from "react-router-dom";

export function HeaderSimplified() {

  return (
    <HeaderContainer>
      <Link to="/">
        <Logo src={LogoImg} alt="rick and morty logo"/>
      </Link>
    </HeaderContainer>
  )
}
