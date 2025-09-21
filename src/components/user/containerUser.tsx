import { useState } from "react";

const WelcomeCard = () => {
     const [visible, setVisible] = useState(true);

  if (!visible) return null;
    return (
        <div className="min-h-screen relative overflow-hidden bg-gradient-to-br from-emerald-50 via-green-50 via-teal-50 to-emerald-100 flex items-center justify-center p-6">
            {/* Elementos flotantes de fondo */}
            <div className="absolute top-20 left-10 w-32 h-32 bg-emerald-300/20 rounded-full blur-3xl animate-float"></div>
            <div className="absolute top-40 right-20 w-24 h-24 bg-green-300/30 rounded-full blur-2xl animate-sway"></div>
            <div className="absolute bottom-20 left-1/4 w-20 h-20 bg-teal-300/25 rounded-full blur-xl animate-pulse"></div>
            <div className="absolute bottom-40 right-1/3 w-28 h-28 bg-orange-300/20 rounded-full blur-3xl animate-float"></div>

            <div className="relative max-w-4xl w-full bg-white/80 backdrop-blur-sm rounded-3xl border border-emerald-200/50 shadow-2xl p-8 space-y-8">
                {/* Barra superior decorativa */}
                <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-emerald-400 via-green-400 to-teal-400 rounded-t-3xl"></div>
                
                {/* Efectos de brillo interno */}
                <div className="absolute top-4 right-4 w-16 h-16 bg-emerald-400/10 rounded-full blur-xl animate-pulse"></div>
                <div className="absolute bottom-4 left-4 w-12 h-12 bg-green-400/10 rounded-full blur-lg animate-sway"></div>

                {/* Sección de Wallet Conectada */}
                <div className="relative z-10 text-center">
                    <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-emerald-600 via-green-600 to-teal-600 bg-clip-text text-transparent">
                        ¡Wallet Conectada! 🎉
                    </h2>
                    <p className="text-lg text-gray-700 mb-6 max-w-2xl mx-auto">
                        Tu wallet está conectada exitosamente. Ahora puedes empezar a recibir Civecoins por tu actividad de reciclaje.
                    </p>
                    
                    <div className="bg-gradient-to-r from-emerald-100/80 to-green-100/80 backdrop-blur-sm rounded-2xl p-6 border border-emerald-200/50 mb-6">
                        <p className="text-emerald-800 font-medium text-lg">
                            🚀 ¡Listo para ganar tokens! Ve a nuestros puntos de reciclaje y empieza a convertir tus materiales reciclables en Civecoins.
                        </p>
                    </div>
                </div>

                {/* Sistema de Bonos */}
                <div className="relative z-10">
                    <h3 className="text-3xl font-bold mb-6 text-center bg-gradient-to-r from-emerald-600 to-green-600 bg-clip-text text-transparent">
                        🎁 Sistema de Bonos Activo
                    </h3>

                    <div className="grid md:grid-cols-3 gap-6 mb-6">
                        {/* Papel */}
                        <div className="bg-gradient-to-br from-emerald-50/90 to-green-50/90 backdrop-blur-sm rounded-2xl p-6 border border-emerald-200/50 hover:shadow-lg transition-all duration-300 hover:scale-[1.02]">
                            <div className="flex items-center justify-between mb-4">
                                <div className="flex items-center space-x-2">
                                    <span className="text-2xl">📄</span>
                                    <span className="text-emerald-700 font-semibold">Papel</span>
                                </div>
                                <span className="bg-gradient-to-r from-emerald-500 to-green-500 text-white px-3 py-1 rounded-full text-sm font-bold shadow-lg">
                                    +2 CVC
                                </span>
                            </div>
                            <div className="text-emerald-800 text-xl font-bold mb-3">
                                5kg acumulados
                            </div>
                            <div className="w-full bg-emerald-200/60 rounded-full h-4 mb-2">
                                <div className="bg-gradient-to-r from-emerald-400 to-green-400 h-4 rounded-full transition-all duration-500" style={{ width: "33%" }}></div>
                            </div>
                            <p className="text-emerald-600 text-sm">Progreso: 33% hacia el siguiente bono</p>
                        </div>

                        {/* Plástico */}
                        <div className="bg-gradient-to-br from-green-50/90 to-teal-50/90 backdrop-blur-sm rounded-2xl p-6 border border-green-200/50 hover:shadow-lg transition-all duration-300 hover:scale-[1.02]">
                            <div className="flex items-center justify-between mb-4">
                                <div className="flex items-center space-x-2">
                                    <span className="text-2xl">🍃</span>
                                    <span className="text-green-700 font-semibold">Plástico</span>
                                </div>
                                <span className="bg-gradient-to-r from-green-500 to-teal-500 text-white px-3 py-1 rounded-full text-sm font-bold shadow-lg">
                                    +5 CVC
                                </span>
                            </div>
                            <div className="text-green-800 text-xl font-bold mb-3">
                                10kg acumulados
                            </div>
                            <div className="w-full bg-green-200/60 rounded-full h-4 mb-2">
                                <div className="bg-gradient-to-r from-green-400 to-teal-400 h-4 rounded-full transition-all duration-500" style={{ width: "66%" }}></div>
                            </div>
                            <p className="text-green-600 text-sm">Progreso: 66% hacia el siguiente bono</p>
                        </div>

                        {/* Vidrio */}
                        <div className="bg-gradient-to-br from-teal-50/90 to-emerald-50/90 backdrop-blur-sm rounded-2xl p-6 border border-teal-200/50 hover:shadow-lg transition-all duration-300 hover:scale-[1.02]">
                            <div className="flex items-center justify-between mb-4">
                                <div className="flex items-center space-x-2">
                                    <span className="text-2xl">💎</span>
                                    <span className="text-teal-700 font-semibold">Vidrio</span>
                                </div>
                                <span className="bg-gradient-to-r from-teal-500 to-emerald-500 text-white px-3 py-1 rounded-full text-sm font-bold shadow-lg">
                                    +10 CVC
                                </span>
                            </div>
                            <div className="text-teal-800 text-xl font-bold mb-3">
                                24kg acumulados
                            </div>
                            <div className="w-full bg-teal-200/60 rounded-full h-4 mb-2">
                                <div className="bg-gradient-to-r from-teal-400 to-emerald-400 h-4 rounded-full transition-all duration-500" style={{ width: "90%" }}></div>
                            </div>
                            <p className="text-teal-600 text-sm">Progreso: 90% hacia el siguiente bono</p>
                        </div>
                    </div>

                    {/* Información adicional */}
                    <div className="bg-gradient-to-r from-amber-50/80 to-orange-50/80 backdrop-blur-sm rounded-2xl p-6 border border-amber-200/50 mb-6">
                        <div className="flex items-center justify-center space-x-3 mb-3">
                            <span className="text-3xl">🏆</span>
                            <h4 className="text-amber-800 text-xl font-bold">Bonos Acumulativos</h4>
                        </div>
                        <p className="text-amber-700 text-center font-medium">
                            Mientras más recicles, más bonos obtienes. ¡Cada kilogramo cuenta para el planeta y tu wallet!
                        </p>
                    </div>

                    {/* Botón de cerrar */}
                    <div className="text-center">
                        <div className="relative inline-block">
                            <div className="absolute -inset-1 bg-gradient-to-r from-emerald-400 to-green-400 rounded-xl blur-sm opacity-30 animate-pulse"></div>
                            <button
                                onClick={() => setVisible(false)}
                                className="relative px-8 py-3 bg-gradient-to-r from-emerald-500 to-green-500 hover:from-emerald-600 hover:to-green-600 text-white font-bold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:ring-offset-2"
                            >
                                <span className="flex items-center space-x-2">
                                    <span>✨</span>
                                    <span>¡Comenzar a Reciclar!</span>
                                </span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

const ContainerUser = () => {
  
    return (
        <div className="min-h-screen relative overflow-hidden bg-gradient-to-br from-emerald-50 via-green-50 via-teal-50 to-emerald-100 flex items-center justify-center p-6">
            {/* Elementos flotantes de fondo */}
            <div className="absolute top-20 left-10 w-32 h-32 bg-emerald-300/20 rounded-full blur-3xl animate-float"></div>
            <div className="absolute top-40 right-20 w-24 h-24 bg-green-300/30 rounded-full blur-2xl animate-sway"></div>
            <div className="absolute bottom-20 left-1/4 w-20 h-20 bg-teal-300/25 rounded-full blur-xl animate-pulse"></div>
            <div className="absolute bottom-40 right-1/3 w-28 h-28 bg-orange-300/20 rounded-full blur-3xl animate-float"></div>

            <div className="relative max-w-4xl w-full bg-white/80 backdrop-blur-sm rounded-3xl border border-emerald-200/50 shadow-2xl p-8">
                {/* Barra superior decorativa */}
                <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-emerald-400 via-green-400 to-teal-400 rounded-t-3xl"></div>
                
                {/* Efectos de brillo interno */}
                <div className="absolute top-4 right-4 w-16 h-16 bg-emerald-400/10 rounded-full blur-xl animate-pulse"></div>
                <div className="absolute bottom-4 left-4 w-12 h-12 bg-green-400/10 rounded-full blur-lg animate-sway"></div>

                <h3 className="relative z-10 text-3xl font-bold mb-8 text-center bg-gradient-to-r from-emerald-600 to-green-600 bg-clip-text text-transparent">
                    🎁 Sistema de Bonos
                </h3>

                <div className="relative z-10 grid md:grid-cols-3 gap-6 mb-8">
                    {/* Papel */}
                    <div className="bg-gradient-to-br from-emerald-50/90 to-green-50/90 backdrop-blur-sm rounded-2xl p-6 border border-emerald-200/50 hover:shadow-lg transition-all duration-300 hover:scale-[1.02]">
                        <div className="flex items-center justify-between mb-4">
                            <div className="flex items-center space-x-2">
                                <span className="text-2xl">📄</span>
                                <span className="text-emerald-700 font-semibold">Papel</span>
                            </div>
                            <span className="bg-gradient-to-r from-emerald-500 to-green-500 text-white px-3 py-1 rounded-full text-sm font-bold shadow-lg">
                                +2 CVC
                            </span>
                        </div>
                        <div className="text-emerald-800 text-xl font-bold mb-3">
                            5kg acumulados
                        </div>
                        <div className="w-full bg-emerald-200/60 rounded-full h-4 mb-2">
                            <div className="bg-gradient-to-r from-emerald-400 to-green-400 h-4 rounded-full transition-all duration-500" style={{ width: "33%" }}></div>
                        </div>
                        <p className="text-emerald-600 text-sm">Progreso: 33%</p>
                    </div>

                    {/* Plástico */}
                    <div className="bg-gradient-to-br from-green-50/90 to-teal-50/90 backdrop-blur-sm rounded-2xl p-6 border border-green-200/50 hover:shadow-lg transition-all duration-300 hover:scale-[1.02]">
                        <div className="flex items-center justify-between mb-4">
                            <div className="flex items-center space-x-2">
                                <span className="text-2xl">🍃</span>
                                <span className="text-green-700 font-semibold">Plástico</span>
                            </div>
                            <span className="bg-gradient-to-r from-green-500 to-teal-500 text-white px-3 py-1 rounded-full text-sm font-bold shadow-lg">
                                +5 CVC
                            </span>
                        </div>
                        <div className="text-green-800 text-xl font-bold mb-3">
                            10kg acumulados
                        </div>
                        <div className="w-full bg-green-200/60 rounded-full h-4 mb-2">
                            <div className="bg-gradient-to-r from-green-400 to-teal-400 h-4 rounded-full transition-all duration-500" style={{ width: "66%" }}></div>
                        </div>
                        <p className="text-green-600 text-sm">Progreso: 66%</p>
                    </div>

                    {/* Vidrio */}
                    <div className="bg-gradient-to-br from-teal-50/90 to-emerald-50/90 backdrop-blur-sm rounded-2xl p-6 border border-teal-200/50 hover:shadow-lg transition-all duration-300 hover:scale-[1.02]">
                        <div className="flex items-center justify-between mb-4">
                            <div className="flex items-center space-x-2">
                                <span className="text-2xl">💎</span>
                                <span className="text-teal-700 font-semibold">Vidrio</span>
                            </div>
                            <span className="bg-gradient-to-r from-teal-500 to-emerald-500 text-white px-3 py-1 rounded-full text-sm font-bold shadow-lg">
                                +10 CVC
                            </span>
                        </div>
                        <div className="text-teal-800 text-xl font-bold mb-3">
                            24kg acumulados
                        </div>
                        <div className="w-full bg-teal-200/60 rounded-full h-4 mb-2">
                            <div className="bg-gradient-to-r from-teal-400 to-emerald-400 h-4 rounded-full transition-all duration-500" style={{ width: "90%" }}></div>
                        </div>
                        <p className="text-teal-600 text-sm">Progreso: 90%</p>
                    </div>
                </div>

                <div className="relative z-10 bg-gradient-to-r from-amber-50/80 to-orange-50/80 backdrop-blur-sm rounded-2xl p-6 border border-amber-200/50">
                    <div className="flex items-center justify-center space-x-3">
                        <span className="text-2xl">🏆</span>
                        <p className="text-amber-800 font-bold text-center">
                            Bonos acumulativos: Mientras más recicles, más bonos obtienes
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export {ContainerUser,WelcomeCard};