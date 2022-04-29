import {useEffect, useState} from "react";
import {Audio} from "expo-av";
import {Sounds} from "../constants/Sounds";

export default function usePlaySoundBossReady(slugBoos: string) {
    let [alertSoundState, changeAlertSoundPlaying] = useState(false);
    const [sound, setSound] = useState();

    async function playSoundBossReady() {
        if (!alertSoundState) {
            changeAlertSoundPlaying(true);
            // @ts-ignore
            const {sound} = await Audio.Sound.createAsync(Sounds(slugBoos));
            // @ts-ignore
            setSound(sound);
            await sound.playAsync();
        }
    }


    useEffect(() => {
        return sound
            ? () => {
                console.log('Unloading Sound');
                // @ts-ignore
                // sound.unloadAsync();
            }
            : undefined;
    }, [sound]);

    return [playSoundBossReady];
}
