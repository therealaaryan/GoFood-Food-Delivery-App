import React, { useEffect, useRef, useState } from 'react';
import { useDispatchCart, useCart } from './ContextReducer';

export default function Card(props) {
    let dispatch = useDispatchCart();
    let data = useCart();
    const priceRef = useRef();
    let options = props.options;
    let priceOptions = Object.keys(options);
    const [qty, setQty] = useState(1);
    const [size, setSize] = useState("");

    const cardImageStyle = {
        height: '200px',
        objectFit: 'cover',
        width: '100%'
    };

    const handleAddToCart = async () => {
        await dispatch({
            type: "ADD",
            id: props.foodItem._id,
            name: props.foodItem.name,
            price: finalPrice,
            qty: qty,
            size: size,
            img: props.foodItem.img
        });
        
        console.log(data)
    }

    let finalPrice = qty * parseInt(options[size]);
    useEffect(() => {
        setSize(priceRef.current.value)
    }, [])

    return (
        <div className="card mt-3" style={{ width: "18rem", overflow: 'hidden' }}>
            <img
                src={props.foodItem.img}
                className="card-img-top"
                alt="Food item"
                style={cardImageStyle}
            />
            <div className="card-body">
                <h5 className="card-title" style={{ fontSize: '1.5rem' }}>{props.foodItem.name}</h5>
                <div className='d-flex justify-content-start align-items-center'>
                    <select className='flex-shrink-0 bg-success rounded text-white' style={{ fontSize: '0.75rem', padding: '0.25rem 0.5rem', marginRight: '0.5rem' }} onChange={(e) => setQty(e.target.value)}>
                        {Array.from(Array(6), (e, i) => (
                            <option key={i + 1} value={i + 1}> {i + 1} </option>
                        ))}
                    </select>
                    <select className='flex-shrink-0 bg-success rounded text-white' style={{ fontSize: '0.75rem', padding: '0.25rem 0.5rem', marginRight: '0.5rem' }} ref={priceRef} onChange={(e) => setSize(e.target.value)}>
                        {priceOptions.map((data) => (
                            <option key={data} value={data}>{data}</option>
                        ))}
                    </select>
                    <div className='fs-6' style={{ fontSize: '0.8rem' }}>
                        ₹{finalPrice}/-
                    </div>
                </div>
                <hr></hr>
                <button className={'btn btn-success justify-center ms-2'} onClick={handleAddToCart}>Add to Cart</button>
            </div>
        </div>
    );
}




