class AgeSerializer < ActiveModel::Serializer
     attributes :name

     has_many :dogs
end