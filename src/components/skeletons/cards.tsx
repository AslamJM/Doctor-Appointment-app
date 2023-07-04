import {Skeleton, Center, Flex, HStack} from 'native-base';
import React from 'react';
import Colors from '../../constants/Colors';

const SpecialitySkeleton = () => {
  return (
    <Center width={140} height={120} background={Colors.white} mx={2} p="2">
      <Skeleton h="50" w="50" />
      <Skeleton.Text px="4" my={2} />
    </Center>
  );
};

const SpecialitySkeletonVertical = () => {
  return (
    <Flex direction="row" h="140" my={2} px="3">
      <Skeleton h="50" w="50" />
      <Skeleton flex={1} h="20" />
    </Flex>
  );
};

const HospitalSkeleton = () => {
  return (
    <Flex direction="row" h="140" my={2}>
      <Skeleton flex={1} h="100%" />
      <Skeleton.Text flex={3} px="4" />
    </Flex>
  );
};

const DoctorSkeleton = () => {
  return (
    <Flex direction="row" h="140" my={2}>
      <Skeleton w="129" h="129" rounded="full" />
      <Skeleton.Text flex={1} px="4" />
    </Flex>
  );
};

const SlotSkeleton = () => {
  return <Skeleton width="100" m={1} />;
};

const MapSkeleton = () => {
  return <Skeleton h="270" rounded="md" startColor={Colors.primary} />;
};

const ProfileSkeleton = () => {
  return (
    <HStack p="4">
      <Skeleton h="50" w="50" rounded="full" />
      <Skeleton.Text mx="4" />
    </HStack>
  );
};

export {
  SpecialitySkeleton,
  HospitalSkeleton,
  DoctorSkeleton,
  SlotSkeleton,
  SpecialitySkeletonVertical,
  MapSkeleton,
  ProfileSkeleton,
};
