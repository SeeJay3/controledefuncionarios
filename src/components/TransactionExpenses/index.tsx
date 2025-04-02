import { View, Text } from 'react-native'

import { styles } from './styles';

import { RegisterStorageDTO }
  from "../../storage/register/RegisterStorageDTO";
import { inss } from '../../util/calcula';
import { irf } from '../../util/calcula';
import { salliq } from '../../util/calcula';

type Props = {
  data: RegisterStorageDTO
}


export function TransactionExpenses({ data }: Props) {
  return (
    <View style={styles.container}>
      <Text style={styles.cpf}>CPF: {data.cpf}</Text>
      <Text style={styles.name}>Nome: {data.name}</Text>
      <Text style={styles.funcao}>Função {data.funcao}</Text>
      <Text style={styles.section}>Departamento: {data.section}</Text>
      <View style={styles.footer}>
        <Text style={styles.salary}>Salário: {data.salary}</Text>        
        <Text style={styles.salary}>INSS: {inss(Number(data.salary))}</Text>        
        <Text style={styles.salary}>IRF: {irf(Number(data.salary))}</Text>      
        <Text style={styles.salary}>Salário Líquido: {salliq(Number(data.salary))}</Text>
      </View>
    </View>
  )
}

