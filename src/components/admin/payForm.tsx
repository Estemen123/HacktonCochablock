import { useAdminToken } from "@/hook/useToken";

type FormValues = {
    wallet: string;
    cantidad: number;
    precio: number;
};

export default function TransferForm() {
    const { transfer } = useAdminToken();

    const handleSubmit = async (e: any) => {
    e.preventDefault(); 

    try {
      const formData = new FormData(e.currentTarget);
    console.log(formData);
    const wallet = formData.get("wallet") as `0x${string}`;
    const cantidad = formData.get("cantidad") as string;
    const precio = formData.get("precio") as string;
    console.log(cantidad);
      await transfer(String(precio), wallet);
    } catch (err) {
      console.error("Error en transfer:", err);
    } 
  };
   

    return (
        <form
            onSubmit={handleSubmit}
            className="max-w-md mx-auto p-6 bg-white rounded-xl shadow-md space-y-4"
        >
            <h2 className="text-xl font-bold text-gray-800 text-center">
                Transferir Tokens
            </h2>

            {/* Wallet */}
            <div>
                <label className="block text-sm font-medium text-gray-700">
                    Wallet
                </label>
                <input
                    name="wallet"
                    type="text"
                    placeholder="0x..."
                    className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                />
            </div>

            {/* Cantidad */}
            <div>
                <label className="block text-sm font-medium text-gray-700">
                    Cantidad
                </label>
                <input
                    name="cantidad"
                    type="number"
                    placeholder="Ej: 10"
                    className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                />
            </div>

            {/* Precio */}
            <div>
                <label className="block text-sm font-medium text-gray-700">
                    Precio
                </label>
                <input
                    name="precio"
                    type="number"
                    placeholder="Ej: 100"
                    className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                />
            </div>

            {/* Botón */}
            <button
                type="submit"
                className="w-full py-2 px-4 bg-indigo-600 text-white font-semibold rounded-lg shadow hover:bg-indigo-700 focus:outline-none disabled:bg-gray-400"
            >
                {"Transferir"}
            </button>
        </form>
    );
}
export { TransferForm };
