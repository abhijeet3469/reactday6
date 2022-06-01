import React from 'react'
import Cards from '../components/Cards'
import data from '../Resources/data'

export default function Home() {
  return (
      <>
<h1 className='heading'>Top NetFlix Movies for Free 🔥</h1>
<ul className="cards">

{data.map((val) => {
  return <Cards name = {val.name} link={val.img_link}/>
})}

</ul>
      </>
  )
}
