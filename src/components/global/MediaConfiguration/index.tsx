import { SourceDeviceStateProps } from '@/hooks/useMediaSources';
import React from 'react'

type Props = {  state: SourceDeviceStateProps;
    user:
      | ({
          subscription: {
            plan: "PRO" | "FREE";
          } | null;
          studio: {
            id: string;
            screen: string | null;
            camera: string | null;
            mic: string | null;
            plan: "PRO" | "FREE";
            preset: "HD" | "SD";
            userId: string;
          } | null;
        } & {
          id: string;
          email: string;
          firstName: string | null;
          lastName: string | null;
          createdAt: Date;
          clerkId: string;
        })
      | null;
  };

const MediaConfiguration = ({state ,user}: Props) => {
  const {} = useStudioSettings();
  return (
    <div>MediaConfiguration</div>
  )
}

export default MediaConfiguration