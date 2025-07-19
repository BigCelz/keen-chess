export default function DetailBox({ label, value }) {
  const isUrl = typeof value === "string" && value.startsWith("http");

  return (
    <div className="w-[258.67px] h-[149px] gap-4 border border-[#E6E6E6] px-[40px] py-[39px] flex flex-col justify-center bg-[#FAFAFA] rounded-sm">
      <p className="font-aeonik font-normal text-base leading-[160%] text-[#141414]">
        {label}
      </p>
      {isUrl ? (
        <a
          href={value}
          target="_blank"
          rel="noopener noreferrer"
          className="font-aeonik font-bold text-2xl leading-[100%] break-words underline text-[#D4AF37]"
        >
          {value}
        </a>
      ) : (
        <p className="font-aeonik font-bold text-2xl leading-[100%] text-[#141414] break-words">
          {value}
        </p>
      )}
    </div>
  );
}
