import React from 'react'
import {View, Text, Image} from 'react-native'
import images from '../assets/images'

const CastNews = () =>{
    return(
        <View style={{flex:1, backgroundColor:'#131313'}}>
               <View style={{marginVertical: 8}}>
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
                    https://www.purepeople.com.br
                    </Text>
                  </View>
                  <View style={{marginVertical: 12}}>
                    <Text style={{fontSize: 15, color: '#0077E5'}}>
                    Emma Watson - Fotos, últimas notícias, idade, signo...
                    </Text>
                  </View>
                  <View>
                    <Text style={{color: '#1B1B1B', fontSize: 15}}>
                    Emma Watson é conhecida por seu papel como Hermione Gra...
                    </Text>
                  </View>
                </View>
                <View style={{marginRight: 8}}>
                  <View style={{width: 100, height: 100}}>
                    <Image
                      style={{width: undefined, height: undefined, flex: 1}}
                      source={images.newsImg1}
                    />
                  </View>
                </View>
              </View>
            </View>
               <View >
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
               <View style={{marginVertical: 8}}>
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
                    https://www.adorocinema.com › per....
                    </Text>
                  </View>
                  <View style={{marginVertical: 12}}>
                    <Text style={{fontSize: 15, color: '#0077E5'}}>
                    Emma Watson - AdoroCinema
                    </Text>
                  </View>
                  <View>
                    <Text style={{color: '#1B1B1B', fontSize: 15}}>
                    Emma Watson é uma atriz, modelo e ativista britânica. Ela é conheci...
                    </Text>
                  </View>
                </View>
                <View style={{marginRight: 8}}>
                  <View style={{width: 100, height: 100}}>
                    <Image
                      style={{width: undefined, height: undefined, flex: 1}}
                      source={images.newsImg2}
                    />
                  </View>
                </View>
              </View>
            </View>
               <View>
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
                    https://www.imdb.com › name
                    </Text>
                  </View>
                  <View style={{marginVertical: 12}}>
                    <Text style={{fontSize: 15, color: '#0077E5'}}>
                    Emma Watson - IMDb
                    </Text>
                  </View>
                  <View>
                    <Text style={{color: '#1B1B1B', fontSize: 15}}>
                    Emma Watson, Actress: The Perks of Being a Wallflower. Emma C...
                    </Text>
                  </View>
                </View>
                <View style={{marginRight: 8}}>
                  <View style={{width: 100, height: 100}}>
                    <Image
                      style={{width: undefined, height: undefined, flex: 1}}
                      source={images.newsImg3}
                    />
                  </View>
                </View>
              </View>
            </View>
            
        </View>
    )
}

export default CastNews