import { connect } from "react-redux";
import { Dispatch } from "redux";
import { applyFilter } from "../actions/todos";

import FilterControls from "../components/FilterControls";
import { IReduxStore } from "../model/store";

export interface IFilterControlDispatch {
  applyFilter: (value: string) => void;
}

export interface IFilterControlProps {
  filterType: string;
}

const mapStateToProps = (store: IReduxStore): IFilterControlProps => {
  return {
    filterType: store.toDos.filterType
  };
};

const mapDispatchToProps = (dispatch: Dispatch): IFilterControlDispatch => ({
  applyFilter: (value: string) => dispatch(applyFilter(value))
});

const FilterControlContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(FilterControls);

export default FilterControlContainer;
