import { HeaderContainer, HeaderCopy, Logo, HeaderContent } from "./style";
import LogoImg from '../../assets/logo.svg'
import HighlightImage from '../../assets/HighlightImage.png'
import { Link } from "react-router-dom";

export function Header() {

  return (
    <HeaderContainer>
      <Link to="/">
        <Logo src={LogoImg} alt="rick and morty logo"/>
      </Link>
      <HeaderContent>
        <HeaderCopy>
          <div>
            <h1>Descubra tudo em <br/> um <span>único lugar.</span></h1>
            <p>Personagens, localizações, episódios e muito mais.</p>
          </div>
          <p>Wubba Lubba Dub Dub! Cuidado com os olhos.</p>
        </HeaderCopy>
        <img src={HighlightImage} alt="Rick shaded"/>
      </HeaderContent>
    </HeaderContainer>
  )
}
