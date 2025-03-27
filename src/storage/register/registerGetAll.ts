import AsyncStorage from "@react-native-async-storage/async-storage"

import { RegisterStorageDTO } from "./RegisterStorageDTO"

import { REGISTER_COLLECTION } from "../storageConfig"

export async function registerGetAll() {
  try {
    const storage = await AsyncStorage.getItem(REGISTER_COLLECTION)
    const register: RegisterStorageDTO[] = storage ? JSON.parse(storage) : []
    return register
  } catch (error) {
    throw error
  }
}