import Etapas from "./ui/home/etapas";
import Origem from "./ui/home/origem";
import Servicos from "./ui/home/servicos";

export default function Page() {
  return (
    <div className="flex flex-col items-center">
      <Origem/>
      <div className='flex flex-col w-full items-center justify-center bg-blue-default'>
        <Servicos />
      </div>
     <Etapas/>
    </div>
  );
}
