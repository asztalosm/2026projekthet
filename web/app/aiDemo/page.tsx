'use client'

export default function GamePage() {
  return (
    <div style={{ margin: 0, padding: 0, overflow: "hidden" }}>
      <iframe
        src="/slingshot/index.html"
        style={{
          width: "100vw",
          height: "100vh",
          border: "none",
        }}
      />
    </div>
  );
}