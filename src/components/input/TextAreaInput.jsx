function TextAreaInput({ label, name, value, onChange, required = false }) {
  return (
    <div>
      <div className="mb-4">
        <label htmlFor={name} className="block font-semibold">
          {label}
        </label>
        <textarea
          name={name}
          value={value}
          onChange={onChange}
          className="w-full p-2 border rounded-lg"
          required
        ></textarea>
      </div>
    </div>
  );
}

export default TextAreaInput;
