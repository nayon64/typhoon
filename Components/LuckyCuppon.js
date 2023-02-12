import React, { useState } from 'react';

const LuckyCuppon = () => {

	const [yourNumber,setYourNumber]=useState(0)

	// const handleChange = (event) => {
	// 	const number=event.target.value
	// 	setYourNumber(number)
	// }

	const handleNumber = (n) => {
		setYourNumber(n)
	}
	const num=[1,2,3,4,5,6]
	return (
    <section className='max-w-6xl mx-auto'>
      <div>
        <h1 className="text-3xl font-bold">Lucky Cuppon</h1>
        <p>Get your discout cuppon.</p>
			</div>
			<div className='grid md:grid-cols-2 pt-4'>
				<div>
					{/* <input className='border' name='number' type="text" onChange={handleChange} /> */}
					{
						num.map(n => <button className=' px-5 py-2 bg-gray-600 text-white mx-2 text-2xl font-bold rounded-xl' onClick={()=>handleNumber(n)}>{n}</button>)
					}
				</div>
				<div>
					<h1>Your Selected Number is {yourNumber}</h1>
				</div>

			</div>
    </section>
  );
};

export default LuckyCuppon;