desc 'starts api server on PORT 3001'
task :start_api do
  exec 'rails s -p 3001'
end