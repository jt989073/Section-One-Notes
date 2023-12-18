import { useEffect, useState } from "react";
import './index.css'

const ServerData = () => {
  const [data, setData] = useState()
  useEffect(() => {
    const fetchFunc = async () => {
      let res = await fetch('https://fortnite-api.com/v2/news')
      if (res.ok) {
        res = await res.json()
        res = res.data.br.motds
        setData(res)
      }
    }
    fetchFunc()
  }, [])

  return (
    <div>
      {data && data.map(data => (
        <div className='serverContainer' key={data.id}>
          <h1 className='title'>{data.title}</h1>
          <h2 className='body'>{data.body}</h2>
          <img className='img' src={data.image} alt={data.title} />
        </div>
      ))}
    </div>
  );
};

export default ServerData;
