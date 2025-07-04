import {
  useReactTable,
  getCoreRowModel,
  flexRender,
} from "@tanstack/react-table";
import { columns } from "../columns/TableColumns";
import { getHeaderClass } from "../utils/getHeaderClass";
import type { Data } from "../types";

type Props = {
  data: Data[];
};

const DataTable = ({ data }: Props) => {
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <div className="overflow-auto bg-white">
      <table className="min-w-full text-xs">
        <thead className="bg-gray-50">
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <th
                  key={header.id}
                  colSpan={header.colSpan}
                  className={`px-2 border-1 text-left font-semibold ${getHeaderClass(
                    header.column.columnDef.header
                  )}`}
                >
                  <div className="flex items-center justify-between gap-2">
                    <div className="flex items-center gap-2">
                      {header.column.columnDef.header ===
                      "Q3 Financial Overview" ? (
                        <>
                          <div className="flex gap-1 font-normal rounded p-1 bg-[#EEEEEE]">
                            <img
                              src="icons/Link.svg"
                              alt="Link icon"
                              className="w-4 h-4"
                            />
                            {!header.isPlaceholder &&
                              flexRender(
                                header.column.columnDef.header,
                                header.getContext()
                              )}
                          </div>
                          <img
                            src="/icons/Arrow Sync.svg"
                            alt="Sync Icon"
                            className="w-4 h-4"
                          />
                        </>
                      ) : (
                        <>
                          {header.column.columnDef.meta?.showIcon && (
                            <img
                              src={`/icons/${header.column.id}.svg`}
                              alt={`${header.column.id} icon`}
                              className="w-4 h-4"
                            />
                          )}
                          {!header.isPlaceholder &&
                            flexRender(
                              header.column.columnDef.header,
                              header.getContext()
                            )}
                          {header.column.columnDef.meta?.showMore && (
                            <img
                              src="/icons/More.svg"
                              alt="More icon"
                              className="w-4 h-4"
                            />
                          )}
                        </>
                      )}
                    </div>
                    {header.column.columnDef.meta?.showArrow && (
                      <img
                        src="/icons/Chevron.svg"
                        alt="Chevron icon"
                        className="w-4 h-4 rotate-90"
                      />
                    )}
                  </div>
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody>
          {table.getRowModel().rows.map((row) => (
            <tr
              key={row.id}
              className="bg-white border border-gray-200 hover:bg-gray-50"
            >
              {row.getVisibleCells().map((cell) => (
                <td
                  key={cell.id}
                  className={`px-4 py-2 whitespace-nowrap border border-gray-100 ${
                    (cell.column.columnDef.header === "Status" ||
                      cell.column.columnDef.header === "Priority") &&
                    "text-center"
                  } ${
                    (cell.column.columnDef.header === "Submitted" ||
                      cell.column.columnDef.header === "Due Date") &&
                    "text-right"
                  }`}
                >
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DataTable;
