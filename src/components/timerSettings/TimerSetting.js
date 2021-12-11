import React from "react"
import { FaPlus, FaMinus } from 'react-icons/fa'

function TimerSettings() {

  return(
    <aside class="set-column">
      <ul>
        <li class="prepare">
          prepare <span>00:10</span>
        </li>
        <li class="work">
          work <span>00:10</span>
        </li>
        <li class="rest">
          rest <span>00:10</span>
        </li>
        <li class="cycles">
          cycles <span>01</span>
        </li>
        <li class="tabata">
          tabatas <span>01</span>
        </li>
      </ul>
      <div class="setting-buttons">
        <button class="minus"><FaPlus /></button>
        <button class="plus"><FaMinus /></button>
      </div>
        <div class="start">start</div>
    </aside>
  )
}

export default TimerSettings