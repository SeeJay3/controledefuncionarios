import { useState, useEffect, useCallback } from 'react'
import { useFocusEffect } from '@react-navigation/native'
import { FlatList, View, Text } from 'react-native'
import { styles } from '../../styles/styles'
import { registerGetAll } from '../../storage/register/registerGetAll'
import { RegisterStorageDTO } from '../../storage/register/RegisterStorageDTO'
import { TransactionExpenses } from '../../components/TransactionExpenses'






export function Listagem() {
  const [dataExpenses, setDataExpenses] =
    useState<RegisterStorageDTO[]>([])

  async function loadDataSpending() {
    const data: RegisterStorageDTO[] = await registerGetAll()
    setDataExpenses(data)
  }

  useFocusEffect(useCallback(() => {
    loadDataSpending()
  }, []))

  return (
        <View style={styles.container}>
        <Text style={styles.title}>Listagem de Funcionários</Text>
      


      <View style={styles.transactions}>
        <FlatList
          data={dataExpenses}
          renderItem={({ item }) =>
            <TransactionExpenses data={item} />
          }
          showsVerticalScrollIndicator={false}
        />
      </View>

    </View>
  )
}