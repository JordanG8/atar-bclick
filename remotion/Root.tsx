import { Composition } from "remotion";
import { MyVideo } from "./MyVideo";

export const RemotionRoot: React.FC = () => {
  return (
    <>
      <Composition
        id="HeroVideo"
        component={MyVideo}
        durationInFrames={150} // 5 Seconds at 30 fps
        fps={30}
        width={1280}
        height={720}
      />
    </>
  );
};
