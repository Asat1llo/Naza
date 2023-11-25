import { FormBox , InputText , ButtonBtn } from "./form"


function Form(){
    return(
        <section>
             <FormBox>
                    <InputText type="text" placeholder="name"/>
                    <InputText type="number" placeholder="cost"/>
                    <InputText type="number" placeholder="rating"/>
                    <InputText type="img" placeholder="img"/>
                    <ButtonBtn>Click</ButtonBtn>
                </FormBox>
        </section>
    )
}


export default Form