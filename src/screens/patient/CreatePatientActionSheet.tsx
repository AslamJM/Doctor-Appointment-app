import React from 'react';

import {StyleSheet} from 'react-native';
import {Actionsheet, Box, FormControl, Stack, Input, Button} from 'native-base';
import Text from '../../components/text/Text';
import Colors from '../../constants/Colors';
import {useMutation} from '@apollo/client';
import {CREATE_PATIENT} from '../../graphql/mutation/user';
import Fonts, {sizes} from '../../constants/Fonts';
import {useKeyboardBottomInset} from './PatientListScreen';

type CreatePatientSheetProps = {
  isOpen: boolean;
  onClose: () => void;
};

const CreatePatientActionSheet = ({
  onClose,
  isOpen,
}: CreatePatientSheetProps) => {
  const [name, setName] = React.useState('');
  const [age, setAge] = React.useState('');
  const [formloading, setformLoading] = React.useState(false);
  const [formerror, setformError] = React.useState<string | null>(null);

  const bottomInset = useKeyboardBottomInset();
  //const {isOpen, onClose} = useDisclose();
  const [createPatient] = useMutation(CREATE_PATIENT);

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
        refetchQueries: ['GetPatientsOfUser'],
      });
    } catch (error) {
      setformError('Something Went Wrong');
    } finally {
      setformLoading(false);
      setName('');
      setAge('');
      onClose();
    }
  };

  return (
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
                keyboardType="numeric"
              />
            </Stack>
          </FormControl>
          <Button
            mt="4"
            bg={Colors.primary}
            isDisabled={name.length === 0 || age.length === 0}
            isLoading={formloading}
            onPress={createPatientHandler}
            _spinner={{
              color: Colors.primary,
            }}
            isLoadingText="Adding..."
            _text={{
              ...Fonts.regular,
              fontSize: sizes.h3,
            }}>
            Add
          </Button>
        </Box>
      </Actionsheet.Content>
    </Actionsheet>
  );
};

export default CreatePatientActionSheet;

const styles = StyleSheet.create({
  input: {
    ...Fonts.light,
    fontSize: sizes.body3,
  },
});
