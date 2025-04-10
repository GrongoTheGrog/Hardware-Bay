const Conclusion = () => {
  return (
    <section className="px-[20px] py-[40px] flex flex-col items-center h-[700px] justify-center text-accent gap-[20px]">
      <i className="fa-solid fa-face-grin-wide text-[60px]"></i>
      <span className="w-[260px] text-center mt-[20px]">
        Congratulations! Your products are being prepared for shipping. In the meantime, why not check out our social media?
      </span>
      <div className="flex gap-[25px] text-accent text-[30px] justify-center mt-[30px]">
          <i className="fa-brands fa-instagram"></i>
          <i className="fa-brands fa-facebook"></i>
          <i className="fa-brands fa-youtube"></i>
          <i className="fa-brands fa-linkedin"></i>
      </div>
    </section>
  )
}

export default Conclusion