function Card({ membro, nome, idade, curso }) {
  return (
    <div className="relative">
      
      <div
        className="
          absolute
          left-1/2
          -translate-x-1/2
          -top-8
          w-[187px]
          h-[64px]
          bg-[#FF6600]
          rounded-[22px]
          flex
          items-center
          justify-center
          z-10
        "
      >
        <h2 className="text-white text-[24px] font-bold">
          {membro}
        </h2>
      </div>

      
      <div
        className="
          w-[336px]
          h-[277px]
          bg-[#001B44]
          rounded-[22px]
          flex
          flex-col
          justify-center
          items-center
          gap-4
        "
      >
        <p className="text-white font-bold text-[24px] leading-9">
          {nome}
        </p>

        <p className="text-white font-bold text-[24px] leading-9">
          {idade}
        </p>

        <p className="text-white font-bold text-[24px] leading-9">
          {curso}
        </p>
      </div>
    </div>
  );
}

export default Card;