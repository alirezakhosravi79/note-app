import { useState } from "react";

function NoteForm({notes, setNotes}) {

  const [formData, setFormDta] = useState({
    title: "",
    category: "Work",
    priority: "Meduim",
    description: "",
  }); 

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
    const newNote = {id: Date.now(), ...formData};

    //add notes
    setNotes([newNote, ...notes])

    //reset form data
    setFormDta({
      title: '',
      category: 'Work',
      priority: 'Meduim',
      description:'',
    })

  }
  return (
    <form onSubmit={handleSubmit} className="mb-6">
      <div className="mb-4">
        <label htmlFor="title" className="block font-semibold">
          Title
        </label>
        <input
          name="title"
          type="text"
          className="w-full p-2 border rounded-lg"
          value={formData.title}
          onChange={handleChange}
        />
      </div>
      <div className="mb-4">
        <label htmlFor="priority" className="block font-semibold">
          Priority:
        </label>
        <select
          name="priority"
          value={formData.priority}
          onChange={handleChange}
          className="w-full p-2 border rounded-lg"
        >
          <option value="High">🔴 High</option>
          <option value="Medium">🟠 Medium</option>
          <option value="Low">🟢 Low</option>
        </select>
      </div>
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
      <div className="mb-4">
        <label htmlFor="description" className="block font-semibold">
          Description:
        </label>
        <textarea
          name="description"
          value={formData.description}
          onChange={handleChange}
          className="w-full p-2 border rounded-lg"
          required
        ></textarea>
      </div>
      <button
        className="w-full bg-purple-500 text-white py-2 rounded-lg cursor-pointer
      hover:bg-purple-600"
      >
        Add Note
      </button>
    </form>
  );
}

export default NoteForm;
