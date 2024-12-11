import { useState } from 'react';

const data = [
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


    const filteredData = data.filter(item =>
        item.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <div className="font-sans py-10 px-[20%] text-black bg-white h-screen">
            <header className="flex justify-between items-center my-6">
                <h1 className="text-3xl font-bold flex">Хэрэглэгчийн Жагсаалт</h1>
            </header>

            <main>
                <div className="relative block mb-6">
                    <span className="sr-only">Search</span>
                    <input
                        className="placeholder:italic placeholder:text-slate-500 block bg-white w-full border border-slate-300 rounded-md py-2 px-4"
                        placeholder="Хэрэглэгчийг нэрээр нь хайна уу..."
                        type="text"
                        name="search"
                        value={searchQuery}
                        onChange={(p) => setSearchQuery(p.target.value)}
                    />
                </div>

                <div>
                    {filteredData.length > 0 ? (
                        filteredData.map(({ name, email }) => (
                            <div
                                key={email}
                                className="bg-gray-300 p-5 border-2 rounded-xl text-left my-10"
                            >
                                <h3 className="text-2xl font-semibold mb-2">{name}</h3>
                                <p className="text-md">{email}</p>
                            </div>
                        ))
                    ) : (
                        <p className="text-lg text-gray-500">Хэрэглэгчийн нэр олдсонгүй</p>
                    )}
                </div>
            </main>
        </div>
    );
}
