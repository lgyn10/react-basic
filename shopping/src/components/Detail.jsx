/* eslint-disable react/prop-types */
import {useEffect, useState} from 'react';
import {useNavigate, useParams} from 'react-router';
import styled from 'styled-components';
import TabContainer from './TabContainer';
import {useDispatch} from 'react-redux';
import {addToCart} from '../store/cartStore';

const Detail = (props) => {
  let dispatch = useDispatch();
  let navigate = useNavigate();
  const [cnt, setCnt] = useState(0);
  const [fade, setFade] = useState('');
  const [isShow, setIsShow] = useState(true);
  const [showFade, setShowFade] = useState('');
  useEffect(() => {
    // mount, update 일 때
    console.log('useEffect');
    let a = setTimeout(() => setFade('show'), 100);
    let b = setTimeout(() => {
      setShowFade('hide');
      console.log('3000 3초 이벤트 숨겨짐');
    }, 3000);
    let c = setTimeout(() => {
      setIsShow(0);
      console.log('언마운트 이벤트 3500');
    }, 3500);
    return () => {
      setFade('');
      setShowFade('');
      console.log(paramId);
      clearTimeout(a);
      clearTimeout(b);
      clearTimeout(c);
    };
  }, []);

  let {paramId} = useParams();
  let product = props.products.filter((e) => e.id == paramId)[0];
  console.log(product);
  // console.log(paramId);

  // 장바구니 추가하기
  const onClickAddToCart = (product) => {
    dispatch(addToCart(product));
    navigate('/cart');
  };
  return (
    <DivContainer className={'container hide ' + fade}>
      {isShow ? <StyledAlert className={'alert alert-warning ' + showFade}>3초 이내에 구매 시 20% 할인!</StyledAlert> : null}
      <div className='row'>
        <div className='col-md-6'>
          <img src={'/' + (product.img ? product.img : 'none.png')} width='100%' />
        </div>
        <div className='col-md-6'>
          <h4 className='pt-5'>{product.title}</h4>
          <p>{product.content}</p>
          <p>{product.price}원</p>
          <StyledFlex>
            <StyledBtn color='lightgreen' className='btn'>
              네이버 페이
            </StyledBtn>
            <StyledBtn color='lightblue' className='btn'>
              토스 페이
            </StyledBtn>
            <StyledBtn color='red' className='btn' onClick={() => onClickAddToCart(product)}>
              주문 하기
            </StyledBtn>
            <StyledBtn
              color='lightyellow'
              className='btn'
              onClick={() => {
                setCnt((prev) => prev + 1);
                //! flushSync() 써보려 했지만 안 됨
                // React.flushSync(() => {
                //   setCnt(cnt + 1);
                // });
                // console.log('out' + {cnt});
              }}>
              {cnt}
            </StyledBtn>
          </StyledFlex>
        </div>
      </div>
      <TabContainer />
    </DivContainer>
  );
};
const StyledBtn = styled.button`
  background-color: ${(props) => props.color};
`;
const DivContainer = styled.div`
  &.hide {
    opacity: 0;
  }
  &.show {
    opacity: 1;
    transition: opacity 0.5s;
  }
`;

const StyledAlert = styled.div`
  position: absolute;
  width: 100%;
  z-index: 1;
  &.hide {
    transform: translateY(-100px);
    transition: transform 0.5s;
  }
`;
const StyledFlex = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  margin-bottom: 10px;
`;
export default Detail;
