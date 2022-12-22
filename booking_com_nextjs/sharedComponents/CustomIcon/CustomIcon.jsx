
import { Icon, StyledBadge } from './CustomIcon.styles';

export const CustomIcon = ({ badgeContent, size = 30, icon, color, onClick }) => {
	const IconName = icon;

	return (
		<Icon onClick={onClick}>
			{badgeContent ? (
				<StyledBadge badgeContent={badgeContent}>
					<IconName style={{ fontSize: `${size}px` }} />
				</StyledBadge>
			) : (
				<IconName
					style={{
						fontSize: `${size}px`,
						color: `${color}`,
						textAlign: 'center',
					}}
				/>
			)}
		</Icon>
	);
};
