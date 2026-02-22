export default function NavBar({ viewMore, setViewMore }) {
  return (
    <div className="bg-gray-50 ">
      <div className="max-w-7xl mx-auto py-10 px-3 xl:px-0 flex flex-col md:flex-row items-end  md:justify-between md:items-end">
        <div>
          <p className="font-medium text-[#000000] text-[16px] leading-6">Whats new?</p>
          <h2 className="font-bold text-lg md:text-2xl leading-9 text-[#003459]">
            Take A Look At Some Of Our Photo Gallery
          </h2>
        </div>
        <button
          onClick={() => setViewMore(!viewMore)}
          className="flex leading-tight border-2 border-[#003459] text-[#003459] px-5 py-3 rounded-[57px] text-sm font-medium hover:bg-[#003459] hover:text-white transition gap-2"
        >
          <span className="font-medium text-[#003459] text-sm leading-5"></span>{viewMore ? "ViewLess" : "ViewMore"}
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M8.33337 6.66666L11.6667 9.99999L8.33337 13.3333"
              stroke="#003459"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}
