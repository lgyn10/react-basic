/* eslint-disable react/prop-types */

import {Image} from 'react-bootstrap';

const MdProducts = (props) => {
  return (
    <div key={props.product.id}>
      <Image className='product-img' src={props.product.img} rounded />
      <h4>{props.product.title}</h4>
      <p>{props.product.content}</p>
      <p>가격: {props.product.price}</p>
    </div>
  );
};

export default MdProducts;
