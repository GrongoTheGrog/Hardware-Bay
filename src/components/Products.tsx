import products from '../../data/data.json';
import { Product } from '../types/product';
import Dropdown from '../elements/Dropdown';
import { useEffect, useState } from 'react';
import { useCart } from '../hooks/useCart';
import { useNavigate } from 'react-router-dom';



const priceValues = [
    {label: "All",              data: (arg: number): boolean => arg > 0},
    {label: "$0 - $299",        data: (arg: number): boolean => arg > 0 && arg <= 299},
    {label: "$299 - $499",      data: (arg: number): boolean => arg > 299 && arg <= 499},
    {label: "$499 - $999",      data: (arg: number): boolean => arg > 499 && arg <= 999},
    {label: "$999 - $1499",     data: (arg: number): boolean => arg > 999 && arg <= 1499},
    {label: "> $1499",          data: (arg: number): boolean => arg > 1499},
]


const categoryValues = [
    {label: 'All',                      data: 'All'},
    {label: 'Components',               data: 'Components'},
    {label: 'Storage',                  data: 'Storage'},
    {label: 'Peripherals',              data: 'Peripherals'},
    {label: 'Displays',                 data: 'Displays'},
    {label: 'Accessories',              data: 'Accessories'},
    {label: 'Audio',                    data: 'Audio'},
    {label: 'Computers',                data: 'Computers'}
]


const Products = () => {

    const [priceFilter, setPriceFilter] = useState(priceValues[0]);
    const [categoryFilter, setCategoryFilter] = useState(categoryValues[0]);
    const [search, setSearch] = useState('');
    const [filteredList, setFilteredList] = useState<Product[]>([]);

    const {state: cart, dispatch: setCart} = useCart();

    const navigator = useNavigate();

    useEffect(() => {
        let list = [...products.products];
        
        //price filter
        list = list.filter(product => {
            return priceFilter.data(product.price / 100);
        })

        //category filter
        list = list.filter(product => {
            if (categoryFilter.data === 'All') return true;
            if (categoryFilter.data === product.category) return true;
        })

        //input filter
        list = list.filter(product => {
            const len = search.length;
            return product.name.slice(0, len).trim().toLowerCase() === search.trim().toLowerCase();
        })


        setFilteredList(list);
    }, [priceFilter, categoryFilter, search]);


    function addToCart(product: Product, inCart: boolean){
        inCart ? 
        setCart({type: 'remove-from-cart', product: product}) :
        setCart({type: 'add-to-cart', product})
    }
    

    return (
        <section className='py-[40px] px-[30px] flex flex-col items-center'> 

                <div className={'transition-all transition-400 ease fixed w-full flex h-[80px] bg-cta bottom-0 shadow-2xl text-bg text-[24px] font-bold items-center justify-between px-[20px] ' + (cart.products.length ? 'bottom-0' : 'bottom-[-80px]')}>
                    <i className="fa-solid fa-cart-shopping"></i>

                    <span>
                        ${cart.totalPrice / 100}
                    </span>

                    <span>
                        {cart.products.length} item(s)
                    </span>

                    <i className="fa-solid fa-arrow-up-right-from-square" onClick={() => navigator('/cart')}></i>
                </div>

            <div className='flex rounded-full border-cta border w-fit '>
                <input 
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    className='px-[30px] py-[5px] w-[240px] outline-none'
                    placeholder='Search'
                    >
                </input>
                <button className='py-[0] px-[30px] bg-transparent flex items-center w-[60px]'>
                    {!search.length ? 
                    <i className="fa-solid fa-magnifying-glass text-[14px]"></i> :
                    <i className="fa-solid fa-x text-[14px]" onClick={() => setSearch('')}></i>
                    }
                    
                </button>
            </div>

            <div className='flex justify-between mt-[20px] w-full'>
                <Dropdown label='Price' values={priceValues} set={setPriceFilter}/>
                <Dropdown label='Category' values={categoryValues} set={setCategoryFilter}/>
            </div>


            <div className='flex flex-col gap-[65px] mt-[60px]'>
                {filteredList.map((product) => {
                    const stars = [];
                    for (let i = 1; i <= 5; i++){
                        stars.push(i <= Math.round(product.stars));
                    }

                    const inCart: boolean = !cart.products.find(p => p.id === product.id) === false;
                    return (
                        <div className='flex gap-[10px] w-full border-accent p-[15px] gap-[15px] justify-between border-accent rounded-[10px]' key={product.id}>
                            <div className='flex flex-1 flex-col gap-[15px]'>
                                <div className='flex flex-col'>
                                    <img src={product.image_url} alt="product-image" className='w-[100%] aspect-square object-contain'/>
                                </div>
                                <span className='text-[22px] text-accent font-bold'>
                                    ${product.price / 100}
                                </span>
                                <div className='flex gap-[5px] text-yellow-400'>
                                    {stars.map((star: boolean, key: number) => {
                                        return star ? (
                                            <i className="fa-solid fa-star text-[14px]" key={key}></i>
                                        ) : (
                                            <i className="fa-regular fa-star text-[14px]" key={key}></i>
                                        )
                                            
                                    })}
                                </div>
                            </div> 
                            <div className='flex flex-1 flex-col gap-[5px] px-[5px]'>
                                <span className='text-accent font-bold text-[20px]'>
                                    {product.name}
                                </span>

                                <span className='text-[14px]'>
                                    {product.description}
                                </span>

                                <div className='flex-1 flex items-end flex-col justify-end'>
                                    <button className='text-[16px] py-[5px] text-bg bg-cta font-bold' onClick={() => addToCart(product, inCart)}>
                                        {inCart ? 'Remove' : 'Add to cart'}
                                    </button>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </section>
    )
}

export default Products