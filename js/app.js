/* globals $ */

/**********************************
 **   Au clique sur les boutons  **
 **********************************/
$('#btnFull').on('click', function () {
  $('.content-circle').addClass('full')
  $('.content-square').addClass('full')
  $('.content-diamond').addClass('full')
})

$('#btnEmpty').on('click', function () {
  $('.content-circle').removeClass('full')
  $('.content-square').removeClass('full')
  $('.content-diamond').removeClass('full')
})

/**********************************
 **   Au clique sur un cercle    **
 **********************************/
$('.content-circle').on('click', function () {
  var classValue = $(this).attr('class')
  $(this).addClass('full')
  if (classValue === 'content-circle full') {
    $(this).removeClass('full')
  }
})

/**********************************
 **    Au clique sur un carré    **
 **********************************/
$('.content-square').on('click', function () {
  var idValue = $(this).attr('id')
  var classValue = $(this).attr('class')
  if (idValue === '11' && classValue === 'content-square') {    // Si ligne 1
    $('#11').addClass('full')
    $('#12').addClass('full')
    $('#13').addClass('full')
    $('#14').addClass('full')
    $('#15').addClass('full')
  } else {
    $('#11').removeClass('full')
    $('#12').removeClass('full')
    $('#13').removeClass('full')
    $('#14').removeClass('full')
    $('#15').removeClass('full')
  }

  if (idValue === '22' && classValue === 'content-square') {    // Si ligne 2
    $('#21').addClass('full')
    $('#22').addClass('full')
    $('#23').addClass('full')
    $('#24').addClass('full')
    $('#25').addClass('full')
  } else {
    $('#21').removeClass('full')
    $('#22').removeClass('full')
    $('#23').removeClass('full')
    $('#24').removeClass('full')
    $('#25').removeClass('full')
  }

  if (idValue === '44' && classValue === 'content-square') {  // Si ligne 4
    $('#41').addClass('full')
    $('#42').addClass('full')
    $('#43').addClass('full')
    $('#44').addClass('full')
    $('#45').addClass('full')
  } else {
    $('#41').removeClass('full')
    $('#42').removeClass('full')
    $('#43').removeClass('full')
    $('#44').removeClass('full')
    $('#45').removeClass('full')
  }

  if (idValue === '55' && classValue === 'content-square') { // Si ligne 5
    $('#51').addClass('full')
    $('#52').addClass('full')
    $('#53').addClass('full')
    $('#54').addClass('full')
    $('#55').addClass('full')
  } else {
    $('#51').removeClass('full')
    $('#52').removeClass('full')
    $('#53').removeClass('full')
    $('#54').removeClass('full')
    $('#55').removeClass('full')
  }
})

/***********************************
 **    Au clique sur le losange   **
 ***********************************/

$('.content-diamond').on('click', function () {
  var idValue = $(this).attr('id')
  var classValue = $(this).attr('class')
  if (idValue === '33' && classValue === 'content-diamond') { // Si ligne 3
    $('#31').addClass('full')
    $('#32').addClass('full')
    $('#33').addClass('full')
    $('#34').addClass('full')
    $('#35').addClass('full')
    $('#13').addClass('full')
    $('#23').addClass('full')
    $('#43').addClass('full')
    $('#53').addClass('full')
  } else {
    $('#31').removeClass('full')
    $('#32').removeClass('full')
    $('#33').removeClass('full')
    $('#34').removeClass('full')
    $('#35').removeClass('full')
    $('#13').removeClass('full')
    $('#23').removeClass('full')
    $('#43').removeClass('full')
    $('#53').removeClass('full')
  }
})
