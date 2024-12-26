import { useGlobalContext } from "@/lib/global-provider";
import { Redirect, Slot } from "expo-router";
import { ActivityIndicator } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function AppLayout() {
  const { loading, isLoggedIn } = useGlobalContext();
  if (loading) {
    return (
      <SafeAreaView className="bg-white h-full justify-center items-center flex">
        <ActivityIndicator className="text-primary-300" size={"large"} />
      </SafeAreaView>
    );
  }
  if (!isLoggedIn) {
    return <Redirect href={"/sign-in"} />;
  }

  return <Slot />;
}
