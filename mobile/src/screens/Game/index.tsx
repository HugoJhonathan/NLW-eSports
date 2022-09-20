import { useNavigation, useRoute } from '@react-navigation/native';
import { FlatList, Image, SafeAreaView, ScrollView, Text, TouchableOpacity, View, } from 'react-native';
import { GameParams } from '../../@types/navigation';
import { Background } from '../../components/Background';
import { Entypo } from '@expo/vector-icons'

import logoImg from '../../assets/logo-nlw-esports.png'

import { styles } from './styles';
import { THEME } from '../../theme';
import { Heading } from '../../components/Heading';
import { DuoCard, DuoCardProps } from '../../components/DuoCard';
import { useEffect, useState } from 'react';
import { DuoMatch } from '../../components/DuoMatch';

export function Game() {

    const route = useRoute()
    const game = route.params as GameParams

    const navigation = useNavigation()
    function handleGoBack() {
        navigation.goBack()
    }

    async function getDiscordUser(adsId: string) {
        fetch(`http://192.168.0.105:3333/ads/${adsId}/discord`)
            .then(res => res.json())
            .then(data => {
                setDiscordDuoSelected(data.discord)
            })
            .catch(err => console.log(err))
    }

    const [duos, setDuos] = useState<DuoCardProps[]>([])
    const [discordDuoSelected, setDiscordDuoSelected] = useState<string>('')

    useEffect(() => {
        fetch(`http://192.168.0.105:3333/games/${game.id}/ads`)
            .then(res => res.json())
            .then(data => {
                setDuos(data)
            })
            .catch(err => console.log(err))
    }, [])

    return (
        <Background>
            <ScrollView>

                <SafeAreaView style={styles.container}>
                    <View style={styles.header}>

                        <TouchableOpacity onPress={handleGoBack}>
                            <Entypo
                                name="chevron-thin-left"
                                color={THEME.COLORS.CAPTION_300}
                                size={20}
                            />
                        </TouchableOpacity>

                        <Image source={logoImg} style={styles.logo} />

                        <View style={styles.right} />

                    </View>

                    <Image
                        source={{ uri: game.bannerUrl }}
                        style={styles.cover}
                        resizeMode='contain'
                    />

                    <Heading
                        title={game.title}
                        subtitle="Conecte-se e comece a jogar!"
                    />

                    <FlatList
                        data={duos}
                        horizontal
                        contentContainerStyle={duos.length === 0 ? styles.emptyListContent : styles.contentList}
                        showsHorizontalScrollIndicator={false}
                        keyExtractor={item => item.id}
                        renderItem={({ item }) => (
                            <DuoCard data={item} onConnect={() => getDiscordUser(item.id)} />
                        )}

                        ListEmptyComponent={() => (<Text style={styles.emptyListText}>Não há anúncios publicados ainda.</Text>)}
                        style={styles.containerList}
                    />

                    <DuoMatch
                        visible={discordDuoSelected !== ''}
                        discord={discordDuoSelected}
                        onClose={() => setDiscordDuoSelected('')}
                    />

                </SafeAreaView>
            </ScrollView>
        </Background>
    );
}