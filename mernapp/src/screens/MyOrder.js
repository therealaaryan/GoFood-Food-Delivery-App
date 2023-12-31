import React, { useEffect, useState } from 'react';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

export default function MyOrder() {
    const [orderGroups, setOrderGroups] = useState([]);

    const fetchMyOrder = async () => {
        const userEmail = localStorage.getItem('userEmail');
        if (!userEmail) {
            console.error('User email is not available');
            return;
        }
        const response = await fetch(`http://localhost:5000/api/myorderData?email=${encodeURIComponent(userEmail)}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        });
        if (response.ok) {
            const responseData = await response.json();
            
            const orderData = responseData[0].order_data;
            const groups = orderData.reduce((acc, item) => {
                
                const date = item.Order_date || (item.length && item[0].Order_date);
                if (date) {
                    if (!acc[date]) acc[date] = [];
                    if (Array.isArray(item)) {
                       
                        acc[date].push(...item.slice(1));
                    } else {
                        acc[date].push(item);
                    }
                }
                return acc;
            }, {});
            setOrderGroups(groups);
        } else {
            console.error('Failed to fetch orders:', response.statusText);
        }
    };

    useEffect(() => {
        fetchMyOrder();
    }, []);

    return (
        <div>
            <Navbar />
            <div className='container'>
                <div className='row'>
                    {Object.keys(orderGroups).length > 0 ? (
                        Object.entries(orderGroups).map(([date, items]) => (
                            <div key={date} className='my-order-group'>
                                <h3>{new Date(date).toDateString()}</h3>
                                {items.filter(item => item.name && item.price).map((item, itemIndex) => (
                                    <div key={item.id} className='col-12 col-md-6 col-lg-3'>
                                        <div className="card mt-3" style={{ width: "16rem", maxHeight: "360px" }}>
                                            
                                            <div className="card-body">
                                                <h5 className="card-title">{item.name}</h5>
                                                <p>{item.qty} {item.size} ₹{item.price}/-</p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        ))
                    ) : (
                        <div>No orders found</div>
                    )}

                </div>
            </div>
            <Footer />
        </div>
    );
}



