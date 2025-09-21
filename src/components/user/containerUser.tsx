const WelcomeCard = () => {
    return (
        <div className="flex  pt-8 min-h-[calc(50vh-80px)] px-6">
            <div className="max-w-2xl mx-auto text-center">
                <div className="bg-white/80 backdrop-blur-sm rounded-3xl border border-emerald-200/50 shadow-2xl p-8 relative ">

                    <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-emerald-600 via-green-600 to-teal-600 bg-clip-text text-transparent">
                        ¡Wallet Conectada!
                    </h2>

                    <p className="text-lg text-gray-700 mb-6">
                        Tu wallet está conectada exitosamente. Ahora puedes
                        empezar a recibir Civecoins por tu actividad de
                        reciclaje.
                    </p>

                    <div className="bg-emerald-100/60 backdrop-blur-sm rounded-2xl p-6 border border-emerald-200/40">
                        <p className="text-emerald-800 font-medium">
                            ¡Listo para ganar tokens! Ve a nuestros puntos de
                            reciclaje y empieza a convertir tus materiales
                            reciclables en Civecoins.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

const ContainerUser = () => {
  
    return (
        <div className="w-screen flex items-center justify-center bg-gray-50">
            <div className="relative  bg-white rounded-3xl p-8 shadow-2xl border-2 border-emerald-200 w-2xl">
                <h3 className="text-2xl font-bold text-emerald-800 mb-6 text-center">
                    🎁 Sistema de Bonos
                </h3>

                <div className="space-y-6">
                    <div className="bg-emerald-50 rounded-2xl p-6 border-2 border-emerald-200">
                        <div className="flex items-center justify-between mb-3">
                            <span className="text-emerald-700 text-sm font-medium">
                                Nivel Básico
                            </span>
                            <span className="bg-emerald-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                                +2 Tokens
                            </span>
                        </div>
                        <div className="text-emerald-800 text-lg font-semibold mb-2">
                            5kg acumulados
                        </div>
                        <div className="w-full bg-emerald-200 rounded-full h-3">
                            <div
                                className="bg-emerald-500 h-3 rounded-full"
                                style={{ width: "33%" }}
                            ></div>
                        </div>
                    </div>

                    <div className="bg-emerald-50 rounded-2xl p-6 border-2 border-emerald-200">
                        <div className="flex items-center justify-between mb-3">
                            <span className="text-emerald-700 text-sm font-medium">
                                Nivel Intermedio
                            </span>
                            <span className="bg-emerald-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                                +5 Tokens
                            </span>
                        </div>
                        <div className="text-emerald-800 text-lg font-semibold mb-2">
                            10kg acumulados
                        </div>
                        <div className="w-full bg-emerald-200 rounded-full h-3">
                            <div
                                className="bg-emerald-500 h-3 rounded-full"
                                style={{ width: "66%" }}
                            ></div>
                        </div>
                    </div>

                    <div className="bg-emerald-50 rounded-2xl p-6 border-2 border-emerald-200">
                        <div className="flex items-center justify-between mb-3">
                            <span className="text-emerald-700 text-sm font-medium">
                                Nivel Avanzado
                            </span>
                            <span className="bg-emerald-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                                +10 Tokens
                            </span>
                        </div>
                        <div className="text-emerald-800 text-lg font-semibold mb-2">
                            25kg acumulados
                        </div>
                        <div className="w-full bg-emerald-200 rounded-full h-3">
                            <div
                                className="bg-emerald-500 h-3 rounded-full"
                                style={{ width: "100%" }}
                            ></div>
                        </div>
                    </div>
                </div>

                <div className="mt-6 p-4 bg-emerald-100 rounded-xl border-2 border-emerald-300">
                    <p className="text-emerald-800 text-sm text-center">
                        � <strong>Bonos acumulativos:</strong> Mientras más
                        recicles, más bonos obtienes
                    </p>
                </div>
            </div>
        </div>
    );
}

export {ContainerUser,WelcomeCard};