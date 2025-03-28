import { useRouter } from "next/router";
import Image from "next/image";

export default function Home() {
  const router = useRouter();
  return (
    <div className="bg-black">
      <h1 className="text-6xl font-bold text-center text-black mb-10 mt-5 text-white">
        Enkhtugs Next.JS
      </h1>
      <div className="grid grid-cols-2 gap-2">
        <div
          className="bg-gray-300 rounded-xl h-96 mx-5 my-5 hover:bg-blue-300 flex justify-center items-center"
          onClick={() => router.push("/cv")}
        >
          <Image src="/cv.png" width={500} height={500} />
        </div>
        <div
          className="bg-gray-300 rounded-xl h-96 mx-5 my-5 hover:bg-blue-300 flex justify-center items-center"
          onClick={() => router.push("/weather")}
        >
          <Image src="/weather.png" width={500} height={500} />
        </div>
        <div
          className="bg-gray-300 rounded-xl h-96 mx-5 my-5 hover:bg-blue-300 flex justify-center items-center"
          onClick={() => router.push("/search")}
        >
          <Image src="/search.png" width={500} height={500} />
        </div>
        <div
          className="bg-gray-300 rounded-xl h-96 mx-5 my-5 hover:bg-blue-300 flex justify-center items-center"
          onClick={() => router.push("/grid")}
        >
          <Image src="/grid.png" width={500} height={500} />
        </div>
        <div
          className="bg-gray-300 rounded-xl h-96 mx-5 my-5 hover:bg-blue-300 flex justify-center items-center"
          onClick={() => router.push("/biydaalt")}
        >
          <Image src="/biydaalt.png" width={500} height={500} />
        </div>
        <div
          className="bg-gray-300 rounded-xl h-96 mx-5 my-5 hover:bg-blue-300 flex justify-center items-center"
          onClick={() => router.push("/mongolapi")}
        >
          <Image src="/deel.png" width={500} height={500} />
        </div>
      </div>
    </div>
  );
}
