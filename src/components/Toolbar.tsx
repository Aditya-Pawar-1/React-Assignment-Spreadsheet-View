import toolbarData from "../data/toolbarData.ts";
import toolbarActionData from "../data/toolbarActionData.ts";

type ToolbarItem = {
  icon: string;
  name: string;
};

const Toolbar = () => {
  return (
    <div className="text-base font-normal leading-tight px-2 py-1.5 flex items-center justify-between">
      <div className="flex items-center gap-2 text-[#121212]">
        <div className="flex items-center gap-1 p-2">
          <p>ToolBar</p>
          <img src="/icons/Chevron Double.svg" alt="Tool Bar icon" />
        </div>

        <div className="w-[1px] h-6 bg-red-500" />

        <div className="flex gap-1">
          {toolbarData.map((item: ToolbarItem) => (
            <div
              key={item.name}
              className="flex items-center gap-1 p-2 pr-3 cursor-pointer"
            >
              <img src={item.icon} alt={item.name} className="w-5 h-5" />
              <p>{item.name}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="flex gap-2">
        {toolbarActionData.map((item: ToolbarItem) => (
          <div
            key={item.name}
            className={`text-sm flex items-center rounded-md border border-[#EEEEEE] gap-1 p-2 pr-3 cursor-pointer ${item.name === "New Action" ? "bg-[#4B6A4F] text-white pl-6 pr-6 font-medium" : "text-[#545454]"}`}
          >
            <img src={item.icon} alt={item.name} className="w-5 h-5" />
            <p>{item.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Toolbar;
