function Headertext() {
  return (
    <div className="flex flex-col px-4 md:flex-row justify-between bg-[rgb(233,233,228)] pb-8 md:pb-10 pt-6 md:pt-2 gap-4 md:gap-0 min-h-[30vh] md:min-h-0 ">
      <div className="max-w-4xl">
        <h1 className="text-5xl md:text-8xl md:py-2 font-light leading-none ">
          BUILDING ON EXPERIENCE
        </h1>
      </div>

      <div className="flex items-start space-x-2">
        <img
          src="https://edenbuild.co.uk/wp-content/uploads/2025/08/kings-trust-logo-1.svg"
          className="w-12 md:w-[72px] "
          alt="King's Trust Logo"
        />
        <p className="mt-0 text-base md:text-2xl ">
          Official partner of the
          <br /> King's Trust.
        </p>
      </div>
    </div>
  );
}

export default Headertext;
