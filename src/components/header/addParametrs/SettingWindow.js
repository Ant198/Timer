import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTimer } from '../../../festures/timerSlice';

function SettingWindow({ show }) {
  const timer = {
    nameTraining: '',
    prepareMinutes: '00',
    prepareSeconds: '00',
    workMinutes: '00',
    workSeconds: '00',
    restMinutes: '00',
    restSeconds: '00',
    cycles: '0',
    training: '0',
  };
  const [ timerData, setTimerData ] = useState(timer);
  const showHideClassName = show ? 'modal-show' : 'modal-hide';
  const stateReset = useSelector((state) => state.timer[0]);
  const dispatch = useDispatch();
  const setTimer = (event) => {
    event.preventDefault();
    let value = Number(event.target.value);
    if (isNaN(value) || event.target.name === "cycles" || event.target.name === "training") {
      setTimerData({ ...timerData, [event.target.name]: event.target.value });
    } else if (value < 10 ) {
      setTimerData({ ...timerData, [event.target.name]: `0${value}`})
    } else if (value < 60){
      setTimerData({ ...timerData, [event.target.name]: value + ''})
    } else {
      setTimerData({ ...timerData, [event.target.name]: '59'})
    }
  }
  const onSubmit = (event) => {
    event.preventDefault();
    dispatch(addTimer(timerData));
    console.log(stateReset)
    setTimerData({ ...timerData, stateReset});
  }

  return(
    <div className={showHideClassName}>
      <form className="modal-main" onSubmit={onSubmit}>
        <div>
          <label>Name</label>
          <input
            name="nameTraining"
            type="text" 
            value={timerData.nameTraining} 
            onChange={setTimer}
            />
        </div>
        <div>
          <label>Prepare</label>
          <input
            className="prepare"
            type="number"
            value={timerData.prepareMinutes}
            name="prepareMinutes"
            onChange={setTimer}
            onFocus={() => setTimerData({...timerData, prepareMinutes: '0'})}
          />:<input
            className="prepare"
            type="number"
            value={timerData.prepareSeconds}
            name="prepareSeconds"
            onChange={setTimer}
            onFocus={() => setTimerData({...timerData, prepareSeconds: '0'})}
          />
        </div>
        <div>
          <label>work</label>
          <input
            className="work"
            type="number"
            name="workMinutes"
            value={timerData.workMinutes}
            onChange={setTimer}
            onFocus={() => setTimerData({...timerData, workMinutes: '0'})}
          />:<input
            className="work"
            type="number"
            name="workSconds"
            value={timerData.workSeconds}
            onChange={setTimer}
            onFocus={() => setTimerData({...timerData, workSeconds: '0'})}
          />
        </div>
        <div>
          <label>rest</label>
          <input
            className="rest"
            type="number"
            value={timerData.restMinutes}
            name="restMinutes"
            onChange={setTimer}
            onFocus={() => setTimerData({...timerData, restMinutes: '0'})}
          />:<input
            className="rest"
            type="number"
            name="restSeconds"
            value={timerData.restSeconds}
            onChange={setTimer}
            onFocus={() => setTimerData({...timerData, restSeconds: '0'})}
          />
        </div>
        <div>
          <label>cycles</label>
          <input
            type="number"
            name="cycles"
            onChange={setTimer}
            onFocus={() => setTimerData({...timerData, cycles: ''})}
            value={timerData.cycles}
            />
        </div>
        <div>
          <label>training</label>
          <input
            type="number"
            name="training"
            onChange={setTimer}
            onFocus={() => setTimerData({...timerData, training: ''})}
            value={timerData.training} />
        </div>
        <input type="submit" value="onsubmit"/>
      </form> 
    </div>
  )
}

export default SettingWindow