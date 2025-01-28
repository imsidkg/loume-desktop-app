import { updateStudioSettingsSchema } from "@/schemas/studio-setting-schema"
import { useZodForm } from "./useZodForm"

export const useStudioSettings = (  id: string,
    screen?: string | null,
    audio?: string | null,
    preset?: "HD" | "SD",
    plan?: "PRO" | "FREE") =>{
    const [onPreset , setOnPreset] = useState<'HD' | 'SD' | undefined>()
    const { register, watch } = useZodForm(updateStudioSettingsSchema, {
        // @ts-ignore
        screen: screen!,
        audio: audio!,
        preset: preset!,
      });
}