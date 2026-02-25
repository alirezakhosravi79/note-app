import { useState } from "react";
import InputText from "./input/InputText";
import SelectInput from "./input/SelectInput";
import TextAreaInput from "./input/TextAreaInput";

function NoteForm({ notes, setNotes }) {
  const [formData, setFormDta] = useState({
    title: "",
    category: "Work",
    priority: "Medium",
    description: "",
  });

  const [isFormVisible, setIsFormVisible] = useState(false);

  const handleChange = (e) => {
    setFormDta({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    //validation
    if (!formData.title || !formData.description) return;

    //create note object
    const newNote = { id: Date.now(), ...formData };

    //add notes
    setNotes([newNote, ...notes]);

    //reset form data
    setFormDta({
      title: "",
      category: "Work",
      priority: "Medium",
      description: "",
    });
  };
  return (
    <>
      {/* Toggle Button */}
      <button
        onClick={() => setIsFormVisible(!isFormVisible)}
        className="w-full bg-gray-100 border border-gray-300 text-purple-800 py-2
         rounded-lg cursor-pointer hover:bg-purple-200 hover:border-purple-300
          transition mb-4"
      >
        {isFormVisible ? "Hide Form ✖️" : "Add New Note ➕"}
      </button>
      {/* Form */}
      {isFormVisible && (
        <form onSubmit={handleSubmit} className="mb-6">
          <InputText
            label="Title"
            name="title"
            value={formData.title}
            onChange={handleChange}
            required
          />

          <SelectInput
            label="Priority"
            name="priority"
            value={formData.priority}
            onChange={handleChange}
            options={[
              { value: "High", label: "🔴 High" },
              { value: "Medium", label: "🟠 Medium" },
              { value: "Low", label: "🟢 Low" },
            ]}
          />
          <div className="mb-4">
            <label htmlFor="category" className="block font-semibold">
              Category:
            </label>
            <select
              name="category"
              value={formData.category}
              onChange={handleChange}
              className="w-full p-2 border rounded-lg"
            >
              <option value="Work">📂 Work</option>
              <option value="Personal">🏠 Personal</option>
              <option value="Ideas">💡 Ideas</option>
            </select>
          </div>
          <TextAreaInput
            label="Description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            required
          />
          <button
            className="w-full bg-purple-500 text-white py-2 rounded-lg cursor-pointer
      hover:bg-purple-600"
          >
            Add Note
          </button>
        </form>
      )}
    </>
  );
}

export default NoteForm;
