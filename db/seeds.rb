# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

user = User.create!(email: "sennacy@cats.com", password: "111111")
user.notebooks.create!(title: "Workout tips")

user.notebooks.first.notes.create!(title: "Downward Facing Cat", color: "Blue", body: "Downward Cat is used in most yoga practices and it stretches and strengthens the entire body. \r\n\r\nI always say, “a down cat a day keeps the doctor away.” \r\n\r\nHow to do it: Come on to all fours with your wrists under your shoulders and knees under your hips. \r\n\r\nTuck under your toes and lift your hips up off the floor as you draw them up at back towards your heels. Keep your knees slightly bent if your hamstrings are tight, otherwise try and straighten out your legs while keeping your hips back. Walk your hands forward to give yourself more length if you need to. \r\n\r\nPress firmly through your palms and rotate the inner elbows towards each other. \r\n\r\nHollow out the abdominals and keep engaging your legs to keep the torso moving back towards the thighs. Hold for 5-8 breaths before dropping back to hands and knees to rest.")

user.notebooks.first.notes.create!(title: "Cat-Cow Pose", color: "Green", body: "Cat-Cow Pose teaches us how to balance on our hands while using the entire body to support us. \r\n\r\nIt is a great way to strengthen the abdominals, and learn to use the breath to help us stay in a challenging pose. \r\n\r\nHow to do it: From all fours, tuck under your toes and lift your legs up off the mat. \r\n\r\nSlide your heels back enough until you feel you are one straight line of energy from your head to your feet. \r\n\r\nEngage the lower abdominals, draw the shoulders down and away from the ears, pull your ribs together and breathe deeply for 8-10 breaths.")

user.notebooks.first.notes.create!(title: "Dolphin", body:'How to do it: Chant "bye-bye batwings"! \r\n\r\nBegin on your hands and knees, then lower your elbows to the floor, shoulder-distance apart. Interlace fingers, tuck your toes, and press hips up to create a long line between elbows and sitting bones (aka your butt). \r\n\r\nSlowly squeeze your upper arms inward to work biceps, triceps, and shoulders. \r\n\r\nBreathe and repeat.')

user.notebooks.first.notes.create!(title: "Boat Pose", body:'How to do it: Celeb yogini loves this move! \r\n\r\nSit up high and straight, hands beneath your knees. \r\n\r\nSlowly tighten your abs and lift your feet off the floor, knees bent, with your legs at a 45-degree angle. \r\n\r\nIf this feels easy, straighten your legs and arms. Breathe and slowly lower.')

user.notebooks.first.notes.create!(title: "Downward Dog Split Pose", body:'How to do it: Begin on hands and knees. \r\n\r\nTake a big breath out and push into Downward Dog by straightening legs and lifting your hips and butt in the air. \r\n\r\nRelax head between straightened arms. Exhale and lift one leg as high as you can into the air, flexing foot. \r\n\r\nRepeat on other side.')

user.notebooks.first.notes.create!(title: "Cow Pose", body:'How to do it: This move looks relaxing but is one of the toughest hip strengtheners and openers. Start on your hands and knees, and slide your right leg back to cross over your left leg. \r\n\r\nGradually sit back between your heels, using a rolled up towel or block if you can’t sit on the ground. \r\n\r\nHold as long as you feel comfortable, then switch legs and repeat.')

user.notebooks.first.notes.create!(title: "Side Plank Pose", color: "Blue", body:'How to do it: From plank position, press your right hand into a mat and turn your body so your weight is on the outer edge of your right foot. \r\n\r\nBrace your core and keep your arms elevated over your head. \r\n\r\nOption to bend your leg and place it behind you for support, or, if you’re super fit, to rock a few mid-air crunches like our model Jillian Michaels!')

user.notebooks.first.notes.create!(title: "Tadasana", body: "This basically means 'standing posture'. Stand straight by evenly spreading your weight on all areas of both feet.\r\n\r\n Make sure that your body is stretched, shoulders are aligned with your hips, hands are hanging straight at the sides of your thighs, neck is stretched and the crown of your head is raised. Breathe in and out deeply and slowly.")

