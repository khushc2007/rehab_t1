'use client'
import {useState} from 'react'
import {SimFrame} from '@/types/lab.types'
const X=(t:number)=>t/10000*600,Y=(v:number)=>75-v/100*70
const line=(fr:SimFrame[])=>fr.map((f,k)=>`${k?'L':'M'}${X(f.t).toFixed(1)},${Y(f.emg).toFixed(1)}`).join(' ')
export default function EMGWaveform({a,b,color}:{a:SimFrame[];b:SimFrame[];color:string}){
 const [m,setM]=useState('Condition')
 return <div className="bg-white rounded-2xl p-5 border border-gray-100 shadow-sm"><div className="flex justify-between items-start"><div><div className="text-[12pt] font-bold text-gray-900">EMG SIGNAL</div><div className="text-[10pt] text-gray-500">Muscle activation during movement</div></div>
  <div className="flex gap-1">{['Condition','Reference','Both'].map(x=><button key={x} onClick={()=>setM(x)} className={`text-[9pt] rounded-full px-2.5 py-1 ${m===x?'bg-[#0F6E5E] text-white':'bg-gray-100 text-gray-600'}`}>{x}</button>)}</div></div>
  <svg viewBox="0 0 600 80" className="w-full mt-3 bg-[#fafafa] rounded-lg" preserveAspectRatio="none">{[25,50,75].map(v=><line key={v} x1="0" x2="600" y1={Y(v)} y2={Y(v)} stroke="#f3f4f6"/>)}
   {m!=='Condition'&&<path d={line(b)} fill="none" stroke="#d1d5db" strokeWidth="1" strokeDasharray="4 3" vectorEffect="non-scaling-stroke"/>}
   {m!=='Reference'&&<path d={line(a)} fill="none" stroke={color} strokeWidth="1.5" vectorEffect="non-scaling-stroke"/>}</svg></div>}
