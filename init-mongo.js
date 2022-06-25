db.createUser(
  {
    user: "konami99",
    pwd: "7^b!Bqzo4Xer",
    roles: [
      {
        role: "readWrite",
        db: "rest-api-tutorial"
      }
    ]
  }
)