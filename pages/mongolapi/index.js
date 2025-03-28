import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function MongolApiHome() {
  const router = useRouter();
  const [data, setData] = useState([]);
  const [query, setQuery] = useState("");
  const [isGridView, setIsGridView] = useState(true);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchAllData = async () => {
      try {
        setLoading(true);
        setError(null);

        const endpoints = [
          "clothes",
          "instruments",
          "HistoricalTools",
          "EthnicGroups",
          "Provinces",
          "HistoricalFigures",
          "TouristAttractions",
        ];

        const requests = endpoints.map((endpoint) =>
          fetch(`https://mongol-api-rest.vercel.app/${endpoint}`).then(
            (res) => {
              if (!res.ok) throw new Error(`Failed to fetch ${endpoint}`);
              return res.json();
            }
          )
        );

        const results = await Promise.all(requests);
        const mergedData = results.flatMap((result, index) => {
          const key = Object.keys(result)[0];
          return (
            result[key]?.map((item) => ({
              ...item,
              category: endpoints[index],
            })) || []
          );
        });

        setData(mergedData);
      } catch (err) {
        console.error("Error fetching data:", err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchAllData();
  }, []);

  const handleSearch = (e) => setQuery(e.target.value);

  const filteredData = data.filter((item) =>
    item?.name?.toLowerCase().includes(query.toLowerCase())
  );

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-blue-900">
        <div className="flex flex-col items-center text-gray-300">
          <div className="w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
          <p className="mt-4">Loading data...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-blue-900 text-gray-300 p-4">
        <h2 className="text-2xl font-bold text-red-400 mb-4">Error</h2>
        <p className="mb-4">{error}</p>
        <button
          onClick={() => window.location.reload()}
          className="px-4 py-2 bg-blue-700 rounded-lg"
        >
          Try Again
        </button>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-blue-900 p-6 flex flex-col items-center text-gray-100">
      <h1 className="text-3xl font-bold mb-6">Mongolian Cultural Database</h1>

      <div className="w-full max-w-4xl flex flex-col md:flex-row items-center justify-between mb-6 gap-4">
        <input
          type="text"
          value={query}
          onChange={handleSearch}
          placeholder="Search by name..."
          className="flex-grow p-3 rounded-lg bg-blue-700 border border-blue-500 text-white shadow-md focus:ring-2 focus:ring-blue-300 w-full md:w-auto"
        />
        <button
          onClick={() => setIsGridView(!isGridView)}
          className="px-5 py-3 bg-white text-blue-900 font-medium rounded-lg shadow-md hover:bg-gray-300 transition"
        >
          {isGridView ? "Switch to List View" : "Switch to Grid View"}
        </button>
      </div>

      {filteredData.length > 0 ? (
        isGridView ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 w-full max-w-6xl">
            {filteredData.map((item) => (
              <div
                key={`${item.category}-${item.id}`}
                onClick={() =>
                  router.push(`/mongolapi/detail/${item.category}/${item.id}`)
                }
                className="border border-blue-500 bg-blue-700 shadow-lg rounded-lg p-4 text-center transition transform hover:scale-105 hover:border-white cursor-pointer"
              >
                <img
                  src={item?.images?.[0] || "/placeholder.png"}
                  className="w-full h-56 rounded-lg object-cover shadow-md"
                  alt={item.name}
                  onError={(e) => (e.target.src = "/placeholder.png")}
                />
                <h2 className="font-semibold text-lg mt-3 text-white">
                  {item.name}
                </h2>
                <p className="text-sm text-gray-300 truncate">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        ) : (
          <div className="w-full max-w-4xl space-y-4">
            {filteredData.map((item) => (
              <div
                key={`${item.category}-${item.id}`}
                onClick={() =>
                  router.push(`/mongolapi/detail/${item.category}/${item.id}`)
                }
                className="flex items-center border border-blue-500 bg-blue-700 shadow-lg rounded-lg p-4 cursor-pointer transition hover:border-white"
              >
                <img
                  src={item?.images?.[0] || "/placeholder.png"}
                  className="w-24 h-24 rounded-lg object-cover shadow-md"
                  alt={item.name}
                  onError={(e) => (e.target.src = "/placeholder.png")}
                />
                <div className="ml-4">
                  <h2 className="font-semibold text-lg text-white">
                    {item.name}
                  </h2>
                  <p className="text-sm text-gray-300">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        )
      ) : (
        <div className="text-center py-10">
          <p className="text-xl text-gray-300">No items found</p>
          {query && (
            <button
              onClick={() => setQuery("")}
              className="mt-4 px-4 py-2 bg-blue-700 rounded-lg"
            >
              Clear search
            </button>
          )}
        </div>
      )}
    </div>
  );
}
