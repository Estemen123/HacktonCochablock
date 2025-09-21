import { useAdminToken } from "@/hook/useToken";
import { TransferForm } from "./payForm";

const ContainerAdmin = ()=>{
    const{transfer} = useAdminToken();
    return (<div>
            <TransferForm/>
    </div>)
};

export {ContainerAdmin};