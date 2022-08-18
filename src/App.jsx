import './App.css'
import BuscaApiCep from './components/BuscaApiCep/BuscaApiCep'
import Button from './components/Button/Button'
import Form from './components/Form/Form'
import Label from './components/Label/Label'

function App() {

  return (
    <div className="App">
    <Label/>
    <Form/>
    <BuscaApiCep/>
    <Button/>
    </div>
  )
}

export default App
