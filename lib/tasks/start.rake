desc "starts server via foreman"
task :start do
  exec 'foreman start -p 3000'
end