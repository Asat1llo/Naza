import { AdminBox, AdminCradBox } from "./admin"
import { useRef, useState, useEffect } from "react"

import Card from "../../components/parts/card/card.jsx"
import Modal from "../../components/parts/modal/modal.jsx"
import Post from "../../components/parts/post/post.jsx"


function Admin() {

  const [takedata, setTakedata] = useState([])

  useEffect(() => {
    fetch("https://64c9fecab2980cec85c2b76e.mockapi.io/movie/phone")
      .then((res) => res.json())
      .then((data) => setTakedata(data))
  }, [])

  return (
    <section>
      <AdminBox>
        <AdminCradBox>
          <Card takedata={takedata} />
          <Modal />
        </AdminCradBox>
        <Post />
      </AdminBox>
    </section>
  )
}

export default Admin