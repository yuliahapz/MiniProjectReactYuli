import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import "./UserDetail.css";

const UserDetails = () => {
    const [user, setUser] = useState({});
    const [reviews, setReviews] = useState([]);
    const { id } = useParams();
    const [loading, setLoading] = useState(true);

    const getUser = () => {
        setLoading(true);
        axios.get(`https://reqres.in/api/users/${id}`)
            .then((res) => {
                setUser(res.data.data);
            })
            .catch((err) => {
                console.error("Error fetching user details:", err);
            })
            .finally(() => {
                setLoading(false);
            });
    }

    const getReviews = () => {
        // Replace this with an actual API call to get reviews for the Kasir Bersih product/website
        setReviews([
            { author: "John Doe", text: "Great app! Very useful for my laundry business." },
            { author: "Jane Smith", text: "User-friendly interface and excellent features!" },
        ]);
    }

    useEffect(() => {
        getUser();
        getReviews();
    }, [id]);

    if (loading) {
        return <h2>Loading...</h2>;
    }

    if (!user.id) {
        return <h2>No user found</h2>;
    }

    return (
        <div className="user-details">
            <h1>User Details</h1>
            <div className="user-card">
                <img src={user.avatar} alt={user.first_name} className="user-avatar" />
                <h2>{user.first_name} {user.last_name}</h2>
                <p>Email: {user.email}</p>
                <Link to="/home" className="back-link">Back to Home</Link>
            </div>

            <div className="user-reviews">
                <h3>Reviews for Kasir Bersih</h3>
                <div className="review-grid">
                    {reviews.map((review, index) => (
                        <div key={index} className="review-card">
                            <div className="review-author">{review.author}</div>
                            <div className="review-text">{review.text}</div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default UserDetails;
