import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import Pagination from "../Component/Pagination";
import "./Home.css";

const Home = () => {
    const [users, setUsers] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const [usersPerPage] = useState(6);
    const navigate = useNavigate();

    useEffect(() => {
        const token = localStorage.getItem("access_token");

        if (!token) {
            navigate("/login");
            return;
        }

        axios.get(`https://reqres.in/api/users?page=${currentPage}&per_page=${usersPerPage}`)
            .then((res) => {
                setUsers(res.data.data);
                setTotalPages(res.data.total_pages);
            })
            .catch((err) => {
                console.error("Error fetching users:", err);
                navigate("/login"); 
            });
    }, [navigate, currentPage, usersPerPage]);

    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    const handleBack = () => {
    navigate(-1); 
    };

    return (
        <div className="home" id="userCard">
            <div className="home-header">
                <a href="/" className="logo-link">
                    <img src="./src/assets/logo.jpeg" alt="Logo" className="logo" />
                </a>
                <h1 className="title">User List</h1>
                <button onClick={handleBack} className="back-button">Back</button>
            </div>
            <div className="user-grid">
                {users.map(user => (
                    <div key={user.id} className="user-card">
                        <Link to={`/userdetail/${user.id}`} className="user-link">
                            <img src={user.avatar} alt={user.first_name} className="user-avatar" />
                            <div className="user-info">
                                <h2>{user.first_name} {user.last_name}</h2>
                                <p>{user.email}</p>
                            </div>
                        </Link>
                    </div>
                ))}
            </div>
            <Pagination
                usersPerPage={usersPerPage}
                totalUsers={totalPages * usersPerPage}
                paginate={paginate}
            />
        </div>
    );
};

export default Home;
