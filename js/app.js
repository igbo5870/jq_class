/* globals $ */

console.log('bonjour') // Test lien vers html

$('#btnFull').on('click', function () {
  console.log('clic bouton Plein')
  $('.content-circle').removeClass('empty')
  $('.content-circle').addClass('full')
  $('.content-square').removeClass('empty')
  $('.content-square').addClass('full')
  $('.content-diamond').removeClass('empty')
  $('.content-diamond').addClass('full')
})

$('#btnEmpty').on('click', function () {
  console.log('clic bouton Plein')
  $('.content-circle').removeClass('full')
  $('.content-circle').addClass('empty')
  $('.content-square').removeClass('full')
  $('.content-square').addClass('empty')
  $('.content-diamond').removeClass('full')
  $('.content-diamond').addClass('empty')
})
