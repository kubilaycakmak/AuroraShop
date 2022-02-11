import {useContext} from "react";
import styling from "../styles/Header.module.css";
import { useHistory , Link } from "react-router-dom";
import {StoreContext} from '../Context/StoreContext';
import {AiOutlineShopping} from "react-icons/ai";
import Button from "../UI/Button";
import {memo} from 'react';
const Header = memo(() => {
  const {cartctx} =  useContext(StoreContext);
  const history = useHistory();
  const [carts]  = cartctx;

  const PushToCart =  (e) => {

    e.preventDefault();
    if(carts =="") {
      alert('Add a Product to the Cart');
    }
    else {
      history.push("/cart");
    }
  }

  return (
    <header  className={styling.Header}>
      <div className={styling.logo}><Link to="/">Aurora Store</Link></div>
      <div className={styling.info}>
        <Button display="flex" textColor="black" margin="5px" radius="10px" padding="15px 30px" fontSize="15px"  direction="row"
          onClick={PushToCart} ariaLabel="Cart"
        >
          <h4>Cart</h4><AiOutlineShopping/>&#160;{carts.length == 0 ? '' : carts.length}
        </Button>
      </div>
    </header>
  );
});
export default Header;
