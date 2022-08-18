import React from 'react'
import Button from '../Button/Button'
import Label from '../Label/Label'

const Form = () => {
  return (
    <form>
    <Label texto='Digite o CEP:' />
    <input type="texto"></input>
    <Button/>
    </form>
  )
}

export default Form