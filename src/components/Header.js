import '../App.css';

function Header(props) {
  return (
   <div className='flex shopping-card'>
     <div   onClick={() => props.handleShow(false)}>Shopping Cart</div>
     <div onClick={() => props.handleShow(true)}>
    cart
     
        <sup>{props.count}</sup>
        {/* sup: to show no at top of cart */}
     </div>
   </div>
  );
}

export default Header;