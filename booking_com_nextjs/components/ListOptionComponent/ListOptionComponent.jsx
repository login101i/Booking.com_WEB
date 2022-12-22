import { useState } from 'react';

import { Text, Flex, CustomIcon } from '../../sharedComponents';
import { MainContainer, Container } from './ListOptionComponent.styles';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { useMediaQuery } from 'react-responsive';
import { screens } from '../../utils/screens';

export const ListOptionComponent = ({ title, children, expanded }) => {
		const isMobile = useMediaQuery({ maxWidth: screens.md });
	const [isExpanded, setIsExpanded] = useState(!isMobile );

	const handleExpanded = () => {
		setIsExpanded(!isExpanded);
	};

	return (
		<MainContainer isMobile={isMobile}>
			<Container>
				<Text margin='0px 10px' bold>
					{title}
				</Text>
				<CustomIcon icon={isExpanded ? KeyboardArrowUpIcon : ExpandMoreIcon} onClick={handleExpanded} />
			</Container>
			{isExpanded && children}
		</MainContainer>
	);
};