user.notebooks.first.notes.create!(title: "Malasan", body: "This is the squatting posture that comes naturally to children, but most adults are out of practice. Bend your knees and squat by spreading your weight evenly on both feet. Stretch your body and neck and join the palms of your hands.\r\n\r\n

The above are some of the basic yoga poses for beginners at home. There are many other postures that you can do either standing or sitting, such as forward bend, reclining position, side bend and twists that you can easily learn and quickly incorporate into your workout.")

user.notebooks.first.notes.create!(title: "Threading The Needle", body: "INSTRUCTIONS\r\n\r\n

1. On you hands and knees in Table pose, slide the right hand between the left hand and left knee. Slide the arm all the way out to the left so that the right shoulder and side of the head rest comfortably on the floor.\r\n\r\n

2. Inhale and reach the left hand up towards the ceiling. At first explore the posture with the arm, finding the place were you feel the deepest stretch, then stay there and reach out through the fingers.\r\n\r\n

3. Breathe and hold for 3-6 breaths.\r\n\r\n

4. To release: exhale the palm back to the floor and slowly inhale back to Table pose.\r\n\r\n

5. Repeat on the other side.")



user.notebooks.first.notes.create!(title: "Sukhasana", body: "INSTRUCTIONS

1. Come into a seated position with the buttocks on the floor, then cross the legs, placing the feet directly below the knees. Rest the hands on the knees or the lap with the palms facing up or down.\r\n\r\n

Optional: Use a hand mudra while seated in the posture.\r\n\r\n

2. Press the hip bones down into the floor and reach the crown of the head up to lengthen the spine. Drop the shoulders down and back, and press the chest towards the front of the room.\r\n\r\n

3. Relax the face, jaw, and belly. Let the tongue rest on the roof of the mouth, just behind the front teeth.\r\n\r\n

4. Breathe deeply through the nose down into the belly. Hold as long as comfortable.\r\n\r\n

BENEFITS + CONTRAINDICATIONS\r\n\r\n

Benefits: Easy pose is a comfortable seated position for meditation. This pose open the hips, lengthens the spine and promotes groundedness and inner calm.\r\n\r\n

Contraindications: Recent or chronic knee or hip injury or inflammation.\r\n\r\n

MODIFICATIONS + VARIATIONS\r\n\r\n

Modifications: Place folded blanket under knees or under the hip bones.

Variations: This pose is very similar to Accomplished pose, Siddhasana.")

user.notebooks.first.notes.create!(title: "Seated Forward Bend", body: "INSTRUCTIONS\r\n\r\n

1. From Staff pose, inhale the arms up over the head and lift and lengthen up through the fingers and crown of the head.\r\n\r\n

2. Exhale and hinging at the hips, slowly lower the torso towards the legs.  Reach the hands to the toes, feet or ankles.\r\n\r\n

3. To deepen the stretch: A) Use the arms to gently pull the head and torso closer to the legs.  B) Press out through the heels and gently draw the toes towards you.\r\n\r\n

4. Breathe and hold for 3-8 breaths.\r\n\r\n

5. To release: A) Slowly roll up the spine back into Staff pose.  B) Inhale the arms back over your head as you lift the torso back into Staff pose.\r\n\r\n

BENEFITS + CONTRAINDICATIONS\r\n\r\n

Benefits: Seated forward fold provides a deep stretch for entire back side of body from the heels to the neck. Forward fold calms the nervous system and emotions and stimulates the reproductive and urinary systems.\r\n\r\n

Contraindications: Recent or chronic injury to the arms, hips, ankles or shoulders.\r\n\r\n

MODIFICATIONS + VARIATIONS\r\n\r\n

Modifications: If you cannot reach your hands to the feet: A) Use a yoga strap around the feet and hold on to the strap with both hands.  B) Bend the knees enough to reach the feet with the hands and to place the head on the knees.\r\n\r\n

Variations: If you have the flexibility, reach the hands in front of the foot, clasping hand to wrist.")

