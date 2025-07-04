import data from "../data/TitleRowData";

type TitleRowDataItem = {
  name: string;
  onClick: () => void;
};

const TitleRow = () => {
  return (
    <div className="w-full h-11 bg-white pl-8 pr-4 pt-1 border-t-2 text-base font-semibold border-[#F6F6F6] absolute bottom-0">
      {data.map((val: TitleRowDataItem) => (
        <button
          key={val.name}
          onClick={val.onClick}
          className={`px-4 py-1 text-[#757575] ${val.name === "All Orders" && "text-[#3E5741] bg-[#E8F0E9] border-t-2 border-[#3E5741]"}`}
        >
          {val.name}
        </button>
      ))}
    </div>
  );
};

export default TitleRow;
