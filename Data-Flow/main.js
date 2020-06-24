
const posts = [
  {
    id:1,
    name: 'Idan Baron',
    text: 'Hello is a usefull word'
  },
  {
    id:2,
    name: 'Kundofoni Kundofon',
    text: 'I love Fancy Feast'
  },
  {
    id:3,
    name: 'Michael Jackson',
    text: "You know i'm dead, I'm dead, you know it"
  },
]

idCount = 3

const rootContainer = $
const $inputName = $('<input type="text" id="name" class="userInput" placeholder="Enter Name"/>')
const $inputText = $('<input type="text" id="text" class="userInput" placeholder="Enter Text"/>')
const $inputSubmit = $('<button id="submit">SUBMIT</button>')
const $postsContainer = $('<div id="postsContainer"></div>')

$('body').append($inputName)
          .append($inputText)
          .append($inputSubmit)
          .append($postsContainer)

$('body').on('click', '#submit', function(){
  const submitedName = $('#name').val()
  const submitedText = $('#text').val()

  $('#name').val('')
  $('#text').val('')


  posts.push({
    id: ++idCount,
    name: submitedName,
    text: submitedText
  })
  render()
})

$('body').on('click', '.removePost', function(){
  
  const postId = $(this).parent().data().id;
  for(let postIndex in posts){
    if(posts[postIndex].id === postId){
      posts.splice(postIndex,1)
      break
    }
  }

  render()
})

const render = () => {
  
  $('#postsContainer').empty()
  for(post of posts){
    const $singlePost = $(`
    <div class="singlePost" data-id="${post.id}">
      <h2 class="postUsername">${post.name}</h2>
      <p class="postText">${post.text}</p>
      <button class="removePost">remove</button>
    </div>`)
    $('#postsContainer').append($singlePost)
  }


}

render()
