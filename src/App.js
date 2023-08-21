
// import { useState } from 'react';
// import './App.css'
// import Header from './components/Header';
// import ProductList from './components/ProductList';
// import CartList from './components/CartList';
// import Saller from './components/Form/Saller';
import 'bootstrap/dist/css/bootstrap.min.css';
import Sign from './components/Form/Sign';
import Sign_img from './components/Form/Sign_img';

function App() {

  //  const [product, setProduct] = useState([
  // {
  //      url:'https://images.pexels.com/photos/351406/pexels-photo-351406.jpeg?auto=compress&cs=tinysrgb&w=600',
  //     name:'German Shefard',
  //     category:'Dog',
  //     seller:'Neeraj',
  //     price:18000
  //   },

  //   {
  //     url:`https://images.pexels.com/photos/1643457/pexels-photo-1643457.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1`,
  //     name:'White Kitten',
  //     category:'Cat',
  //     seller:'Pranjal',
  //     price:8000
  //   },

  //   {
  //     url:`https://images.pexels.com/photos/325045/pexels-photo-325045.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1`,
  //     name:'Siamese Fighting Fish',
  //     category:'Fish',
  //     seller:'Sayali',
  //     price:4500

  //   },

  //   {
  //     url:`https://images.pexels.com/photos/8691140/pexels-photo-8691140.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1`,
  //     name:'Yellow Red Siamese Fighting Fish',
  //     category:'Fish',
  //     seller:'Sayali',
  //     price:5000

  //   },

  //   {
  //     url:`https://www.petkonnect.in/cdn/shop/products/PK2022_mKBIySf3OP4ChIFm1jMZwFcqTjfOOWTGBwzu2Uk7_c3bf047d-0a43-4fbe-a141-2772fc34f123.jpg?v=1662119198`,
  //     name:'Whiskas',
  //     category:'Cat Food',
  //     seller:'Sayali',
  //     price:500

  //   }
  // ])

  // const[cart,setCart]=useState([])
  // const [showCart,setShowCart] = useState(false)

  // const addToCart = (data) =>{

  //    setCart([...cart,{...data,quantity:1}])
  //    //... means jevadhe item cart madhe ahet te sagale 
  // }

  // const handleShow =(value) => {
  //   setShowCart(value)
  // }

   return (
   <div> 
    {/* <Header count={cart.length} 
     handleShow={handleShow} ></Header>
    
    {
      showCart ?
      <CartList cart={cart}></CartList>:
      <ProductList product={product} addToCart={addToCart}></ProductList>
    } */}
{/*     
 <Saller/> */}
 <Sign/>
 <Sign_img/>
    
     

    
   </div>
  );
}

export default App;
//through this page we will call other componanet