import './App.css';
import data from './data';
import React, { useEffect }  from 'react';
import _ from 'lodash';
import ReactExport from "react-export-excel";

const ExcelFile = ReactExport.ExcelFile;
const ExcelSheet = ReactExport.ExcelFile.ExcelSheet;
const ExcelColumn = ReactExport.ExcelFile.ExcelColumn;

class RandBoard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentMember: '',
      isSetup: false,
      timer: 5,
      delay: 50,
      isRandoming: false
    }
  }
  sleep(ms) {
    return new Promise(
      resolve => setTimeout(resolve, ms)
    );
  }
  async delayedRandom() {
    const items = this.props.members;
    if (items.length == 1) {
      return 0;
    }
    if (items.length < 1) {
      return null;
    }
    this.setState({ isRandoming: true });
    const timer = (this.state.timer * 1000) / this.state.delay;
    for (let i = 1; i <= timer; i++) {
      var rand = Math.floor(Math.random() * items.length);
      this.setState({
        currentMember: items[rand]
      })
      await this.sleep(this.state.delay);
    }
    this.setState({ isRandoming: false });
    return rand;
  }
  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }
  handleClickSetupCheckbox() {
    this.setState((state, props) => ({
      isSetup: !state.isSetup
    }));
  }
  handleRandomClick() {
    this.delayedRandom().then((value) => { this.props.handleRandomClick(value) });
  }
  render() {

    return (
      <div id="randBoard">
        <span>{this.props.members.length} member(s) left&nbsp;</span>
        <div>
          <button className={"buttonBG skewBtn lorange"} disabled={this.state.isRandoming} onClick={() => this.handleRandomClick()}>Random..</button>
        </div>
        <div id="randName" className={this.state.isRandoming ? "card cardActive" : "card"}>
          <p>Lucky Spin</p>
          <h2>{this.state.currentMember}</h2>
        </div>
        <br></br>
        <span>Random Setup&nbsp;</span>
        <span>
          <input type="checkbox" value={this.state.isSetup} onClick={() => this.handleClickSetupCheckbox()} />
        </span>
        <br></br>
        <div hidden={!this.state.isSetup}>
          <label htmlFor="timer">Timer (sec) </label>
          <input type="number" min="1" max="10" name="timer" id="timer" value={this.state.timer} onChange={(e) => this.handleChange(e)} /><br></br>
          <label htmlFor="delay">Delay (msec) </label>
          <input type="number" min="30" max="150" name="delay" id="delay" value={this.state.delay} onChange={(e) => this.handleChange(e)} /><br></br>
        </div>
        <br></br>
        <br></br>
      </div>
    );
  }
}
class ResultBoard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      teams: ['A', 'B', 'C', 'D', 'E', 'F'],
      rows: 6
    }
  }
  render() {
    const ths = this.state.teams.map((team, idx) => {
      return <th key={idx + 1}>{team}</th>
    })
    const arrTemp = new Array(this.state.rows).fill("");
    const length = this.state.rows;
    const tableObj = [];
    const trs = this.state.teams.map((team, idx) => {
      const rowObj = {};
      const tds = arrTemp.map((e, i) => {
        const keyIdx = i + (idx * length);
        const teamName = this.state.teams[i];
        const memName = this.props.randoms[keyIdx].toString();
        rowObj[teamName] = memName;
        return <td key={keyIdx}>{this.props.randoms[keyIdx]}</td>
      })
      tableObj.push(rowObj);
      return <tr key={idx + 1}>
        {tds}
      </tr>
    })
    const assignedList = this.props.assigned;
    return (<div id="resultBoard">
      <h1>The 6th SPU Football Season</h1>
      <table className={"styled-table"}>
        <thead>
          <tr>
            {ths}
          </tr>
        </thead>
        <tbody>
          {trs}
        </tbody>
      </table>
      <ExcelExport team_members={tableObj}></ExcelExport>
    </div>
    );
  }
}
class ExcelExport extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <ExcelFile element={<button className={"buttonBG skewBtn lorange"} id="excelExport">Excel Export</button>}>
        <ExcelSheet data={this.props.team_members} name="SPU Team Members">
          <ExcelColumn label="A" value="A" />
          <ExcelColumn label="B" value="B" />
          <ExcelColumn label="C" value="C" />
          <ExcelColumn label="D" value="D" />
          <ExcelColumn label="E" value="E" />
          <ExcelColumn label="F" value="F" />
        </ExcelSheet>
      </ExcelFile>
    );
  }
}

