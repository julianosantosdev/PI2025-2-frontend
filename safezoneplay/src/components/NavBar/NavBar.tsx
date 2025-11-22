import { Container } from '@styles/global';
import { useEffect, useRef, useState } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { HeaderStyled, Nav, MenuContainer, NavLinks, NavItem } from './style';
import logo from '@assets/sfp_logo.svg';
import { SearchInput } from '@components/Input/Input.component';
import { GrGamepad, GrHomeRounded } from 'react-icons/gr';
import { CgProfile } from 'react-icons/cg';
import { MdOutlineWorkspacePremium } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';
import useGames from '@hooks/useGames';

const NavBar = () => {
  const navigate = useNavigate();
  const { gameSearchValue, setGameSearchValue } = useGames();
  const [isOpen, setIsOpen] = useState(false);
  const [hidden, setHidden] = useState(false);
  const lastScroll = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.pageYOffset;

      if (currentScroll > lastScroll.current && currentScroll > 50) {
        setHidden(true);
      } else if (currentScroll < lastScroll.current) {
        setHidden(false);
      }

      lastScroll.current = currentScroll <= 0 ? 0 : currentScroll;
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <HeaderStyled style={{ transform: hidden ? 'translateY(-100%)' : 'translateY(0)' }}>
      <Container>
        <Nav>
          <div className='nav-container-logo'>
            <img src={logo} alt='sfc_logo' onClick={() => navigate('/home')} />
          </div>
          <MenuContainer>
            <form
              onSubmit={() => {
                navigate(`/search/${gameSearchValue}`);
              }}
            >
              <SearchInput
                type='text'
                id='searchInput'
                placeholder='O que você está jogando hoje?'
                onChange={(event) => {
                  setGameSearchValue(event.target.value);
                }}
              />
            </form>
            <GiHamburgerMenu
              onClick={() => {
                setIsOpen(!isOpen);
              }}
            />
          </MenuContainer>

          <NavLinks open={isOpen}>
            <NavItem>
              <a href='/home'>{<GrHomeRounded />}Home</a>
            </NavItem>
            <NavItem>
              <a href='#about'>{<GrGamepad />}Meus Jogos</a>
            </NavItem>
            <NavItem>
              <a href='/premium'>{<MdOutlineWorkspacePremium />}Area Premium</a>
            </NavItem>
            <NavItem>
              <a href='#services'>{<CgProfile />}Perfil</a>
            </NavItem>
          </NavLinks>
        </Nav>
      </Container>
    </HeaderStyled>
  );
};

export default NavBar;
