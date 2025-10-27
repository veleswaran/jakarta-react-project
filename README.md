# java-jakata

Before running the project, make sure to **update the database configuration**.

**Path:**  
`backend/src/main/resources/META-INF/persistence.xml`

```xml
<persistence xmlns="https://jakarta.ee/xml/ns/persistence"
             xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
             xsi:schemaLocation="https://jakarta.ee/xml/ns/persistence
                                 https://jakarta.ee/xml/ns/persistence/persistence_3_1.xsd"
             version="3.1">

    <persistence-unit name="UserPU" transaction-type="RESOURCE_LOCAL">
        <provider>org.hibernate.jpa.HibernatePersistenceProvider</provider>
        <class>com.example.model.User</class>
        <properties>
            <property name="jakarta.persistence.jdbc.driver" value="com.mysql.cj.jdbc.Driver"/>
            <property name="jakarta.persistence.jdbc.url"
                      value="jdbc:mysql://localhost:3306/your_database_name?useSSL=false&amp;allowPublicKeyRetrieval=true&amp;serverTimezone=UTC"/>
            <property name="jakarta.persistence.jdbc.user" value="your_username"/>
            <property name="jakarta.persistence.jdbc.password" value="your_password"/>

            <property name="hibernate.dialect" value="org.hibernate.dialect.MySQL8Dialect"/>
            <property name="hibernate.hbm2ddl.auto" value="update"/>
            <property name="hibernate.show_sql" value="true"/>
            <property name="hibernate.format_sql" value="true"/>
        </properties>
    </persistence-unit>

</persistence>
```

---

### Download Payara Micro

Download the **Payara Micro 6.2025.10** JAR file and place it in the following path:

```
backend/payara-micro.jar
```

You can download it from the official Payara website:  
👉 [https://payara.fish/downloads/payara-platform-community-edition/](https://payara.fish/downloads/payara-platform-community-edition/)

---

### Running the Project

After completing the configuration:

1. Navigate to the **frontend** directory:
   ```bash
   cd frontend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the full project:
   ```bash
   npm start
   ```

This command will start both the **Jakarta backend** and the **React frontend** simultaneously.

---

✅ Once the setup is complete, your full project will be up and running.
