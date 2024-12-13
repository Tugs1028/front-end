import { useState } from "react";

export default function Home() {
  const [grid, setGrid] = useState(true);
  const data = [
    {
      id: 1,
      title: "Test 1",
      description:
        "Lorem ipsum dolor sit  amet, consectetur adipiscingelit. Proin enim justo, convallis eget",
    },
    {
      id: 2,
      title: "Test 2",
      description:
        "Lorem ipsum dolor sit  amet, consectetur adipiscingelit. Proin enim justo, convallis eget",
    },
    {
      id: 3,
      title: "Test 3",
      description:
        "Lorem ipsum dolor sit  amet, consectetur adipiscingelit. Proin enim justo, convallis eget",
    },
    {
      id: 3,
      title: "Test 4",
      description:
        "Lorem ipsum dolor sit  amet, consectetur adipiscingelit. Proin enim justo, convallis eget",
    },
  ];
  return (
    <div className="p-6 max-w-4xl mx-auto">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-3xl font-bold">Нийтлэлүүд</h1>
        <button
          onClick={() => setGrid(!grid)}
          className="px-4 py-2 bg-blue-00 text-black rounded hover:bg-blue-600 transition border-2">
            {grid ? "Жагсаалт руу шилжих" : "Grid View рүү шилжих"}
        </button>
        </div>
          <div
          className={grid == true ? "grid grid-cols-1 sm:grid-cols-2 gap-6" : "space-y-4"}>
          {data.map((items) => (
            <div key={items.id} className="border border-gray-300 rounded-lg shadow-sm hover:shadow-md transition p-4">
              <h2 className="text-xl font-semibold mb-2">{items.title}</h2>
              <p className="text-gray-600">{items.description}</p>
            </div>
          ))}
        </div>
      </div>
  );
}
