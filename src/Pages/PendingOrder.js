import React, { useEffect, useState } from 'react';
import './UserDashboard.css';
import { Link } from 'react-router-dom';
import UserDashboardMenu from './UserDashboardMenu';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../firebase.init';
import HeaderBottom from '../components/HomePage/HeaderBottom';

const PendingOrder = () => {
    const [user] = useAuthState(auth);
    const [orders, setOrders] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [ordersPerPage] = useState(5); // Adjust the number of orders per page

    useEffect(() => {
        fetch(`https://smartseosolution-f3192830bfae.herokuapp.com/orders`)
            .then((res) => res.json())
            .then((info) => setOrders(info.reverse())); // Reverse the array initially
    }, []);

    // Pagination for Orders
    const indexOfLastOrder = currentPage * ordersPerPage;
    const indexOfFirstOrder = indexOfLastOrder - ordersPerPage;
    const currentOrders = orders
        .filter(order => order.customerEmail === user?.email)
        .slice(indexOfFirstOrder, indexOfLastOrder);

    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    return (
        <>
        <HeaderBottom></HeaderBottom>
        <section id="services" className="services-area pt-120 pb-90 fix">
        <div className="container">
            <div></div>
            <div>
                <UserDashboardMenu></UserDashboardMenu>
                <div>
                    <h2>Your Pending Orders</h2>

                    <table className="table">
                        <thead>
                            <tr>
                                <th scope="col">Sl No.</th>
                                <th scope="col">Date</th>
                                <th scope="col">Your Name</th>
                                <th scope="col">Amount</th>
                                <th scope="col">Order Status</th>
                                <th scope="col">Payment Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {currentOrders.map((order, index) => (
                                <tr key={index}>
                                    <th scope="row">{index + 1}</th>
                                    <td>{order.orderDate}</td>
                                    <td>{order.customerName}</td>
                                    <td>${order.packagePrice} USD</td>
                                    <td>{order.orderStatus}</td>
                                    <td>
                                        {order.paymentStatus === 'UnPaid' && (
                                            <Link className='btn btn-solid' to={`/pay-now/${order._id}`}>Pay Now</Link>
                                        )}
                                        {order.paymentStatus === 'Paid' && (
                                            <Link className='btn btn-solid' to='#'>You Have Paid</Link>
                                        )}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>

                    {/* Bootstrap Pagination for Orders */}
                    <nav aria-label="Orders Page Navigation">
                        <ul className="pagination">
                            <li className={`page-item ${currentPage === 1 ? 'disabled' : ''}`}>
                                <span className="page-link" onClick={() => paginate(currentPage - 1)}>Previous</span>
                            </li>
                            {Array.from({ length: Math.ceil(orders.filter(order => order.customerEmail === user?.email).length / ordersPerPage) }, (_, i) => (
                                <li key={i} className={`page-item ${currentPage === i + 1 ? 'active' : ''}`}>
                                    <span className="page-link" onClick={() => paginate(i + 1)}>
                                        {i + 1} {currentPage === i + 1 && <span className="sr-only">(current)</span>}
                                    </span>
                                </li>
                            ))}
                            <li className={`page-item ${currentPage === Math.ceil(orders.filter(order => order.customerEmail === user?.email).length / ordersPerPage) ? 'disabled' : ''}`}>
                                <span className="page-link" onClick={() => paginate(currentPage + 1)}>Next</span>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </div>
    </section></>
        
    );
};

export default PendingOrder;
