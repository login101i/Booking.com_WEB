import { Flex } from '../Flex/Flex';
import { ButtonContainer } from './Button.styles';

export const Button = ({ backGrWhite, backGr, color, style, radius, title, rightIcon, margin, children, onClick }) => {
	return (
		<ButtonContainer
			backGrWhite={backGrWhite}
			color={color}
			backGr={backGr}
			radius={radius}
			style={style}
			rightIcon={rightIcon}
			margin={margin}
			onClick={onClick}
		>
			<Flex center backGr='inherit'>
				{' '}
				{title}
				{children}
				{rightIcon}
			</Flex>
		</ButtonContainer>
	);
};
