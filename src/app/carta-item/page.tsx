import { AiFillExperiment } from "react-icons/ai";

export default function CartaItem(){

  const TEXTO:string = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus pulvinar arcu nibh, vel mattis sapien vestibulum ac. Sed dictum eu elit quis pharetra. Vestibulum vel nibh sed dolor placerat facilisis. Sed tincidunt placerat mattis. Vivamus pulvinar nisl eleifend purus imperdiet, ultricies porta nisi convallis. Cras tincidunt neque id feugiat sodales. Morbi enim odio, molestie convallis est vitae, iaculis fermentum nisi.';
  

  return(
    <div className="flex m-1.5 gap-1">

      <div className="flex flex-col gap-1 rounded-lg h-80 w-60 p-1.5 bg-amber-950 shadow-2xl" key='carta-div' > 
        
        {/* topo */}
        <div className="flex w-full h-4/5 bg-amber-700 rounded-t-sm p-1">
          
          <div className="flex gap-1 w-full h-full bg-amber-600 rounded-tl-sm p-1 text-white items-center justify-center">
            <div className="w-full items-center justify-center flex" >
              <AiFillExperiment size={80} color="black" className="w-2/3"/> 
            </div>
          </div>

          <div className="h-full w-6 ml-1 bg-amber-700">
            <div className="flex h-full w-full bg-amber-600 rounded-tr-sm items-center justify-center">
            </div> 
          </div>

        </div>
        
        {/* meio */}
        <div className="w-full h-1/5 relative">
           
          <div className="z-0 pt-1 pb-1 flex inset-0 h-10 bg-amber-700 shadow-md flag-shape items-center justify-center absolute left-5 mr-1 text-white">
            <div className="w-full h-full bg-amber-600 pl-10 pt-0.5 text-white overflow-hidden">
              <strong className="texto-script text-[14px]">Espelho de Aprisionamento</strong>
            </div>
          </div>
          
          <div className="h-10 w-10 bg-amber-900 rotate-45 rounded-sm ml-2 p-1 z-10 shadow-2xl">
            <div className="flex h-8 w-8 bg-amber-600 rounded-sm items-center justify-center">
              <label className="rotate-315 text-[10px] text-white">500</label>
              <label className="rotate-315 text-[10px] text-white">PO</label>
            </div>  
          </div>

        </div>
        
        {/* base */}
        <div className="w-full h-25 bg-amber-700 rounded-b-sm p-1">
          <div className="w-full h-full bg-amber-600 rounded-b-sm p-1 text-white  overflow-hidden text-justify text-[10px] texto-script">
            {TEXTO}
          </div>
        </div>

      </div>

      <div className="flex flex-col w-1/2 gap-0.5 text-white rounded-lg shadow-2xl bg-yellow-400">
      </div>
    </div>
  )
}