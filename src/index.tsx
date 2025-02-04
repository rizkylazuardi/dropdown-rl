/* import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
 */

import SelectBoxComponent from "./components/selectbox/selectBox";
import { SelectObject } from "./components/selectbox/selectBoxModel";

const SelectBox = (props: SelectObject) => {
  return (
    <SelectBoxComponent {...props} />
  )
}
export { SelectBox };