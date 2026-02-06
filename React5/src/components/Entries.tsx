import React, { useState } from "react";
import categories from "../data/categories";
import { Entry } from "./types.js";

interface Props {
  entriesData: Entry[];
  onEntryChange: (entries: Entry[]) => void;
}

const Entries = ({ entriesData, onEntryChange }: Props) => {
  const [newEntry, setNewEntry] = useState<Entry>({
    amount: "",
    category: "none",
    description: "",
  });

  const handleAdd = () => {
    onEntryChange([...entriesData, newEntry]);
    // reset newEntry after applying
    setNewEntry({ amount: "", category: "none", description: "" });
  };

  const handleDelete = (idx: number) => {
    const isConfirmed = window.confirm(
      "Are you sure you want to delete this entry?"
    );
    if (isConfirmed) {
      const filteredEntries = entriesData.filter((entry, i) => i !== idx);
      onEntryChange(filteredEntries);
    }
  };

  return (
    <div>
      <h2>Enter you expense</h2>

      <table className="table table-bordered" style={{ tableLayout: "fixed" }}>
        <thead>
          <tr>
            <td>#</td>
            <td>Amount</td>
            <td>Category</td>
            <td>Description</td>
            <td>Actions</td>
          </tr>
        </thead>
        <tbody>
          {entriesData.map((entry, idx) => (
            <tr key={idx}>
              <td>{idx + 1}</td>
              <td>{entry.amount}</td>
              <td>{entry.category}</td>
              <td>{entry.description}</td>
              <td>
                <div
                  onClick={() => {
                    handleDelete(idx);
                  }}
                  className="btn btn-danger"
                >
                  Delete
                </div>
              </td>
            </tr>
          ))}

          <tr>
            <td>{entriesData.length + 1}</td>
            <td>
              <input
                className="form-control"
                value={newEntry.amount}
                placeholder="Amount"
                onChange={(e) => {
                  setNewEntry({ ...newEntry, amount: e.target.value });
                }}
                type="number"
              />
            </td>
            <td>
              <select
                className="form-control"
                value={newEntry.category}
                onChange={(e) => {
                  setNewEntry({ ...newEntry, category: e.target.value });
                }}
              >
                <option value="none">Choose...</option>
                {categories.map((category) => (
                  <option key={category.id} value={category.name}>
                    {category.name}
                  </option>
                ))}
              </select>
            </td>
            <td>
              <input
                onChange={(e) => {
                  setNewEntry({ ...newEntry, description: e.target.value });
                }}
                className="form-control"
                placeholder="Descritpion"
                value={newEntry.description}
                type="text"
              />
            </td>
            <td>
              <button
                disabled={
                  !newEntry.amount ||
                  !newEntry.category ||
                  !newEntry.description
                }
                onClick={handleAdd}
                className="btn btn-success"
              >
                Add
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Entries;
