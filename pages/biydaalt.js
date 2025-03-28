import { useState } from "react";

const userData = [
  { "name": "Amartuvshin", "email": "amartuvshin@gmail.com" },
  { "name": "Anar", "email": "g.anar@gmail.com" },
  { "name": "Anar-Erdene", "email": "anar-erdene@gmail.com" },
  { "name": "Batmend", "email": "batmend@gmail.com" },
  { "name": "Temuulen", "email": "temuulen@gmail.com" },
  { "name": "Sh.Temuujin", "email": "Sh.temuujin@gmail.com" },
  { "name": "B.Temuujin", "email": "B.temuujin@gmail.com" },
  { "name": "E.Temuujin", "email": "E.temuujin@gmail.com" },
  { "name": "Tergel", "email": "tergel@gmail.com" },
  { "name": "Dalai-Suren", "email": "dalai-suren@gmail.com" },
  { "name": "Tugs-Asralt", "email": "tugs-asralt@gmail.com" },
  { "name": "Shine-Erdene", "email": "shine-erdene@gmail.com" },
  { "name": "Ochir-Erdene", "email": "ochir-erdene@gmail.com" },
  { "name": "Enkhtugs", "email": "enkhtugs@gmail.com" },
  { "name": "Enkhjav", "email": "enkhjav@gmail.com" },
  { "name": "Emily", "email": "emily@gmail.com" },
  { "name": "Tselmeg", "email": "tselmeg@gmail.com" },
  { "name": "Choi-Odser", "email": "choiodser@gmail.com" },
  { "name": "Enkhuchral", "email": "uchka@gmail.com" },
  { "name": "Khanbileg", "email": "khanbileg@gmail.com" },
];

export default function Home() {
  const [searchQuery, setSearchQuery] = useState('');
  const [grid, setGrid] = useState(true);

  const data = userData.filter(item =>
    item.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="font-sans bg-gradient-to-br from-violet-500 to-teal-500 py-10 px-6 min-h-screen text-white">
      <header className="flex justify-between items-center mb-8">
        <h1 className="text-4xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-pink-300 to-teal-300">
          Хэрэглэгчийн Жагсаалт
        </h1>
        <button
          onClick={() => setGrid(!grid)}
          className="px-6 py-2 bg-teal-600 hover:bg-teal-700 text-white rounded-md transition duration-300 transform hover:scale-105 shadow-md"
        >
          {grid ? "Жагсаалт руу шилжих" : "Grid View рүү шилжих"}
        </button>
      </header>

  
      <div className="mb-8 relative">
        <input
          className="w-full bg-gray-800 text-white py-3 px-5 rounded-md border-2 border-gray-600 focus:outline-none focus:ring-2 focus:ring-teal-500 placeholder:text-gray-400"
          placeholder="Хэрэглэгчийг нэрээр нь хайна уу..."
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>

      <div className={grid ? "grid grid-cols-1 lg:grid-cols-2 gap-8" : "space-y-4"}>
        {data.length > 0 ? (
          data.map(({ name, email }) => (
            <div
              key={email}
              className="bg-gray-700 p-6 rounded-lg shadow-lg transform hover:scale-105 hover:bg-teal-500 hover:shadow-2xl transition duration-300"
            >
              <h3 className="text-2xl font-semibold text-teal-200 mb-2">{name}</h3>
              <p className="text-md text-gray-300">{email}</p>
            </div>
          ))
        ) : (
          <p className="text-lg text-gray-300">Хэрэглэгчийн нэр олдсонгүй</p>
        )}
      </div>
    </div>
  );
}
