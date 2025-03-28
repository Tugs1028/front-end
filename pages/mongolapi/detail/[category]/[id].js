import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Head from "next/head";

export default function ItemDetail() {
  const router = useRouter();
  const { category, id } = router.query;
  const [item, setItem] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!router.isReady) return;

    const fetchItem = async () => {
      try {
        setLoading(true);
        setError(null);

        if (!category || !id) {
          throw new Error("Missing category or ID");
        }

        const response = await fetch(
          `https://mongol-api-rest.vercel.app/${category}`
        );

        if (!response.ok) {
          throw new Error(`Failed to fetch: ${response.status}`);
        }

        const data = await response.json();
        const dataKey = Object.keys(data)[0];

        if (!dataKey || !Array.isArray(data[dataKey])) {
          throw new Error("Invalid data format from API");
        }

        const foundItem = data[dataKey].find(
          (item) => String(item.id) === String(id)
        );

        if (!foundItem) {
          throw new Error("Item not found");
        }

        setItem({ ...foundItem, category });
      } catch (err) {
        console.error("Error fetching item:", err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchItem();
  }, [category, id, router.isReady]);

  const renderValue = (value) => {
    if (value === null || value === undefined) return "N/A";

    if (typeof value === "object" && !Array.isArray(value)) {
      return (
        <div className="ml-4 space-y-1">
          {Object.entries(value).map(([subKey, subValue]) => (
            <div key={subKey} className="flex">
              <span className="font-medium w-24 flex-shrink-0 capitalize">
                {subKey}:
              </span>
              <span>{renderValue(subValue)}</span>
            </div>
          ))}
        </div>
      );
    }

    if (Array.isArray(value)) {
      return value.map((item, index) => (
        <div key={index}>{renderValue(item)}</div>
      ));
    }

    return value.toString();
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-900">
        <div className="flex flex-col items-center text-gray-300">
          <div className="w-16 h-16 border-4 border-gray-700 border-t-blue-500 rounded-full animate-spin"></div>
          <p className="mt-4 text-lg font-semibold">Loading item details...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-900 text-gray-300 p-4">
        <h2 className="text-2xl font-bold text-red-400 mb-4">Error</h2>
        <p className="mb-4 text-center max-w-md">{error}</p>
        <div className="flex gap-4">
          <button
            onClick={() => router.back()}
            className="px-5 py-2 bg-gray-700 rounded-lg hover:bg-gray-600 transition"
          >
            Go Back
          </button>
          <button
            onClick={() => router.push("/mongolapi")}
            className="px-5 py-2 bg-blue-700 rounded-lg hover:bg-blue-600 transition"
          >
            Return Home
          </button>
        </div>
      </div>
    );
  }

  if (!item) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-900 text-gray-300 p-4">
        <h2 className="text-2xl font-bold mb-4">Item Not Found</h2>
        <p className="mb-4">The requested item could not be found</p>
        <button
          onClick={() => router.back()}
          className="px-5 py-2 bg-gray-700 rounded-lg hover:bg-gray-600 transition"
        >
          Go Back
        </button>
      </div>
    );
  }

  return (
    <>
      <Head>
        <title>{item.name} | Mongolian Cultural Database</title>
        <meta
          name="description"
          content={item.description || `Details about ${item.name}`}
        />
      </Head>

      <div className="min-h-screen bg-gray-900 text-gray-200 py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <button
            onClick={() => router.push("/mongolapi")}
            className="mb-6 flex items-center text-blue-400 hover:text-blue-300 transition"
          >
            <svg
              className="w-5 h-5 mr-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 19l-7-7m0 0l7-7m-7 7h18"
              />
            </svg>
            Back to results
          </button>

          <div className="bg-gray-800 rounded-xl shadow-xl overflow-hidden">
            <div className="md:flex">
              <div className="md:w-1/2 p-6">
                <div className="relative pb-[100%] rounded-lg overflow-hidden bg-gray-700">
                  <img
                    src={item?.images?.[0] || "/placeholder.png"}
                    className="absolute inset-0 w-full h-full object-cover"
                    alt={item.name}
                    onError={(e) => (e.target.src = "/placeholder.png")}
                  />
                </div>
              </div>

              <div className="md:w-1/2 p-6">
                <div className="flex justify-between items-start">
                  <h1 className="text-3xl font-bold text-white mb-2">
                    {item.name}
                  </h1>
                  <span className="text-xs bg-blue-900 px-2 py-1 rounded">
                    {category}
                  </span>
                </div>

                {item.description && (
                  <p className="text-lg text-gray-300 mt-4 mb-6">
                    {item.description}
                  </p>
                )}

                <div className="space-y-3">
                  {Object.entries(item).map(([key, value]) => {
                    // Skip these special fields
                    if (
                      [
                        "name",
                        "description",
                        "images",
                        "category",
                        "id",
                      ].includes(key)
                    ) {
                      return null;
                    }

                    // Skip empty values
                    if (!value && value !== 0 && value !== false) return null;

                    return (
                      <div key={key} className="flex flex-col">
                        <span className="font-semibold capitalize">
                          {key.replace(/([A-Z])/g, " $1").trim()}:
                        </span>
                        <div className="mt-1">{renderValue(value)}</div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
