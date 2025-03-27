import { StyleSheet } from "react-native";
import { colors } from "./color";
import { fontFamily } from "./font-family";


export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.gray[100],
    fontFamily: fontFamily.bold,
    justifyContent: 'center',
    padding: 5,
    marginBottom: 0,
  },
  title:{
    fontSize: 24,
    fontFamily: fontFamily.bold,
    marginBottom: 30,
    color: colors.gray[500] ,
    textAlign: 'center',
    marginTop: 20,
  },
  input: {
    height: 50,
    backgroundColor:colors.gray[100],
    borderRadius: 8,
    color: colors.gray[500] ,
    fontSize: 16,
    width: '100%',
    borderColor: colors.gray[500],
    borderWidth: 1,
    marginBottom: 15,
    paddingLeft: 10,
  },
  button:{
    paddingVertical: 12,
    paddingHorizontal: 30,
    backgroundColor: colors.green.base,
    borderColor: colors.gray[100],
    borderRadius: 8,
    marginTop: 20,
    alignItems: 'center',
    borderWidth: 1,
  },
  buttonText:{
    color: colors.gray[200],
    fontSize: 32,
    fontFamily: fontFamily.bold,
  },
  listContainer: {
    flex: 1,
    backgroundColor: colors.gray[100],
    paddingHorizontal: 20,
    paddingVertical: 40,
    justifyContent: 'flex-start',
},
box: {
    backgroundColor: colors.gray[100],
    padding: 15,
    borderRadius: 8,
    marginBottom: 15,
    shadowColor: colors.green.dark,
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    borderWidth: 1,
    borderColor: colors.gray[200],
},
listText: {
    fontSize: 16,
    fontFamily: fontFamily.regular,
    color: colors.gray[500],
    marginBottom: 5,
},
label: {
    fontWeight: 'bold',
    fontFamily: fontFamily.bold,
    color: colors.gray[500],
},
transactions: {
  flex: 1,
  padding: 24,
  marginTop: 3,
},
header: {
  marginTop: 70,
  width: '100%',
  height: 40,
  //backgroundColor: colors.gray[200],
  alignItems: 'center',
  justifyContent: 'center',
},
});	