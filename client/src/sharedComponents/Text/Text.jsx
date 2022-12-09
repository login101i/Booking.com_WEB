import { MainContainer } from './Text.styles';
export const Text = ({ title, size, uppercase, capitalize, marginBtm, wrap, color, white, children, margin, bold, backGr }) => {
	return (
		<MainContainer
			size={size}
			title={title}
			marginBtm={marginBtm}
			uppercase={uppercase}
			wrap={wrap}
			color={color}
			white={white}
			backGr={backGr}
			margin={margin}
			bold={bold}
			capitalize={capitalize}
		>
			{children}
		</MainContainer>
	);
};
