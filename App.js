import React from 'react';
import { StyleSheet, Text, View, AppRegistry, Button, TextInput, Image } from 'react-native';
const cityIcon = require('./img/city.png');
const countryIcon = require('./img/negara.png');
const sunriseIcon = require('./img/sunrise.png');
const sunsetIcon = require('./img/sunset.png');
const descIcon = require('./img/desc.png');
const tempIcon = require('./img/temp.png');
const seaIcon = require('./img/sea.png');
const grndIcon = require('./img/grnd.png');
const pressureIcon = require('./img/pressure.png');
const humidityIcon = require('./img/humidity.png');
const windIcon = require('./img/wind.png');
const mainIcon = require('./img/main.png');

export default class App extends React.Component {

  constructor(props) {
      super(props)
      this.state = {
        city: '',
        forecast: {
          main: '-',
          description: '-',
          temp: 0
        }
      };
    }

    getWeather= () =>{
    let url = 'http://api.openweathermap.org/data/2.5/weather?q='+this.state.city+ '&appid=78fe49ceb1f9bc3eeae5b3900d4e2576&units=metric';
    fetch (url)
    .then((response) => response.json())
    .then((responseJson) => {
      //console.log(responseJson);
      this.setState({
        forecast: {
          main: responseJson.weather[0].main,
          description: responseJson.weather[0].description,
          temp: responseJson.main.temp,
          sunrise: responseJson.sys.sunrise,
          sunset: responseJson.sys.sunset,
          country: responseJson.sys.country,
          speed: responseJson.wind.speed,
          sea_level: responseJson.main.sea_level,
          grnd_level: responseJson.main.grnd_level,
          pressure: responseJson.main.pressure,
          humidity: responseJson.main.humidity
        }
      });
    });
  }

    render() {
      return (
        <View style={styles.containerMain}>
          <View style={styles.header}>
            <Text style={styles.text1}>Prakiraan Cuaca</Text>
          </View>
          <View style={styles.inputtext}>
          <View style={styles.inputtext3}>
            <Text style={styles.text2}>Masukkan Nama Kota</Text>
          </View>
          <View style={styles.inputtext2}>
              <TextInput
                style={styles.text3}
                placeholder="Masukkan"
                onChangeText={(city) => this.setState({ city })}
              />
          </View>
          <View style={styles.inputtext3}>
              <Button
                onPress={
                  () => this.getWeather()
                }
                title="Lihat"
                color="#FF3D00"
                accessibilityLabel="Klik untuk melihat"
              />
          </View>
          </View>
          <View style={styles.infocuaca}>
          <View style={styles.backkeyboard2}>
          <View style={styles.tampilinfo}>
            <View style={styles.icon}>
              <Image source={cityIcon} style={styles.icon2} />
            </View>
            <Text style={{ padding: 10, fontSize: 15 }}>
              Kota = {this.state.city} {'\n'}
            </Text>
          </View>
          <View style={styles.tampilinfo}>
            <View style={styles.icon}>
              <Image source={countryIcon} style={styles.icon2} />
            </View>
            <Text style={{ padding: 10, fontSize: 15 }}>
              Negara = {this.state.forecast.country} {'\n'}
            </Text>
          </View>
        </View>

        <View style={styles.backkeyboard2}>
          <View style={styles.tampilinfo}>
            <View style={styles.icon}>
                <Image source={mainIcon} style={styles.iconin} />
            </View>
            <Text style={{ padding: 10, fontSize: 15 }}>
              Cuaca = {this.state.forecast.main} {'\n'}
            </Text>
          </View>
          <View style={styles.tampilinfo}>
            <View style={styles.icon}>
              <Image source={descIcon} style={styles.iconin} />
            </View>
            <Text style={{ padding: 10, fontSize: 15 }}>
              Desc = {this.state.forecast.description} {'\n'}
            </Text>
          </View>
        </View>

        <View style={styles.backkeyboard2}>
          <View style={styles.tampilinfo}>
            <View style={styles.icon}>
              <Image source={sunriseIcon} style={styles.iconin} />
            </View>
            <Text style={{ padding: 10, fontSize: 15 }}>
              Sunrise = {this.state.forecast.sunrise} {'\n'}
            </Text>
          </View>
          <View style={styles.tampilinfo}>
            <View style={styles.icon}>
              <Image source={sunsetIcon} style={styles.iconin} />
            </View>
            <Text style={{ padding: 10, fontSize: 15 }}>
              Sunset = {this.state.forecast.sunset} {'\n'}
            </Text>
          </View>
        </View>

        <View style={styles.backkeyboard2}>
          <View style={styles.tampilinfo}>
          <View style={styles.icon}>
              <Image source={tempIcon} style={styles.iconin} />
          </View>
          <Text style={{ padding: 10, fontSize: 15 }}>
            Temp = {this.state.forecast.temp} {"'Celcius"}
          </Text>
          </View>
          <View style={styles.tampilinfo}>
            <View style={styles.icon}>
                <Image source={windIcon} style={styles.iconin} />
            </View>
            <Text style={{ padding: 10, fontSize: 15 }}>
              Wind Speed = {this.state.forecast.speed} {'\n'}
            </Text>
          </View>
        </View>

        <View style={styles.backkeyboard2}>
          <View style={styles.tampilinfo}>
            <View style={styles.icon}>
                  <Image source={seaIcon} style={styles.iconin} />
            </View>
            <Text style={{ padding: 10, fontSize: 15 }}>
              Sea_level = {this.state.forecast.sea_level} {'\n'}
            </Text>
          </View>
          <View style={styles.tampilinfo}>
            <View style={styles.icon}>
              <Image source={grndIcon} style={styles.iconin} />
            </View>
            <Text style={{ padding: 10, fontSize: 15 }}>
              Grnd_level = {this.state.forecast.grnd_level} {'\n'}
            </Text>
          </View>
        </View>

        <View style={styles.backkeyboard2}>
          <View style={styles.tampilinfo}>
            <View style={styles.icon}>
              <Image source={pressureIcon} style={styles.iconin} />
            </View>
            <Text style={{ padding: 10, fontSize: 15 }}>
              Pressure = {this.state.forecast.pressure} {'\n'}
            </Text>
          </View>
          <View style={styles.tampilinfo}>
            <View style={styles.icon}>
              <Image source={humidityIcon} style={styles.iconin} />
            </View>
            <Text style={{ padding: 10, fontSize: 15 }}>
              Humidity = {this.state.forecast.grnd_level} {'\n'}
            </Text>
          </View>
        </View>
            </View>
          <View style={styles.footer}>
            <Text style={styles.textfooter}>Copyright @m13</Text>
          </View>
        </View>
      );
    }
}

