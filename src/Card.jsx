import { useState } from 'react'

const Card = ({ item }) => {
  const [copied, setCopied] = useState(false)

  return (
    <div 
      onClick={() => {
        if (item.Se != null && item.Se.link != null) {
          if (item.Se.copy) {
            navigator.clipboard.writeText(`${item.Ti}\n${item.desc}`)
            setCopied(true)
            setTimeout(() => {
              setCopied(false)
            }, 1500);
          } else {
            window.open(item.Se.link, '_blank')
          }
        }
      }}
      className={"group overflow-hidden w-full max-w-[700px] mx-auto text-start px-6 py-4 rounded-md border shadow-sm shadow-slate-200 hover:lg:scale-110 transition-all duration-100" + (copied?" shadow-green-300 border-green-500":" border-slate-300")}
    >
      <div dir='auto' className='text-lg overflow-hidden'>{item.Ti}</div>
      <div dir='auto' className='text-slate-700 overflow-hidden group-hover:overflow-x-auto h-[calc(100%-16px)]'>{item.desc}</div>
    </div>
  )
}

export default Card
