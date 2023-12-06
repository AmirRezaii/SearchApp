import loadingSpinner from './assets/loading.svg'
import xButton from './assets/xbutton.svg'

const SearchArea = ({ loading, search, setSearch, handleChange }) => {

  return (
    <div className="relative text-lg mx-auto mb-5 max-w-[800px]">
        <input dir={search? "auto" : "rtl"} type="text" value={search} onChange={handleChange} placeholder="جستجو کنید..." className="w-full px-16 py-3 border border-3xl border-slate-300 focus:outline-2 outline-slate-300 outline-offset-4 rounded-full" />
      <div className="absolute right-6 top-1/2 -translate-y-1/2 cursor-pointer">
        <svg className="w-8 h-8" aria-labelledby="title desc" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 19.9 19.7"><title id="title">Search Icon</title><desc id="desc">A magnifying glass icon.</desc><g className="search-path" fill="none" stroke="#848F91"><path strokeLinecap="square" d="M18.5 18.3l-5.4-5.4"/><circle cx="8" cy="8" r="7"/></g></svg>
      </div>
      <div className="flex flex-vertical gap-2 absolute left-4 top-1/2 -translate-y-1/2 cursor-pointer">
      { search && !loading? (<div className='bg-white/80' onClick={() => {setSearch('')}}>
          <img className='w-8 opacity-60' src={xButton}></img>
        </div>) : ''
      }
    {loading?( <div className='bg-white/80'>
          <img src={loadingSpinner} className='w-8 opacity-40'></img>
        </div> ) : ''}
      </div>
    </div>
  )
}

export default SearchArea
