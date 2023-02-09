import * as React from 'react';
import { Text, View } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/Material-top-tabs';
import HomeScreen from '../screens/HomeScreen'
import WallpapersScreen from '../screens/WallpapersScreen'
import ThreeDRendersScreen from '../screens/ThreeDRendersScreen'
import TravelScreen from '../screens/TravelScreen'
import NatureScreen from '../screens/NatureScreen'
import StreetPhotographyScreen from '../screens/StreetPhotographyScreen'
import ExperimentalScreen from '../screens/ExperimentalScreen'
import TexturesAndPatternsScreen from '../screens/TexturesAndPatternsScreen'
import AnimalsScreen from '../screens/AnimalsScreen'
import ArchitectureAndInteriorsScreen from '../screens/ArchitectureAndInteriorsScreen'
import FashionAndBeautyScreen from '../screens/FashionAndBeautyScreen'
import FilmScreen from '../screens/FilmScreen'
import FoodAndDrinkScreen from '../screens/FoodAndDrinkScreen'
import PeopleScreen from '../screens/PeopleScreen'
import SpiritualityScreen from '../screens/SpiritualityScreen'
import BusinessAndWorkScreen from '../screens/BusinessAndWorkScreen'
import AthleticsScreen from '../screens/HomeScreen'
import HealthAndWellnessScreen from '../screens/HealthAndWellnessScreen'
import CurrentEventsScreen from '../screens/CurrentEventsScreen'
import ArtsAndCultureScreen from '../screens/ArtsAndCultureScreen'

const Tab = createMaterialTopTabNavigator();

function TopNavigator() {
    return(
        <Tab.Navigator
        screenOptions={{ tabBarScrollEnabled: true,tabBarIndicatorStyle:{
            backgroundColor:"blue",
            height:8,
           
        } }}
        sceneContainerStyle={{ backgroundColor: "white" }}
        >
        <Tab.Screen name="Editorial" component={HomeScreen} />
        <Tab.Screen name="Wallpapers" component={WallpapersScreen} />
        <Tab.Screen name="3D Renders" component={ThreeDRendersScreen} />
        <Tab.Screen name="Travel" component={TravelScreen} />
        <Tab.Screen name="Nature" component={NatureScreen} />
        <Tab.Screen name="Street Photography" component={StreetPhotographyScreen} />
        <Tab.Screen name="Experimental" component={ExperimentalScreen} />
        <Tab.Screen name="Textures & Patterns" component={TexturesAndPatternsScreen} />
        <Tab.Screen name="Animals" component={AnimalsScreen} />
        <Tab.Screen name="Architecture & Interiors" component={ArchitectureAndInteriorsScreen} />
        <Tab.Screen name="Fashion & Beauty" component={FashionAndBeautyScreen} />
        <Tab.Screen name="Film" component={FilmScreen} />
        <Tab.Screen name="Food & Drink" component={FoodAndDrinkScreen} />
        <Tab.Screen name="People" component={PeopleScreen} />
        <Tab.Screen name="Spirituality" component={SpiritualityScreen} />
        <Tab.Screen name="Business & Work" component={BusinessAndWorkScreen} />
        <Tab.Screen name="Athletics" component={AthleticsScreen} />
        <Tab.Screen name="Health & Wellness" component={HealthAndWellnessScreen} />
        <Tab.Screen name="Current Events" component={CurrentEventsScreen} />
        <Tab.Screen name="Arts & Culture" component={ArtsAndCultureScreen} />
      </Tab.Navigator>
    )
}

export default TopNavigator