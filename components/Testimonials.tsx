
import React from 'react';

const StarIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg className={className} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
);


const Testimonials: React.FC = () => {
  const testimonialsData = [
    {
      quote: "FurnishFlex was a lifesaver for my temporary move. The furniture was beautiful, and the delivery was seamless. Highly recommended!",
      name: "Aisha Khan",
      location: "Karachi",
      avatar: "https://picsum.photos/100/100?random=1"
    },
    {
      quote: "The quality and style of the furniture exceeded my expectations. It completely transformed my apartment. The flexibility is a huge plus.",
      name: "Bilal Ahmed",
      location: "Lahore",
      avatar: "https://picsum.photos/100/100?random=2"
    },
    {
      quote: "An amazing service from start to finish. The customer support team was incredibly helpful in picking the right pieces for my space.",
      name: "Fatima Jilani",
      location: "Islamabad",
      avatar: "https://picsum.photos/100/100?random=3"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">What Our Customers Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonialsData.map((testimonial, index) => (
            <div key={index} className="bg-gray-100 p-8 rounded-lg shadow-md flex flex-col">
              <div className="flex text-yellow-400 mb-4">
                {[...Array(5)].map((_, i) => <StarIcon key={i} className="w-5 h-5" />)}
              </div>
              <blockquote className="text-gray-600 italic mb-6 flex-grow">"{testimonial.quote}"</blockquote>
              <div className="flex items-center">
                <img src={testimonial.avatar} alt={testimonial.name} className="w-14 h-14 rounded-full mr-4" />
                <div>
                  <p className="font-bold text-lg">{testimonial.name}</p>
                  <p className="text-gray-500">{testimonial.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
