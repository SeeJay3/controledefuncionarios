import { View, Text } from 'react-native'

import { styles } from './styles';

import { SpendingStorageDTO }
  from "../../storage/register/RegisterStorageDTO";

type Props = {
  data: SpendingStorageDTO
}

export function TransactionExpenses({ data }: Props) {
  return (
    <View style={styles.container}>
      <Text style={styles.cpf}>{data.cpf}</Text>
      <Text style={styles.name}>{data.name}</Text>
      <Text style={styles.funcao}>{data.funcao}</Text>
      <View style={styles.footer}>
        <Text style={styles.section}>{data.section}</Text>
        <Text style={styles.salary}>{data.salary}</Text>
      </View>
    </View>
  )
}