/* eslint-disable react/prop-types */
import {Nav} from 'react-bootstrap';
import {styled} from 'styled-components';
import {useState} from 'react';
import {useEffect} from 'react';

const TabContainer = () => {
  const [tabState, setTabState] = useState(0);
  const handleTab = (eventKey) => {
    console.log(eventKey);
    setTabState(eventKey);
  };

  return (
    <>
      <Nav variant='tabs' onSelect={handleTab} activeKey={tabState} defaultActiveKey='0'>
        <Nav.Item>
          <Nav.Link eventKey='0'>제품 상세</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey='1'>리뷰</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey='2'>Q & A</Nav.Link>
        </Nav.Item>
      </Nav>
      <DetailBox tabState={tabState} />
    </>
  );
};
export default TabContainer;

const DetailBox = (props) => {
  const [fade, setFade] = useState('');
  useEffect(() => {
    setTimeout(() => {
      setFade('end');
    }, 100);
    return () => {
      setFade('');
    };
  }, [props.tabState]);
  let render = [
    <StyledDiv className={'start ' + fade} key='0'>
      제품 상세 페이지 입니다. <br />
      상세 정보 <br />
      정보 정보
    </StyledDiv>,
    <StyledDiv className={'start ' + fade} key='1'>
      고객님들의 리뷰를 볼 수 있습니다.
    </StyledDiv>,
    <StyledDiv className={'start ' + fade} key='2'>
      궁금하신 것을 해결하세요.
    </StyledDiv>,
  ][props.tabState];

  return <div>{render}</div>;
};

const StyledDiv = styled.div`
  height: 300px;
  margin: 1rem;
  &.start {
    opacity: 0;
    transform: translateY(10px);
  }
  &.end {
    opacity: 1;
    transform: translateY(0px);
    transition: all 0.5s;
  }
`;
