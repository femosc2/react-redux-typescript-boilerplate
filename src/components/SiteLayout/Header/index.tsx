import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { IStore } from 'store';
import { Header } from './Header';
import { setCurrentTab } from './redux/actions';
import { compose } from 'recompose';

type Props =  ReturnType<typeof mapStateToProps> & ReturnType<typeof mapDispatchToProps>

const HeaderContainer: React.FC<Props> = () => {
  return (
    <Header />
  );
};

const mapStateToProps = (store: IStore) => {
  return {
    currentTab: store.header.tabs,
  };
};
  
const mapDispatchToProps = (dispatch: any) => {
  return bindActionCreators({
    setCurrentTab,
  }, dispatch);
};
  
export default compose<Props, Record<string, unknown>>(
  connect(mapStateToProps, mapDispatchToProps),
)(HeaderContainer);

