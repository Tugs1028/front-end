import { useRouter } from "next/router";

export default function Home(){
    const router = useRouter();
    return (
        <div>
            <h1 className="text-6xl font-bold text-center text-black mb-10 mt-5">Enkhtugs Next.JS</h1>
            <div className="grid grid-cols-2 gap-2">
              <button className="bg-gray-300 rounded-xl h-96 mx-5 my-5 hover:bg-blue-300" onClick={() => router.push('/cv')}>cv</button>
              <button className="bg-gray-300 rounded-xl h-96 mx-5 my-5 hover:bg-blue-300" onClick={() => router.push('/weather')}>weather</button>
              <button className="bg-gray-300 rounded-xl h-96 mx-5 my-5 hover:bg-blue-300" onClick={() => router.push('/search')}>search</button>
              <button className="bg-gray-300 rounded-xl h-96 mx-5 my-5 hover:bg-blue-300" onClick={() => router.push('/grid')}>grid</button>
            </div>
        </div>
    )
}