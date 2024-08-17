import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import Pagination from "../Component/Pagination";

const Home = () => {
    const [users, setUsers] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [usersPerPage] = useState(6);
    const navigate = useNavigate();

    useEffect(() => {
        const token = localStorage.getItem("access_token");

        // Redirect to login if no token is found
        if (!token) {
            navigate("/login");
            return;
        }

        // Fetch user details if authenticated
        axios.get("https://reqres.in/api/users")
            .then((res) => {
                setUsers(res.data.data);
            })
            .catch((err) => {
                console.error("Error fetching users:", err);
            });
    }, [navigate]);

    const handleLogout = () => {
        localStorage.clear();
        navigate("/login");  // Redirect to login after logout
    }

    const indexOfLastUser = currentPage * usersPerPage;
    const indexOfFirstUser = indexOfLastUser - usersPerPage;
    const currentUsers = users.slice(indexOfFirstUser, indexOfLastUser);

    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    return (
        <div className="home">
            <button onClick={handleLogout}>Logout</button>
            <h1>Hello Users</h1>
            <ul>
                {currentUsers.map(user => (
                    <div key={user.id}>
                        <Link to={`/userdetail/${user.id}`}>
                            <p>{user.first_name} {user.last_name}</p>
                            <img src={user.avatar} alt={user.first_name} />
                            <h3>{user.email}</h3>
                        </Link>
                    </div>
                ))}
            </ul>
            <Pagination usersPerPage={usersPerPage} totalUsers={users.length} paginate={paginate} />
        </div>
    );
}

export default Home;
