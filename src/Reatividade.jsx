import React from "react"

const Reatividade = () => {

    const [items, setItems] =  React.useState(["Item 1","Item 2"])

    function handleClick(){
        // É a maneira ERRADA de adicionar itens
        items.push("Novo Item")
    }

    function handleClickReativo(){
        // É a maneira CORRETA de adicionar itens
        setItems([...items, "Novo item"])
    }

    return(
        <>
        {items.map((item, index) => (
            <li key={index}>{item}</li>
        ))}
        <button onClick={handleClickReativo}>Adicionar Item</button>
        </>
    )
}

export default Reatividade;