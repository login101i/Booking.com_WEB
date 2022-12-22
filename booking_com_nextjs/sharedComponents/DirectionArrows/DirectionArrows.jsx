import React, { useState } from 'react';
import styled from 'styled-components';

import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { DirectionButton, Wrapper, Container } from './DirectionArrows.styles';

export const DirectionArrows = ({ children, style }) => {
	const [slideIndex, setSlideIndex] = useState(0);

	const handleClick = direction => {
		if (direction === 'left') {
			setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 0);
		} else {
			setSlideIndex(slideIndex >= 0 ? slideIndex + 1 : 0);
			if (slideIndex === 1) setSlideIndex(0);
		}
	};

	return (
		<Container style={style}>
			{slideIndex > 0 && (
				<DirectionButton direction='left' onClick={() => handleClick('left')}>
					<ArrowBackIosNewIcon />
				</DirectionButton>
			)}
			<Wrapper slideIndex={slideIndex}>{children}</Wrapper>

			<DirectionButton direction='right' onClick={() => handleClick('right')}>
				<ArrowForwardIosIcon />
			</DirectionButton>
		</Container>
	);
};
