import { Dimensions, Image, SafeAreaView, ScrollView, StatusBar, StyleSheet } from 'react-native';

import { View } from '../components/Themed';
import { RootTabScreenProps } from '../types';
import React from 'react';
import { BosstData } from "../constants/BosData";
import BoosTimer from "../components/BoosTimer";

export default function TabOneScreen({ navigation }: RootTabScreenProps<'TabOne'>) {

    const dimensions = Dimensions.get('window');
    const imageHeight = Math.round(dimensions.width * 9 / 16);
    const imageWidth = dimensions.width;

    let listBosses = BosstData.map((boss, index) => {
        return <BoosTimer key={index} positionConfig={boss.position} time={boss.time} boosName={boss.name} slug={boss.slug} />
    });
    return (
        <ScrollView style={styles.scrollView}>
            <SafeAreaView style={styles.container}>
                <View style={styles.container}>
                    <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
                    <View style={{ backgroundColor: 'gray', position: 'relative' }}>
                        <Image
                            style={{ height: imageHeight, width: imageWidth, position: 'relative' }}
                            source={require('../assets/images/secret-peak.png')}
                        />
                        {listBosses}
                    </View>
                    {/*<EditScreenInfo path="/screens/TabOneScreen.tsx" />*/}
                </View>
            </SafeAreaView>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: StatusBar.currentHeight,
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    scrollView: {
        // backgroundColor: 'pink',
        marginHorizontal: 20,
    },
    text: {
        fontSize: 42,
    },
    separator: {
        marginVertical: 30,
        height: 1,
        width: '80%',
    },
});
