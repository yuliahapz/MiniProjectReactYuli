import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import "./UserDetail.css";

const UserDetails = () => {
    const [user, setUser] = useState({});
    const { id } = useParams();
    const [loading, setLoading] = useState(true);

    const getUser = () => {
        setLoading(true);
        axios.get(`https://reqres.in/api/users/${id}`)  // Corrected URL to include the id from useParams
            .then((res) => {
                console.log("User details fetched:", res.data.data);
                setUser(res.data.data);
            })
            .catch((err) => {
                console.error("Error fetching user details:", err);
            })
            .finally(() => {
                setLoading(false);
            });
    }

    useEffect(() => {
        getUser();
    }, [id]);

    if (loading) {
        return <h2>Loading...</h2>;
    }

    if (!user.id) {
        console.log("No user found for ID:", id);
        return <h2>No user found</h2>;
    }

    return (
        <div className="user-details">
            <h1>User Details</h1>
            <div className="user-card">
                <p>ID: {user.id}</p>
                <img src={user.avatar} alt={user.first_name} />
                <h2>{user.first_name} {user.last_name}</h2>
                <p>Email: {user.email}</p>
                <Link to="/home">Back to Home</Link>
            </div>
        </div>
    );
};

export default UserDetails;