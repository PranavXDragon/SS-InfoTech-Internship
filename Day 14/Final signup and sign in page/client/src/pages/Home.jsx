import { useState } from "react";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

function Home() {
  const navigate = useNavigate();
  const [user] = useState(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/");
      return null;
    }
    const stored = localStorage.getItem("user");
    return stored ? JSON.parse(stored) : null;
  });

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    toast.success("Logged out successfully");
    navigate("/");
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <div style={styles.header}>
          <h1 style={styles.title}>Dashboard</h1>
          <button onClick={handleLogout} style={styles.logoutBtn}>
            Logout
          </button>
        </div>

        <div style={styles.divider} />

        <div style={styles.welcome}>
          <div style={styles.avatar}>
            {user?.name?.charAt(0).toUpperCase() || "U"}
          </div>
          <div>
            <h2 style={styles.greeting}>Welcome, {user?.name || "User"}!</h2>
            <p style={styles.subtext}>{user?.email || ""}</p>
          </div>
        </div>

        <div style={styles.infoGrid}>
          <div style={styles.infoCard}>
            <span style={styles.infoLabel}>Name</span>
            <span style={styles.infoValue}>{user?.name || "—"}</span>
          </div>
          <div style={styles.infoCard}>
            <span style={styles.infoLabel}>Email</span>
            <span style={styles.infoValue}>{user?.email || "—"}</span>
          </div>
          <div style={styles.infoCard}>
            <span style={styles.infoLabel}>User ID</span>
            <span style={styles.infoValue}>{user?.id || "—"}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

const styles = {
  container: {
    minHeight: "100vh",
    background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "20px",
  },
  card: {
    background: "#fff",
    borderRadius: "16px",
    boxShadow: "0 8px 32px rgba(0,0,0,0.1)",
    width: "100%",
    maxWidth: "520px",
    padding: "36px",
  },
  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  title: {
    margin: 0,
    fontSize: "26px",
    color: "#333",
  },
  logoutBtn: {
    padding: "8px 20px",
    background: "transparent",
    color: "#e74c3c",
    border: "2px solid #e74c3c",
    borderRadius: "8px",
    fontSize: "14px",
    fontWeight: "600",
    cursor: "pointer",
    transition: "all 0.2s",
  },
  divider: {
    height: "1px",
    background: "#eee",
    margin: "24px 0",
  },
  welcome: {
    display: "flex",
    alignItems: "center",
    gap: "16px",
    marginBottom: "24px",
  },
  avatar: {
    width: "56px",
    height: "56px",
    borderRadius: "50%",
    background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
    color: "#fff",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "20px",
    fontWeight: "700",
  },
  greeting: {
    margin: 0,
    fontSize: "20px",
    color: "#333",
  },
  subtext: {
    margin: "4px 0 0",
    color: "#888",
    fontSize: "14px",
  },
  infoGrid: {
    display: "flex",
    flexDirection: "column",
    gap: "12px",
  },
  infoCard: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "14px 18px",
    background: "#f8f9fa",
    borderRadius: "10px",
  },
  infoLabel: {
    fontSize: "14px",
    color: "#888",
    fontWeight: "500",
  },
  infoValue: {
    fontSize: "14px",
    color: "#333",
    fontWeight: "600",
    fontFamily: "monospace",
    wordBreak: "break-all",
  },
  badge: {
    padding: "4px 12px",
    background: "#d4edda",
    color: "#155724",
    borderRadius: "20px",
    fontSize: "13px",
    fontWeight: "600",
  },
};

export default Home;
