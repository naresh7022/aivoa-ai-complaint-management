import Header from "../components/Header/Header";
import ComplaintForm from "../components/ComplaintForm/ComplaintForm";
import ChatPanel from "../components/ChatPanel/ChatPanel";

export default function Dashboard() {
  return (
    <>
      <Header />

      <div
        style={{
          display: "flex",
          gap: "20px",
          padding: "20px",
        }}
      >
        <div
          style={{
            flex: 1,
            border: "1px solid #ddd",
            borderRadius: "10px",
            padding: "20px",
          }}
        >
          <ComplaintForm />
        </div>

        <div
          style={{
            width: "420px",
            border: "1px solid #ddd",
            borderRadius: "10px",
            padding: "20px",
          }}
        >
          <ChatPanel />
        </div>
      </div>
    </>
  );
}