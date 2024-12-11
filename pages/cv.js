import React from "react";

export default function Home() {
    return (
        <div className="min-h-screen bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white font-sans flex items-center justify-center">
            <div>
                <h1 className="text-6xl font-extrabold text-center text-gradient mb-4">Enkhtugs Urantulga</h1>
                <p className="text-center text-xl">Nest IT School Student</p>
                <p className="text-center text-xl">95043080 | enkhtugs.ura@gmail.com</p>


                <section className="mb-8">
                    <h2 className="text-4xl font-semibold text-yellow-300 border-b border-yellow-400 pb-2">Summary</h2>
                    <p className="mt-2 text-lg">Student of Nest It School and interested in UI UX designer</p>
                </section>

                <section className="mb-8">
                    <h2 className="text-4xl font-semibold text-yellow-300 border-b border-yellow-400 pb-2">Skills</h2>
                    <ul className="mt-2 list-disc list-inside space-y-2 text-lg">
                        <li>HTML</li>
                        <li>CSS</li>
                        <li>JavaScript</li>
                    </ul>
                </section>


                <section className="mb-8">
                    <h2 className="text-4xl font-semibold text-yellow-300 border-b border-yellow-400 pb-2">Experience</h2>
                    <ul className="mt-2 space-y-4 text-lg">
                        <li>
                            <ul className="list-disc list-inside mt-2 space-y-1">
                                <li>Demo day 2021 "Terguun Bair"</li>
                                <li>Demo day 2022 "Terguun Bair"</li>
                                <li>Demo day 2023 "Amjilttai oroltssn"</li>
                            </ul>
                        </li>
                    </ul>
                </section>

                <section className="mb-8">
                    <h2 className="text-4xl font-semibold text-yellow-300 border-b border-yellow-400 pb-2">Projects</h2>
                    <ul className="mt-2 space-y-4 text-lg">
                        <li>
                            <p className="mt-1">Funny eyes toy</p>
                            <p className="mt-1">Dog feeder</p>
                        </li>
                    </ul>
                </section>

                <section className="mb-8">
                    <h2 className="text-4xl font-semibold text-yellow-300 border-b border-yellow-400 pb-2">Certifications</h2>
                    <ul className="mt-2 list-disc list-inside space-y-1 text-lg">
                        <li>Cyber Security</li>

                    </ul>
                </section>
            </div>
        </div>
    );
}
