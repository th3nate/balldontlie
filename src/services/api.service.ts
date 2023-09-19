import axios from 'axios';
import {ApiGetData} from '../types';

const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;

const apiService = axios.create({
  baseURL: API_BASE_URL,
});

export const getData: ApiGetData = async function getData<T>(
  endpoint: string,
  params: Record<string, any> = {},
): Promise<T[]> {
  try {
    const response = await apiService.get(endpoint, {params});
    return response.data?.data;
  } catch (error: any) {
    throw new Error(error);
  }
};