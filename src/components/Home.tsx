import { useNavigate } from "react-router-dom";
import heroPage from '../assets/modern-desktop-compute-concept-illustration.png';

const Home = () => {
    const navigator = useNavigate();
    return (
        <section className='flex flex-col gap-[30px] mt-[90px] w-[100%] px-[50px] md:px-[140px] md:gap-[50px] md:items-center'>
            <div className="w-full flex justify-between">
                <div className="flex flex-col gap-[30px]">
                    <h1 className='text-[55px] text-cta font-bold md:text-[70px] md:mb-[40px]'>
                        {`<Hardware Bay/>`}
                    </h1>
                    <p className='text-[20px] w-[260px] leading-snug'>
                        Welcome to Hardware Bay — Your Gateway to the Best in Tech.
                    </p>
                    <button className='text-[20px] font-bold w-fit px-[40px] text-bg bg-cta mt-[10px] md:ml-[10px]' onClick={() => navigator('/products')}>
                        Buy now
                    </button>
                </div>

                <img src={heroPage} className="w-[600px] hidden md:block">
                </img>
            </div>


            <div className='flex flex-col gap-[30px] items-center mt-[80px] md:flex-row md:items-start md:w-[800px] md:justify-between'>
                <div className='flex flex-col items-center gap-[30px] text-[18px] w-[280px]'>
                    <span className='flex gap-[20px] text-[30px] items-center text-cta'>
                        <i className="fa-solid fa-user text-[32px]"></i>
                            Who we are
                    </span>

                    <span>
                        At <span className='text-cta'>Hardware Bay</span>, we believe finding high-quality technology should be simple and effortless.
                    </span>

                    <span>
                        Fast, reliable, and built for tech enthusiasts — explore a smarter way to shop hardware.
                    </span>
                </div>


                <div className='flex flex-col items-center gap-[30px] text-[18px] w-[280px] mt-[50px] md:mt-0'>
                    <span className='flex gap-[20px] text-[30px] items-center text-cta'>
                        <i className="fa-solid fa-list-check text-[32px]"></i>
                            Our goal
                    </span>

                    <span>
                        Whether you're upgrading your setup, building from scratch, or searching for the latest innovations, we offer a curated selection of trusted components and accessories.
                    </span>
                </div>
            </div>  


            <div className="flex gap-[25px] text-accent text-[30px] justify-center mt-[30px]">
                <i className="fa-brands fa-instagram"></i>
                <i className="fa-brands fa-facebook"></i>
                <i className="fa-brands fa-youtube"></i>
                <i className="fa-brands fa-linkedin"></i>
            </div>
        </section>
    )
}

export default Home