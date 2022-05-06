import React from 'react';
import {
    View,
    Text,
    Image,
    SafeAreaView,
    TouchableOpacity,
    TextInput,
    FlatList
} from 'react-native';

import { FONTS, COLORS, SIZES, icons, images, dummyData } from "../constants";

import { CategoryCard } from "../components";

const Home = ({ navigation }) => {
    
    function renderHeader() {
        return(
            <View
            style={{
                flexDirection: 'row',
                marginHorizontal: SIZES.padding,
                alignItems: 'center',
                height: 80
            }}
            >
                {/*Text*/ }
                <View
                style={{
                    flex: 1,
                }}
                >
                    <Text
                    style={{
                        color: COLORS.darkGreen,
                        ...FONTS.h2
                    }}
                    >
                        Welcome
                    </Text>

                    <Text
                    style={{
                        marginTop: 3,
                        color: COLORS.gray,
                        ...FONTS.body3
                    }}
                    >
                        What you want to cook today?
                    </Text>

                </View>
                {/*Image*/ }
                <TouchableOpacity
                    onPress={()=> console.log("Profile")}
                >
                    <Image
                        source={images.profile}
                        style={{
                            width: 40,
                            height: 40,
                            borderRadius: 20
                        }}
                    />

                </TouchableOpacity>

            </View>
        )
    }

    function renderSearchBar() {
        return(
            <View
            style={{
                flexDirection: 'row',
                height: 50,
                alignItems: 'center',
                marginHorizontal: SIZES.padding,
                paddingHorizontal: SIZES.radius,
                borderRadius: 10,
                backgroundColor: COLORS.lightGray
            }}
            >
                <Image
                    source={icons.search}
                    style={{
                        width: 20,
                        height: 20,
                        tintColor: COLORS.gray
                    }}
                />

                <TextInput
                    style={{
                        marginLeft: SIZES.radius,
                        ...FONTS.body3
                    }}
                    placeholderTextColor={COLORS.gray}
                    placeholder="Search Recipes"
                />
            </View>
        )
    }

    function renderSeeRecipeCard() {
        return(
            <View
                style={{
                    flexDirection: 'row',
                    marginTop: SIZES.padding,
                    marginHorizontal: SIZES.padding,
                    borderRadius: 10,
                    backgroundColor: COLORS.lightGreen
                }}
            >
                {/*Image*/ }
                <View
                    style={{
                        width: 100,
                        alignItems: 'center',
                        justifyContent: 'center'
                    }}
                >
                    <Image
                        source={images.recipe}
                        style={{
                            width: 80,
                            height: 80
                        }}
                    />
                </View>
                {/*Text*/ }
                <View
                    style={{
                        flex: 1,
                        paddingVertical: SIZES.radius
                    }}
                >
                    <Text
                        style={{
                            width: "70%",
                            ...FONTS.body4
                        }}
                    >
                        You have 12 recipes that you haven´t tried yet 
                    </Text>
                    
                    <TouchableOpacity
                        style={{
                            marginTop: 10
                        }}
                        onPress={()=> console.log("See Recipies")}
                    >
                    <Text
                        style={{
                            color: COLORS.darkGreen,
                            textDecorationLine: 'underline',
                            ...FONTS.h4
                        }}
                    >
                        See Recipies
                    </Text>

                    </TouchableOpacity>
                </View>
            </View>
        )
    }

    return (
       <SafeAreaView
        style={{
            flex:1,
            backgroundColor: COLORS.white
        }}
       >
           <FlatList
            data={dummyData.categories}
            keyExtractor={item => `${item.id}`}
            keyboardDismissMode= "on-drag"
            showsVerticalScrollIndicator={false}
            ListHeaderComponent= {
                <View>
                    {/*Header*/}
                    {renderHeader()}

                    {/*Search Bar*/}
                    {renderSearchBar()}

                    {/*See Recipe Card */}
                    {renderSeeRecipeCard()}

                    {/*Trending Section*/}
                    
                    {/*Cateory Header*/}
                </View>
            } 
            renderItem={({item}) => {
                return (
                    <CategoryCard 
                        containerStyle={{
                            marginHorizontal: SIZES.padding
                        }}
                        categoryItem={item}
                        onPress= {() => navigation.navigate
                        ("Recipe", { recipe: item })}
                    /> 
                )

            }}
            ListFooterComponet={
                <View
                style={{
                    marginBottom: 100
                }}
                />
            }
           />

       </SafeAreaView>
    )
}

export default Home;