const styles = StyleSheet.create({
  containerMain: {
    backgroundColor: '#F8BBD0',
    flex: 1,
    flexDirection: 'column',
  },

  header: {
    backgroundColor: '#880E4F',
    flex: 1,
    justifyContent: 'center'
  },

  inputtext: {
    backgroundColor: '#E91E63',
    flex: 2,
    justifyContent: 'center',
    margin: 10
  },
  inputtext2: {
    backgroundColor: '#FCE4EC',
    flex: 2,
    justifyContent: 'center',
    margin: 10
  },
  inputtext3: {
    backgroundColor: '#E91E63',
    flex: 1,
    justifyContent: 'center',
    margin: 10
  },
  infocuaca: {
    backgroundColor: '#C51162',
    flex: 4,
    flexDirection: 'column',
    justifyContent: 'space-around',
    marginTop: 10,
    marginLeft: 10,
    marginRight: 10,
    marginBottom: 10
  },

  tampilinfo: {
    backgroundColor: '#C51162',
    flex: 1,
    justifyContent: 'flex-start',
    flexDirection: 'row',
    marginTop: 10,
    marginLeft: 10,
    marginRight: 10
  },

  footer: {
    backgroundColor: '#880E4F',
    flex: 1,
    justifyContent: 'center'
  },

  backkeyboard: {
    flex: 2,
    backgroundColor: '#E8F5E9',
    flexDirection: 'row',
  },
  backkeyboard2: {
    flex: 2,
    backgroundColor: '#F8BBD0',
    flexDirection: 'row',
  },
  icon: {
  alignItems: 'center',
  backgroundColor: '#4A148C',
  borderColor: '#A5D6A7',
  //borderRadius: 15,
  borderWidth: 1,
  justifyContent: 'center',
  height: 40,
  width: 40
  },

  icon2: {
  tintColor: '#F44336',
  height: 40,
  width: 40,
  },

  text: {
    padding: 10, fontSize: 20, color: 'white'
  },
  text3: {
    padding: 10, fontSize: 20, color: 'black', textAlign: 'center'
  },
  text1: {
    padding: 15, fontSize: 30, color: 'white', textAlign: 'center', fontWeight: 'bold'
  },
  text2: {
    padding: 15, fontSize: 20, color: 'white', textAlign: 'center', fontWeight: 'bold'
  },
  textfooter: {
    padding: 15, fontSize: 15, color: 'white', textAlign: 'center', fontWeight: 'bold'
  }
});
