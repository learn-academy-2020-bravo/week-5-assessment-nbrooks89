# ASSESSMENT 5: Interview Practice Questions

Answer the following questions. First, without external resources. Challenge yourself to answer from memory. Then, research the question to expand on your answer. Even if you feel you have answered the question completely on your own there is always something more to learn.   

1. Rails follows an MVC pattern. What does that mean?

  Your answer: MVC is a pattern of how information goes to and from the database and to the viewer. MVC stands for Model, View, Controller. The model is how we directley interact with the database, how we can easily interact and update the database. The C stands for controller. the controller is what coordinates the interactions between the model and the view. The the view is what takes the information from the controller and displays that content to the browser. The view is what the user sees.the view only directly interacts with the controller and the controller only interacts with the model.

  Researched answer:MVC stands for Model (M), View (V), and Controller ©.
On this architecture, we have the “separation of the concerns” among Models, Views and, Controllers. Each part has its own responsibility. Let’s dive in each part.
Model
“Maintains the relationship between Object and Database and handles validation, association, transactions”
It means that the model will maintain an extreme relation with the Database. Each model (can) represent a database table (in case of SQL databases). This model object gains capabilities (inherited from ActiveRecord — Rails class) to retrieve, save, edit, and delete data from database table. We use model objects as a layer between our application and the database.
Besides that relation with the database, the model can create validations and associations between models.
View
“A presentation of data in a particular format, triggered by a controller’s decision to present the data.”
It is the presentation of the request’s response. This presentation can be a bunch of format types: PDF, HTML, JSON, etc. The final result of a view will be probably the user interface (UI) — Part of the “Client”.
For most pages on the web, the views will be an HTML styled with CSS and JS. But we can implement PDFs of user behavior on a Travel digital product to show all employees how people use their website too.
Controller
“The facility within the application that directs traffic, on the one hand querying the models for specific data, and on the other hand organizing that data (searching, sorting) into a form that fits the needs of a given view.”
The controller is the “Maestro”. It takes care of the flow: uses models to do queries, parses data, make decisions in which format you’ll present the data.



2. What does it mean if an application has CRUD? What does CRUD stand for?

  Your answer:if an application has CRUD it is a fully functional application. CRUD stands for Create, Read, Update, Destroy
  create is creating and insterting data into the database, read is being able to view it, see the result of what you created, update is being able to interact and update the what you created, destroy is being able to destroy is being able to delete what you have updated.

  Researched answer:In computer programming, create, read, update, and deleteare the four basic functions of persistent storage.
  The acronym CRUD refers to all of the major functions that are implemented in relational database applications. Each letter in the acronym can map to a standard SQL statement:The commands corresponding to these operations in SQL are INSERT, SELECT, UPDATE and DELETE. INSERT adds new records, SELECT retrieves or selects existing records based on selection conditions, UPDATE modifies existing records and DELETE removes tables or records.

  When we are building APIs, we want our models to provide four basic types of functionality. The model must be able to Create, Read, Update, and Delete resources. Computer scientists often refer to these functions by the acronym CRUD. A model should have the ability to perform at most these four functions in order to be complete. If an action cannot be described by one of these four operations, then it should potentially be a model of its own.



3. What is a migration? Why would you use one?

  Your answer: Migration is when you interact or change the database. when you migrate you create a file and it is timestamped so it is saved in the database and you can refrence the change. migration allows you to add a model and table data to the database via active record
  . migration also allows you to  update and change the database at anytime.

  Researched answer: Migrations are a convenient way to alter your database schema over time in a consistent way. They use a Ruby DSL so that you don't have to write SQL by hand, allowing your schema and changes to be database independent.

You can think of each migration as being a new 'version' of the database. A schema starts off with nothing in it, and each migration modifies it to add or remove tables, columns, or entries. Active Record knows how to update your schema along this timeline, bringing it from whatever point it is in the history to the latest version. Active Record will also update your db/schema.rb file to match the up-to-date structure of your database.




4. Describe a possible relationship between a model called Person and a model called Computer. Based on your description, which model would hold the foreign key?

  Your answer: The relationship between a model called person and a model called Computer would be a belongs_to relationship. the the Computer model would belong_to the Person model, and the person model has_one computer. the Person model would hold the foeign key. the Computer entry would not exist if it wasnt attached to a Person.

  Researched answer:


5. What is object-relational mapping?

  Your answer:Object-relational mapping is allowing use to interact with the database using object oriented programing. in the case of using rails the object relational mapping is being preccessed by the active record. active record is what allows us to use OOP while interacting with the database.

  Researched answer:Object Relational Mapping (ORM) is a technique for managing and interacting with data that come from incompatible data sources. Sometimes referred to as “an” ORM, thus “Object Relational Mapper.”Rails applications use an ORM framework called Active Record to manage this mapping process. Once your applications incorporate the use of formal databases, frameworks like Active Record allow you to dictate the loading of data into your system using (in this case) Ruby objects. We refer to Active Record as an Object Relational Mapper. The details of how you get your Ruby class to map to the database and what’s in that Ruby class will depend on what ORM you’re using.



## Looking Ahead: Terms for Next Week

Research and define the following terms to the best of your ability.
- RESTful routes
- JSON
- API
- Endpoints
- Strong params
