import { AdminBox } from "./admin"
import { useRef, useState, useEffect } from "react"

import Card from "../../components/parts/card/card.jsx"
import Modal from "../../components/parts/modal/modal.jsx"
import Post from "../../components/parts/post/post.jsx"


function Admin() {

  const [getitem, setGetitem] = useState()
  const [Onpen, setOnpen] = useState(false)
  const [loading, setLoading] = useState()
  const [takedata, setTakedata] = useState([])


  const Fetch = () => {
    fetch("https://64c9fecab2980cec85c2b76e.mockapi.io/movie/phone")
      .then((res) => res.json())
      .then((data) => setTakedata(data))
  }
  useEffect(() => {
       Fetch()
  },[loading])

  return (
    <section>
      <AdminBox>
        <Card takedata={takedata} setGetitem={setGetitem} setOnpen={setOnpen} />
        <Modal Onpen={Onpen} setOnpen={setOnpen} getitem={getitem} setLoading={setLoading} />
        <Post setLoading={setLoading}/>
      </AdminBox>
    </section>
  )
}

export default Admin