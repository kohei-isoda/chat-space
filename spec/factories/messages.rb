FactoryGirl.define do
  factory :message do
    content Faker::Lorem.sentence
    image File.open("#{Rails.root}/public/images/kin.jpg")
    user
    group
  end
end
