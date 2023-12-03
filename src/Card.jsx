import { useState } from 'react'

const Card = ({ i }) => {
  const [copied, setCopied] = useState(false)

  return (
    <div 
      onClick={() => {
        navigator.clipboard.writeText(`${i.Ti}\n${i.desc}`)
        setCopied(true)
        setTimeout(() => {
          setCopied(false)
        }, 1500);
      }}
      className={"group overflow-hidden w-full max-w-[700px] mx-auto text-start px-6 py-4 rounded-md border shadow-sm shadow-slate-200 hover:lg:scale-110 transition-all duration-100" + (copied?" shadow-green-300 border-green-500":" border-slate-300")}
    >
      <div dir='auto' className='text-lg'>{i.Ti}</div>
      <div dir='auto' className='text-slate-700 overflow-hidden group-hover:overflow-x-auto h-[calc(100%-16px)]'>{i.desc}</div>
    </div>
  )
}

export default Card
