require 'active_record'

options = {
    adapter: 'postgresql',
    database: 'first_crud_app'
}

ActiveRecord::Base.establish_connection(options)