class TopBoard extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div id="topBoard">
        <RandBoard members={this.props.members} handleRandomClick={this.props.handleRandomClick}>
        </RandBoard>
        <ResultBoard assigned={this.props.assigned} randoms={this.props.randoms}>
        </ResultBoard>
      </div>
    );
  }
}
class SPUPlayerRandomer extends React.Component {
  constructor(props) {
    super(props);
    console.log(this.props.data.members);
    this.state = {
      data: this.props.data,
      randoms: new Array(36).fill(""),
      currentIdx: 0,
      currentListIdx: 0
    }
  }
  handleRandomClick(idx, e) {
    if (idx === null) {
      if (!this.state.currentListIdx < this.state.data.members.length - 1) {
        return;
      }
    }
    const rmv_e = _.remove(this.state.data.members[this.state.currentListIdx], function (n, i) {
      return i === idx;
    });
    this.state.data.assigned.unshift(rmv_e);
    this.state.randoms[this.state.currentIdx] = rmv_e;
    this.setState((state) => ({ currentIdx: state.currentIdx + 1 }));
    if (this.state.currentListIdx < this.state.data.members.length - 1 && this.state.data.members[this.state.currentListIdx].length === 0) {
      this.setState((state) => ({ currentListIdx: this.state.currentListIdx + 1 }))
    }
  }
  handleMemberListChange(idx, e) {
    this.state.data.members[idx] = e.target.value.split("\n")
    this.setState({
    });
  }
  render() {
    return (
      <div>
        <TopBoard members={this.state.data.members[this.state.currentListIdx]} handleRandomClick={(id) => this.handleRandomClick(id)} randoms={this.state.randoms}></TopBoard>
        <div id="randList">
          <div id="memberList1" className={"labelList memberList"}>
            <p>1st Mems List</p>
            <textarea rows="10" cols="35" value={this.state.data.members[0].join("\n")} onChange={(e) => this.handleMemberListChange(0, e)}>
            </textarea>
          </div>
          <div id="memberList2" className={"labelList memberList"}>
            <p>2nd Mems List</p>
            <textarea rows="10" cols="35" value={this.state.data.members[1].join("\n")} onChange={(e) => this.handleMemberListChange(1, e)}>
            </textarea>
          </div>
          <div id="memberList3" className={"labelList memberList"}>
            <p>3rd Mems List</p>
            <textarea rows="10" cols="35" value={this.state.data.members[2].join("\n")} onChange={(e) => this.handleMemberListChange(2, e)}>
            </textarea>
          </div>
          <div id="memberList4" className={"labelList memberList"}>
            <p>4th Mems List</p>
            <textarea rows="10" cols="35" value={this.state.data.members[3].join("\n")} onChange={(e) => this.handleMemberListChange(3, e)}>
            </textarea>
          </div>
          <div id="assignedList" className={"labelList memberList"}>
            <p>Assigned Mems List</p>
            <textarea rows="15" cols="35" value={this.state.data.assigned.join("\n")} readOnly={true}></textarea>
          </div>
        </div>
      </div>
    )
  }
}


const App = () => {
  // This effect runs once, after the first render
  useEffect(() => {
    document.title = "SPU Dashboard"
  }, [])
  
  return <SPUPlayerRandomer data={data}></SPUPlayerRandomer>
};

export default App;
