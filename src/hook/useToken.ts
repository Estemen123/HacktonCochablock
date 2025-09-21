import { erc20Abi, formatUnits, parseUnits } from "viem";
import { useAccount, useReadContracts, useWriteContract } from "wagmi";

const TOKEN_ADDRESS = "0x318bfE4910Bd7d2554F7354c1311E924B36B6A1e";
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
    console.log("BalanceOf:", data);
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
