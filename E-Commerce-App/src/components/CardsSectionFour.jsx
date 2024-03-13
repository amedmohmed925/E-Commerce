import React from 'react';

function Cards() {
    const arr = [
           { title: "How to choose perfect gadgets",
            src: '/images/hour.png',
            para: "Whene while the lovelly vally letters with vapour gruond me, and the menison sun the Lipper S...",
            date:'March 12,2024' },
        { title: "How to choose perfect gadgets ",
            src: '/images/laptop.jpeg', 
            para: "Whene while the lovelly vally letters with vapour gruond me, and the menison sun the Lipper S...",
            date:'March 13,2024' },
        { title: "How to choose perfect gadgets",
            src: '/images/Virtual reality.jpg', 
            para: "Whene while the lovelly vally letters with vapour gruond me, and the menison sun the Lipper S...",
            date:'March 14,2024'},
        
    ]

    return (
        <div className='main d-flex py-5 w-100 flex-wrap justify-content-center gap-5'>
            {arr.length >= 1 ? (
                arr.map((e, i) => (
                    <div className=' w-card card-box box w-90 w-md-50 mx-auto mb-4 h-25' key={i}>
                        <img className='w-100 rounded h-100' src={e.src} alt={e.title} />
                        <p className='text-body-secondary fs-6'> {e.date}</p>
                        <h2 className='fw-bold  fs-6'>{e.title}</h2>
                        <p className='fw-normal p text-body-secondary '>{e.para}</p>
                    </div>
                ))
            ) : (
                <h1 className='error'>Not Found</h1>
            )}
        </div>
    );
}

export default Cards;
