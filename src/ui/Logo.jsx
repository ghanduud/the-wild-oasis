import styled from 'styled-components';
import { useThemeMode } from '../context/ThemeModeContext';

const StyledLogo = styled.div`
	text-align: center;
`;

const Img = styled.img`
	height: 9.6rem;
	width: auto;
`;

function Logo() {
	const { isLightMode } = useThemeMode();

	const src = isLightMode ? '/logo-light.png' : '/logo-dark.png';
	return (
		<StyledLogo>
			<Img src={src} alt='Logo' />
		</StyledLogo>
	);
}

export default Logo;
