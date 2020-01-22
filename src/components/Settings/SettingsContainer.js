import React from 'react';
import Settings from './Settings';
import {connect} from 'react-redux';

let mapStateToProps = (state) => {
	return {
		parametrs: state.settingParam.parametrs
	}
};

const SettingsContainer = connect(mapStateToProps)(Settings);

export default SettingsContainer;