import { Text, Flex } from '../../sharedComponents';
import { MainContainer } from './ListOptionComponent.styles';

export const ListOptionComponent = ({ title, children }) => {
	return (
		<MainContainer>
			<Flex column>
				<Text margin='0px 10px' bold>
					{title}
				</Text>
				{children}
			</Flex>
		</MainContainer>
	);
};
