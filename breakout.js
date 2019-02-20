$(() => {

  const $pageHeading = $('#page-heading');

  const $form = $('#potatoForm');

  $('#potatoList').on('click', 'li', function(event) {
    const $item = $(event.target);
    // $item.remove();
    $item.effect('explode');
    console.log($item);
  });

  $form.on('submit', function(event) {
    event.preventDefault();

    // Get the text from the form
    const text = $('#potatoText').val();

    $('<li>')
      .text(text)
      .css('color', 'blue')
      .addClass('new-item')
      .appendTo('#potatoList');
  });


});