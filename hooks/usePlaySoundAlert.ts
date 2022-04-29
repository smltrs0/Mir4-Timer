import {useEffect, useState} from "react";
import {Audio} from "expo-av";
import {Sounds} from "../constants/Sounds";

export default function usePlaySoundAlert() {
    let [alertSoundState, changeAlertSoundPlaying] = useState(false);
    const [sound, setSound] = useState();

    async function playSoundDefault() {
        if (!alertSoundState) {
            changeAlertSoundPlaying(true);
            const {sound} = await Audio.Sound.createAsync(Sounds());
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

    return [playSoundDefault];
}
