const Header = () => {

  return (
    <header className="h-[80px] flex items-center justify-between p-3 px-[30px]">
      <h3 className="t-header font-bold text-cta h-">
        {"<HB/>"}
      </h3>

      <div className="flex gap-[10px] items-center w-[25%] justify-between">
        <i className="fa-solid fa-cart-shopping text-[28px]"></i>
        <i className="fa-solid fa-moon text-[28px]"></i>
      </div>
    </header>
  )
}

export default Header