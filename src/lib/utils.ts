import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"
import axios from "axios";

const httpsClient = axios.create({
  baseURL: import.meta.env.VITE_HOST_URL,
});

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}


export const onCloseApp = () => window.ipcRenderer.send("close-app");


export const fetchUserProfile = async (clerkId: string) => {
  const response = await httpsClient.get(`/auth/${clerkId}`, {
    headers: {
      "Content-Type": "application/json",
    },
  });
  return response.data;
};  
