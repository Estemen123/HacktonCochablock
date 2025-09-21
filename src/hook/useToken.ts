import { erc20Abi, formatUnits, parseUnits } from "viem";
import { useAccount, useReadContracts, useWriteContract } from "wagmi";

const TOKEN_ADDRESS = "0x8cbAEA78df7eAe94095a23ea46D72F8A536AD1fc";
const DECIMALS = 18;

const useToken = () => {
    const { address, isConnected } = useAccount();
    const {
        writeContractAsync,
        isPending,
        isSuccess,
        isError: transferIsError,
    } = useWriteContract();
    const { data, isLoading, isError, error } = useReadContracts({
        contracts: [
            {
                abi: erc20Abi,
                address: TOKEN_ADDRESS,
                functionName: "name",
            },
            {
                abi: erc20Abi,
                address: TOKEN_ADDRESS,
                functionName: "symbol",
            },
            {
                abi: erc20Abi,
                address: TOKEN_ADDRESS,
                functionName: "totalSupply",
            },
            {
                abi: erc20Abi,
                address: TOKEN_ADDRESS,
                functionName: "balanceOf",
                args: [address!],
            },
        ],
        query: {
            enabled: address !== undefined,
        },
    });

    let formatedTotalSupply = formatUnits(
        data?.[2].result || BigInt("0"),
        DECIMALS
    );
    let formatedBalanceOf = formatUnits(
        data?.[3].result || BigInt("0"),
        DECIMALS
    );
    return {
        data,
        formatedTotalSupply,
        isConnected,
        isSuccess,
        address,
        formatedBalanceOf,
        isPending,
        transferIsError,
    };
};

const useAdminToken = () => {
  const { address, isConnected } = useAccount(); // ✅ saber si está conectado
  const { writeContractAsync } = useWriteContract();

  const transfer = async (amount: string, wallet: `0x${string}`) => {
    console.log(wallet);
    if (!isConnected) {
      throw new Error("Debes conectar tu wallet antes de transferir.");
    }

    return await writeContractAsync({
      abi: erc20Abi,
      address: TOKEN_ADDRESS,
      functionName: "transfer",
      args: [wallet, parseUnits(amount, DECIMALS)],
    });
  };

  return { transfer, isConnected, address };
};

export {useToken,useAdminToken}
