// import React, { useState } from "react";
// import axios from "axios";

// <<<<<<< HEAD
// export default function PDFUpload() {
//   const BASE = process.env.REACT_APP_API_URL;
//   const uploadUrl = `${BASE}/upload-pdf/`;

//   const [files, setFiles] = useState([]);
//   const [message, setMessage] = useState("");
//   const [clicked, setClicked] = useState(false);

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setClicked(true);

//     if (files.length === 0) {
//       setMessage("Please select at least one PDF file.");
//       setClicked(false);
// =======
// export default function AutoPDFUpload() {
//   const BASE = process.env.REACT_APP_API_URL;
//   const autoUploadUrl = `${BASE}/auto-upload-pdf/`;

//   const [url, setUrl] = useState("");
//   const [exchange, setExchange] = useState("");
//   const [ticker, setTicker] = useState("");

//   const [loading, setLoading] = useState(false);
//   const [message, setMessage] = useState("");
//   const [results, setResults] = useState([]);

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setLoading(true);
//     setMessage("");
//     setResults([]);

//     if (!url || !exchange || !ticker) {
//       setMessage("❌ All fields are required.");
//       setLoading(false);
// >>>>>>> daf31ccc2e08a1bdd2abec797841bbca063a4bd3
//       return;
//     }

//     const formData = new FormData();
// <<<<<<< HEAD
//     files.forEach((file) => formData.append("pdf", file)); // MULTIPLE FILES ✔
// =======
//     formData.append("url", url);
//     formData.append("exchange", exchange);
//     formData.append("ticker", ticker);
// >>>>>>> daf31ccc2e08a1bdd2abec797841bbca063a4bd3

//     try {
//       const response = await axios.post(autoUploadUrl, formData, {
//         headers: {
//           "Content-Type": "multipart/form-data",
//         },
//         timeout: 120000, // ⏱ 2 min (PDF uploads)
//       });

// <<<<<<< HEAD
//       setMessage("Upload completed successfully!");
//       console.log("Server Response:", response.data);
//     } catch (error) {
//       console.error("Upload error:", error);
//       setMessage("Upload failed.");
//     } finally {
//       setTimeout(() => setClicked(false), 1000);
// =======
//       setMessage("✅ Auto PDF upload completed.");
//       setResults(response.data.results || []);
//     } catch (error) {
//       console.error("Auto upload error:", error);

//       // 🔥 SHOW REAL BACKEND ERROR
//       const backendMessage =
//         error.response?.data?.error ||
//         error.response?.data?.message ||
//         "Server error occurred.";

//       setMessage(`❌ Auto upload failed: ${backendMessage}`);

//       // 🔥 SHOW PARTIAL RESULTS IF ANY
//       if (error.response?.data?.results) {
//         setResults(error.response.data.results);
//       }
//     } finally {
//       setLoading(false);
// >>>>>>> daf31ccc2e08a1bdd2abec797841bbca063a4bd3
//     }
//   };

//   return (
// <<<<<<< HEAD
//     <div style={{ padding: "20px" }}>
//       <h2>Upload Multiple PDFs</h2>

//       <form onSubmit={handleSubmit}>
//         <input
//           type="file"
//           accept="application/pdf"
//           multiple            // 👈 ALLOWS MULTIPLE PDFs ✔
//           onChange={(e) => setFiles([...e.target.files])}
//           required
//         />
//         <br /><br />

//         {/* Show selected file names */}
//         {files.length > 0 && (
//           <div style={{ marginBottom: "10px" }}>
//             <strong>Selected Files:</strong>
//             <ul>
//               {files.map((f, i) => (
//                 <li key={i}>{f.name}</li>
//               ))}
//             </ul>
//           </div>
//         )}

//         <button
//           type="submit"
//           style={{
//             padding: "10px 20px",
//             border: "none",
//             cursor: "pointer",
//             color: "white",
//             backgroundColor: clicked ? "#0a7cff" : "#007bff", 
//             transition: "0.3s",
// =======
//     <div style={{ padding: "20px", maxWidth: "650px" }}>
//       <h2>Auto Upload PDF Reports</h2>

//       <form onSubmit={handleSubmit}>
//         <input
//           type="text"
//           placeholder="Reports Page URL"
//           value={url}
//           onChange={(e) => setUrl(e.target.value)}
//           style={{ width: "100%", padding: "8px", marginBottom: "10px" }}
//         />

//         <input
//           type="text"
//           placeholder="Exchange (e.g. ASX)"
//           value={exchange}
//           onChange={(e) => setExchange(e.target.value)}
//           style={{ width: "100%", padding: "8px", marginBottom: "10px" }}
//         />

//         <input
//           type="text"
//           placeholder="Ticker (e.g. AEI)"
//           value={ticker}
//           onChange={(e) => setTicker(e.target.value)}
//           style={{ width: "100%", padding: "8px", marginBottom: "10px" }}
//         />

//         <button
//           type="submit"
//           disabled={loading}
//           style={{
//             padding: "10px 20px",
//             border: "none",
//             cursor: loading ? "not-allowed" : "pointer",
//             color: "white",
//             backgroundColor: loading ? "#999" : "#007bff",
// >>>>>>> daf31ccc2e08a1bdd2abec797841bbca063a4bd3
//             borderRadius: "5px",
//             fontSize: "16px",
//           }}
//         >
// <<<<<<< HEAD
//           {clicked ? "Uploading..." : "Upload All"}
// =======
//           {loading ? "Processing PDFs..." : "Auto Upload"}
// >>>>>>> daf31ccc2e08a1bdd2abec797841bbca063a4bd3
//         </button>
//       </form>

//       {message && (
//         <p style={{ marginTop: "12px", fontWeight: "bold" }}>{message}</p>
//       )}

//       {results.length > 0 && (
//         <div style={{ marginTop: "20px" }}>
//           <h3>Upload Summary</h3>
//           <ul style={{ paddingLeft: "20px" }}>
//             {results.map((res, index) => (
//               <li
//                 key={index}
//                 style={{
//                   marginBottom: "8px",
//                   color: res.status === "success" ? "green" : "red",
//                   fontWeight: "bold",
//                 }}
//               >
//                 {res.year || res.pdf} — {res.status.toUpperCase()}
//                 {res.status === "error" && res.reason && (
//                   <div style={{ fontWeight: "normal", fontSize: "14px" }}>
//                     Reason: {res.reason}
//                   </div>
//                 )}
//                 {res.status === "success" && res.pdf_url && (
//                   <div style={{ fontWeight: "normal", fontSize: "14px" }}>
//                     <a
//                       href={res.pdf_url}
//                       target="_blank"
//                       rel="noopener noreferrer"
//                     >
//                       View PDF
//                     </a>
//                   </div>
//                 )}
//               </li>
//             ))}
//           </ul>
//         </div>
//       )}
//     </div>
//   );
// }
