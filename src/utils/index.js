import {
    BackHandler,
    ViewPropTypes,
    BackAndroid as DeprecatedBackAndroid,
} from 'react-native';

const BackAndroid = BackHandler || DeprecatedBackAndroid;

export {
    ViewPropTypes,
    BackAndroid,
};
