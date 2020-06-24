// Spot Check 1
exDivider('Spot Check 1');

const Family = () => {
  const members = []
  const birth = name => {
    members.push(name)
    console.log(`Members are: ${members}`)
  }

  return birth
}

const giveBirth = Family()

giveBirth('Idan')
giveBirth('Kundi')
giveBirth('Galit')


// Spot Check 2
exDivider('Spot Check 2');

const mathOperations = function () {
  const add = function (x, y) {
      return x + y;
  }

  const subtract = function (x, y) {
      return x - y;
  }

  const multiply = function (x, y) {
      return x * y;
  }

  const divide = function (x, y) {
      return x / y;
  }

  return {
    add: add,
    sub: subtract,
    mult: multiply,
    div: divide
  }
}

const Clac = mathOperations()

console.log(Clac.add(13,29))
console.log(Clac.mult(1.75,24))
console.log(Clac.mult(7,Clac.div(36,6)))


// Spot Check 3
exDivider('Spot Check 3');


const UsersModule = function () {
  const _users = ['Aaron', 'Avi'];

  const addUser = function (user) {
      _users.push(user)
  }

  const listUsers = function () {
      for (let user of _users) {
          console.log(user)
      }
  }

  return {
      addUser: addUser,
      listUsers: listUsers
  }
}

const usersModule = UsersModule()

usersModule.addUser('Narkis')
usersModule.listUsers()


usersModule.addUser('Idan')
usersModule.addUser('Kundofon')

usersModule.listUsers()


//console.log(userModule.users)


// Exercise 1
exDivider('1');


const StringFormatter = () => {

  const capitalizeFirst = str => console.log(str.charAt(0).toUpperCase() + str.slice(1))

  const skewerCase = str => console.log(str.replace(' ', '-'))
  
  return {
    capitalizeFirst,
    skewerCase
  }
  
}

const formatter = StringFormatter()

formatter.capitalizeFirst("dorothy") //should print Dorothy
formatter.skewerCase("blue box") //should print blue-box


// Exercise 2
exDivider('2');

const Bank = () => {

  let _money = 500

  const depositCash = amount => _money += amount

  const checkBalance = () => console.log(_money)

  return {
    deposit: depositCash,
    showBalance: checkBalance
  }
}


const bank = Bank()
bank.deposit(200)
bank.deposit(250)
bank.showBalance() //should print 950



// Exercise 3
exDivider('3');


const SongsManager = () => {

  const _songs = []
  const utubeURL = 'https://www.youtube.com/watch?v='

  const addSong = (songName, URL) => 
    _songs.push({ name:songName, url: URL.replace(utubeURL, '') })
  

  const getSong = songName => {
    for(let song of _songs){
      if(song.name === songName){
        console.log(`${utubeURL}${song.url}`)
      }
    }
  }

  return {
    addSong,
    getSong
  }
}




const songsManager = SongsManager()
songsManager.addSong("sax", "https://www.youtube.com/watch?v=3JZ4pnNtyxQ")
songsManager.addSong("how long", "https://www.youtube.com/watch?v=CwfoyVa980U")
songsManager.addSong("ain't me", "https://www.youtube.com/watch?v=D5drYkLiLI8")

songsManager.getSong("sax") // should print https://www.youtube.com/watch?v=3JZ4pnNtyxQ












function exDivider(number) {
  console.log(" ");
  console.log(" ");
  console.log("==========================");
  console.log("Exercise " + number);
  console.log("==========================");
  console.log(" ");
}
