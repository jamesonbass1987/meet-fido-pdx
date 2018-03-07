# README
# MeetFidoPDX
  A web app to connect Portlanders with fellow dog owners to foster pet meetups at local dog parks in the Portland area.

  Built using Rails 5 in --api only mode and leveraging `ActiveModelSerializer` and `JWT` gems for data serialization and authentication management with a client side React and Redux front end. It allows a users create accounts, search local area dog parks, and upload their pets to their accounts.

# About
* Ruby version
 `ruby 2.4.1p111`
* Rails version
  `Rails 5.1.4`

# Usage
After signing up or logging in, users can search parks by fenced or open area, or by clicking on the integrated Google Map markers, search users, filtering by a users favorite park or name, search dogs by breed, age, and size, or update their account information via the 'My Profile' page.

# Installation
* How to run the test suite
  - `git clone https://github.com/jamesonbass1987/meet-fido-pdx.git`
  - `cd meet-fido-pdx`
  - `bundle install`
  - `createdb meet-fido-pdx_development`
  - `rails db:migrate`
  - `rails db:seed` 
  - `cd client`
  - `npm install`
  Then `rake start` to start both servers.


# License
The app is available as open source under the terms of the MIT License.