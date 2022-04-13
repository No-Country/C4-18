import "./filterBar.scss"
import { useEffect, useState } from "react";
// import { DateRange } from "react-date-range";
// import * as locales from "react-date-range/dist/locale";
import { PropertyProvider } from "../../../contexts/propertyContext";


export const FilterBar =()=>{
const {cityList} = PropertyProvider
    const [filtroPais, setFiltroPais] = useState()

useEffect(()=>{
    console.log(filtroPais)
    console.log(cityList)
},[cityList])


return(
    <form>
    <div className="filterBar">
      <div className="locationFilter">
        <div className="countryFilter">
          <h4>País</h4><select>
          {cityList ? (cityList.map((data)=>(<option value="grapefruit">Grapefruit</option>))):<></>}
          </select>
          <input type="text" placeholder="Pais" onChange={(e) => setFiltroPais(e.target.value)}/>
        </div>
        {/* <div className="cityFilter">
          <h4>Ciudad</h4>
          <input type="text" />
        </div> */}
      </div>
      <div className="dateFilter">
        {/* <DateRange
      locale={locales.es}
      showDate={true}
      showMonthAndYearPickers={false}
      showSelectionPreview={true}
        editableDateInputs={true}
        onChange={(item) => setState([item.selection])}
        moveRangeOnFirstSelection={false}
        ranges={state}
        rangeColors={['#611717', '#3ecf8e', '#fed14c']}
      /> */}
      </div>
      <div className="capacityFilter">
        <label htmlFor="huespedes">Huespedes</label>
        <input type="number" name="" id="" />
      </div>
      <button className="searchButton" type="submit">
        Buscar
      </button>
    </div>
  </form>


)
}
