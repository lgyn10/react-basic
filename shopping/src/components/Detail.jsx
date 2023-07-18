/* eslint-disable react/prop-types */
import {useEffect, useState} from 'react';
import {useParams} from 'react-router';
import styled from 'styled-components';

const Detail = (props) => {
  const [cnt, setCnt] = useState(0);
  const [isShow, setIsShow] = useState(true);
  useEffect(() => {
    // mount, update 일 때
    console.log('useEffect');
    setTimeout(() => setIsShow(0), 3000);
  });

  let {paramId} = useParams();
  let product = props.products.filter((e) => e.id == paramId)[0];
  // console.log(product);
  // console.log(paramId);
  return (
    <div className='container'>
      {isShow ? <div className='alert alert-warning'>3초 이내에 구매 시 20% 할인!</div> : null}
      <div className='row'>
        <div className='col-md-6'>
          <img src={'/' + product.img} width='100%' />
        </div>
        <div className='col-md-6'>
          <h4 className='pt-5'>{product.title}</h4>
          <p>{product.content}</p>
          <p>{product.price}원</p>
          <StyledBtn color='lightgreen' className='btn'>
            네이버 페이
          </StyledBtn>
          <StyledBtn color='lightblue' className='btn'>
            토스 페이
          </StyledBtn>
          <StyledBtn color='red' className='btn'>
            페이북
          </StyledBtn>
          <StyledBtn color='lightyellow' className='btn' onClick={() => setCnt((prev) => prev + 1)}>
            {cnt}
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
