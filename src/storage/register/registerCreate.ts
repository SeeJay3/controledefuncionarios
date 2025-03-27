import AsyncStorage from "@react-native-async-storage/async-storage";

import { RegisterStorageDTO } from "./RegisterStorageDTO";

import { REGISTER_COLLECTION } from "../storageConfig";

import { registerGetAll } from "./registerGetAll";

export async function registerCreate(newRegister: RegisterStorageDTO) {
  try {
    const storeRegister = await registerGetAll()

    const storage = [...storeRegister, newRegister];

    await AsyncStorage.setItem(REGISTER_COLLECTION, JSON.stringify(storage));
  } catch (error) {
    throw error;
  }
}