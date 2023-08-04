/* eslint-disable react/prop-types */

import {Image} from 'react-bootstrap';
import {useNavigate} from 'react-router';

const MdProducts = (props) => {
  let navigate = useNavigate();
  return (
    <div key={props.product.id}>
      <Image
        style={{cursor: 'pointer', width: '100%'}}
        onClick={() => {
          navigate('/detail/' + props.product.id);
        }}
        className='product-img'
        src={props.product.img ? props.product.img : '/none.png'}
        rounded
      />
      <h4>{props.product.title}</h4>
      <p>{props.product.content}</p>
      <p>가격: {props.product.price}</p>
    </div>
  );
};

export default MdProducts;
