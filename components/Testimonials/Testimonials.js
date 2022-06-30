import Image from "next/image";

import TestimonialsItem from './TestimonialsItem'


export default function Testimonialsection({data}) {	
	return (
			<div className="relative px-5 py-24 max-w-7xl mx-auto">
				<div className="text-center">
					<h1 className="text-3xl tracking-tight font-extrabold text-gray-900 sm:text-4xl">Testimonials</h1>
				</div>
				<div className="mt-12 max-w-lg mx-auto grid gap-8 lg:grid-cols-2 lg:max-w-none">
					{data && data.map((item, index)=> <TestimonialsItem key={index} data={item} />)}					
				</div>
			</div>
	);
}
