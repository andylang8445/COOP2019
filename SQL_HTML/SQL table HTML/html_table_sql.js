    var dbConnection = SQL.connect({
        Driver: "MySQL",
        Host: "localhost",
        Port: 3306,
        Database: "test",
        UserName: "root",
        Password: "0000" });
    var sql = "SELECT * FROM index1";
    var result = dbConnection.query(sql);
    if (!result.isValid) {
        test.fail("Entry not found.");
    } else {
        test.compare(result.value("id"), context.userData.formValues[0]);
        test.compare(result.value("name"), context.userData.formValues[1]);
        test.compare(result.value("birthday"), context.userData.formValues[2]);
        test.compare(result.value("age"), context.userData.formValues[3]);
    }
    dbConnection.close();