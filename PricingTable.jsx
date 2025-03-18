const PricingTable = () => (
    <div className="p-10">
      <table className="w-full border-collapse border border-gray-300">
        <thead>
          <tr className="bg-gray-200">
            <th className="border p-2">Plan</th>
            <th className="border p-2">Price</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border p-2">Basic</td>
            <td className="border p-2">$10/month</td>
          </tr>
          <tr>
            <td className="border p-2">Pro</td>
            <td className="border p-2">$20/month</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
  export default PricingTable;
  