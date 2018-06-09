

let salesReps = ['Alex Allias', 'Gene Z', 'Adam H', 'Lincoln', 'Pedro', 'Skidmore', 'Fred Apollo'];

function handleCloseButton() {
  $('.closeButton').click(function() {
  event.preventDefault();
  toggleHiddenClass();
  });
}

function toggleHiddenClass() {
  console.log('toggleHiddenClass ran');
  $('main').toggleClass('hidden');
  $('.winnerdiv').toggleClass('hidden');
  }

  function displayWinner() {
    toggleHiddenClass();
    const winner = salesReps[Math.floor(Math.random()*salesReps.length)];
    console.log(winner);    
    $('.winnerh1').html(winner);
    console.log('displayWinner ran');
  }

function handleChooseButton() {
  $('.generateRep').click(event => {
    event.preventDefault();
    $('.error').html('');
    displayWinner();
    console.log('handleChooseButton ran');
  });
}

function handleDeleteButton() {
  $('.removeRep').submit(event => {
    event.preventDefault();
    $('.error').html('');
    const userInput = $(event.currentTarget).find('.toRemove');
    const removeNumRaw = userInput.val();
    const removeNum = parseInt(removeNumRaw);
    if (isNaN(removeNum)) {
      userInput.val('');
      return $('.error').html('Please enter a number');
    } else if (removeNum < 1 || removeNum > salesReps.length) {
      userInput.val('');
        return $('.error').html('Please enter a valid sales rep ID number');
    } else {
        salesReps.splice(removeNum-1, 1);
        displaySalesReps(salesReps);
        userInput.val('');
    } 
  });
}

function handleNewRepButton() {
  $('.addRep').submit(event => {
    event.preventDefault();
    $('.error').html('');
    const userInput = $(event.currentTarget).find('.repName');
    const newRepRaw = userInput.val();
    const newRep = newRepRaw.charAt(0).toUpperCase() + newRepRaw.substr(1);
    
    for(let i = 0; i < salesReps.length; i++) {
      if (newRep === salesReps[i]) {
        userInput.val('');
       return $('.error').html('Sales Rep Already Exists');
        
      }}
      salesReps.push(newRep);
      displaySalesReps(salesReps);
      userInput.val('');
});

}

function renderSalesReps(item, index) {
  return `<li>${item}</li>`
}

function displaySalesReps(data) {
  console.log('displaySalesReps ran');
  let listArray = data.map((item, index) => renderSalesReps(item, index));
  $('.salesReps').html(listArray);
}

function renderStartPage() {
  displaySalesReps(salesReps);

} 

function startPage() {
  renderStartPage();
  handleChooseButton();
  handleNewRepButton();
  handleDeleteButton();
  handleCloseButton();
}

$(startPage);