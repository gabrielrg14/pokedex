import axios from "axios"
import { API_URL } from "common"

export const api = axios.create({ baseURL: API_URL })
