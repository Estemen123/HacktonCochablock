"use client"
import { useToken } from "@/hook/useToken";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import "@rainbow-me/rainbowkit/styles.css";

const Navbarcomponent = () => {
    const {
        data,
        formatedTotalSupply,
        isConnected,
        address,
        formatedBalanceOf,
    } = useToken();

    return (
        <nav className="w-full relative overflow-hidden">
            {/* Fondo con gradiente natural y glassmorphism */}
            <div className="absolute inset-0 bg-gradient-to-r from-emerald-50 via-green-50 to-teal-50"></div>
            
            {/* Elementos flotantes de fondo */}
            <div className="absolute top-0 left-10 w-20 h-20 bg-emerald-300/30 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute top-0 right-20 w-16 h-16 bg-orange-300/40 rounded-full blur-2xl animate-float"></div>
            <div className="absolute bottom-0 left-1/3 w-12 h-12 bg-teal-300/30 rounded-full blur-xl animate-sway"></div>
            
            {/* Glassmorphism overlay */}
            <div className="absolute inset-0 bg-white/80 backdrop-blur-sm border-b border-emerald-200/50 shadow-lg"></div>
            
            <div className="relative max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
                {/* Logo o título con estilo Eco-Premium */}
                <div className="flex items-center space-x-3">
                    <div className="flex items-center">
                        <span className="text-2xl font-bold bg-gradient-to-r from-emerald-600 via-green-600 to-teal-600 bg-clip-text text-transparent tracking-wide">
                            Civecoin
                        </span>
                    </div>
                </div>

                {/* Info del token con badges premium */}
                <ul className="hidden md:flex items-center space-x-4 text-sm">
                    <li className="bg-emerald-100/80 backdrop-blur-sm px-3 py-2 rounded-full border border-emerald-200/50 shadow-sm transition-all duration-300 hover:shadow-md hover:bg-emerald-100">
                        <span className="font-medium text-emerald-700">Name:</span>{" "}
                        <span className="text-emerald-800 font-semibold">
                            {data?.[0].result || "—"}
                        </span>
                    </li>
                    <li className="bg-green-100/80 backdrop-blur-sm px-3 py-2 rounded-full border border-green-200/50 shadow-sm transition-all duration-300 hover:shadow-md hover:bg-green-100">
                        <span className="font-medium text-green-700">Symbol:</span>{" "}
                        <span className="text-green-800 font-semibold">
                            {data?.[1].result || "—"}
                        </span>
                    </li>
                    <li className="bg-teal-100/80 backdrop-blur-sm px-3 py-2 rounded-full border border-teal-200/50 shadow-sm transition-all duration-300 hover:shadow-md hover:bg-teal-100">
                        <span className="font-medium text-teal-700">Supply:</span>{" "}
                        <span className="text-teal-800 font-semibold">
                            {Intl.NumberFormat("en-US").format(
                                Number(formatedTotalSupply)
                            )}{" "}
                            {data?.[1].result}
                        </span>
                    </li>

                    {isConnected && (
                        <li className="bg-gradient-to-r from-orange-100 to-amber-100 backdrop-blur-sm px-3 py-2 rounded-full border border-orange-200/50 shadow-sm transition-all duration-300 hover:shadow-md hover:from-orange-200 hover:to-amber-200 animate-pulse">
                            <span className="font-medium text-orange-700">Balance:</span>{" "}
                            <span className="text-orange-800 font-bold">
                                {Intl.NumberFormat("en-US").format(
                                    Number(formatedBalanceOf)
                                )}
                            </span>
                        </li>
                    )}
                </ul>

                {/* Botón conectar con glassmorphism verde */}
                <div className="relative">
                    <div className="absolute -inset-1 bg-gradient-to-r from-emerald-400 to-green-400 rounded-xl blur-sm opacity-30 animate-pulse"></div>
                    <div className="relative bg-white/90 backdrop-blur-sm rounded-xl border border-emerald-200/60 shadow-lg hover:shadow-emerald-200/50 hover:shadow-xl transition-all duration-300 p-0.5">
                        <div className="bg-gradient-to-r from-emerald-500 to-green-500 hover:from-emerald-600 hover:to-green-600 rounded-lg transition-all duration-300">
                            <ConnectButton />
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export { Navbarcomponent };
