import { useState } from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import "./index.css";

const initialColumns = [
  { id: "item-1", content: "Review Title" },
  { id: "item-2", content: "Review Type" },
  { id: "item-3", content: "Review Number" },
  { id: "item-4", content: "Column 1" },
  { id: "item-5", content: "Column 2" },
  { id: "item-6", content: "Column 3" },
];

const generateInitialRows = numRows => {
  const rows = [];
  for (let i = 0; i < numRows; i++) {
    rows.push({ id: `row-${i + 1}`, cells: [] });
  }
  return rows;
};

const DraggableTable = () => {
  const [columns, setColumns] = useState(initialColumns);
  const [tableColumns, setTableColumns] = useState([]);
  const [rows, setRows] = useState(generateInitialRows(10));

  const onDragEnd = result => {
    const { source, destination } = result;

    if (!destination) {
      return;
    }

    if (
      source.droppableId === "sidebar" &&
      destination.droppableId === "table"
    ) {
      const sourceClone = Array.from(columns);
      const destClone = Array.from(tableColumns);

      const [moved] = sourceClone.splice(source.index, 1);
      destClone.splice(destination.index, 0, moved);

      const newRows = rows.map(row => ({
        ...row,
        cells: [
          ...row.cells.slice(0, destination.index),
          "",
          ...row.cells.slice(destination.index),
        ],
      }));

      setColumns(sourceClone);
      setTableColumns(destClone);
      setRows(newRows);
    } else if (
      source.droppableId === "table" &&
      destination.droppableId === "sidebar"
    ) {
      const sourceClone = Array.from(tableColumns);
      const destClone = Array.from(columns);

      const [moved] = sourceClone.splice(source.index, 1);
      destClone.splice(destination.index, 0, moved);

      const newRows = rows.map(row => ({
        ...row,
        cells: [
          ...row.cells.slice(0, source.index),
          ...row.cells.slice(source.index + 1),
        ],
      }));

      setTableColumns(sourceClone);
      setColumns(destClone);
      setRows(newRows);
    } else if (
      source.droppableId === "table" &&
      destination.droppableId === "table"
    ) {
      const items = Array.from(tableColumns);
      const [reorderedItem] = items.splice(source.index, 1);
      items.splice(destination.index, 0, reorderedItem);

      const newRows = rows.map(row => {
        const newCells = Array.from(row.cells);
        const [reorderedCell] = newCells.splice(source.index, 1);
        newCells.splice(destination.index, 0, reorderedCell);
        return { ...row, cells: newCells };
      });

      setTableColumns(items);
      setRows(newRows);
    }
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <div className="container">
        <div className="sidebar">
          <h3>REPORT COLUMNS</h3>
          <Droppable droppableId="sidebar">
            {provided => (
              <div
                ref={provided.innerRef}
                {...provided.droppableProps}
                className="column-list"
              >
                {columns.map((column, index) => (
                  <Draggable
                    key={column.id}
                    draggableId={column.id}
                    index={index}
                  >
                    {provided => (
                      <div
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        className="draggable-item"
                      >
                        {column.content}
                      </div>
                    )}
                  </Draggable>
                ))}
                {provided.placeholder}
              </div>
            )}
          </Droppable>
        </div>
        <div className="main">
          <h3>REPORT TABLE</h3>
          <Droppable droppableId="table" direction="horizontal">
            {provided => (
              <table
                ref={provided.innerRef}
                {...provided.droppableProps}
                className="table-list"
                border="1"
              >
                <tr className="table-row">
                  {tableColumns.map((column, index) => (
                    <Draggable
                      key={column.id}
                      draggableId={column.id}
                      index={index}
                    >
                      {provided => (
                        <th
                          ref={provided.innerRef}
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                          className="table-cell"
                        >
                          {column.content}
                        </th>
                      )}
                    </Draggable>
                  ))}
                  {provided.placeholder}
                </tr>
                {rows.map((row, rowIndex) => (
                  <tr key={row.id} className="table-row">
                    {tableColumns.map((_, cellIndex) => (
                      <td key={cellIndex} className="table-cell">
                        {row.cells[cellIndex]}
                        <input type="text" />
                      </td>
                    ))}
                  </tr>
                ))}
              </table>
            )}
          </Droppable>
        </div>
      </div>
    </DragDropContext>
  );
};

export default DraggableTable;
