import { useState, useRef, useEffect } from 'react'
import SearchArea from './SearchArea'
import Card from './Card.jsx'
import axios from 'axios'

const App = () => {
  const api = 'https://nl.arhsi.space/s.php'

  const [data, setData] = useState([])

  const [loading, setLoading] = useState(false)
  const [search, setSearch] = useState('')
  const [prevSearch, setPrevSearch] = useState('')
  const interval = useRef()

  const handleChange = (v) => {
    setSearch(v.target.value)
  }

  const getResponse = async (query) => {
    setLoading(true)
    try {
      const { data: response } = await axios.post(api, 
       {q: query}
      ); 
      setData(response);
    } catch (error) {
      console.log(error);
    }
    setTimeout(() => {
      setLoading(false)
    }, 500);
  }

  useEffect(() => {
    interval.current = setInterval(() => {
    if(search.length > 0 && search != prevSearch) {
        setPrevSearch(search)
            getResponse(search)
        }
    }, 1000);
    return () => {
        clearInterval(interval.current)
    }
  }, [search, prevSearch])
  
  useEffect(() => {
      if(!search) {
          setPrevSearch('')
          setData([])
      }
  }, [search])

  return (
    <>
      <div className={"container font-IranSans mx-auto text-center px-10 pb-8 transition-all duration-300"+(data.length!=0?" mt-[calc(25vh-26px)]" : " mt-[calc(50vh-53px)]")}>
        <SearchArea loading={loading} search={search} setSearch={setSearch} handleChange={handleChange} />
          <div className='flex gap-3 lg:gap-6 flex-col max-w-[800px] mx-auto'>
          {data.map((rows, n) => (
              <div key={n} className="flex flex-auto gap-3 lg:gap-6">
              {rows.map((item, k) => (
                <Card key={k} item={item} />
              ))}
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default App
