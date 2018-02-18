# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20180218191622) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "ages", force: :cascade do |t|
    t.string "name"
  end

  create_table "breeds", force: :cascade do |t|
    t.string "name"
  end

  create_table "dog_images", force: :cascade do |t|
    t.string "image_url", default: "https://imgur.com/6M8RDvc"
    t.string "image_alt", default: "MeetFidoPDX"
    t.integer "dog_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "dogs", force: :cascade do |t|
    t.string "name"
    t.integer "user_id"
    t.integer "breed_id"
    t.integer "age_id"
    t.integer "size_id"
    t.text "description"
    t.integer "preferred_park_id"
    t.integer "neighborhood_id"
    t.string "sex"
    t.string "profile_image_url"
  end

  create_table "neighborhoods", force: :cascade do |t|
    t.string "name"
  end

  create_table "parks", force: :cascade do |t|
    t.string "name"
    t.text "description"
    t.string "address_1"
    t.string "address_2"
    t.boolean "fenced"
    t.string "hours_open"
    t.string "hours_close"
    t.decimal "loc_latitude"
    t.decimal "loc_longitude"
    t.string "image_url"
  end

  create_table "sizes", force: :cascade do |t|
    t.string "name"
  end

  create_table "user_parks", force: :cascade do |t|
    t.string "user_id"
    t.string "park_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "users", force: :cascade do |t|
    t.string "username"
    t.string "password_digest"
    t.string "email"
    t.string "profile_image_url", default: "https://i.imgur.com/jNNT4LE.jpg"
    t.integer "neighborhood_id"
    t.string "bio"
  end

end
