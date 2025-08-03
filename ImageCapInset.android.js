import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, requireNativeComponent } from 'react-native';
import resolveAssetSource from 'react-native/Libraries/Image/resolveAssetSource';

class ImageCapInset extends Component {
  render() {
    const {
      children,
      source,
      capInsets,
      ...rest
    } = this.props;

    const normalizedSource = resolveAssetSource(source);

    return (
      <View {...rest}>
        <RCTImageCapInset
          style={{position: 'absolute', top: 0, left: 0, bottom: 0, right: 0}}
          capInsets={capInsets}
          source={normalizedSource}
          resizeMode={'stretch'}
        />
        {children}
      </View>
    );
  }
}

ImageCapInset.propTypes = {
  ...View.propTypes,
  source: PropTypes.oneOfType([
    PropTypes.shape({
      uri: PropTypes.string,
    }),
    PropTypes.number,
    PropTypes.arrayOf(
      PropTypes.shape({
        uri: PropTypes.string,
        width: PropTypes.number,
        height: PropTypes.number,
      })
    ),
  ]),
  capInsets: PropTypes.shape({
    top: PropTypes.number,
    left: PropTypes.number,
    right: PropTypes.number,
    bottom: PropTypes.number,
  }),
};

const RCTImageCapInset = requireNativeComponent('RCTImageCapInset', {
  propTypes: ImageCapInset.propTypes,
});

export default ImageCapInset;
