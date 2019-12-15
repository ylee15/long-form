$(document).ready(function() {
  //ID or Class name of the button goes into the first section
  $('#home-next').click(function() {
    //ID or Class name of the modal you want to appear on click goes into this second area.
    $(".sect-1").addClass("visible");
    $(".home").removeClass("visible");
  });
  $('#sect1-next').click(function() {
    //ID or Class name of the modal you want to appear on click goes into this second area.
    $(".sect-1").removeClass("visible");
    $(".sect-2").addClass("visible");
    $("#sect2-next").addClass("jordan");
  });
  $('#sect1-back').click(function() {
    //ID or Class name of the modal you want to appear on click goes into this second area.
    $(".sect-1").removeClass("visible");
    $(".home").addClass("visible");
  });
  $('#sect2-back').click(function() {
    //ID or Class name of the modal you want to appear on click goes into this second area.
    $(".sect-2").removeClass("visible");
    $(".sect-1").addClass("visible");
  });
    $('#sect2-next').click(function() {
    //ID or Class name of the modal you want to appear on click goes into this second area.
    $(".sect-2").removeClass("visible");
    $(".sect-3").addClass("visible");
  });
    $('#sect3-back').click(function() {
    //ID or Class name of the modal you want to appear on click goes into this second area.
    $(".sect-3").removeClass("visible");
    $(".sect-2").addClass("visible");
  });
  $('#sect3-next').click(function() {
  //ID or Class name of the modal you want to appear on click goes into this second area.
  $(".sect-3").removeClass("visible");
  $(".sect-4").addClass("visible");
  });
  $('#sect4-next').click(function() {
  //ID or Class name of the modal you want to appear on click goes into this second area.
  $(".sect-4").removeClass("visible");
  $(".sect-5").addClass("visible");
  });
  $('#sect4-back').click(function() {
  //ID or Class name of the modal you want to appear on click goes into this second area.
  $(".sect-4").removeClass("visible");
  $(".sect-3").addClass("visible");
  });
  $('#sect5-next').click(function() {
  //ID or Class name of the modal you want to appear on click goes into this second area.
  $(".sect-5").removeClass("visible");
  $(".sect-6").addClass("visible");
  });
  $('#sect5-back').click(function() {
  //ID or Class name of the modal you want to appear on click goes into this second area.
  $(".sect-5").removeClass("visible");
  $(".sect-4").addClass("visible");
  });
  $('#sect6-next').click(function() {
  //ID or Class name of the modal you want to appear on click goes into this second area.
  $(".sect-6").removeClass("visible");
  $(".sect-7").addClass("visible");
  });
});
