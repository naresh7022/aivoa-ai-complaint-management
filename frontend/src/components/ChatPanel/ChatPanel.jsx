export default function ChatPanel() {
  return (
    <div>
      <h2>AI Copilot</h2>

      <div
        style={{
          height: "350px",
          border: "1px solid #ddd",
          marginTop: "20px",
          borderRadius: "10px",
          padding: "10px",
        }}
      >
        AI conversation will appear here...
      </div>

      <input
        type="text"
        placeholder="Ask AI..."
        style={{
          width: "100%",
          marginTop: "20px",
          padding: "10px",
        }}
      />
    </div>
  );
}