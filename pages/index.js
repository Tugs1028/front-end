import { useRouter } from "next/router";

export default function Home(){
    const router = useRouter();
    return (
        <div className="bg-black">
            <h1 className="text-6xl font-bold text-center text-black mb-10 mt-5 text-white">Enkhtugs Next.JS</h1>
            <div className="grid grid-cols-2 gap-2">
              <div className="bg-gray-300 rounded-xl h-96 mx-5 my-5 hover:bg-blue-300 flex justify-center items-center" onClick={() => router.push('/cv')} >cv</div>
              <div className="bg-gray-300 rounded-xl h-96 mx-5 my-5 hover:bg-blue-300 flex justify-center items-center" onClick={() => router.push('/weather')}>weather</div>
              <div className="bg-gray-300 rounded-xl h-96 mx-5 my-5 hover:bg-blue-300 flex justify-center items-center" onClick={() => router.push('/search')}>search</div>
              <div className="bg-gray-300 rounded-xl h-96 mx-5 my-5 hover:bg-blue-300 flex justify-center items-center" onClick={() => router.push('/grid')}>grid</div>
              <div className="bg-gray-300 rounded-xl h-96 mx-5 my-5 hover:bg-blue-300 flex justify-center items-center" onClick={() => router.push('/biydaalt')}>biydaalt</div>
            </div>
        </div>
    )
}