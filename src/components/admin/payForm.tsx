import { useAdminToken } from "@/hook/useToken";
import { useState } from "react";
import { toast } from "sonner";

type FormValues = {
    wallet: string;
    cantidad: number;
    precio: number;
};

export default function TransferForm() {
    const { transfer } = useAdminToken();
    const [loading, setLoading] = useState<boolean>(false);

    const handleSubmit = async (e: any) => {
        setLoading(true);
        e.preventDefault();
        try {
            const formData = new FormData(e.currentTarget);
            const precio = formData.get("precio") as string;
            const wallet = formData.get("wallet") as `0x${string}`;

            const payload = {
                wallet: formData.get("wallet") as string,
                producto: formData.get("producto") as string,
                cantidad: Number(formData.get("cantidad")),
                precio: Number(formData.get("precio")),
            };

            const res = await fetch("/api/sales", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(payload),
            });
            const data = await res.json();
            toast("Pago correcto ", {
                description: "Se realizo el pago correctamente. Celestia: " + data.celestia,
                action: {
                    label: "cerrar",
                    onClick: () => console.log("cerrar"),
                },
            });
            
            setLoading(false);
        } catch (err) {
            console.error("Error en transfer:", err);
        }
    };

    return (
        <div className="min-h-screen relative overflow-hidden bg-gradient-to-br from-emerald-50 via-green-50 via-teal-50 to-emerald-100 flex items-center justify-center p-6">
            {/* Elementos flotantes de fondo */}
            <div className="absolute top-20 left-10 w-32 h-32 bg-emerald-300/20 rounded-full blur-3xl animate-float"></div>
            <div className="absolute top-40 right-20 w-24 h-24 bg-green-300/30 rounded-full blur-2xl animate-sway"></div>
            <div className="absolute bottom-20 left-1/4 w-20 h-20 bg-teal-300/25 rounded-full blur-xl animate-pulse"></div>
            <div className="absolute bottom-40 right-1/3 w-28 h-28 bg-orange-300/20 rounded-full blur-3xl animate-float"></div>

            <form
                onSubmit={handleSubmit}
                className="relative max-w-lg w-full bg-white/80 backdrop-blur-sm rounded-3xl border border-emerald-200/50 shadow-2xl p-8 space-y-6"
            >
                {/* Barra superior decorativa */}
                <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-emerald-400 via-green-400 to-teal-400 rounded-t-3xl"></div>

                {/* Efectos de brillo interno */}
                <div className="absolute top-4 right-4 w-16 h-16 bg-emerald-400/10 rounded-full blur-xl animate-pulse"></div>
                <div className="absolute bottom-4 left-4 w-12 h-12 bg-green-400/10 rounded-full blur-lg animate-sway"></div>

                {/* Título */}
                <div className="text-center relative z-10">
                    <h2 className="text-3xl font-bold mb-2 bg-gradient-to-r from-emerald-600 via-green-600 to-teal-600 bg-clip-text text-transparent">
                        Pagar por Reciclaje
                    </h2>
                    <p className="text-emerald-700 text-sm font-medium">
                        Transfiere Civecoins por materiales reciclados
                    </p>
                </div>

                {/* Wallet */}
                <div className="relative z-10">
                    <label className="block text-sm font-semibold text-emerald-800 mb-2">
                        📱 Wallet del Usuario
                    </label>
                    <div className="relative">
                        <input
                            name="wallet"
                            type="text"
                            placeholder="0x..."
                            className="w-full px-4 py-3 bg-emerald-50/80 backdrop-blur-sm border border-emerald-200/60 rounded-xl text-emerald-900 placeholder-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:border-transparent transition-all duration-300 hover:bg-emerald-50"
                        />
                        <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-emerald-400/10 to-green-400/10 pointer-events-none"></div>
                    </div>
                </div>

                {/* Producto */}
                <div className="relative z-10">
                    <label className="block text-sm font-semibold text-amber-800 mb-2">
                        📦 Tipo de Producto
                    </label>
                    <div className="relative">
                        <input
                            name="producto"
                            type="text"
                            placeholder="Ej: Plástico, Cartón, Metal..."
                            className="w-full px-4 py-3 bg-amber-50/80 backdrop-blur-sm border border-amber-200/60 rounded-xl text-amber-900 placeholder-amber-500 focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-transparent transition-all duration-300 hover:bg-amber-50"
                        />
                        <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-amber-400/10 to-orange-400/10 pointer-events-none"></div>
                    </div>
                </div>

                {/* Cantidad en kg */}
                <div className="relative z-10">
                    <label className="block text-sm font-semibold text-green-800 mb-2">
                        ⚖️ Cantidad de Material
                    </label>
                    <div className="relative">
                        <input
                            name="cantidad"
                            type="number"
                            placeholder="Ej: 5.5"
                            step="0.1"
                            className="w-full px-4 py-3 pr-12 bg-green-50/80 backdrop-blur-sm border border-green-200/60 rounded-xl text-green-900 placeholder-green-500 focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-transparent transition-all duration-300 hover:bg-green-50"
                        />
                        <span className="absolute right-3 top-1/2 transform -translate-y-1/2 text-green-600 text-sm font-medium bg-green-100/80 px-2 py-1 rounded">
                            kg
                        </span>
                    </div>
                </div>

                {/* Tokens a transferir */}
                <div className="relative z-10">
                    <label className="block text-sm font-semibold text-teal-800 mb-2">
                        🪙 Tokens a Transferir
                    </label>
                    <div className="relative">
                        <input
                            name="precio"
                            type="number"
                            placeholder="Ej: 100"
                            step="0.01"
                            className="w-full px-4 py-3 pr-16 bg-teal-50/80 backdrop-blur-sm border border-teal-200/60 rounded-xl text-teal-900 placeholder-teal-500 focus:outline-none focus:ring-2 focus:ring-teal-400 focus:border-transparent transition-all duration-300 hover:bg-teal-50"
                        />
                        <span className="absolute right-3 top-1/2 transform -translate-y-1/2 text-teal-600 text-sm font-medium bg-teal-100/80 px-2 py-1 rounded">
                            CVC
                        </span>
                    </div>
                </div>

                {/* Información de conversión */}
                <div className="relative z-10 bg-gradient-to-r from-amber-50 to-orange-50 backdrop-blur-sm rounded-xl border border-amber-200/50 p-4">
                    <div className="flex items-center justify-center space-x-2 text-amber-800">
                        <span className="text-lg">💰</span>
                        <span className="text-sm font-medium">
                            1 Civecoin = 1 Bolíviano
                        </span>
                    </div>
                </div>

                {/* Botón de transferir */}
                <div className="relative z-10">
                    <div className="relative">
                        <div className="absolute -inset-1 bg-gradient-to-r from-emerald-400 to-green-400 rounded-xl blur-sm opacity-30 animate-pulse"></div>
                        <button
                            type="submit"
                            className="relative w-full py-4 px-6 bg-gradient-to-r from-emerald-500 to-green-500 hover:from-emerald-600 hover:to-green-600 text-white font-bold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:ring-offset-2"
                        >
                            <span className="flex items-center justify-center space-x-2">
                                {loading ? (
                                    <svg
                                        className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                    >
                                        <circle
                                            className="opacity-25"
                                            cx="12"
                                            cy="12"
                                            r="10"
                                            stroke="currentColor"
                                            strokeWidth="4"
                                        ></circle>
                                        <path
                                            className="opacity-75"
                                            fill="currentColor"
                                            d="M4 12a8 8 0 018-8v8H4z"
                                        ></path>
                                    </svg>
                                ) : (
                                    <>
                                        <span>🚀</span>{" "}
                                        <span>Transferir Civecoins</span>
                                    </>
                                )}
                            </span>
                        </button>
                    </div>
                </div>

                {/* Footer informativo */}
                <div className="relative z-10 text-center">
                    <p className="text-xs text-emerald-600">
                        ♻️ Incentivando el reciclaje responsable con tecnología
                        blockchain
                    </p>
                </div>
            </form>
        </div>
    );
}
export { TransferForm };
