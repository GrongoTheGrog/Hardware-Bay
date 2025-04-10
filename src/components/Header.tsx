import { useNavigate } from "react-router-dom"
import { useCart } from "../hooks/useCart";

const Header = () => {

  const navigator = useNavigate();
  const {state: cart} = useCart();

  const label = cart.products.length > 9 ? '+9' : cart.products.length;

  const click = () => {
    const theme = document.querySelector('html') as HTMLHtmlElement | null;
    if (theme){
      theme.classList.toggle('dark');
      console.log(theme.classList)
    }
  }

  return (
    <header className="h-[80px] flex items-center justify-between p-3 px-[30px]">
      <h3 className="t-header font-bold text-cta" onClick={() => navigator('/')}>
        {"<HB/>"}
      </h3>

      <div className="flex items-center w-[28%] justify-between">
        <i className="fa-solid fa-cart-shopping text-[28px] text-accent relative" onClick={() => navigator('/cart')}>
          {cart.products.length ? 
            <span className="absolute top-[-10px] right-[-10px] text-[11px] text-bg bg-cta w-[20px] aspect-square flex items-center justify-center rounded-full">
              {label}
            </span> : 
          null}
        </i>
        <i className="fa-solid fa-moon text-[28px] text-accent" onClick={click}></i>
      </div>
    </header>
  )
}

export default Header