"use client";

import "@rainbow-me/rainbowkit/styles.css";
import { Navbarcomponent } from "./navbar";
import { useToken } from "@/hook/useToken";

const HomePage = () => {
    const { isConnected } = useToken();

    return (
        <div className="min-h-screen relative overflow-hidden">
            {/* Fondo con gradiente natural */}
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-50 via-green-50 via-teal-50 to-emerald-100"></div>
            
            {/* Elementos flotantes de fondo */}
            <div className="absolute top-20 left-10 w-32 h-32 bg-emerald-300/20 rounded-full blur-3xl animate-float"></div>
            <div className="absolute top-40 right-20 w-24 h-24 bg-green-300/30 rounded-full blur-2xl animate-sway"></div>
            <div className="absolute bottom-20 left-1/4 w-20 h-20 bg-teal-300/25 rounded-full blur-xl animate-pulse"></div>
            <div className="absolute bottom-40 right-1/3 w-28 h-28 bg-orange-300/20 rounded-full blur-3xl animate-float"></div>
            
            <Navbarcomponent />
            
            {/* Contenido principal cuando no está conectado */}
            {!isConnected && (
                <div className="relative z-10 flex items-center justify-center min-h-[calc(100vh-80px)] px-6">
                    <div className="max-w-4xl mx-auto text-center">
                        {/* Tarjeta principal con glassmorphism */}
                        <div className="bg-white/80 backdrop-blur-sm rounded-3xl border border-emerald-200/50 shadow-2xl p-8 md:p-12 relative overflow-hidden">
                            {/* Efectos de brillo interno */}
                            <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-emerald-400 via-green-400 to-teal-400"></div>
                            <div className="absolute top-4 right-4 w-16 h-16 bg-emerald-400/20 rounded-full blur-xl animate-pulse"></div>
                            <div className="absolute bottom-4 left-4 w-12 h-12 bg-green-400/20 rounded-full blur-lg animate-sway"></div>
                            
                            {/* Contenido principal */}
                            <div className="relative z-10">
                                {/* Título principal */}
                                <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-emerald-600 via-green-600 to-teal-600 bg-clip-text text-transparent leading-tight">
                                    ¡Convierte tu Reciclaje en Valor Real!
                                </h1>
                                
                                {/* Subtítulo */}
                                <p className="text-xl md:text-2xl text-gray-700 mb-8 leading-relaxed">
                                    Conecta tu wallet y empieza a ganar <span className="font-bold text-emerald-600">Civecoins</span> por cada material reciclable que traigas
                                </p>
                                
                                {/* Beneficios */}
                                <div className="grid md:grid-cols-3 gap-6 mb-10">
                                    <div className="bg-emerald-100/60 backdrop-blur-sm rounded-2xl p-6 border border-emerald-200/40 hover:bg-emerald-100/80 transition-all duration-300 hover:shadow-lg">
                                        <div className="text-3xl mb-3 text-emerald-600">♻️</div>
                                        <h3 className="font-bold text-emerald-800 mb-2">Recicla Responsablemente</h3>
                                        <p className="text-emerald-700 text-sm">Trae tus materiales reciclables y contribuye al medio ambiente</p>
                                    </div>
                                    
                                    <div className="bg-green-100/60 backdrop-blur-sm rounded-2xl p-6 border border-green-200/40 hover:bg-green-100/80 transition-all duration-300 hover:shadow-lg">
                                        <div className="text-3xl mb-3 text-green-600">💰</div>
                                        <h3 className="font-bold text-green-800 mb-2">Gana Civecoins</h3>
                                        <p className="text-green-700 text-sm">Cada token tiene valor 1:1 con el boliviano</p>
                                    </div>
                                    
                                    <div className="bg-teal-100/60 backdrop-blur-sm rounded-2xl p-6 border border-teal-200/40 hover:bg-teal-100/80 transition-all duration-300 hover:shadow-lg">
                                        <div className="text-3xl mb-3 text-teal-600">🌱</div>
                                        <h3 className="font-bold text-teal-800 mb-2">Impacto Inmediato</h3>
                                        <p className="text-teal-700 text-sm">Recibe tus tokens instantáneamente en tu wallet</p>
                                    </div>
                                </div>
                                
                                {/* CTA principal */}
                                <div className="space-y-4">
                                    <p className="text-lg text-gray-600 font-medium">
                                        ¡Usa el botón "Connect Wallet" para empezar!
                                    </p>
                                    
                                    <p className="text-sm text-gray-500 max-w-md mx-auto">
                                        Una vez conectado, podrás ver tu balance de Civecoins y empezar a recibir tokens por tu actividad de reciclaje
                                    </p>
                                </div>
                            </div>
                        </div>
                        
                        {/* Estadísticas adicionales */}
                        <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4">
                            <div className="bg-white/60 backdrop-blur-sm rounded-xl p-4 border border-emerald-200/30">
                                <div className="text-2xl font-bold text-emerald-600">1:1</div>
                                <div className="text-sm text-emerald-700">Valor vs Boliviano</div>
                            </div>
                            <div className="bg-white/60 backdrop-blur-sm rounded-xl p-4 border border-green-200/30">
                                <div className="text-2xl font-bold text-green-600">100%</div>
                                <div className="text-sm text-green-700">Ecológico</div>
                            </div>
                            <div className="bg-white/60 backdrop-blur-sm rounded-xl p-4 border border-teal-200/30">
                                <div className="text-2xl font-bold text-teal-600">🏪</div>
                                <div className="text-sm text-teal-700">Puntos Físicos</div>
                            </div>
                            <div className="bg-white/60 backdrop-blur-sm rounded-xl p-4 border border-orange-200/30">
                                <div className="text-2xl font-bold text-orange-600">0%</div>
                                <div className="text-sm text-orange-700">Comisiones</div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
            
            {/* Contenido cuando está conectado */}
            {isConnected && (
                <div className="relative z-10 flex items-center justify-center min-h-[calc(100vh-80px)] px-6">
                    <div className="max-w-2xl mx-auto text-center">
                        <div className="bg-white/80 backdrop-blur-sm rounded-3xl border border-emerald-200/50 shadow-2xl p-8 relative overflow-hidden">
                            <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-emerald-400 via-green-400 to-teal-400"></div>
                            
                            <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-emerald-600 via-green-600 to-teal-600 bg-clip-text text-transparent">
                                ¡Wallet Conectada!
                            </h2>
                            
                            <p className="text-lg text-gray-700 mb-6">
                                Tu wallet está conectada exitosamente. Ahora puedes empezar a recibir Civecoins por tu actividad de reciclaje.
                            </p>
                            
                            <div className="bg-emerald-100/60 backdrop-blur-sm rounded-2xl p-6 border border-emerald-200/40">
                                <p className="text-emerald-800 font-medium">
                                    ¡Listo para ganar tokens! Ve a nuestros puntos de reciclaje y empieza a convertir tus materiales reciclables en Civecoins.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default HomePage;
