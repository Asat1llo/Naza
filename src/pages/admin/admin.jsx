import { AdminBox} from "./admin"

import Card from "../../components/card/card.jsx"
import Modal from "../../components/modal/modal.jsx"


function Admin(){
  
    return(
        <section>
          <AdminBox>
            <Card/>
            <Modal/>
          </AdminBox>
        </section>
    )
}

export default Admin