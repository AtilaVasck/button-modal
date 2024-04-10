
const ButtonModal = ({setModal, modal}) => { 
    return(
        <button onClick={() => setModal(!modal)}>
            {modal === true ? "Fechar modal" : "Abrir modal"}
        </button>
    )
}

export default ButtonModal;