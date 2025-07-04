export default function DetailBox({ label, value }) {
  return (
    <div className="w-[258.67px] h-[149px] gap-4 border border-[#E6E6E6] px-[40px] py-[39px] flex flex-col justify-center bg-[#FAFAFA] rounded-sm">
      <p className="font-aeonik font-normal text-base leading-[160%] text-[#141414] !whitespace-nowrap">{label}</p>
      <p className="font-aeonik font-bold text-2xl leading-[100%] text-[#141414] !whitespace-nowrap">{value}</p>
    </div>
  );
}
