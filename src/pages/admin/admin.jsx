import { AdminBox} from "./admin"

import Card from "../../components/parts/card/card.jsx"
import Modal from "../../components/parts/modal/modal.jsx"
import Post from "../../components/parts/post/post.jsx"


function Admin(){
  
    return(
        <section>
          <AdminBox>
            <Card/>
            <Modal/>
            <Post/>
          </AdminBox>
        </section>
    )
}

export default Admin