import { useNavigate } from "react-router-dom"
import { useCart } from "../hooks/useCart";
import { useTheme } from "../hooks/useTheme";

const Header = () => {

  const navigator = useNavigate();
  const {state: cart} = useCart();
  const {dark, toggle} = useTheme();

  const label = cart.products.length > 9 ? '+9' : cart.products.length;

  return (
    <header className="h-[80px] flex items-center justify-between p-3 px-[30px] md:h-[60px] md:px-[60px] md:py-[40px] md:border-bottom md:
    ">
      <h3 className="t-header font-bold text-cta cursor-pointer" onClick={() => navigator('/')}>
        {"<HB/>"}
      </h3>

      <div className="flex items-center w-[28%] justify-between md:w-fit md:gap-[60px]">
        <i className="fa-solid fa-cart-shopping text-[28px] text-accent relative pointer" onClick={() => navigator('/cart')}>
          {cart.products.length ? 
            <span className="absolute top-[-10px] right-[-10px] text-[11px] text-bg bg-cta w-[20px] aspect-square flex items-center justify-center rounded-full">
              {label}
            </span> : 
          null}
        </i>
        {!dark ? 
        <i className="fa-solid fa-moon text-[28px] text-accent pointer" onClick={toggle}></i> :
        <i className="fa-solid fa-sun text-[28px] text-accent pointer" onClick={toggle}></i>
        }
      </div>
    </header>
  )
}

export default Header