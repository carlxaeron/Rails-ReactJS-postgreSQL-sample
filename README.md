# Rails-ReactJS-postgreSQL-sample

## Directory Structure

* `app/javascript`: Contains JavaScript files for the ReactJS frontend.
* `app/javascript/components`: Contains ReactJS components.
* `app/javascript/utils`: Contains utility functions and helper methods for the ReactJS frontend.
* `app/javascript/services`: Contains service files for handling API calls and other external interactions.
* `app/javascript/styles`: Contains CSS or SCSS files for styling the ReactJS components.
* `app/javascript/hooks`: Contains custom React hooks to encapsulate reusable logic.
* `app/javascript/assets`: Contains static assets such as images, fonts, and other media files.
* `spec`: Contains RSpec tests for the Rails application.
* `spec/javascripts`: Contains JavaScript tests for the ReactJS frontend.
* `lib`: Contains custom libraries and modules for the Rails application.
* `config/initializers`: Contains configuration files for initializing various aspects of the Rails application.

## Environment Variables Setup

### Rails

1. Create a `.env` file in the root directory with the following content:
   ```
   MYAPP_DATABASE_PASSWORD=your_database_password
   MYAPP_DATABASE_HOST=localhost
   MYAPP_DATABASE_PORT=5432
   ```

2. Ensure that the `dotenv-rails` gem is included in the `Gemfile` to load the environment variables.

3. Update the `config/application.rb` to load the environment variables from the `.env` file.

### ReactJS

1. Create a `.env` file in the `app/javascript` directory with the following content:
   ```
   REACT_APP_API_URL=http://localhost:3000/api
   REACT_APP_OTHER_VARIABLE=some_value
   ```
