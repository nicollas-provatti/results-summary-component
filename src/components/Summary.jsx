import data from "../data.json";

console.log(data);

export default function Summary() {
  return (
    <div className="flex flex-col gap-8 p-6 md:w-1/2">
      <h3 className="text-dark-gray-blue text-xl">Summary</h3>
      <ul className="flex flex-col gap-5">
        {data.map((item) => (
          <li
            key={item.category}
            className={`flex justify-between px-3 py-4 ${item.bgColor} rounded-lg`}
          >
            <div className="flex gap-3">
              <img src={item.icon} alt={item.category} />
              <p className={`${item.textColor}`}>{item.category}</p>
            </div>
            <div className="text-dark-gray-blue">
              <p>
                <strong className="text-dark-gray-blue">{item.score}</strong> /
                100
              </p>
            </div>
          </li>
        ))}
      </ul>
      <button className="text-white text-lg bg-dark-gray-blue rounded-full py-4 cursor-pointer transition-all duration-300 hover:bg-linear-to-b hover:from-light-slate-blue hover:to-light-royal-blue">
        Continue
      </button>
    </div>
  );
}
