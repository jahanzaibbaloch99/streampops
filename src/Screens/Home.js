import React from 'react';
import {
  View,
  Text,
  TextInput,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import images from '../assets/images';

const Home = props => {
  return (
    <View style={{flex: 1, backgroundColor: '#333'}}>
      <View
        style={{flex: 1, backgroundColor: '#1B1B1B', justifyContent: 'center'}}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginHorizontal: 8,
          }}>
          <View>
            <Text style={{fontSize: 24, color: '#fff', fontWeight: '500'}}>
              STREAM POPS
            </Text>
          </View>
          <TouchableOpacity
            onPress={() => props.navigation.navigate('Timeline')}>
            <Text style={{fontSize: 15, color: '#fff'}}>Login</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={{flex: 7}}>
        <ScrollView>
          <LinearGradient colors={['#131313', '#004280']} style={{flex: 1}}>
            <View style={{flex: 1, justifyContent: 'center'}}>
              <View
                style={{
                  alignItems: 'center',
                  marginBottom: 24,
                  marginTop: 155,
                }}>
                <Text style={{fontSize: 20, color: '#fff'}}>
                  Search what I’m watching
                </Text>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  marginHorizontal: 45,
                  marginBottom: 48,
                }}>
                <View style={{flex: 1}}>
                  <TextInput
                    style={{borderRadius: 4, backgroundColor: '#fff'}}
                  />
                </View>
                <View
                  style={{
                    backgroundColor: '#0077E5',
                    marginLeft: 8,
                    padding: 15,
                    borderRadius: 5,
                  }}>
                  <View style={{width: 20, height: 20}}>
                    <Image
                      style={{width: undefined, height: undefined, flex: 1}}
                      source={images.searchIcon}
                    />
                  </View>
                </View>
              </View>
              <View style={{alignItems: 'center', marginBottom: 24}}>
                <Text style={{fontSize: 20, color: '#fff'}}>
                  Listen what I’m watching
                </Text>
              </View>
              <View
                style={{
                  backgroundColor: '#0077E5',
                  justifyContent: 'center',
                  alignItems: 'center',
                  borderRadius: 5,
                  marginHorizontal: 175,
                  paddingVertical: 20,
                }}>
                <TouchableOpacity style={{width: 32, height: 32}}>
                  <Image
                    style={{width: undefined, height: undefined, flex: 1}}
                    source={images.micIcon}
                  />
                </TouchableOpacity>
              </View>
              <View
                style={{
                  justifyContent: 'center',
                  alignItems: 'center',
                  marginBottom: 42,
                }}>
                <TouchableOpacity
                  style={{width: 60, height: 23, marginTop: 246}}>
                  <Image
                    source={images.downArrow}
                    style={{width: undefined, height: undefined, flex: 1}}
                  />
                </TouchableOpacity>
              </View>
            </View>
          </LinearGradient>
          <View style={{marginHorizontal: 16, marginTop: 80}}>
            <View>
              <View style={{width: 392, height: 392}}>
                <Image
                  source={images.recomendedImg}
                  style={{width: undefined, height: undefined, flex: 1}}
                />
              </View>
            </View>
            <View
              style={{
                backgroundColor: '#fff',
                borderBottomLeftRadius: 5,
                borderBottomRightRadius: 5,
              }}>
              <View style={{marginHorizontal: 8}}>
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    marginTop: 8,
                  }}>
                  <View style={{marginRight: 8}}>
                    <Text style={{color: '#666666', fontSize: 13}}>
                      Recommended for you
                    </Text>
                  </View>
                  <View style={{width: 14, height: 13}}>
                    <Image
                      style={{width: undefined, height: undefined, flex: 1}}
                      source={images.starIcon}
                    />
                  </View>
                </View>
                <View style={{marginTop: 14}}>
                  <Text style={{fontSize: 17, color: '#1B1B1B'}}>
                    The Hobbit
                  </Text>
                </View>
                <View style={{marginTop: 14, marginBottom: 8}}>
                  <Text style={{fontSize: 15, color: '#1B1B1B'}}>
                    A reluctant Hobbit, Bilbo Baggins, sets out to the Lonely
                    Mountain with a spirited group of dwarves to reclaim their
                    mountain home, and the gold within it from the dragon Smaug.
                  </Text>
                </View>
              </View>
            </View>
            <View style={{marginVertical: 24}}>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  marginBottom: 8,
                }}>
                <View style={{marginRight: 8}}>
                  <Text style={{fontSize: 13, color: '#666666'}}>
                    Breaking News
                  </Text>
                </View>
                <View style={{width: 12, height: 11}}>
                  <Image
                    style={{width: undefined, height: undefined, flex: 1}}
                    source={images.newsIcon}
                  />
                </View>
              </View>
              <View
                style={{
                  // flex:1,
                  backgroundColor: '#fff',
                  flexDirection: 'row',
                  justifyContent: 'center',
                  // paddingRight: 60,
                  paddingVertical: 10,
                  borderRadius: 5,
                  alignItems: 'center',
                }}>
                <View style={{marginLeft: 8, marginRight: 20, flex: 1}}>
                  <View>
                    <Text style={{fontSize: 13, color: '#666666'}}>
                      https://rollingstone.uol.com.br › harr...
                    </Text>
                  </View>
                  <View style={{marginVertical: 12}}>
                    <Text style={{fontSize: 15, color: '#0077E5'}}>
                      Harry Potter: Emma Watson se obrigou a 'lembrar de atuar
                      ...
                    </Text>
                  </View>
                  <View>
                    <Text style={{color: '#1B1B1B', fontSize: 15}}>
                      Apr 8, 2022 — Emma Watson confessou ...
                    </Text>
                  </View>
                </View>
                <View style={{marginRight: 8}}>
                  <View style={{width: 100, height: 100}}>
                    <Image
                      style={{width: undefined, height: undefined, flex: 1}}
                      source={images.newsImg}
                    />
                  </View>
                </View>
              </View>
            </View>
            <View>
              <View style={{marginBottom: 24}}>
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
                            Maria
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
                          What's going on here
                        </Text>
                      </View>
                      <View
                        style={{
                          flexDirection: 'row',
                          justifyContent: 'space-between',
                          alignItems: 'center',
                        }}>
                        <View
                          style={{flexDirection: 'row', alignItems: 'center'}}>
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
                            <Text style={{color: '#666666', fontSize: 13}}>
                              25
                            </Text>
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
                            <Text style={{color: '#666666', fontSize: 13}}>
                              33
                            </Text>
                          </View>
                        </View>
                        <View>
                          <Text style={{color: '#666666', fontSize: 13}}>
                            00:30:32
                          </Text>
                        </View>
                      </View>
                    </View>
                  </View>
                </View>
              </View>

              <View>
                <View style={{width: 392, height: 392}}>
                  <Image
                    source={images.popularMovie}
                    style={{width: undefined, height: undefined, flex: 1}}
                  />
                </View>
              </View>
              <View
                style={{
                  backgroundColor: '#fff',
                  borderBottomLeftRadius: 5,
                  borderBottomRightRadius: 5,
                  marginBottom: 24,
                }}>
                <View style={{marginHorizontal: 8}}>
                  <View
                    style={{
                      flexDirection: 'row',
                      alignItems: 'center',
                      marginTop: 8,
                    }}>
                    <View style={{marginRight: 8}}>
                      <Text style={{color: '#666666', fontSize: 13}}>
                        Popular Movie
                      </Text>
                    </View>
                    <View style={{width: 14, height: 13}}>
                      <Image
                        style={{width: undefined, height: undefined, flex: 1}}
                        source={images.heartIcon}
                      />
                    </View>
                  </View>
                  <View style={{marginTop: 14}}>
                    <Text style={{fontSize: 17, color: '#1B1B1B'}}>
                      Non Stop
                    </Text>
                  </View>
                  <View style={{marginTop: 14, marginBottom: 8}}>
                    <Text style={{fontSize: 15, color: '#1B1B1B'}}>
                      An air marshal springs into action during a transatlantic
                      flight after receiving a series of text messages demanding
                      $150 million into an off-shore account, or someone will
                      die every 20 minutes.
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
                marginHorizontal: 7,
                marginBottom: 28,
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
                  <View style={{width: 355, height: 340}}>
                    <Image
                      source={images.harryPotterMovie}
                      style={{width: undefined, height: undefined, flex: 1}}
                    />
                  </View>
                </View>
                <View>
                  <View style={{marginTop: 14, marginBottom: 8}}>
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
            <View style={{marginBottom: 24}}>
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
                          Carlos
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
                        This scene always makes me hungry
                      </Text>
                    </View>
                    <View
                      style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                      }}>
                      <View
                        style={{flexDirection: 'row', alignItems: 'center'}}>
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
                          <Text style={{color: '#666666', fontSize: 13}}>
                            5
                          </Text>
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
                          <Text style={{color: '#666666', fontSize: 13}}>
                            2
                          </Text>
                        </View>
                      </View>
                      <View>
                        <Text style={{color: '#666666', fontSize: 13}}>
                          00:04:32
                        </Text>
                      </View>
                    </View>
                  </View>
                </View>
              </View>
            </View>
            <View style={{marginBottom: 24}}>
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
                          Maria
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
                        I love the way they all look so addorable in this movie
                      </Text>
                    </View>
                    <View
                      style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                      }}>
                      <View
                        style={{flexDirection: 'row', alignItems: 'center'}}>
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
                          <Text style={{color: '#666666', fontSize: 13}}>
                            18
                          </Text>
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
                          <Text style={{color: '#666666', fontSize: 13}}>
                            15
                          </Text>
                        </View>
                      </View>
                      <View>
                        <Text style={{color: '#666666', fontSize: 13}}>
                          00:04:32
                        </Text>
                      </View>
                    </View>
                  </View>
                </View>
              </View>
            </View>
          </View>
          <View
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              marginBottom: 18,
            }}>
            <TouchableOpacity style={{width: 60, height: 23, marginTop: 35}}>
              <Image
                source={images.arrowWhiteUp}
                style={{width: undefined, height: undefined, flex: 1}}
              />
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    </View>
  );
};

export default Home;
