import "./Navbar.css"
const Pagination = ({ usersPerPage, totalUsers, paginate }) => {
    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(totalUsers / usersPerPage); i++) {
        pageNumbers.push(i);
    }

    return (
        <nav className="pagination-nav">
            {pageNumbers.map(number => (
                <button
                    key={number}
                    onClick={() => paginate(number)}
                    className="pagination-button"
                >
                    {number}
                </button>
            ))}
        </nav>
    );
};

export default Pagination;
