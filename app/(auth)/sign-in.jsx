import { View, Text, Image, ScrollView } from 'react-native';
import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { images } from '../../constants';
import FormField from '../../components/FormField';
import CustomButton from '../../components/CustomButton';
import { router } from 'expo-router';  // Import router for navigation
import { Link } from 'expo-router';


const SignIn = () => {
  const [form, setForm] = useState({
    email: '',
    password: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Handle the sign-in process and navigate to the home screen
  const submit = () => {
    setIsSubmitting(true);

    // Simulate an async action like sign-in process
    setTimeout(() => {
      setIsSubmitting(false);

      // After the "sign-in" is successful, navigate to the home page
      router.push('/home');  // Navigate to the Home screen
    }, 2000);  // Simulate a delay (2 seconds)
  };

  return (
    <SafeAreaView className="bg-green-950 h-full">
      <ScrollView>
        <View className="w-full justify-center items-center h-full px-4 my-6">
          <Image
            source={images.imagelogo}
            resizeMode="contain"
            className="w-[1000px] h-[300px]"
          />
          <Text className="text-2xl text-white mt-10 font-u_regular">Log in to EzShop</Text>
          <FormField
            title="Email"
            value={form.email}
            handleChangeText={(e) => setForm({ ...form, email: e })}
            otherStyles="mt-7"
            keyboardType="email-address"
          />
          <FormField
            title="Password"
            value={form.password}
            handleChangeText={(e) => setForm({ ...form, password: e })}
            otherStyles="mt-7"
            secureTextEntry
          />
          <CustomButton
            title="Sign In"
            handlePress={submit}  // Handle sign-in and navigate to Home
            containerStyles="w-full mt-7"
            isLoading={isSubmitting}
          />

          <View className="flex justify-center pt-5 flex-row gap-2">
            <Text className="text-lg text-gray-100 font-pregular">
              Don't have an account?
            </Text>
            <Link href="/sign-up" className="text-lg font-u_bold text-orange-600">
              Signup
            </Link>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignIn;
