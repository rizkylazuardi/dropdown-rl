import './App.css'
import SelectBox from './components/selectbox/selectBox'
import { colourOptions } from './data/dummy'
import SearchablePage from './pages/searchable/searchablePage'

function App() {

  return (
    <>
      <SelectBox options={colourOptions} name="color-select" multiple className="bg-green-500" />
      <SearchablePage isSearchable />
      {/* <div className="flex items-center justify-center min-h-screen w-4/5 bg-red-500">


      </div> */}
    </>
  )
}

export default App
