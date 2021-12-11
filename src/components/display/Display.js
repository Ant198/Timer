import React from "react"

function Display() {

  return(
    <main className="display">
      <div className="display-main">
        <p className="name">Tabata</p>
        <p className="timer">00 : 00</p>
      </div>
      <div className="display-cycles">
        <p className="timer">00</p>
        <p className="name">Cycles</p>
      </div>
      <div className="display-tabata">
        <p className="timer">00</p>
        <p className="name">Tabatas</p>
      </div>
    </main>
  )
}

export default Display