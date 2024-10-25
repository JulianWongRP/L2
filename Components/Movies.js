import React from 'react';
import {View, Text, Image} from 'react-native';
import Icon from "react-native-vector-icons/FontAwesome6";

const Movie = ({ title, year, icon_name, poster}) => {
    return (
        <View>
            <Image source={poster} style={{width:400, height:500}} />
            <Text> {title}, {year}</Text>
            <Icon name={icon_name} size={100} color="red" />
        </View>
    );
};



export default Movie;
