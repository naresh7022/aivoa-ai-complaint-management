import { useState } from "react";

export default function ComplaintForm() {
  const [category, setCategory] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = async (e) => {
  if (e) e.preventDefault();

  try {
    const response = await fetch("http://127.0.0.1:8000/api/complaints", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        category,
        title,
        description,
      }),
    });

    const data = await response.json();
    console.log("Status:", response.status);
    console.log("Data:", data);
    console.log("Analysis:", data.analysis);

    alert(data.analysis);

    // 👇 Ye dono lines yahan add karo
    console.log("Full Response:", data);
    alert(JSON.stringify(data, null, 2));

  } catch (error) {
    console.error(error);
    alert("Backend connection failed!");
  }
};

  return (
    <div>
      <h2>Customer Complaint</h2>

      <div style={{ marginTop: "20px" }}>
        <label>Complaint Category</label>
        <br />
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          style={{ width: "100%", padding: "10px", marginTop: "5px" }}
        >
          <option value="">Select Category</option>
          <option value="Quality Issue">Quality Issue</option>
          <option value="Packaging Issue">Packaging Issue</option>
          <option value="Label Issue">Label Issue</option>
          <option value="Transport Damage">Transport Damage</option>
        </select>
      </div>

      <div style={{ marginTop: "20px" }}>
        <label>Complaint Title</label>
        <br />
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Enter complaint title"
          style={{ width: "100%", padding: "10px", marginTop: "5px" }}
        />
      </div>

      <div style={{ marginTop: "20px" }}>
        <label>Description</label>
        <br />
        <textarea
          rows="6"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Describe complaint..."
          style={{ width: "100%", padding: "10px", marginTop: "5px" }}
        />
      </div>

      <button
        onClick={handleSubmit}
        style={{
          marginTop: "20px",
          width: "100%",
          padding: "12px",
          background: "#5B3DF5",
          color: "white",
          border: "none",
          borderRadius: "8px",
          cursor: "pointer",
        }}
      >
        Submit Complaint
      </button>
    </div>
  );
}