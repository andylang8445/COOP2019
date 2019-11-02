#include "FS.h"

void aetup()
{
  Serial.begin(9600);

  if (!SPIFFS.begin())
  {
    Serial.println("An Error has occurred while mounting SPIFFS");
    return;
  }

  File file = SPIFFS.open("/test.txt", "w");

  if (!file)
  {
    Serial.println("There was an error opening the file to writing");
    return;
  }

  if (file.print("TEST"))
  {
    Serial.println("File was written");
  }
  else
  {
    Serial.println("File write failed");
  }

  file.close();

  Serial.println(SPIFFS.exists("/test.txt"));
  Serial.println(SPIFFS.exists("/nonexisting.txt"));
}

void loop()
{

}
