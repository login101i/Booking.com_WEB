import {Container} from './Flex.styles.jsx'

export const Flex = ({
  column,
  space,
  width,
  height,
  backGr,
  margin,
  center,
  gap,
  grow,
  children
}) => {
  return (
    <Container
      column={column}
      space={space}
      width={width}
      backGr={backGr}
      height={height}
      margin={margin}
      center={center}
      gap={gap}
      grow={grow}
    >
      {children}
    </Container>
  );
};
