import React from 'react'
import {View, Text, Image, TouchableOpacity, ScrollView} from 'react-native'
import images from '../assets/images'

const Social = () =>{
    return(
        <View style={{flex:1, backgroundColor:'#131313'}}>
            <ScrollView>
            <View
              style={{
                backgroundColor: '#fff',
                borderRadius: 5,
                paddingVertical: 8,
                marginHorizontal: 8,
                marginBottom: 28,
                marginVertical:16
              }}>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  marginHorizontal: 8,
                }}>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <View style={{width: 30, height: 30}}>
                    <Image
                      style={{width: undefined, height: undefined, flex: 1}}
                      source={images.harryPotterLogo}
                    />
                  </View>
                  <View style={{marginHorizontal: 8}}>
                    <Text style={{color: '#1B1B1B', fontSize: 13}}>
                      Harry Potter Film
                    </Text>
                  </View>
                  <View>
                    <Text style={{color: '#666666', fontSize: 13}}>
                      @harrypotterfilm
                    </Text>
                  </View>
                </View>
                <View>
                  <View style={{width: 14, height: 14}}>
                    <Image
                      style={{width: undefined, height: undefined, flex: 1}}
                      source={images.instagramIcon}
                    />
                  </View>
                </View>
              </View>
              <View
                style={{
                  paddingLeft: 46,
                }}>
                <View >
                  <View style={{width: 355, height: 340,}}>
                    <Image
                      source={images.harryPotterMovie2}
                      style={{width: undefined, height: undefined, flex: 1}}
                    />
                  </View>
                </View>
                <View>
                  <View style={{marginTop: 14, marginBottom: 8, marginRight:10}}>
                    <Text style={{fontSize: 15, color: '#1B1B1B'}}>
                      Professor McGonagall was right, we all know his name ⚡
                      Which Harry Potter film will you be watching this
                      #InternationalHarryPotterDay?
                    </Text>
                  </View>
                </View>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    marginRight: 8,
                    marginVertical: 8,
                  }}>
                  <View style={{flexDirection: 'row', alignItems: 'center'}}>
                    <TouchableOpacity
                      style={{width: 13, height: 12, marginRight: 4}}>
                      <Image
                        style={{
                          width: undefined,
                          height: undefined,
                          flex: 1,
                        }}
                        source={images.outlineHeartIcon}
                      />
                    </TouchableOpacity>
                    <View style={{marginRight: 8}}>
                      <Text style={{color: '#666666', fontSize: 13}}>5k</Text>
                    </View>
                    <TouchableOpacity
                      style={{width: 13, height: 12, marginRight: 4}}>
                      <Image
                        style={{
                          width: undefined,
                          height: undefined,
                          flex: 1,
                        }}
                        source={images.outlineCommentIcon}
                      />
                    </TouchableOpacity>
                    <View>
                      <Text style={{color: '#666666', fontSize: 13}}>1.2k</Text>
                    </View>
                  </View>
                  <View>
                    <Text style={{color: '#666666', fontSize: 13}}>
                      May 1, 2022
                    </Text>
                  </View>
                </View>
              </View>
            
              </View>
            <View
              style={{
                backgroundColor: '#fff',
                borderRadius: 5,
                paddingVertical: 8,
                marginHorizontal: 8,
                marginBottom: 28,
                marginVertical:16
              }}>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  marginHorizontal: 8,
                }}>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <View style={{width: 30, height: 30}}>
                    <Image
                      style={{width: undefined, height: undefined, flex: 1}}
                      source={images.harryPotterLogo}
                    />
                  </View>
                  <View style={{marginHorizontal: 8}}>
                    <Text style={{color: '#1B1B1B', fontSize: 13}}>
                      Harry Potter Film
                    </Text>
                  </View>
                  <View>
                    <Text style={{color: '#666666', fontSize: 13}}>
                      @harrypotterfilm
                    </Text>
                  </View>
                </View>
                <View>
                  <View style={{width: 14, height: 14}}>
                    <Image
                      style={{width: undefined, height: undefined, flex: 1}}
                      source={images.twitterIcon}
                    />
                  </View>
                </View>
              </View>
              <View
                style={{
                  paddingLeft: 46,
                }}>
                <View >
                  <View style={{width: 355, height: 340,}}>
                    <Image
                      source={images.harryPotterMovie2}
                      style={{width: undefined, height: undefined, flex: 1}}
                    />
                  </View>
                </View>
                <View>
                  <View style={{marginTop: 14, marginBottom: 8, marginRight:10}}>
                    <Text style={{fontSize: 15, color: '#1B1B1B'}}>
                      Professor McGonagall was right, we all know his name ⚡
                      Which Harry Potter film will you be watching this
                      #InternationalHarryPotterDay?
                    </Text>
                  </View>
                </View>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    marginRight: 8,
                    marginVertical: 8,
                  }}>
                  <View style={{flexDirection: 'row', alignItems: 'center'}}>
                    <TouchableOpacity
                      style={{width: 13, height: 12, marginRight: 4}}>
                      <Image
                        style={{
                          width: undefined,
                          height: undefined,
                          flex: 1,
                        }}
                        source={images.outlineHeartIcon}
                      />
                    </TouchableOpacity>
                    <View style={{marginRight: 8}}>
                      <Text style={{color: '#666666', fontSize: 13}}>5k</Text>
                    </View>
                    <TouchableOpacity
                      style={{width: 13, height: 12, marginRight: 4}}>
                      <Image
                        style={{
                          width: undefined,
                          height: undefined,
                          flex: 1,
                        }}
                        source={images.outlineCommentIcon}
                      />
                    </TouchableOpacity>
                    <View>
                      <Text style={{color: '#666666', fontSize: 13}}>1.2k</Text>
                    </View>
                  </View>
                  <View>
                    <Text style={{color: '#666666', fontSize: 13}}>
                      May 1, 2022
                    </Text>
                  </View>
                </View>
              </View>
            
              </View>
              </ScrollView>
        </View>
    )
}

export default Social