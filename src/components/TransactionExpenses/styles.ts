import { StyleSheet } from "react-native"
import { colors } from "../../styles/color"
import { fontFamily } from "../../styles/font-family"

export const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.gray[300],
    borderRadius: 5,
    padding: 17,
    marginBottom: 14
  },
  cpf: {
    fontFamily: fontFamily.bold,
    fontSize: 14,
    color: colors.gray[500]
  },
  name: {
    fontFamily: fontFamily.bold,
    fontSize: 20,
    marginTop: 2,
    color: colors.gray[500]
  },
  funcao: {
    fontFamily: fontFamily.bold,
    fontSize: 14,
    marginTop: 2,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 19
  },
  section: {
    fontSize: 14,
    fontFamily: fontFamily.bold,
    color: colors.gray[500]
  },
  salary: {
    fontSize: 14,
    fontFamily: fontFamily.bold,
    color: colors.gray[500]
  }
})

