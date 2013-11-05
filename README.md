Mistl-Slider
============

JQuery plugin - Mobile friendly loop slider with vertical horizontal and popup options! 


##Include

Include the jq.mistl script anywhere after your jquery library call. 

    <script src="jq.mistl.js"></script>

##Slide structure

Use this markup for the slide basic structure:


    <div class="something">
      <ul> 
        <li><a href="#"><img src="" alt="" /></a></li>
      </ul>
    </div>


Attach Mistl function

    $(document).ready(function(){
      $('.something').mistl();
    });

Options (Slide vertical, or horizontal with popup effect) :

    $(document).ready(function(){
      $('.something').mistl({
          mode: 'vertical'
      });
      $('.something').mistl({
          popup: true,
          toggleText: 'open slide'
       });
    });

Edit the stylesheet included as your needs.
