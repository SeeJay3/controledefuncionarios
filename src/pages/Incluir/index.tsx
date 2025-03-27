import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, View, TouchableOpacity } from 'react-native';
import { styles } from '../../styles/styles';
import { useState, useCallback } from 'react'
import { ScrollView } from 'react-native'
import { registerCreate } from '../../storage/register/registerCreate';
import { registerGetAll } from '../../storage/register/registerGetAll'
import AsyncStorage from '@react-native-async-storage/async-storage';
export function Incluir() {
  const [cpf, setCPF] = useState('')
  const [name, setName] = useState('')
  const [funcao, setFunction] = useState('')
  const [section, setSection] = useState('')
  const [salary, setSalary] = useState('')

  async function handleAddRegistration() {
    // Para limpar a lista
    // await AsyncStorage.clear()
    // alert("O programa será finalizado")
    // return;

    const data = {
      cpf,
      name,
      funcao,
      section,
      salary
    }

    console.log(data)

    await registerCreate(data)
    const result = await registerGetAll()
    console.log(result)

    setCPF('')
    setName('')
    setFunction('')
    setSection('')
    setSalary('')
  }

  return (
    <View style={styles.container}>
       <Text style={styles.title}>Cadastro de Funcionários</Text>
      <TextInput 
        style={styles.input} 
        placeholder='CPF'
        value={cpf}
        keyboardType='numeric'
        onChangeText={value => setCPF(value)}
        />
          
      <TextInput 
        style={styles.input}
        placeholder='Nome'
        value={name}
        onChangeText={value => setName(value)}
        />
      <TextInput 
        style={styles.input}
        placeholder='Função'
        value={funcao}
        onChangeText={value => setFunction(value)}
        />
      <TextInput 
        style={styles.input}
        placeholder='Seção'
        value={section}
        onChangeText={value => setSection(value)}
        />
        <TextInput 
        style={styles.input}
        placeholder='Salário'
        keyboardType='numeric'
        value={salary}
        onChangeText={value => setSalary(value)}
        />
      <StatusBar style="auto" />

      <TouchableOpacity style={styles.button} onPress={handleAddRegistration}>
        <Text style={styles.buttonText}>
            Adicionar
        </Text>
      </TouchableOpacity> 
    </View>
  );
}
