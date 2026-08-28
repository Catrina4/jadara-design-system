import type {
  ReactNode,
} from "react";


import { Card } from "../../components/Card/Card";

import "./DataTable.css";

export interface DataTableColumn<T> {
  key: string;
  header: string;
  render: (item: T) => ReactNode;
}

export interface DataTableProps<T> {
  columns: DataTableColumn<T>[];
  data: T[];
  getRowKey: (item: T) => string;
  emptyMessage?: string;
  onRowClick?: (item: T) => void;
}

export function DataTable<T>({
  columns,
  data,
  getRowKey,
  emptyMessage = "No data available.",
  onRowClick,
}: DataTableProps<T>) {
  const gridStyle = {
    "--jadara-table-columns": columns.length,
  } as React.CSSProperties;

  return (
    <Card
      className="jadara-data-table"
      padding="sm"
    >
      <div
        className="jadara-data-table__header"
        style={gridStyle}
      >
        {columns.map((column) => (
          <div
            key={column.key}
            className="jadara-data-table__heading"
          >
            {column.header}
          </div>
        ))}
      </div>

      <div className="jadara-data-table__body">
        {data.length === 0 ? (
          <div className="jadara-data-table__empty">
            {emptyMessage}
          </div>
        ) : (
          data.map((item) => (
            <div
              key={getRowKey(item)}
              className={[
                "jadara-data-table__row",
                onRowClick
                  ? "jadara-data-table__row--clickable"
                  : "",
              ]
                .filter(Boolean)
                .join(" ")}
              style={gridStyle}
              onClick={() =>
                onRowClick?.(item)
              }
            >
              {columns.map((column) => (
                <div
                  key={column.key}
                  className="jadara-data-table__cell"
                >
                  {column.render(item)}
                </div>
              ))}
            </div>
          ))
        )}
      </div>
    </Card>
  );
}