import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import images from '../assets/images';
const UserProfile = () => {
  return (
    <View style={{flex: 1, backgroundColor: '#000'}}>
      <View style={{backgroundColor: '#1B1B1B', paddingVertical: 43}}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            marginLeft: 12,
            justifyContent: 'space-between',
          }}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <TouchableOpacity style={{width: 17, height: 17}}>
              <Image
                style={{width: undefined, height: undefined, flex: 1}}
                source={images.backArrow}
              />
            </TouchableOpacity>
            <View style={{marginLeft: 20}}>
              <Text style={{fontSize: 17, color: '#fff'}}>Chris Nichols</Text>
            </View>
          </View>
          <TouchableOpacity
            style={{
              backgroundColor: '#0077E5',
              paddingHorizontal: 18,
              paddingVertical: 15,
              marginHorizontal: 8,
              borderRadius: 5,
            }}>
            <View style={{width: 15, height: 15}}>
              <Image
                style={{width: undefined, height: undefined, flex: 1}}
                source={images.searchIcon}
              />
            </View>
          </TouchableOpacity>
        </View>
      </View>
      <View
        style={{
          backgroundColor: '#FDFDFD',
          marginHorizontal: 8,
          marginTop: 16,
          borderRadius: 5,
        }}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            marginLeft: 8,
            marginVertical: 8,
          }}>
          <View style={{width: 75, height: 75}}>
            <Image
              style={{width: undefined, height: undefined, flex: 1}}
              source={images.profilePic1}
            />
          </View>
          <View>
            <TouchableOpacity
              style={{
                marginLeft: 24,
                borderColor: '#0077E5',
                borderWidth: 0.2,
                borderRadius: 2,
                paddingVertical: 5,
                paddingHorizontal: 10,
              }}>
              <Text style={{fontSize: 15, color: '#0077E5'}}>Change Image</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={{marginBottom: 18}}>
          <View style={{marginHorizontal: 16}}>
            <Text style={{position: 'relative', top: 8}}>Name</Text>
          </View>
          <View
            style={{
              borderWidth: 0.5,
              borderColor: '#D8D8D8',
              paddingVertical: 12,
              paddingHorizontal: 8,
              marginHorizontal: 8,
              borderRadius: 5,
            }}>
            <Text>Chris Nichols</Text>
          </View>
        </View>
        <View style={{marginBottom: 18}}>
          <View style={{marginHorizontal: 16}}>
            <Text style={{position: 'relative', top: 8}}>Bio</Text>
          </View>
          <View
            style={{
              borderWidth: 0.5,
              borderColor: '#D8D8D8',
              paddingVertical: 12,
              paddingHorizontal: 8,
              marginHorizontal: 8,
              borderRadius: 5,
            }}>
            <Text>I like comedy, action and thrillers. I do standup </Text>
          </View>
        </View>
        <View style={{marginBottom: 18}}>
          <View style={{marginHorizontal: 16}}>
            <Text style={{position: 'relative', top: 8}}>Interests</Text>
          </View>
          <View
            style={{
              borderWidth: 0.5,
              borderColor: '#D8D8D8',
              paddingVertical: 12,
              paddingHorizontal: 8,
              marginHorizontal: 8,
              borderRadius: 5,
            }}>
            <View>
              <View style={{flexDirection: 'row'}}>
                
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    backgroundColor: '#D8D8D8D8',
                    paddingVertical: 4,
                    paddingHorizontal: 8,
                    borderRadius: 5,
                    marginRight: 8,
                  }}>
                  <View style={{marginRight: 10}}>
                    <Text>terror</Text>
                  </View>
                  <TouchableOpacity style={{width: 8, height: 8}}>
                    <Image
                      style={{width: undefined, height: undefined, flex: 1}}
                      source={images.closeIcon}
                    />
                  </TouchableOpacity>
                </View>
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    backgroundColor: '#D8D8D8D8',
                    paddingVertical: 4,
                    paddingHorizontal: 8,
                    borderRadius: 5,
                    marginRight: 8,
                  }}>
                  <View style={{marginRight: 10}}>
                    <Text>comedy</Text>
                  </View>
                  <TouchableOpacity style={{width: 8, height: 8}}>
                    <Image
                      style={{width: undefined, height: undefined, flex: 1}}
                      source={images.closeIcon}
                    />
                  </TouchableOpacity>
                </View>
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    backgroundColor: '#D8D8D8D8',
                    paddingVertical: 4,
                    paddingHorizontal: 8,
                    borderRadius: 5,
                  }}>
                  <View style={{marginRight: 10}}>
                    <Text>action</Text>
                  </View>
                  <TouchableOpacity style={{width: 8, height: 8}}>
                    <Image
                      style={{width: undefined, height: undefined, flex: 1}}
                      source={images.closeIcon}
                    />
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </View>
        </View>
        <View style={{flexDirection:'row'}}>
            <TouchableOpacity
              style={{
                marginBottom:8,
                marginLeft: 16,
                backgroundColor: '#0077E5',
                borderRadius: 5,
                paddingVertical: 8,
                paddingHorizontal: 16,
              }}>
              <Text style={{fontSize: 15, color: '#fff'}}>SAVE</Text>
            </TouchableOpacity>
          </View>
      </View>
    </View>
  );
};

export default UserProfile;
