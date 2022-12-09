
import { MainContainer, Container, ComponentContainer, LeftContainer, RightContainer } from './CustomInput.styles';

export const CustomInput = ({
	borderRadius = '8px',
	width,
	leftIcon,
	rightIcon,
	height = '50px',
	backGr,
	color,
	wrap,
	placeholder,
	center,
	component,
	onClick,
	border,
	onChange,
	onKeyDown,

	children,
}) => {
	return (
		<MainContainer backGr={backGr} onClick={onClick} border={border}>
			<LeftContainer>{leftIcon}</LeftContainer>
			<Container
				borderRadius={borderRadius}
				leftIcon={leftIcon}
				rightIcon={rightIcon}
				width={width}
				height={height}
				color={color}
				wrap={wrap}
				placeholder={placeholder}
				center={center}
				onChange={onChange}
				onKeyDown={onKeyDown}
			/>
			<ComponentContainer>{component}</ComponentContainer>

			{rightIcon && <RightContainer>{rightIcon}</RightContainer>}
		</MainContainer>
	);
};
