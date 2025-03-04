import { Category2, Clock, Message, MusicDashboard, Receipt1, Receipt2, SearchNormal1 } from "iconsax-react-native"
import { Dimensions, Image, ImageBackground, ScrollView, StyleSheet, Text, TextInput, TouchableHighlight, TouchableOpacity, View } from "react-native"
import { colors, fontType } from "./src/theme"

export default function App() {
  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={stylesHeader.container}>
        <Text style={stylesHeader.title}>
          WOCO.
        </Text>
        <Category2 size={24} />
      </View>

      <View style={{
        marginHorizontal: 16,
        borderColor: '#ededed',
        borderWidth: 1,
        borderRadius: 12,
        flexDirection: 'row',
        overflow: 'hidden',
      }}>
        <TextInput placeholder="Search" style={{ flex: 1, paddingLeft: 9, }} />
        <TouchableHighlight style={{ backgroundColor: colors.blue(), padding: 9, }}>
          <SearchNormal1 color="white" />
        </TouchableHighlight>
      </View>

      <View style={{ paddingVertical: 12, }}>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          <View style={{ width: 16, }} />
          <View style={{ backgroundColor: colors.grey(0.2), padding: 12, borderRadius: 32, marginRight: 16, }}>
            <Text style={{ color: colors.blue(), fontFamily: fontType["Pjs-Bold"], includeFontPadding: false, }}>Popular</Text>
          </View>

          <View style={{ backgroundColor: colors.grey(0.2), padding: 12, borderRadius: 32, marginRight: 16, }}>
            <Text style={{ color: colors.grey(), fontFamily: fontType["Pjs-Bold"], includeFontPadding: false, }}>Trending</Text>
          </View>

          <View style={{ backgroundColor: colors.grey(0.2), padding: 12, borderRadius: 32, marginRight: 16, }}>
            <Text style={{ color: colors.grey(), fontFamily: fontType["Pjs-Bold"], includeFontPadding: false, }}>Technology</Text>
          </View>

          <View style={{ backgroundColor: colors.grey(0.2), padding: 12, borderRadius: 32, marginRight: 16, }}>
            <Text style={{ color: colors.grey(), fontFamily: fontType["Pjs-Bold"], includeFontPadding: false, }}>Popular</Text>
          </View>

          <View style={{ backgroundColor: colors.grey(0.2), padding: 12, borderRadius: 32, marginRight: 16, }}>
            <Text style={{ color: colors.grey(), fontFamily: fontType["Pjs-Bold"], includeFontPadding: false, }}>Popular</Text>
          </View>

          <View style={{ backgroundColor: colors.grey(0.2), padding: 12, borderRadius: 32, marginRight: 16, }}>
            <Text style={{ color: colors.grey(), fontFamily: fontType["Pjs-Bold"], includeFontPadding: false, }}>Popular</Text>
          </View>

          <View style={{ backgroundColor: colors.grey(0.2), padding: 12, borderRadius: 32, marginRight: 16, }}>
            <Text style={{ color: colors.grey(), fontFamily: fontType["Pjs-Bold"], includeFontPadding: false, }}>Popular</Text>
          </View>
        </ScrollView>
      </View>

      <ScrollView>

        <View>

          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            <View style={{ width: 16, }} />
            <ImageBackground borderRadius={16} style={{ marginRight: 16, justifyContent: 'space-between', padding: 16, width: Dimensions.get('screen').width - 32, height: (Dimensions.get('screen').width - 32) * (9 / 16) }}
              source={{ uri: 'https://images.unsplash.com/photo-1523800503107-5bc3ba2a6f81?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' }}>
              <View style={{ justifyContent: 'flex-end', flexDirection: 'row', }}>
                <TouchableOpacity style={{ padding: 8, backgroundColor: colors.white(0.2), borderWidth: 1, borderColor: 'white', borderRadius: 8, }}>
                  <Receipt1 color="white" size={18} />
                </TouchableOpacity>
              </View>

              <View>
                <Text style={{ color: colors.white(), fontFamily: fontType["Pjs-Bold"], fontSize: 18, }}>Programming with a Coffe and Notes</Text>
                <Text style={{ color: colors.white(), fontFamily: fontType["Pjs-Regular"], fontSize: 12, }}>Now 10, 2025</Text>
              </View>
            </ImageBackground>

            <ImageBackground borderRadius={16} style={{ marginRight: 16, justifyContent: 'space-between', padding: 16, width: Dimensions.get('screen').width - 32, height: (Dimensions.get('screen').width - 32) * (9 / 16) }}
              source={{ uri: 'https://images.unsplash.com/photo-1523800503107-5bc3ba2a6f81?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' }}>
              <View style={{ justifyContent: 'flex-end', flexDirection: 'row', }}>
                <TouchableOpacity style={{ padding: 8, backgroundColor: colors.white(0.2), borderWidth: 1, borderColor: 'white', borderRadius: 8, }}>
                  <Receipt1 color="white" size={18} />
                </TouchableOpacity>
              </View>

              <View>
                <Text style={{ color: colors.white(), fontFamily: fontType["Pjs-Bold"], fontSize: 18, }}>Programming with a Coffe and Notes</Text>
                <Text style={{ color: colors.white(), fontFamily: fontType["Pjs-Regular"], fontSize: 12, }}>Now 10, 2025</Text>
              </View>
            </ImageBackground>

            <ImageBackground borderRadius={16} style={{ marginRight: 16, justifyContent: 'space-between', padding: 16, width: Dimensions.get('screen').width - 32, height: (Dimensions.get('screen').width - 32) * (9 / 16) }}
              source={{ uri: 'https://images.unsplash.com/photo-1523800503107-5bc3ba2a6f81?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' }}>
              <View style={{ justifyContent: 'flex-end', flexDirection: 'row', }}>
                <TouchableOpacity style={{ padding: 8, backgroundColor: colors.white(0.2), borderWidth: 1, borderColor: 'white', borderRadius: 8, }}>
                  <Receipt1 color="white" size={18} />
                </TouchableOpacity>
              </View>

              <View>
                <Text style={{ color: colors.white(), fontFamily: fontType["Pjs-Bold"], fontSize: 18, }}>Programming with a Coffe and Notes</Text>
                <Text style={{ color: colors.white(), fontFamily: fontType["Pjs-Regular"], fontSize: 12, }}>Now 10, 2025</Text>
              </View>
            </ImageBackground>


            <ImageBackground borderRadius={16} style={{ marginRight: 16, justifyContent: 'space-between', padding: 16, width: Dimensions.get('screen').width - 32, height: (Dimensions.get('screen').width - 32) * (9 / 16) }}
              source={{ uri: 'https://images.unsplash.com/photo-1523800503107-5bc3ba2a6f81?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' }}>
              <View style={{ justifyContent: 'flex-end', flexDirection: 'row', }}>
                <TouchableOpacity style={{ padding: 8, backgroundColor: colors.white(0.2), borderWidth: 1, borderColor: 'white', borderRadius: 8, }}>
                  <Receipt1 color="white" size={18} />
                </TouchableOpacity>
              </View>

              <View>
                <Text style={{ color: colors.white(), fontFamily: fontType["Pjs-Bold"], fontSize: 18, }}>Programming with a Coffe and Notes</Text>
                <Text style={{ color: colors.white(), fontFamily: fontType["Pjs-Regular"], fontSize: 12, }}>Now 10, 2025</Text>
              </View>
            </ImageBackground>

            <ImageBackground borderRadius={16} style={{ marginRight: 16, justifyContent: 'space-between', padding: 16, width: Dimensions.get('screen').width - 32, height: (Dimensions.get('screen').width - 32) * (9 / 16) }}
              source={{ uri: 'https://images.unsplash.com/photo-1523800503107-5bc3ba2a6f81?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' }}>
              <View style={{ justifyContent: 'flex-end', flexDirection: 'row', }}>
                <TouchableOpacity style={{ padding: 8, backgroundColor: colors.white(0.2), borderWidth: 1, borderColor: 'white', borderRadius: 8, }}>
                  <Receipt1 color="white" size={18} />
                </TouchableOpacity>
              </View>

              <View>
                <Text style={{ color: colors.white(), fontFamily: fontType["Pjs-Bold"], fontSize: 18, }}>Programming with a Coffe and Notes</Text>
                <Text style={{ color: colors.white(), fontFamily: fontType["Pjs-Regular"], fontSize: 12, }}>Now 10, 2025</Text>
              </View>
            </ImageBackground>
          </ScrollView>
        </View>

        <View style={{marginTop: 16, marginHorizontal: 16, gap: 16, }}>
          <View style={{ flexDirection: 'row', backgroundColor: colors.grey(0.05), borderRadius: 8, overflow: 'hidden' }}>
            <Image borderRadius={8} style={{ width: 100, height: 100, }} source={{ uri: 'https://images.unsplash.com/photo-1537432376769-00f5c2f4c8d2?q=80&w=1925&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' }} />

            <View style={{ justifyContent: 'space-between', marginLeft: 16, paddingVertical: 8 }}>
              <Text style={{ color: colors.blue(), fontFamily: fontType["Pjs-SemiBold"], fontSize: 12, }}>
                Technology
              </Text>

              <Text style={{ color: colors.black(), fontFamily: fontType["Pjs-Bold"], fontSize: 16, }}>
                Best Setup for 2025
              </Text>

              <View style={{ flexDirection: 'row', gap: 8, alignItems: 'center' }}>
                <Clock size={14} color={colors.grey(0.7)} />
                <Text style={{ color: colors.blue(0.8), fontFamily: fontType["Pjs-SemiBold"], fontSize: 12, includeFontPadding: false, }}>
                  Jul, 2025
                </Text>
                <Message size={14} color={colors.grey(0.7)} />
                <Text style={{ color: colors.blue(0.8), fontFamily: fontType["Pjs-SemiBold"], fontSize: 12, includeFontPadding: false, }}>
                  Jul, 2025
                </Text>
              </View>

            </View>

            <Receipt2 style={{ marginLeft: 'auto', marginRight: 16, marginTop: 8, }} color={colors.grey(0.8)} />
          </View>

          <View style={{ flexDirection: 'row', backgroundColor: colors.grey(0.05), borderRadius: 8, overflow: 'hidden' }}>
            <Image borderRadius={8} style={{ width: 100, height: 100, }} source={{ uri: 'https://images.unsplash.com/photo-1537432376769-00f5c2f4c8d2?q=80&w=1925&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' }} />

            <View style={{ justifyContent: 'space-between', marginLeft: 16, paddingVertical: 8 }}>
              <Text style={{ color: colors.blue(), fontFamily: fontType["Pjs-SemiBold"], fontSize: 12, }}>
                Technology
              </Text>

              <Text style={{ color: colors.black(), fontFamily: fontType["Pjs-Bold"], fontSize: 16, }}>
                Best Setup for 2025
              </Text>

              <View style={{ flexDirection: 'row', gap: 8, alignItems: 'center' }}>
                <Clock size={14} color={colors.grey(0.7)} />
                <Text style={{ color: colors.blue(0.8), fontFamily: fontType["Pjs-SemiBold"], fontSize: 12, includeFontPadding: false, }}>
                  Jul, 2025
                </Text>
                <Message size={14} color={colors.grey(0.7)} />
                <Text style={{ color: colors.blue(0.8), fontFamily: fontType["Pjs-SemiBold"], fontSize: 12, includeFontPadding: false, }}>
                  Jul, 2025
                </Text>
              </View>

            </View>

            <Receipt2 style={{ marginLeft: 'auto', marginRight: 16, marginTop: 8, }} color={colors.grey(0.8)} />
          </View>


          <View style={{ flexDirection: 'row', backgroundColor: colors.grey(0.05), borderRadius: 8, overflow: 'hidden' }}>
            <Image borderRadius={8} style={{ width: 100, height: 100, }} source={{ uri: 'https://images.unsplash.com/photo-1537432376769-00f5c2f4c8d2?q=80&w=1925&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' }} />

            <View style={{ justifyContent: 'space-between', marginLeft: 16, paddingVertical: 8 }}>
              <Text style={{ color: colors.blue(), fontFamily: fontType["Pjs-SemiBold"], fontSize: 12, }}>
                Technology
              </Text>

              <Text style={{ color: colors.black(), fontFamily: fontType["Pjs-Bold"], fontSize: 16, }}>
                Best Setup for 2025
              </Text>

              <View style={{ flexDirection: 'row', gap: 8, alignItems: 'center' }}>
                <Clock size={14} color={colors.grey(0.7)} />
                <Text style={{ color: colors.blue(0.8), fontFamily: fontType["Pjs-SemiBold"], fontSize: 12, includeFontPadding: false, }}>
                  Jul, 2025
                </Text>
                <Message size={14} color={colors.grey(0.7)} />
                <Text style={{ color: colors.blue(0.8), fontFamily: fontType["Pjs-SemiBold"], fontSize: 12, includeFontPadding: false, }}>
                  Jul, 2025
                </Text>
              </View>

            </View>

            <Receipt2 style={{ marginLeft: 'auto', marginRight: 16, marginTop: 8, }} color={colors.grey(0.8)} />
          </View>


          <View style={{ flexDirection: 'row', backgroundColor: colors.grey(0.05), borderRadius: 8, overflow: 'hidden' }}>
            <Image borderRadius={8} style={{ width: 100, height: 100, }} source={{ uri: 'https://images.unsplash.com/photo-1537432376769-00f5c2f4c8d2?q=80&w=1925&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' }} />

            <View style={{ justifyContent: 'space-between', marginLeft: 16, paddingVertical: 8 }}>
              <Text style={{ color: colors.blue(), fontFamily: fontType["Pjs-SemiBold"], fontSize: 12, }}>
                Technology
              </Text>

              <Text style={{ color: colors.black(), fontFamily: fontType["Pjs-Bold"], fontSize: 16, }}>
                Best Setup for 2025
              </Text>

              <View style={{ flexDirection: 'row', gap: 8, alignItems: 'center' }}>
                <Clock size={14} color={colors.grey(0.7)} />
                <Text style={{ color: colors.blue(0.8), fontFamily: fontType["Pjs-SemiBold"], fontSize: 12, includeFontPadding: false, }}>
                  Jul, 2025
                </Text>
                <Message size={14} color={colors.grey(0.7)} />
                <Text style={{ color: colors.blue(0.8), fontFamily: fontType["Pjs-SemiBold"], fontSize: 12, includeFontPadding: false, }}>
                  Jul, 2025
                </Text>
              </View>

            </View>

            <Receipt2 style={{ marginLeft: 'auto', marginRight: 16, marginTop: 8, }} color={colors.grey(0.8)} />
          </View>


          <View style={{ flexDirection: 'row', backgroundColor: colors.grey(0.05), borderRadius: 8, overflow: 'hidden' }}>
            <Image borderRadius={8} style={{ width: 100, height: 100, }} source={{ uri: 'https://images.unsplash.com/photo-1537432376769-00f5c2f4c8d2?q=80&w=1925&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' }} />

            <View style={{ justifyContent: 'space-between', marginLeft: 16, paddingVertical: 8 }}>
              <Text style={{ color: colors.blue(), fontFamily: fontType["Pjs-SemiBold"], fontSize: 12, }}>
                Technology
              </Text>

              <Text style={{ color: colors.black(), fontFamily: fontType["Pjs-Bold"], fontSize: 16, }}>
                Best Setup for 2025
              </Text>

              <View style={{ flexDirection: 'row', gap: 8, alignItems: 'center' }}>
                <Clock size={14} color={colors.grey(0.7)} />
                <Text style={{ color: colors.blue(0.8), fontFamily: fontType["Pjs-SemiBold"], fontSize: 12, includeFontPadding: false, }}>
                  Jul, 2025
                </Text>
                <Message size={14} color={colors.grey(0.7)} />
                <Text style={{ color: colors.blue(0.8), fontFamily: fontType["Pjs-SemiBold"], fontSize: 12, includeFontPadding: false, }}>
                  Jul, 2025
                </Text>
              </View>

            </View>

            <Receipt2 style={{ marginLeft: 'auto', marginRight: 16, marginTop: 8, }} color={colors.grey(0.8)} />
          </View>
        </View>
      </ScrollView>

    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white'
  },
})

const stylesHeader = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingVertical: 8,
    alignItems: 'center',
  },
  title: {
    fontFamily: fontType["Pjs-Bold"],
    fontSize: 16,
  },
})