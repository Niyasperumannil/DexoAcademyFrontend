import { useEffect, useState } from "react";
import axios from "axios";
import "./detailsShow.css";

const DetailsShow = () => {
  const [details, setDetails] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("https://dexoacademybackend.onrender.com/api/details")
      .then((res) => {
        setDetails(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching details:", err);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div className="loading">Loading details...</div>;
  }

  return (
    <div className="details-show-container">
      <h2 className="title">📋 Submitted Details</h2>
      <div className="details-grid">
        {details.length > 0 ? (
          details.map((item) => (
            <div key={item._id} className="detail-card">
              <div className="detail-header">
                <h3>{item.firstname} {item.lastname}</h3>
                <span className="detail-date">
                  {new Date(item.createdAt).toLocaleDateString()}
                </span>
              </div>
              <p><strong>Email:</strong> {item.email}</p>
              <p><strong>Phone:</strong> {item.phonenumber}</p>
              {item.message && (
                <p className="detail-message">"{item.message}"</p>
              )}
            </div>
          ))
        ) : (
          <p className="no-data">No details found.</p>
        )}
      </div>
    </div>
  );
};

export default DetailsShow;
