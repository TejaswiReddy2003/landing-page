const services = ["Web Development", "SEO Optimization", "Cloud Services"];
const ServiceCards = () => (
  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-10">
    {services.map((service, index) => (
      <div key={index} className="p-5 border rounded shadow-lg">
        <h3 className="text-xl font-semibold">{service}</h3>
        <p className="mt-2 text-gray-600">High-quality {service} for your business</p>
      </div>
    ))}
  </div>
);
export default ServiceCards;
