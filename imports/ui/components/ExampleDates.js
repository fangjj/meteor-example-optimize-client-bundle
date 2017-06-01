import React from 'react';
import DateListGroupItem from './DateListGroupItem';
import PickDates from './PickDates';

class ExampleDates extends React.Component {
  constructor(props) {
    super(props);
    this.state = { dates: [] };
    this.addDates = this.addDates.bind(this);
    this.removeDate = this.removeDate.bind(this);
  }
  addDates(newDates) {
    console.log(newDates);
    this.setState({ dates: [...this.state.dates, newDates] });
  }
  removeDate(index) {
    this.setState({ dates: [
      ...this.state.dates.slice(0, index),
      ...this.state.dates.slice(index + 1),
    ] });
  }
  render() {
    return (
      <div>
        <PickDates onAddDates={this.addDates} />
        <hr />
        <div className="list-group">
          {this.state.dates.map((dates, index) => (
            <DateListGroupItem {...dates} key={index} index={index} remove={this.removeDate} />
          ))}
        </div>
      </div>
    );
  }
}
export default ExampleDates;
