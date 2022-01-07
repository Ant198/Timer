import React from "react"
import { FaPlus, FaMinus } from 'react-icons/fa'

function TimerSettings() {

  return(
    <aside className="set-column">
      <ul>
        <li className="prepare">
          prepare <span>00:10</span>
        </li>
        <li className="work">
          work <span>00:10</span>
        </li>
        <li className="rest">
          rest <span>00:10</span>
        </li>
        <li className="cycles">
          cycles <span>01</span>
        </li>
        <li className="tabata">
          tabatas <span>01</span>
        </li>
      </ul>
      <div className="setting-buttons">
        <button className="minus"><FaPlus /></button>
        <button className="plus"><FaMinus /></button>
      </div>
        <div className="start">start</div>
    </aside>
  )
}

export default TimerSettings