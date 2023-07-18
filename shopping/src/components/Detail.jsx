/* eslint-disable react/prop-types */
import {useParams} from 'react-router';
import styled from 'styled-components';

const Detail = (props) => {
  let {paramId} = useParams();
  let product = props.products.filter((e) => e.id == paramId)[0];
  console.log(product);
  console.log(paramId);
  return (
    <div className='container'>
      <div className='row'>
        <div className='col-md-6'>
          <img src={'/' + product.img} width='100%' />
        </div>
        <div className='col-md-6'>
          <h4 className='pt-5'>{product.title}</h4>
          <p>{product.content}</p>
          <p>{product.price}원</p>
          <StyledBtn color='lightgreen' className='btn'>
            주문하기
          </StyledBtn>
          <StyledBtn color='lightblue' className='btn'>
            주문하기
          </StyledBtn>
          <StyledBtn color='red' className='btn'>
            주문하기
          </StyledBtn>
        </div>
      </div>
    </div>
  );
};
const StyledBtn = styled.button`
  background-color: ${(props) => props.color};
`;

export default Detail;
