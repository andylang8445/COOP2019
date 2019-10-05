#include <SPI.h>
#include <ESP8266WiFi.h>
#include <Wifi.h>
#include <SD.h>

char ssid[] = "yourWifi"; 																//ssid of the wifi the arduino is conneected to
char pass[] = "password"; 																//password of the wifi
int keyIndex = 0; 																		//network key index number (for WEP)

int status = WL_IDLE_STATUS;

WiFiServer server(80);

File webFile;

void setup()
{     
    Serial.begin(9600);      
	
	while (!Serial) {
    ; 																					// wait for serial port to connect. Needed for native USB port only
  }
  
  if (WiFi.status() == WL_NO_SHIELD) {													//if the wifi shield is not connected or found
    Serial.println("WiFi shield not present");
																						// don't continue:
    while (true);
  }
    
																						// attempt to connect to Wifi network:
  while (status != WL_CONNECTED) {
    Serial.print("Attempting to connect to SSID: ");
    Serial.println(ssid);
																						// Connect to WPA/WPA2 network. Change this line if using open or WEP network:
    status = WiFi.begin(ssid, pass);

																						// wait 10 seconds for connection:
    delay(10000);
  }
  server.begin();
																						// you're connected now, so print out the status:
  printWifiStatus();
  
	pinMode(4, OUTPUT);
	digitalWrite(4, HIGH);
	
    Serial.println("Initializing SD card...");
    if (!SD.begin(4)) {
        Serial.println("ERROR - SD card initialization failed!");
        return;    
    }
    Serial.println("SUCCESS - SD card initialized.");
    if (!SD.exists("index.htm")) {
        Serial.println("ERROR - Can't find index.html file!");
        return;  
    }
    Serial.println("SUCCESS - Found index.html file.");
}

void loop()
{
																						// if an incoming client connects, there will be bytes available to read:
    WiFiClient = server.available();      												// server.available()

    if (client) {  
		Serial.print("new Client connected");
        boolean currentLineIsBlank = true;
        while (client.connected()) {
            if (client.available()) {   
                char c = client.read(); 
                if (c == '\n' && currentLineIsBlank) {
                    client.println("HTTP/1.1 200 OK");
                    client.println("Content-Type: text/html");
                    client.println("Connection: close");								// the connection will be closed after completion of the response
					client.println("Refresh: 5");  										// refresh the page automatically every 5 sec
                    client.println();

                    webFile = SD.open("index.html");       
                    if (webFile) {
                        while(webFile.available()) {
                            client.write(webFile.read()); 
                        }
                        webFile.close();
                    }
                    break;
                }
                if (c == '\n') {														// you're starting a new line
                    currentLineIsBlank = true;
                } 
                else if (c != '\r') {													// you've gotten a character on the current line
                    currentLineIsBlank = false;
                }
            } 
        } 
        delay(1);      
        client.stop(); 
		Serial.println("client disonnected");
    } 
}

void printWifiStatus() {
																						// print the SSID of the network you're attached to:
  Serial.print("SSID: ");
  Serial.println(WiFi.SSID());

																						// print your WiFi shield's IP address:
  IPAddress ip = WiFi.localIP();
  Serial.print("IP Address: ");
  Serial.println(ip);

																						// print the received signal strength:
  long rssi = WiFi.RSSI();
  Serial.print("signal strength (RSSI):");
  Serial.print(rssi);
  Serial.println(" dBm");
}