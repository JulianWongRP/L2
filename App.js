import React from 'react';
import {View, Text, Image} from 'react-native';
import Icon from "react-native-vector-icons/FontAwesome6";
import Movies from "./Components/Movies";
import { ScrollView } from 'react-native';


const AllMovies = () => {
    return(
        <View>
            <Movies
                title="Doctor-Sleep"
                year="2019"
                icon_name="skull"
                poster={require('./img/doctor-sleep.jpg')}
            />
            <Movies
                title="Midway"
                year="2020"
                icon_name="person-rifle"
                poster={require('./img/midway.jpg')}
            />
        </View>
    )
    }
const App = () => {
    return (
        <View>
            <ScrollView>
                <Text></Text>
                <Text></Text>
                <AllMovies/>
            </ScrollView>
        </View>
    );
};



export default App;
