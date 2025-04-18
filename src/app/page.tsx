'use client';

import { AiFillDingtalkCircle, AiFillExperiment, AiFillHourglass, AiFillOpenAI, 
  AiFillSignal, AiOutlineClockCircle } from "react-icons/ai";
import { SiAeromexico } from "react-icons/si";
import { useRef, useState } from "react";

  // AiFillGitlab 
  // AiFillDingtalkCircle
  // AiOutlineGitlab 
  // RiBaiduLine 
  // TiBookmark 
  // SiAeromexico 
  // SiLazarus 
  // SiFurrynetwork

export default function Home() {

  const TEXTO:string = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus pulvinar arcu nibh, vel mattis sapien vestibulum ac. Sed dictum eu elit quis pharetra. Vestibulum vel nibh sed dolor placerat facilisis. Sed tincidunt placerat mattis. Vivamus pulvinar nisl eleifend purus imperdiet, ultricies porta nisi convallis. Cras tincidunt neque id feugiat sodales. Morbi enim odio, molestie convallis est vitae, iaculis fermentum nisi.';
  
  const [refTitulo, setTitulo]            = useState<string>('Bola de Fogo')
  const [refTexto, setTexto]              = useState<string>(TEXTO);
  const [refNivel, setNivel]              = useState<string>('1');
  const [refAlcance, setAlcance]          = useState<string>('10 metros');
  const [refTempo, setTempo]              = useState<string>('1 ação');
  const [refDuracao, setDuracao]          = useState<string>('10 turnos');
  const [refComponentes, setComponentes]  = useState<string>('V, S, M');
  
  return (
    <div>
    
      <div className="flex rounded-lg h-80 w-60 p-1 m-1.5 bg-emerald-700 border-1 border-emerald-800" key='carta-div' > 
        {/* <div className="flex flex-col rounded-sm w-full gap-1 bg-[url('/textura4.jpg')] bg-center bg-cover"  >  */}
        <div className="flex flex-col rounded-sm w-full gap-1 bg-[url('/textura4.jpg')] bg-center bg-cover border-1 border-emerald-800"  > 

          {/* cabecalho */}
          <div className="flex w-full h-18 pb-2 pt-2 pl-1 relative">

            <div className="h-16 w-16 rounded-full bg-emerald-700 p-1 shadow-xl z-10 border-1 border-emerald-800">
              <div className="flex h-14 w-14 rounded-full bg-emerald-100 justify-center items-center p-1 shadow-inner border-1 border-emerald-800">
                <SiAeromexico size={55} color="#11661c"/>
              </div>
            </div>

            <div className="flex inset-0 h-12 bg-emerald-50 border-4 border-emerald-700 shadow-md flag-spear-right items-center justify-center  absolute left-10 top-4 mr-1">
              <strong className="text-fit">{refTitulo}</strong>
            </div>

          </div>

          {/* texto */}{/*text-xs*/}
          <div className="h-2/3 pl-1 pr-1 pb-0.5 overflow-hidden">
            <div className="h-full w-full rounded-xs bg-emerald-700 p-1 shadow-lg  border-1 border-emerald-800">
              <div className="h-full w-full rounded-xs bg-emerald-50 p-1  border-1 border-emerald-800">
                <article className="h-full w-full overflow-hidden text-justify text-[10px]"> 
                    {refTexto}
                </article>
              </div>
            </div>
          </div>

          {/* atributos metagame */}
          <div className="h-1/3 pl-1 pr-1 pb-0.5 overflow-hidden">

            <div className="h-full w-full rounded-xs bg-emerald-700 p-1 shadow-lg border-1 border-emerald-800">
              <div className="h-full w-full rounded-xs bg-emerald-50 p-1 text-[8px] overflow-hidden grid grid-cols-2 border-1 border-emerald-800">
                
                <div className="flex gap-0.5 items-center">
                  <AiFillSignal size={14}/>
                  <label>Nível: {refNivel}</label>
                </div>
                <div className="flex gap-0.5 items-center">
                  <AiFillHourglass size={14}/>
                  <label>Tempo conjuração: {refTempo}</label>
                </div>
                <div className="flex gap-0.5 items-center">
                  <AiFillOpenAI size={14}/> 
                  <label>Alcance: {refAlcance}</label>
                </div>
                <div className="flex gap-0.5 items-center">
                  <AiFillExperiment size={14}/> 
                  <label>Componentes: {refComponentes}</label>
                </div>
                <div className="flex gap-0.5 items-center">
                  <AiOutlineClockCircle size={14}/>
                  <label>Duração: {refDuracao}</label>
                </div>
              </div>
            </div>
          </div>

        </div>      
      </div>

      <div className="texto-simples m-2 w-full" >
        <label>Titulo: </label>
        <input className="border-2 rounded-lg pl-2 pr-2" placeholder="Título" value={refTitulo} onChange={(e)=>setTitulo(e.target.value)}/>
        
        <br/><label>Texto: </label>
        <input className="border-2 rounded-lg pl-2 pr-2"placeholder="Texto" value={refTexto} onChange={(e)=>setTexto(e.target.value)}/>
        
        <br/><label>Nível: </label>
        <input className="border-2 rounded-lg pl-2 pr-2"placeholder="Nível" value={refNivel} onChange={(e)=>setNivel(e.target.value)}/>
        
        <br/><label>Tempo de conjuração: </label>
        <input className="border-2 rounded-lg pl-2 pr-2"placeholder="Tempo de conjuração" value={refTempo} onChange={(e)=>setTempo(e.target.value)}/>
        
        <br/><label>Alcance: </label>
        <input className="border-2 rounded-lg pl-2 pr-2"placeholder="Alcance" value={refAlcance} onChange={(e)=>setAlcance(e.target.value)}/>
        
        <br/><label>Duração: </label>
        <input className="border-2 rounded-lg pl-2 pr-2"placeholder="Duração" value={refDuracao} onChange={(e)=>setDuracao(e.target.value)}/>
        
        <br/><label>Componentes: </label>
        <input className="border-2 rounded-lg pl-2 pr-2"placeholder="Componentes" value={refComponentes} onChange={(e)=>setComponentes(e.target.value)}/>
        
      </div>      

  </div>
  );
}
