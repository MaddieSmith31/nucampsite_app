import React from "react";
////////// NOTE: The View component is not used here.
// OLD CODE:    import { ScrollView, Text, View } from "react-native";
import { ScrollView, Text } from "react-native";
////////// END NOTE
import { Card } from "react-native-elements";

const ContactScreen = () => {
  return (
    <ScrollView>
      <Card wrapperStyle={{ margin: 20 }}>
        <Card.Title>Contact Information</Card.Title>
        <Card.Divider />
        <Text>1 Nucamp Way</Text>
        <Text>Seattle, WA 98001</Text>
        {
          ////////// FIX 1: There are two ways to accomplish this line spacing. One is like the assignment said -- adding a "marginBottom" style of 10 pixels to this Text component.
          // OLD CODE:
          /*
        <Text>U.S.A{"\n"}</Text>

        {
            // seperate line
        }
*/
        }
        <Text style={{ marginBottom: 10 }}>U.S.A.</Text>
        {
          // The other way is to use two newline characters.
          /* DEMONSTRATION OF SECOND METHOD
        <Text>U.S.A.{'\n\n'}</Text>
*/
          ////////// END FIX 1
        }

        <Text>Phone: 1-206-555-1234</Text>
        <Text>Email: campsites@nucamp.co</Text>
      </Card>
    </ScrollView>
  );
};

export default ContactScreen;
