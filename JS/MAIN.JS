$(document).ready(function(){
  begin();
});

let green = 'F';
let red = 'F';
let blue = 'F';

function begin(){
    create_tanks();
    create_btn('green');
    create_btn('red');
    create_btn('blue');
    style_btn();
    btn_listener();
    change_color();
}

function create_tanks(){
  content = '<div class="color_tank"> This is a tank for a color</div>';
  $('.tank').html(content);
  $('.color_tank').css({
    'border':'1px solid #000',
    'margin':'10px 0px',
    'height':'100px',
    'padding':'10px'
  });
  $('.color_tank').addClass('animate');
  content = '<div class="btn_tank"> Kliknij w liczbę szesnastkową, by zmienic kolor: </div>';
  $('.tank').append(content);
  $('.btn_tank').css({
    'borderTop':'1px solid #ccc',
    'margin':'10px 0px',
    'padding':'10px'
  });
}

function create_btn(type){
  label = '<div class="label">';
  if (type==='green') {label += 'green:';
  } else if (type==='red') {label += 'red:';
  } else if (type==='blue') {label += 'blue:';}
  label +='</div>';
  $('.btn_tank').append(label);
  for(let i = 0; i<=15; i++){
    rgb_value = change_to_hex(i.toString());
    tank='<div class="btn" id="btn_'+type+'_'+rgb_value+'" data-val="'+rgb_value+'" data-type="'+type+'">'+rgb_value+'</div>';
    $('.btn_tank').append(tank);
  }
}

function style_btn(){
  $('.label').css({
    'text-align':'center',
    'background-color':'#123',
    'color':'#fff',
    'float':'left',
    'padding':'10px 0px',
    'width':'100%'
  });
  $('.btn').css({
    'text-align':'center',
    'background-color':'#eee',
    'cursor':'pointer',
    'float':'left',
    'padding':'10px 0px',
    'width':(1/16*100)+'%'
  });
$('.btn').addClass('animate');
highlight_default();

}

function highlight_default(){
    $('#btn_green_'+green).addClass('active');
    $('#btn_red_'+red).addClass('active');
    $('#btn_blue_'+blue).addClass('active');
}

function btn_listener(){
  $('.btn').on('click',function(){
    type = $(this).data('type');
    if (type==='green'){
      green=$(this).data('val');
    } else if (type==='red') {
      red=$(this).data('val');
    } else if (type==='blue') {
      blue=$(this).data('val');
    }
    change_color();
    $('.btn').removeClass('active');
    highlight_default();
  });
}

function change_color(){
  $('.color_tank').css('background-color','#'+red+green+blue);
  $('.color_tank').css('color','#'+red+green+blue);
}

function change_to_hex(value){
  switch(value){
    case '10': text='A'; break;
    case '11': text='B'; break;
    case '12': text='C'; break;
    case '13': text='D'; break;
    case '14': text='E'; break;
    case '15': text='F'; break;
    default: text = value;
  }
  return text;
}
