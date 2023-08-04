import {Nav} from 'react-bootstrap';
import {styled} from 'styled-components';
const TabContainer = () => {
  return (
    <>
      <Nav variant='tabs' defaultActiveKey='/home'>
        <Nav.Item>
          <Nav.Link href='/home'>제품 상세</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link>리뷰</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link>Q & A</Nav.Link>
        </Nav.Item>
      </Nav>
      <StyledDiv></StyledDiv>
    </>
  );
};
export default TabContainer;

const StyledDiv = styled.div`
  height: 300px;
`;
