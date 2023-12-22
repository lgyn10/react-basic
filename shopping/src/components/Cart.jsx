import {Button, Table} from 'react-bootstrap';
import {useDispatch, useSelector} from 'react-redux';
import {decreaseCnt, increaseCnt} from '../store/cartStore';
import styled from 'styled-components';

const Cart = () => {
  let dispatch = useDispatch();
  // increase
  const onClickIncrease = (id) => {
    dispatch(increaseCnt(id));
    console.log(id);
    console.log(storeData);
  };
  // decrease
  const onClickDecrease = (id) => {
    dispatch(decreaseCnt(id));
    console.log(id);
  };
  // 상태값 불러오기
  let storeData = useSelector((state) => state.cart);
  console.log(storeData);
  // 반복 컴포넌트
  let trlist = storeData.map((e, i) => (
    <tr key={e.id}>
      <td>{i + 1}</td>
      <td>{e.title}</td>
      <td>
        <DivFlex>
          <StyledButton variant='secondary' onClick={() => onClickIncrease(e.id)}>
            +
          </StyledButton>
          <div>{e.count}</div>
          <StyledButton variant='secondary' onClick={() => onClickDecrease(e.id)}>
            -
          </StyledButton>
        </DivFlex>
      </td>
    </tr>
  ));
  return (
    <>
      <div>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>No.</th>
              <th>상품명</th>
              <th>가격</th>
            </tr>
          </thead>
          <tbody>{trlist}</tbody>
        </Table>
      </div>
    </>
  );
};
export default Cart;

const DivFlex = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;

const StyledButton = styled(Button)`
  padding-block: 1px;
`;
