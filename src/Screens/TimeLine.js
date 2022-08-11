import React, {useState} from 'react';
import {View, Text, TouchableOpacity, Image, TextInput} from 'react-native';
import images from '../assets/images';

const Timeline = props => {
  const [tabView, setTabView] = useState('Timeline');
  return (
    <View style={{flex: 1, backgroundColor: '#000'}}>
      <View
        style={{flex: 1, backgroundColor: '#1B1B1B', justifyContent: 'center'}}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginHorizontal: 11,
          }}>
          <TouchableOpacity
            onPress={() => props.navigation.navigate('Home')}
            style={{width: 22, height: 22}}>
            <Image
              source={images.homeIcon}
              style={{width: undefined, height: undefined, flex: 1}}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={{flexDirection: 'row', alignItems: 'center'}}>
            <Text
              style={{
                color: '#fff',
                fontSize: 17,
                fontWeight: '500',
                marginRight: 4,
              }}>
              Harry Potter and the Philosop...
            </Text>
            <View style={{width: 8, height: 8}}>
              <Image
                source={images.downIcon}
                style={{width: undefined, height: undefined, flex: 1}}
              />
            </View>
          </TouchableOpacity>

          <TouchableOpacity style={{width: 22, height: 22}}>
            <Image
              source={images.filterIcon}
              style={{width: undefined, height: undefined, flex: 1}}
            />
          </TouchableOpacity>
        </View>
      </View>
      <View style={{flex: 9}}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginHorizontal: 8,
            marginVertical: 12,
          }}>
          <TouchableOpacity
            style={{
              backgroundColor: '#1B1B1B',
              borderRadius: 4,
              paddingHorizontal: 12,
              paddingVertical: 4,
            }}>
            <Text
              style={{
                color: tabView === 'Timeline' ? '#fff' : '#666666',
                fontSize: 15,
              }}>
              Timeline
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => props.navigation.navigate('Cast')}
            style={{
              backgroundColor: '#1B1B1B',
              borderRadius: 4,
              paddingHorizontal: 12,
              paddingVertical: 4,
            }}>
            <Text
              style={{
                color: tabView === 'Cast' ? '#fff' : '#666666',
                fontSize: 15,
              }}>
              Cast
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              backgroundColor: '#1B1B1B',
              borderRadius: 4,
              paddingHorizontal: 12,
              paddingVertical: 4,
            }}>
            <Text
              style={{
                color: tabView === 'Social' ? '#fff' : '#666666',
                fontSize: 15,
              }}>
              Social
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              backgroundColor: '#1B1B1B',
              borderRadius: 4,
              paddingHorizontal: 12,
              paddingVertical: 4,
            }}>
            <Text
              style={{
                color: tabView === 'Script' ? '#fff' : '#666666',
                fontSize: 15,
              }}>
              Script
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              backgroundColor: '#1B1B1B',
              borderRadius: 4,
              paddingHorizontal: 12,
              paddingVertical: 4,
            }}>
            <Text
              style={{
                color: tabView === 'Music' ? '#fff' : '#666666',
                fontSize: 15,
              }}>
              Music
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={{flex: 1}}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginHorizontal: 8,
          }}>
          <View style={{flex: 1, marginRight: 4}}>
            <TextInput
              placeholder="Comment"
              style={{backgroundColor: 'white', borderRadius: 5}}
            />
          </View>
          <View
            style={{backgroundColor: '#0077E5', borderRadius: 5, padding: 16}}>
            <TouchableOpacity style={{width: 20, height: 20}}>
              <Image
                style={{height: undefined, width: undefined, flex: 1}}
                source={images.sendIcon}
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Timeline;
