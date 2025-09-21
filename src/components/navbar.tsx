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
        <nav className="w-full bg-gray-900 text-white shadow-md border-b border-gray-800">
            <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
                {/* Logo o título */}
                <div className="flex items-center space-x-3">
                    <span className="text-xl font-bold">⚡ Token App</span>
                </div>

                {/* Info del token */}
                <ul className="hidden md:flex items-center space-x-6 text-sm">
                    <li className="text-gray-300">
                        <span className="font-medium">Name:</span>{" "}
                        {data?.[0].result || "—"}
                    </li>
                    <li className="text-gray-300">
                        <span className="font-medium">Symbol:</span>{" "}
                        {data?.[1].result || "—"}
                    </li>
                    <li className="text-gray-300">
                        <span className="font-medium">Supply:</span>{" "}
                        {Intl.NumberFormat("en-US").format(
                            Number(formatedTotalSupply)
                        )}{" "}
                        {data?.[1].result}
                    </li>

                    {isConnected && (
                        <li className="text-gray-300">
                            <span className="font-medium">Balance:</span>{" "}
                            {Intl.NumberFormat("en-US").format(
                                Number(formatedBalanceOf)
                            )}
                        </li>
                    )}
                </ul>

                {/* Botón conectar */}
                <ConnectButton />
            </div>
            <div></div>
        </nav>
    );
};

export { Navbarcomponent };
