// import './App.css'

const cards = [
    {
        title: "PLAN ANUAL DE CRECIMIENTO INSTITUCIONAL",
        description: "Este documento presenta la planificación estratégica del Instituto Politécnico para el periodo " +
            "2025-2031, enfocándose en la expansión académica y la sostenibilidad financiera.",
        file: "MV37 - PLAN DE CRECIMIENTO INSTITUCIONAL.pdf"
    },
    {
        title: "PLAN ANUAL DE TRABAJO",
        description: "El Plan Anual de Trabajo 2024 del IESAP es un instrumento de gestión operativa a corto plazo " +
            "que detalla las actividades, metas y estrategias institucionales para el año.",
        file: "PLAN ANUAL DE TRABAJO - PAT.pdf"
    },
    {
        title: "PROYECTO EDUCATIVO INSTITUCIONAL",
        description: "El PEI 2023-2029 del Instituto \"Alas Peruanas\" define la identidad, visión y misión de la " +
            "institución, orientando su gestión pedagógica y administrativa hacia un modelo constructivista y " +
            "humanista.",
        file: "PROYECTO EDUCATIVO INSTITUCIONAL - PEI.pdf:"
    },
    {
        title: "REGLAMENTO DE HOSTIGAMIENTO",
        description: "Este documento establece el marco normativo y los procedimientos del Instituto de Educación " +
            "Superior Privado \"Alas Peruanas\" para la prevención, atención y sanción del hostigamiento sexual.",
        file: "REGLAMENTO DE HOSTIGAMIENTO.pdf"
    }
];

function App() {
    return (
        <>
            <div className="min-prose bg-gray-50 min-h-screen pb-12 font-sans">
                {/* Hero Section */}
                <header className="relative h-64 md:h-80 overflow-hidden max-w-[1200px] mx-auto">
                    <img
                        src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=2000"
                        alt="Students collaborating"
                        className="w-full h-full object-cover"
                    />
                    <div
                        className="absolute inset-0 bg-gradient-to-r from-blue-600/80 to-transparent flex items-start p-8">
                        <div
                            className="bg-cyan-500 text-white p-4 font-bold text-xl md:text-2xl uppercase tracking-wider">
                            Portal de <br/> Transparencia
                        </div>
                    </div>
                </header>

                {/* Main Content */}
                <main className="max-w-6xl mx-auto px-4 -mt-10 relative z-10">
                    <h1 className="text-center text-2xl md:text-4xl font-black text-gray-800 mb-6 tracking-wide uppercase pt-4 py-8 pt-16">
                        Transparencia General
                    </h1>

                    <div className="flex flex-wrap justify-center gap-6">
                        {cards.map((card, index) => (
                            <a 
                                target="_blank" 
                                href={"/files/" + card.file} 
                                key={index} 
                                className="flex w-full md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)]"
                            >
                                <div
                                    className="bg-white p-6 shadow-lg border-t-4 border-purple-700 hover:shadow-xl transition-shadow cursor-pointer flex flex-col items-center text-center w-full h-full"
                                >
                                    <h2 className="text-purple-800 font-extrabold text-sm md:text-base mb-3 leading-tight uppercase">
                                        {card.title}
                                    </h2>
                                    <p className="text-gray-600 text-xs md:text-sm leading-relaxed">
                                        {card.description}
                                    </p>
                                </div>
                            </a>
                        ))}
                    </div>
                </main>

                {/* Footer Logo */}
                <footer className="mt-16 flex justify-center opacity-50">
                    <div className="text-center font-bold text-gray-400">
                        <span className="text-xs block font-normal uppercase">Instituto de Educación Superior Privado Alas Peruanas"</span>
                    </div>
                </footer>
            </div>
        </>
    )
}

export default App