user.notebooks.first.notes.create!(title: "Child", body:"INSTRUCTIONS\r\n\r\n

1. From Table pose, exhale and lower the hips to the heels and forehead to the floor. Have the knees together or if more comfortable, spread the knees slightly apart.\r\n\r\n

2. The arms can be overhead with the palms on the floor, the palms or fists can be stacked under the forehead, or the arms can be along side the body with the palms up.\r\n\r\n

3. Breathe slowly and deeply, actively pressing the belly against the thighs on the inhale.\r\n\r\n

4. Breathe and hold for 4-12 breaths.\r\n\r\n

5. To release: place the palms under the shoulders and slowly inhale up to a seated position.\r\n\r\n

BENEFITS + CONTRAINDICATIONS\r\n\r\n

Benefits: Child pose calms the body, mind and spirit and stimulates the third eye point. Child pose gently stretches the low back, massages and tones the abdominal organs, and stimulates digestion and elimination.\r\n\r\n

Contraindications: Recent or chronic injury to the knees.\r\n\r\n

MODIFICATIONS + VARIATIONS\r\n\r\n

Modifications: A) Place a blanket under the hips, knees and/or head. B) If pregnant, spread the knees wide apart to remove any pressure on the abdomen.\r\n\r\n

Variations: Open the knees wider to slide the arms between the legs reaching under the body and turn the head to the side.")

user.notebooks.first.notes.create!(title: "Accomplished Pose", body:"INSTRUCTIONS\r\n\r\n

1. With the buttocks on the floor, cross the legs, placing one foot to close to the inner thigh and then the other foot close to the ankle so both heels are almost at your midline. Rest the hands on the knees or in the lap with the palms facing up or down.\r\n\r\n

Optional: Use a hand mudra while seated in the posture.\r\n\r\n

2. Press the hip bones down into the floor and reach the crown of the head up to lengthen the spine. Drop the shoulders down and back, and press the chest towards the front of the room.\r\n\r\n

3. Relax the face, jaw, and belly. Let the tongue rest on the roof of the mouth, just behind the front teeth.\r\n\r\n

4. Breathe deeply through the nose down into the belly. Hold as long as comfortable.\r\n\r\n

BENEFITS + CONTRAINDICATIONS\r\n\r\n

Benefits: Accomplished pose is a comfortable seated position for meditation. This pose open the hips, lengthens the spine and promotes groundedness and inner calm.\r\n\r\n

Contraindications: Recent or chronic knee or hip injury or inflammation.\r\n\r\n

MODIFICATIONS + VARIATIONS\r\n\r\n

Modifications: Place folded blanket under knees or under the hip bones.\r\n\r\n

Variations: This pose is very similar to Easy pose, Sukhasana.")

user.notebooks.first.notes.create!(title: "Balancing Table", body:"INSTRUCTIONS\r\n\r\n

1. On your hands and knees in Table pose, inhale the right leg up parallel to the floor, reaching the toes towards the back wall.\r\n\r\n

2. Starring at a point between the palms, slowly inhale the left arm up parallel to the floor, reaching the fingers towards the front wall.\r\n\r\n

3. Breathe and hold for 3-6 breaths.\r\n\r\n

4. To release: slowly exhale the left arm down, and then lower the knee down, back into table position.\r\n\r\n

5. Repeat on other side.\r\n\r\n

BENEFITS + CONTRAINDICATIONS\r\n\r\n

Benefits: Balancing Table pose improves balance, memory, focus and coordination. This posture builds core body strength and lengthens the spine.\r\n\r\n

Contraindications: Recent or chronic injury to the knees, back, arms or shoulders.")

user.notebooks.first.notes.create!(title: "One-Legged King Pigeon", body:"INSTRUCTIONS\r\n\r\n

1. From the Table or Down Dog, slide the right knee forward between the hands and let the right foot slide over to the left. Slide the left leg back, lowering the hips towards the floor.\r\n\r\n

2. Press down into the palms or fingertips, inhale and reach the crown of the head up, lengthening the spine. Exhale and sink the hips down into the floor. Roll the shoulders down and back and press and lean forward through the chest.\r\n\r\n

3. Move as deep into the posture as you can while still maintaining full deep breathing. Breathe and hold for 3-6 breaths.\r\n\r\n

4. To release: support your weight with the hands as you slide the right knee back into Table or step the right foot back into Down Dog.\r\n\r\n

5. Repeat on other side.\r\n\r\n

BENEFITS + CONTRAINDICATIONS\r\n\r\n

Benefits: Pigeon pose opens the hips and chest, facilitates deeper breathing, and opens the heart center. This posture stimulates the nervous, endocrine and reproductive systems.\r\n\r\n

Contraindications: Recent or chronic back, knee, or hip injury or inflammation.\r\n\r\n
MODIFICATIONS + VARIATIONS\r\n\r\n

Modifications: A) Place a folded blanket underneath the hip of the bent knee to keep the hips level. B) Use yoga blocks under the hands. C) Adjust the level of stretch in the hips by how close the foot of the bent knee is to the hips; bring it closer to the hips for less stretch, slide it away for more stretch.\r\n\r\n

