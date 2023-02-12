import React,{useState} from 'react';
import { FlatList } from 'react-native';
import ListItem from '../components/ListItem/ListItem';
import ListItemDeleteAction from '../components/ListItem/ListItemDeleteAction';
import ListItemSeparator from '../components/ListItem/ListItemSeparator';
import Screen from '../components/Screen/Screen';

const initialMessages = [
    {
        id: 1,
        title: "T1",
        description: "D1",
        image: require("../assets/mosh.jpg")
    },
    {
        id: 2,
        title: "T2",
        description: "D2",
        image: require("../assets/mosh.jpg")
    }
]

function MessagesScreen(props) {
    const [messages,setMessages] = useState(initialMessages);
    const [refreshing,setRefreshing] = useState(false);

    const handleDelete = message => {
        const newMessages = messages.filter(msg => msg.id !== message.id);
        setMessages(newMessages);
    }


    return (
        <Screen>
            <FlatList
                data={messages}
                keyExtractor={message => message.id.toString()}
                renderItem={({ item }) => <ListItem img={item.image} title={item.title}
                    subTitle={item.description} onPress={() => console.log("message selected =>", item)}
                    renderRightActions={() => <ListItemDeleteAction onPress={() => handleDelete(item)} />} />}
                ItemSeparatorComponent={ListItemSeparator}
                refreshing={refreshing}
                onRefresh={() => {
                    setMessages([{
                        id: 2,
                        title: "T2",
                        description: "D2",
                        image: require("../assets/mosh.jpg")
                    }])
                }}
            />
        </Screen>
    );
}

export default MessagesScreen;