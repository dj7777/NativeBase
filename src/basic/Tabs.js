import React, { Component } from 'react';
import { Platform } from 'react-native';
import ScrollableTabView from 'react-native-scrollable-tab-view';

import variables from '../theme/variables/platform';
import { connectStyle } from '@shoutem/theme';
import mapPropsToStyleNames from '../Utils/mapPropsToStyleNames';

class Tabs extends Component {
  static contextTypes = {
    theme: React.PropTypes.object,
  }

  render() {
    const variables = (this.context.theme) ? this.context.theme['@@shoutem.theme/themeStyle'].variables : variables;

    return (
      <ScrollableTabView
        ref={c => this._root = c} {...this.props}
        tabBarBackgroundColor={(Platform.OS === 'ios') ? undefined : variables.toolbarDefaultBg}
        tabBarInactiveTextColor={variables.tabBarActiveTextColor}
        tabBarActiveTextColor={variables.tabBarActiveTextColor}
        tabBarUnderlineStyle={{ backgroundColor: variables.tabBarActiveTextColor }}
      >
        {this.props.children}
      </ScrollableTabView>
    );
  }
}

Tabs.propTypes = {
  ...ScrollableTabView.propTypes,
  style: React.PropTypes.object,
};

const StyledTabs = connectStyle('NativeBase.Tabs', {}, mapPropsToStyleNames)(Tabs);

export {
  StyledTabs as Tabs,
};
