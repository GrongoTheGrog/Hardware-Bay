import { useNavigate } from "react-router-dom";
import { useCart } from "../hooks/useCart"
import { Product } from "../types/product";

const Cart = () => {

    const {state: cart, dispatch: setCart} = useCart();
    const navigator = useNavigate();

    function purchase(): void{
        setCart({type: 'clear-cart'});
        navigator('/conclusion');
    }

    return (
        <section className="flex flex-col md:w-[600px] px-[35px] py-[40px] text-cta gap-[20px] m-auto">
            <h2 className="flex gap-[20px] items-center px-[30px]">
                <i className="fa-solid fa-cart-shopping text-[38px]"></i>
                <span className="text-[38px] font-semibold">
                    Cart
                </span>
            </h2>

            {cart.products.length ? <div className="flex flex-col gap-[15px] mt-[30px]">
                {cart.products.map((product: Product) => {
                    return (
                        <div className="w-full flex gap-[25px] py-[10px]">
                            <img src={product.image_url} className="w-[30%] aspect-square object-contain rounded-[5px]"></img>

                            <div className="text-accent flex flex-col items-end justify-between gap-[10px] w-full">
                                <div className="flex w-full flex-col">
                                    <span className="font-bold text-[20px]">
                                        {product.name}
                                    </span>
                                    <span>
                                        ${product.price / 100}
                                    </span>
                                </div>

                                <button className="bg-cta text-bg font-bold text-[16px] py-[5px] px-[15px]" onClick={() => setCart({type: 'remove-from-cart', product})}>
                                    Remove from cart
                                </button>
                            </div>
                        </div>
                    )
                })}
            </div> : 
            <div className="flex flex-col text-accent h-[400px] gap-[35px] items-center justify-center">
                <i className="fa-solid fa-face-meh text-[60px]"></i>

                <span className="text-center w-[80%] text-[16px]">
                    It seems your cart is empty. What about adding some products?
                </span>

                <button className='text-[20px] font-bold w-fit px-[40px] text-bg bg-cta mt-[10px]' onClick={() => navigator('/products')}>
                    Buy now
                </button>
            </div>}




            {cart.products.length ? 
            <div>
                <div className="flex justify-between mt-[20px] text-[22px] font-bold text-accent">
                    <span>
                        Total:
                    </span>
                    <span>
                        ${cart.totalPrice / 100}
                    </span>
                </div>
                <button className='text-[20px] font-bold w-fit px-[20px] text-bg bg-cta py-[5px] mt-[20px]' onClick={purchase}>
                    Purchase
                </button>
            </div> : null}
        </section>
    )
}

export default Cart