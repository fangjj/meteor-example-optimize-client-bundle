import React from 'react';
import PropTypes from 'prop-types';
import { DateRangePicker, SingleDatePicker, DayPickerRangeController } from 'react-dates';

export default class MyDateRangePicker extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      focusedInput: null,
      startDate: null,
      endDate: null,
    };
  }
  submit = () => {
    this.props.onAddDates({
      startDate: this.state.startDate,
      endDate: this.state.endDate,
    });
  }
  render() {
    return (
      <div>
        <DateRangePicker
          startDate={this.state.startDate}
          endDate={this.state.endDate}
          onDatesChange={({ startDate, endDate }) => this.setState({ startDate, endDate })}
          focusedInput={this.state.focusedInput}
          onFocusChange={focusedInput => this.setState({ focusedInput })}
        />
        <button className="button button-primary" onClick={this.submit}>
          <i className="fa fa-plus" />
          Add
        </button>
      </div>
    );
  }
}
MyDateRangePicker.propTypes = {
  onAddDates: PropTypes.func.isRequired,
};
