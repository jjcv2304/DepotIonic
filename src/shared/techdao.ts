import { SQLite, SQLiteDatabaseConfig, SQLiteObject } from '@ionic-native/sqlite';

export class TechDAO {
  sqlite: any;
  db: SQLiteObject;

  constructor(private _sqlite: SQLite) {
    this.sqlite = _sqlite;
  };

  public createTables() {
    this.sqlite.create({
      name: 'tech.db',
      location: 'default'
    }).then((_db: SQLiteObject) => {
      console.log("Create Database tables if they don't exist.");
      this.db = _db;

      this.createAppointmentTable();
    }).catch(e => console.log(e));
  }

  createAppointmentTable() {
    this.db.executeSql(
      'create table if not exists appointment(' +
      'ticketnumber TEXT PRIMARY KEY,' +
      'customername TEXT,' +
      'contactemail TEXT,' +
      'contactphone TEXT' +
      ')', {})
      .then(() => console.log('Executed SQL - Create Appointment Table'))
      .catch(e => console.log(e));
  }
}
