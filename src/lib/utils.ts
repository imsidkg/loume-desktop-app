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



export const getMediaSources = async () => {
  const displays = await window.ipcRenderer.invoke("getSources");
  const enumerateDevices = await navigator.mediaDevices.enumerateDevices();
  const audioInput = enumerateDevices.filter(
    (device) => device.kind === "audioinput"
  );
  console.log("getting");
  return { displays, audio: audioInput };
};

export const updateStudioSettings = async (
  id: string,
  screen: string,
  audio: string,
  preset: "HD" | "SD"
) => {
  const response = await httpsClient.post(
    `/studio/${id}`,
    {
      screen,
      audio,
      preset,
    },
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
  return response.data;
};
export const hidePluginWindow = (state: boolean) => {
  window.ipcRenderer.send("hide-plugin", { state });
};
