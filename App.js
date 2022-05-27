import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const App = () => {
  const [imgActive, setImgActive] = useState(0);

  const [image, setImage] = useState('');
  const slide = [
    {
      item: require('./scroll.png'),
    },
    {
      item: require('./scroll1.png'),
    },
    {
      item: require('./scroll.png'),
    },
  ];

  onchange = nativeEvent => {
    if (nativeEvent) {
      const slide = Math.ceil(
        nativeEvent.contentOffset.x / nativeEvent.layoutMeasurement.width,
      );
      if (slide != imgActive) {
        setImgActive(slide);
      }
    }
  };

  return (
    <View style={styles.container}>
      <View>
        <ScrollView
          style={{
            marginRight: wp(4),
            marginLeft: wp(4),
          }}
          onScroll={({nativeEvent}) => onchange(nativeEvent)}
          horizontal
          showsHorizontalScrollIndicator={false}>
          {slide.map(item => {
            return (
              <View>
                <Image style={styles.slide} source={item.item} />
              </View>
            );
          })}
        </ScrollView>
        <View style={styles.wrapdot}>
          {slide.map((item, index) => (
            <Text style={imgActive == index ? styles.dotActive : styles.dot}>
              ●
            </Text>
          ))}
        </View>
      </View>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.text}>View All</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFF',
    elevation: 5,
    padding: wp(2),
    margin: wp(2),
    borderRadius: wp(5),
  },

  slide: {
    width: wp(60),
    height: hp(30),
    marginRight: wp(5),
    marginTop: hp(2),

    borderRadius: wp(3),
    marginBottom: hp(5),
  },
  text: {
    color: '#FFF',
    fontSize: wp(5),
  },
  dotActive: {
    margin: 3,
    color: '#0042F3',
    fontSize: wp(5),
  },
  dot: {
    margin: 3,
    color: '#FFFFFF',
    fontSize: wp(5),
  },
  wrapdot: {
    position: 'absolute',
    bottom: 0,
    flexDirection: 'row',
    alignSelf: 'center',
    fontSize: wp(5),
  },
  button: {
    backgroundColor: '#0042F3',
    width: wp(80),
    alignContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    marginTop: hp(3),
    marginBottom: hp(3),
    height: hp(8),
    justifyContent: 'center',
    borderRadius: wp(2),
    elevation: 1,
  },
});

export default App;