Variations: A) Lead with the chest as you exhale forward, coming into Extended Pigeon. B) Bring the hands to the front bent knee, lifting yourself up a little higher. C) Interlace the fingers behind your back, squeezing the shoulder blades together. D) Inhale the arms over your head, in a H position, palms together with thumbs crossed, or interlace the fingers and point the index finger.

")

user.notebooks.first.notes.create!(title: "Extended One-Legged Pigeon", body:"INSTRUCTIONS\r\n\r\n

1. From the Table or Down Dog, slide the right knee forward between the hands and let the right foot slide over to the left. Slide the left leg back, lowering the hips towards the floor.\r\n\r\n

2. Slowly walk the hands forward to lower the torso and head to the floor. If the head doesn’t touch the floor, support it with stacked hands or fists.\r\n\r\n

3. Move as deep into the posture as you can while still maintaining full deep breathing. Breathe and hold for 3-6 breaths.\r\n\r\n

4. To release: slowly walk the hands back under your shoulders and you slide the right knee back into Table or step the right foot back into Down Dog.\r\n\r\n

5. Repeat on other side.\r\n\r\n

BENEFITS + CONTRAINDICATIONS\r\n\r\n

Benefits: Extended Pigeon pose deeply opens the hips and groin. This forward folding pose is calming and deeply introspective.\r\n\r\n

Contraindications: Recent or chronic knee, or hip injury or inflammation.\r\n\r\n

MODIFICATIONS + VARIATIONS\r\n\r\n

Modifications: A) Place a folded blanket underneath the hip of the bent knee to keep the hips level. B) Use a yoga block under the forehead. C) Adjust the level of stretch in the hips by how close the foot of the bent knee is to the hips; bring it closer to the hips for less stretch, slide it away for more stretch.\r\n\r\n

Variations: Twisted Pigeon – with the right knee forward slide the left arm in front of the knee to the right. Reach the right arm up and around your back, and if possible hold onto the right foot.

")


user.notebooks.create!(title: "Misc")
user.notebooks.find(2).notes.create!(title: "Scenacy's birthday", color: "Red", body: "August 10! Gift??\r\n\r\n - iphone watch\r\n\r\n - puppy\r\n\r\n - new microvave??? \r\n\r\n Order cake: Red Velvet Westside Bakery Phone:(212) 350-4144")

