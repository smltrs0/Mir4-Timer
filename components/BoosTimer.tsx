import {CountdownCircleTimer} from 'react-native-countdown-circle-timer'
import React, {useState} from "react";
import {Pressable, StyleSheet, Text, View} from "react-native";
import usePlaySoundAlert from "../hooks/usePlaySoundAlert";
import usePlaySoundBossReady from "../hooks/usePlaySoundBossReady";


// @ts-ignore
export default function BoosTimer({time, positionConfig, boosName, slug}) {

    let [stateCounter, setStateCounter] = useState(false);
    let [completeChronometer, changeCompleteChronometer] = useState(false);
    let [playSoundDefault] = usePlaySoundAlert();
    let [playSoundBossReady] = usePlaySoundBossReady(slug);

    let toggleStateCounter = () => {
        setStateCounter(!stateCounter)
    }


    const setStateSound = (remainingTime: number) => {
        if (remainingTime === 15) playSoundDefault();
        if (completeChronometer && remainingTime === (time - 1)) setStateCounter(false);
    }

    const segToHorsMinSeg = (time: number) => {
        let hours = Math.floor(time / 3600);
        let minutes = Math.floor((time - (hours * 3600)) / 60);
        let seconds = time - (hours * 3600) - (minutes * 60);
        return {hours, minutes, seconds};
    }

    let styleText = StyleSheet.create({
        text: {
            fontWeight: 'bold',
            color: 'white',
            fontSize: 8,
            textAlign: 'center'
        },
        textCounter: {
            fontWeight: 'bold',
            color: 'white',
            fontSize: 12,
            textAlign: 'center'
        }
    });

    return (
        <>
            <View style={positionConfig}>
                <Pressable  onPress={() => { toggleStateCounter() }} >
                    <CountdownCircleTimer
                        strokeWidth={5}
                        isPlaying={stateCounter}
                        size={45}
                        initialRemainingTime={time}
                        duration={time}
                        colors={['#004777', '#F7B801', '#A30000', '#A30000']}
                        colorsTime={[(time), 5, 2, 0]}
                        onComplete={() => {
                            changeCompleteChronometer(true);
                            playSoundBossReady();
                            return {shouldRepeat: true}
                        }}
                        onUpdate={(remainingTime: number) => {
                            setStateSound(remainingTime);
                        }}
                    >
                        {({remainingTime}) => {
                            let {hours, minutes, seconds} = segToHorsMinSeg(remainingTime);
                            return <Text style={styleText.textCounter}>{`${(hours ? hours : '')}${(hours ? ':' : '')}${minutes}:${seconds}`}</Text>
                        }}
                    </CountdownCircleTimer>
                </Pressable>
                <Text style={styleText.text}>{boosName}</Text>
            </View>
        </>
    );
}
