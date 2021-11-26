JOB_EXP_BEGIN  =  JOB_EXP_BEGIN = "06/20/16 09:00:00";

function calculateYearsOfExperience() 
{    
    var date = new Date(JOB_EXP_BEGIN); 
    var milliseconds = date.getTime();    
    var yearDifMs = Date.now() - milliseconds;
    var expDate = new Date(yearDifMs); 
    return Math.abs(expDate.getUTCFullYear() - 1970);
}

var data = {
    keywords: ["Full Stack Developer","Software Engineer","Digital Artist","Adventurer","MMA enthusiast"],
    about_me_main_text: `Hi, my name is Anugrah Kumar and I am a dedicated full stack developer with ${calculateYearsOfExperience()}+ years of demonstrated programming experience in computer software industry. Specializing in developing full stack web applications, desktop applications and automation tools. Strong background in software development, back-end engineering and computer graphics through industry experience and academic projects. Track record of high-performance in delivering high-quality, cost effective software development solutions that meet customer business requirements.`,
    about_me_sub_text:"Aside from my regular work I engage in few hobbies such as Adventure sports, MMA (Mixed Martial Arts) and Gaming. I try my best to challenge my comfort zone for personal growth. I find adventure sports to be an excellent medium in achieving my self development goals - Skydiving and Jet skiing are my favorite activities in this category. Apart from tremendous health benefits martial arts provides me the platform to focus on improving my discipline, agility, focus etc., which directly has a positive effect on my life in general. I practice two disciplines primarily Muay Thai (striking) and Brazilian jiu-jitsu (grappling) as they both are complementary of each other. You must have heard the saying - 'once a gamer, always a gamer' and I am no exception to this statement. When I am not involved in sparring with my partners, jumping out of planes or any other adventure in the real world. I am busy unlocking achievements in the virtual world.",
    skills:[
        {
            name:"Python",
            percent:90
        },
        {
            name:"C#",
            percent:90
        },
        {
            name:"Node.js",
            percent:80
        },
        {
            name:"PostgreSQL",
            percent:80
        },        
        {
            name:"React.js",
            percent:80
        },
        {
            name:"Javascript/Typescript",
            percent:75
        },
        {
            name:"MongoDB",
            percent:60
        },
        {
            name:"ASP.NET",
            percent:60
        },
        {
            name:"Angular",
            percent:60
        },
        {
            name:"Docker/Kubernetes",
            percent:50
        },        
        {
            name:"C/C++",
            percent:50
        },
    ],
    timeline_stats:[
        {
            year:"2021",
            title:"Software Engineer at Polysign",
            description:"Responsible for developing various microservices of a distributed trading application for trading variety of digital assets.",
            logo:"./images/logos/polysign.png"
        },
        {
            year:"2017",
            title:"Software Engineer at Intel Corporation",
            description:"Responsible for full stack development, debugging and maintaining web based internal tools used globally across multiple sites for packaging, testing and deploying firmware components to external customers.",
            logo:"./images/logos/intel.png"
        },
        {
            year:"2016",
            title:"Graphics Software Engineer at Intel Corporation",
            description:"Involved in developing and debugging test content for functional validation related to GPU issues across multiple platforms.",
            logo:"./images/logos/intel.png"
        },
        {
            year:"2016",
            title:"Graduated from Arizona State University",
            description:"Completed Masters in Computer science.",
            logo:"./images/logos/asu.png"
        },
        {
            year:"2015",
            title:"Graphics Software Engineer Intern at Intel Corporation",
            description:"Completed internship involving debugging and test development for Direct X based drivers.",
            logo:"./images/logos/intel.png"
        },
        {
            year:"2014",
            title:"Graduated from VIT University",
            description:"Completed Bachelors in Computer science and Engineering.",
            logo:"./images/logos/vit.png"
        },
    ],
    project_categories:["Web","Tools","Misc"],
    project_details:[
        {
            thumbnail:"./images/portfolio/eshop_thumbnail.JPG",
            view:"./images/portfolio/eshop_full.JPG",
            link:"https://anu-eshop.herokuapp.com/#/",
            category:"Web",
            title:"E-Shop",
            description:"A responsive e-commerce website using Django and React."
        },
        {
            thumbnail:"./images/portfolio/issueTracker_thumbnail.JPG",
            view:"./images/portfolio/issueTracker_full.JPG",
            link:"https://issue-tracker-fba11.firebaseapp.com/",
            category:"Web",
            title:"Issue tracker",
            description:"An issue tracking tool developed using MERN stack."
        },
        {
            thumbnail:"./images/portfolio/movieCatalog_thumbnail.JPG",
            view:"./images/portfolio/movieCatalog_full.JPG",
            link:"https://www.youtube.com/watch?v=VZvmP2l3ZCE",
            category:"Tools",
            title:"Movie Catalog Generator",
            description:"A desktop application to generate organized movies catalog based on folder contents developed using C#."
        },
        {
            thumbnail:"./images/portfolio/vit3d_thumbnail.JPG",
            view:"./images/portfolio/vit3d_full.JPG",
            link:"https://www.youtube.com/watch?v=uX-fdKqqiTQ",
            category:"Misc",
            title:"VIT Vellore 3D Walkthrough",
            description:"An user interactive walkthrough system using Unity 4.0 Game engine (C#) with a dynamic weather system and real time day-night cycle mechanism."
        },
        {
            thumbnail:"./images/portfolio/quarantine_thumbnail.jpg",
            view:"./images/portfolio/quarantine_full.jpg",
            link:"https://www.youtube.com/watch?v=Z3DYH5-oLwM",
            category:"Misc",
            title:"Quarantine- The outbreak",
            description:"A top down shooter game in 2.5 D perspective using Unity 4.0 Game engine (C#)."
        }, 
    ],
    quotes:[
        {
            quote:"If debugging is the process of removing software bugs, then programming must be the process of putting them in.",
            author:"Edsger Dijkstra"
        },
        {
            quote:"The computer was born to solve problems that did not exist before.",
            author:"Bill Gates"
        },
        {
            quote:"It's not faith in technology. It's faith in people.",
            author:"Steve Jobs"
        },
        {
            quote:"The more you know, the more you realize you know nothing.",
            author:"Socrates"
        },
        {
            quote:"Focus is a matter of deciding what things you're not going to do.",
            author:"John Carmack"
        },
        {
            quote:"If you automate a mess, you get an automated mess.",
            author:"Rod Michael"
        },
        {
            quote:"Make everything as simple as possible, but not simpler.",
            author:"Albert Einstein"
        },
        {
            quote:"BASIC is to computer programming as QWERTY is to typing.",
            author:"Seymour Papert"
        },
        {
            quote:"The more you sweat in training, the less you bleed in combat.",
            author:"Richard Marcinko"
        },
        {
            quote:"Creativity takes courage.",
            author:"Henri Matisse"
        },

    ]
}