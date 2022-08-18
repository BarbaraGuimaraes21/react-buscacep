import React, { useState } from 'react'

const BuscaApiCep = () => {
    const [valorInput, setValorInput] = useState("");
    const [cep, setCep] = useState()
    function handleSetInput(target) {
        setValorInput(target.value)
    }

    async function handleRequisicao() {
        const url = `https://viacep.com.br/ws/${valorInput}/json`
        const response = await fetch(url)
        const json = await response.json()
        const resposta = {
            cep: json.cep,
            rua: json.logradouro,
            bairro: json.bairro,
            localidade: json.localidade,
            uf:json.uf
        }
        setCep(resposta)
        setValorInput('')
    }


}


export default BuscaApiCep