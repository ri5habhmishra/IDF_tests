$(document).ready(function(){
    
    var scrollLink = $('.scroll');

    scrollLink.click(function(e){
        e.preventDefault();
        //console.log("success");
        $('body,html').animate({
            scrollTop: $(this.hash).offset().top
        }, 1000)
    });


});


function show_filter_menu(){
    document.getElementById('the_outer_wrapper').style.display = "block";
    document.getElementById('complete_body_overlay').style.display ="block";
    //disableScroll();
}


function close_filter_menu(){
    document.getElementById('the_outer_wrapper').style.display = "none";
    document.getElementById('complete_body_overlay').style.display ="none";

    document.getElementById('selected_button').classList.remove("filter_button");
    document.getElementById('selected_button').innerHTML = "";
    document.getElementById('selected_button').style.display = "none";

    //enableScroll();
}

var filter_type ;

function apply_filter(){
    
    var the_correct_placeholder;
    the_correct_placeholder = filter_type;
    type1 = "Search by Relevance";
    type2 = "Search by Tag";
    type3 = "Search by Title";

    if(the_correct_placeholder == type1){
      document.getElementById('search_bar').placeholder = "Enter text to search...";
    }
    else if(the_correct_placeholder == type2){
      document.getElementById('search_bar').placeholder = "Enter tag to search...";
    }
    else{
      document.getElementById('search_bar').placeholder = "Enter title to search...";
    }
    document.getElementById('filter_type_name_holder').value = the_correct_placeholder;
    close_filter_menu();
}

function select_this_type(obj){
    filter_type =  obj.innerHTML;
    //console.log(filter_type);
    document.getElementById('selected_button').classList.add("filter_button");
    document.getElementById('selected_button').innerHTML = filter_type;
    document.getElementById('selected_button').style.display = "block";
}

function empty_search(){
    document.getElementById('search_bar').value = "";
}





/* from stack overflow */
// left: 37, up: 38, right: 39, down: 40,
// spacebar: 32, pageup: 33, pagedown: 34, end: 35, home: 36
var keys = {37: 1, 38: 1, 39: 1, 40: 1};

function preventDefault(e) {
  e.preventDefault();
}

function preventDefaultForScrollKeys(e) {
  if (keys[e.keyCode]) {
    preventDefault(e);
    return false;
  }
}

// modern Chrome requires { passive: false } when adding event
var supportsPassive = false;
try {
  window.addEventListener("test", null, Object.defineProperty({}, 'passive', {
    get: function () { supportsPassive = true; } 
  }));
} catch(e) {}

var wheelOpt = supportsPassive ? { passive: false } : false;
var wheelEvent = 'onwheel' in document.createElement('div') ? 'wheel' : 'mousewheel';

// call this to Disable
function disableScroll() {
  window.addEventListener('DOMMouseScroll', preventDefault, false); // older FF
  window.addEventListener(wheelEvent, preventDefault, wheelOpt); // modern desktop
  window.addEventListener('touchmove', preventDefault, wheelOpt); // mobile
  window.addEventListener('keydown', preventDefaultForScrollKeys, false);
}

// call this to Enable
function enableScroll() {
  window.removeEventListener('DOMMouseScroll', preventDefault, false);
  window.removeEventListener(wheelEvent, preventDefault, wheelOpt); 
  window.removeEventListener('touchmove', preventDefault, wheelOpt);
  window.removeEventListener('keydown', preventDefaultForScrollKeys, false);
}




