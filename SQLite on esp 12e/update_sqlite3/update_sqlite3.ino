/*
  Open SQLite databass on SPIFFS
  and execute SQL statements throught this console.
  Output is in tab-delimited format.
  Increase stack size in cores/esp8266/cont.h
  to atleast 6144 (from 4096)
*/
#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <sqlite3.h>
#include <vfs.h>
#include <SPI.h>
#include <FS.h>
extern "C" {
#include "user_interface.h"
}
#include <ESP8266WiFi.h>

#define MAX_FILE_NAME_LEN 100
#define MAX_STR_LEN 500

void WiFiOff() {
  wifi_station_disconnect();
  wifi_set_opmode(NULL_MODE);
  wifi_set_sleep_type(MODEM_SLEEP_T);
  wifi_fpm_open();
  wifi_fpm_do_sleep(0xFFFFFFF);
}

char db_file_name[MAX_FILE_NAME_LEN] = "\0";
sqlite3 *db = NULL;
int rc;
File db_file_obj_1;

bool first_time = false;
static int callback(void *data, int argc, char **argv, char **azColName) {
  int i;
  if (first_time) {
    Serial.println((const char *) data);
    for (i = 0; i < argc; i++) {
      if (i)
        Serial.print((char) '\t');
      Serial.printf("%s", azColName[i]);
    }
    Serial.printf("\n");
    first_time = false;
  }
  for (i = 0; i < argc; i++) {
    if (i)
      Serial.print((char) '\t');
    Serial.printf("%s", argv[i] ? argv[i] : "NULL");
  }
  Serial.printf("\n");
  return 0;
}

int db_open() {
  if (db != NULL)
    sqlite3_close(db);
  vfs_set_spiffs_file_obj(&db_file_obj_1);
  int rc = sqlite3_open(db_file_name, &db);
  if (rc) {
    Serial.print(F("Can't open database: "));
    Serial.println(sqlite3_errmsg(db));
    return rc;
  } else
    Serial.println(F("Opened database successfully"));
  return rc;
}

char *zErrMsg = 0;
const char* data = "Output:";
int db_exec(const char *sql) {
  if (db == NULL) {
    Serial.println("No database open");
    return 0;
  }
  first_time = true;
  long start = micros();
  int rc = sqlite3_exec(db, sql, callback, (void*)data, &zErrMsg);
  if (rc != SQLITE_OK) {
    Serial.print(F("SQL error: "));
    Serial.println(zErrMsg);
    sqlite3_free(zErrMsg);
  } else
    Serial.println(F("Operation done successfully"));
  Serial.print(F("Time taken:"));
  Serial.print(micros() - start);
  Serial.println(F(" us"));
  return rc;
}

int input_string(char *str, int max_len, String input_data) {
  max_len--;
  int ctr = 0;
  str[ctr] = 0;
  while (str[ctr] != '\n') {
    if (Serial.available()) {
      str[ctr] = Serial.read();
      if (str[ctr] >= ' ' && str[ctr] <= '~')
        ctr++;
      if (ctr >= max_len)
        break;
    }
  }
  str[ctr] = 0;
  Serial.println(str);
}

int input_num() {
  char in[20];
  int ctr = 0;
  in[ctr] = 0;
  while (in[ctr] != '\n') {
    if (Serial.available()) {
      in[ctr] = Serial.read();
      if (in[ctr] >= '0' && in[ctr] <= '9')
        ctr++;
      if (ctr >= sizeof(in))
        break;
    }
  }
  in[ctr] = 0;
  int ret = atoi(in);
  Serial.println(ret);
  return ret;
}

void listDir(const char * dirname) {
  Serial.print(F("Listing directory: "));
  Serial.println(dirname);
  Dir dir = SPIFFS.openDir(dirname + 6);
  while (dir.next()) {
    String fileName = dir.fileName();
    size_t fileSize = dir.fileSize();
    Serial.printf("FS File: %s, size: %ld\n", fileName.c_str(), (long) fileSize);
  }
  Serial.printf("\n");
}

enum {CHOICE_OPEN_DB = 1, CHOICE_EXEC_SQL, CHOICE_EXEC_MULTI_SQL, CHOICE_CLOSE_DB,
      CHOICE_LIST_FOLDER, CHOICE_RENAME_FILE, CHOICE_DELETE_FILE
     };

int askChoice() {
  Serial.println();
  Serial.println(F("Welcome to SQLite console!!"));
  Serial.println(F("---------------------------"));
  Serial.println();
  Serial.print(F("Database file: "));
  Serial.println(db_file_name);
  Serial.println();
  Serial.println(F("1. Open database                2. Execute SQL"));
  Serial.println(F("3. Execute Multiple SQL         4. Close database"));
  Serial.println(F("5. List folder contents         6. Rename file"));
  Serial.println(F("7. Delete file"));
  Serial.println();
  Serial.print(F("Enter choice: "));
  return input_num();
}

void displayPrompt(const char *title) {
  Serial.print(F("Enter "));
  Serial.println(title);
}

void setup() {
  Serial.begin(74880);
  system_update_cpu_freq(SYS_CPU_160MHZ);
  WiFiOff();
  if (!SPIFFS.begin()) {
    Serial.println("Failed to mount SPIFFS");
    return;
  }
  sqlite3_initialize();
  input_string(db_file_name,MAX_FILE_NAME_LEN,"click_cnt.sqlite");
  //db_file_name="click_cnt.sqlite3";
}

char str[MAX_STR_LEN];

void update_or_load_sqlite3_file()
{
  int choice = askChoice();
  if(choice==1)//display cnt field
  {
    //db_open();
    sqlite3_open(db_file_name, &db);
    String sql="Select cnt(*) from log where id=1";
    
    char sql_cmd[35]="Select cnt(*) from log where id=1";
    db_exec(sql_cmd);
    sqlite3_close(db);
  }
  else if(choice==2)//increase cnt field by 1
  {
    sqlite3_open(db_file_name, &db);
    unsigned long time;
    time=millis();
    String sql="UPDATE log SET cnt=";
    sql+=time;
    sql+=" WHERE id=1";
    
    char sql_cmd[]={'U','P','D','A','T','E',' ','l','o','g',' ','S','E','T',' ','c','n','t','=',(int)time,' ','W','H','E','R','E',' ','i','d','=','1'};
    /*sql_cmd[20]=(int)time;
    sql_cmd[21]=" WHERE id=1";*/
    db_exec(sql_cmd);
    sqlite3_close(db);
    
  }
}

void loop() {
  Serial.println("Enter 1 to view the file, 2 to update the file: ");
  update_or_load_sqlite3_file();
}
