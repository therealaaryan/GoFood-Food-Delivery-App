import React from 'react';

export default function Card(props) {
    let options = props.options;
    let priceOptions = Object.keys(options);
    
    const cardImageStyle = {
        height: '200px', // set a fixed height
        objectFit: 'cover', // this will cover the area, preserving aspect ratio without distortion
        width: '100%' // this ensures the image is responsive within the card
    };

    return (
        <div className="card mt-3" style={{ width: "18rem", overflow: 'hidden' }}>
            <img 
                src={props.imgSrc} 
                className="card-img-top" 
                alt="Food item" 
                style={cardImageStyle} 
            />
            <div className="card-body">
                <h5 className="card-title" style={{ fontSize: '1.5rem' }}>{props.foodName}</h5>
                <div className='d-flex justify-content-start align-items-center'>
                    <select className='flex-shrink-0 bg-success rounded text-white' style={{ fontSize: '0.75rem', padding: '0.25rem 0.5rem', marginRight: '0.5rem' }}>
                        {Array.from(Array(6), (e, i) => (
                            <option key={i + 1} value={i + 1}> {i + 1} </option>
                        ))}
                    </select>
                    <select className='flex-shrink-0 bg-success rounded text-white' style={{ fontSize: '0.75rem', padding: '0.25rem 0.5rem', marginRight: '0.5rem' }}>
                        {priceOptions.map((data) => (
                            <option key={data} value={data}>{data}</option>
                        ))}
                    </select>
                    <div className='fs-6' style={{ fontSize: '0.8rem' }}>
                        Total Price
                    </div>
                </div>
            </div>
        </div>
    );
}




