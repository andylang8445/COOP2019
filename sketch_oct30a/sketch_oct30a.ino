#include <ESP8266WiFi.h>
#include <WiFiClient.h>

unsigned long time1;
unsigned long time2 = 0;

const char* ssid = "theHacksmith";
const char* password = "iamspiderman3";

const int relay = D1;
const int input_hw = D5;

void setup() {

  Serial.begin(9600);

  pinMode(relay, OUTPUT);
  Serial.print("Pinmode for relay D1 (");
  Serial.print(relay);
  Serial.print(" set to OUTPUT\n");
  pinMode(input_hw, INPUT);
  Serial.print("Pinmode for input pin D5 (");
  Serial.print(input_hw);
  Serial.print(" set to INPUT\n");

  WiFi.mode(WIFI_STA);
  WiFi.begin(ssid, password);
  digitalWrite(relay, LOW);
}

void toggle_relay()
{
  if (digitalRead(relay) == HIGH)
  {
    digitalWrite(relay, LOW);
    Serial.print("Pin is in LOW\n");
  }
  else if (digitalRead(relay) == LOW)
  {
    digitalWrite(relay, HIGH);
    Serial.print("Pin is in HIGH\n");
  }
}
void loop() {
  time1 = millis();

  if ((time1 - time2) >= 2500)
  {
    time2 = time1;
    toggle_relay();
  }
  else;
}
