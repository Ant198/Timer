import React from "react"
import Header from "./components/header/Header"
import Display from "./components/display/Display"
import TimerSettings from "./components/timerSettings/TimerSetting"

const App = function () {
  return (
    <div className="container">
      <Header />
      <Display />
      <TimerSettings />
    </div>
  );
};

export default App;
