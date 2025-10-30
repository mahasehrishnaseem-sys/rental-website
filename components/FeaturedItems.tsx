
import React from 'react';

interface Item {
  name: string;
  category: string;
  imageUrl: string;
}

const featuredItems: Item[] = [
  { name: 'Plush Velvet Sofa', category: 'Living Room', imageUrl: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?q=80&w=2070&auto=format&fit=crop' },
  { name: 'Oak Dining Table', category: 'Dining', imageUrl: 'https://images.unsplash.com/photo-1594026112284-02bb6f3352fe?q=80&w=2070&auto=format&fit=crop' },
  { name: 'Ergonomic Work Desk', category: 'Office', imageUrl: 'https://images.unsplash.com/photo-1533090161767-e6ffed986c88?q=80&w=2070&auto=format&fit=crop' },
  { name: 'Bohemian Accent Chair', category: 'Chairs', imageUrl: 'https://images.unsplash.com/photo-1592078615290-033ee584e267?q=80&w=2160&auto=format&fit=crop' },
  { name: 'Minimalist Bed Frame', category: 'Bedroom', imageUrl: 'https://picsum.photos/400/300?image=10' },
];

const FeaturedItems: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Popular Rentals</h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">Discover our most loved pieces, perfect for transforming any space with style and comfort.</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {featuredItems.slice(0, 4).map((item, index) => (
            <div key={index} className="group overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <img src={item.imageUrl} alt={item.name} className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500" />
              <div className="p-6 bg-white">
                <p className="text-sm text-indigo-600 font-semibold">{item.category}</p>
                <h3 className="text-xl font-bold mt-1">{item.name}</h3>
                <button className="mt-4 text-indigo-600 font-semibold group-hover:underline">View Details &rarr;</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedItems;
