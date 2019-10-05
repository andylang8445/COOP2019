#include <ESP8266WiFi.h>

WiFiServer server(80); //Initialize the server on Port 80

void setup() {
	
	WiFi.mode(WIFI_AP); //ESP8266-12E become an AccessPoint 
	WiFi.softAP("ESP-12E", "12345678"); // Provide the (SSID, password); . 
	server.begin(); // Start the HTTP Server
	
	Serial.begin(9600); //Start communication between the ESP8266-12E and the monitor window
	IPAddress HTTPS_ServerIP= WiFi.softAPIP(); // Obtain the IP of the Server 
	Serial.print("Server IP is: "); // Print the IP to the serial window 
	Serial.println(HTTPS_ServerIP);
}

void loop() { 
	WiFiClient client = server.available();  											// server.available()

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