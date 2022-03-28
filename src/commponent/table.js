import React, { Component } from 'react';
import { VictoryChart, VictoryLine, VictoryScatter } from 'victory';


  const cartesianInterpolations = [
    "basis",
    "bundle",
    "cardinal",
    "catmullRom",
    "linear",
    "monotoneX",
    "monotoneY",
    "natural",
    "step",
    "stepAfter",
    "stepBefore"
  ];
  
  const polarInterpolations = [
    "basis",
    "cardinal",
    "catmullRom",
    "linear"
  ];
  
  const InterpolationSelect = ({ currentValue, values, onChange }) => (
    <select onChange={onChange} value={currentValue} style={{ width: 75 }}>
      {values.map(
        (value) => <option value={value} key={value}>{value}</option>
      )}
    </select>
  );

class Tables extends Component {


        constructor() {
          super();
          this.state = {
            interpolation: "linear",
            polar: false
          };
        }
        render() {
            const data = this.props.datas;
  console.log(data);

          return (
            <div>
              <InterpolationSelect
                currentValue={this.state.interpolation}
                values={this.state.polar ? polarInterpolations : cartesianInterpolations }
                onChange={(event) => this.setState({ interpolation: event.target.value })}
              />
              <input
                type="checkbox"
                id="polar"
                value={this.state.polar}
                onChange={
                  (event) => this.setState({
                    polar: event.target.checked,
                    interpolation: "linear"
                  })
                }
                style={{ marginLeft: 25, marginRight: 5 }}
              />
              <label htmlFor="polar">polar</label>
              <VictoryChart polar={this.state.polar} height={390}>
                <VictoryLine
                  interpolation={this.state.interpolation} data={data}
                  style={{ data: { stroke: "#c43a31" } }}
                />
                <VictoryScatter data={data}
                  size={5}
                  style={{ data: { fill: "#c43a31" } }}
                />
              </VictoryChart>
            </div>
          );
        }
      }

export default Tables;