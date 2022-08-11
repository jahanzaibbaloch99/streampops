import React from 'react';
import {View, Text, Image} from 'react-native';
import images from '../assets/images';

const Music = () => {
  return (
    <View style={{flex: 1, backgroundColor: '#1B1B1B'}}>
      <View
        style={{
          backgroundColor: '#fff',
          marginVertical: 16,
          marginHorizontal: 8,
          borderRadius: 5,
        }}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginLeft: 8,
          }}>
          <View style={{flexDirection: 'row', paddingVertical: 12}}>
            <View style={{width: 56, height: 56}}>
              <Image
                style={{width: undefined, height: undefined, flex: 1}}
                source={images.musicProfile1}
              />
            </View>
            <View style={{marginLeft: 8}}>
              <View>
                <Text style={{color: '#1B1B1B', fontSize: 15}}>
                  Harry in Winter
                </Text>
              </View>
              <View style={{marginTop: 6}}>
                <Text style={{color: '#666666', fontSize: 13}}>
                  Patrick Doyle
                </Text>
              </View>
            </View>
          </View>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <View style={{marginTop: 12, marginRight: 12}}>
              <View style={{width: 20, height: 20}}>
                <Image
                  style={{width: undefined, height: undefined, flex: 1}}
                  source={images.musicIcon}
                />
              </View>
            </View>
            <View
              style={{
                borderRightWidth: 0.5,
                color: '#666666',
                borderColor: '#666666',
                paddingVertical: 30,
              }}></View>
            <View style={{marginLeft: 12, marginRight: 8}}>
              <Text>1:30:05</Text>
            </View>
          </View>
        </View>
      </View>
      <View
        style={{
          backgroundColor: '#fff',
          marginVertical: 16,
          marginHorizontal: 8,
          borderRadius: 5,
        }}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginLeft: 8,
          }}>
          <View style={{flexDirection: 'row', paddingVertical: 12}}>
            <View style={{width: 56, height: 56}}>
              <Image
                style={{width: undefined, height: undefined, flex: 1}}
                source={images.musicProfile2}
              />
            </View>
            <View style={{marginLeft: 8}}>
              <View>
                <Text style={{color: '#1B1B1B', fontSize: 15}}>
                  Buckbeak’s flight
                </Text>
              </View>
              <View style={{marginTop: 6}}>
                <Text style={{color: '#666666', fontSize: 13}}>
                  John WIlliams
                </Text>
              </View>
            </View>
          </View>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <View style={{marginTop: 12, marginRight: 12}}>
              <View style={{width: 20, height: 20}}>
                <Image
                  style={{width: undefined, height: undefined, flex: 1}}
                  source={images.musicIcon}
                />
              </View>
            </View>
            <View
              style={{
                borderRightWidth: 0.5,
                color: '#666666',
                borderColor: '#666666',
                paddingVertical: 30,
              }}></View>
            <View style={{marginLeft: 12, marginRight: 8}}>
              <Text>0:35:20</Text>
            </View>
          </View>
        </View>
      </View>
      <View
        style={{
          backgroundColor: '#fff',
          marginVertical: 16,
          marginHorizontal: 8,
          borderRadius: 5,
        }}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginLeft: 8,
          }}>
          <View style={{flexDirection: 'row', paddingVertical: 12}}>
            <View style={{width: 56, height: 56}}>
              <Image
                style={{width: undefined, height: undefined, flex: 1}}
                source={images.musicProfile3}
              />
            </View>
            <View style={{marginLeft: 8}}>
              <View>
                <Text style={{color: '#1B1B1B', fontSize: 15}}>
                  The arrival of baby Harry
                </Text>
              </View>
              <View style={{marginTop: 6}}>
                <Text style={{color: '#666666', fontSize: 13}}>
                  Atlantic Records
                </Text>
              </View>
            </View>
          </View>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <View style={{marginTop: 12, marginRight: 12}}>
              <View style={{width: 20, height: 20}}>
                <Image
                  style={{width: undefined, height: undefined, flex: 1}}
                  source={images.musicIcon}
                />
              </View>
            </View>
            <View
              style={{
                borderRightWidth: 0.5,
                color: '#666666',
                borderColor: '#666666',
                paddingVertical: 30,
              }}></View>
            <View style={{marginLeft: 12, marginRight: 8}}>
              <Text>0:35:20</Text>
            </View>
          </View>
        </View>
      </View>
      <View
        style={{
          backgroundColor: '#fff',
          marginVertical: 16,
          marginHorizontal: 8,
          borderRadius: 5,
        }}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginLeft: 8,
          }}>
          <View style={{flexDirection: 'row', paddingVertical: 12}}>
            <View style={{width: 56, height: 56}}>
              <Image
                style={{width: undefined, height: undefined, flex: 1}}
                source={images.musicProfile4}
              />
            </View>
            <View style={{marginLeft: 8}}>
              <View>
                <Text style={{color: '#1B1B1B', fontSize: 15}}>
                  The Wizarding World of Harr..
                </Text>
              </View>
              <View style={{marginTop: 6}}>
                <Text style={{color: '#666666', fontSize: 13}}>
                  Saby Menyhei
                </Text>
              </View>
            </View>
          </View>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <View style={{marginTop: 12, marginRight: 12}}>
              <View style={{width: 20, height: 20}}>
                <Image
                  style={{width: undefined, height: undefined, flex: 1}}
                  source={images.musicIcon}
                />
              </View>
            </View>
            <View
              style={{
                borderRightWidth: 0.5,
                color: '#666666',
                borderColor: '#666666',
                paddingVertical: 30,
              }}></View>
            <View style={{marginLeft: 12, marginRight: 8}}>
              <Text>0:35:20</Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Music;
