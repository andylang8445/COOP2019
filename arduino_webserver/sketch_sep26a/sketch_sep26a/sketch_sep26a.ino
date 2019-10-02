/*
  HTTP Advanced Authentication example
  Created Mar 16, 2017 by Ahmed El-Sharnoby.
  This example code is in the public domain.
*/

#include <ESP8266WiFi.h>
#include <ESP8266mDNS.h>
#include <ArduinoOTA.h>
#include <ESP8266WebServer.h>

#ifndef STASSID
#define STASSID "theHacksmith"
#define STAPSK  "iamspiderman3"
#endif

const char* ssid = STASSID;
const char* password = STAPSK;

ESP8266WebServer server(80);

const char* www_username = "admin";
const char* www_password = "admin";
// allows you to set the realm of authentication Default:"Login Required"
const char* www_realm = "Custom Auth Realm";
// the Content of the HTML response in case of Unautherized Access Default:empty
String authFailResponse = "Authentication Failed";

void setup() {
  Serial.begin(74880);
  WiFi.mode(WIFI_STA);
  WiFi.begin(ssid, password);
  if (WiFi.waitForConnectResult() != WL_CONNECTED) {
    Serial.println("WiFi Connect Failed! Rebooting...");
    delay(1000);
    ESP.restart();
  }
  ArduinoOTA.begin();

  server.on("/", []() {
    if (!server.authenticate(www_username, www_password))
      //Basic Auth Method with Custom realm and Failure Response
      //return server.requestAuthentication(BASIC_AUTH, www_realm, authFailResponse);
      //Digest Auth Method with realm="Login Required" and empty Failure Response
      //return server.requestAuthentication(DIGEST_AUTH);
      //Digest Auth Method with Custom realm and empty Failure Response
      //return server.requestAuthentication(DIGEST_AUTH, www_realm);
      //Digest Auth Method with Custom realm and Failure Response
    {
      return server.requestAuthentication(DIGEST_AUTH, www_realm, authFailResponse);
    }
    //server.send(200, "text/plain", "Login OK");
    
  });

  server.on("/html", HTTP_GET, [](){
    server.send(200, "text/html", "/index.html");
  });
  server.begin();

  Serial.print("Open http://");
  Serial.print(WiFi.localIP());
  Serial.println("/ in your browser to see it working");
    String webFile ="<!DOCTYPE html> <html> <head> <title>Arduino webpage in SD card</title> </head> <body> <center> <h1>Hello, World!</h1> <p>Web page from SD card on Arduino</p> </center> </body> </html>";
  //server.send(200, "text/html", webFile); //Send web page
}

void loop() {
  ArduinoOTA.handle();
  server.handleClient();
  delay(100);
  Serial.println(".");
  //working on it
}
