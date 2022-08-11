import React from 'react';
import {View, Text, Image, TouchableOpacity, ScrollView} from 'react-native';
import images from '../assets/images';

const SocialUserProfile = () => {
  return (
    <View style={{flex: 1, backgroundColor: '#1B1B1B'}}>
      <ScrollView>
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
          <View style={{width: 75, height: 75, marginRight: 22}}>
            <Image
              style={{width: undefined, height: undefined, flex: 1}}
              source={images.profilePic1}
            />
          </View>
          <View style={{alignItems: 'center', marginRight: 42}}>
            <Text style={{fontSize: 20, color: '#000'}}>315</Text>
            <Text style={{fontSize: 13, color: '#666666'}}>Comment</Text>
          </View>
          <View style={{alignItems: 'center', marginRight: 42}}>
            <Text style={{fontSize: 20, color: '#000'}}>500</Text>
            <Text style={{fontSize: 13, color: '#666666'}}>Followers</Text>
          </View>
          <View style={{alignItems: 'center', marginRight: 42}}>
            <Text style={{fontSize: 20, color: '#000'}}>220</Text>
            <Text style={{fontSize: 13, color: '#666666'}}>Following</Text>
          </View>
        </View>
        <View>
          <View
            style={{
              paddingVertical: 12,
              marginHorizontal: 12,
            }}>
            <Text style={{fontFamily: '500', fontSize: 15, color: '#1B1B1B'}}>
              Chris Nichols
            </Text>
          </View>
        </View>
        <View>
          <View
            style={{
              marginHorizontal: 12,
            }}>
            <Text style={{fontSize: 15, color: '#1B1B1B'}}>
              I like comedy, action and thrillers. I do standup{' '}
            </Text>
          </View>
        </View>
        <View>
          <View
            style={{
              paddingVertical: 12,
              marginHorizontal: 12,
            }}>
            <View>
              <View style={{marginVertical: 8}}>
                <Text
                  style={{fontSize: 15, fontFamily: '500', color: '#1B1B1B'}}>
                  Interest
                </Text>
              </View>
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
                  <View>
                    <Text>terror</Text>
                  </View>
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
                  <View>
                    <Text>comedy</Text>
                  </View>
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
                  <View>
                    <Text>action</Text>
                  </View>
                </View>
              </View>
            </View>
          </View>
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
          <View style={{width: 75, height: 75, marginRight: 22}}>
            <Image
              style={{width: undefined, height: undefined, flex: 1}}
              source={images.profilePic2}
            />
          </View>
          <View style={{alignItems: 'center', marginRight: 42}}>
            <Text style={{fontSize: 20, color: '#000'}}>222</Text>
            <Text style={{fontSize: 13, color: '#666666'}}>Comment</Text>
          </View>
          <View style={{alignItems: 'center', marginRight: 42}}>
            <Text style={{fontSize: 20, color: '#000'}}>350</Text>
            <Text style={{fontSize: 13, color: '#666666'}}>Followers</Text>
          </View>
          <View style={{alignItems: 'center', marginRight: 42}}>
            <Text style={{fontSize: 20, color: '#000'}}>512</Text>
            <Text style={{fontSize: 13, color: '#666666'}}>Following</Text>
          </View>
        </View>
        <View>
          <View
            style={{
              paddingVertical: 12,
              marginHorizontal: 12,
            }}>
            <Text style={{fontFamily: '500', fontSize: 15, color: '#1B1B1B'}}>
              Linda Taylor Joy
            </Text>
          </View>
        </View>
        <View>
          <View
            style={{
              marginHorizontal: 12,
            }}>
            <Text style={{fontSize: 15, color: '#1B1B1B'}}>
              I like terror movies like crazy but I enjoy comedy, action and
              thrillers too.
            </Text>
          </View>
        </View>
        <View>
          <View
            style={{
              paddingVertical: 12,
              marginHorizontal: 12,
            }}>
            <View style={{flexDirection: 'row'}}>
              <TouchableOpacity
                style={{
                  marginBottom: 8,
                  backgroundColor: '#0077E5',
                  borderRadius: 5,
                  paddingVertical: 8,
                  paddingHorizontal: 16,
                }}>
                <Text style={{fontSize: 15, color: '#fff'}}>FOLLOW</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
      <View style={{marginVertical: 16, marginHorizontal: 8}}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            marginBottom: 8,
          }}>
          <View style={{marginRight: 8}}>
            <Text style={{fontSize: 13, color: '#666666'}}>
              Popular comment
            </Text>
          </View>
          <View style={{width: 12, height: 11}}>
            <Image
              style={{width: undefined, height: undefined, flex: 1}}
              source={images.heartIcon}
            />
          </View>
        </View>
        <View style={{flexDirection: 'row', marginBottom: 8}}>
          <View style={{marginRight: 8}}>
            <Text style={{color: '#666666', fontSize: 13}}>About</Text>
          </View>
          <View>
            <Text style={{color: '#FDFDFD', fontSize: 15}}>
              Harry Potter and the Philosopher Stone
            </Text>
          </View>
        </View>
        <View>
          <View
            style={{
              backgroundColor: '#fff',
              flexDirection: 'row',
              justifyContent: 'center',
              paddingVertical: 10,
              borderRadius: 5,
              alignItems: 'center',
            }}>
            <View style={{marginLeft: 8, marginRight: 20, flex: 1}}>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}>
                <View>
                  <Text style={{fontSize: 13, color: '#0077E5'}}>
                    Linda Taylor Joy
                  </Text>
                </View>
                <TouchableOpacity style={{width: 12, height: 12}}>
                  <Image
                    style={{
                      width: undefined,
                      height: undefined,
                      flex: 1,
                    }}
                    source={images.expandIcon}
                  />
                </TouchableOpacity>
              </View>
              <View style={{marginVertical: 12}}>
                <Text style={{fontSize: 15, color: '#1B1B1B'}}>
                  This scene always makes me cry
                </Text>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  alignItems: 'center',
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
                    <Text style={{color: '#666666', fontSize: 13}}>5</Text>
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
                    <Text style={{color: '#666666', fontSize: 13}}>2</Text>
                  </View>
                </View>
                <View>
                  <Text style={{color: '#666666', fontSize: 13}}>00:04:32</Text>
                </View>
              </View>
            </View>
          </View>
        </View>
      </View>
      <View style={{marginVertical: 16, marginHorizontal: 8}}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            marginBottom: 8,
          }}>
          <View style={{marginRight: 8}}>
            <Text style={{fontSize: 13, color: '#666666'}}>
              Popular comment
            </Text>
          </View>
          <View style={{width: 12, height: 11}}>
            <Image
              style={{width: undefined, height: undefined, flex: 1}}
              source={images.heartIcon}
            />
          </View>
        </View>
        <View style={{flexDirection: 'row', marginBottom: 8}}>
          <View style={{marginRight: 8}}>
            <Text style={{color: '#666666', fontSize: 13}}>About</Text>
          </View>
          <View>
            <Text style={{color: '#FDFDFD', fontSize: 15}}>
              The Hobbit
            </Text>
          </View>
        </View>
        <View>
          <View
            style={{
              backgroundColor: '#fff',
              flexDirection: 'row',
              justifyContent: 'center',
              paddingVertical: 10,
              borderRadius: 5,
              alignItems: 'center',
            }}>
            <View style={{marginLeft: 8, marginRight: 20, flex: 1}}>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}>
                <View>
                  <Text style={{fontSize: 13, color: '#0077E5'}}>
                    Linda Taylor Joy
                  </Text>
                </View>
                <TouchableOpacity style={{width: 12, height: 12}}>
                  <Image
                    style={{
                      width: undefined,
                      height: undefined,
                      flex: 1,
                    }}
                    source={images.expandIcon}
                  />
                </TouchableOpacity>
              </View>
              <View style={{marginVertical: 12}}>
                <Text style={{fontSize: 15, color: '#1B1B1B'}}>
                  I’m passionated about the landscape of this movie, some day
                  I’ll visit Switzerland
                </Text>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  alignItems: 'center',
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
                    <Text style={{color: '#666666', fontSize: 13}}>200</Text>
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
                    <Text style={{color: '#666666', fontSize: 13}}>186</Text>
                  </View>
                </View>
                <View>
                  <Text style={{color: '#666666', fontSize: 13}}>00:35:02</Text>
                </View>
              </View>
            </View>
          </View>
        </View>
      </View>
      </ScrollView>
    </View>
  );
};

export default SocialUserProfile;
