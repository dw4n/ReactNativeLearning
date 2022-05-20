import React, {useState} from 'react';
import {
  Alert,
  Button,
  Platform,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TextStyle,
  useColorScheme,
  View,
} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';

const Main = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView style={[backgroundStyle, styles.sectionContainer]}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>
        <View>
          <FormulirPendaftaran />
        </View>
        <View>
          {_Matematika.map((content, increment) => {
            return (
              <Matematika
                tanda={content.tanda}
                key={increment}
                jenis={content.jenis}
                color={content.color}
                onPress={content.onPress}
              />
            );
          })}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
    padding: 10,
  },
  textInput: {
    borderBottomColor: '#ddd',
    borderBottomWidth: 1,
    marginBottom: 15,
  },
  row: {
    flex: 1,
    flexDirection: 'row',
  },
  inputWrap: {
    flex: 1,
    borderColor: '#ccc',
    borderBottomWidth: 1,
    marginBottom: 10,
  },
  labelCenter: {
    alignItems: 'center',
    textAlign: 'center',
    fontSize: 34,
    fontWeight: 'bold',
  },
  textInputNumber: {
    borderColor: '#ddd',
    borderWidth: 1,
    marginBottom: 15,
  },
  textInputNumberSmall: {
    borderColor: '#ddd',
    borderWidth: 1,
    marginBottom: 15,
    width: 150,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    paddingBottom: 10,
  },
  tasks: {
    borderColor: '#000',
    borderBottomWidth: 1,
    padding: 5,
    marginBottom: 50,
  },

  containerMatematika: {
    flex: 1,
    padding: 10,
  },
});

const FormulirPendaftaran = () => {
  const isDarkMode = useColorScheme() === 'dark';
  const backgroundStyle = {
    backgroundColor: isDarkMode ? 'black' : 'white',
  };

  const [nama, setNama] = useState('');
  const [email, setEmail] = useState('');
  const [telepon, setTelepon] = useState('');
  const [alamat, setAlamat] = useState<string | undefined>();
  const [hobi, setHobi] = useState<string | undefined>();

  return (
    <View style={[backgroundStyle, styles.tasks]}>
      <Text style={styles.title}>Formulir Pendaftaran</Text>
      <TextInput
        style={styles.textInput}
        value={nama}
        placeholder="Nama*"
        onChangeText={val => setNama(val)}
      />
      <TextInput
        style={styles.textInput}
        value={email}
        placeholder="Email*"
        autoCapitalize="none"
        keyboardType="email-address"
        onChangeText={val => setEmail(val)}
      />
      <TextInput
        style={styles.textInput}
        value={telepon}
        placeholder="Telepon*"
        keyboardType={Platform.OS === 'android' ? 'numeric' : 'number-pad'}
        onChangeText={val => setTelepon(val.replace(/[^0-9]/g, ''))}
      />
      <TextInput
        style={styles.textInput}
        value={alamat}
        placeholder="Alamat"
        onChangeText={val => setAlamat(val)}
      />
      <TextInput
        style={styles.textInput}
        value={hobi}
        placeholder="Hobi"
        onChangeText={val => setHobi(val)}
      />
      <Button
        onPress={() => {
          // Soal 1
          // Requirement:
          // - [DONE] buat sebuah function yang apabila dipanggil
          //   menampilkan Alert dengan message isian dari form ini
          // - mengimplementasikan interface sesuai dengan tipe data masing-masing input
          // - [DONE] setelah selesai menampilkan Alert, clear semua input

          Alert.alert(
            'Success',
            'Hallo : ' +
              nama +
              ' dengan email ' +
              email +
              '. Anda sudah terdaftar dengan nomor Telepon : ' +
              telepon +
              ' di alamat : ' +
              alamat +
              '. Untuk mereset password, hobi anda adalah : ' +
              hobi,
            [
              {
                text: 'OK',
                onPress: () => {
                  console.log('OK Pressed');
                  setNama('');
                  setEmail('');
                  setTelepon('');
                  setAlamat('');
                  setHobi('');
                },
              },
            ],
          );
        }}
        title="Submit"
      />
    </View>
  );
};

interface IMatematika {
  jenis: 'Penjumlahan' | 'Pengurangan' | 'Perkalian' | 'Pembagian';
  onPress: (result: number) => void;
  warna: TextStyle['color'];
  tanda: string;
}

const Matematika = (param: IMatematika) => {
  const [input1, setInput1] = useState<string>('');
  const [input2, setInput2] = useState<string>('');

  return (
    <View style={styles.container}>
      <View style={styles.containerMatematika}>
        <Text style={[styles.title, {color: param.warna}]}>
          Matematika {param.jenis}
        </Text>
        <View style={styles.row}>
          <View style={styles.inputWrap}>
            <TextInput
              style={styles.textInputNumberSmall}
              value={input1}
              placeholder="Angka 1"
              keyboardType={
                Platform.OS === 'android' ? 'numeric' : 'number-pad'
              }
              onChangeText={val => setInput1(val.replace(/[^0-9]/g, ''))}
            />
            <View>
              <Text style={styles.labelCenter}>{param.tanda}</Text>
            </View>
            <TextInput
              style={styles.textInputNumberSmall}
              value={input2}
              placeholder="Angka 2"
              keyboardType={
                Platform.OS === 'android' ? 'numeric' : 'number-pad'
              }
              onChangeText={val => setInput2(val.replace(/[^0-9]/g, ''))}
            />
            <Button
              onPress={() => {
                let total = 0;
                let inputNumber: number = +input1;
                let inputNumber2: number = +input2;

                switch (param.jenis) {
                  case 'Penjumlahan':
                    total = inputNumber + inputNumber2;
                    break;
                  case 'Pengurangan':
                    total = inputNumber - inputNumber2;
                    break;
                  case 'Perkalian':
                    total = inputNumber * inputNumber2;
                    break;
                  case 'Pembagian':
                    total = inputNumber / inputNumber2;
                    break;
                  default:
                    break;
                }

                let result = 'Jadi hasilnya = ' + total.toString();
                console.log(result);
                Alert.alert('Success', result, [
                  {
                    text: 'OK',
                    onPress: () => {
                      console.log('OK Pressed');
                      setInput1('');
                      setInput2('');
                    },
                  },
                ]);
              }}
              title="Hitung"
            />
          </View>
        </View>
      </View>
    </View>
  );
};

const _Matematika: IMatematika[] = [
  {
    jenis: 'Penjumlahan',
    warna: 'blue',
    onPress: (result: number) =>
      Alert.alert(`Hasil dari penjumlahannya adalah ${result}`),
    tanda: '+',
  },
  {
    jenis: 'Pengurangan',
    warna: 'green',
    onPress: (result: number) =>
      Alert.alert(`Hasil dari pengurangannya adalah ${result}`),
    tanda: '-',
  },
  {
    jenis: 'Perkalian',
    warna: 'magenta',
    onPress: (result: number) =>
      Alert.alert(`Hasil dari perkaliannya adalah ${result}`),
    tanda: 'x',
  },

  {
    jenis: 'Pembagian',
    warna: 'red',
    onPress: (result: number) =>
      Alert.alert(`Hasil dari pembagiannya adalah ${result}`),
    tanda: ':',
  },
];

export default Main;
