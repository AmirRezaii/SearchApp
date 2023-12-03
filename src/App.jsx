import { useState, useRef, useEffect } from 'react'
import SearchArea from './SearchArea'
import Card from './Card.jsx'
import axios from 'axios'

const App = () => {
  const api = 'https://nl.arhsi.space/s.php'

  const [data, setData] = useState([
    [
      {Ti: 'welcome', desc: 'no'},
      {Ti: 'هلو', desc: 'no'},
    ],
    [
      {Ti: 'welcome', desc: 'none Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.'},
      {Ti: 'welcome', desc: "nooooooooooooooooooooooooooooooooooooooo"},
      {Ti: 'welcome', desc: 'no'},
      {Ti: 'welcome', desc: ''},
    ],
    [
      {Ti: 'welcome', desc: 'no'},
      {Ti: 'هلو', desc: 'no'},
      {Ti: 'welcome', desc: 'no'},
    ],
    [
      {Ti: 'welcome', desc: 'no'},
      {Ti: 'هلو', desc: 'no'},
      {Ti: 'welcome', desc: 'no'},
    ],
  ])

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
    // interval.current = setInterval(() => {
    //   if(search.length > 0 && search != prevSearch) {
    //     setPrevSearch(search)
    //     getResponse(search)
    //   }
    // }, 1000);

    // return () => {
    //   clearInterval(interval.current)
    // }
  }, [search, prevSearch])
  
  useEffect(() => {
      // if(!search) {
      //   setPrevSearch('')
      //   setData([])
      // }
  }, [search])

  return (
    <>
      <div className={"container font-IranSans mx-auto text-center px-10 pb-8 transition-all duration-300"+(data.length!=0?" mt-[calc(25vh-26px)]" : " mt-[calc(50vh-53px)]")}>
        <SearchArea loading={loading} search={search} setSearch={setSearch} handleChange={handleChange} />
        <div className='flex gap-6 flex-col max-w-[800px] mx-auto'>
          {data.map((i, n) => (
            <div key={n} className="flex flex-auto gap-6">
              {i.map((j, k) => (
                <Card key={k} i={j} />
              ))}
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default App
