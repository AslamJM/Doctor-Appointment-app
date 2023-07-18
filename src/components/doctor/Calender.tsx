/* eslint-disable react-native/no-inline-styles */
import CalendarStrip from 'react-native-calendar-strip';

import {View} from 'react-native';
import React from 'react';
import Colors from '../../constants/Colors';
import dayjs from 'dayjs';
import {useAppContext} from '../../context/GlobalContext';

const Calender = () => {
  const {setSelectedDate} = useAppContext();

  return (
    <View style={{marginVertical: 10}}>
      <View style={{paddingHorizontal: 10}}>
        <CalendarStrip
          style={{
            height: 100,
            paddingTop: 8,
            paddingBottom: 8,
          }}
          highlightDateContainerStyle={{
            backgroundColor: Colors.primary,
            alignItems: 'center',
            justifyContent: 'center',
            padding: 4,
          }}
          onDateSelected={e => setSelectedDate(e.toDate().toDateString())}
          selectedDate={new Date(dayjs().toISOString())}
          dateNumberStyle={{color: 'black', fontSize: 15.0}}
          dateNameStyle={{color: 'black', fontSize: 14.0}}
          highlightDateNameStyle={{color: 'white', fontSize: 14.0}}
          highlightDateNumberStyle={{color: 'white', fontSize: 15.0}}
          //   datesBlacklist={date => {
          //     return dayjs().isBefore(date.toISOString());
          //   }}
          disabledDateOpacity={0.6}
          disabledDateNameStyle={{color: 'gray', fontSize: 14.0}}
          disabledDateNumberStyle={{color: 'gray', fontSize: 15.0}}
          useIsoWeekday={false}
          scrollable={true}
          upperCaseDays={false}
          styleWeekend={true}
        />
      </View>
    </View>
  );
};

export default Calender;
