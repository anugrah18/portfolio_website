$(window).on("load",function(){
    $(".loader .inner").fadeOut(500,function(){
        $(".loader").fadeOut(750);
    });
})


$(document).ready(function(){
    $('#slides').superslides({
        animation:'fade',
        play:5000,
        pagination:false
    });

    var typed = new Typed(".typed", {
        strings: data.keywords,
        typeSpeed: 80,
        loop: true,
        startDelay: 1000,
        showCursor: false
    });

    var aboutMeMainContent = document.getElementById("aboutMeMainText");
    aboutMeMainContent.textContent += data.about_me_main_text;

    var aboutMeSubContent = document.getElementById("aboutMeSubText");
    aboutMeSubContent.textContent += data.about_me_sub_text;

    $("a[href^='#']").click(function(e) 
    {
	    e.preventDefault();	
	    var position = $($(this).attr("href")).offset().top;
        $("body, html").animate({
            scrollTop: position
        },
        1000 );
    });

    var date = new Date();
    var currentYear = date.getFullYear();

    //quotes 
    var randomIndex = Math.floor(Math.random() * data.quotes.length);
    var quoteMessage = data.quotes[randomIndex];    
    var msg = document.getElementById('quote-message');
    msg.textContent = '"'+quoteMessage.quote +'"';
    var author = document.getElementById('quote-author');
    author.textContent = "-" +quoteMessage.author;

    //copyright
    var copyright = document.getElementById("copyright");
    copyright.textContent=copyright.textContent+" " + currentYear;

    var skillSet = data.skills;
    
    skillSet.forEach (addSkill)

    function addSkill(skill){
       var percent = document.createElement("span");
       percent.className = "percent";
       percent.textContent = skill.percent;

       var canvas = document.createElement("canvas");
       canvas.height="152";
       canvas.width="152";
       canvas.textContent="";

       var chart = document.createElement("span");
       chart.className="chart";
       chart.setAttribute("data-percent",skill.percent)       
       chart.data_percent=skill.percent;

       var heading = document.createElement("h4");
       heading.textContent = skill.name;

       var skill = document.createElement("div");
       skill.className="skill";       
       
       chart.appendChild(percent);
       chart.appendChild(canvas);
       skill.appendChild(chart);
       skill.appendChild(heading);

       var carousel_main = document.getElementById("skills_list");
       carousel_main.appendChild(skill);
    }

    $('.owl-carousel').owlCarousel({
        loop:false,
        items:data.skills.length,       
        margin:10,
        nav:true,
        responsive:{
            0:{
                items:1
            },
            480:{
                items:2
            },
            768:{
                items:3
            },
            938:{
                items:5
            }
        }
    });   

    var skillsTopOffset = $(".skillsSection").offset().top;

    $(window).scroll(function(){

        if(window.pageYOffset > skillsTopOffset -$(window).height() + 200){
            $('.chart').easyPieChart({
                easing:'easeInOut',
                barColor:'white',
                trackColor:false,
                scaleColor:false,
                lineWidth: 4,
                size:152,
                onStep: function(from,to,percent){
                    $(this.el).find('.percent').text(Math.round(percent));
                }
            });
        }
    });
    
    var timeLineStats = data.timeline_stats;
    var mainTimeLineSection = document.getElementById("timeline-sequence");
    
    timeLineStats.forEach (addTimeLineStat);    

    function addTimeLineStat(stat){
        var timeTag = document.createElement("time");
        timeTag.textContent = stat.year;
        var titleTag = document.createElement("h6");
        titleTag.textContent = stat.title;
        var descriptionTag = document.createElement("p");
        descriptionTag.textContent = stat.description;
        var logoTag = document.createElement("img");
        logoTag.setAttribute("src",stat.logo);

        var TimeLineContentTag = document.createElement("div");
        TimeLineContentTag.className="timeline-content"
        TimeLineContentTag.appendChild(timeTag);
        TimeLineContentTag.appendChild(titleTag);
        TimeLineContentTag.appendChild(descriptionTag);
        TimeLineContentTag.appendChild(logoTag);

        var listTag = document.createElement("li");
        listTag.appendChild(TimeLineContentTag);

        mainTimeLineSection.appendChild(listTag);
    }   

    //timeline
    (function() {

        'use strict';
        
        var items = document.querySelectorAll(".timeline li");
        
        function isElementInViewport(el) {
            var rect = el.getBoundingClientRect();
            return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
            );
        }

        function callbackFunc() {
            for (var i = 0; i < items.length; i++) {
            if (isElementInViewport(items[i])) {
                items[i].classList.add("in-view");
            }
            }
        }

        // listen for events
        window.addEventListener("load", callbackFunc);
        window.addEventListener("resize", callbackFunc);
        window.addEventListener("scroll", callbackFunc);

    })();

    //portfolio-buttons
    $("[data-fancybox]").fancybox();     
  
   
   
    var projectCategoryList = data.project_categories;
    var mainFilterSection = document.getElementById("filters"); 
    
    var aTag = document.createElement("a");
    aTag.setAttribute("href","");
    aTag.setAttribute("data-filter","*");    
    aTag.textContent="All";
    var allCategory = document.createElement("li");
    allCategory.appendChild(aTag);
    mainFilterSection.appendChild(allCategory);

    projectCategoryList.forEach(addCategory);

    function addCategory(category){

        var aTag = document.createElement("a");
        aTag.setAttribute("href","");
        aTag.setAttribute("data-filter","."+category);
        aTag.textContent=category;        
        var allCategory = document.createElement("li");
        allCategory.appendChild(aTag);
        mainFilterSection.appendChild(allCategory);
    }  

    var aTag = document.createElement("a");
    aTag.setAttribute("href","");
    aTag.setAttribute("data-filter","None");
    aTag.className="current";
    aTag.id="mainButton";
    aTag.textContent="None";
    var allCategory = document.createElement("li");
    allCategory.appendChild(aTag);
    mainFilterSection.appendChild(allCategory)
 
    //portfolio-images
   
    var mainPortfolioContentSection = document.getElementById("portfolio-contents");
    var project_list = data.project_details;
    project_list.forEach(addProject);

    function addProject(project)
    {
        var icon_search = document.createElement("i");
        icon_search.className="fa fa-search";
        var aTag1 = document.createElement("a");
        aTag1.setAttribute("href",project.view);
        aTag1.setAttribute("title","View Image");        
        aTag1.className= "openButton";
        aTag1.setAttribute("data-fancybox","");
        aTag1.appendChild(icon_search);

        var icon_link = document.createElement("i");
        icon_link.className="fa fa-link";
        var aTag2 = document.createElement("a");
        aTag2.setAttribute("href",project.link);
        aTag2.setAttribute("target","_blank");
        aTag2.className= "projectLink";
        aTag2.appendChild(icon_link);

        var div_icons = document.createElement("div");
        div_icons.className="icons"
        div_icons.appendChild(aTag1);
        div_icons.appendChild(aTag2);

        var thumb_img = document.createElement("img");
        thumb_img.setAttribute("src",project.thumbnail);

        var div_imageOverlay = document.createElement("div");
        div_imageOverlay.className="imageOverlay";

        var div_item = document.createElement("div");
        div_item.className="item";
        div_item.appendChild(thumb_img);
        div_item.appendChild(div_icons);
        div_item.appendChild(div_imageOverlay);

        var br_tag = document.createElement("br");
        var heading_tag = document.createElement("h5");
        heading_tag.className="text-center";
        heading_tag.textContent=project.title;
        var description_tag = document.createElement("p");
        description_tag.className= "text-center project-description";
        description_tag.textContent=project.description;

        var li_tag = document.createElement("li");
        li_tag.setAttribute("onclick","");
               
        li_tag.className=project.category + " col-xs-6 col-sm-4 col-md-3 col-lg-3"
        li_tag.appendChild(div_item);
        
        li_tag.appendChild(br_tag);
        li_tag.appendChild(heading_tag);
        li_tag.appendChild(description_tag);        

        mainPortfolioContentSection.appendChild(li_tag);
    }   

    
    $(".items").isotope({
        filter: '*',
        animationsOptions: {
            duration: 1500,
            easing: 'linear',
            queue: false,            
        }
    });  


     $("#filters a").click(function() {
        $("#filters .current").removeClass("current");
        $(this).addClass("current");

        var selector = $(this).attr("data-filter");
        
         $(".items").isotope({
            filter: selector,
            animationsOptions: {
                duration: 1500,
                easing: 'linear',
                queue: false,            
            }
        });

        return false;
    });
    
    $(function() {
        document.getElementById("mainButton").click();        
    });

    const nav = $("#navigation");

});

