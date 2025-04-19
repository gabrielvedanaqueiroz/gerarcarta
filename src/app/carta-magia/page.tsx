'use client';

import { AiFillExperiment, AiFillHourglass, AiFillOpenAI, AiFillSignal, AiOutlineClockCircle } from "react-icons/ai";
import { SiAeromexico } from "react-icons/si";
import { useState } from "react";

  // AiFillGitlab 
  // AiFillDingtalkCircle
  // AiOutlineGitlab 
  // RiBaiduLine 
  // TiBookmark 
  // SiAeromexico 
  // SiLazarus 
  // SiFurrynetwork
  // GiAncientSword itens
  // GiBurningEye magia

export default function CartaMagia() {

  const TEXTO:string = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus pulvinar arcu nibh, vel mattis sapien vestibulum ac. Sed dictum eu elit quis pharetra. Vestibulum vel nibh sed dolor placerat facilisis. Sed tincidunt placerat mattis. Vivamus pulvinar nisl eleifend purus imperdiet, ultricies porta nisi convallis. Cras tincidunt neque id feugiat sodales. Morbi enim odio, molestie convallis est vitae, iaculis fermentum nisi.';
  
  const [refTitulo, setTitulo]            = useState<string>('Bola de Fogo')
  const [refTexto, setTexto]              = useState<string>(TEXTO);
  const [refNivel, setNivel]              = useState<string>('1');
  const [refAlcance, setAlcance]          = useState<string>('10 metros');
  const [refTempo, setTempo]              = useState<string>('1 ação');
  const [refDuracao, setDuracao]          = useState<string>('10 turnos');
  const [refComponentes, setComponentes]  = useState<string>('V, S, M');
  
  return (
    <div className="flex m-1.5 gap-1">
    
      <div className="flex flex-col w-1/2 gap-0.5 text-white rounded-lg shadow-2xl">

        <div className="flex flex-col bg-emerald-800 p-2 rounded-t-xl w-full shadow">
          <label className="text-sm">Título</label>
          <input className="outline-none text-lg transition-all 0.3s ease-in-out" placeholder="Título" value={refTitulo} onChange={(e)=>setTitulo(e.target.value)}/>
        </div>

        <div className="flex flex-col bg-emerald-800  p-2 rounded-sm w-full shadow h-45">
        <label className="text-sm">Texto</label>
          <textarea className="outline-none h-full resize-none overflow-hidden" placeholder="Texto" value={refTexto} onChange={(e)=>setTexto(e.target.value)}/>
        </div>

        <div className="flex flex-col bg-emerald-800 p-2 rounded-sm w-full shadow">
          <label className="text-sm">Nível</label>
          <input className="outline-none" placeholder="Nível" value={refNivel} onChange={(e)=>setNivel(e.target.value)}/>
        </div>

        <div className="flex flex-col bg-emerald-800 p-2 rounded-sm w-full shadow">
          <label className="text-sm">Tempo de conjuração</label>
          <input className="outline-none" placeholder="Tempo de conjuração" value={refTempo} onChange={(e)=>setTempo(e.target.value)}/>
        </div>

        <div className="flex flex-col bg-emerald-800  p-2 rounded-sm w-full shadow">
          <label className="text-sm">Alcance</label>
          <input className="outline-none" placeholder="Alcance" value={refAlcance} onChange={(e)=>setAlcance(e.target.value)}/>
        </div>

        <div className="flex flex-col bg-emerald-800 p-2 rounded-sm w-full shadow">
          <label className="text-sm">Duração</label>
          <input className="outline-none" placeholder="Duração" value={refDuracao} onChange={(e)=>setDuracao(e.target.value)}/>
        </div>

        <div className="flex flex-col bg-emerald-800 p-2 rounded-b-xl w-full shadow">
          <label className="text-sm">Componentes</label>
          <input className="outline-none" placeholder="Componentes" value={refComponentes} onChange={(e)=>setComponentes(e.target.value)}/>
        </div>
      </div>  

      <div className="flex rounded-lg h-80 w-60 p-1 bg-emerald-700 border-1 border-emerald-800 shadow-2xl" key='carta-div' > 
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
              <strong className="text-fit texto-script">{refTitulo}</strong>
            </div>

          </div>

          {/* texto */}{/*text-xs*/}
          <div className="h-2/3 pl-1 pr-1 pb-0.5 overflow-hidden">
            <div className="h-full w-full rounded-xs bg-emerald-700 p-1 shadow-lg  border-1 border-emerald-800">
              <div className="h-full w-full rounded-xs bg-emerald-50 p-1  border-1 border-emerald-800">
                <article className="h-full w-full overflow-hidden text-justify text-[10px] texto-script"> 
                    {refTexto}
                </article>
              </div>
            </div>
          </div>

          {/* atributos metagame */}
          <div className="h-1/3 pl-1 pr-1 pb-0.5 overflow-hidden">

            <div className="h-full w-full rounded-xs bg-emerald-700 p-1 shadow-lg border-1 border-emerald-800">
              <div className="texto-script h-full w-full rounded-xs bg-emerald-50 p-1 text-[8px] overflow-hidden grid grid-cols-2 border-1 border-emerald-800">
                
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

    </div>
  );
}
