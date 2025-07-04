import Topbar from "../components/Topbar";
import Toolbar from "../components/Toolbar";
import DataTable from "../components/DataTable";
import dataJSON from "../data/Tabledata.json";
import type { Data } from "../types";

const Spreadsheet = () => {
  const typedData: Data[] = dataJSON.map((item) => ({
    ...item,
    status: item.status as Data["status"],
    priority: item.priority as Data["priority"],
    estimatedValue: Number(item.estimatedValue),
  }));

  return (
    <div className="h-full w-full flex flex-col">
      <Topbar />
      <Toolbar />
      <div className="flex-1 overflow-auto">
        <DataTable data={typedData} />
      </div>
    </div>
  );
};

export default Spreadsheet;
