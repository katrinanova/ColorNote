# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

user = User.create!(email: "sennacy@cats.com", password: "111111")
user.notebooks.create!(title: "Workout tips")
user.notebooks.first.notes.create!(title: "Tale workout", body: "1) Stretch tail left ~ 3 minutes
2) Stretch tail rigth ~ 3 minutes 3) Stretch  tail up ~ 5 minutes")
user.notebooks.first.notes.create!(title: "Downward Facing Cat", body: "Downward Cat is used in most yoga practices and it stretches and strengthens the entire body. I always say, “a down cat a day keeps the doctor away.” How to do it: Come on to all fours with your wrists under your shoulders and knees under your hips. Tuck under your toes and lift your hips up off the floor as you draw them up at back towards your heels. Keep your knees slightly bent if your hamstrings are tight, otherwise try and straighten out your legs while keeping your hips back. Walk your hands forward to give yourself more length if you need to. Press firmly through your palms and rotate the inner elbows towards each other. Hollow out the abdominals and keep engaging your legs to keep the torso moving back towards the thighs. Hold for 5-8 breaths before dropping back to hands and knees to rest.")

user.notebooks.first.notes.create!(title: "Cat-Cow Pose", body: "Cat-Cow Pose teaches us how to balance on our hands while using the entire body to support us. It is a great way to strengthen the abdominals, and learn to use the breath to help us stay in a challenging pose. How to do it: From all fours, tuck under your toes and lift your legs up off the mat. Slide your heels back enough until you feel you are one straight line of energy from your head to your feet. Engage the lower abdominals, draw the shoulders down and away from the ears, pull your ribs together and breathe deeply for 8-10 breaths.")
