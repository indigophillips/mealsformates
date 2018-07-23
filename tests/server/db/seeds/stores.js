exports.seed = (knex, Promise) => {
  return knex('stores').del()
    .then(function () {
      return knex('stores').insert([
        {id: 1, name: 'Pita Pit', suburb: 'Pt Chevalier', city: 'Auckland', admin: false, address: '1194 Great North Rd', phone: '021 111 112', lat: -36.870313, lng: 174.711074, image_url: 'image1.jpg', email: 'JS@gmail.com', hash: '11111', owner: 'John Smith'},
        {id: 2, name: 'BurgerFuel', suburb: 'Mt Eden', city: 'Auckland', admin: false, address: '128 Valley Road', phone: '021 111 333', lat: -36.876113, lng: 174.751367120, image_url: 'image2.jpg', email: '222@test.com', hash: '22222', owner: 'Peter Piper'},
        {id: 3, name: 'Subway', suburb: 'Grafton', city: 'Auckland', admin: false, address: '61 Park Road', phone: '021 112 221', lat: -36.860257, lng: 174.768446, image_url: 'image3.jpg', email: 'nope@icloud.com', hash: '33333', owner: 'Biggie Smalls'},
        {id: 4, name: 'Pita Pit', suburb: 'CBD', city: 'Auckland', admin: false, address: '291-297 Queen Street', phone: '022 111 1111', lat: -36.850732, lng: 174.763838, image_url: 'image3.jpg', email: 'sup@gmail.com', hash: '33333', owner: 'Slick Rick'},
        {id: 5, name: 'BurgerFuel', suburb: 'Mt Roskill', city: 'Auckland', admin: false, address: '110B Mt Eden Road', phone: '021 667 543', lat: -36.907067, lng: 174.733351, image_url: 'image3.jpg', email: 'JB@test.com', hash: '33333', owner: 'Joe Blogs'},
        {id: 6, name: 'Subway', suburb: 'Mount Eden ', city: 'Auckland', admin: false, address: '30 Stanley Street', phone: '096232561', lat: -36.8713905, lng: 174.7620348, image_url: 'image3.jpg', email: 'subme@hotmail.com', hash: '33333', owner: 'Joe Blogs'},
        {id: 7, name: 'Subway', suburb: 'Parnell', city: 'Auckland', admin: false, address: '544 E Coast Road', phone: '093020628', lat: -36.8524455, lng: 174.7745321, image_url: 'image3.jpg', email: 'subme@hotmail.com', hash: 'Michael1234', owner: 'Michael'},
        {id: 8, name: 'BurgerFuel', suburb: 'Windsor Park', city: 'Auckland', admin: false, address: '61 Park Road', phone: '094784366', lat: -36.7387664, lng: 174.7412064, image_url: 'image2.jpg', email: 'burgerfuel@gmail.com', hash: 'Richard1234', owner: 'Richard'},
        {id: 9, name: 'BurgerFuel', suburb: 'Manukau', city: 'Auckland', admin: false, address: '652 Great South Rd', phone: '092621560', lat: -36.9871424, lng: 174.8837072, image_url: 'image2.jpg', email: 'burgermanukauu@xtra.co.nz', hash: 'Sam1234', owner: 'Sam'},
        {id: 10, name: 'Pita Pit', suburb: 'Royal Oak', city: 'Auckland', admin: false, address: '8 Mount Smart Rd', phone: '096363257', lat: -36.9119515, lng: 174.7774543, image_url: 'image1.jpg', email: 'pitapit@hotmail.co.nz', hash: 'Anthony1234', owner: 'Anthony'},
        {id: 11, name: 'Subway', suburb: 'Mount Eden ', city: 'Auckland', admin: false, address: '110B Mt Eden Road', phone: '096232561', lat: -36.8713905, lng: 174.7620348, image_url: 'image3.jpg', email: 'subme@hotmail.com', hash: 'Chris1234', owner: 'Chris'}
      ])
    })
}
