import React from 'react'
import RojaFazael from './RojaFazael/RojaFazael'
import Tarabih from './Tarabih/Tarabih'
import Sahri from './Sahri/Sahri'
import RojarNiyat from './RojarNiyat/RojarNiyat'
import Iftar from './Iftar/Iftar'
import RojaVangarKaron from './RojaVangarKaron/RojaVangarKaron'

function Roja() {
  return (
    <div>
      <RojaFazael/>
      <Tarabih/>
      <Sahri/>
      <RojarNiyat/> 
      <Iftar/>
      <RojaVangarKaron/>
    </div>
  )
}

export default Roja