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
  console.log('clic bouton Vide')
  $('.content-circle').removeClass('full')
  $('.content-circle').addClass('empty')
  $('.content-square').removeClass('full')
  $('.content-square').addClass('empty')
  $('.content-diamond').removeClass('full')
  $('.content-diamond').addClass('empty')
})

$('.content-circle').on('click', function () {
  var classValue = $(this).attr('class')
  $(this).removeClass('empty')
  $(this).addClass('full')
  if (classValue === 'content-circle full') {
    $(this).removeClass('full')
    $(this).addClass('empty')
  }
})
$('.content-square').on('click', function () {
  var idValue = $(this).attr('id')
  var classValue = $(this).attr('class')
  console.log(classValue)
  if (idValue === '11' && classValue === 'content-square empty') {
    console.log('condition')
    $('#11').removeClass('empty')
    $('#11').addClass('full')
    $('#12').removeClass('empty')
    $('#12').addClass('full')
    $('#13').removeClass('empty')
    $('#13').addClass('full')
    $('#14').removeClass('empty')
    $('#14').addClass('full')
    $('#15').removeClass('empty')
    $('#15').addClass('full')
  } else {
    console.log('condition')
    $('#11').removeClass('full')
    $('#11').addClass('empty')
    $('#12').removeClass('full')
    $('#12').addClass('empty')
    $('#13').removeClass('full')
    $('#13').addClass('empty')
    $('#14').removeClass('full')
    $('#14').addClass('empty')
    $('#15').removeClass('full')
    $('#15').addClass('empty')
  }

  if (idValue === '22' && classValue === 'content-square empty') {
    console.log('condition')
    $('#21').removeClass('empty')
    $('#21').addClass('full')
    $('#22').removeClass('empty')
    $('#22').addClass('full')
    $('#23').removeClass('empty')
    $('#23').addClass('full')
    $('#24').removeClass('empty')
    $('#24').addClass('full')
    $('#25').removeClass('empty')
    $('#25').addClass('full')
  } else {
    console.log('condition')
    $('#21').removeClass('full')
    $('#21').addClass('empty')
    $('#22').removeClass('full')
    $('#22').addClass('empty')
    $('#23').removeClass('full')
    $('#23').addClass('empty')
    $('#24').removeClass('full')
    $('#24').addClass('empty')
    $('#25').removeClass('full')
    $('#25').addClass('empty')
  }

  if (idValue === '44' && classValue === 'content-square empty') {
    console.log('condition')
    $('#41').removeClass('empty')
    $('#41').addClass('full')
    $('#42').removeClass('empty')
    $('#42').addClass('full')
    $('#43').removeClass('empty')
    $('#43').addClass('full')
    $('#44').removeClass('empty')
    $('#44').addClass('full')
    $('#45').removeClass('empty')
    $('#45').addClass('full')
  } else {
    console.log('condition')
    $('#41').removeClass('full')
    $('#41').addClass('empty')
    $('#42').removeClass('full')
    $('#42').addClass('empty')
    $('#43').removeClass('full')
    $('#43').addClass('empty')
    $('#44').removeClass('full')
    $('#44').addClass('empty')
    $('#45').removeClass('full')
    $('#45').addClass('empty')
  }

  if (idValue === '55' && classValue === 'content-square empty') {
    console.log('condition')
    $('#51').removeClass('empty')
    $('#51').addClass('full')
    $('#52').removeClass('empty')
    $('#52').addClass('full')
    $('#53').removeClass('empty')
    $('#53').addClass('full')
    $('#54').removeClass('empty')
    $('#54').addClass('full')
    $('#55').removeClass('empty')
    $('#55').addClass('full')
  } else {
    console.log('condition')
    $('#51').removeClass('full')
    $('#51').addClass('empty')
    $('#52').removeClass('full')
    $('#52').addClass('empty')
    $('#53').removeClass('full')
    $('#53').addClass('empty')
    $('#54').removeClass('full')
    $('#54').addClass('empty')
    $('#55').removeClass('full')
    $('#55').addClass('empty')
  }
  console.log(idValue)
})

$('.content-diamond').on('click', function () {
  var idValue = $(this).attr('id')
  var classValue = $(this).attr('class')
  if (idValue === '33' && classValue === 'content-diamond empty') {
    console.log('condition')
    $('#31').removeClass('empty')
    $('#31').addClass('full')
    $('#32').removeClass('empty')
    $('#32').addClass('full')
    $('#33').removeClass('empty')
    $('#33').addClass('full')
    $('#34').removeClass('empty')
    $('#34').addClass('full')
    $('#35').removeClass('empty')
    $('#35').addClass('full')
    $('#13').removeClass('empty')
    $('#13').addClass('full')
    $('#23').removeClass('empty')
    $('#23').addClass('full')
    $('#43').removeClass('empty')
    $('#43').addClass('full')
    $('#53').removeClass('empty')
    $('#53').addClass('full')
  } else {
    console.log('condition')
    $('#31').removeClass('full')
    $('#31').addClass('empty')
    $('#32').removeClass('full')
    $('#32').addClass('empty')
    $('#33').removeClass('full')
    $('#33').addClass('empty')
    $('#34').removeClass('full')
    $('#34').addClass('empty')
    $('#35').removeClass('full')
    $('#35').addClass('empty')
    $('#13').removeClass('full')
    $('#13').addClass('empty')
    $('#23').removeClass('full')
    $('#23').addClass('empty')
    $('#43').removeClass('full')
    $('#43').addClass('empty')
    $('#53').removeClass('full')
    $('#53').addClass('empty')
  }
})
