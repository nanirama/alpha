import Image from "next/image";

import TestimonialsItem from './TestimonialsItem'


export default function Testimonialsection({data}) {	
	return (
			<div className="relative px-5 py-24 max-w-7xl mx-auto">
				<div className="text-center">
					<h1 className="text-3xl tracking-tight font-extrabold text-gray-900 sm:text-4xl">Client testimonials</h1>
					<p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">See what clients have to say about our work</p>
				</div>
				<div className="mt-12 max-w-lg mx-auto grid gap-8 lg:grid-cols-2 lg:max-w-none">
					{data && data.map((item, index)=> <TestimonialsItem key={index} data={item} />)}					
				</div>
			</div>
	);
}
