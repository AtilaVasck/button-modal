import ButtonModal from "./ButtonModal"
import Modal from "./Modal"
import React from "react"

const App = () => {

    const [modal, setModal] =  React.useState(false)

    return(
        <>
        <ButtonModal modal={modal} setModal={setModal}/>
        <Modal modal={modal} setModal={setModal}/>
        </>
    )
}

export default App;