user.notebooks.find(2).notes.create!(title: "Russian Visa", body: "Travel to Russia requires an entry visa. The Consular Division of the Embassy issues different categories of visas to Russia based upon the purpose of the trip and the duration of stay in Russia.\r\n\r\n The following documents should be submitted in order to obtain a visa according to its category:\r\n\r\n 1. Completed visa application signed by the Applicant only. Incomplete visa application forms shall not be processed.\r\n\r\n Application available online at http://visa.kdmid.ru \r\n\r\n All questions in the application form should be answered. If a question is not applicable to the applicant, he should put “N/A”. \r\n\r\n  Each application form must be signed by the visa applicant personally. \r\n\r\n 2. Valid national passport (original only and it should have at least two clear visa pages). It must be valid no less than six months after the visa expiration date. Holders of travel documents such us: Permit to Re-Enter the United States of America, Travel Document, etc. must submit valid Permanent Resident Card (an original and a copy).
3. One picture of an applicant. Russian visa photo specifications.\r\n\r\n 4. Money Order or Certified Bank Check made out to the Russian Consulate for visa processing. Please note that we do not accept cash, credit or debit cards, personal or company checks.\r\n\r\n 5. Invitation to Russia from a host person or organisation.\r\n\r\n Dear Applicants, when applying for a Russian visa please be advised that\r\n\r\n • In order to expedite and improve visa obtaining process as well as for security concerns the Consular Division is no more processing visa applications by mail, starting from June 1, 2010.\r\n\r\n • Non-US citizens should also provide proof of legality of their stay in the USA (US Resident Alien status, form I-94) when applying for a visa. \r\n\r\n  • Applicants who used to be citizens of the USSR or the Russian Federation and emigrated from the USSR or from Russia must submit one of the documents which confirms that they are no longer citizens of the Russian Federation (so called 'Visa to Israel' or stamp in their passport saying that they left for 'permanent residence abroad' before February, 06 1992 or official document certifying that their Russian citizenship was renounced), otherwise the applications will not be accepted. \r\n\r\n • In accordance with Russian laws citizens of the Russian Federation regardless of any other citizenship theymay have, must travel to Russia on valid Russian documents only. \r\n\r\n • Please be advised that person can not have two valid visas in one passport. In this case the first visa is to be cancelled.")

user.notebooks.find(2).notes.create!(title: "Before trip", color: "Red", body: "Pick up dry clean\r\n\r\nFind sitter for Breakfast\r\n\r\nBuy swimsuit\r\n\r\nLoose 20 pounds")


user.notebooks.create!(title: "Code")
user.notebooks.find(3).notes.create!(title: 'Backbone::Built-in-Events', color: 'Green', body: "The arguments in parentheses will be passed to the callback when the event is triggered.'add' (model, collection, options) — when a model is added to a collection.\r\n\r\n'remove' (model, collection, options) — when a model is removed from a collection.\r\n\r\n'reset' (collection, options) — when the collections entire contents have been replaced.\r\n\r\n'sort' (collection, options) — when the collection has been re-sorted.\r\n\r\n'change' (model, options) — when a models attributes have changed.\r\n\r\n'change:[attribute]' (model, value, options) — when a specific attribute has been updated.\r\n\r\n'destroy' (model, collection, options) — when a model is destroyed.\r\n\r\n'request' (model, xhr, options) — when a model (or collection) has started a request to the server.\r\n\r\n'sync' (model, resp, options) — when a model (or collection) has been successfully synced with the server.\r\n\r\n'error' (model, xhr, options) — when a models save call fails on the server.\r\n\r\n'invalid' (model, error, options) — when a models validation fails on the client.\r\n\r\n'route:[name]' (params) — Fired by the router when a specific route is matched.\r\n\r\n'route' (route, params) — Fired by the router when any route has been matched.\r\n\r\n'route' (router, route, params) — Fired by history when any route has been matched.\r\n\r\n'all' — this special event fires for any triggered event, passing the event name as the first argument.")

user.notebooks.find(3).notes.create!(title: "JavaScript is Asynchronous", color: "Blue", body: "In Ruby programming, most of the methods we wrote are not like setTimeout. setTimeout sets a timer (we'll talk about how later; it turns out setTimeout is a special function) and then immediately returns. setTimeout returns before the timeout is up, long before the callback is actually invoked.setTimeout is called asynchronous. An asynchronous function does not wait for work to be completed. It schedules work to be done in the background. Asynchronous functions tend to be used when work may take an indeterminate amount of time:\r\n\r\n\r\n\r\nTimers\r\n\r\nWaits a specified amount of time.\r\n\r\n\r\n\r\nBackground web requests (AJAX)\r\n\r\nMakes a possibly slow connection to a server that may live far away.\r\n\r\nWill pass the fetched data to the callback when the response eventually comes in.\r\n\r\n\r\n\r\nEvents\r\n\r\nExample: there's a button on the page. We want to run a function when the user clicks it.\r\n\r\nThis is called a click event.\r\n\r\nWe install a click handler. A click handler is a callback that is invoked when a click occurs.\r\n\r\nWe don't know how long it will be before the click happens, but if and when a click actually occurs, the callback will have been stored and will be run.\r\n\r\nThe opposite of asynchronous is synchronous. For example, a synchronous analogue to setTimeout would be Ruby's sleep method. sleep pauses execution for a specified period of time. Likewise, if AJAX requests were not asynchronous, calls to $.ajax (the $ means jQuery; we'll learn it soon!) would not return right away, but would instead wait for the HTTP response. The response could then be returned to the caller, so no callback would be necessary.")

user.notebooks.find(3).notes.create!(title: "React.js vs traditional MVC (Backbone, Angular)", color: "Blue", body: "I've been working with React for the last two weeks, and I think it's quite a revolutionary library. In this blog, I will tell you why.\r\n\r\n

If you don't know what React is, visit the doc and read up on it. The basic idea is this:\r\n\r\n

Since DOM manipulations are slow, React replicates the DOM virtually. Your application talks to the virtual DOM that is very fast, and then React diffs the virtual DOM with the real DOM and applies all changes efficiently.\r\n\r\n

In case you wonder how this fits into todays MVC landscape, let me quote the react guys: 'Many people choose to think of React as the V in MVC.'\r\n\r\n

I personally think that this is a conservative statement that should appeal to people who don't like to try new things so much. If I interpret the statement correctly, they themselves don't think that way.\r\n\r\n

React's way of doing things is a lot more than 'the V in MVC'. React's fast, virtual DOM lets you do things that were so out of the question before, most people will not be able to fully grasp the big advantage of it for a while.\r\n\r\n

A real-life scenario\r\n\r\n
At my company, we developed a SPA called concat. One part of this app is a list of 5000 companies and their stock returns.\r\n\r\n

you can filter this list by\r\n\r\n

country\r\n\r\n
industry\r\n\r\n
text search\r\n\r\n
whether they had news over a given time period\r\n\r\n
other features are:\r\n\r\n

custom favorite lists per user\r\n\r\n
a date range selector\r\n\r\n
the filters contain summary stats. For example you see how many companies you have in the list for each country with your current filter-setting.
The app was implemented in chaplin which is a framework based on Backbone. The problem with this list-widget is that whenever a user triggers a filter, a lot of views need to be re-rendered because of the summary stats on the different filters. This needs a lot of controller code.\r\n\r\n

Now there are tools available to implement this in a sane way. With Backbone you would do the talking between the different parts via events, favorably with a controller receiving all the user inputs, manipulating the models if needed and then calling the views and tell them to re-render if necessary.\r\n\r\n

There are other frameworks that provide simpler ways of doing this (2-way data binding), usually at the cost of flexibility.\r\n\r\n

The question is: Is there generally a better way? Or let's rephrase the question: What would be the best way?\r\n\r\n

How about this: 'When a user interaction occurs on the stock-list, re-render everything'\r\n\r\n

This is the intuitive thing to do. Im sure this is what naive, inexperienced devs would try first. It's the simplest and therefore easiest approach. However, everybody knows this won't work due to render performance. With React, this suddenly becomes a viable design pattern.\r\n\r\n

Think about what this means for a while. You can rerender everything all the time. This means that half of the work - the more complicated half - will simply vanish, because you don't need to develop something that orchestrates the partial rendering and handles all the side-effects carefully.\r\n\r\n

Let me quote myself from before:\r\n\r\n

The problem with this list-widget is that whenever a user triggers a filter, a lot of views need to be rerendered because of the summary stats on the different filters.\r\n\r\n

With React, the problem is:\r\n\r\n

The problem with this list-widget is that whenever a user triggers a filter, I re-render everything because of the summary stats on the different filters.\r\n\r\n

This sounds a lot easier doesn't it? Now different frameworks provide similar simplifying solutions for some specific scenarios. But React provides them ubiquitously. The virtual DOM is always there.\r\n\r\n

I have rewritten the stock-list in React, and I have been blown away. Things become so much easier to build and understand. Things tend to simply go away:\r\n\r\n

Backbone Events: I have yet to see a case where I would need them. (I'm sure there are some)\r\n\r\n
Backbone Models/Collections? Plain objects are enough.\r\n\r\n
Memory leaks because of non-disposal of Views? Gone.\r\n\r\n
My complex controllers are nicely split up.\r\n\r\n
Except for ajax stuff, I didn't need jQuery so far.\r\n\r\n
My application state is minimized (!!!).\r\n\r\n
My code is clean, organized and extensible without any major refactoring.\r\n\r\n
It took me less discipline to not make a mess (global publish/subscribe à la Backbone.Events is almost as evil as global variables)\r\n\r\n
Also, I have never felt 'restrained' by React. It doesn't trade\r\n\r\n simplicity/robustness for flexibility like most frameworks out there.\r\n\r\n

You need to fully embrace the possibilities of React though. I've seen some posts where people just switch Backbone Views with React. This can make sense in a transition/try-out phase. But if you start a new project, I suggest to throw everything out of the window first and try to fully embrace React. I think not much else (except a Router) is needed besides React to build a complex and fast SPA with a clean, simple and maintainable codebase (Obviously there are exceptions to this).\r\n\r\n

Your code will not contain the usual MV* patterns. Don't be scared of that. Code will be organized. Concerns will be separated. And so far, I feel like the React way is superior to MV* for a lot of use cases. You could easily marry the two if push comes to shove, but: It's likely you'd want to do this because MV* is familiar, not because it improves your codebase objectively.\r\n\r\n

There is one thing that sucks a little with React.js: Talking to the virtual DOM differs from talking to the real one (JSX, coffeescript craziness). But it's a trade-off that I'm willing to accept in a heartbeat.\r\n\r\n

If you'd like to know how React works in practice, look at this little tutorial, it taught me the most out of everything I've read.\r\n\r\n

One thing is for sure: React does things so differently, you can not judge it from a distance. You need to try it extensively in real-life to figure out if it works for you.")

user.notebooks.find(3).notes.create!(title: 'AngularJS vs. Backbone.js vs Ember.js', color: 'Green', body: "There are more than 100 JavaScript frameworks available out there and the quantity of results on Google can be overwhelming. When developing a modern, sharp-looking website, including JavaScript at some point is essential. Advanced JavaScript programming can be very challenging however, especially when the application needs to behave the same way on different browsers. By picking the right JavaScript helper library, development time can be easier and less time-consuming.\r\n\r\n

One of the most popular JavaScript helper libraries is JQuery: a set of JavaScript functionalities that will ease the job of the developer. In this post we’ll take a closer look at three more advanced and popular frameworks: AngularJS, Backbone.js and Ember.js.\r\n\r\n\r\n\r\n

AngularJS\r\n\r\n
AngularJS is a JavaScript framework on an open-source platform maintained by Google. Based on the MVC (Model-View-Controller) architecture, it aims at making both development and testing efficient and easy. AngularJS extends traditional HTML code so that dynamic content can be easily served with help of two way binding.  Angular is an independent framework which means it doesn’t depend on any other JavaScript library - not even JQuery.\r\n\r\n\r\n\r\n

Backbone.js\r\n\r\n
Backbone.js is a lightweight MVC framework. After appearing in 2010, it quickly grew popular as a lean alternative to heavy, full-featured MVC frameworks such as ExtJS. This resulted in many services adopting it, including Pinterest, Flixster and AirBNB among others. It gives structure to web applications by providing models with key-value binding, custom events, collections with a rich API of enumerable functions and views. It can connect your existing API over a RESTful JSON interface. Backbone has a hard coded dependency on Underscore.js.\r\n\r\n

Backbone represents data as models which can be created, validated, destroyed, and saved to the server. Views are used to display the model’s state and can be triggered when a property has changed. The Views can then respond accordingly or re-render with the new information. Backbone is an attempt to lay down a minimal set of data-structuring (models and collections) and user interface (views and URLs) primitives that are generally useful when building web applications with JavaScript.\r\n\r\n\r\n\r\n

Ember.js\r\n\r\n
Ember's roots go way back to 2007. Starting its life as the SproutCore MVC framework, originally developed by SproutIt and later by Apple. It was formed in 2011 by Yehuda Katz, a core contributor to the popular jQuery and Ruby on Rails projects. Notable Ember users include Yahoo!, Groupon, and ZenDesk.\r\n\r\n

Ember allows developers to create scalable single-page applications. It offers a rich object model, declarative two-way data-binding, computed properties, automatically-updating templates powered by Handlebars.js and a router for managing application state.\r\n\r\n\r\n\r\n

Comparison\r\n\r\n
Community\r\n\r\n
An important factor when choosing a framework is the size of the community and the rate of activity on it. Angular.js has a larger, faster growing and more active community than the other frameworks mentioned here. It also has more highly starred projects on GitHub and more questions on StackOverflow compared to Backbone.js and Ember.js combined.\r\n\r\n

Framework size\r\n\r\n
Page load times are crucial for a successful web application. Users need access to information quickly. There are two factors which impact on loading times: the size of the framework and the time it takes to bootstrap it.\r\n\r\n

Comparing the minified version of each framework, Angular (1.2 - 105Kb) has the largest footprint followed by Ember.js (1.9.1 - 97Kb) and Backbone.js (1.1.2 - 6,5Kb). However, Angular does not have any dependencies while Backbone needs at least Underscore.js (5,2Kb). Ember.js and Backbone.js also benefit from using JQuery (82Kb). If our comparison includes these dependencies, Angular.js actually has the smallest footprint.\r\n\r\n

Templates\r\n\r\n
Angular and Ember include a template engine. Backbone, on the other hand, leaves it up to developers to use the template engine of their choice and Underscore templates are common here.\r\n\r\n

Flexibility\r\n\r\n
There are many JavaScript plugins out there that do specialised things, and usually they do them far better than the chosen framework. It is, of course, important that these frameworks can be integrated into the framework. Backbone.js is the most flexible framework because it has less conventions, so consequently developers have to make a lot of decisions when using it. Ember.js and Angular.js are flexible to some degree, but a few buy-ins are essential.\r\n\r\n

Learning curve\r\n\r\n
With Angular.js a developer can quickly start building an impressive web application, like using two-way binding, without having to learn much. It looks easy at first sight but after getting the basics, a steep learning curve follows. When using Angular.js, the developer must learn some very specific jargon. Ember.js has a comparative learning curve to Angular.js.\r\n\r\n

Backbone.js is easier to learn but leaves developers to make important decisions by themselves. Alongside Backbone.js the developer must learn the basics of other libraries like Underscore.js.\r\n\r\n\r\n\r\n

An informed decision\r\n\r\n
Choosing the right framework is an important decision when building a web application. Angular.js is the fastest growing and most active framework for the moment. It has a large community and Google’s backing. It’s definitely here to stay and works well for small and large projects. Backbone.js is the minimalist framework, small and easy to learn. Ember uses the MVC structure that many developers already know. All frameworks mentioned in this post help developers in creating flexible, powerful and mobile applications.")

user.notebooks.find(3).notes.create!(title: "Architecture Issues When Scaling Web Applications", color: "Blue", body: "Lets start by defining few terms to create common understanding and vocabulary. Later on I will go through different issues that pop-up while scaling web application like\r\n\r\n\r\n\r\n

Architecture bottlenecks\r\n\r\n\r\n\r\n
Scaling Database\r\n\r\n
CPU Bound Application\r\n\r\n
IO Bound Application\r\n\r\n
Determining optimal thread pool size of an web application will be covered in next blog.\r\n\r\n

Performance\r\n\r\n

Term performance of web application is used to mean several things. Most developers are primarily concerned with are response time and scalability.\r\n\r\n

 Response Time\r\n\r\n

Is the time taken by web application to process request and return response. Applications should respond to requests (response time) within acceptable duration. If application is taking beyond the acceptable time, it is said to be non-performing or degraded.\r\n\r\n

 Scalability\r\n\r\n

The web application is said to be scalable if by adding more hardware, application can linearly take more requests than before. Two ways of adding more hardware are\r\n\r\n

Scaling Up (vertical scaling) :– increasing the number CPUs or adding faster CPUs on a single box.\r\n\r\n
Scaling Out (horizontal scaling) :– increasing the number of boxes.
Scaling Up Vs Scaling Out\r\n\r\n

Scaling out is considered more important as commodity hardware is cheaper compared to cost of special configuration hardware (super computer). But increasing the number of requests that an application can handle on a single commodity hardware box is also important. An application is said to be performing well if it can handle more requests with-out degrading response time by just adding more resources.\r\n\r\n

Response Time Vs Scalability \r\n\r\n

Response time and Scalability don’t aways go together i.e. application might have acceptable response times but can not handle more than certain number of requests or application is handle increasing number of requests but has poor or long response times. We have strike a balance between scalability and response time to get good performance of the application.\r\n\r\n

Capacity Planning \r\n\r\n

Capacity planning is an exercise of figuring out the required hardware to handle expected load in production. Usually it involves figuring out performance of application with fewer boxes and based on performance per box projecting it. Finally verifying it with load/performance tests.")
