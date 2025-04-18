import { GiBurningEye, GiAncientSword, GiCardBurn, GiChameleonGlyph  } from "react-icons/gi";
import Link from "next/link";

/* 
GiCat 
GiChameleonGlyph 
GiChargingBull 
*/

export default function Home() {

  return (
    <div className="flex flex-col gap-1">
      
      <GiCardBurn size={24} color="black"/>
      <strong>Gerador de carta</strong>
      <label>escolha uma opção</label>
      
      <div className="flex gap-1 p-2 justify-center items-center">
        <Link href="/carta-magia">
          <button className="flex flex-col h-20 w-15 bg-orange-500 p-2 rounded-sm justify-center items-center">
            <GiBurningEye size={24} color="white"/>
            <label className="text-white">Magias</label>
          </button>
        </Link>

        <Link href="/carta-item">
          <button className="flex flex-col h-20 w-15 bg-amber-950 p-2 rounded-sm justify-center items-center">
            <GiAncientSword size={24} color="white"/>
            <label className="text-white">Itens</label>
          </button>
        </Link>

        <Link href="/carta-criatura">
          <button className="flex flex-col h-20 w-15 bg-emerald-800 p-2 rounded-sm justify-center items-center">
            <GiChameleonGlyph size={24} color="white"/>
            <label className="text-white">Criatura</label>
          </button>
        </Link>
      </div>

    </div>
  );
}
