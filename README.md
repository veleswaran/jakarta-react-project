# java-jakata

must be alter the database config

path backend/src/main/resources/META-INF/persistence.xml

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
                        value="jdbc:mysql://localhost:3306/your database name?useSSL=false&amp;allowPublicKeyRetrieval=true&amp;serverTimezone=UTC"/>
                <property name="jakarta.persistence.jdbc.user" value="your Username"/>
                <property name="jakarta.persistence.jdbc.password" value="your password"/>

                <property name="hibernate.dialect" value="org.hibernate.dialect.MySQL8Dialect"/>
                <property name="hibernate.hbm2ddl.auto" value="update"/>
                <property name="hibernate.show_sql" value="true"/>
                <property name="hibernate.format_sql" value="true"/>
            </properties>
        </persistence-unit>

    </persistence>

download payara-micro.jar file

placed in root path like backend/payara-micro.jar
visit this url, and download payara Micro 6.2025.10
    https://payara.fish/downloads/payara-platform-community-edition/

