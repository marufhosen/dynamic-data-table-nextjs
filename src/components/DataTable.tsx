"use client";

import React, { useState, useMemo } from "react";
import Pagination from "./Pagination";

interface Column {
  field: string;
  headerName: string;
  width?: number;
  sortable?: boolean;
}

interface Row {
  id: number | string;
  [key: string]: any;
}

interface DynamicTableProps {
  columns: Column[];
  rows: Row[];
  pageSize?: number;
  pagination?: boolean;
}

const DynamicTable: React.FC<DynamicTableProps> = ({
  columns,
  rows: initialRows,
  pageSize = 5,
  pagination,
}) => {
  // SELECTED DATA
  const [selectedRows, setSelectedRows] = useState<{ [key: string]: boolean }>(
    {}
  );

  const [sortConfig, setSortConfig] = useState<{
    key: string | null;
    direction: "ascending" | "descending";
  }>({ key: null, direction: "ascending" });

  // PAGUNATION ------------> CURRENT PAGE
  const [currentPage, setCurrentPage] = useState<number>(1);

  // SORTED DATA
  const sortedRows = useMemo(() => {
    let sortableRows = [...initialRows];
    if (sortConfig.key !== null) {
      sortableRows.sort((a, b) => {
        if (a[sortConfig.key!] < b[sortConfig.key!]) {
          return sortConfig.direction === "ascending" ? -1 : 1;
        }
        if (a[sortConfig.key!] > b[sortConfig.key!]) {
          return sortConfig.direction === "ascending" ? 1 : -1;
        }
        return 0;
      });
    }
    return sortableRows;
  }, [initialRows, sortConfig]);

  // PAGINATED DATA
  const paginatedRows = useMemo(() => {
    const startIndex = (currentPage - 1) * pageSize;
    return sortedRows.slice(startIndex, startIndex + pageSize);
  }, [sortedRows, currentPage, pageSize]);

  const totalPages = Math.ceil(sortedRows.length / pageSize);

  // ACCENDIGNG & DECCENDING SORT
  const requestSort = (key: string) => {
    let direction: "ascending" | "descending" = "ascending";
    if (sortConfig.key === key && sortConfig.direction === "ascending") {
      direction = "descending";
    }
    setSortConfig({ key, direction });
  };

  // SELECTED CELL DATA
  const handleSelectAll = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newSelectedRows: { [key: string]: boolean } = {};
    if (event.target.checked) {
      paginatedRows.forEach((row) => {
        newSelectedRows[row.id] = true;
      });
    }
    setSelectedRows(newSelectedRows);
  };

  const handleSelectRow = (id: number | string) => {
    setSelectedRows((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const handlePageChange = (newPage: number) => {
    setCurrentPage(newPage);
  };

  return (
    <div className="overflow-x-auto bg-white shadow-md rounded-lg">
      <table className="min-w-full table-auto">
        <thead>
          <tr className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
            <th className="py-3 px-6 text-left">
              <input
                type="checkbox"
                className="form-checkbox h-5 w-5 text-blue-600"
                onChange={handleSelectAll}
                checked={paginatedRows.every((row) => selectedRows[row.id])}
              />
            </th>
            {columns.map((column) => (
              <th
                key={column.field}
                className="py-3 px-6 text-left cursor-pointer"
                onClick={() => column.sortable && requestSort(column.field)}
              >
                {column.headerName}
                {column.sortable && (
                  <span className="ml-1">
                    {sortConfig.key === column.field
                      ? sortConfig.direction === "ascending"
                        ? "▲"
                        : "▼"
                      : ""}
                  </span>
                )}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="text-gray-600 text-sm font-light">
          {paginatedRows.map((row, index) => (
            <tr
              key={row.id}
              className={index % 2 === 0 ? "bg-white" : "bg-gray-50"}
            >
              <td className="py-3 px-6 text-left whitespace-nowrap">
                <input
                  type="checkbox"
                  className="form-checkbox h-5 w-5 text-blue-600"
                  checked={!!selectedRows[row.id]}
                  onChange={() => handleSelectRow(row.id)}
                />
              </td>
              {columns.map((column) => (
                <td
                  key={`${row.id}-${column.field}`}
                  className="py-3 px-6 text-left whitespace-nowrap"
                >
                  {row[column.field]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>

      {/* INCLUDE PAGINATION */}
      {pagination && (
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
          totalCount={sortedRows.length}
          pageSize={pageSize}
        />
      )}
    </div>
  );
};
export default DynamicTable;
