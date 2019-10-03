#include <DS1302.h>
#include <MFRC522.h>

int echoPin = 12;
int trigPin = 13;

DS1302 rtc(2,3,4);
void setup(){
  Serial.begin(9600);
  rtc.setDOW(TUESDAY);
  rtc.setTime(20,59,00);
  rtc.setDate(24,9,2019);

  pinMode(trigPin, OUTPUT);
  pinMode(echoPin, INPUT);

  Serial.println("--------------");//타임스탬프
  Serial.print(rtc.getDOWStr());
  Serial.print(", ");
  Serial.print(rtc.getDateStr());
  Serial.print("--");
}
void loop(){

  digitalWrite(trigPin, LOW);
  digitalWrite(echoPin, LOW);
  delayMicroseconds(2);
  digitalWrite(trigPin, HIGH);
  delayMicroseconds(10);
  digitalWrite(trigPin, LOW);

  // echoPin 이 HIGH를 유지한 시간을 저장 한다.
    unsigned long duration = pulseIn(echoPin, HIGH); 
  // HIGH 였을 때 시간(초음파가 보냈다가 다시 들어온 시간)을 가지고 거리를 계산 한다.
  float distance = ((float)(340 * duration) / 10000) / 2;  

  Serial.println(rtc.getTimeStr());
  
  Serial.print(distance);
  Serial.println(" cm");
  delay(750);
}
