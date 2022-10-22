import AppLoading from 'expo-app-loading';
import { StyleSheet, Text, View, StatusBar, SafeAreaView, Platform, Image } from 'react-native';
import { useFonts } from 'expo-font';
import { Themes } from './assets/Themes';
import { Icons } from './assets/Themes'
import { ImageBackground } from 'react-native';
import { backgroundColor } from 'react-native/Libraries/Components/View/ReactNativeStyleAttributes';

export default function App() {
  let [fontsLoaded] = useFonts({
    Sydney: require('./assets/Fonts/Sydney-Serial-Regular.ttf'),
    SydneyBold: require('./assets/Fonts/Sydney-Serial-Bold.ttf'),
  });
  if (!fontsLoaded) return <AppLoading />;
  /* ^Don't mind/edit the code above, it's there to load the font for you! */
  StatusBar.setBarStyle(Themes.light.statusBar);
  
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.nav_bar}>
        <Image
          style={styles.menu_icon}
          source={require('./assets/Icons/menu_light.png')}/>
        <Text
          style={styles.app_name}>
            ensom
        </Text>
        <Image
          style={styles.light_dark_icons}
          source={require('./assets/Icons/sun.png')}/>
      </View>

      <View style={styles.profile_box}>
        <View style={styles.profile_img_group}>
          <ImageBackground 
              style={styles.profile_img}
              source={require('./assets/Profiles/mtl.jpg')}
              imageStyle={{borderRadius: 10}}>
              <View
                style={{position: 'absolute', top: 0, left: 0}}>
                <Text
                  style={styles.profile_name}>
                    MTL
                </Text>
              </View>
              <View
                style={{position: 'absolute', bottom: 0, left: 0}}>
                <Text
                  style={styles.profile_distance}>
                    2 miles away
                </Text>
              </View>
          </ImageBackground>
        </View>
        
        <View style={styles.hot_take}>
          <Text style={styles.hot_take_text}>
            My hottest take
          </Text>
          <View style={styles.audio_box}>
            <Image
              style={styles.player_icon}
              source={require('./assets/Icons/player_light.png')}/>
            <Image
              style={styles.audio_icon}
              source={require('./assets/Icons/audio_waveform_light.png')}/>
          </View>
        </View>
      </View>

      <View style={styles.bottom_action_bar}>
        <View style={styles.discover_flex}>
          <Image
            style={styles.discover_icon}
            source={require('./assets/Icons/discover_light.png')}/>
          <Text
            style={{
              fontFamily: 'Sydney',
              color: Themes.light.textSecondary,
            }}>
            Discover
          </Text>
        </View>
        <View style={styles.matches_flex}>
          <Image
            style={styles.matches_icon}
            source={require('./assets/Icons/heart_light.png')}/>
          <Text
            style={{
              fontFamily: 'Sydney',
              color: Themes.light.textSecondary,
            }}>
            Matches
          </Text>
        </View>
        <View style={styles.dms_flex}>
          <Image
            style={styles.dms_icon}
            source={require('./assets/Icons/messages_light.png')}/>
          <Text
            style={{
              fontFamily: 'Sydney',
              color: Themes.light.textSecondary,
            }}>
            DMs
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Themes.light.bg,
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'column',
  },
  nav_bar: {
    alignItems: 'center',
    justifyContent: 'space-around',
    flexDirection: 'row',
    width: '100%',
    height: '10%',
  },
  menu_icon: {
    width: '10%',
    aspectRatio: 1/1,
  },
  app_name: {
    fontSize: 32,
    fontFamily: 'SydneyBold',
  },
  light_dark_icons: {
    width: '10%',
    aspectRatio: 1/1,
  },
  profile_box: {
    alignItems: 'center',
    justifyContent: 'space-evenly',
    flexDirection: 'column',
    width: '100%',
    height: '80%'
  }, 
  profile_img_group: {
    width: '80%',
    height: '60%',
  },
  profile_img: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    width: '100%',
    height: '100%',
    shadowOffset: {
      width: Themes.light.shadows.shadowOffset.width,
      height: Themes.light.shadows.shadowOffset.height
    },
    shadowColor: Themes.light.shadows.shadowColor,
    shadowOpacity: Themes.light.shadows.shadowOpacity,
    shadowRadius: Themes.light.shadows.shadowRadius,
  },
  profile_name: {
    fontSize: 36,
    fontFamily: 'Sydney',
    color: Themes.light.textSecondary,
    paddingTop: '3%',
    paddingLeft: '3%',
  },
  profile_distance: {
    fontSize: 20,
    fontFamily: 'Sydney',
    color: Themes.light.textSecondary,
    paddingBottom: '3%',
    paddingLeft: '3%',
  },
  hot_take: {
    flexDirection: 'column',
    backgroundColor: Themes.light.bgSecondary,
    borderRadius: 24,
    shadowOffset: {
      width: Themes.light.shadows.shadowOffset.width,
      height: Themes.light.shadows.shadowOffset.height
    },
    shadowColor: Themes.light.shadows.shadowColor,
    shadowOpacity: Themes.light.shadows.shadowOpacity,
    shadowRadius: Themes.light.shadows.shadowRadius,
    justifyContent: 'space-evenly',
    width: '80%',
    height: '25%',
  },
  hot_take_text: {
    fontSize: 28,
    fontFamily: 'Sydney',
    paddingLeft: '5%',
    color: Themes.light.text,
  },
  audio_box: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  player_icon: {
    width: '18%',
    aspectRatio: 1/1,
  },
  audio_icon: {
    width: '75%',
    aspectRatio: 733/133,
  },
  bottom_action_bar: {
    backgroundColor: Themes.light.navigation,
    alignItems: 'center',
    justifyContent: 'space-around',
    flexDirection: 'row',
    width: '100%',
    height: '10%'
  }, 
  discover_flex: {
    alignItems: 'center',
  },
  discover_icon: {
    height: '57%',
    aspectRatio: 1/1,
    paddingBottom: '5%'
  },
  matches_flex: {
    alignItems: 'center'
  },
  matches_icon: {
    height: '57%',
    aspectRatio: 1/1,
  },
  dms_flex: {
    alignItems: 'center'
  },
  dms_icon: {
    height: '57%',
    aspectRatio: 1/1,
  }
});
