import SideDrawer from "./SideDrawer";

import { connect } from "react-redux";
import { Dispatch } from "redux";

import { toggleDrawer } from "../../actions";
import { IReduxStore } from "../../model/store";

interface IDispatchProps {
  toggleDrawer: () => void;
}

interface IStoreProps {
  isDrawerOpen: boolean;
}

export interface ISideDrawerContainerProps
  extends IStoreProps,
    IDispatchProps {}

const mapStoreToProps = (store: IReduxStore) => {
  return {
    isDrawerOpen: store.options.isDrawerOpen
  };
};

const mapDispatchToProps = (dispatch: Dispatch): IDispatchProps => ({
  toggleDrawer: () => dispatch(toggleDrawer())
});

const SideDrawerContainer = connect(
  mapStoreToProps,
  mapDispatchToProps
)(SideDrawer);

export default SideDrawerContainer;
