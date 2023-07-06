import {
  StyleSheet,
  View,
  TouchableOpacity,
  Keyboard,
  Platform,
  KeyboardEvent,
} from 'react-native';
import React from 'react';

import IonIcon from 'react-native-vector-icons/Ionicons'; //person-add-sharp
import {
  Center,
  FlatList,
  HStack,
  Spinner,
  useDisclose,
  Actionsheet,
  Box,
  Input,
  FormControl,
  Stack,
  Button,
} from 'native-base';
import Text from '../../components/text/Text';
import SectionTitle from '../../components/text/SectionTitle';

import {useQuery, useMutation} from '@apollo/client';
import {GET_PATIENTS} from '../../graphql/query/patient';
import Colors from '../../constants/Colors';
import ErrorComponent from '../../components/ErrorComponent';
import PatientCard from '../../components/cards/PatientCard';
import Fonts, {sizes} from '../../constants/Fonts';
import {CREATE_PATIENT} from '../../graphql/mutation/user';
import {isClerkAPIResponseError} from '@clerk/clerk-expo';

// hook for get the keyboard inset
const useKeyboardBottomInset = () => {
  const [bottom, setBottom] = React.useState(0);
  const subscriptions = React.useRef<any[]>([]);

  React.useEffect(() => {
    function onKeyboardChange(e: KeyboardEvent) {
      setBottom(e.endCoordinates.height);
    }

    if (Platform.OS === 'ios') {
      subscriptions.current = [
        Keyboard.addListener('keyboardWillChangeFrame', onKeyboardChange),
      ];
    } else {
      subscriptions.current = [
        Keyboard.addListener('keyboardDidHide', onKeyboardChange),
        Keyboard.addListener('keyboardDidShow', onKeyboardChange),
      ];
    }
    return () => {
      subscriptions.current.forEach(subscription => {
        subscription.remove();
      });
    };
  }, [setBottom, subscriptions]);

  return bottom;
};

const PatientListScreen = () => {
  const {isOpen, onOpen, onClose} = useDisclose();
  const {data, loading, error, refetch} = useQuery(GET_PATIENTS);
  const [createPatient] = useMutation(CREATE_PATIENT);

  const [name, setName] = React.useState('');
  const [age, setAge] = React.useState('');
  const [formloading, setformLoading] = React.useState(false);
  const [formerror, setformError] = React.useState<string | null>(null);

  const bottomInset = useKeyboardBottomInset();

  const renderPatients = () => {
    if (loading) {
      return (
        <Center my="3">
          <Spinner color={Colors.primary} />
        </Center>
      );
    }
    if (error) {
      return <ErrorComponent error={error} />;
    }
    const patients = data?.getPatientsOfUser;
    return (
      <FlatList
        data={patients}
        keyExtractor={item => item!.id}
        renderItem={({item}) => {
          return <PatientCard name={item!.name} age={item!.age!} />;
        }}
      />
    );
  };

  const createPatientHandler = async () => {
    setformLoading(true);
    try {
      const res = await createPatient({
        variables: {
          input: {
            name,
            age: Number(age),
          },
        },
      });
      if (res.data && res.data.createPatient.success) {
        refetch();
      }
    } catch (error) {
      if (isClerkAPIResponseError(error)) {
        setformError(error.message);
      } else {
        setformError('Something Went Wrong');
      }
    } finally {
      setformLoading(false);
      setName('');
      setAge('');
      onClose();
    }
  };

  return (
    <View style={styles.main}>
      <TouchableOpacity style={styles.addBtn} onPress={onOpen}>
        <HStack py="3" mx="auto">
          <IonIcon name="person-add-sharp" size={22} />
          <Text h3 style={{marginLeft: 12, fontWeight: '600'}}>
            Add a Patient
          </Text>
        </HStack>
      </TouchableOpacity>
      <Actionsheet isOpen={isOpen} onClose={onClose}>
        <Actionsheet.Content bottom={bottomInset}>
          <Box w="100%" h={250} px={4} justifyContent="center">
            <FormControl>
              <Stack>
                <FormControl.Label>
                  <Text h4>Patient Name</Text>
                </FormControl.Label>
                <Input
                  focusOutlineColor={Colors.primary}
                  style={styles.input}
                  value={name}
                  onChangeText={setName}
                />
              </Stack>
            </FormControl>
            <FormControl>
              <Stack>
                <FormControl.Label>
                  <Text h4>Patient Age</Text>
                </FormControl.Label>
                <Input
                  focusOutlineColor={Colors.primary}
                  style={styles.input}
                  value={age}
                  onChangeText={setAge}
                />
              </Stack>
            </FormControl>
            <Button
              mt="4"
              bg={Colors.primary}
              isDisabled={name.length === 0 || age.length === 0}
              isLoading={formloading}
              onPress={createPatientHandler}>
              <Text h3 style={{color: Colors.white}}>
                {loading ? 'Adding...' : 'Add'}
              </Text>
            </Button>
          </Box>
        </Actionsheet.Content>
      </Actionsheet>
      <SectionTitle>Patients List</SectionTitle>
      {renderPatients()}
    </View>
  );
};

export default PatientListScreen;

const styles = StyleSheet.create({
  main: {
    flex: 1,
    paddingHorizontal: 10,
  },
  addBtn: {
    marginVertical: 15,
    borderWidth: 1,
    borderRadius: 8,
    borderColor: Colors.primary,
    backgroundColor: Colors.white,
  },
  input: {
    ...Fonts.light,
    fontSize: sizes.body3,
  },
});
