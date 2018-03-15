import { StyleSheet } from 'react-native';
import {colors} from "../../../../src/styles/material-ui-theme";

export default StyleSheet.create({
  inputContainer: {
    backgroundColor: 'transparent'
  },

  input: {
    top: 2,
    padding: 0,
    margin: 0,
    flex: 1,
    fontFamily: 'Raleway-Regular'
  },

  row: {
    flexDirection: 'row'
  },

  flex: {
    flex: 1
  },
  dateWrapper: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  dateFieldWrapper: {
    flex: 4
  },
  iconWrapper: {
    flex: 1
  },

  accessory: {
    top: 2,
    justifyContent: 'center',
    alignSelf: 'flex-start',
  },
});
