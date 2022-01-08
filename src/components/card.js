


const Card = ({title, description, deleteButton, onPress}) => {


    return (
        <View style={styles.card_text}>
        <Text numberOfLines={1} style={styles.title}>
          {item.title}
        </Text>
        <Text numberOfLines={3} style={styles.description}>
          {item.description}
        </Text>
      </View>
    )
}


const styles = StyleSheet.create({
  card: {
    padding: 10,
    marginBottom: 5,
    width: '100%',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    elevation: 5,
    borderColor: '#000000',
    borderWidth: 1,
    borderRadius: 10,
    backgroundColor: '#E7EAB5',
  },
  card_text: {
    flexDirection: 'column',
  },
  card_button: {
    borderColor: '#000000',
    borderWidth: 0.5,
    borderRadius: 5,
    backgroundColor: '#F1F7E7',
    width: 55,
    height: 25,
    justifyContent: 'center',
    alignItems: 'center',
  },
  card_button_text: {
    color: '#000000',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  title: {
    textAlign: 'left',
    fontSize: 18,
    color: '#000000',
    fontWeight: 'bold',
  },
  description: {
    textAlign: 'left',
    fontSize: 15,
    color: '#000000',
    fontStyle: 'italic',
  },
  btn: {
    width: 60,
    height: 60,
    borderRadius: 50,
    backgroundColor: '#FBF46D',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    bottom: 30,
    right: 30,
    elevation: 5,
  },
  btnText: {
    textAlign: 'center',
    fontWeight: 'bold',
    color: '#000000',
    fontSize: 30,
  },
})


export default Card;